const PRODUCTION_ORIGINS = [
  "https://www.evandrometz.com.br",
  "https://evandrometz.com.br",
];

function allowedOrigins(): Set<string> {
  const extra = (process.env.ALLOWED_ORIGINS ?? "")
    .split(",")
    .map((o) => o.trim())
    .filter(Boolean);
  const dev =
    process.env.NODE_ENV === "production" ? [] : ["http://localhost:3000"];
  return new Set([...PRODUCTION_ORIGINS, ...extra, ...dev]);
}

export function isAllowedOrigin(req: Request): boolean {
  const origin = req.headers.get("origin");
  return origin !== null && allowedOrigins().has(origin);
}

export function getClientIp(req: Request): string {
  return (
    req.headers.get("x-real-ip") ??
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    "unknown"
  );
}
