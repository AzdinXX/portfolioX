import { motion } from "framer-motion";
import { ArrowDownRight, Github, Linkedin, Mail } from "lucide-react";
import noiseTexture from "../assets/noise-texture.png";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center px-6 pt-20 overflow-hidden border-b border-border">
      {/* Texture Overlay */}
      <div 
        className="absolute inset-0 opacity-10 pointer-events-none mix-blend-overlay"
        style={{ backgroundImage: `url(${noiseTexture})` }}
      />
      
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
                className="text-6xl md:text-8xl lg:text-9xl font-display font-bold leading-[0.9] tracking-tighter mb-12"
              >
                AZDIN<br />
                AITCHATTO
              </motion.h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="max-w-xl text-lg md:text-xl text-muted-foreground leading-relaxed mb-12"
            >
              Building digital experiences with precision and purpose. 
              Focusing on scalable architecture and minimalist design systems.
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex items-center gap-6"
            >
              <a href="#contact" className="group flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 text-lg font-medium hover:bg-accent transition-colors">
                Get in touch
                <ArrowDownRight className="group-hover:translate-x-1 group-hover:translate-y-1 transition-transform" />
              </a>
              
              <div className="flex gap-4">
                <a href="#" className="p-3 border border-border hover:border-accent hover:text-accent transition-colors">
                  <Github className="w-6 h-6" />
                </a>
                <a href="#" className="p-3 border border-border hover:border-accent hover:text-accent transition-colors">
                  <Linkedin className="w-6 h-6" />
                </a>
                <a href="#" className="p-3 border border-border hover:border-accent hover:text-accent transition-colors">
                  <Mail className="w-6 h-6" />
                </a>
              </div>
            </motion.div>
          </div>

          <div className="lg:col-span-4 flex flex-col justify-end pb-12">
             <div className="border-l border-border pl-8 space-y-8">
                <div>
                  <h3 className="text-sm font-mono text-muted-foreground uppercase mb-2">Location</h3>
                  <p className="text-xl font-medium">Morocco</p>
                </div>
                <div>
                  <h3 className="text-sm font-mono text-muted-foreground uppercase mb-2">Status</h3>
                  <p className="flex items-center gap-2 text-xl font-medium text-green-600">
                    <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                    Available for work
                  </p>
                </div>
                <div>
                  <h3 className="text-sm font-mono text-muted-foreground uppercase mb-2">Expertise</h3>
                  <p className="text-xl font-medium">React, Node.js, Next.js</p>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}