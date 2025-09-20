import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Detect active section
      const sections = ['hero', 'about', 'experience', 'education', 'contact'];
      let current = 'hero';
      
      for (const section of sections) {
        const element = section === 'hero' 
          ? document.querySelector('#root') 
          : document.querySelector(`#${section}`);
        
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            current = section;
          }
        }
      }
      
      setActiveSection(current);
    };
    
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial call
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { href: "#about", label: "About" },
    { href: "#experience", label: "Experience" },
    { href: "#education", label: "Education" },
    { href: "#contact", label: "Contact" },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? "bg-background/80 backdrop-blur-lg shadow-elegant" : "bg-transparent"
    }`}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button 
            onClick={scrollToTop}
            className="text-2xl font-bold bg-gradient-accent bg-clip-text text-transparent hover:scale-105 transition-transform"
          >
            Himanshu Kumar
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => {
              const sectionId = item.href.replace('#', '');
              const isActive = activeSection === sectionId;
              return (
                <button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className={`relative text-foreground/80 hover:text-foreground transition-colors font-medium py-2 ${
                    isActive ? 'text-accent border-b-2 border-accent' : ''
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
            <Button 
              onClick={() => scrollToSection("#contact")}
              className="bg-accent hover:bg-accent/90 text-accent-foreground"
            >
              Get In Touch
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-background/95 backdrop-blur-lg border-t border-border">
            <div className="py-4 space-y-2">
              {navItems.map((item) => {
                const sectionId = item.href.replace('#', '');
                const isActive = activeSection === sectionId;
                return (
                  <button
                    key={item.href}
                    onClick={() => scrollToSection(item.href)}
                    className={`block w-full text-left px-4 py-2 text-foreground/80 hover:text-foreground hover:bg-muted/50 transition-colors font-medium border-l-2 ${
                      isActive ? 'text-accent border-accent bg-muted/30' : 'border-transparent'
                    }`}
                  >
                    {item.label}
                  </button>
                );
              })}
              <div className="px-4 pt-2">
                <Button 
                  onClick={() => scrollToSection("#contact")}
                  className="w-full bg-accent hover:bg-accent/90 text-accent-foreground"
                >
                  Get In Touch
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};