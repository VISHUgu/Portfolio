export function reportLovableError(error: unknown, _context?: Record<string, unknown>) {
  console.warn("Lovable error report:", error, _context ?? {});
}
