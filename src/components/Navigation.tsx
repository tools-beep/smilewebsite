import { useState, useEffect } from "react";
import { Menu, X, Calendar, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? 'glass-nav shadow-2xl backdrop-blur-2xl' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex justify-between items-center transition-all duration-300 ${scrolled ? 'h-16' : 'h-20'}`}>
          {/* Animated Logo */}
          <div className="flex-shrink-0 group cursor-pointer">
            <div className="flex items-center space-x-2">
              <Sparkles className="w-8 h-8 text-primary group-hover:rotate-12 transition-transform duration-300" />
              <h1 className="text-2xl font-display font-bold text-gradient-animate group-hover:scale-105 transition-transform duration-300">
                Smile Innovations
              </h1>
            </div>
          </div>

          {/* Desktop Navigation with Magnetic Effects */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-2">
              {navItems.map((item, index) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`
                    relative px-4 py-3 rounded-lg text-sm font-medium transition-all duration-300
                    text-foreground hover:text-primary magnetic-hover
                    before:absolute before:inset-0 before:bg-gradient-primary before:opacity-0 
                    before:rounded-lg before:transition-all before:duration-300
                    hover:before:opacity-10 hover:shadow-lg hover:scale-105
                    animate-slide-in-up
                  `}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <span className="relative z-10">{item.name}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Enhanced CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <Button 
              variant="premium" 
              className="group relative overflow-hidden transform transition-all duration-300 hover:scale-105"
            >
              <Calendar className="w-4 h-4 mr-2 group-hover:rotate-12 transition-transform" />
              Book Appointment
              <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
            </Button>
          </div>

          {/* Enhanced Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="relative p-3 rounded-lg text-foreground hover:text-primary transition-all duration-300 hover:bg-primary/10 hover:scale-110"
            >
              <div className="relative">
                {isMenuOpen ? (
                  <X size={24} className="animate-scale-in" />
                ) : (
                  <Menu size={24} className="animate-scale-in" />
                )}
              </div>
            </button>
          </div>
        </div>

        {/* Enhanced Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden animate-slide-in-up">
            <div className="px-4 pt-4 pb-6 space-y-2 glass-card mt-4 rounded-2xl shadow-2xl border border-white/10">
              {navItems.map((item, index) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`
                    block px-4 py-3 rounded-xl text-base font-medium transition-all duration-300
                    text-foreground hover:text-primary hover:bg-primary/10
                    hover:scale-105 hover:shadow-lg animate-slide-in-left
                  `}
                  style={{ animationDelay: `${index * 0.1}s` }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="pt-4">
                <Button 
                  variant="premium" 
                  className="w-full group transform transition-all duration-300 hover:scale-105"
                >
                  <Calendar className="w-4 h-4 mr-2 group-hover:rotate-12 transition-transform" />
                  Book Appointment
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;