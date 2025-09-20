import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CalendarDays, MapPin } from "lucide-react";

export const Experience = () => {
  const experiences = [
    {
      title: "Software Engineer – II",
      company: "Opkey",
      location: "Noida, India",
      period: "Jul 2025 - Present",
      type: "Full-time",
      description: "Leading frontend development initiatives, building advanced workflow automation tools and custom diagramming solutions for enterprise clients.",
      achievements: [
        "Built dynamic task system in Angular + GoJS supporting 50+ backend-triggered actions via JSON-powered UI",
        "Developed full-featured browser-based editor using Fabric.js within 1 week",
        "Implemented smart annotation features using Windows Selection API for inline notes & quick actions",
        "Delivered custom workflow & diagram solutions adopted by enterprise clients",
      ],
      technologies: ["Angular", "TypeScript", "GoJS", "Fabric.js", "JavaScript", "HTML5", "CSS3", "REST APIs"],
    },
    {
      title: "Software Engineer",
      company: "Opkey",
      location: "Noida, India",
      period: "Jul 2024 - Jul 2025",
      type: "Full-time",
      description: "Developed scalable frontend solutions and collaborated with AI & backend teams for seamless integrations. Focused on enhancing user experience through rapid iteration.",
      achievements: [
        "Partnered with AI & backend teams for scalable integrations",
        "Resolved 3-5 bugs per sprint through QA & feedback-driven development",
        "Enhanced product scalability through innovative frontend solutions",
        "Contributed to workflow automation features used by enterprise clients",
      ],
      technologies: ["Angular", "TypeScript", "JavaScript", "REST APIs", "Agile Development"],
    },
    {
      title: "Software Engineering Trainee",
      company: "Opkey",
      location: "Noida, India",
      period: "Aug 2023 - Jul 2024",
      type: "Full-time",
      description: "Started as a trainee and quickly demonstrated strong frontend development skills, leading to rapid promotion within the organization.",
      achievements: [
        "Mastered Angular, TypeScript, and JavaScript fundamentals",
        "Contributed to UI/UX improvements and responsive design implementations",
        "Participated in agile development processes and usability testing",
        "Promoted to Software Engineer within 11 months",
      ],
      technologies: ["Angular", "TypeScript", "JavaScript", "HTML5", "CSS3", "jQuery"],
    },
  ];

  return (
    <section id="experience" className="py-20 bg-muted/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Professional Experience</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            My career progression at Opkey, showcasing rapid growth from trainee to senior engineer in just 2 years.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-px bg-border hidden md:block" />
            
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div key={index} className="relative">
                  {/* Timeline dot */}
                  <div className="absolute left-6 w-4 h-4 bg-accent rounded-full border-4 border-background hidden md:block" />
                  
                  <Card className="md:ml-16 p-8 bg-gradient-card shadow-elegant hover:shadow-glow transition-all duration-300">
                    <div className="space-y-4">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                        <div>
                          <h3 className="text-2xl font-bold">{exp.title}</h3>
                          <p className="text-lg text-accent font-semibold">{exp.company}</p>
                        </div>
                        <div className="flex flex-col sm:items-end gap-1">
                          <Badge variant="outline" className="w-fit">
                            {exp.type}
                          </Badge>
                          <div className="flex items-center text-muted-foreground text-sm gap-4">
                            <div className="flex items-center gap-1">
                              <CalendarDays className="h-4 w-4" />
                              <span>{exp.period}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <MapPin className="h-4 w-4" />
                              <span>{exp.location}</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <p className="text-muted-foreground leading-relaxed">
                        {exp.description}
                      </p>

                      <div>
                        <h4 className="font-semibold mb-2">Key Achievements:</h4>
                        <ul className="space-y-1">
                          {exp.achievements.map((achievement, i) => (
                            <li key={i} className="text-muted-foreground flex items-start">
                              <span className="text-accent mr-2">•</span>
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                          <Badge key={tech} variant="secondary" className="px-3 py-1">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};