import { Smile, Zap, Eye, Heart, Shield, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollAnimation, useStaggeredAnimation } from "@/hooks/useScrollAnimation";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Link } from "react-router-dom";

const ServicesSection = () => {
  const { ref: headerRef, isInView: headerInView } = useScrollAnimation();
  const { containerRef, visibleItems } = useStaggeredAnimation(6, 150);

  const services = [
    {
      icon: Sparkles,
      title: "Cosmetic Dentistry",
      description: "Personalized treatments designed for stunning, confident smiles.",
      features: [
        "Teeth Whitening",
        "Invisalign",
        "Veneers",
        "Smile Makeover",
        "Bonding",
        "Cosmetic consultations",
      ],
      color: "text-primary",
      gradient: "bg-gradient-primary",
      link: "/services/cosmetic-dentistry",
    },
    {
      icon: Shield,
      title: "Restorative & Reconstructive Dentistry",
      description: "Comprehensive solutions for long-term dental health and aesthetics.",
      features: [
        "Crowns & Bridges",
        "Implants",
        "Full Mouth Rehabilitation",
        "Dentures & Partials",
        "Tooth-Colored Fillings",
      ],
      color: "text-secondary",
      gradient: "bg-gradient-innovation",
      link: "/services/restorative-reconstructive",
    },
    {
      icon: Heart,
      title: "General & Family Dentistry",
      description: "Focused on prevention, comfort, and long-term oral health.",
      features: [
        "Pediatric Dentistry",
        "Cleaning and exams",
        "Sealants and fluoride",
        "Xrays",
        "Night Guard",
      ],
      color: "text-innovation",
      gradient: "bg-gradient-primary",
      link: "/services/general-family",
    },
    {
      icon: Zap,
      title: "Surgical & Emergency Dentistry",
      description: "Providing quick relief and comprehensive surgical solutions.",
      features: [
        "Emergency Dentistry",
        "Root canal Treatment",
        "Oral Surgery",
        "Tooth Extraction",
        "Sleep Dentistry",
        "Laser Dentistry",
      ],
      color: "text-accent",
      gradient: "bg-gradient-innovation",
      link: "/services/surgical-emergency",
    },
  ];

  function getCategoryAnchorId(title: string): string {
    switch (title) {
      case "Cosmetic Dentistry":
        return "services-cosmetic";
      case "General & Family Dentistry":
        return "services-general";
      case "Restorative & Reconstructive Dentistry":
        return "services-restorative";
      case "Surgical & Emergency Dentistry":
        return "services-surgical";
      default:
        return "";
    }
  }

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-background via-muted/10 to-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-secondary/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Enhanced Section Header */}
        <div 
          ref={headerRef}
          className={`text-center mb-16 ${headerInView ? 'animate-slide-in-up' : 'opacity-0'}`}
        >
          <div className="inline-flex items-center px-6 py-3 rounded-full glass-card mb-6 glow-primary">
            <Sparkles className="w-5 h-5 text-primary mr-3 animate-pulse" />
            <span className="font-medium text-foreground">Our Services</span>
          </div>
          
          <h2 className="text-5xl md:text-7xl font-display font-bold mb-8 leading-tight">
            <span className="text-foreground">Advanced </span>
            <span className="text-gradient-animate">
              Dental Solutions
            </span>
          </h2>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Discover our comprehensive range of innovative treatments designed to deliver exceptional results with maximum comfort.
          </p>
        </div>

        {/* Services Carousel */}
        <div ref={containerRef}>
          <Carousel className="w-full">
            <CarouselContent>
              {services.map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <CarouselItem key={index} id={getCategoryAnchorId(service.title)} className="md:basis-1/2 lg:basis-1/3">
                    <div 
                      className={`
                        card-3d group relative overflow-hidden rounded-3xl p-8 h-full
                        glass-card hover:shadow-2xl transition-all duration-500
                        ${visibleItems.has(index) ? 'animate-slide-in-up opacity-100' : 'opacity-0'}
                      `}
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      {/* Background Pattern */}
                      <div className="absolute inset-0 opacity-5">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-primary rounded-full blur-2xl"></div>
                        <div className="absolute bottom-0 left-0 w-24 h-24 bg-accent rounded-full blur-2xl"></div>
                      </div>

                      {/* Icon */}
                      <div className={`
                        w-16 h-16 ${service.gradient} rounded-2xl flex items-center justify-center mb-6 
                        glow-primary group-hover:glow-innovation transition-all duration-300
                        group-hover:scale-110 group-hover:rotate-3
                      `}>
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>

                      {/* Content */}
                      <h3 className="text-2xl font-display font-bold mb-4 group-hover:text-primary transition-colors duration-300">
                        {service.title}
                      </h3>
                      
                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        {service.description}
                      </p>

                      {/* Features */}
                      <ul className="space-y-3 mb-6">
                        {service.features.map((feature, featureIndex) => (
                          <li 
                            key={featureIndex} 
                            className={`
                              flex items-center text-sm text-muted-foreground
                              transform transition-all duration-300
                              ${visibleItems.has(index) ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'}
                            `}
                            style={{ transitionDelay: `${index * 0.1 + 0.2 + featureIndex * 0.1}s` }}
                          >
                            <div className="w-2 h-2 bg-primary rounded-full mr-3 animate-pulse"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>

                      {/* CTA */}
                      <Button 
                        variant="ghost" 
                        className="group/btn w-full justify-between hover:bg-primary/10 hover:text-primary transition-all duration-300"
                        asChild
                      >
                        <Link to={service.link}>
                        Learn More
                        <div className="w-0 group-hover/btn:w-6 overflow-hidden transition-all duration-300">
                          →
                        </div>
                        </Link>
                      </Button>

                      {/* Hover Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                  </CarouselItem>
                );
              })}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>

        {/* Enhanced Bottom CTA */}
        <div className={`text-center mt-20 ${headerInView ? 'animate-slide-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.8s' }}>
          <div className="glass-card rounded-3xl p-8 md:p-12 max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="text-left">
                <h3 className="text-3xl md:text-4xl font-display font-bold mb-4">
                  Ready to Transform Your Smile?
                </h3>
                <p className="text-lg text-muted-foreground">
                  Book your consultation today and experience the future of dental care.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 flex-shrink-0">
                <Button 
                  variant="premium" 
                  size="xl" 
                  className="group transform transition-all duration-300 hover:scale-105"
                >
                  Schedule Consultation
                  <Sparkles className="ml-3 w-6 h-6 group-hover:rotate-12 transition-transform" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;