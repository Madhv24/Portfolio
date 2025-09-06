import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: ["React.js", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "Material-UI"],
      color: "from-blue-500/20 to-cyan-500/20"
    },
    {
      title: "Backend Development", 
      skills: ["Node.js", "Express.js", "MongoDB", "MySQL", "Socket.IO"],
      color: "from-green-500/20 to-emerald-500/20"
    },
    {
      title: "Programming Languages",
      skills: ["JavaScript", "Python", "C++", "C", "SQL"],
      color: "from-purple-500/20 to-pink-500/20"
    },
    {
      title: "Tools & Technologies",
      skills: ["Git", "GitHub", "VS Code", "Figma", "AWS", "Eclipse"],
      color: "from-orange-500/20 to-red-500/20"
    },
    {
      title: "Core Knowledge",
      skills: ["Data Structures", "Algorithms", "Database Design", "RESTful APIs", "Web Security"],
      color: "from-indigo-500/20 to-blue-500/20"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Skills & <span className="gradient-text">Technologies</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A comprehensive toolkit for building modern, scalable web applications
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <Card 
              key={index}
              className="glass-card hover-lift p-6 border-glass-border skill-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`w-full h-1 bg-gradient-to-r ${category.color} rounded-full mb-4`} />
              <h3 className="font-semibold text-lg mb-4 text-foreground">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <Badge 
                    key={skillIndex} 
                    variant="secondary" 
                    className="bg-secondary/50 hover:bg-secondary/70 transition-colors text-xs px-3 py-1"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Card className="glass-card p-6 max-w-2xl mx-auto border-glass-border">
            <h3 className="font-semibold text-lg mb-3 gradient-text">Problem Solving Expertise</h3>
            <p className="text-muted-foreground mb-4">
              Strong foundation in Data Structures and Algorithms with hands-on experience in:
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {["Arrays", "Linked Lists", "Trees", "Graphs", "Stacks", "Queues", "Dynamic Programming", "Greedy Algorithms"].map((topic) => (
                <Badge 
                  key={topic} 
                  variant="outline" 
                  className="border-primary/30 text-primary hover:bg-primary/10"
                >
                  {topic}
                </Badge>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};