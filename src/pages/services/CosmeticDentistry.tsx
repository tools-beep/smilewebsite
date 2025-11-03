import ServiceTemplate from "@/components/ServiceTemplate";
import { Sparkles } from "lucide-react";

const CosmeticDentistry = () => {
  return (
    <ServiceTemplate
      title="Cosmetic Dentistry"
      subtitle="Smile Transformation"
      description="Personalized cosmetic treatments designed to give you stunning, confident smiles. Our advanced techniques and artistic approach ensure natural-looking results that enhance your unique beauty."
      icon={<Sparkles className="w-6 h-6 text-primary" />}
      benefits={[
        "Enhanced smile aesthetics and confidence",
        "Natural-looking, beautiful results",
        "State-of-the-art technology and techniques",
        "Personalized treatment plans",
        "Minimally invasive procedures",
        "Long-lasting, durable outcomes",
        "Improved facial harmony",
        "Boost in self-esteem and social confidence"
      ]}
      process={[
        {
          step: 1,
          title: "Initial Consultation",
          description: "We begin with a comprehensive smile analysis, discussing your goals, concerns, and expectations. Our team will evaluate your oral health and facial features to create a personalized treatment plan."
        },
        {
          step: 2,
          title: "Digital Smile Design",
          description: "Using advanced digital imaging technology, we'll create a preview of your new smile, allowing you to visualize the final results before we begin treatment."
        },
        {
          step: 3,
          title: "Treatment Execution",
          description: "Our skilled team performs your cosmetic procedures with precision and artistry, ensuring comfort throughout the process with modern sedation options available."
        },
        {
          step: 4,
          title: "Final Reveal & Aftercare",
          description: "We unveil your transformed smile and provide comprehensive aftercare instructions to maintain your beautiful results for years to come."
        }
      ]}
      faqs={[
        {
          question: "How long do cosmetic dental treatments last?",
          answer: "The longevity of cosmetic treatments varies by procedure. Teeth whitening may last 1-3 years, veneers can last 10-15 years, and bonding typically lasts 5-10 years with proper care. We'll discuss specific timelines during your consultation."
        },
        {
          question: "Are cosmetic procedures painful?",
          answer: "Most cosmetic procedures are minimally invasive and cause little to no discomfort. We use local anesthesia when needed and offer sedation options for anxious patients to ensure a comfortable experience."
        },
        {
          question: "How much do cosmetic dental procedures cost?",
          answer: "Costs vary depending on the specific treatment, complexity, and your individual needs. We offer flexible payment plans and will provide a detailed cost estimate during your consultation."
        },
        {
          question: "Can cosmetic dentistry fix multiple issues at once?",
          answer: "Yes! A comprehensive smile makeover can address multiple concerns simultaneously, including discoloration, misalignment, gaps, chips, and more. We'll create a coordinated treatment plan to achieve your ideal smile."
        }
      ]}
      relatedServices={[
        { name: "Teeth Whitening", link: "/services/teeth-whitening" },
        { name: "Invisalign", link: "/services/invisalign" },
        { name: "Veneers", link: "/services/veneers" },
        { name: "Smile Makeover", link: "/services/smile-makeover" },
        { name: "Bonding", link: "/services/bonding" },
        { name: "Cosmetic Consultations", link: "/services/cosmetic-consultations" }
      ]}
    />
  );
};

export default CosmeticDentistry;


