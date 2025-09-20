import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code2, Users, TrendingUp, BookOpen } from "lucide-react";

export const About = () => {
  const highlights = [
    {
      icon: Code2,
      title: "Frontend Development",
      description: "Expert in Angular, TypeScript, and JavaScript with 2+ years of experience",
    },
    {
      icon: Users,
      title: "UI/UX Innovation",
      description: "Specialized in GoJS diagramming tools and Fabric.js interactive editors",
    },
    {
      icon: TrendingUp,
      title: "Workflow Automation",
      description: "Built dynamic task systems supporting 50+ backend-triggered actions",
    },
    {
      icon: BookOpen,
      title: "Rapid Development",
      description: "Delivered full-featured browser-based editor in just 1 week",
    },
  ];

  const technologies = [
    "Angular", "TypeScript", "JavaScript", "HTML5", "CSS3", "jQuery",
    "GoJS", "Fabric.js", "REST APIs", "Git", "Agile Development"
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">About Me</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A passionate technologist dedicated to creating impactful solutions 
            and helping others succeed in their careers.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-semibold mb-4">My Story</h3>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  As a Frontend Software Engineer at Opkey, I specialize in building 
                  scalable, interactive user interfaces that solve complex business problems. 
                  My expertise lies in Angular, TypeScript, and specialized tools like 
                  GoJS and Fabric.js.
                </p>
                <p>
                  I've successfully built dynamic task systems, custom diagramming tools, 
                  and full-featured browser-based editors. My work directly impacts 
                  enterprise clients, delivering workflow and diagram solutions that 
                  enhance product scalability.
                </p>
                <p>
                  I'm passionate about rapid iteration, user-centric design, and 
                  collaborating across AI and backend teams to deliver high-performance 
                  features that users love.
                </p>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-3">Technologies I work with</h4>
              <div className="flex flex-wrap gap-2">
                {technologies.map((tech) => (
                  <Badge key={tech} variant="secondary" className="px-3 py-1">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          <div className="grid gap-6">
            {highlights.map((highlight, index) => (
              <Card key={index} className="p-6 bg-gradient-card shadow-elegant hover:shadow-glow transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-start space-x-4">
                  <div className="bg-gradient-accent p-3 rounded-lg shadow-sm">
                    <highlight.icon className="h-6 w-6 text-accent-foreground" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2">{highlight.title}</h4>
                    <p className="text-muted-foreground">{highlight.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};