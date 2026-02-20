import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const technologies = [
  {
    name: "JavaScript",
    color: "#F7DF1E",
    x: 100,
    y: 100,
    icon: "/javascript.jpg",
  },
  { name: "React", color: "#61DAFB", x: 300, y: 80, icon: "/react.png" },
  { name: "Next.js", color: "#ffffff", x: 900, y: 100, icon: "/nextjs.png" },
  { name: "Node.js", color: "#339933", x: 100, y: 850, icon: "/nodejs.png" },
  { name: "MongoDB", color: "#47A248", x: 900, y: 850, icon: "/mongodb.png" },
  { name: "Python", color: "#3776AB", x: 200, y: 650, icon: "/python.png" },
  { name: "Java", color: "#007396", x: 800, y: 650, icon: "/java.png" },
  { name: "Express", color: "#ffffff", x: 500, y: 920, icon: "/express.png" },
  { name: "MySQL", color: "#4479A1", x: 70, y: 480, icon: "/mysql.png" },
  {
    name: "PhpMyAdmin",
    color: "#6C78AF",
    x: 930,
    y: 480,
    icon: "/phpmyadmin.png",
  },
  {
    name: "Tailwind",
    color: "#06B6D4",
    x: 700,
    y: 80,
    icon: "/tailwindcss.png",
  },
  { name: "GitHub", color: "#ffffff", x: 500, y: 60, icon: "/github.png" },
];

const TechNode = ({
  tech,
  delay,
}: {
  tech: (typeof technologies)[0];
  delay: number;
}) => {
  const [isGlitching, setIsGlitching] = useState(false);

  useEffect(() => {
    const interval = setInterval(
      () => {
        if (Math.random() > 0.9) {
          setIsGlitching(true);
          setTimeout(() => setIsGlitching(false), 150 + Math.random() * 200);
        }
      },
      2000 + Math.random() * 3000,
    );
    return () => clearInterval(interval);
  }, []);

  return (
    <foreignObject x={tech.x - 45} y={tech.y - 45} width="90" height="110">
      <div className="flex flex-col items-center justify-center w-full h-full overflow-visible">
        <motion.div
          initial={{ opacity: 0, scale: 0.3 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay, duration: 0.6, type: "spring", bounce: 0.4 }}
          className="relative group flex flex-col items-center"
        >
          <div
            className={cn(
              "w-14 h-14 p-2 rounded-xl border backdrop-blur-md transition-all duration-300 relative",
              isGlitching
                ? "translate-x-1 skew-x-12 border-wire shadow-[0_0_15px_hsl(45,100%,50%,0.4)]"
                : "border-muted bg-card",
            )}
          >
            <img
              src={tech.icon}
              alt={tech.name}
              className={cn(
                "w-full h-full object-contain",
                isGlitching && "invert sepia saturate-[5] hue-rotate-180",
              )}
              style={{
                filter: isGlitching
                  ? undefined
                  : `drop-shadow(0 0 6px ${tech.color}55)`,
              }}
            />
            {isGlitching && (
              <>
                <div className="absolute inset-0 bg-wire/10 mix-blend-overlay animate-pulse rounded-xl" />
                <div
                  className="absolute inset-0 rounded-xl"
                  style={{
                    background: `linear-gradient(transparent 30%, ${tech.color}22 50%, transparent 70%)`,
                    animation: "scan-line 0.3s linear",
                  }}
                />
              </>
            )}
          </div>

          <span
            className={cn(
              "mt-1.5 font-mono text-[9px] font-bold tracking-tighter uppercase transition-all duration-150",
              isGlitching ? "text-wire scale-110" : "text-muted-foreground",
            )}
          >
            {isGlitching
              ? "ERR_0x" +
                Math.floor(Math.random() * 99)
                  .toString()
                  .padStart(2, "0")
              : tech.name}
          </span>
        </motion.div>
      </div>
    </foreignObject>
  );
};

