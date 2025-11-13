import ServiceTemplate from "@/components/ServiceTemplate";
import { Sparkles } from "lucide-react";

const TeethWhitening = () => {
  return (
    <ServiceTemplate
      title="Professional Teeth Whitening Services in Tempe, AZ"
      subtitle="Book Your Whitening Appointment Now"
      description="Achieve visibly brighter teeth in just one visit. Teeth whitening is a cosmetic dental treatment designed to remove stains and discoloration, significantly brightening your teeth and enhancing your smile's overall appearance. Using advanced, professional-grade solutions, we safely and effectively whiten your teeth, delivering noticeable results quickly and comfortably. Unlike over-the-counter kits, our in-office whitening system ensures deeper stain removal and longer-lasting results."
      icon={<Sparkles className="w-6 h-6 text-primary" />}
      heroImage="https://images.unsplash.com/photo-1609137144813-7d9921338f24?w=800&auto=format&fit=crop"
      benefits={[
        "Immediate, noticeable improvement",
        "Safe and supervised by dental professionals",
        "Customized for your level of staining and sensitivity",
        "Boosts confidence and makes smiles more youthful",
        "Available as both in-office and take-home options",
        "Experienced cosmetic dentists with precision whitening systems",
        "Advanced technology for optimal comfort and results",
        "Options tailored to your lifestyle and goals"
      ]}
      process={[
        {
          step: 1,
          title: "Initial Assessment",
          description: "We examine your teeth and gums to ensure you're a good candidate for whitening. We'll also determine your current shade and discuss your desired results."
        },
        {
          step: 2,
          title: "Preparation",
          description: "We protect your gums and soft tissues, then apply a professional-grade whitening gel to your teeth. Our advanced formula is designed to minimize sensitivity while maximizing results."
        },
        {
          step: 3,
          title: "Activation",
          description: "For in-office treatments, we may use a special light or laser to activate the whitening gel, accelerating the process. For take-home kits, we provide custom trays and detailed instructions."
        },
        {
          step: 4,
          title: "Final Results & Maintenance",
          description: "We reveal your brighter smile and provide tips on maintaining your results, including touch-up recommendations and lifestyle habits that help preserve your white smile."
        }
      ]}
      faqs={[
        {
          question: "How long do teeth whitening results last?",
          answer: "Typically 6–12 months, depending on maintenance and lifestyle habits."
        },
        {
          question: "Is teeth whitening painful?",
          answer: "Minimal sensitivity may occur but is usually brief and manageable."
        },
        {
          question: "Can whitening damage teeth enamel?",
          answer: "Professional treatments are safe and do not harm enamel."
        },
        {
          question: "How long does the whitening procedure take?",
          answer: "Usually completed within an hour at our office."
        },
        {
          question: "Are whitening treatments covered by insurance?",
          answer: "Usually considered cosmetic and not covered; however, financing is available."
        }
      ]}
      relatedServices={[
        { name: "Veneers", link: "/services/veneers" },
        { name: "Bonding", link: "/services/bonding" },
        { name: "Smile Makeover", link: "/services/smile-makeover" },
        { name: "Cosmetic Consultations", link: "/services/cosmetic-consultations" }
      ]}
    />
  );
};

export default TeethWhitening;


