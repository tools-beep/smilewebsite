import ServiceTemplate from "@/components/ServiceTemplate";
import { Sparkles } from "lucide-react";

const Veneers = () => {
  return (
    <ServiceTemplate
      title="Porcelain Veneers in Tempe, AZ"
      subtitle="Book Your Veneers Consultation"
      description="Transform your smile with custom-made porcelain veneers. These ultra-thin, tooth-colored shells are expertly crafted and permanently bonded to the front surface of your teeth to create a stunning, natural-looking smile. Veneers are an ideal solution for correcting chips, cracks, gaps, severe discoloration, misshapen teeth, or minor misalignment—giving you the confidence to smile freely."
      icon={<Sparkles className="w-6 h-6 text-primary" />}
          heroImage="/assets/comseticdentistry/veeneers.png"
      benefits={[
        "Instant smile transformation in just two visits",
        "Natural-looking, beautiful results",
        "Highly stain-resistant material",
        "Long-lasting durability (10-20+ years)",
        "Minimally invasive procedure",
        "Corrects multiple cosmetic issues at once",
        "Custom-designed to complement your facial features",
        "Significant boost in self-confidence"
      ]}
      process={[
        {
          step: 1,
          title: "Smile Design Consultation",
          description: "We discuss your goals and evaluate your teeth. Using digital imaging and smile design software, we'll create a preview of your new smile and determine the number of veneers needed."
        },
        {
          step: 2,
          title: "Tooth Preparation",
          description: "We carefully remove a thin layer of enamel (typically less than 1mm) from the front of your teeth to make room for the veneers. Impressions or digital scans are taken to create your custom veneers."
        },
        {
          step: 3,
          title: "Temporary Veneers",
          description: "While your permanent veneers are being crafted in a dental laboratory, we may place temporary veneers to protect your prepared teeth and give you a preview of your new smile."
        },
        {
          step: 4,
          title: "Veneer Placement",
          description: "Once your custom veneers are ready, we carefully bond them to your teeth using a special dental adhesive. Final adjustments are made to ensure a perfect fit, comfort, and appearance."
        }
      ]}
      faqs={[
        {
          question: "How long do porcelain veneers last?",
          answer: "With proper care, porcelain veneers typically last 10-15 years or longer. Regular dental check-ups, good oral hygiene, and avoiding habits like teeth grinding can help maximize their lifespan."
        },
        {
          question: "Are veneers right for me?",
          answer: "Veneers are ideal for addressing chips, cracks, gaps, severe discoloration, misshapen teeth, or minor misalignment. During your consultation, we'll determine if veneers are the best solution for your specific concerns."
        },
        {
          question: "Do veneers look natural?",
          answer: "Yes! Modern porcelain veneers are custom-crafted to match your facial features and desired aesthetic. They mimic the translucency and appearance of natural teeth, creating beautiful, natural-looking results."
        },
        {
          question: "Is the veneer procedure painful?",
          answer: "The procedure is generally comfortable with local anesthesia. Some patients experience minor sensitivity after the procedure, which typically subsides within a few days."
        },
        {
          question: "Can I still eat normally with veneers?",
          answer: "Yes, you can eat normally with veneers. However, we recommend avoiding extremely hard foods and using caution with sticky foods. Veneers are durable but should be treated with the same care as your natural teeth."
        }
      ]}
      relatedServices={[
        { name: "Teeth Whitening", link: "/services/teeth-whitening" },
        { name: "Bonding", link: "/services/bonding" },
        { name: "Smile Makeover", link: "/services/smile-makeover" },
        { name: "Crowns & Bridges", link: "/services/crowns-bridges" }
      ]}
    />
  );
};

export default Veneers;


