import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import CircuitBoard from "@/components/CircuitBoard";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-accent selection:text-white grid-bg">
      <Navigation />
      <main>
        <Hero />
        <Experience />
        <CircuitBoard />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <footer className="py-8 px-6 border-t border-border text-center md:text-left md:flex justify-between items-center bg-background">
        <div className="text-sm text-muted-foreground font-mono">
          © {new Date().getFullYear()} Azdin Aitchatto. All rights reserved.
        </div>
        <div className="text-sm text-muted-foreground font-mono mt-2 md:mt-0">
          Designed & Built with ❤️
        </div>
      </footer>
    </div>
  );
}