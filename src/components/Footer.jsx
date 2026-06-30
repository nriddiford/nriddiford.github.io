import { Github, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer style={{ borderTop: "1px solid var(--line)" }}>
      <div className="max-w-[1180px] mx-auto px-6 md:px-10 py-10 md:py-12">
        <div className="flex flex-col md:flex-row gap-6 md:gap-0 md:items-end md:justify-between">
          <div>
            <a href="#top" className="flex items-center gap-2.5 mb-3" aria-label="forthdot - home">
              <svg width="14" height="14" viewBox="0 0 240 240" aria-hidden="true">
                <circle cx="50" cy="170" r="30" fill="#EFEFEF" />
                <circle cx="95" cy="70" r="30" fill="#EFEFEF" />
                <circle cx="140" cy="170" r="30" fill="#EFEFEF" />
                <circle cx="185" cy="70" r="30" fill="var(--accent)" />
              </svg>
              <span
                style={{
                  color: "var(--fg)",
                  fontWeight: 600,
                  fontSize: 14,
                  letterSpacing: "-0.01em",
                }}
              >
                forthdot
              </span>
            </a>
            <p
              className="mono"
              style={{
                fontSize: 11,
                color: "var(--fg-subtle)",
                letterSpacing: "0.1em",
                margin: 0,
              }}
            >
              © {new Date().getFullYear()} - Independent studio
            </p>
          </div>

          <div className="flex items-center gap-5">
            <a
              href="https://github.com/nriddiford"
              target="_blank"
              rel="noopener noreferrer"
              className="quiet"
              aria-label="GitHub"
            >
              <Github size={16} />
            </a>
            <a href="mailto:nickriddiford@me.com" className="quiet" aria-label="Email">
              <Mail size={16} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
