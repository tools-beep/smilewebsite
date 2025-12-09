import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { SiteHeader } from "@/components/header-1";
import Footer from "@/components/Footer";
import { CheckCircle2, ArrowRight, Users, Award, Heart, Star } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import drBoydImage from "@/assets/drboyd.jpeg";
import drLindaImage from "@/assets/drlinda.JPG";

const About = () => {
  const { ref: heroRef, isInView: heroInView } = useScrollAnimation();
  const { ref: doctorsRef, isInView: doctorsInView } = useScrollAnimation();
  const { ref: whyUsRef, isInView: whyUsInView } = useScrollAnimation();

  const whyChooseUs = [
    {
      icon: Award,
      title: "Experienced care with over 40 years combined in dentistry",
      gradient: "bg-gradient-to-br from-primary/10 to-innovation/10"
    },
    {
      icon: Star,
      title: "Advanced technology for precision and comfort",
      gradient: "bg-gradient-to-br from-innovation/10 to-primary/10"
    },
    {
      icon: Users,
      title: "Trusted by hundreds of Tempe families",
      gradient: "bg-gradient-to-br from-primary/10 to-innovation/10"
    },
    {
      icon: Heart,
      title: "Multilingual care and personalized communication",
      gradient: "bg-gradient-to-br from-innovation/10 to-primary/10"
    },
    {
      icon: CheckCircle2,
      title: "A team that listens, explains, and empowers",
      gradient: "bg-gradient-to-br from-primary/10 to-innovation/10"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-br from-background via-muted/10 to-background">
        <div className="absolute top-20 right-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 left-20 w-64 h-64 bg-secondary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div
            ref={heroRef}
            className={`max-w-4xl mx-auto text-center ${heroInView ? 'animate-slide-in-up' : 'opacity-0'}`}
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full glass-card glow-primary mb-6">
              <Heart className="w-5 h-5 text-primary mr-2" />
              <span className="text-sm font-medium">About Our Practice</span>
            </div>
            
            <h1 className="text-3xl sm:text-5xl md:text-7xl font-display font-bold leading-tight mb-4 sm:mb-6">
              Compassionate Dental Care Starts With <span className="text-gradient-animate">Our Doctors</span>
          </h1>
            
            <p className="text-base sm:text-xl text-muted-foreground max-w-3xl mx-auto mb-6 sm:mb-8 px-4">
              Get to know the leaders behind Smile Innovation's patient-first philosophy in Tempe, AZ.
          </p>

            <a href="tel:+14808207777">
              <Button size="xl" className="group transform transition-all duration-300 hover:scale-105">
                Schedule a Visit
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Meet the Doctors Hero */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary/20 rounded-full blur-2xl"></div>
                <img 
                  src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&auto=format&fit=crop" 
                  alt="Dental team at work"
                  className="rounded-3xl shadow-2xl relative z-10"
                />
        </div>

              <div>
                <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-foreground">
                  Meet the Doctors at Smile Innovation
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            Compassionate care, advanced expertise, and a commitment to helping you smile brighter.
          </p>
                <a href="tel:+14808207777">
                  <Button variant="premium" size="xl" className="group transform transition-all duration-300 hover:scale-105">
                    Schedule Your Appointment
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Your Trusted Healthcare Provider */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <Card className="glass-card border-0 shadow-2xl overflow-hidden">
              <CardContent className="p-8 md:p-12">
                <div className="flex items-start mb-6">
                  <div className="w-1 h-16 bg-gradient-primary mr-6 rounded-full"></div>
                  <h3 className="text-3xl md:text-4xl font-display font-bold text-foreground uppercase">
                    About Your Trusted Healthcare Provider
                  </h3>
                </div>
                <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                  <p>
                    At Smile Innovation, we believe great dentistry starts with connection and trust. That's why we're proud to introduce you to our leadership team—two dedicated professionals who bring decades of clinical experience, cutting-edge dental techniques, and a genuine love for the Tempe community.
            </p>
                  <p>
                    Whether you're here for a routine visit or a full smile transformation, Dr. Boyd and Dr. Linda Ma are here to guide your journey with precision, warmth, and purpose.
            </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
          </section>

      {/* Doctor Profiles */}
      <section
        ref={doctorsRef}
        className={`py-20 bg-muted/30 ${doctorsInView ? 'animate-slide-in-up' : 'opacity-0'}`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto space-y-16">
            {/* Dr. Boyd Patummas */}
            <Card className="glass-card border-0 shadow-2xl overflow-hidden hover:shadow-3xl transition-all duration-300">
              <CardContent className="p-0">
                <div className="grid md:grid-cols-5 gap-0">
                  <div className="md:col-span-2 relative h-[400px] md:h-auto">
                    <img 
                      src={drBoydImage} 
                      alt="Dr. Boyd Patummas"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-black/60 to-transparent"></div>
                  </div>
                  
                  <div className="md:col-span-3 p-8 md:p-12">
                    <div className="inline-flex px-4 py-2 bg-primary/10 rounded-full mb-4">
                      <span className="text-sm font-semibold text-primary">Lead Dentist</span>
                    </div>
                    
                    <h3 className="text-4xl md:text-5xl font-display font-bold mb-6 text-foreground">
                      Dr. Boyd Patummas DMD
                    </h3>
                    
                    <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              With over 20 years of hands-on experience, Dr. Boyd is known for his calming presence, attention to detail, and passion for restoring confidence through dentistry. He specializes in cosmetic and restorative procedures, blending function with natural aesthetics.
            </p>

                    <div className="space-y-4 mb-8">
                      <div className="flex items-start">
                        <CheckCircle2 className="w-6 h-6 text-primary mr-3 flex-shrink-0 mt-1" />
                        <span className="text-foreground font-medium">UC Irvine Graduate (1998)</span>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle2 className="w-6 h-6 text-primary mr-3 flex-shrink-0 mt-1" />
                        <span className="text-foreground font-medium">DDS, Temple University School of Dentistry (2004)</span>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle2 className="w-6 h-6 text-primary mr-3 flex-shrink-0 mt-1" />
                        <span className="text-foreground font-medium">Fluent in English & Thai</span>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle2 className="w-6 h-6 text-primary mr-3 flex-shrink-0 mt-1" />
                        <span className="text-foreground font-medium">Passionate about automotive design, mountain biking, and precision-based care</span>
                      </div>
                    </div>

                    <a href="#contact">
                      <Button variant="outline" size="lg" className="group">
                        Contact Dr. Boyd
                        <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Dr. Linda Ma */}
            <Card className="glass-card border-0 shadow-2xl overflow-hidden hover:shadow-3xl transition-all duration-300">
              <CardContent className="p-0">
                <div className="grid md:grid-cols-5 gap-0">
                  <div className="md:col-span-3 p-8 md:p-12 order-2 md:order-1">
                    <div className="inline-flex px-4 py-2 bg-innovation/10 rounded-full mb-4">
                      <span className="text-sm font-semibold text-innovation">Practice Director</span>
                    </div>
                    
                    <h3 className="text-4xl md:text-5xl font-display font-bold mb-6 text-foreground">
                      Dr. Linda Ma
                    </h3>
                    
                    <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                      Dr. Ma brings a rare combination of clinical experience and business insight. A Temple-trained dentist with 20+ years in the field, she leads Smile Innovation's systems, patient experience, and technological growth—ensuring every visit is smooth, modern, and memorable.
                    </p>

                    <div className="space-y-4 mb-8">
                      <div className="flex items-start">
                        <CheckCircle2 className="w-6 h-6 text-innovation mr-3 flex-shrink-0 mt-1" />
                        <span className="text-foreground font-medium">DDS, Temple University School of Dentistry (2004)</span>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle2 className="w-6 h-6 text-innovation mr-3 flex-shrink-0 mt-1" />
                        <span className="text-foreground font-medium">Advanced training in dental implants, laser dentistry, and sleep care</span>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle2 className="w-6 h-6 text-innovation mr-3 flex-shrink-0 mt-1" />
                        <span className="text-foreground font-medium">Background in data, systems, and photography</span>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle2 className="w-6 h-6 text-innovation mr-3 flex-shrink-0 mt-1" />
                        <span className="text-foreground font-medium">Passionate about baking, design, and patient education</span>
                      </div>
                    </div>

                    <a href="#contact">
                      <Button variant="outline" size="lg" className="group">
                        Contact Dr. Ma
                        <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </a>
                  </div>

                  <div className="md:col-span-2 relative h-[400px] md:h-auto order-1 md:order-2">
                    <img 
                      src={drLindaImage} 
                      alt="Dr. Linda Ma"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-l from-black/60 to-transparent"></div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
            </div>
          </section>

      {/* Why Our Patients Choose Us */}
      <section
        ref={whyUsRef}
        className={`py-20 bg-background ${whyUsInView ? 'animate-slide-in-up' : 'opacity-0'}`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-foreground">
                Why Our Patients Choose Us
              </h2>
              <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {whyChooseUs.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <Card 
                    key={index}
                    className={`glass-card border-0 hover:shadow-2xl transition-all duration-300 group hover:-translate-y-2 ${item.gradient}`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <CardContent className="p-8">
                      <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                      <p className="text-lg font-semibold text-foreground leading-relaxed">
                        {item.title}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
            </div>
          </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-br from-primary to-innovation text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 leading-tight">
              Let our doctors help you smile with confidence — your journey starts with one click.
            </h2>
            <a href="tel:+14808207777">
              <Button 
                variant="secondary" 
                size="xl" 
                className="group transform transition-all duration-300 hover:scale-105"
              >
                Book Your Appointment Today
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
