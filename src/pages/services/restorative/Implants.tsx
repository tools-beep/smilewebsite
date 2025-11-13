import ServiceTemplate from "@/components/ServiceTemplate";
import { Shield } from "lucide-react";

const Implants = () => {
  return (
    <ServiceTemplate
      title="Dental Implants"
      subtitle="Restorative & Reconstructive Dentistry"
      description="Replace missing teeth with the gold standard in tooth replacement. Dental implants provide a permanent, natural-looking solution that looks, feels, and functions just like your natural teeth—restoring your smile and preserving your jawbone health."
      icon={<Shield className="w-6 h-6 text-primary" />}
      heroImage="https://images.unsplash.com/photo-1598256989800-fe5f95da9787?w=800&auto=format&fit=crop"
      benefits={[
        "Most natural-looking tooth replacement",
        "Permanent, long-lasting solution",
        "Prevents bone loss and facial changes",
        "No impact on adjacent teeth",
        "Eat and speak with confidence",
        "High success rate (95%+)",
        "Improved oral health",
        "No special maintenance required"
      ]}
      process={[
        {
          step: 1,
          title: "Comprehensive Evaluation",
          description: "We perform a thorough examination including 3D imaging to assess your bone density, jaw structure, and overall health. We develop a detailed treatment plan and determine if you're a good candidate for implants."
        },
        {
          step: 2,
          title: "Implant Placement",
          description: "During a minor surgical procedure, a titanium implant post is precisely placed into your jawbone where your tooth root was. This serves as a strong foundation for your replacement tooth. The area is then allowed to heal."
        },
        {
          step: 3,
          title: "Osseointegration (Healing)",
          description: "Over 3-6 months, the implant fuses with your jawbone through a natural process called osseointegration. This creates a stable, permanent foundation that mimics your natural tooth root."
        },
        {
          step: 4,
          title: "Crown Placement",
          description: "Once healing is complete, we attach a custom-made crown to the implant. The crown is designed to match your natural teeth perfectly in color, shape, and size—completing your new smile."
        }
      ]}
      faqs={[
        {
          question: "Am I a good candidate for dental implants?",
          answer: "Most healthy adults are candidates. You need adequate bone density, healthy gums, and overall good health. Conditions like uncontrolled diabetes, heavy smoking, or certain medications may affect eligibility, but we can often work around these factors."
        },
        {
          question: "How long do dental implants last?",
          answer: "With proper care and maintenance, dental implants can last a lifetime. The implant post itself is designed to be permanent, while the crown may need replacement after 10-15 years due to normal wear."
        },
        {
          question: "Is dental implant surgery painful?",
          answer: "The procedure is performed under local anesthesia (with sedation options available), so you won't feel pain during surgery. Post-operative discomfort is typically mild and manageable with over-the-counter pain medication."
        },
        {
          question: "How much do dental implants cost?",
          answer: "Costs vary based on the number of implants, type of restoration, and any preparatory procedures needed (like bone grafting). While implants have higher upfront costs than other options, their longevity often makes them more cost-effective long-term."
        },
        {
          question: "How do I care for dental implants?",
          answer: "Care for implants just like natural teeth: brush twice daily, floss daily, and maintain regular dental checkups. Implants can't get cavities, but the surrounding gum tissue needs to stay healthy to support the implant."
        }
      ]}
      relatedServices={[
        { name: "Crowns & Bridges", link: "/services/crowns-bridges" },
        { name: "Full Mouth Rehabilitation", link: "/services/full-mouth-rehabilitation" },
        { name: "Dentures & Partials", link: "/services/dentures-partials" },
        { name: "Oral Surgery", link: "/services/oral-surgery" }
      ]}
    />
  );
};

export default Implants;


