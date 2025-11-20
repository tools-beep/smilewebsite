import ServiceTemplate from "@/components/ServiceTemplate";
import { Sparkles } from "lucide-react";

const Bonding = () => {
  return (
    <ServiceTemplate
      title="Cosmetic Dental Bonding in Tempe, AZ"
      subtitle="Book Your Bonding Appointment"
      description="Dental bonding is a quick, affordable, and effective cosmetic solution to repair and enhance your smile. Using tooth-colored composite resin material, we can seamlessly fix chips, cracks, gaps, discoloration, and minor imperfections in just one comfortable visit—giving you immediate, natural-looking results with minimal tooth preparation."
      icon={<Sparkles className="w-6 h-6 text-primary" />}
          heroImage="/assets/comseticdentistry/bonding.png"
      benefits={[
        "Fast, single-visit procedure (30-60 minutes per tooth)",
        "Affordable cosmetic solution",
        "Minimally invasive with little to no tooth removal",
        "Natural-looking, seamless results",
        "Usually no anesthesia required",
        "Versatile for multiple cosmetic issues",
        "Long-lasting with proper care (3-10 years)",
        "Immediate smile improvement"
      ]}
      process={[
        {
          step: 1,
          title: "Consultation & Color Matching",
          description: "We examine your teeth and discuss your goals. Using a shade guide, we select a composite resin color that perfectly matches your natural teeth for seamless results."
        },
        {
          step: 2,
          title: "Tooth Preparation",
          description: "The tooth surface is gently roughened and a conditioning liquid is applied to help the bonding material adhere. This process typically requires no anesthesia unless treating a cavity."
        },
        {
          step: 3,
          title: "Bonding Application",
          description: "We apply the tooth-colored resin in layers, carefully shaping and sculpting it to achieve the desired look. Each layer is hardened using a special curing light."
        },
        {
          step: 4,
          title: "Finishing Touches",
          description: "Once the bonding material is set, we trim, shape, and polish it to match the natural appearance and sheen of your surrounding teeth. The entire procedure usually takes 30-60 minutes per tooth."
        }
      ]}
      faqs={[
        {
          question: "How long does dental bonding last?",
          answer: "Dental bonding typically lasts 3-10 years depending on the location, your oral habits, and how well you care for it. Avoiding hard foods, not biting fingernails, and good oral hygiene help extend its lifespan."
        },
        {
          question: "What can dental bonding fix?",
          answer: "Bonding can repair chipped or cracked teeth, close small gaps, reshape teeth, cover discoloration, make teeth appear longer, protect exposed tooth roots, and even serve as a cosmetic alternative to amalgam fillings."
        },
        {
          question: "Does dental bonding stain?",
          answer: "The bonding material can stain over time, especially from coffee, tea, red wine, and tobacco. While more resistant to staining than natural teeth, proper care and avoiding staining substances will keep your bonding looking its best."
        },
        {
          question: "Is dental bonding better than veneers?",
          answer: "Both have advantages. Bonding is more affordable, requires less tooth alteration, and can be completed in one visit. Veneers are more durable, stain-resistant, and better for extensive changes. We'll help you choose the best option."
        },
        {
          question: "Can bonding be whitened?",
          answer: "No, bonding material cannot be whitened. If you're considering teeth whitening, it's best to do so before bonding so we can match the bonding to your newly whitened teeth."
        }
      ]}
      relatedServices={[
        { name: "Veneers", link: "/services/veneers" },
        { name: "Teeth Whitening", link: "/services/teeth-whitening" },
        { name: "Tooth-Colored Fillings", link: "/services/tooth-colored-fillings" },
        { name: "Smile Makeover", link: "/services/smile-makeover" }
      ]}
    />
  );
};

export default Bonding;


