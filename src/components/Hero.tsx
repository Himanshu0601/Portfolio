import { Button } from "@/components/ui/button";
import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react";
import heroPortrait from "@/assets/himanshu-portrait.jpg";

export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-hero">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5" />
      <div className="absolute top-20 left-20 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-primary-glow/10 rounded-full blur-3xl animate-pulse delay-1000" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-accent font-medium tracking-wide uppercase text-sm">
                Frontend Software Engineer
              </p>
              <h1 className="text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight">
                Hi, I'm{" "}
                <span className="bg-gradient-accent bg-clip-text text-transparent">
                  Himanshu Kumar
                </span>
              </h1>
              <p className="text-xl text-primary-foreground/80 max-w-2xl leading-relaxed">
                Frontend Software Engineer with 2+ years of experience designing scalable,
                interactive UIs using Angular, TypeScript, and JavaScript. Specialized in
                workflow automation and custom diagramming tools, delivering innovative
                solutions for enterprise clients.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-glow">
                Get In Touch
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="group border-primary-foreground/30 text-primary-foreground bg-primary-foreground/5 hover:bg-primary-foreground/15 hover:border-primary-foreground/40 transition-all"
              >
                <a href="/Himanshu_Kumar_updated_resume.pdf" download>
                  <Download className="mr-2 h-5 w-5 transition-transform group-hover:-translate-y-0.5" />
                  Download CV
                </a>
              </Button>

            </div>

            <div className="flex space-x-6">
              <a href="https://github.com/Himanshu0601" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/60 hover:text-accent transition-colors">
                <Github className="h-6 w-6" />
              </a>
              <a href="https://linkedin.com/in/himanshu-kumar-8b93571bb" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/60 hover:text-accent transition-colors">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="mailto:himanshu06012001@gmail.com" className="text-primary-foreground/60 hover:text-accent transition-colors">
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Portrait */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 rounded-full overflow-hidden shadow-glow ring-4 ring-accent/20">
                <img
                  src={heroPortrait}
                  alt="Himanshu Kumar - Software Engineer"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Floating decorative elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-accent rounded-full animate-bounce" />
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-accent-muted rounded-full animate-bounce delay-500" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};