import { useState, useRef, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

interface GlitchProjectCardProps {
  title: string;
  category: string;
  tags: string[];
  images: string[];
  index: number;
}

const GlitchProjectCard = ({ title, category, tags, images, index }: GlitchProjectCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isGlitching, setIsGlitching] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const audioContext = useRef<AudioContext | null>(null);

  const playGlitchSound = useCallback((intensity: number) => {
    try {
      if (!audioContext.current) {
        audioContext.current = new (window.AudioContext || (window as any).webkitAudioContext)();
      }
      
      const ctx = audioContext.current;
      const gainNode = ctx.createGain();
      const filter = ctx.createBiquadFilter();

      // Create a more "digital error" sound using multiple oscillators
      const osc1 = ctx.createOscillator();
      const osc2 = ctx.createOscillator();
      
      osc1.type = 'square'; // Harsh digital feel
      osc2.type = 'sawtooth';

      const baseFreq = 40 + Math.random() * 60;
      osc1.frequency.setValueAtTime(baseFreq, ctx.currentTime);
      osc2.frequency.setValueAtTime(baseFreq * 1.5, ctx.currentTime);

      // Rapid frequency jumps for that "error" feel
      for (let i = 0; i < 5; i++) {
        const time = ctx.currentTime + i * 0.03;
        osc1.frequency.setValueAtTime(Math.random() * 1000 + 200, time);
        osc2.frequency.setValueAtTime(Math.random() * 500 + 100, time);
      }

      filter.type = 'bandpass';
      filter.frequency.setValueAtTime(1200, ctx.currentTime);
      filter.Q.setValueAtTime(10, ctx.currentTime);

      const volume = intensity * 0.012; 
      gainNode.gain.setValueAtTime(0, ctx.currentTime);
      gainNode.gain.linearRampToValueAtTime(volume, ctx.currentTime + 0.005);
      gainNode.gain.setValueAtTime(volume, ctx.currentTime + 0.08);
      gainNode.gain.linearRampToValueAtTime(0, ctx.currentTime + 0.12);

      osc1.connect(filter);
      osc2.connect(filter);
      filter.connect(gainNode);
      gainNode.connect(ctx.destination);

      osc1.start();
      osc2.start();
      osc1.stop(ctx.currentTime + 0.12);
      osc2.stop(ctx.currentTime + 0.12);
    } catch (e) {
      // Audio might be blocked
    }
  }, []);

  const startGlitchCycle = useCallback(() => {
    if (intervalRef.current) return;

    const cycle = () => {
      setIsGlitching(true);
      playGlitchSound(1.5);

      setTimeout(() => {
        setCurrentImageIndex((prev) => (prev + 1) % images.length);
        setTimeout(() => {
          setIsGlitching(false);
        }, 150);
      }, 150);
    };

    cycle();
    intervalRef.current = setInterval(cycle, 1500);
  }, [images.length, playGlitchSound]);

  const stopGlitchCycle = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    setIsGlitching(false);
    setCurrentImageIndex(0);
  }, []);

  useEffect(() => {
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  const handleMouseEnter = () => {
    setIsHovered(true);
    startGlitchCycle();
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    stopGlitchCycle();
  };

  const currentImage = images[currentImageIndex];
  const nextImage = images[(currentImageIndex + 1) % images.length];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group relative flex flex-col h-full border border-white/10 bg-black transition-all duration-500 hover:border-accent/40"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <img
          src={currentImage}
          alt={title}
          className={`absolute inset-0 h-full w-full object-cover transition-all duration-700 ${isHovered ? 'scale-105 grayscale-0' : 'grayscale'}`}
        />

        <AnimatePresence>
          {isGlitching && (
            <>
              <motion.img
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 0.6, x: 10 }}
                exit={{ opacity: 0 }}
                src={nextImage}
                alt=""
                className="absolute inset-0 h-full w-full object-cover mix-blend-screen"
                style={{ filter: "hue-rotate(-30deg) saturate(2)" }}
              />
              <motion.img
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 0.4, x: -10 }}
                exit={{ opacity: 0 }}
                src={currentImage}
                alt=""
                className="absolute inset-0 h-full w-full object-cover mix-blend-screen"
                style={{ filter: "hue-rotate(30deg) saturate(1.5)" }}
              />
              <div
                className="absolute inset-0 z-20"
                style={{ background: "linear-gradient(180deg, transparent, hsla(45, 100%, 50%, 0.05))" }}
              />
              <div className="absolute inset-0 z-30 pointer-events-none bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,rgba(255,215,0,0.05)_2px,rgba(255,215,0,0.05)_4px)]" />
            </>
          )}
        </AnimatePresence>

        {isHovered && !isGlitching && (
          <div
            className="absolute inset-0 pointer-events-none z-10"
            style={{
              background: "repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(255,215,0,0.03) 3px, rgba(255,215,0,0.03) 4px)",
            }}
          />
        )}
        
        <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-accent/40 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-accent/40 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-2xl font-bold font-display text-white group-hover:text-accent transition-colors tracking-tight uppercase">
            {title}
          </h3>
          <ArrowUpRight className="w-5 h-5 text-accent/40 group-hover:text-accent group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
        </div>
        
        <div className="flex items-center gap-4 mt-auto">
          <p className="text-accent/60 font-mono text-xs uppercase tracking-widest">{category}</p>
          <div className="flex-1 h-[px] bg-white/10" />
          <div className="flex gap-2">
            {tags.map((tag, i) => (
              <span key={`${tag}-${i}`} className="text-[10px] text-gray-500 font-mono uppercase border border-white/10 px-2 py-0.5">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const projects = [
  {
    title: "Hotel France Azilal",
    category: "Web Application",
    tags: ["React", "Node.js", "MySQL","phpmyadmin",],
    images: [
      "WhatsApp Image 2026-02-18 at 7.05.26 PM (3).jpeg",
      "WhatsApp Image 2026-02-18 at 7.05.26 PM (2).jpeg",
      "WhatsApp Image 2026-02-18 at 7.05.26 PM (1).jpeg",
    ],
  },
  {
    title: "HushBean - Social Media Beta",
    category: "Web Application",
    tags: ["React", "Next.js", "MongoDB"],
    images: [
      "brave_screenshot_localhost (2).png",
      "brave_screenshot_localhost (1).png",
      "brave_screenshot_localhost (3).png",
    ],
  },
  {
    title: "AutoVortex",
    category: "Web Application",
    tags: ["React", "Node.js", "MySQL","phpmyadmin"],
    images: [
      "brave_screenshot_localhost.png",
      "brave_screenshot_localhost (c1).png",
      "brave_screenshot_localhost (c2).png",
      "brave_screenshot_localhost (c3).png",
      "brave_screenshot_localhost (c4).png",
    ],
  },
  {
    title: "BulletinX",
    category: "SaaS Product",
    tags: ["JavaScript", "Tailwind CSS", "Bootstrap"],
    images: [
      "brave_screenshot_azdinxx.github.io.png",
      "brave_screenshot_azdinxx.github.io (1).png",
      "brave_screenshot_azdinxx.github.io (2).png",
    ],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 border-b border-border bg-black overflow-hidden relative selection:bg-accent/30">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_40%,_black_100%)] pointer-events-none" />

      <div className="container mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-block px-3 py-1 border border-accent/30 bg-accent/5 text-accent font-mono text-xs mb-4 tracking-widest uppercase">
              Selected.Works
            </div>
            <h2 className="text-4xl md:text-6xl font-bold font-display text-white tracking-tighter uppercase">Projects</h2>
          </motion.div>

          <motion.a
            href="#"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="group flex items-center gap-2 text-sm text-accent/60 hover:text-accent transition-colors font-mono tracking-widest border-b border-accent/20 pb-1"
          >
            VIEW ALL{" "}
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </motion.a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {projects.map((project, index) => (
            <GlitchProjectCard key={index} {...project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
