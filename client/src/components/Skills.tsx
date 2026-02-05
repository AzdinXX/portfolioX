import { motion } from "framer-motion";

export default function Skills() {
  const skills = [
    "JavaScript (ES6+)", "TypeScript", "React", "Next.js", 
    "Node.js", "PostgreSQL", "GraphQL", "Tailwind CSS",
    "Framer Motion", "Docker", "AWS", "Git"
  ];

  return (
    <section className="py-24 px-6 border-b border-border bg-black text-white overflow-hidden">
      <div className="container mx-auto">
        <h2 className="text-2xl font-mono text-gray-400 mb-12 uppercase tracking-widest">Technical Arsenal</h2>
        
        <div className="flex flex-wrap gap-x-8 gap-y-4">
          {skills.map((skill, index) => (
            <motion.span 
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="text-4xl md:text-6xl font-display font-bold hover:text-accent transition-colors cursor-default inline-block"
            >
              {skill}
              <span className="text-gray-700 ml-8">/</span>
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
}