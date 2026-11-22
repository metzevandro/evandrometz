import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";

/**
 * Rate limiting em duas camadas:
 *  - por IP: impede que uma única origem dispare muitos envios;
 *  - global (diário): teto de custo/abuso caso o ataque venha de muitos IPs.
 */

const PER_IP = { limit: 5, windowMs: 10 * 60 * 1000, label: "10 m" } as const;
const GLOBAL = {
  limit: 40,
  windowMs: 24 * 60 * 60 * 1000,
  label: "1 d",
} as const;

export interface LimitResult {
  allowed: boolean;
  retryAfterSec: number;
}

const hasRedis = Boolean(
  process.env.UPSTASH_REDIS_REST_URL && process.env.UPSTASH_REDIS_REST_TOKEN,
);

let upstash: { perIp: Ratelimit; global: Ratelimit } | null = null;

function getUpstash() {
  if (!hasRedis) return null;
  if (!upstash) {
    const redis = Redis.fromEnv();
    upstash = {
      perIp: new Ratelimit({
        redis,
        limiter: Ratelimit.slidingWindow(PER_IP.limit, PER_IP.label),
        prefix: "contact:ip",
      }),
      global: new Ratelimit({
        redis,
        limiter: Ratelimit.fixedWindow(GLOBAL.limit, GLOBAL.label),
        prefix: "contact:global",
      }),
    };
  }
  return upstash;
}

// ---- Fallback em memória (somente dev / best-effort) ----
const memory = new Map<string, number[]>();

function memoryHit(key: string, limit: number, windowMs: number): LimitResult {
  const now = Date.now();
  const hits = (memory.get(key) ?? []).filter((t) => now - t < windowMs);

  if (hits.length >= limit) {
    memory.set(key, hits);
    return {
      allowed: false,
      retryAfterSec: Math.ceil((windowMs - (now - hits[0])) / 1000),
    };
  }

  hits.push(now);
  memory.set(key, hits);

  // Evita crescimento ilimitado do Map.
  if (memory.size > 5_000) {
    for (const [k, v] of memory) {
      if (v.every((t) => now - t >= windowMs)) memory.delete(k);
    }
  }
  return { allowed: true, retryAfterSec: 0 };
}

export async function checkRateLimit(ip: string): Promise<LimitResult> {
  const rl = getUpstash();

  if (!rl) {
    const perIp = memoryHit(`ip:${ip}`, PER_IP.limit, PER_IP.windowMs);
    if (!perIp.allowed) return perIp;
    return memoryHit("global", GLOBAL.limit, GLOBAL.windowMs);
  }

  const ipRes = await rl.perIp.limit(ip);
  if (!ipRes.success) {
    return {
      allowed: false,
      retryAfterSec: Math.max(1, Math.ceil((ipRes.reset - Date.now()) / 1000)),
    };
  }

  const globalRes = await rl.global.limit("all");
  if (!globalRes.success) {
    return {
      allowed: false,
      retryAfterSec: Math.max(
        1,
        Math.ceil((globalRes.reset - Date.now()) / 1000),
      ),
    };
  }

  return { allowed: true, retryAfterSec: 0 };
}

export function isDistributedRateLimitEnabled() {
  return hasRedis;
}
