export const LIMITS = {
  name: { min: 2, max: 80 },
  email: { max: 254 },
  message: { min: 10, max: 3000 },
  bodyBytes: 10_000,
  minFillMs: 2_500,
} as const;

export interface ContactInput {
  name: string;
  email: string;
  message: string;
}

export type ValidationResult =
  { ok: true; data: ContactInput } | { ok: false; error: string };

const EMAIL_RE =
  /^[^\s@<>()[\]\\,;:"]+@[^\s@<>()[\]\\,;:"]+\.[^\s@<>()[\]\\,;:"]{2,}$/;

function stripControl(value: string): string {
  return value
    .replace(/[\u0000-\u001f\u007f]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function cleanMessage(value: string): string {
  return value
    .replace(/\r\n?/g, "\n")
    .replace(/[\u0000-\u0008\u000b\u000c\u000e-\u001f\u007f]/g, "")
    .trim();
}

export function validateContact(raw: unknown): ValidationResult {
  if (typeof raw !== "object" || raw === null) {
    return { ok: false, error: "Requisição inválida." };
  }
  const { name, email, message } = raw as Record<string, unknown>;

  if (
    typeof name !== "string" ||
    typeof email !== "string" ||
    typeof message !== "string"
  ) {
    return { ok: false, error: "Preencha todos os campos." };
  }

  const cleanName = stripControl(name);
  const cleanEmail = stripControl(email).toLowerCase();
  const cleanMsg = cleanMessage(message);

  if (
    cleanName.length < LIMITS.name.min ||
    cleanName.length > LIMITS.name.max
  ) {
    return { ok: false, error: "Informe um nome válido." };
  }
  if (cleanEmail.length > LIMITS.email.max || !EMAIL_RE.test(cleanEmail)) {
    return { ok: false, error: "Informe um e-mail válido." };
  }
  if (
    cleanMsg.length < LIMITS.message.min ||
    cleanMsg.length > LIMITS.message.max
  ) {
    return {
      ok: false,
      error: `A mensagem deve ter entre ${LIMITS.message.min} e ${LIMITS.message.max} caracteres.`,
    };
  }

  return {
    ok: true,
    data: { name: cleanName, email: cleanEmail, message: cleanMsg },
  };
}
