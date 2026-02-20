import { motion } from "framer-motion";

const skills = [
  "JavaScript (ES6+)", "MongoDB", "React", "Next.js", 
  "Node.js", "PhpMyAdmin", "Java", "Python", "Tailwind CSS",
  "Express", "MySQL", "GitHub"
];

export default function Skills() {
  return (
    <section className="py-24 px-6 border-b border-white/10 bg-black text-white overflow-hidden relative">
      {/* Background Circuit Decoration */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
        <svg className="w-full h-full">
          <pattern id="skillGrid" width="100" height="100" patternUnits="userSpaceOnUse">
            <circle cx="50" cy="50" r="1" fill="#FFD700" />
            <path d="M 50 0 L 50 100 M 0 50 L 100 50" stroke="#FFD700" strokeWidth="0.5" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#skillGrid)" />
        </svg>
      </div>

      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="inline-block px-3 py-1 border border-yellow-500/30 bg-yellow-500/5 text-yellow-500 font-mono text-xs mb-4 tracking-widest uppercase">
            Arsenal.bin
          </div>
          <h2 className="text-2xl font-mono text-gray-500 uppercase tracking-[0.2em]">Technical Stack Architecture</h2>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-16">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="group relative flex items-center gap-6"
            >
              <span className="font-mono text-yellow-500/40 text-xs transition-colors group-hover:text-yellow-500">
                {String(index + 1).padStart(2, '0')}
              </span>
              <div className="h-px w-8 bg-white/10 group-hover:w-12 group-hover:bg-yellow-500/50 transition-all duration-300" />
              <h3 className="text-3xl md:text-5xl font-bold tracking-tighter group-hover:text-yellow-500 transition-all duration-300 cursor-default">
                {skill}
              </h3>
              
              {/* Terminal-style selection indicator */}
              <div className="absolute -left-4 w-1 h-0 bg-yellow-500 opacity-0 group-hover:h-full group-hover:opacity-100 transition-all duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
