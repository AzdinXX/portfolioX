import { motion, useScroll, useTransform, useSpring, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const experiences = [
  {
    company: "AZICODE62 School",
    role: "Full-Stack Web Developer (JavaScript)",
    period: "2024 - 2025",
    description: "Completed intensive Full-Stack Web Developer training focused on JavaScript, React, Node.js and relational databases.",
    technologies: ["JavaScript", "React", "Node.js", "MySQL", "PhpMyAdmin"]
  },
  {
    company: "AZICODE62 School",
    role: "Desktop Application Development",
    period: "2025 - 2026",
    description: "a Junior Desktop Application Developer with experience in creating graphical user interfaces and desktop logic using Python (Tkinter) and Java (Swing).",
    technologies: ["Python", "Tkinter", "Java", "Swing"]
  },
  {
    company: "Self Study",
    role: "Web Development",
    period: "2025 - 2026",
    description: "Focused self-study in modern web development with hands-on project experience using Next.js and MongoDB, including full-stack application architecture, environment configuration, and real-world debugging.",
    technologies: ["Next.js", "MongoDB"]
  }
];

const CircuitTrace = ({ d, delay = 0, duration = 3 }: { d: string, delay?: number, duration?: number }) => (
  <motion.path
    d={d}
    fill="none"
    stroke="#FFD700"
    strokeWidth="1.5"
    strokeLinecap="round"
    opacity="0.2"
    initial={{ pathLength: 0 }}
    animate={{ pathLength: [0, 1, 1, 0], opacity: [0.1, 0.3, 0.3, 0.1] }}
    transition={{
      duration,
      delay,
      repeat: Infinity,
      ease: "easeInOut"
    }}
  />
);

export default function Experience() {
  return (
    <section id="experience" className="relative py-24 px-6 border-b border-white/10 bg-black overflow-hidden">
      {/* Circuit Board Decorations */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-20">
        <svg className="w-full h-full" viewBox="0 0 1000 1000" preserveAspectRatio="none">
          {/* Top-Left Corner Circuit */}
          <CircuitTrace d="M 0,50 L 100,50 L 150,100 L 150,200" delay={0} />
          <CircuitTrace d="M 50,0 L 50,100 L 100,150 L 200,150" delay={1} />
          
          {/* Bottom-Right Corner Circuit */}
          <CircuitTrace d="M 1000,950 L 900,950 L 850,900 L 850,800" delay={0.5} />
          <CircuitTrace d="M 950,1000 L 950,900 L 900,850 L 800,850" delay={1.5} />

          {/* Side Traces */}
          <CircuitTrace d="M 0,400 L 50,400 L 80,430 L 80,570 L 50,600 L 0,600" delay={2} duration={5} />
          <CircuitTrace d="M 1000,300 L 950,300 L 920,330 L 920,470 L 950,500 L 1000,500" delay={3} duration={6} />
          
          {/* Floating Energy Particles */}
          {[1,2,3,4,5].map((_, i) => (
            <motion.circle
              key={i}
              r="2"
              fill="#FFD700"
              initial={{ opacity: 0 }}
              animate={{ 
                opacity: [0, 1, 0],
                x: [Math.random() * 1000, Math.random() * 1000],
                y: [Math.random() * 1000, Math.random() * 1000]
              }}
              transition={{ duration: 5 + i, repeat: Infinity, ease: "linear" }}
            />
          ))}
        </svg>
      </div>

      {/* Grid Pattern Background */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
        style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '40px 40px' }} 
      />

      <div className="container mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          {/* Left Column */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="inline-block px-3 py-1 border border-yellow-500/30 bg-yellow-500/5 text-yellow-500 font-mono text-xs mb-6 tracking-widest uppercase">
                History.sys
              </div>
              <h2 className="text-4xl md:text-6xl font-bold mb-8 tracking-tighter text-white">
                EXPERIENCE
              </h2>
              <p className="text-gray-400 text-lg max-w-sm leading-relaxed">
                Tracing the professional circuitry and architectural milestones of my development career.
              </p>

              {/* Schematic Details */}
              <div className="mt-12 space-y-4 opacity-40 hidden lg:block">
                <div className="flex items-center gap-4 font-mono text-[10px] text-yellow-500">
                  <div className="w-12 h-[1px] bg-yellow-500/50" />
                  <span>VOLTAGE_STABLE</span>
                </div>
                <div className="flex items-center gap-4 font-mono text-[10px] text-yellow-500">
                  <div className="w-8 h-[1px] bg-yellow-500/50" />
                  <span>CORE_TEMP_OPTIMAL</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-2 space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="group relative p-8 bg-white/[0.02] border border-white/5 hover:border-yellow-500/20 transition-all duration-500 rounded-sm"
              >
                {/* Circuit Node Decoration */}
                <div className="absolute -left-[1px] top-8 w-[3px] h-12 bg-yellow-500 scale-y-0 group-hover:scale-y-100 transition-transform origin-top duration-500" />
                
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white group-hover:text-yellow-500 transition-colors">
                      {exp.role}
                    </h3>
                    <div className="text-lg text-yellow-500/80 font-medium font-mono">
                      {exp.company}
                    </div>
                  </div>
                  <div className="font-mono text-sm text-gray-500 bg-white/5 px-4 py-1 border border-white/10 self-start md:self-center">
                    {exp.period}
                  </div>
                </div>

                <p className="text-gray-400 text-lg leading-relaxed mb-8 max-w-3xl">
                  {exp.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 text-xs font-mono border border-white/10 bg-white/5 text-gray-400 group-hover:border-yellow-500/30 group-hover:text-yellow-500 transition-all duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
