import { motion } from "framer-motion";
import { ArrowDownRight, Github, Linkedin, Mail } from "lucide-react";
import noiseTexture from "../assets/noise-texture.png";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center px-6 pt-20 overflow-hidden border-b border-border bg-black">
      {/* Texture Overlay */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none mix-blend-overlay"
        style={{ backgroundImage: `url(${noiseTexture})` }}
      />

      {/* Grid Rays Container */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-20">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={`h-ray-${i}`}
            initial={{ left: "-100%" }}
            animate={{ left: "100%" }}
            transition={{
              duration: 4 + Math.random() * 4,
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 5,
            }}
            style={{ top: `${(i + 1) * 10}%` }}
            className="absolute h-[1px] w-full bg-gradient-to-r from-transparent via-accent to-transparent"
          />
        ))}
        {[...Array(10)].map((_, i) => (
          <motion.div
            initial={{ y: "-120%" }}
            animate={{ y: "120%" }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute left-[-1px] top-0 w-[1px] h-1/3 
             bg-gradient-to-b from-transparent via-accent to-transparent z-20"
          />
        ))}
      </div>

      {/* Radiant Circuit Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-30">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <filter id="glow">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* Circuit Path 1 */}
          <motion.path
            d="M 100,-200 L 100,200 L 300,400 L 800,400 L 800,1000"
            fill="none"
            stroke="hsl(var(--accent))"
            strokeWidth="6"
            filter="url(#glow)"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: [0, 1, 1, 0] }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "linear",
            }}
          />
          <motion.path
            d="M 100,-200 L 100,200 L 300,400 L 800,400 L 800,1000"
            fill="none"
            stroke="black"
            strokeWidth="1.5"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.6 }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "linear",
            }}
          />

          {/* Circuit Path 2 */}
          <motion.path
            d="M -200,600 L 200,600 L 400,800 L 400,1400"
            fill="none"
            stroke="hsl(var(--accent))"
            strokeWidth="10"
            filter="url(#glow)"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: [0, 1, 1, 0] }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "linear",
              delay: 2,
            }}
          />
          <motion.path
            d="M -200,600 L 200,600 L 400,800 L 400,1400"
            fill="none"
            stroke="black"
            strokeWidth="2.5"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.7 }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "linear",
              delay: 2,
            }}
          />

          {/* Circuit Path 3 */}
          <motion.path
            d="M 1400,0 L 800,600 L 200,1200"
            fill="none"
            stroke="hsl(var(--accent))"
            strokeWidth="5"
            filter="url(#glow)"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: [0, 1, 1, 0] }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "linear",
              delay: 4,
            }}
          />
          <motion.path
            d="M 1400,0 L 800,600 L 200,1200"
            fill="none"
            stroke="black"
            strokeWidth="1.2"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.5 }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "linear",
              delay: 4,
            }}
          />

          {/* Additional Path 4 */}
          <motion.path
            d="M 400,-100 L 400,100 L 600,300 L 1200,300 L 1600,700"
            fill="none"
            stroke="hsl(var(--accent))"
            strokeWidth="3"
            filter="url(#glow)"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: [0, 0.8, 0.8, 0] }}
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: "linear",
              delay: 1,
            }}
          />
          <motion.path
            d="M 400,-100 L 400,100 L 600,300 L 1200,300 L 1600,700"
            fill="none"
            stroke="black"
            strokeWidth="0.8"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.4 }}
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: "linear",
              delay: 1,
            }}
          />

          {/* Additional Path 5 */}
          <motion.path
            d="M 1500,800 L 1100,800 L 900,1000 L 900,1500"
            fill="none"
            stroke="hsl(var(--accent))"
            strokeWidth="4"
            filter="url(#glow)"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: [0, 0.7, 0.7, 0] }}
            transition={{
              duration: 14,
              repeat: Infinity,
              ease: "linear",
              delay: 6,
            }}
          />
          <motion.path
            d="M 1500,800 L 1100,800 L 900,1000 L 900,1500"
            fill="none"
            stroke="black"
            strokeWidth="1"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.5 }}
            transition={{
              duration: 14,
              repeat: Infinity,
              ease: "linear",
              delay: 6,
            }}
          />
        </svg>
      </div>

      <div className="container mx-auto z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-8">
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <motion.h2
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="text-xl md:text-2xl font-mono text-accent mb-6 uppercase tracking-widest"
              >
                — Full Stack Developer
              </motion.h2>
              <motion.h1
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
                className="text-6xl md:text-8xl lg:text-9xl font-display font-bold leading-[0.9] tracking-tighter mb-12 mix-blend-difference drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]"
              >
                AZDIN
                <br />
                AITCHATTO
              </motion.h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="max-w-xl text-lg md:text-xl text-muted-foreground leading-relaxed mb-12"
            >
              Full-Stack Web Developer passionate about creating modern applications, front-end and back-end. I transform ideas into dynamic and secure websites using JavaScript,
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex items-center gap-6"
            >
              <a
                href="#contact"
                className="group flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 text-lg font-medium hover:bg-accent transition-colors"
              >
                Get in touch
                <ArrowDownRight className="group-hover:translate-x-1 group-hover:translate-y-1 transition-transform" />
              </a>

              <div className="flex gap-4">
                <a
                  href="https://github.com/AzdinXX"
                  className="p-3 border border-border hover:border-accent hover:text-accent transition-colors"
                >
                  <Github className="w-6 h-6" />
                </a>
                <a
                  href="https://www.linkedin.com/in/azdin-aitchatto-93400a354/"
                  className="p-3 border border-border hover:border-accent hover:text-accent transition-colors"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
                <a
                  href="mailto:azdinaitchatto@gmail.com"
                  className="p-3 border border-border hover:border-accent hover:text-accent transition-colors"
                >
                  <Mail className="w-6 h-6" />
                </a>
              </div>
            </motion.div>
          </div>

          <div className="lg:col-span-4 flex flex-col justify-end pb-12">
            <div className="border-l border-border pl-8 space-y-8 relative overflow-hidden group/rays">
              {/* Yellow Ray Animation */}
              <div className="absolute left-[-1px] top-0 w-[1px] h-full bg-accent/20" />
              <motion.div
                initial={{ top: "-100%" }}
                animate={{ top: "100%" }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear",
                  delay: 0.5,
                }}
                className="absolute left-[-1px] w-[1px] h-1/3 bg-gradient-to-b from-transparent via-accent to-transparent z-20"
              />

              <div className="relative">
                <h3 className="text-sm font-mono text-muted-foreground uppercase mb-2">
                  Location
                </h3>
                <p className="text-xl font-medium">Morocco</p>
              </div>
              <div className="relative">
                <h3 className="text-sm font-mono text-muted-foreground uppercase mb-2">
                  Status
                </h3>
                <p className="flex items-center gap-2 text-xl font-medium text-green-600">
                  <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                  Available for work
                </p>
              </div>
              <div className="relative">
                <h3 className="text-sm font-mono text-muted-foreground uppercase mb-2">
                  Expertise
                </h3>
                <p className="text-xl font-medium">React, Node.js, Next.js</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
