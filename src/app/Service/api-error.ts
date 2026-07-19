import { HttpErrorResponse } from '@angular/common/http';

/**
 * Pull a human-friendly message out of any failed HTTP call — the same rule the live-exam
 * feature uses, made shared so every component behaves identically.
 *
 * Order: the server's own message (`{ message }` or `{ Message }`) → the caller's friendly
 * fallback. Angular's raw `HttpErrorResponse.message` ("Http failure response … 404 Not Found")
 * is deliberately NEVER surfaced — that status-code text is exactly what we don't want users to see.
 *
 * @param err      the error caught from an HTTP call (any shape)
 * @param fallback what to show when the server didn't send a usable message
 */
export function apiError(err: unknown, fallback: string): string {
  const body = (err as HttpErrorResponse)?.error;

  if (body && typeof body === 'object') {
    // Server sent a JSON body with a message field (our standard shape).
    const msg = (body as any).message ?? (body as any).Message;
    if (typeof msg === 'string' && msg.trim()) return msg.trim();

    // ASP.NET model-validation shape: { errors: { field: ["msg", …] } } — surface the first.
    const errors = (body as any).errors;
    if (errors && typeof errors === 'object') {
      const first = Object.values(errors as Record<string, string[]>).flat().find(Boolean);
      if (typeof first === 'string' && first.trim()) return first.trim();
    }
  }

  // Some endpoints send the message as a bare string body.
  if (typeof body === 'string' && body.trim() && !looksLikeStatusNoise(body)) {
    return body.trim();
  }

  return fallback;
}

/** Guard against echoing raw status/HTML bodies (e.g. "404", "<html>…") back to the user. */
function looksLikeStatusNoise(s: string): boolean {
  const t = s.trim();
  return /^\d{3}$/.test(t) || t.startsWith('<');
}
