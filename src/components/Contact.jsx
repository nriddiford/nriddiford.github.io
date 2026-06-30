import { ArrowUpRight } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="relative">
      <div className="max-w-[1180px] mx-auto px-6 md:px-10 py-28 md:py-40">
        <div className="grid md:grid-cols-12 gap-10 md:gap-14 items-baseline">
          <div className="md:col-span-3">
            <p className="eyebrow">Contact</p>
          </div>

          <div className="md:col-span-9">
            <h2
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "clamp(2.25rem, 5vw, 3.75rem)",
                fontWeight: 400,
                letterSpacing: "-0.04em",
                lineHeight: 1.04,
                color: "var(--fg)",
                margin: 0,
                maxWidth: "20ch",
              }}
            >
              Say{" "}
              <span className="serif-italic" style={{ color: "var(--fg)" }}>
                hello
              </span>
              .
            </h2>

            <p
              style={{
                marginTop: 24,
                fontSize: "1.0625rem",
                lineHeight: 1.6,
                color: "var(--fg-muted)",
                maxWidth: "46ch",
              }}
            >
              Feedback on Jamdar or researching.io, an interesting question, or just a hello -
              I read every message.
            </p>

            <a
              href="mailto:nickriddiford@me.com"
              className="group inline-flex items-center gap-2.5"
              style={{ marginTop: 48, color: "var(--fg)" }}
            >
              <span
                className="email-link"
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "clamp(1.25rem, 2.4vw, 1.625rem)",
                  fontWeight: 400,
                  letterSpacing: "-0.02em",
                }}
              >
                nickriddiford@me.com
              </span>
              <ArrowUpRight
                size={20}
                style={{ transition: "transform 0.2s ease" }}
                className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
