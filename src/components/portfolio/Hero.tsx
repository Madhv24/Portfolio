import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Download } from "lucide-react";

export const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToProjects = () => {
    const element = document.getElementById("projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="hero-section min-h-screen flex items-center justify-center relative">
      <div className="container mx-auto px-6 py-20 text-center relative z-10">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Hello, I'm{" "}
            <span className="gradient-text animate-float">
              Madhvendra Rao
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 animate-slide-in-left">
            Full Stack Developer | Computer Science Student | Problem Solver
          </p>
          <p className="text-lg text-muted-foreground/80 mb-12 max-w-2xl mx-auto leading-relaxed">
            Passionate about creating innovative web applications with modern technologies. 
            Specializing in React.js, Node.js, and cloud solutions with a strong foundation in DSA.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              onClick={scrollToProjects}
              size="lg" 
              className="bg-gradient-to-r from-hero-primary to-hero-secondary hover:opacity-90 transition-opacity text-white font-semibold px-8 py-3"
            >
              View My Work
            </Button>
            <Button 
              onClick={scrollToContact}
              variant="outline" 
              size="lg"
              className="border-primary/30 hover:border-primary hover:bg-primary/10 transition-colors px-8 py-3"
            >
              Get In Touch
            </Button>
          </div>

          <div className="flex justify-center space-x-6">
            <a
              href="https://github.com/Madhv24"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full glass-card hover-lift transition-all hover:text-primary"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/madhvendra-rao-4044512a9"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full glass-card hover-lift transition-all hover:text-primary"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:madhvendrarao2408@gmail.com"
              className="p-3 rounded-full glass-card hover-lift transition-all hover:text-primary"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>
      </div>
      
      {/* Floating decoration */}
      <div className="absolute top-1/4 left-10 w-20 h-20 bg-gradient-to-br from-hero-primary/20 to-hero-secondary/20 rounded-full blur-xl animate-float" />
      <div className="absolute bottom-1/4 right-10 w-32 h-32 bg-gradient-to-br from-hero-secondary/20 to-hero-primary/20 rounded-full blur-xl animate-float" style={{ animationDelay: "1s" }} />
    </section>
  );
};