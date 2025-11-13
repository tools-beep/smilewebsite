import { SiteHeader } from "@/components/header-1";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Sparkles, ArrowRight } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const CosmeticDentistry = () => {
  const { ref: headerRef, isInView: headerInView } = useScrollAnimation();

  const services = [
    {
      title: "Invisalign",
      description: "Clear aligners for straightening teeth discreetly",
      link: "/services/invisalign",
      image: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=800&auto=format&fit=crop"
    },
    {
      title: "Teeth Whitening",
      description: "Professional-grade solutions for a brighter smile.",
      link: "/services/teeth-whitening",
      image: "https://images.unsplash.com/photo-1609137144813-7d9921338f24?w=800&auto=format&fit=crop"
    },
    {
      title: "Veneers",
      description: "Custom porcelain veneers for a flawless appearance.",
      link: "/services/veneers",
      image: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?w=800&auto=format&fit=crop"
    },
    {
      title: "Bonding",
      description: "Quick, minimally invasive cosmetic improvements.",
      link: "/services/bonding",
      image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=800&auto=format&fit=crop"
    },
    {
      title: "Cosmetic Consultations",
      description: "Expert guidance for personalized aesthetic treatments.",
      link: "/services/cosmetic-consultations",
      image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&auto=format&fit=crop"
    },
    {
      title: "Smile Makeovers",
      description: "Comprehensive treatments to fully rejuvenate your smile.",
      link: "/services/smile-makeover",
      image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=800&auto=format&fit=crop"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden bg-gradient-to-br from-background via-muted/10 to-background">
        <div className="absolute top-20 right-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div
            ref={headerRef}
            className={`max-w-4xl mx-auto text-center ${headerInView ? 'animate-slide-in-up' : 'opacity-0'}`}
          >
            <div className="inline-flex items-center px-6 py-3 rounded-full glass-card mb-6 glow-primary">
              <Sparkles className="w-5 h-5 text-primary mr-2" />
              <span className="font-medium text-foreground">SCHEDULE YOUR COSMETIC CONSULTATION TODAY</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 leading-tight">
              Transform Your Smile with Expert <span className="text-gradient-animate">Cosmetic Dentistry</span> in Tempe, AZ
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed mb-8">
              Personalized treatments designed for stunning, confident smiles
            </p>
            <Button size="xl" className="group transform transition-all duration-300 hover:scale-105">
              Schedule Now
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 text-foreground">
              At Smile Innovation,
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              we offer exceptional cosmetic dentistry tailored to enhance the beauty and confidence of your smile. Our treatments range from subtle enhancements to dramatic smile transformations, each customized to meet your unique aesthetic goals.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-center mb-12 text-foreground">
            Elevate Your Smile with Our Comprehensive Cosmetic Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {services.map((service, index) => (
              <Card 
                key={index}
                className="glass-card border-0 overflow-hidden hover:shadow-2xl transition-all duration-300 group animate-slide-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-display font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    {service.description}
                  </p>
                  <Button variant="outline" asChild className="w-full group/btn">
                    <Link to={service.link}>
                      Learn More
                      <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-center mb-16 text-foreground">
            Why Choose Smile Innovation
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {[
              { number: "01", title: "Advanced technology and equipment" },
              { number: "02", title: "Personalized patient care" },
              { number: "03", title: "Expert dental team" },
              { number: "04", title: "Commitment to comfort and convenience" }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="text-6xl font-bold text-primary/20 mb-4">{item.number}</div>
                <h3 className="text-xl font-semibold text-foreground">{item.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-innovation text-primary-foreground text-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            BOOK YOUR COSMETIC CONSULTATION TODAY
          </h2>
          <Button variant="secondary" size="xl" className="group transform transition-all duration-300 hover:scale-105">
            JOIN NOW
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CosmeticDentistry;


