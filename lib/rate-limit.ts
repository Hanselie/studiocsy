const requests = new Map<string, number[]>();

export function rateLimit(ip: string, limit = 5, windowMs = 60_000) {
  const now = Date.now();
  const timestamps = requests.get(ip) || [];

  const recent = timestamps.filter(t => now - t < windowMs);
  recent.push(now);

  requests.set(ip, recent);

  return recent.length <= limit;
}
