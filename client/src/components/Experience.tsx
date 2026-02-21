import { motion } from "framer-motion";

export default function Experience() {
  const experiences = [
    {
      company: "Freelance",
      role: "Full Stack Developer",
      period: "2023 - Present",
      description: "Developing custom web applications for international clients using React, Node.js, and modern cloud infrastructure. Specialized in high-performance marketing sites and dashboards."
    },
    {
      company: "Tech Solutions Inc.",
      role: "Senior Frontend Engineer",
      period: "2021 - 2023",
      description: "Led a team of 4 developers in rebuilding the core product dashboard. Improved load times by 40% and implemented a comprehensive design system."
    },
    {
      company: "Digital Agency",
      role: "Web Developer",
      period: "2019 - 2021",
      description: "Collaborated with designers to deliver pixel-perfect websites for award-winning brands. Built responsive layouts and complex animations using GSAP and WebGL."
    }
  ];

  return (
    <section id="experience" className="py-24 px-6 border-b border-border bg-muted/30">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row gap-16">
          <div className="md:w-1/3">
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">EXPERIENCE</h2>
            <p className="text-muted-foreground max-w-sm">
              A curated timeline of my professional journey and the value I've delivered to teams and clients.
            </p>
          </div>

          <div className="md:w-2/3 space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative pl-8 border-l border-border hover:border-accent transition-colors"
              >
                <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 bg-background border border-border group-hover:border-accent group-hover:bg-accent transition-colors rotate-45" />
                
                <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-2">
                  <h3 className="text-2xl font-bold font-display">{exp.role}</h3>
                  <span className="font-mono text-sm text-muted-foreground bg-white dark:bg-black px-2 py-1 border border-border">
                    {exp.period}
                  </span>
                </div>
                
                <div className="text-xl text-accent mb-4 font-medium">{exp.company}</div>
                <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl">
                  {exp.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}