import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      title: "E-Commerce Dashboard",
      category: "Web Application",
      tags: ["React", "TypeScript", "Tailwind"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop"
    },
    {
      title: "Finance Tracker",
      category: "Mobile App",
      tags: ["React Native", "Firebase"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2340&auto=format&fit=crop"
    },
    {
      title: "Architecture Portfolio",
      category: "Website",
      tags: ["Next.js", "Framer Motion"],
      image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2531&auto=format&fit=crop"
    },
    {
      title: "AI Chat Interface",
      category: "SaaS Product",
      tags: ["OpenAI API", "Node.js", "Socket.io"],
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2532&auto=format&fit=crop"
    }
  ];

  return (
    <section id="projects" className="py-24 px-6 border-b border-border">
      <div className="container mx-auto">
        <div className="flex justify-between items-end mb-16">
          <h2 className="text-4xl md:text-6xl font-display font-bold">SELECTED WORKS</h2>
          <a href="#" className="hidden md:flex items-center gap-2 text-lg hover:text-accent transition-colors font-mono">
            VIEW ALL <ArrowUpRight className="w-5 h-5" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-muted mb-6 border border-border">
                <div className="absolute inset-0 bg-accent/20 opacity-0 group-hover:opacity-100 transition-opacity z-10" />
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
                />
              </div>
              
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-2xl font-bold font-display mb-2 group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground font-mono">{project.category}</p>
                </div>
                <div className="flex gap-2 flex-wrap justify-end max-w-[200px]">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-xs border border-border px-2 py-1 uppercase tracking-wider">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}