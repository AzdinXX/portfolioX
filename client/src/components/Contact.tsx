import { ArrowRight } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 min-h-[60vh] flex items-center">
      <div className="container mx-auto">
        <div className="max-w-4xl">
          <h2 className="text-xl font-mono text-accent mb-8 uppercase tracking-widest">
            — Let's work together
          </h2>
          
          <a 
            href="mailto:contact@azdin.dev" 
            className="group block text-5xl md:text-7xl lg:text-8xl font-display font-bold leading-tight hover:text-muted-foreground transition-colors"
          >
            HAVE A PROJECT IN MIND?
            <span className="block text-accent group-hover:text-accent/80 transition-colors">
              LET'S TALK.
            </span>
          </a>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-border pt-12">
            <div>
              <h4 className="font-mono text-sm text-muted-foreground mb-4 uppercase">Contact Details</h4>
              <p className="text-lg">azdinaitchatto@gmail.com</p>
              <p className="text-lg">+212 660 523 688</p>
            </div>
            
            <div>
              <h4 className="font-mono text-sm text-muted-foreground mb-4 uppercase">Socials</h4>
              <ul className="space-y-2">
                <li><a href="https://www.linkedin.com/in/azdin-aitchatto-93400a354/" className="text-lg hover:text-accent hover:underline">LinkedIn</a></li>
                <li><a href="https://github.com/AzdinXX" className="text-lg hover:text-accent hover:underline">GitHub</a></li>
                <li><a href="https://x.com/azdin_x" className="text-lg hover:text-accent hover:underline">X</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-mono text-sm text-muted-foreground mb-4 uppercase">Availability</h4>
              <p className="text-lg text-muted-foreground">
                Currently accepting new projects for Q4 2026.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}