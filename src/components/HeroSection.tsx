
import { ArrowDown, Github, Linkedin, Mail, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center pt-16 pb-8 animated-bg">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col items-center text-center">
            <div className="animate-slide-in-down">
              <p className="text-lg md:text-xl font-medium text-muted-foreground mb-4">
                Hello, I'm
              </p>
            </div>
            <h1 className="font-bold mb-4 animate-slide-in-up shine">
              <span className="text-gradient">Sudip Subedi</span>
            </h1>
            <div className="h-1 w-20 bg-gradient-to-r from-primary/60 via-primary to-primary/60 my-6 rounded animate-slide-in-up" style={{animationDelay: "0.1s"}}></div>
            <div className="animate-slide-in-up" style={{animationDelay: "0.2s"}}>
              <p className="text-xl md:text-2xl mb-8 max-w-2xl text-muted-foreground professional-typewriter">
                Computer Engineer | Full-Stack Developer | Data Analyst
              </p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-4 mb-8 animate-slide-in-up" style={{animationDelay: "0.3s"}}>
              <a href="/files/Sudip_Subedi_CV.pdf" download className="transition-transform duration-300 hover:scale-105">
                <Button variant="default" size="lg" className="gap-2 rounded-full glow-primary">
                  <FileText className="h-5 w-5" />
                  Download CV
                </Button>
              </a>
              <a href="mailto:subedisudip01@gmail.com" target="_blank" rel="noopener noreferrer" className="transition-transform duration-300 hover:scale-105">
                <Button variant="outline" size="lg" className="gap-2 rounded-full animated-border">
                  <Mail className="h-5 w-5" />
                  Contact Me
                </Button>
              </a>
              <a href="https://github.com/Isudipsubedi" target="_blank" rel="noopener noreferrer" className="transition-transform duration-300 hover:scale-105">
                <Button variant="outline" size="lg" className="gap-2 rounded-full glow">
                  <Github className="h-5 w-5" />
                  GitHub
                </Button>
              </a>
              <a href="https://linkedin.com/in/isudipsubedi" target="_blank" rel="noopener noreferrer" className="transition-transform duration-300 hover:scale-105">
                <Button variant="outline" size="lg" className="gap-2 rounded-full glow">
                  <Linkedin className="h-5 w-5" />
                  LinkedIn
                </Button>
              </a>
            </div>
            
            <div className="animate-bounce-slow mt-12 animate-slide-in-up" style={{animationDelay: "0.4s"}}>
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full h-12 w-12 border border-border animated-border"
                onClick={() => scrollToSection("about")}
                aria-label="Scroll to about section"
              >
                <ArrowDown className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
