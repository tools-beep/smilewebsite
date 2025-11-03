import { SiteHeader } from "@/components/header-1";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import AboutSection from "@/components/AboutSection";
import VideoCallToAction from "@/components/VideoCallToAction";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <main>
        <HeroSection />
        <ServicesSection />
        <AboutSection />
        <VideoCallToAction />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
