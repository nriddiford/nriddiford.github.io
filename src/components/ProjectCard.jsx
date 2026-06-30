import { ArrowUpRight, Github } from "lucide-react";
import { handleSpotlight, withAlpha, solidHex } from "../lib/interactions";

export default function ProjectCard({
  index,
  total,
  title,
  year,
  role,
  tagline,
  description,
  features,
  stats,
  logoSrc,
  websiteUrl,
  githubUrl,
  accent = "var(--accent)",
  isLast,
}) {
  const accentBase = solidHex(accent);
  const domain = (() => {
    try { return new URL(websiteUrl).hostname.replace(/^www\./, ""); }
    catch { return ""; }
  })();

  return (
    <article
      className="grid md:grid-cols-12 gap-10 md:gap-14 py-16 md:py-24"
      style={isLast ? {} : { borderBottom: "1px solid var(--line)" }}
    >
      {/* ── Left: meta + visual ─────────────────────────── */}
      <div className="md:col-span-5">
        <div className="flex items-center gap-3 mb-6">
          <span className="mono" style={{ fontSize: 12, color: "var(--fg-subtle)", letterSpacing: "0.04em" }}>
            {index} / {String(total).padStart(2, "0")}
          </span>
          <span style={{ width: 16, height: 1, background: "var(--line-strong)" }} aria-hidden="true" />
          <span className="mono" style={{ fontSize: 12, color: "var(--fg-subtle)", letterSpacing: "0.04em" }}>
            {year}
          </span>
        </div>

        <a
          href={websiteUrl}
          target="_blank"
          rel="noopener noreferrer"
          onPointerMove={handleSpotlight}
          className="group spotlight block overflow-hidden"
          style={{
            aspectRatio: "5 / 4",
            borderRadius: 14,
            border: "1px solid var(--line)",
            background: `radial-gradient(120% 90% at 20% 0%, ${withAlpha(accentBase, 0.10)}, transparent 55%), var(--bg-elev)`,
            transition: "border-color 0.3s ease",
            ["--spot-color"]: withAlpha(accentBase, 0.16),
            ["--spot-size"]: "320px",
          }}
        >
          {/* TL - domain (lowercase, no uppercase transform) */}
          <span
            className="absolute mono"
            style={{
              top: 14,
              left: 16,
              fontSize: 10.5,
              letterSpacing: "0.06em",
              color: "var(--fg-subtle)",
            }}
          >
            {domain}
          </span>

          {/* TR - kind */}
          <span
            className="absolute mono"
            style={{
              top: 14,
              right: 16,
              fontSize: 10.5,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "var(--fg-subtle)",
            }}
          >
            Logomark
          </span>

          {/* Logo */}
          <div className="absolute inset-0 flex items-center justify-center px-10">
            {logoSrc?.endsWith(".svg") ? (
              <svg viewBox="0 0 120 80" style={{ width: "62%", maxWidth: 280 }}>
                <text
                  x="50%"
                  y="62"
                  textAnchor="middle"
                  fontFamily="'Geist', sans-serif"
                  fontWeight="300"
                  fontSize="64"
                  letterSpacing="-2"
                >
                  <tspan fill={accent}>[</tspan>
                  <tspan fill="#ededed">re</tspan>
                  <tspan fill={accent}>]</tspan>
                </text>
              </svg>
            ) : (
              <img
                src={logoSrc}
                alt={`${title} logo`}
                style={{ width: "62%", maxWidth: 240, objectFit: "contain" }}
              />
            )}
          </div>

          {/* Hairline above footer row */}
          <span
            aria-hidden="true"
            className="absolute"
            style={{
              left: 16,
              right: 16,
              bottom: 36,
              height: 1,
              background: "var(--line)",
            }}
          />

          {/* BL - swatch + hex */}
          <span
            className="absolute mono inline-flex items-center gap-2"
            style={{
              bottom: 14,
              left: 16,
              fontSize: 10.5,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "var(--fg-subtle)",
            }}
          >
            <span
              aria-hidden="true"
              style={{
                width: 7,
                height: 7,
                borderRadius: "50%",
                background: accent,
                display: "inline-block",
                boxShadow: `0 0 10px ${withAlpha(accentBase, 0.45)}`,
              }}
            />
            {accent.toUpperCase()}
          </span>

          {/* BR - index, swaps to Visit on hover */}
          <span
            className="absolute mono"
            style={{
              bottom: 14,
              right: 16,
              fontSize: 10.5,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "var(--fg-subtle)",
            }}
          >
            <span className="inline-flex items-center gap-1 transition-opacity duration-200 group-hover:opacity-0">
              {index} / Product
            </span>
            <span
              className="absolute inset-0 inline-flex items-center justify-end gap-1 opacity-0 transition-opacity duration-200 group-hover:opacity-100"
              style={{ color: "var(--fg)" }}
            >
              Visit
              <ArrowUpRight size={12} />
            </span>
          </span>
        </a>
      </div>

      {/* ── Right: content ──────────────────────────────── */}
      <div className="md:col-span-7">
        <h2
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: "clamp(2rem, 4.5vw, 3.25rem)",
            fontWeight: 400,
            letterSpacing: "-0.035em",
            lineHeight: 1.04,
            color: "var(--fg)",
            margin: 0,
          }}
        >
          {title}
        </h2>

        <p
          className="mono"
          style={{
            marginTop: 12,
            fontSize: 11.5,
            color: "var(--fg-subtle)",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
          }}
        >
          {role}
        </p>

        <p
          style={{
            marginTop: 28,
            fontSize: "1.125rem",
            lineHeight: 1.45,
            color: "var(--fg)",
            letterSpacing: "-0.015em",
            maxWidth: "44ch",
          }}
        >
          {tagline}
        </p>

        <p
          style={{
            marginTop: 16,
            fontSize: "0.9625rem",
            lineHeight: 1.65,
            color: "var(--fg-muted)",
            maxWidth: "54ch",
          }}
        >
          {description}
        </p>

        {/* Stats */}
        {stats?.length > 0 && (
          <div className="mt-10 flex flex-wrap gap-x-12 gap-y-6">
            {stats.map((s) => (
              <div key={s.label}>
                <div
                  className="mono"
                  style={{
                    fontSize: "1.25rem",
                    color: "var(--fg)",
                    fontWeight: 500,
                    letterSpacing: "-0.025em",
                    lineHeight: 1,
                  }}
                >
                  {s.value}
                </div>
                <div
                  className="mono"
                  style={{
                    marginTop: 8,
                    fontSize: 10,
                    color: "var(--fg-subtle)",
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                  }}
                >
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Features */}
        <ul
          className="mt-10"
          style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gap: 12 }}
        >
          {features.map((f) => (
            <li
              key={f}
              style={{
                display: "flex",
                gap: 14,
                color: "var(--fg-muted)",
                fontSize: "0.9375rem",
                lineHeight: 1.55,
              }}
            >
              <span
                className="mono shrink-0"
                style={{ color: accentBase, fontSize: 12, paddingTop: 4, opacity: 0.9 }}
                aria-hidden="true"
              >
                ＋
              </span>
              <span>{f}</span>
            </li>
          ))}
        </ul>

        {/* Actions */}
        <div className="mt-12 flex flex-wrap items-center gap-x-6 gap-y-4">
          <a
            href={websiteUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Visit {title}
            <ArrowUpRight size={15} />
          </a>
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="quiet inline-flex items-center gap-2"
              style={{ fontSize: 14 }}
            >
              <Github size={14} />
              Source
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
