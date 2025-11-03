import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import About from "./pages/About";
import Services from "./pages/Services";
import { ThemeProvider } from "next-themes";
import { AnimatePresence, motion } from "motion/react";

// Service Category Pages
import CosmeticDentistry from "./pages/services/CosmeticDentistry";
import GeneralFamily from "./pages/services/GeneralFamily";
import RestorativeReconstructive from "./pages/services/RestorativeReconstructive";
import SurgicalEmergency from "./pages/services/SurgicalEmergency";

// Cosmetic Dentistry Services
import TeethWhitening from "./pages/services/cosmetic/TeethWhitening";
import Invisalign from "./pages/services/cosmetic/Invisalign";
import Veneers from "./pages/services/cosmetic/Veneers";
import SmileMakeover from "./pages/services/cosmetic/SmileMakeover";
import Bonding from "./pages/services/cosmetic/Bonding";
import CosmeticConsultations from "./pages/services/cosmetic/CosmeticConsultations";

// General & Family Services
import PediatricDentistry from "./pages/services/general/PediatricDentistry";
import CleaningExams from "./pages/services/general/CleaningExams";
import SealantsFluoride from "./pages/services/general/SealantsFluoride";
import Xrays from "./pages/services/general/Xrays";
import NightGuard from "./pages/services/general/NightGuard";

// Restorative & Reconstructive Services
import CrownsBridges from "./pages/services/restorative/CrownsBridges";
import Implants from "./pages/services/restorative/Implants";
import FullMouthRehabilitation from "./pages/services/restorative/FullMouthRehabilitation";
import DenturesPartials from "./pages/services/restorative/DenturesPartials";
import ToothColoredFillings from "./pages/services/restorative/ToothColoredFillings";

// Surgical & Emergency Services
import EmergencyDentistry from "./pages/services/surgical/EmergencyDentistry";
import RootCanal from "./pages/services/surgical/RootCanal";
import OralSurgery from "./pages/services/surgical/OralSurgery";
import ToothExtraction from "./pages/services/surgical/ToothExtraction";
import SleepDentistry from "./pages/services/surgical/SleepDentistry";
import LaserDentistry from "./pages/services/surgical/LaserDentistry";

const queryClient = new QueryClient();

const AnimatedRoutes = () => {
  const location = useLocation();
  
  const pageTransition = {
    initial: { opacity: 0, y: 16 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -16 },
    transition: { duration: 0.25 }
  };

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<motion.div {...pageTransition}><Index /></motion.div>} />
        <Route path="/about" element={<motion.div {...pageTransition}><About /></motion.div>} />
        <Route path="/services" element={<motion.div {...pageTransition}><Services /></motion.div>} />
        
        {/* Service Category Pages */}
        <Route path="/services/cosmetic-dentistry" element={<motion.div {...pageTransition}><CosmeticDentistry /></motion.div>} />
        <Route path="/services/general-family" element={<motion.div {...pageTransition}><GeneralFamily /></motion.div>} />
        <Route path="/services/restorative-reconstructive" element={<motion.div {...pageTransition}><RestorativeReconstructive /></motion.div>} />
        <Route path="/services/surgical-emergency" element={<motion.div {...pageTransition}><SurgicalEmergency /></motion.div>} />
        
        {/* Cosmetic Dentistry Services */}
        <Route path="/services/teeth-whitening" element={<motion.div {...pageTransition}><TeethWhitening /></motion.div>} />
        <Route path="/services/invisalign" element={<motion.div {...pageTransition}><Invisalign /></motion.div>} />
        <Route path="/services/veneers" element={<motion.div {...pageTransition}><Veneers /></motion.div>} />
        <Route path="/services/smile-makeover" element={<motion.div {...pageTransition}><SmileMakeover /></motion.div>} />
        <Route path="/services/bonding" element={<motion.div {...pageTransition}><Bonding /></motion.div>} />
        <Route path="/services/cosmetic-consultations" element={<motion.div {...pageTransition}><CosmeticConsultations /></motion.div>} />
        
        {/* General & Family Services */}
        <Route path="/services/pediatric-dentistry" element={<motion.div {...pageTransition}><PediatricDentistry /></motion.div>} />
        <Route path="/services/cleaning-exams" element={<motion.div {...pageTransition}><CleaningExams /></motion.div>} />
        <Route path="/services/sealants-fluoride" element={<motion.div {...pageTransition}><SealantsFluoride /></motion.div>} />
        <Route path="/services/xrays" element={<motion.div {...pageTransition}><Xrays /></motion.div>} />
        <Route path="/services/night-guard" element={<motion.div {...pageTransition}><NightGuard /></motion.div>} />
        
        {/* Restorative & Reconstructive Services */}
        <Route path="/services/crowns-bridges" element={<motion.div {...pageTransition}><CrownsBridges /></motion.div>} />
        <Route path="/services/implants" element={<motion.div {...pageTransition}><Implants /></motion.div>} />
        <Route path="/services/full-mouth-rehabilitation" element={<motion.div {...pageTransition}><FullMouthRehabilitation /></motion.div>} />
        <Route path="/services/dentures-partials" element={<motion.div {...pageTransition}><DenturesPartials /></motion.div>} />
        <Route path="/services/tooth-colored-fillings" element={<motion.div {...pageTransition}><ToothColoredFillings /></motion.div>} />
        
        {/* Surgical & Emergency Services */}
        <Route path="/services/emergency-dentistry" element={<motion.div {...pageTransition}><EmergencyDentistry /></motion.div>} />
        <Route path="/services/root-canal" element={<motion.div {...pageTransition}><RootCanal /></motion.div>} />
        <Route path="/services/oral-surgery" element={<motion.div {...pageTransition}><OralSurgery /></motion.div>} />
        <Route path="/services/tooth-extraction" element={<motion.div {...pageTransition}><ToothExtraction /></motion.div>} />
        <Route path="/services/sleep-dentistry" element={<motion.div {...pageTransition}><SleepDentistry /></motion.div>} />
        <Route path="/services/laser-dentistry" element={<motion.div {...pageTransition}><LaserDentistry /></motion.div>} />
        
        {/* Catch-all route */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AnimatePresence>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <AnimatedRoutes />
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
