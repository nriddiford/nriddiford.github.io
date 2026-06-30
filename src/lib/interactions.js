/**
 * Convert any hex color (#rgb, #rrggbb, or #rrggbbaa) to rgba() with a
 * caller-supplied alpha. Source alpha is ignored - we always derive a
 * fresh alpha, so this is safe for translucent brand inputs.
 */
export function withAlpha(color, alpha) {
  let h = color.replace("#", "");
  if (h.length === 3) h = h.split("").map((c) => c + c).join("");
  const r = parseInt(h.slice(0, 2), 16);
  const g = parseInt(h.slice(2, 4), 16);
  const b = parseInt(h.slice(4, 6), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

/** Drop any source alpha, returning a 6-char hex. */
export function solidHex(color) {
  const h = color.replace("#", "");
  return `#${h.slice(0, 6)}`;
}

/**
 * Pointer handler that writes the cursor's local coordinates onto the
 * element as --mx / --my so the .spotlight pseudo-element can render a
 * cursor-tracked radial glow.
 */
export const handleSpotlight = (e) => {
  const el = e.currentTarget;
  if (!el) return;
  const rect = el.getBoundingClientRect();
  el.style.setProperty("--mx", `${e.clientX - rect.left}px`);
  el.style.setProperty("--my", `${e.clientY - rect.top}px`);
};
