import { SiteHeader } from "@/components/header-1";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Sparkles, Heart, Shield, Zap, ArrowRight } from "lucide-react";

const Services = () => {
  const serviceCategories = [
    {
      icon: Sparkles,
      title: "Cosmetic Dentistry",
      description: "Personalized treatments designed for stunning, confident smiles.",
      services: [
        { name: "Teeth Whitening", link: "/services/teeth-whitening" },
        { name: "Invisalign", link: "/services/invisalign" },
        { name: "Veneers", link: "/services/veneers" },
        { name: "Smile Makeover", link: "/services/smile-makeover" },
        { name: "Bonding", link: "/services/bonding" },
        { name: "Cosmetic Consultations", link: "/services/cosmetic-consultations" },
      ],
      link: "/services/cosmetic-dentistry",
      gradient: "bg-gradient-primary",
    },
    {
      icon: Heart,
      title: "General & Family Dentistry",
      description: "Focused on prevention, comfort, and long-term oral health.",
      services: [
        { name: "Pediatric Dentistry", link: "/services/pediatric-dentistry" },
        { name: "Cleaning and Exams", link: "/services/cleaning-exams" },
        { name: "Sealants and Fluoride", link: "/services/sealants-fluoride" },
        { name: "X-rays", link: "/services/xrays" },
        { name: "Night Guard", link: "/services/night-guard" },
      ],
      link: "/services/general-family",
      gradient: "bg-gradient-primary",
    },
    {
      icon: Shield,
      title: "Restorative & Reconstructive Dentistry",
      description: "Comprehensive solutions for long-term dental health and aesthetics.",
      services: [
        { name: "Crowns & Bridges", link: "/services/crowns-bridges" },
        { name: "Dental Implants", link: "/services/implants" },
        { name: "Full Mouth Rehabilitation", link: "/services/full-mouth-rehabilitation" },
        { name: "Dentures & Partials", link: "/services/dentures-partials" },
        { name: "Tooth-Colored Fillings", link: "/services/tooth-colored-fillings" },
      ],
      link: "/services/restorative-reconstructive",
      gradient: "bg-gradient-innovation",
    },
    {
      icon: Zap,
      title: "Surgical & Emergency Dentistry",
      description: "Providing quick relief and comprehensive surgical solutions.",
      services: [
        { name: "Emergency Dentistry", link: "/services/emergency-dentistry" },
        { name: "Root Canal Treatment", link: "/services/root-canal" },
        { name: "Oral Surgery", link: "/services/oral-surgery" },
        { name: "Tooth Extraction", link: "/services/tooth-extraction" },
        { name: "Sleep Dentistry", link: "/services/sleep-dentistry" },
        { name: "Laser Dentistry", link: "/services/laser-dentistry" },
      ],
      link: "/services/surgical-emergency",
      gradient: "bg-gradient-innovation",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5"></div>
        <div className="absolute top-20 right-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 left-20 w-64 h-64 bg-secondary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-slide-in-up">
            <div className="inline-flex items-center px-4 py-2 rounded-full glass-card glow-primary mb-6">
              <Sparkles className="w-5 h-5 text-primary mr-2" />
              <span className="text-sm font-medium">Our Services</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-display font-bold leading-tight mb-6">
              Comprehensive Dental <span className="text-gradient-animate">Care</span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Discover our full range of dental services designed to keep your smile healthy, beautiful, and confident. From routine care to advanced treatments, we're here for you.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {serviceCategories.map((category, index) => {
                const IconComponent = category.icon;
                return (
                  <Card 
                    key={index}
                    className="glass-card border-0 hover:shadow-2xl transition-all duration-300 animate-slide-in-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <CardContent className="p-8">
                      {/* Category Header */}
                      <Link to={category.link} className="group block mb-6">
                        <div className="flex items-start justify-between mb-4">
                          <div className={`w-16 h-16 ${category.gradient} rounded-2xl flex items-center justify-center glow-primary group-hover:glow-innovation transition-all duration-300 group-hover:scale-110`}>
                            <IconComponent className="w-8 h-8 text-white" />
                          </div>
                          <ArrowRight className="w-6 h-6 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all duration-300" />
                        </div>
                        
                        <h2 className="text-3xl font-display font-bold mb-3 group-hover:text-primary transition-colors">
                          {category.title}
                        </h2>
                        <p className="text-muted-foreground">{category.description}</p>
                      </Link>

                      {/* Services List */}
                      <div className="space-y-3 pt-4 border-t border-border/50">
                        {category.services.map((service, serviceIndex) => (
                          <Link
                            key={serviceIndex}
                            to={service.link}
                            className="group/service flex items-center justify-between px-4 py-3 rounded-lg hover:bg-muted/50 transition-all duration-300"
                          >
                            <span className="text-foreground group-hover/service:text-primary transition-colors font-medium">
                              {service.name}
                            </span>
                            <ArrowRight className="w-4 h-4 text-muted-foreground group-hover/service:text-primary group-hover/service:translate-x-1 transition-all duration-300" />
                          </Link>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Card className="glass-card border-0 shadow-2xl">
              <CardContent className="p-12">
                <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
                  Not Sure Which Service You Need?
                </h2>
                <p className="text-xl text-muted-foreground mb-8">
                  Schedule a consultation and our team will help you find the perfect treatment for your needs.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link 
                    to="/services/cosmetic-consultations"
                    className="inline-flex items-center justify-center px-8 py-4 bg-gradient-primary text-white rounded-xl font-semibold hover:shadow-xl transition-all duration-300 hover:scale-105"
                  >
                    Book Free Consultation
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                  <a 
                    href="tel:+14808207777"
                    className="inline-flex items-center justify-center px-8 py-4 bg-white border-2 border-primary text-primary rounded-xl font-semibold hover:bg-primary hover:text-white transition-all duration-300"
                  >
                    Call: (480) 820-7777
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;


