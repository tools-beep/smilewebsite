import ServiceTemplate from "@/components/ServiceTemplate";
import { Shield } from "lucide-react";

const CrownsBridges = () => {
  return (
    <ServiceTemplate
      title="Dental Crowns & Bridges"
      subtitle="Restorative & Reconstructive Dentistry"
      description="Restore damaged teeth and replace missing ones with custom dental crowns and bridges. These durable, natural-looking restorations rebuild your smile's strength, function, and appearance—giving you the confidence to eat, speak, and smile without worry."
      icon={<Shield className="w-6 h-6 text-primary" />}
      heroImage="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=800&auto=format&fit=crop"
      benefits={[
        "Restore full tooth function and strength",
        "Natural-looking, custom-crafted results",
        "Long-lasting durability (15-20 years)",
        "Prevent further tooth damage",
        "Replace missing teeth without implants",
        "Improve bite and alignment",
        "Protect weakened teeth",
        "Boost confidence and appearance"
      ]}
      process={[
        {
          step: 1,
          title: "Consultation & Planning",
          description: "We examine your teeth, take X-rays, and discuss your options. We'll explain whether a crown, bridge, or other restoration is best for your situation and create a customized treatment plan."
        },
        {
          step: 2,
          title: "Tooth Preparation",
          description: "The affected tooth is reshaped to accommodate the crown or bridge. For bridges, adjacent teeth are prepared to serve as anchors. We take precise impressions or digital scans to create your custom restoration."
        },
        {
          step: 3,
          title: "Temporary Restoration",
          description: "While your permanent crown or bridge is being crafted in a dental laboratory, we place a temporary restoration to protect your prepared teeth and maintain function and appearance."
        },
        {
          step: 4,
          title: "Final Placement",
          description: "Once your custom restoration is ready, we remove the temporary, check the fit and color, make any final adjustments, and permanently cement your new crown or bridge in place."
        }
      ]}
      faqs={[
        {
          question: "What's the difference between a crown and a bridge?",
          answer: "A crown covers a single damaged tooth to restore its shape, strength, and appearance. A bridge replaces one or more missing teeth by anchoring artificial teeth (pontics) to crowns placed on adjacent natural teeth or implants."
        },
        {
          question: "How long do crowns and bridges last?",
          answer: "With proper care, crowns and bridges typically last 15-20 years or longer. Factors affecting longevity include oral hygiene, bite forces, grinding habits, and the material used. Regular dental checkups help maximize their lifespan."
        },
        {
          question: "What materials are crowns and bridges made from?",
          answer: "Common materials include porcelain (for a natural appearance), porcelain-fused-to-metal (strong with good aesthetics), zirconia (very strong and tooth-colored), and gold alloys (extremely durable). We'll recommend the best option for your situation."
        },
        {
          question: "Does getting a crown or bridge hurt?",
          answer: "The procedure is performed under local anesthesia, so you shouldn't feel pain. You may experience some sensitivity afterward, but this typically subsides within a few days. We provide care instructions and medication if needed."
        },
        {
          question: "Can I eat normally with a crown or bridge?",
          answer: "Yes! Once you adjust to your restoration (usually within a few days), you can eat normally. Avoid extremely hard foods that could damage any dental work, and maintain good oral hygiene to ensure longevity."
        }
      ]}
      relatedServices={[
        { name: "Dental Implants", link: "/services/implants" },
        { name: "Tooth-Colored Fillings", link: "/services/tooth-colored-fillings" },
        { name: "Full Mouth Rehabilitation", link: "/services/full-mouth-rehabilitation" },
        { name: "Veneers", link: "/services/veneers" }
      ]}
    />
  );
};

export default CrownsBridges;


