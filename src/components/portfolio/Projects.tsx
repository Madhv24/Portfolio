import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, Calendar } from "lucide-react";

export const Projects = () => {
  const projects = [
    {
      title: "Assured Contract Farming System",
      period: "May 2024 – Present",
      description: "Full-stack web application connecting landowners, farmers, and buyers through a comprehensive matching and availability system with real-time updates.",
      features: [
        "Contract Management with document upload/download",
        "Crop lifecycle tracking with interactive dashboards", 
        "Real-time updates using WebSockets and Socket.IO",
        "Optimized queries and caching for enhanced performance"
      ],
      technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Socket.IO", "HTML", "CSS", "JavaScript"],
      github: "https://github.com/Madhv24/Assured-contract-Farming-For-Stable-Market.git",
      demo: "#",
      status: "In Progress"
    },
    {
      title: "AI Code Reviewer",
      period: "January 2024",
      description: "Intelligent code review tool powered by Google Gemini AI, featuring split-screen interface for seamless code editing and instant feedback.",
      features: [
        "AI-powered code analysis using Google Gemini",
        "Split-screen interface for code editing and feedback",
        "Automated error detection and optimization suggestions",
        "Real-time code quality assessment"
      ],
      technologies: ["Node.js", "React", "Tailwind CSS", "Google Gemini API"],
      github: "https://github.com/Madhv24/AI_CODE_REVIEWER.git",
      demo: "#",
      status: "Completed"
    },
    {
      title: "Employee Management System",
      period: "July 2024",
      description: "Modern frontend application for employee and admin management with interactive dashboards, task assignment, and performance tracking.",
      features: [
        "Interactive admin and employee dashboards",
        "Task assignment and completion tracking",
        "Optimized state management for performance",
        "Responsive UI design for all devices"
      ],
      technologies: ["React", "Tailwind CSS", "JavaScript"],
      github: "#",
      demo: "#",
      status: "Completed"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A showcase of my technical skills and problem-solving abilities through real-world applications
          </p>
        </div>

        <div className="grid lg:grid-cols-1 gap-8 max-w-4xl mx-auto">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className="glass-card hover-lift p-8 border-glass-border"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <h3 className="text-xl font-bold text-foreground">{project.title}</h3>
                    <Badge 
                      variant={project.status === "Completed" ? "default" : "secondary"}
                      className={project.status === "Completed" 
                        ? "bg-green-500/20 text-green-400 border-green-500/30" 
                        : "bg-blue-500/20 text-blue-400 border-blue-500/30"
                      }
                    >
                      {project.status}
                    </Badge>
                  </div>
                  
                  <div className="flex items-center gap-2 text-muted-foreground mb-4">
                    <Calendar size={16} />
                    <span className="text-sm">{project.period}</span>
                  </div>

                  <p className="text-foreground/90 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="mb-4">
                    <h4 className="font-medium text-foreground mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {project.features.map((feature, idx) => (
                        <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                          <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-medium text-foreground mb-3">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge 
                          key={tech} 
                          variant="outline" 
                          className="border-primary/30 text-primary hover:bg-primary/10 text-xs"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <Button 
                      asChild
                      variant="outline" 
                      size="sm"
                      className="border-primary/30 hover:border-primary hover:bg-primary/10"
                    >
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github size={16} className="mr-2" />
                        Source Code
                      </a>
                    </Button>
                    <Button 
                      asChild
                      variant="outline" 
                      size="sm"
                      className="border-primary/30 hover:border-primary hover:bg-primary/10"
                    >
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink size={16} className="mr-2" />
                        Live Demo
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
