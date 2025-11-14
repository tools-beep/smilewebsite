import ServiceTemplate from "@/components/ServiceTemplate";
import { Heart } from "lucide-react";

const SealantsFluoride = () => {
  return (
    <ServiceTemplate
      title="Dental Sealants & Fluoride Treatments"
      subtitle="General & Family Dentistry"
      description="Powerful preventive treatments that protect teeth from decay. Dental sealants provide a protective barrier over vulnerable tooth surfaces, while fluoride strengthens enamel and reverses early decay—keeping smiles healthy for years to come."
      icon={<Heart className="w-6 h-6 text-primary" />}
      heroImage="https://images.unsplash.com/photo-1588776814546-daab30f310ce?w=800&auto=format&fit=crop"
      benefits={[
        "Effective cavity prevention",
        "Quick, painless application",
        "Long-lasting protection (5-10 years)",
        "Especially beneficial for children",
        "Cost-effective preventive care",
        "Strengthens tooth enamel",
        "Reduces need for future dental work",
        "Safe for all ages"
      ]}
      process={[
        {
          step: 1,
          title: "Assessment",
          description: "We examine your teeth to identify areas that would benefit from sealants (typically molars with deep grooves) and assess your cavity risk to determine if fluoride treatment is recommended."
        },
        {
          step: 2,
          title: "Tooth Preparation (Sealants)",
          description: "For sealants, we thoroughly clean and dry the teeth, then apply an etching solution to roughen the tooth surface slightly. This helps the sealant bond properly."
        },
        {
          step: 3,
          title: "Application",
          description: "We apply the liquid sealant material into the grooves of your teeth, then use a special curing light to harden it. For fluoride, we apply a gel, foam, or varnish to your teeth for a few minutes."
        },
        {
          step: 4,
          title: "Final Check & Care Instructions",
          description: "We check the sealants for proper coverage and bite alignment. For fluoride treatments, we provide instructions about when you can eat or drink. Both treatments require no recovery time."
        }
      ]}
      faqs={[
        {
          question: "What are dental sealants?",
          answer: "Sealants are thin, protective coatings painted onto the chewing surfaces of back teeth (molars). They seal deep grooves and pits where food and bacteria can get trapped, preventing up to 80% of cavities in treated teeth."
        },
        {
          question: "Who should get dental sealants?",
          answer: "Children and teens are ideal candidates, as they're most cavity-prone. However, adults with deep grooves or high cavity risk can also benefit from sealants. They're most effective when applied soon after permanent molars emerge (ages 6 and 12)."
        },
        {
          question: "How does fluoride prevent cavities?",
          answer: "Fluoride strengthens tooth enamel by promoting remineralization—the natural repair process that reverses early decay. It also makes teeth more resistant to acid attacks from bacteria and sugary foods."
        },
        {
          question: "Are fluoride treatments safe?",
          answer: "Yes, professional fluoride treatments are very safe when applied as directed. We use the appropriate concentration and amount for your age and needs. Fluoride has been proven safe and effective for decades."
        },
        {
          question: "How long do sealants and fluoride treatments last?",
          answer: "Sealants can last 5-10 years with proper care, though they should be checked regularly for wear. Fluoride treatments provide immediate strengthening, with effects lasting several months. Regular reapplication provides continuous protection."
        }
      ]}
      relatedServices={[
        { name: "Pediatric Dentistry", link: "/services/pediatric-dentistry" },
        { name: "Cleaning and Exams", link: "/services/cleaning-exams" },
        { name: "Tooth-Colored Fillings", link: "/services/tooth-colored-fillings" },
        { name: "X-rays", link: "/services/xrays" }
      ]}
    />
  );
};

export default SealantsFluoride;


