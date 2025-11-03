import ServiceTemplate from "@/components/ServiceTemplate";
import { Zap } from "lucide-react";

const SurgicalEmergency = () => {
  return (
    <ServiceTemplate
      title="Surgical & Emergency Dentistry"
      subtitle="Quick Relief & Advanced Solutions"
      description="Providing quick relief and comprehensive surgical solutions when you need them most. Our experienced team is equipped to handle dental emergencies and perform advanced surgical procedures with precision and care."
      icon={<Zap className="w-6 h-6 text-primary" />}
      benefits={[
        "24/7 emergency dental care",
        "Immediate pain relief",
        "Advanced surgical techniques",
        "Sedation options available",
        "Minimally invasive procedures",
        "Fast, efficient treatment",
        "Experienced surgical team",
        "Same-day appointments for emergencies"
      ]}
      process={[
        {
          step: 1,
          title: "Emergency Contact",
          description: "Call us immediately when you have a dental emergency. Our team will provide guidance over the phone and schedule you for the earliest available appointment, often the same day."
        },
        {
          step: 2,
          title: "Rapid Assessment",
          description: "Upon arrival, we quickly evaluate your condition, take necessary X-rays, and determine the best course of action to relieve your pain and address the underlying issue."
        },
        {
          step: 3,
          title: "Treatment & Relief",
          description: "We provide immediate treatment to alleviate your pain and stabilize your condition. For surgical procedures, we ensure your comfort with appropriate anesthesia and sedation options."
        },
        {
          step: 4,
          title: "Recovery & Follow-up",
          description: "We provide detailed post-treatment care instructions and schedule follow-up visits to monitor your healing and ensure optimal recovery."
        }
      ]}
      faqs={[
        {
          question: "What qualifies as a dental emergency?",
          answer: "Dental emergencies include severe toothaches, knocked-out or broken teeth, facial swelling, uncontrolled bleeding, abscesses, or trauma to the mouth. If you're unsure, call us—we'll help you determine if you need immediate care."
        },
        {
          question: "How painful is a root canal?",
          answer: "Modern root canal therapy is typically no more uncomfortable than getting a filling. We use local anesthesia and sedation options to ensure you're comfortable throughout the procedure."
        },
        {
          question: "What should I do if my tooth gets knocked out?",
          answer: "Handle the tooth by the crown (not the root), rinse it gently if dirty, try to place it back in the socket if possible, or keep it in milk. Call us immediately—timing is critical for successful re-implantation."
        },
        {
          question: "Do you offer sedation for anxious patients?",
          answer: "Yes, we offer various sedation options including nitrous oxide (laughing gas), oral sedation, and IV sedation to help anxious patients feel relaxed and comfortable during procedures."
        }
      ]}
      relatedServices={[
        { name: "Emergency Dentistry", link: "/services/emergency-dentistry" },
        { name: "Root Canal Treatment", link: "/services/root-canal" },
        { name: "Oral Surgery", link: "/services/oral-surgery" },
        { name: "Tooth Extraction", link: "/services/tooth-extraction" },
        { name: "Sleep Dentistry", link: "/services/sleep-dentistry" },
        { name: "Laser Dentistry", link: "/services/laser-dentistry" }
      ]}
    />
  );
};

export default SurgicalEmergency;


