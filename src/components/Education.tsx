import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Award, Calendar } from "lucide-react";

export const Education = () => {
  const education = {
    degree: "B.Tech – Electronics & Communication",
    institution: "Gurukula Kangri Vishwavidyalaya",
    period: "2019 - 2023",
    cgpa: "8.32",
    description: "Strong foundation in engineering principles with focus on electronics and communication systems."
  };

  const certifications = [
    {
      title: "Java (Basic)",
      provider: "HackerRank",
      year: "2022",
      description: "Demonstrated proficiency in Java programming fundamentals"
    },
    {
      title: "Java Programming: Solving Problems with Software",
      provider: "Coursera",
      year: "2021",
      description: "Comprehensive course on Java programming and problem-solving methodologies"
    }
  ];

  return (
    <section id="education" className="py-20 bg-muted/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Education & Certifications</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Academic background and continuous learning through professional certifications.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-12">
          {/* Education */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 flex items-center gap-3">
              <GraduationCap className="h-8 w-8 text-accent" />
              Education
            </h3>
            
            <Card className="p-8 bg-gradient-card shadow-elegant hover:shadow-glow transition-all duration-300">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
                <div>
                  <h4 className="text-2xl font-bold mb-2">{education.degree}</h4>
                  <p className="text-lg text-accent font-semibold">{education.institution}</p>
                </div>
                <div className="text-right">
                  <div className="flex items-center gap-2 text-muted-foreground mb-2">
                    <Calendar className="h-4 w-4" />
                    <span>{education.period}</span>
                  </div>
                  <Badge variant="outline" className="text-lg px-4 py-2">
                    CGPA: {education.cgpa}
                  </Badge>
                </div>
              </div>
              <p className="text-muted-foreground">{education.description}</p>
            </Card>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 flex items-center gap-3">
              <Award className="h-8 w-8 text-accent" />
              Certifications
            </h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              {certifications.map((cert, index) => (
                <Card key={index} className="p-6 bg-gradient-card shadow-elegant hover:shadow-glow transition-all duration-300 hover:-translate-y-1">
                  <div className="space-y-3">
                    <div className="flex items-start justify-between gap-4">
                      <h4 className="font-semibold text-lg leading-tight">{cert.title}</h4>
                      <Badge variant="secondary" className="shrink-0">
                        {cert.year}
                      </Badge>
                    </div>
                    <p className="text-accent font-medium">{cert.provider}</p>
                    <p className="text-muted-foreground text-sm">{cert.description}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Achievement Highlight */}
          <Card className="p-8 bg-gradient-accent shadow-glow">
            <div className="text-center text-accent-foreground">
              <h4 className="text-xl font-bold mb-2">Career Achievement</h4>
              <p className="text-lg opacity-90 mb-2">
                Promoted twice within 2 years at Opkey
              </p>
              <p className="text-sm opacity-80">
                From Software Engineering Trainee → Software Engineer → Software Engineer II
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};