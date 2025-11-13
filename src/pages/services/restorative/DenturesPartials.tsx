import ServiceTemplate from "@/components/ServiceTemplate";
import { Shield } from "lucide-react";

const DenturesPartials = () => {
  return (
    <ServiceTemplate
      title="Dentures & Partial Dentures"
      subtitle="Restorative & Reconstructive Dentistry"
      description="Replace multiple missing teeth with custom dentures and partial dentures. Modern dental prosthetics provide natural-looking, comfortable solutions that restore your ability to eat, speak, and smile confidently—dramatically improving your quality of life."
      icon={<Shield className="w-6 h-6 text-primary" />}
      heroImage="https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&auto=format&fit=crop"
      benefits={[
        "Restore ability to eat and speak properly",
        "Natural-looking smile restoration",
        "Custom-fitted for comfort",
        "Prevent facial sagging",
        "Affordable tooth replacement",
        "Non-surgical option",
        "Quick treatment timeline",
        "Improved self-confidence"
      ]}
      process={[
        {
          step: 1,
          title: "Initial Consultation",
          description: "We examine your mouth, discuss your needs, and determine whether full dentures, partial dentures, or implant-supported dentures are best for you. We'll also address any necessary preparatory work like extractions or gum treatment."
        },
        {
          step: 2,
          title: "Impressions & Measurements",
          description: "We take precise impressions of your gums and any remaining teeth, along with detailed measurements of your bite and jaw relationship. These ensure your dentures fit properly and look natural."
        },
        {
          step: 3,
          title: "Try-In & Adjustments",
          description: "We place trial dentures to check fit, appearance, color, and function. You'll provide feedback, and we'll make any necessary adjustments before creating your final dentures."
        },
        {
          step: 4,
          title: "Final Delivery & Follow-Up",
          description: "Your completed dentures are delivered, and we ensure proper fit and comfort. We provide instructions on insertion, removal, and care. Follow-up appointments help us make fine adjustments as you adapt to your new dentures."
        }
      ]}
      faqs={[
        {
          question: "What's the difference between full and partial dentures?",
          answer: "Full dentures replace all teeth in the upper or lower arch and rest on your gums. Partial dentures replace several missing teeth and use clasps or precision attachments to anchor to your remaining natural teeth."
        },
        {
          question: "How long does it take to get used to dentures?",
          answer: "Most people adjust to dentures within a few weeks to a couple of months. Initially, they may feel bulky, and eating and speaking might require practice. These sensations are normal and typically improve quickly."
        },
        {
          question: "How long do dentures last?",
          answer: "Dentures typically last 5-10 years before needing replacement. However, your mouth changes over time, so periodic adjustments and relines are necessary to maintain proper fit. Regular dental visits help maximize their lifespan."
        },
        {
          question: "Can I sleep with my dentures in?",
          answer: "It's generally recommended to remove dentures at night to give your gums time to rest and recover from the pressure of wearing dentures. This also allows you to clean them thoroughly and helps prevent oral infections."
        },
        {
          question: "What are implant-supported dentures?",
          answer: "Implant-supported dentures attach to dental implants placed in your jawbone, providing superior stability and retention compared to traditional dentures. They don't slip, feel more natural, and help preserve jawbone. We can discuss if you're a candidate."
        }
      ]}
      relatedServices={[
        { name: "Dental Implants", link: "/services/implants" },
        { name: "Crowns & Bridges", link: "/services/crowns-bridges" },
        { name: "Full Mouth Rehabilitation", link: "/services/full-mouth-rehabilitation" },
        { name: "Tooth Extraction", link: "/services/tooth-extraction" }
      ]}
    />
  );
};

export default DenturesPartials;


