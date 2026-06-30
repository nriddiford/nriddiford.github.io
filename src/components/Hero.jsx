import { ArrowUpRight } from "lucide-react";

export default function Hero() {
  return (
    <section id="top" className="relative">
      <div className="max-w-[1180px] mx-auto px-6 md:px-10 pt-24 md:pt-40 pb-20 md:pb-32">
        {/* Eyebrow */}
        <div className="rise rise-1 flex items-center gap-3 mb-12">
          <span
            aria-hidden="true"
            style={{
              width: 7,
              height: 7,
              borderRadius: "50%",
              background: "var(--accent)",
              boxShadow: "0 0 14px var(--accent)",
            }}
          />
          <span className="eyebrow">Independent software studio</span>
        </div>

        {/* Headline */}
        <h1
          className="rise rise-2"
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: "clamp(2.5rem, 7vw, 5.5rem)",
            fontWeight: 400,
            letterSpacing: "-0.04em",
            lineHeight: 1.02,
            color: "var(--fg)",
            margin: 0,
            maxWidth: "16ch",
          }}
        >
          Small,{" "}
          <span className="serif-italic" style={{ color: "var(--fg)" }}>
            useful
          </span>{" "}
          software for the people who need it.
        </h1>

        {/* Subhead */}
        <p
          className="rise rise-3"
          style={{
            marginTop: "2.25rem",
            fontSize: "clamp(1.0625rem, 1.5vw, 1.25rem)",
            lineHeight: 1.55,
            color: "var(--fg-muted)",
            maxWidth: "48ch",
            margin: "2.25rem 0 0",
          }}
        >
          <span style={{ color: "var(--fg)", fontWeight: 600 }}>forthdot</span> is the independent studio of
          {" "}<span className="serif-italic" style={{ color: "var(--fg)" }}>Nick Riddiford</span>. I design and build
          community-led products - currently <a href="#work" className="quiet" style={{ color: "var(--fg)", borderBottom: "1px solid var(--line-strong)", paddingBottom: 1 }}>Jamdar</a>
          {" "}and{" "}
          <a href="#work" className="quiet" style={{ color: "var(--fg)", borderBottom: "1px solid var(--line-strong)", paddingBottom: 1 }}>researching.io</a>.
        </p>

        {/* Actions */}
        <div className="rise rise-4 mt-10 md:mt-12 flex flex-wrap items-center gap-x-6 gap-y-4">
          <a href="#work" className="btn-primary">
            See the work
            <ArrowUpRight size={15} />
          </a>
          <a
            href="mailto:nickriddiford@me.com"
            className="quiet inline-flex items-center gap-1.5"
            style={{ fontSize: 14 }}
          >
            nickriddiford@me.com
            <ArrowUpRight size={13} />
          </a>
        </div>
      </div>

      <div className="hairline" />
    </section>
  );
}
