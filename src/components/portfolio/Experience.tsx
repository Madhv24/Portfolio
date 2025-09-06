import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, ExternalLink, Award } from "lucide-react";

export const Experience = () => {
  const experiences = [
    {
      title: "Frontend Developer Intern",
      company: "Wipro",
      location: "Remote",
      period: "Present",
      status: "Current",
      description: "Worked on developing responsive and interactive web interfaces using HTML, CSS, JavaScript, and React. Focused on improving user experience, optimizing performance, and ensuring cross-browser compatibility. Collaborated with the team to implement new features and deliver scalable solutions.",
      technologies: ["HTML", "CSS", "JavaScript", "React", "Responsive Design", "Performance Optimization"],
      offerLetterLink: "https://drive.google.com/file/d/1LozMx5vFpRJAhTxnLUIn8cljqftM50q9/view",
      certificateLink: null, // Will be added when internship completes
    }
  ];

  return (
    <section id="experience" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold gradient-text mb-4">
            Work Experience
          </h2>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            Professional experiences and internships that have shaped my development journey
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((experience, index) => (
            <Card key={index} className="glass-card hover:glass-card-hover transition-all duration-300">
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div className="flex-1">
                    <CardTitle className="text-2xl text-foreground flex items-center gap-3">
                      {experience.title}
                      <Badge variant="secondary" className="ml-2">
                        {experience.status}
                      </Badge>
                    </CardTitle>
                    <CardDescription className="text-lg text-primary font-semibold mt-2">
                      {experience.company}
                    </CardDescription>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-3 text-sm text-foreground/70">
                    <div className="flex items-center gap-2">
                      <MapPin size={16} />
                      {experience.location}
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar size={16} />
                      {experience.period}
                    </div>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                <p className="text-foreground/90 leading-relaxed">
                  {experience.description}
                </p>

                <div>
                  <h4 className="font-semibold text-foreground mb-3">Technologies & Skills</h4>
                  <div className="flex flex-wrap gap-2">
                    {experience.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap gap-3 pt-4">
                  {experience.offerLetterLink && (
                    <Button variant="outline" size="sm" asChild>
                      <a 
                        href={experience.offerLetterLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-2"
                      >
                        <ExternalLink size={16} />
                        View Offer Letter
                      </a>
                    </Button>
                  )}
                  
                  {experience.certificateLink ? (
                    <Button variant="default" size="sm" asChild>
                      <a 
                        href={experience.certificateLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-2"
                      >
                        <Award size={16} />
                        View Certificate
                      </a>
                    </Button>
                  ) : (
                    <Button variant="ghost" size="sm" disabled>
                      <Award size={16} className="mr-2" />
                      Certificate (Coming Soon)
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};