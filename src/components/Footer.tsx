import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const socialLinks = [
    { icon: Facebook, href: "https://facebook.com", label: "Facebook" },
    { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
    { icon: Twitter, href: "https://twitter.com", label: "Twitter" }
  ];

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "#contact" }
  ];

  const services = [
    { name: "Cosmetic Dentistry", href: "/services/cosmetic-dentistry" },
    { name: "Laser Dentistry", href: "/services/laser-dentistry" },
    { name: "General & Family", href: "/services/general-family" },
    { name: "Preventive Care", href: "/services/cleaning-exams" },
    { name: "Restorative Dentistry", href: "/services/restorative-reconstructive" },
    { name: "Orthodontics", href: "/services/invisalign" }
  ];

  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-block mb-6">
              <img 
                src="/smilelogo.png" 
                alt="Smile Innovation Logo" 
                className="h-12 w-auto brightness-0 invert"
              />
            </Link>
            <p className="text-background/80 mb-6 leading-relaxed">
              Experience the future of dental care with our cutting-edge technology and compassionate approach to oral health.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center hover:bg-primary/20 transition-smooth"
                    aria-label={social.label}
                  >
                    <IconComponent className="w-5 h-5 text-primary" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  {link.href.startsWith('#') ? (
                    <a 
                      href={link.href}
                      className="text-background/80 hover:text-primary transition-smooth"
                    >
                      {link.name}
                    </a>
                  ) : (
                    <Link 
                      to={link.href}
                      className="text-background/80 hover:text-primary transition-smooth"
                    >
                      {link.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <Link 
                    to={service.href}
                    className="text-background/80 hover:text-primary transition-smooth"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-background/80">6323 S Rural Rd #101</p>
                  <p className="text-background/80">Tempe, AZ 85283, USA</p>
                </div>
              </div>
              
              <a href="tel:+14808207777" className="flex items-center space-x-3 hover:text-primary transition-smooth">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <p className="text-background/80">(480) 820-7777</p>
              </a>
              
              <a href="mailto:admin@smileinnovation.com" className="flex items-center space-x-3 hover:text-primary transition-smooth">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <p className="text-background/80">admin@smileinnovation.com</p>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-background/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-background/60 text-sm">
              © 2024 Smile Innovations. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link to="/privacy-policy" className="text-background/60 hover:text-primary transition-smooth">
                Privacy Policy
              </Link>
              <Link to="/terms-of-service" className="text-background/60 hover:text-primary transition-smooth">
                Terms of Service
              </Link>
              <Link to="/cookie-policy" className="text-background/60 hover:text-primary transition-smooth">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;