const DOTS = [
  { id: "bl", x: 50,  y: 170 },
  { id: "tl", x: 95,  y: 70  },
  { id: "br", x: 140, y: 170 },
  { id: "tr", x: 185, y: 70, accent: true },
];

export default function Logomark({ size = 220, animate = true }) {
  const scale = size / 240;
  const diameter = 60 * scale;

  return (
    <div
      role="img"
      aria-label="forthdot mark"
      className={`logomark${animate ? " is-animated" : ""}`}
      style={{ width: size, height: size, position: "relative" }}
    >
      {DOTS.map((d) => (
        <span
          key={d.id}
          data-dot={d.id}
          aria-hidden="true"
          style={{
            position: "absolute",
            left: (d.x - 30) * scale,
            top:  (d.y - 30) * scale,
            width:  diameter,
            height: diameter,
            borderRadius: "50%",
            background: d.accent ? "var(--accent)" : "#EFEFEF",
          }}
        />
      ))}
    </div>
  );
}