// Scrolling wire component that follows you down
const ScrollWire = ({
  startX,
  startY,
  direction,
  scrollYProgress,
}: {
  startX: number;
  startY: number;
  direction: "left" | "right";
  scrollYProgress: any;
}) => {
  const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const endX = direction === "left" ? startX - 400 : startX + 400;

  const d = `M ${startX},${startY} L ${startX},${startY + 300} L ${endX},${startY + 500} L ${endX},${startY + 900}`;

  return (
    <motion.path
      d={d}
      fill="none"
      stroke="hsl(45, 100%, 50%)"
      strokeWidth="2"
      strokeLinecap="round"
      style={{ pathLength }}
      opacity={0.6}
      filter="url(#neon-glow)"
    />
  );
};

export default function CircuitBoard() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const cpuX = 500;
  const cpuY = 480;

  const generateTraces = () => {
    const paths: { d: string; isMain: boolean }[] = [];
    technologies.forEach((tech) => {
      for (let offset = -8; offset <= 8; offset += 8) {
        const startX = cpuX + (tech.x > cpuX ? 130 : tech.x < cpuX ? -130 : 0);
        const startY =
          cpuY + (tech.y > cpuY ? 50 : tech.y < cpuY ? -50 : 0) + offset;
        const midX = startX + (tech.x - startX) * 0.5;
        const midY = startY;
        paths.push({
          d: `M ${startX},${startY} L ${midX},${midY} L ${tech.x},${tech.y + offset}`,
          isMain: offset === 0,
        });
      }
    });
    return paths;
  };

  const traces = generateTraces();

  // Extended background wires spanning the whole section
  const bgWires = [
    "M 0,50 L 200,50 L 200,200 L 500,200 L 500,50 L 1000,50",
    "M 1000,150 L 800,150 L 800,300 L 600,300 L 600,150 L 300,150 L 300,0",
    "M 0,950 L 150,950 L 150,700 L 400,700 L 400,960",
    "M 1000,900 L 850,900 L 850,750 L 650,750 L 650,960",
    "M 50,0 L 50,300 L 0,300",
    "M 950,0 L 950,250 L 1000,250",
    "M 0,500 L 40,500 L 40,700 L 0,700",
    "M 1000,400 L 960,400 L 960,600 L 1000,600",
    "M 200,960 L 200,800 L 350,800 L 350,960",
    "M 700,960 L 700,800 L 800,800 L 800,960",
  ];

  return (
    <section
      ref={containerRef}
      className="relative min-h-[200vh] bg-background overflow-hidden flex flex-col items-center justify-start"
    >
      {/* Dot grid background */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "radial-gradient(hsl(var(--dot-grid)) 0.5px, transparent 0.5px)",
            backgroundSize: "24px 24px",
          }}
        />
      </div>

      {/* Radial vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_30%,_hsl(0,0%,0%)_100%)] z-[1]" />

      {/* Scan line overlay */}
      <div className="absolute inset-0 pointer-events-none z-[2] overflow-hidden opacity-[0.03]">
        <div className="w-full h-16 bg-gradient-to-b from-transparent via-wire to-transparent scan-line" />
      </div>

      {/* Main SVG Circuit Board */}
      <motion.div
        className="w-full max-w-[95vw] z-10 sticky top-0 pt-10"
        style={{ minHeight: "100vh" }}
      >
        <svg
          viewBox="0 0 1000 980"
          className="w-full h-auto"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <filter id="neon-glow">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
            <filter id="heavy-glow">
              <feGaussianBlur stdDeviation="6" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
            <linearGradient id="trace-grad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop
                offset="0%"
                stopColor="hsl(45,100%,50%)"
                stopOpacity="0.15"
              />
              <stop offset="50%" stopColor="hsl(45,100%,50%)" stopOpacity="1" />
              <stop
                offset="100%"
                stopColor="hsl(45,100%,50%)"
                stopOpacity="0.15"
              />
            </linearGradient>
          </defs>

          {/* Extended Background Wires */}
          {bgWires.map((d, i) => (
            <motion.path
              key={`bg-${i}`}
              d={d}
              fill="none"
              stroke="hsl(45,100%,50%)"
              strokeWidth="1"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{
                pathLength: [0, 1, 1, 0],
                opacity: [0, 0.15, 0.15, 0],
              }}
              transition={{
                duration: 4 + i * 0.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 1.5,
              }}
            />
          ))}

          {/* Scroll-following wires */}
          <ScrollWire
            startX={200}
            startY={920}
            direction="left"
            scrollYProgress={scrollYProgress}
          />
          <ScrollWire
            startX={800}
            startY={920}
            direction="right"
            scrollYProgress={scrollYProgress}
          />
          <ScrollWire
            startX={500}
            startY={940}
            direction="left"
            scrollYProgress={scrollYProgress}
          />

          {/* Trace lines to logos */}
          {traces.map((trace, i) => (
            <g key={`trace-${i}`}>
              <path
                d={trace.d}
                fill="none"
                stroke="hsl(0,0%,8%)"
                strokeWidth={trace.isMain ? "2" : "1"}
              />
              <motion.path
                d={trace.d}
                fill="none"
                stroke="url(#trace-grad)"
                strokeWidth={trace.isMain ? "2.5" : "1"}
                strokeLinecap="round"
                filter="url(#neon-glow)"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 1.5,
                  delay: i * 0.015,
                  ease: "easeOut",
                }}
              />
              {trace.isMain && (
                <circle
                  r="2.5"
                  fill="hsl(45,100%,50%)"
                  filter="url(#neon-glow)"
                >
                  <animateMotion
                    dur={`${2.5 + (i % 4)}s`}
                    repeatCount="indefinite"
                    path={trace.d}
                  />
                </circle>
              )}
            </g>
          ))}

          {/* CPU Core / Central Logo */}
          <g transform={`translate(${cpuX}, ${cpuY})`}>
            <motion.rect
              initial={{ scale: 0.5, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, type: "spring" }}
              x="-130"
              y="-130"
              width="260"
              height="260"
              fill="hsl(0,0%,2%)"
              stroke="hsl(45,100%,50%)"
              strokeWidth="3"
              rx="12"
              filter="url(#heavy-glow)"
            />
            {/* Inner border */}
            <rect
              x="-115"
              y="-115"
              width="230"
              height="230"
              fill="none"
              stroke="hsl(0,0%,10%)"
              strokeWidth="1"
              rx="6"
            />
            {/* CPU pin lines */}
            {[-100, -70, -40, -10, 20, 50, 80, 100].map((pos) => (
              <g key={`pin-${pos}`}>
                <line
                  x1={pos}
                  y1="-130"
                  x2={pos}
                  y2="-145"
                  stroke="hsl(45,100%,50%)"
                  strokeWidth="2"
                  opacity="0.5"
                />
                <line
                  x1={pos}
                  y1="130"
                  x2={pos}
                  y2="145"
                  stroke="hsl(45,100%,50%)"
                  strokeWidth="2"
                  opacity="0.5"
                />
                <line
                  x1="-130"
                  y1={pos}
                  x2="-145"
                  y2={pos}
                  stroke="hsl(45,100%,50%)"
                  strokeWidth="2"
                  opacity="0.5"
                />
                <line
                  x1="130"
                  y1={pos}
                  x2="145"
                  y2={pos}
                  stroke="hsl(45,100%,50%)"
                  strokeWidth="2"
                  opacity="0.5"
                />
              </g>
            ))}
            {/* Logo */}
            <image
              href="/azicode-logo.png"
              x="-95"
              y="-95"
              width="190"
              height="190"
            />
            {/* Glitch overlay on CPU */}
            <motion.rect
              animate={{ opacity: [0, 0.08, 0], x: [0, 3, -3, 0] }}
              transition={{ duration: 0.3, repeat: Infinity, repeatDelay: 4 }}
              x="-130"
              y="-130"
              width="260"
              height="260"
              fill="hsl(45,100%,50%)"
              rx="12"
              className="pointer-events-none"
            />
          </g>

          {/* Tech Nodes */}
          {technologies.map((tech, i) => (
            <TechNode key={tech.name} tech={tech} delay={i * 0.06} />
          ))}
        </svg>
      </motion.div>
    </section>
  );
}
