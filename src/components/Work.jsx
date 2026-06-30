import ProjectCard from "./ProjectCard";

const projects = [
  {
    index: "01",
    title: "Jamdar",
    year: "2025",
    role: "Founder · Design · Developer",
    tagline: "A community platform connecting musicians in their local area.",
    description:
      "Jamdar makes it easy to find jam buddies, discover local music events, and build your music network - not just a platform, your local music map.",
    features: [
      "Interactive map of musicians near you",
      "Filter by instrument, genre, and skill level",
      "Direct messaging and jam-session planning",
      "Installable PWA with offline support",
    ],
    stats: [
      { value: "3K+", label: "Musicians" },
      { value: "34", label: "Cities" },
      { value: "Free", label: "for all" },
    ],
    logoSrc: "/images/jamdar-logo.png",
    websiteUrl: "https://jamdar.app",
    githubUrl: "https://github.com/nriddiford/jamjar",
    accent: "#fefb79b2",
  },
  {
    index: "02",
    title: "researching.io",
    year: "2019",
    role: "Founder · Design · Developer",
    tagline: "Career transitions for PhDs and postdocs leaving academia.",
    description:
      "An international network connecting early-career researchers with mentors who've moved into industry - alongside a job board, skills database, and company career fairs.",
    features: [
      "Mentor matching across 40+ industries",
      "Career advice from former academics",
      "Curated job board and company fairs",
      "Free for mentees, mentors, and partner companies",
    ],
    stats: [
      { value: "3K+", label: "Researchers" },
      { value: "500+", label: "Mentors" },
      { value: "Free", label: "for all" },
    ],
    logoSrc: "/images/researching-logo.svg",
    websiteUrl: "https://www.researching.io",
    githubUrl: "https://github.com/nriddiford/researching",
    accent: "#4bb2f9",
  },
];

export default function Work() {
  return (
    <section id="work" className="relative">
      <div className="max-w-[1180px] mx-auto px-6 md:px-10 pt-20 md:pt-28">
        <div className="grid md:grid-cols-12 gap-10 md:gap-14 items-baseline">
          <div className="md:col-span-3">
            <p className="eyebrow">Selected work</p>
          </div>
          <div className="md:col-span-9">
            <p
              style={{
                fontSize: "clamp(1.375rem, 2.6vw, 1.875rem)",
                lineHeight: 1.25,
                color: "var(--fg)",
                fontWeight: 400,
                letterSpacing: "-0.02em",
                maxWidth: "34ch",
                margin: 0,
              }}
            >
              Two products. Both live, both free, both built to last.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-[1180px] mx-auto px-6 md:px-10">
        {projects.map((p, i) => (
          <ProjectCard
            key={p.title}
            {...p}
            total={projects.length}
            isLast={i === projects.length - 1}
          />
        ))}
      </div>

      <div className="hairline" />
    </section>
  );
}
