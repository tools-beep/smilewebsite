import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const ContactSection = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: "(555) 123-4567",
      subtitle: "24/7 Emergency Line"
    },
    {
      icon: Mail,
      title: "Email",
      details: "hello@smileinnovations.com",
      subtitle: "We'll respond within 24hrs"
    },
    {
      icon: MapPin,
      title: "Location",
      details: "123 Innovation Drive, Tech City",
      subtitle: "Easy parking available"
    },
    {
      icon: Clock,
      title: "Hours",
      details: "Mon-Fri: 8AM-6PM",
      subtitle: "Sat: 9AM-3PM, Sun: Closed"
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
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    First Name
                  </label>
                  <Input 
                    type="text" 
                    placeholder="John"
                    className="glass-card border-0 focus:ring-2 focus:ring-primary/50 transition-smooth"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Last Name
                  </label>
                  <Input 
                    type="text" 
                    placeholder="Doe"
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
                  placeholder="john@example.com"
                  className="glass-card border-0 focus:ring-2 focus:ring-primary/50 transition-smooth"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Phone Number
                </label>
                <Input 
                  type="tel" 
                  placeholder="(555) 123-4567"
                  className="glass-card border-0 focus:ring-2 focus:ring-primary/50 transition-smooth"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Message
                </label>
                <Textarea 
                  placeholder="Tell us about your dental needs or questions..."
                  rows={4}
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
                  return (
                    <div key={index} className="flex items-start space-x-4">
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
                })}
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="glass-card p-8 rounded-2xl">
              <h4 className="font-display font-semibold text-lg mb-4 text-foreground">
                Find Us
              </h4>
              <div className="bg-gradient-primary rounded-xl h-48 flex items-center justify-center glow-primary">
                <div className="text-center text-white">
                  <MapPin className="w-12 h-12 mx-auto mb-3" />
                  <p className="font-medium">Interactive Map</p>
                  <p className="text-sm opacity-90">Click to view directions</p>
                </div>
              </div>
            </div>

            {/* Emergency Contact */}
            <div className="glass-card p-6 rounded-2xl bg-gradient-innovation glow-innovation">
              <div className="text-center text-white">
                <Phone className="w-8 h-8 mx-auto mb-3" />
                <h4 className="font-display font-semibold text-lg mb-2">
                  Dental Emergency?
                </h4>
                <p className="mb-4 opacity-90">
                  We're available 24/7 for urgent dental care
                </p>
                <Button variant="secondary" className="bg-white text-innovation hover:bg-white/90 transition-smooth">
                  Call Emergency Line
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;