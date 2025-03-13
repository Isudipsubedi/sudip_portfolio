
import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 bg-secondary/70 backdrop-blur-lg">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex justify-center space-x-6 mb-6">
            <a 
              href="mailto:subedisudip01@gmail.com" 
              className="p-2 rounded-full hover:bg-background/50 transition-colors"
              aria-label="Email"
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Mail className="h-5 w-5" />
            </a>
            <a 
              href="https://github.com/tsudipsubedi" 
              className="p-2 rounded-full hover:bg-background/50 transition-colors"
              aria-label="GitHub"
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Github className="h-5 w-5" />
            </a>
            <a 
              href="https://linkedin.com/in/jsudipsubedi" 
              className="p-2 rounded-full hover:bg-background/50 transition-colors"
              aria-label="LinkedIn"
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
          <p className="text-muted-foreground">
            &copy; {currentYear} Sudip Subedi. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
