import ServiceTemplate from "@/components/ServiceTemplate";
import { Heart } from "lucide-react";

const CleaningExams = () => {
  return (
    <ServiceTemplate
      title="Dental Cleaning & Exams"
      subtitle="General & Family Dentistry"
      description="Regular dental cleanings and comprehensive exams are the foundation of excellent oral health. Our thorough preventive care helps detect issues early, removes harmful plaque and tartar, and keeps your smile healthy and bright."
      icon={<Heart className="w-6 h-6 text-primary" />}
      heroImage="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=800&auto=format&fit=crop&q=80"
      benefits={[
        "Prevention of cavities and gum disease",
        "Early detection of dental problems",
        "Removal of stubborn plaque and tartar",
        "Fresh breath and brighter smile",
        "Reduction in overall health risks",
        "Professional oral health assessment",
        "Personalized home care recommendations",
        "Cost savings by preventing major issues"
      ]}
      process={[
        {
          step: 1,
          title: "Medical History Review",
          description: "We begin by reviewing your medical history, current medications, and any changes in your health or dental concerns since your last visit. This ensures we provide safe, personalized care."
        },
        {
          step: 2,
          title: "Comprehensive Examination",
          description: "Our dentist examines your teeth, gums, tongue, throat, and jaw. We check for cavities, gum disease, oral cancer signs, bite issues, and assess the condition of existing dental work."
        },
        {
          step: 3,
          title: "Professional Cleaning",
          description: "Our hygienist uses specialized instruments to remove plaque and tartar from above and below the gum line, polishes your teeth to remove surface stains, and flosses between each tooth."
        },
        {
          step: 4,
          title: "Education & Prevention",
          description: "We discuss our findings, provide personalized oral hygiene recommendations, and answer your questions. If treatment is needed, we'll explain your options and help you schedule follow-up appointments."
        }
      ]}
      faqs={[
        {
          question: "How often should I have my teeth cleaned?",
          answer: "Most patients should have professional cleanings every six months. However, those with gum disease, heavy tartar buildup, or certain health conditions may need cleanings every 3-4 months."
        },
        {
          question: "Does teeth cleaning hurt?",
          answer: "Most patients experience little to no discomfort during routine cleanings. If you have sensitive teeth or gum inflammation, you may feel some tenderness, but we can use numbing gel or anesthesia to ensure your comfort."
        },
        {
          question: "Why can't I just brush better at home?",
          answer: "Even with excellent home care, plaque eventually hardens into tartar (calculus), which can only be removed with professional dental instruments. Regular cleanings also allow us to detect problems early when they're easiest to treat."
        },
        {
          question: "Will dental cleaning damage my enamel?",
          answer: "No, professional cleanings are safe and do not damage tooth enamel. Our hygienists are specially trained to remove deposits without harming your teeth. In fact, cleanings protect your enamel by removing harmful bacteria."
        },
        {
          question: "What's included in a dental exam?",
          answer: "A comprehensive exam includes evaluation of teeth, gums, tongue, throat, jaw, bite, and any existing dental work. We also screen for oral cancer, assess overall oral health, and may take X-rays to check for issues not visible to the eye."
        }
      ]}
      relatedServices={[
        { name: "X-rays", link: "/services/xrays" },
        { name: "Sealants and Fluoride", link: "/services/sealants-fluoride" },
        { name: "Pediatric Dentistry", link: "/services/pediatric-dentistry" },
        { name: "Night Guard", link: "/services/night-guard" }
      ]}
    />
  );
};

export default CleaningExams;


