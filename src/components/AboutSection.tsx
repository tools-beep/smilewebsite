import { Users, Award, Clock, Heart } from "lucide-react";

const AboutSection = () => {
  const stats = [
    { icon: Users, number: "5000+", label: "Happy Patients" },
    { icon: Award, number: "15+", label: "Years Experience" },
    { icon: Clock, number: "24/7", label: "Emergency Care" },
    { icon: Heart, number: "99%", label: "Satisfaction Rate" }
  ];

  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              <span className="text-foreground">Pioneering the </span>
              <span className="bg-gradient-innovation bg-clip-text text-transparent">
                Future of Dentistry
              </span>
            </h2>
            
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              At Smile Innovations, we believe that exceptional dental care should be both cutting-edge and compassionate. Our team combines years of expertise with the latest technological advances to deliver treatments that are not only effective but also comfortable and convenient.
            </p>

            <div className="space-y-6 mb-8">
              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <div>
                  <h4 className="font-display font-semibold text-lg text-foreground mb-2">
                    Advanced Technology Integration
                  </h4>
                  <p className="text-muted-foreground">
                    We utilize AI-assisted diagnostics, laser dentistry, and 3D imaging to ensure precision and comfort in every procedure.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 bg-gradient-innovation rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <div>
                  <h4 className="font-display font-semibold text-lg text-foreground mb-2">
                    Patient-Centered Approach
                  </h4>
                  <p className="text-muted-foreground">
                    Every treatment plan is customized to your unique needs, ensuring optimal results and maximum comfort throughout your journey.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <div>
                  <h4 className="font-display font-semibold text-lg text-foreground mb-2">
                    Continuous Innovation
                  </h4>
                  <p className="text-muted-foreground">
                    Our commitment to staying at the forefront of dental innovation means you always receive the most advanced care available.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div 
                  key={index}
                  className="glass-card p-8 rounded-2xl text-center hover-scale transition-smooth group"
                >
                  <div className="bg-gradient-primary rounded-2xl w-16 h-16 flex items-center justify-center mx-auto mb-4 glow-primary group-hover:glow-innovation transition-smooth">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-display font-bold text-foreground mb-2">
                    {stat.number}
                  </div>
                  <div className="text-muted-foreground font-medium">
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;