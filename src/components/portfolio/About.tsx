import { Card } from "@/components/ui/card";
import { Code, Lightbulb, Target, Rocket } from "lucide-react";

export const About = () => {
  const highlights = [
    {
      icon: Code,
      title: "Full Stack Development",
      description: "Experienced in building end-to-end web applications with modern frameworks and databases."
    },
    {
      icon: Lightbulb,
      title: "Problem Solving",
      description: "Solved 200+ DSA problems on LeetCode and GeeksforGeeks, strengthening algorithmic thinking."
    },
    {
      icon: Target,
      title: "Clean Code",
      description: "Focused on writing maintainable, scalable, and well-documented code following best practices."
    },
    {
      icon: Rocket,
      title: "Innovation",
      description: "Always eager to learn new technologies and implement creative solutions to complex problems."
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A passionate Computer Science student with a love for creating impactful digital solutions
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12 items-center">
          <div className="flex justify-center md:justify-start">
            <div className="relative">
              <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-gradient-to-br from-hero-primary to-hero-secondary p-1">
                <img 
                  src="/lovable-uploads/b6e776da-409d-45d2-8ecd-bdf7241e5778.png"
                  alt="Madhvendra Rao Profile Photo"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-to-br from-hero-primary to-hero-secondary rounded-full border-2 border-background"></div>
            </div>
          </div>
          <div className="space-y-6 md:col-span-2">
            <p className="text-foreground/90 leading-relaxed">
              I'm a dedicated Computer Science student at KIET Group of Institutions, currently pursuing my 
              Bachelor's in Technology. With a strong foundation in both theoretical concepts and practical 
              application, I specialize in full-stack web development.
            </p>
            <p className="text-foreground/90 leading-relaxed">
              My journey in programming started with a curiosity to understand how things work behind the scenes. 
              This led me to explore various technologies, from front-end frameworks like React.js to back-end 
              technologies like Node.js and databases like MongoDB and MySQL.
            </p>
            <p className="text-foreground/90 leading-relaxed">
              Beyond coding, I'm passionate about problem-solving and have solved over 200 data structure and 
              algorithm problems. I believe in continuous learning and staying updated with the latest 
              industry trends and best practices.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4 md:col-span-3 mt-8">
            {highlights.map((item, index) => (
              <Card 
                key={index} 
                className="glass-card hover-lift p-6 text-center border-glass-border"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="mb-4 flex justify-center">
                  <div className="p-3 rounded-full bg-gradient-to-br from-hero-primary/20 to-hero-secondary/20">
                    <item.icon className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <h3 className="font-semibold mb-2 text-foreground">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};