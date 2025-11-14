import ServiceTemplate from "@/components/ServiceTemplate";
import { Shield } from "lucide-react";

const FullMouthRehabilitation = () => {
  return (
    <ServiceTemplate
      title="Full Mouth Rehabilitation"
      subtitle="Restorative & Reconstructive Dentistry"
      description="Comprehensive restoration of your entire mouth to achieve optimal oral health, function, and aesthetics. This transformative treatment combines multiple procedures to address severe dental damage, extensive tooth loss, bite problems, and TMJ disorders—giving you a completely renewed smile."
      icon={<Shield className="w-6 h-6 text-primary" />}
      heroImage="https://images.unsplash.com/photo-1609137144813-7d9921338f24?w=800&auto=format&fit=crop&q=85"
      benefits={[
        "Complete restoration of oral health",
        "Improved bite function and alignment",
        "Relief from TMJ pain and headaches",
        "Natural-looking, beautiful results",
        "Enhanced ability to eat and speak",
        "Comprehensive, coordinated care",
        "Long-term stability and durability",
        "Life-changing transformation"
      ]}
      process={[
        {
          step: 1,
          title: "Comprehensive Assessment",
          description: "We conduct an extensive evaluation including X-rays, 3D imaging, bite analysis, TMJ assessment, and health history review. This helps us understand the full scope of your dental issues and overall oral health."
        },
        {
          step: 2,
          title: "Master Treatment Plan",
          description: "We develop a detailed, phased treatment plan that may include implants, crowns, bridges, orthodontics, gum treatments, and more. Using digital smile design, we show you what your final result will look like."
        },
        {
          step: 3,
          title: "Phased Treatment Execution",
          description: "We perform your procedures in a strategic sequence over several months. This may include addressing infections, extracting hopeless teeth, placing implants, orthodontic work, and ultimately placing final restorations."
        },
        {
          step: 4,
          title: "Final Restoration & Maintenance",
          description: "Once all procedures are complete, we place your final restorations—crowns, bridges, or dentures. We provide a comprehensive maintenance plan and schedule regular follow-ups to ensure long-term success."
        }
      ]}
      faqs={[
        {
          question: "Who needs full mouth rehabilitation?",
          answer: "Full mouth rehabilitation is ideal for people with extensive tooth damage or loss, severe wear from grinding, multiple failing restorations, bite misalignment, TMJ disorders, or those who want a complete smile transformation. We'll assess if you're a candidate."
        },
        {
          question: "How long does full mouth rehabilitation take?",
          answer: "The timeline varies greatly depending on your specific needs, typically ranging from 6-18 months. Factors include the number of procedures, healing time for implants, and whether orthodontics is needed. We'll provide a detailed timeline during planning."
        },
        {
          question: "Is full mouth rehabilitation painful?",
          answer: "We use local anesthesia, sedation, and pain management to ensure comfort throughout treatment. While some procedures may cause temporary discomfort during healing, this is manageable with medication and typically mild."
        },
        {
          question: "How much does full mouth rehabilitation cost?",
          answer: "Costs vary significantly based on the extent of treatment, procedures required, and materials used. During consultation, we'll provide a detailed estimate. We also offer financing options to make treatment more accessible."
        },
        {
          question: "What's the difference between full mouth rehabilitation and a smile makeover?",
          answer: "Full mouth rehabilitation focuses on restoring oral health, function, and structure in cases of severe damage or disease. A smile makeover is primarily cosmetic. However, both aim to improve aesthetics, and treatments often overlap."
        }
      ]}
      relatedServices={[
        { name: "Dental Implants", link: "/services/implants" },
        { name: "Crowns & Bridges", link: "/services/crowns-bridges" },
        { name: "Dentures & Partials", link: "/services/dentures-partials" },
        { name: "Smile Makeover", link: "/services/smile-makeover" },
        { name: "Night Guard", link: "/services/night-guard" }
      ]}
    />
  );
};

export default FullMouthRehabilitation;


