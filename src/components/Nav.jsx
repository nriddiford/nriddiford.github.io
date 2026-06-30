import { useEffect, useState } from "react";
import { ArrowUpRight } from "lucide-react";

const links = [
  { href: "#about", label: "About" },
  { href: "#work", label: "Work" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className="sticky top-0 z-50"
      style={{
        background: scrolled ? "rgba(10,10,10,0.78)" : "transparent",
        backdropFilter: scrolled ? "blur(14px) saturate(140%)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(14px) saturate(140%)" : "none",
        borderBottom: `1px solid ${scrolled ? "var(--line)" : "transparent"}`,
        transition: "background 0.25s ease, border-color 0.25s ease, backdrop-filter 0.25s ease",
      }}
    >
      <div className="max-w-[1180px] mx-auto px-6 md:px-10 h-14 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2.5" aria-label="forthdot - home">
          <svg width="18" height="18" viewBox="0 0 240 240" aria-hidden="true">
            <circle cx="50" cy="170" r="30" fill="#EFEFEF" />
            <circle cx="95" cy="70" r="30" fill="#EFEFEF" />
            <circle cx="140" cy="170" r="30" fill="#EFEFEF" />
            <circle cx="185" cy="70" r="30" fill="var(--accent)" />
          </svg>
          <span
            style={{
              color: "var(--fg)",
              fontWeight: 600,
              fontSize: 15,
              letterSpacing: "-0.015em",
            }}
          >
            forthdot
          </span>
        </a>

        <nav className="flex items-center gap-1 md:gap-2">
          <div className="hidden md:flex items-center gap-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="quiet"
                style={{
                  fontSize: 13.5,
                  padding: "6px 12px",
                  borderRadius: 6,
                }}
              >
                {l.label}
              </a>
            ))}
          </div>
          <a
            href="mailto:nickriddiford@me.com"
            className="quiet inline-flex items-center gap-1"
            style={{
              fontSize: 13.5,
              padding: "6px 12px",
              borderRadius: 6,
              color: "var(--fg)",
            }}
          >
            Email
            <ArrowUpRight size={13} />
          </a>
        </nav>
      </div>
    </header>
  );
}
