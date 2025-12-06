import { ReactNode } from "react";
import { SiteHeader } from "@/components/header-1";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Check, ArrowRight, Phone } from "lucide-react";
import { Link } from "react-router-dom";

interface ServiceTemplateProps {
  title: string;
  subtitle: string;
  description: string;
  heroImage?: string;
  benefits: string[];
  process?: {
    step: number;
    title: string;
    description: string;
  }[];
  faqs?: {
    question: string;
    answer: string;
  }[];
  relatedServices?: {
    name: string;
    link: string;
  }[];
  icon?: ReactNode;
}

const ServiceTemplate = ({
  title,
  subtitle,
  description,
  heroImage,
  benefits,
  process,
  faqs,
  relatedServices,
  icon,
}: ServiceTemplateProps) => {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5"></div>
        <div className="absolute top-20 right-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 left-20 w-64 h-64 bg-secondary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 animate-slide-in-left">
                <div className="inline-flex items-center px-4 py-2 rounded-full glass-card glow-primary">
                  {icon && <span className="mr-2">{icon}</span>}
                  <span className="text-sm font-medium text-foreground">{subtitle}</span>
                </div>
                
                <h1 className="text-5xl md:text-7xl font-display font-bold leading-tight">
                  <span className="text-gradient-animate">{title}</span>
                </h1>
                
                <p className="text-xl text-muted-foreground leading-relaxed">
                  {description}
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <a href="tel:+14808207777">
                    <Button 
                      variant="premium" 
                      size="xl"
                      className="group transform transition-all duration-300 hover:scale-105"
                    >
                      <Calendar className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
                      Book Consultation
                      <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </a>
                  <a href="tel:+14808207777">
                    <Button 
                      variant="outline" 
                      size="xl"
                      className="group"
                    >
                      <Phone className="w-5 h-5 mr-2" />
                      Call Us: (480) 820-7777
                    </Button>
                  </a>
                </div>
              </div>
              
              <div className="relative animate-slide-in-right">
                <div className="relative glass-card rounded-3xl overflow-hidden shadow-2xl glow-primary">
                  {heroImage ? (
                    <img 
                      src={heroImage} 
                      alt={title}
                      className="w-full h-[400px] object-cover"
                    />
                  ) : (
                    <div className="w-full h-[400px] bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                      <div className="text-8xl">{icon}</div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16 animate-slide-in-up">
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
                Why Choose <span className="text-gradient-animate">{title}</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Experience the benefits of advanced dental care with our expert team
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <Card 
                  key={index}
                  className="glass-card border-0 hover:shadow-xl transition-all duration-300 hover:scale-105 animate-slide-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center">
                        <Check className="w-5 h-5 text-white" />
                      </div>
                      <p className="text-foreground font-medium leading-relaxed">{benefit}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      {process && process.length > 0 && (
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16 animate-slide-in-up">
                <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
                  Treatment <span className="text-gradient-animate">Process</span>
                </h2>
                <p className="text-xl text-muted-foreground">
                  What to expect during your visit
                </p>
              </div>
              
              <div className="space-y-8">
                {process.map((step, index) => (
                  <div 
                    key={index}
                    className="glass-card rounded-2xl p-8 hover:shadow-xl transition-all duration-300 animate-slide-in-left"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex items-start space-x-6">
                      <div className="flex-shrink-0">
                        <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center text-white font-bold text-2xl">
                          {step.step}
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-display font-bold mb-3">{step.title}</h3>
                        <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* FAQs Section */}
      {faqs && faqs.length > 0 && (
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16 animate-slide-in-up">
                <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
                  Frequently Asked <span className="text-gradient-animate">Questions</span>
                </h2>
              </div>
              
              <div className="space-y-6">
                {faqs.map((faq, index) => (
                  <Card 
                    key={index}
                    className="glass-card border-0 animate-slide-in-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <CardContent className="p-8">
                      <h3 className="text-xl font-bold mb-4 text-foreground">{faq.question}</h3>
                      <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Related Services */}
      {relatedServices && relatedServices.length > 0 && (
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12 animate-slide-in-up">
                <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                  Related <span className="text-gradient-animate">Services</span>
                </h2>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6">
                {relatedServices.map((service, index) => (
                  <Link 
                    key={index}
                    to={service.link}
                    className="group"
                  >
                    <Card className="glass-card border-0 hover:shadow-xl transition-all duration-300 hover:scale-105 animate-slide-in-up"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between">
                          <span className="text-lg font-semibold group-hover:text-primary transition-colors">
                            {service.name}
                          </span>
                          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto">
            <Card className="glass-card border-0 shadow-2xl animate-slide-in-up">
              <CardContent className="p-12 text-center">
                <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
                  Ready to Get Started?
                </h2>
                <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                  Schedule your consultation today and take the first step towards your perfect smile
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a href="tel:+14808207777">
                    <Button 
                      variant="premium" 
                      size="xl"
                      className="group transform transition-all duration-300 hover:scale-105"
                    >
                      <Calendar className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
                      Schedule Consultation
                    </Button>
                  </a>
                  <Button 
                    variant="outline" 
                    size="xl"
                    asChild
                  >
                    <Link to="/services">
                      View All Services
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Link>
                  </Button>
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

export default ServiceTemplate;

