import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Github, Linkedin, Mail, Send, MessageCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

export const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "Thanks for reaching out. I'll get back to you soon!",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactMethods = [
    {
      icon: Mail,
      title: "Email",
      description: "himanshu06012001@gmail.com",
      action: "Send Email",
      href: "mailto:himanshu06012001@gmail.com",
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      description: "Let's connect professionally",
      action: "Connect",
      href: "https://linkedin.com/in/himanshu-kumar-8b93571bb/",
    },
    {
      icon: Github,
      title: "GitHub",
      description: "Check out my code",
      action: "Follow",
      href: "https://github.com/Himanshu0601",
    },
    {
      icon: MessageCircle,
      title: "Phone",
      description: "+91-9631431035",
      action: "Call",
      href: "tel:+919631431035",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Let's Work Together</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Ready to build innovative frontend solutions? Let's discuss how we can 
            collaborate on your next Angular project or UI/UX challenge.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="p-8 bg-gradient-card shadow-elegant">
            <div className="mb-6">
              <h3 className="text-2xl font-semibold mb-2">Send Me a Message</h3>
              <p className="text-muted-foreground">
                Fill out the form below and I'll get back to you as soon as possible.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Full Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="John Doe"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="john@example.com"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell me about your project or how I can help you..."
                  rows={6}
                  required
                />
              </div>

              <Button type="submit" size="lg" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                <Send className="mr-2 h-5 w-5" />
                Send Message
              </Button>
            </form>
          </Card>

          {/* Contact Methods */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Get In Touch</h3>
              <p className="text-muted-foreground mb-8">
                Prefer a different way to connect? Choose your preferred method below.
              </p>
            </div>

            <div className="grid gap-4">
              {contactMethods.map((method, index) => (
                <Card key={index} className="p-6 bg-gradient-card shadow-elegant hover:shadow-glow transition-all duration-300 group">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="bg-gradient-accent p-3 rounded-lg">
                        <method.icon className="h-6 w-6 text-accent-foreground" />
                      </div>
                      <div>
                        <h4 className="font-semibold">{method.title}</h4>
                        <p className="text-muted-foreground text-sm">{method.description}</p>
                      </div>
                    </div>
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      asChild
                    >
                      <a href={method.href} target="_blank" rel="noopener noreferrer">
                        {method.action}
                      </a>
                    </Button>
                  </div>
                </Card>
              ))}
            </div>

            <Card className="p-6 bg-gradient-accent shadow-glow">
              <div className="text-center text-accent-foreground">
                <h4 className="font-semibold mb-2">Ready to Collaborate?</h4>
                <p className="text-sm opacity-90 mb-4">
                  I'm available for frontend development projects, Angular consulting, and innovative UI/UX solutions.
                </p>
                <Button 
                  variant="secondary" 
                  size="sm" 
                  className="bg-accent-foreground/20 hover:bg-accent-foreground/30 text-accent-foreground border-accent-foreground/20"
                  asChild
                >
                  <a href="mailto:himanshu06012001@gmail.com">
                    <Mail className="mr-2 h-4 w-4" />
                    Let's Talk
                  </a>
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};