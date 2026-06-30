import Logomark from "./Logomark";
import { handleSpotlight } from "../lib/interactions";

const stats = [
  { value: "2",     label: "Live products" },
  { value: "6K+",   label: "People reached" },
  { value: "2019",  label: "First shipped" },
];

export default function About() {
  return (
    <section id="about" className="relative">
      <div className="max-w-[1180px] mx-auto px-6 md:px-10 py-24 md:py-32">
        <div className="grid md:grid-cols-12 gap-10 md:gap-14 items-start">
          {/* ── Left: eyebrow + brand specimen ──────────── */}
          <div className="md:col-span-4 md:sticky md:top-24">
            <p className="eyebrow mb-8">About</p>

            <div
              onPointerMove={handleSpotlight}
              className="spotlight overflow-hidden"
              style={{
                borderRadius: 16,
                border: "1px solid var(--line)",
                background:
                  "radial-gradient(120% 80% at 30% 0%, rgba(var(--accent-rgb), 0.06), transparent 60%), var(--bg-elev)",
                padding: "40px 28px 60px",
                ["--spot-size"]: "360px",
              }}
            >
              {/* Spec corner */}
              <div
                className="absolute mono"
                style={{
                  top: 14,
                  left: 16,
                  fontSize: 10.5,
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  color: "var(--fg-subtle)",
                }}
              >
                FD / 001
              </div>
              <div
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
              </div>

              <div className="flex justify-center mt-6 mb-8">
                <Logomark size={200} animate />
              </div>

              <div className="text-center">
                <div
                  style={{
                    fontSize: 22,
                    color: "var(--fg)",
                    fontWeight: 600,
                    letterSpacing: "-0.02em",
                    lineHeight: 1,
                  }}
                >
                  forthdot
                </div>
                <div
                  className="mono"
                  style={{
                    marginTop: 10,
                    fontSize: 10.5,
                    color: "var(--fg-subtle)",
                    letterSpacing: "0.18em",
                    textTransform: "uppercase",
                  }}
                >
                  Est. 2026
                </div>
              </div>

              {/* Hairline above footer row */}
              <div
                className="absolute"
                style={{
                  left: 16,
                  right: 16,
                  bottom: 36,
                  height: 1,
                  background: "var(--line)",
                }}
              />
              <div
                className="absolute mono flex items-center gap-2"
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
                    background: "var(--accent)",
                    display: "inline-block",
                  }}
                />
                #04BF8A
              </div>
              <div
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
                00 / Brand
              </div>
            </div>
          </div>

          {/* ── Right: bio + stats ──────────────────────── */}
          <div className="md:col-span-8">
            <p
              style={{
                fontSize: "clamp(1.25rem, 2.1vw, 1.625rem)",
                lineHeight: 1.5,
                color: "var(--fg)",
                fontWeight: 400,
                letterSpacing: "-0.018em",
                maxWidth: "56ch",
                margin: 0,
              }}
            >
              I'm <span className="serif-italic">Nick Riddiford</span>, a developer and product
              designer building tools for the communities I care about. My studio,{" "}
              <span style={{ fontWeight: 600 }}>forthdot</span>, is a one-person operation focused on
              small, considered software with long shelf life.
            </p>

            <p
              style={{
                marginTop: "1.5rem",
                fontSize: "1rem",
                lineHeight: 1.7,
                color: "var(--fg-muted)",
                maxWidth: "56ch",
              }}
            >
              Both products are free for the people who use them. I work end-to-end - research,
              design, engineering, and the quiet work of keeping things alive after launch.
            </p>

            <div
              className="mt-14 grid grid-cols-3 gap-6 md:gap-10"
              style={{ maxWidth: 520 }}
            >
              {stats.map((s) => (
                <div key={s.label}>
                  <div
                    className="mono"
                    style={{
                      fontSize: "1.625rem",
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
                      marginTop: 10,
                      fontSize: 10.5,
                      color: "var(--fg-subtle)",
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      lineHeight: 1.4,
                    }}
                  >
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="hairline" />
    </section>
  );
}
