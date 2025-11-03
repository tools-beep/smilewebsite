import { Button } from "@/components/ui/button";
import { Calendar, Phone } from "lucide-react";
import droneVideo from "@/assets/drone.mov";

const VideoCallToAction = () => {
  return (
    <section className="relative h-[600px] md:h-[700px] w-full overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={droneVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70"></div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center animate-slide-in-up">
            {/* Main Heading */}
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-6 leading-tight">
              Ready to Transform
              <br />
              <span className="text-gradient-animate">Your Smile?</span>
            </h2>

            {/* Subheading */}
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
              Experience exceptional dental care in Tempe, AZ. Our expert team is ready to help you achieve the healthy, beautiful smile you deserve.
            </p>

            {/* Stats or Benefits */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10 max-w-3xl mx-auto">
              <div className="glass-card p-6 rounded-2xl backdrop-blur-md bg-white/10 border border-white/20">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">15+</div>
                <div className="text-white/80 text-sm md:text-base">Years of Excellence</div>
              </div>
              <div className="glass-card p-6 rounded-2xl backdrop-blur-md bg-white/10 border border-white/20">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">5000+</div>
                <div className="text-white/80 text-sm md:text-base">Happy Patients</div>
              </div>
              <div className="glass-card p-6 rounded-2xl backdrop-blur-md bg-white/10 border border-white/20">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">98%</div>
                <div className="text-white/80 text-sm md:text-base">Satisfaction Rate</div>
              </div>
            </div>

            {/* Call to Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                variant="premium" 
                size="xl"
                className="group transform transition-all duration-300 hover:scale-110 shadow-2xl"
              >
                <Calendar className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
                Book Your Appointment
              </Button>
              
              <Button 
                variant="outline" 
                size="xl"
                className="bg-white/10 backdrop-blur-md border-white/30 text-white hover:bg-white hover:text-primary transition-all duration-300"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call: (480) 820-7777
              </Button>
            </div>

            {/* Additional Info */}
            <p className="text-white/70 text-sm mt-8">
              Same-day appointments available • Free consultations • Flexible financing options
            </p>
          </div>
        </div>
      </div>

      {/* Animated scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-white/70 rounded-full animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default VideoCallToAction;

