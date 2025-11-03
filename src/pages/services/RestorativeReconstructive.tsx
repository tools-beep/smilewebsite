import ServiceTemplate from "@/components/ServiceTemplate";
import { Shield } from "lucide-react";

const RestorativeReconstructive = () => {
  return (
    <ServiceTemplate
      title="Restorative & Reconstructive Dentistry"
      subtitle="Restore Your Smile's Function & Beauty"
      description="Comprehensive solutions for long-term dental health and aesthetics. We specialize in rebuilding and restoring damaged, decayed, or missing teeth with advanced techniques that look and function naturally."
      icon={<Shield className="w-6 h-6 text-primary" />}
      benefits={[
        "Restore full dental function",
        "Natural-looking results",
        "Durable, long-lasting solutions",
        "Improved bite and jaw alignment",
        "Enhanced facial structure support",
        "Prevention of further dental damage",
        "Boost in confidence and quality of life",
        "Advanced materials and techniques"
      ]}
      process={[
        {
          step: 1,
          title: "Comprehensive Assessment",
          description: "We conduct a detailed evaluation of your dental health, including digital imaging and 3D scans to understand the extent of damage or missing teeth and plan the optimal restoration approach."
        },
        {
          step: 2,
          title: "Treatment Planning",
          description: "Our team develops a customized treatment plan that addresses your specific needs, timeline, and budget. We'll explain all options and help you make informed decisions about your care."
        },
        {
          step: 3,
          title: "Restoration Procedure",
          description: "Using state-of-the-art technology and techniques, we carefully restore or replace damaged teeth. This may involve multiple visits depending on the complexity of your treatment."
        },
        {
          step: 4,
          title: "Follow-up & Maintenance",
          description: "We schedule follow-up appointments to ensure your restorations are functioning properly and provide guidance on maintaining your dental work for long-term success."
        }
      ]}
      faqs={[
        {
          question: "What's the difference between a crown and a bridge?",
          answer: "A crown covers a single damaged tooth to restore its strength and appearance, while a bridge replaces one or more missing teeth by anchoring artificial teeth to adjacent natural teeth or implants."
        },
        {
          question: "How long do dental implants last?",
          answer: "With proper care and maintenance, dental implants can last a lifetime. The crown attached to the implant may need replacement after 10-15 years, but the implant itself is designed to be permanent."
        },
        {
          question: "Are tooth-colored fillings as strong as silver fillings?",
          answer: "Modern composite (tooth-colored) fillings are very strong and durable, suitable for most applications. They also bond directly to the tooth structure, providing additional support and a more natural appearance."
        },
        {
          question: "What is full mouth rehabilitation?",
          answer: "Full mouth rehabilitation is a comprehensive treatment plan that addresses multiple dental issues simultaneously, including damaged, decayed, or missing teeth. It combines various procedures to restore complete oral health and function."
        }
      ]}
      relatedServices={[
        { name: "Crowns & Bridges", link: "/services/crowns-bridges" },
        { name: "Dental Implants", link: "/services/implants" },
        { name: "Full Mouth Rehabilitation", link: "/services/full-mouth-rehabilitation" },
        { name: "Dentures & Partials", link: "/services/dentures-partials" },
        { name: "Tooth-Colored Fillings", link: "/services/tooth-colored-fillings" }
      ]}
    />
  );
};

export default RestorativeReconstructive;


