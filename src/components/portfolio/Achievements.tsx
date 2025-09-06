import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Award, Code, Database, Cloud, ExternalLink } from "lucide-react";

export const Achievements = () => {
  const achievements = [
    {
      icon: Code,
      title: "Problem Solving Excellence",
      description: "Solved 200+ Data Structures and Algorithms problems",
      details:
        "Strengthened algorithmic thinking and coding efficiency through consistent practice on competitive programming platforms.",
      platforms: [
        { name: "LeetCode", url: "https://leetcode.com/u/Madhvendra_24/" },
        { name: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/user/madhvendr43tx/" }
      ],
      category: "Programming",
    },
  ];

  const certifications = [
    {
      title: "Web Developer Certificate",
      issuer: "Professional Certification",
      description:
        "Comprehensive web development certification covering modern frameworks and best practices",
      icon: Code,
      link: "https://drive.google.com/file/d/1OMqI-qab2XczB7JkaVeFkijW0arsUGYx/view?usp=sharing",
      skills: ["HTML5", "CSS3", "JavaScript", "React.js", "Node.js"],
    },
    {
      title: "SQL Essential Training Certificate",
      issuer: "Database Certification",
      description:
        "Advanced SQL training covering database design, optimization, and complex query operations",
      icon: Database,
      link: "https://drive.google.com/file/d/1VWrvLNKuL5WWNQndOHn-FMX-Xj48g-GR/view?usp=sharing",
      skills: [
        "SQL",
        "Database Design",
        "Query Optimization",
        "Data Modeling",
      ],
    },
    {
      title: "AWS Academy Graduate – Cloud Foundations",
      issuer: "Amazon Web Services",
      description:
        "Comprehensive cloud computing fundamentals and AWS services knowledge",
      icon: Cloud,
      link: "https://drive.google.com/file/d/1S87xA6aZ_tQi4_ZaQ9qPq-yoIycqET87/view?usp=sharing",
      skills: ["Cloud Computing", "AWS Services", "Architecture", "Security"],
    },
  ];

  return (
    <section id="achievements" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Achievements & <span className="gradient-text">Certifications</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Recognition of continuous learning, skill development, and
            professional growth
          </p>
        </div>

        {/* Achievements Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-8 text-center gradient-text">
            Key Achievements
          </h3>
          <div className="grid md:grid-cols-1 gap-6 max-w-3xl mx-auto">
            {achievements.map((achievement, index) => (
              <Card
                key={index}
                className="glass-card hover-lift p-8 border-glass-border text-center"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex justify-center mb-6">
                  <div className="p-4 rounded-full bg-gradient-to-br from-hero-primary/20 to-hero-secondary/20">
                    <achievement.icon className="h-8 w-8 text-primary" />
                  </div>
                </div>

                <h4 className="text-xl font-bold text-foreground mb-3">
                  {achievement.title}
                </h4>
                <p className="text-lg text-primary font-semibold mb-3">
                  {achievement.description}
                </p>
                <p className="text-muted-foreground mb-4 leading-relaxed max-w-2xl mx-auto">
                  {achievement.details}
                </p>

                <div className="flex justify-center gap-3 mb-4">
                  {achievement.platforms.map((platform) => (
                    <a
                      key={platform.name}
                      href={platform.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Badge
                        variant="outline"
                        className="border-primary/30 text-primary hover:bg-primary/10 cursor-pointer transition-colors"
                      >
                        {platform.name}
                      </Badge>
                    </a>
                  ))}
                </div>

                <Badge className="bg-gradient-to-r from-hero-primary/20 to-hero-secondary/20 text-primary border-primary/30">
                  {achievement.category}
                </Badge>
              </Card>
            ))}
          </div>
        </div>

        {/* Certifications Section */}
        <div>
          <h3 className="text-2xl font-semibold mb-8 text-center gradient-text">
            Professional Certifications
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <Card
                key={index}
                className="glass-card hover-lift p-6 border-glass-border"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-gradient-to-br from-hero-primary/20 to-hero-secondary/20">
                    <cert.icon className="h-5 w-5 text-primary" />
                  </div>
                  <Award className="h-5 w-5 text-accent" />
                </div>

                <h4 className="font-bold text-foreground mb-2 line-clamp-2">
                  {cert.title}
                </h4>
                <p className="text-sm text-primary font-medium mb-3">
                  {cert.issuer}
                </p>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  {cert.description}
                </p>

                <div className="mb-4">
                  <div className="flex flex-wrap gap-1 mb-3">
                    {cert.skills.slice(0, 3).map((skill) => (
                      <Badge
                        key={skill}
                        variant="secondary"
                        className="text-xs bg-secondary/50 hover:bg-secondary/70"
                      >
                        {skill}
                      </Badge>
                    ))}
                    {cert.skills.length > 3 && (
                      <Badge
                        variant="secondary"
                        className="text-xs bg-secondary/50"
                      >
                        +{cert.skills.length - 3} more
                      </Badge>
                    )}
                  </div>
                </div>

                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full border-primary/30 hover:border-primary hover:bg-primary/10"
                  >
                    <ExternalLink size={14} className="mr-2" />
                    View Certificate
                  </Button>
                </a>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
