import { ArrowRight, Sparkles, Shield, Clock, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import AnimatedParticles from "@/components/AnimatedParticles";
import heroImage from "@/assets/hero-dental.jpg";

const HeroSection = () => {
  const { ref: heroRef, isInView } = useScrollAnimation(0.2);

  return (
    <section 
      id="home" 
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated Particles Background */}
      <AnimatedParticles />
      
      {/* Background Image with Dynamic Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-1000"
        style={{
          backgroundImage: `url(${heroImage})`,
          transform: isInView ? 'scale(1.05)' : 'scale(1)',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-background/90 via-background/70 to-primary/20"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent"></div>
      </div>

      {/* Floating geometric elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-primary/10 rounded-full animate-float" style={{ animationDelay: '0s' }}></div>
        <div className="absolute top-3/4 right-1/4 w-24 h-24 bg-accent/10 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-3/4 w-16 h-16 bg-secondary/10 rounded-full animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      {/* Asymmetrical Content Layout */}
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center min-h-screen">
          {/* Left Column - Main Content */}
          <div className="lg:col-span-7 space-y-8">
            {/* Animated Badge */}
            <div className={`inline-flex items-center px-6 py-3 rounded-full glass-card hover:shadow-2xl transition-all duration-500 ${isInView ? 'animate-slide-in-left' : ''}`}>
              <Sparkles className="w-5 h-5 text-primary mr-3 animate-pulse" />
              <span className="text-base font-medium text-foreground">
                Experience the Future of Dental Care
              </span>
              <Zap className="w-4 h-4 text-accent ml-3 animate-bounce" />
            </div>

            {/* Animated Main Heading */}
            <div className={`space-y-4 ${isInView ? 'animate-slide-in-up' : ''}`} style={{ animationDelay: '0.2s' }}>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold leading-tight">
                <span className="block text-foreground mb-2">Welcome to</span>
                <span className="block text-gradient-animate text-6xl md:text-8xl lg:text-9xl">
                  Smile Innovations
                </span>
              </h1>
            </div>

            {/* Animated Subtitle */}
            <p className={`text-xl md:text-2xl text-muted-foreground max-w-2xl leading-relaxed ${isInView ? 'animate-slide-in-up' : ''}`} style={{ animationDelay: '0.4s' }}>
              Where cutting-edge technology meets compassionate care. Experience precision, comfort, and innovation in every treatment.
            </p>

            {/* Enhanced CTA Buttons */}
            <div className={`flex flex-col sm:flex-row gap-6 ${isInView ? 'animate-slide-in-up' : ''}`} style={{ animationDelay: '0.6s' }}>
              <a href="tel:+14808207777">
                <Button 
                  variant="premium"
                  size="xl"
                  className="group transform transition-all duration-300 hover:scale-105"
                >
                  Book Your Appointment
                  <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>
              <a href="#services">
                <Button 
                  variant="glass"
                  size="xl"
                  className="group transform transition-all duration-300 hover:scale-105"
                >
                  Explore Our Services
                  <Sparkles className="ml-3 w-6 h-6 group-hover:rotate-12 transition-transform" />
                </Button>
              </a>
            </div>
          </div>

          {/* Right Column - PNG Image */}
          <div className="lg:col-span-5 space-y-6">
            <div className={`${isInView ? 'animate-slide-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
              <img
                src="/assets/smilehero.png"
                alt="Smile Innovations"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;