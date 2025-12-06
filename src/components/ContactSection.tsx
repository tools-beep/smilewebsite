import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Open email client with form data
    const subject = encodeURIComponent("New Contact Form Submission");
    const body = encodeURIComponent(
      `Name: ${formData.firstName} ${formData.lastName}\nEmail: ${formData.email}\nPhone: ${formData.phone}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:admin@smileinnovation.com?subject=${subject}&body=${body}`;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: "(480) 820-7777",
      subtitle: "24/7 Emergency Line",
      href: "tel:+14808207777"
    },
    {
      icon: Mail,
      title: "Email",
      details: "admin@smileinnovation.com",
      subtitle: "We'll respond within 24hrs",
      href: "mailto:admin@smileinnovation.com"
    },
    {
      icon: MapPin,
      title: "Location",
      details: "6323 S Rural Rd #101, Tempe, AZ 85283",
      subtitle: "Easy parking available",
      href: "https://maps.google.com/?q=6323+S+Rural+Rd+%23101,+Tempe,+AZ+85283"
    },
    {
      icon: Clock,
      title: "Hours",
      details: "Mon-Fri: 8AM-5PM",
      subtitle: "Sat-Sun: Closed"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            <span className="text-foreground">Get in </span>
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Touch
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to transform your smile? Contact us today to schedule your consultation and experience the future of dental care.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Contact Form */}
          <div className="glass-card p-8 rounded-2xl">
            <h3 className="text-2xl font-display font-semibold mb-6 text-foreground">
              Send us a message
            </h3>
            
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    First Name
                  </label>
                  <Input 
                    type="text" 
                    name="firstName"
                    placeholder="John"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    className="glass-card border-0 focus:ring-2 focus:ring-primary/50 transition-smooth"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Last Name
                  </label>
                  <Input 
                    type="text" 
                    name="lastName"
                    placeholder="Doe"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    className="glass-card border-0 focus:ring-2 focus:ring-primary/50 transition-smooth"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Email Address
                </label>
                <Input 
                  type="email" 
                  name="email"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="glass-card border-0 focus:ring-2 focus:ring-primary/50 transition-smooth"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Phone Number
                </label>
                <Input 
                  type="tel" 
                  name="phone"
                  placeholder="(480) 555-1234"
                  value={formData.phone}
                  onChange={handleChange}
                  className="glass-card border-0 focus:ring-2 focus:ring-primary/50 transition-smooth"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Message
                </label>
                <Textarea 
                  name="message"
                  placeholder="Tell us about your dental needs or questions..."
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="glass-card border-0 focus:ring-2 focus:ring-primary/50 transition-smooth resize-none"
                />
              </div>
              
              <Button 
                type="submit"
                className="w-full bg-gradient-primary hover-glow transition-bounce"
                size="lg"
              >
                <Send className="w-4 h-4 mr-2" />
                Send Message
              </Button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="glass-card p-8 rounded-2xl">
              <h3 className="text-2xl font-display font-semibold mb-6 text-foreground">
                Contact Information
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon;
                  const content = (
                    <div className="flex items-start space-x-4">
                      <div className="bg-gradient-primary rounded-xl p-3 glow-primary">
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-display font-semibold text-foreground mb-1">
                          {info.title}
                        </h4>
                        <p className="text-foreground font-medium mb-1">
                          {info.details}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {info.subtitle}
                        </p>
                      </div>
                    </div>
                  );
                  
                  return info.href ? (
                    <a 
                      key={index} 
                      href={info.href}
                      target={info.href.startsWith('https') ? '_blank' : undefined}
                      rel={info.href.startsWith('https') ? 'noopener noreferrer' : undefined}
                      className="hover:opacity-80 transition-opacity"
                    >
                      {content}
                    </a>
                  ) : (
                    <div key={index}>{content}</div>
                  );
                })}
              </div>
            </div>

            {/* Map */}
            <div className="glass-card p-8 rounded-2xl">
              <h4 className="font-display font-semibold text-lg mb-4 text-foreground">
                Find Us
              </h4>
              <a 
                href="https://maps.google.com/?q=6323+S+Rural+Rd+%23101,+Tempe,+AZ+85283"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <div className="bg-gradient-primary rounded-xl h-48 flex items-center justify-center glow-primary hover:opacity-90 transition-opacity cursor-pointer">
                  <div className="text-center text-white">
                    <MapPin className="w-12 h-12 mx-auto mb-3" />
                    <p className="font-medium">6323 S Rural Rd #101</p>
                    <p className="text-sm opacity-90">Tempe, AZ 85283 - Click for directions</p>
                  </div>
                </div>
              </a>
            </div>

            {/* Emergency Contact */}
            <div className="glass-card p-6 rounded-2xl bg-gradient-innovation glow-innovation">
              <div className="text-center text-white">
                <Phone className="w-8 h-8 mx-auto mb-3" />
                <h4 className="font-display font-semibold text-lg mb-2">
                  Dental Emergency?
                </h4>
                <p className="mb-4 opacity-90">
                  Call us for urgent dental care
                </p>
                <a href="tel:+14808207777">
                  <Button variant="secondary" className="bg-white text-innovation hover:bg-white/90 transition-smooth">
                    Call (480) 820-7777
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;