import ServiceTemplate from "@/components/ServiceTemplate";
import { Shield } from "lucide-react";

const ToothColoredFillings = () => {
  return (
    <ServiceTemplate
      title="Tooth-Colored Fillings"
      subtitle="Restorative & Reconstructive Dentistry"
      description="Repair cavities and damaged teeth with modern composite resin fillings that match your natural tooth color. These mercury-free restorations are strong, durable, and virtually invisible—preserving more of your natural tooth structure while providing a beautiful, seamless result."
      icon={<Shield className="w-6 h-6 text-primary" />}
      heroImage="/assets/restorativeandreconstructive/toothcolored.png"
      benefits={[
        "Natural appearance matches your teeth",
        "Mercury-free and safe",
        "Bonds directly to tooth structure",
        "Preserves more natural tooth",
        "Less sensitivity than metal fillings",
        "Quick, single-visit procedure",
        "Strong and durable",
        "Versatile for multiple uses"
      ]}
      process={[
        {
          step: 1,
          title: "Diagnosis & Anesthesia",
          description: "We identify the cavity or damage through examination and X-rays. If needed, we administer local anesthesia to ensure your comfort during the procedure. Many patients experience no discomfort."
        },
        {
          step: 2,
          title: "Decay Removal & Preparation",
          description: "We carefully remove the decayed or damaged portion of the tooth using precision instruments. The tooth is then cleaned and prepared for the filling, preserving as much healthy tooth structure as possible."
        },
        {
          step: 3,
          title: "Filling Placement",
          description: "We select a composite resin shade that matches your natural tooth color. The material is applied in layers, with each layer hardened using a special curing light. This creates a strong bond with your tooth."
        },
        {
          step: 4,
          title: "Shaping & Polishing",
          description: "Once the filling is in place, we carefully shape and polish it to match the contours of your natural tooth. We check your bite to ensure comfort, making any necessary adjustments."
        }
      ]}
      faqs={[
        {
          question: "How long do tooth-colored fillings last?",
          answer: "Composite fillings typically last 5-10 years or longer with proper care. Factors affecting longevity include location in the mouth, size of the filling, bite forces, oral hygiene, and dietary habits. Regular checkups help us monitor their condition."
        },
        {
          question: "Are tooth-colored fillings as strong as silver fillings?",
          answer: "Modern composite materials are very strong and suitable for most situations, including areas with moderate chewing pressure. While amalgam may still be preferred in some high-stress areas, tooth-colored fillings are the standard choice for most patients."
        },
        {
          question: "Do tooth-colored fillings contain harmful materials?",
          answer: "No, composite resin fillings are mercury-free and considered very safe. They're made from a mixture of plastic resin and fine glass particles. They've been extensively tested and are approved by dental associations worldwide."
        },
        {
          question: "Can old silver fillings be replaced with tooth-colored ones?",
          answer: "Yes! We can safely remove old amalgam fillings and replace them with tooth-colored alternatives. However, we only recommend replacement if the old filling is damaged, leaking, or you have specific aesthetic or health concerns."
        },
        {
          question: "Will I have sensitivity after getting a filling?",
          answer: "Some mild sensitivity to hot, cold, or pressure is normal for a few days after getting a filling. This typically subsides quickly. If sensitivity persists or worsens, contact us—we may need to make a simple adjustment."
        }
      ]}
      relatedServices={[
        { name: "Crowns & Bridges", link: "/services/crowns-bridges" },
        { name: "Bonding", link: "/services/bonding" },
        { name: "Cleaning and Exams", link: "/services/cleaning-exams" },
        { name: "Sealants and Fluoride", link: "/services/sealants-fluoride" }
      ]}
    />
  );
};

export default ToothColoredFillings;


