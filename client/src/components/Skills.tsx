export default function Skills() {
  const skills = [
    "JavaScript (ES6+)", "TypeScript", "React", "Next.js", 
    "Node.js", "PostgreSQL", "GraphQL", "Tailwind CSS",
    "Framer Motion", "Docker", "AWS", "Git"
  ];

  return (
    <section className="py-24 px-6 border-b border-border bg-black text-white">
      <div className="container mx-auto">
        <h2 className="text-2xl font-mono text-gray-400 mb-12 uppercase tracking-widest">Technical Arsenal</h2>
        
        <div className="flex flex-wrap gap-x-8 gap-y-4">
          {skills.map((skill, index) => (
            <span 
              key={index}
              className="text-4xl md:text-6xl font-display font-bold hover:text-accent transition-colors cursor-default"
            >
              {skill}
              <span className="text-gray-700 ml-8">/</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}