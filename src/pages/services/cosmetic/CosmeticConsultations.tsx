import ServiceTemplate from "@/components/ServiceTemplate";
import { Sparkles } from "lucide-react";

const CosmeticConsultations = () => {
  return (
    <ServiceTemplate
      title="Cosmetic Consultations in Tempe, AZ"
      subtitle="Book Your Free Cosmetic Consultation"
      description="Start your smile transformation journey with a complimentary cosmetic consultation at Smile Innovation. We'll take the time to understand your aesthetic concerns and goals, evaluate your oral health, and create a personalized treatment plan using advanced digital smile design technology—allowing you to visualize your potential results before committing to treatment."
      icon={<Sparkles className="w-6 h-6 text-primary" />}
      heroImage="https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&auto=format&fit=crop"
      benefits={[
        "Complimentary, no-obligation consultation",
        "Comprehensive smile analysis and assessment",
        "Digital smile design preview of potential results",
        "Personalized treatment recommendations",
        "Educational, pressure-free environment",
        "Detailed cost estimates and financing options",
        "Multiple treatment options presented and explained",
        "Expert guidance from experienced cosmetic dentists"
      ]}
      process={[
        {
          step: 1,
          title: "Initial Discussion",
          description: "We start by listening to your concerns, goals, and expectations. Share photos of smiles you admire, discuss what you'd like to change, and let us know about any dental anxieties or special considerations."
        },
        {
          step: 2,
          title: "Comprehensive Examination",
          description: "We conduct a thorough evaluation of your teeth, gums, bite, and facial features. Digital photos and X-rays are taken to assess your oral health and create a baseline for treatment planning."
        },
        {
          step: 3,
          title: "Digital Smile Design",
          description: "Using advanced smile design software, we create a digital preview of your potential results. This allows you to visualize different treatment options and make informed decisions about your care."
        },
        {
          step: 4,
          title: "Treatment Plan & Next Steps",
          description: "We present a detailed, personalized treatment plan including procedure recommendations, timeline, and cost estimates. We'll answer all your questions and help you decide on the best path forward—with no pressure or obligation."
        }
      ]}
      faqs={[
        {
          question: "What should I bring to my cosmetic consultation?",
          answer: "Bring your dental insurance information, a list of any medications you take, photos of smiles you admire, and any questions you have. If you have recent dental X-rays, we can request them from your previous dentist."
        },
        {
          question: "Is there a fee for a cosmetic consultation?",
          answer: "Many practices offer complimentary cosmetic consultations. Contact our office for specific details about consultation fees and what's included in your visit."
        },
        {
          question: "How long does a consultation take?",
          answer: "A comprehensive cosmetic consultation typically takes 45-90 minutes, depending on the complexity of your case and how many treatment options we discuss. We allocate enough time to thoroughly address all your questions."
        },
        {
          question: "What happens after the consultation?",
          answer: "After your consultation, you'll have time to review your treatment plan at home with no pressure to commit. When you're ready to proceed, we'll schedule your first appointment and begin your smile transformation."
        },
        {
          question: "Can I see before-and-after photos?",
          answer: "Absolutely! During your consultation, we'll show you before-and-after photos of similar cases we've completed. This helps you understand what's achievable and sets realistic expectations for your treatment."
        }
      ]}
      relatedServices={[
        { name: "Smile Makeover", link: "/services/smile-makeover" },
        { name: "Veneers", link: "/services/veneers" },
        { name: "Teeth Whitening", link: "/services/teeth-whitening" },
        { name: "Invisalign", link: "/services/invisalign" },
        { name: "Bonding", link: "/services/bonding" }
      ]}
    />
  );
};

export default CosmeticConsultations;


