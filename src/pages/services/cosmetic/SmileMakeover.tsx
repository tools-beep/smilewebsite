import ServiceTemplate from "@/components/ServiceTemplate";
import { Sparkles } from "lucide-react";

const SmileMakeover = () => {
  return (
    <ServiceTemplate
      title="Complete Smile Makeover in Tempe, AZ"
      subtitle="Book Your Smile Makeover Consultation"
      description="Transform your entire smile with a comprehensive smile makeover. This personalized treatment combines multiple cosmetic and restorative procedures to address all aspects of your smile—from color and alignment to shape and proportion. Our artistic approach and advanced dental techniques create stunning, harmonious results tailored to your unique facial features, personality, and aesthetic goals."
      icon={<Sparkles className="w-6 h-6 text-primary" />}
      benefits={[
        "Complete smile transformation tailored to you",
        "Addresses multiple concerns simultaneously",
        "Customized treatment plan for optimal results",
        "Dramatic, life-changing improvements",
        "Coordinated procedures for maximum efficiency",
        "Enhanced facial aesthetics and harmony",
        "Improved oral health and function",
        "Significant boost in self-confidence and quality of life"
      ]}
      process={[
        {
          step: 1,
          title: "Comprehensive Evaluation",
          description: "We conduct an in-depth analysis of your oral health, facial features, and aesthetic goals. Using advanced imaging and digital smile design, we create a comprehensive treatment plan tailored to your needs."
        },
        {
          step: 2,
          title: "Treatment Planning",
          description: "We design your personalized smile makeover, which may include teeth whitening, veneers, crowns, orthodontics, gum recontouring, or other procedures. You'll see a preview of your expected results before treatment begins."
        },
        {
          step: 3,
          title: "Coordinated Treatment",
          description: "We perform your procedures in a strategic sequence to achieve optimal results efficiently. Depending on your plan, this may take place over several appointments or, in some cases, be completed in a single visit."
        },
        {
          step: 4,
          title: "Final Reveal & Maintenance",
          description: "We unveil your transformed smile and provide a comprehensive maintenance plan to preserve your beautiful results. Regular check-ups and good oral hygiene will keep your new smile looking perfect."
        }
      ]}
      faqs={[
        {
          question: "What procedures are included in a smile makeover?",
          answer: "A smile makeover is customized to your needs and may include teeth whitening, veneers, crowns, orthodontics (like Invisalign), gum recontouring, dental implants, bonding, and more. We'll design the perfect combination for your goals."
        },
        {
          question: "How long does a complete smile makeover take?",
          answer: "The timeline varies based on your treatment plan. Some makeovers can be completed in a few weeks, while more comprehensive cases involving orthodontics or implants may take several months. We'll provide a detailed timeline during planning."
        },
        {
          question: "How much does a smile makeover cost?",
          answer: "Costs vary widely depending on the procedures included in your personalized treatment plan. During your consultation, we'll provide a detailed cost estimate and discuss financing options to make your dream smile affordable."
        },
        {
          question: "Is a smile makeover permanent?",
          answer: "Many smile makeover procedures provide long-lasting results, with veneers lasting 10-15 years, crowns 15-20 years, and implants potentially lasting a lifetime. Proper care and maintenance are essential for longevity."
        },
        {
          question: "Will my smile look natural?",
          answer: "Absolutely! We design your smile to complement your facial features, skin tone, and personality. Our goal is to create beautiful, natural-looking results that enhance your unique appearance."
        }
      ]}
      relatedServices={[
        { name: "Veneers", link: "/services/veneers" },
        { name: "Teeth Whitening", link: "/services/teeth-whitening" },
        { name: "Invisalign", link: "/services/invisalign" },
        { name: "Crowns & Bridges", link: "/services/crowns-bridges" },
        { name: "Dental Implants", link: "/services/implants" },
        { name: "Cosmetic Consultations", link: "/services/cosmetic-consultations" }
      ]}
    />
  );
};

export default SmileMakeover;


