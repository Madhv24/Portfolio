import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Calendar, MapPin, Star } from "lucide-react";

export const Education = () => {
  const educationData = [
    {
      degree: "Bachelor in Technology (Computer Science)",
      institution: "KIET Group Of Institutions",
      university: "Abdul Kalam Technical University",
      location: "Ghaziabad, Uttar Pradesh", 
      period: "Nov. 2022 – Present",
      score: "CGPA: 7.28",
      status: "Ongoing",
      highlights: ["Data Structures & Algorithms", "Software Engineering", "Database Management", "Web Technologies"]
    },
    {
      degree: "Intermediate (CBSE)",
      institution: "Deoria",
      location: "Uttar Pradesh",
      period: "April 2020 – March 2021", 
      score: "Score: 82.5%",
      status: "Completed",
      highlights: ["Mathematics", "Physics", "Chemistry", "English"]
    },
    {
      degree: "High School (CBSE)",
      institution: "Kendriya Vidyalaya",
      location: "India",
      period: "April 2018 – March 2019",
      score: "Score: 79%", 
      status: "Completed",
      highlights: ["Science", "Mathematics", "Social Studies", "English"]
    }
  ];

  return (
    <section id="education" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Educational <span className="gradient-text">Journey</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Building a strong foundation through continuous learning and academic excellence
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-hero-primary to-hero-secondary opacity-30 hidden md:block" />
            
            <div className="space-y-8">
              {educationData.map((edu, index) => (
                <Card 
                  key={index}
                  className="glass-card hover-lift p-8 border-glass-border relative md:ml-16"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  {/* Timeline dot */}
                  <div className="absolute -left-20 top-8 w-4 h-4 bg-gradient-to-br from-hero-primary to-hero-secondary rounded-full border-4 border-background shadow-lg hidden md:block" />
                  
                  <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-bold text-foreground mb-2 flex items-center gap-3">
                            <GraduationCap className="h-5 w-5 text-primary" />
                            {edu.degree}
                          </h3>
                          <p className="text-lg text-foreground/90 font-medium">{edu.institution}</p>
                          {edu.university && (
                            <p className="text-muted-foreground">{edu.university}</p>
                          )}
                        </div>
                        <Badge 
                          variant={edu.status === "Ongoing" ? "secondary" : "default"}
                          className={edu.status === "Ongoing" 
                            ? "bg-blue-500/20 text-blue-400 border-blue-500/30" 
                            : "bg-green-500/20 text-green-400 border-green-500/30"
                          }
                        >
                          {edu.status}
                        </Badge>
                      </div>

                      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                        <div className="flex items-center gap-2">
                          <Calendar size={16} />
                          <span>{edu.period}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin size={16} />
                          <span>{edu.location}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Star size={16} />
                          <span className="font-medium text-primary">{edu.score}</span>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-medium text-foreground mb-3">Key Subjects/Areas:</h4>
                        <div className="flex flex-wrap gap-2">
                          {edu.highlights.map((subject) => (
                            <Badge 
                              key={subject} 
                              variant="outline" 
                              className="border-primary/30 text-primary hover:bg-primary/10 text-xs"
                            >
                              {subject}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};