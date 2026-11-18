import { Resend } from "resend";
import { ContactEmail } from "@/components/mail/ContactEmail";
import { LIMITS, validateContact } from "@/lib/security/contact-schema";
import { checkRateLimit } from "@/lib/security/rate-limit";
import { getClientIp, isAllowedOrigin } from "@/lib/security/request";
import { verifyTurnstile } from "@/lib/security/turnstile";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

function json(body: unknown, status: number, headers?: HeadersInit) {
  return Response.json(body, {
    status,
    headers: { "Cache-Control": "no-store", ...headers },
  });
}

export async function POST(req: Request) {
  if (!isAllowedOrigin(req)) {
    return json({ error: "Origem não permitida." }, 403);
  }

  if (!req.headers.get("content-type")?.includes("application/json")) {
    return json({ error: "Content-Type inválido." }, 415);
  }
  const declared = Number(req.headers.get("content-length") ?? 0);
  if (declared > LIMITS.bodyBytes) {
    return json({ error: "Requisição grande demais." }, 413);
  }

  const ip = getClientIp(req);
  const limit = await checkRateLimit(ip).catch(() => null);
  if (limit && !limit.allowed) {
    return json(
      { error: "Muitas tentativas. Tente novamente mais tarde." },
      429,
      { "Retry-After": String(limit.retryAfterSec) },
    );
  }

  let payload: Record<string, unknown>;
  try {
    const text = await req.text();
    if (text.length > LIMITS.bodyBytes) {
      return json({ error: "Requisição grande demais." }, 413);
    }
    payload = JSON.parse(text);
  } catch {
    return json({ error: "JSON inválido." }, 400);
  }
  if (typeof payload !== "object" || payload === null) {
    return json({ error: "Requisição inválida." }, 400);
  }

  if (typeof payload.website === "string" && payload.website.length > 0) {
    return json({ ok: true }, 200);
  }

  const startedAt = Number(payload.startedAt);
  if (!Number.isFinite(startedAt) || Date.now() - startedAt < LIMITS.minFillMs) {
    return json({ error: "Envio rápido demais. Tente novamente." }, 400);
  }

  if (!(await verifyTurnstile(payload.turnstileToken, ip))) {
    return json({ error: "Falha na verificação anti-robô." }, 400);
  }

  const parsed = validateContact(payload);
  if (!parsed.ok) {
    return json({ error: parsed.error }, 422);
  }
  const { name, email, message } = parsed.data;

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("[contact] RESEND_API_KEY não configurada");
    return json({ error: "Serviço de e-mail indisponível." }, 500);
  }

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from:
        process.env.CONTACT_FROM_EMAIL ?? "Portfólio <onboarding@resend.dev>",
      to: [process.env.CONTACT_TO_EMAIL ?? "evandro.metz@outlook.com"],
      replyTo: email,
      subject: `Contato pelo portfólio: ${name}`,
      react: ContactEmail({ name, email, message }),
    });

    if (error) {
      console.error("[contact] Resend:", error.name, error.message);
      return json({ error: "Não foi possível enviar agora." }, 502);
    }
    return json({ ok: true }, 200);
  } catch (err) {
    console.error("[contact] falha inesperada:", err);
    return json({ error: "Não foi possível enviar agora." }, 500);
  }
}

export function GET() {
  return json({ error: "Método não permitido." }, 405, { Allow: "POST" });
}
