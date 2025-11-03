import ServiceTemplate from "@/components/ServiceTemplate";
import { Zap } from "lucide-react";

const OralSurgery = () => {
  return (
    <ServiceTemplate
      title="Oral Surgery"
      subtitle="Surgical & Emergency Dentistry"
      description="Advanced surgical procedures performed with precision and care. From wisdom teeth removal to complex extractions, bone grafting, and pre-implant surgery, our experienced team uses modern techniques and sedation options to ensure your comfort and optimal outcomes."
      icon={<Zap className="w-6 h-6 text-primary" />}
      benefits={[
        "Experienced surgical team",
        "Advanced surgical techniques",
        "Multiple sedation options",
        "State-of-the-art technology",
        "Comprehensive pre and post-op care",
        "Minimally invasive approaches",
        "Focus on patient comfort",
        "Fast recovery protocols"
      ]}
      process={[
        {
          step: 1,
          title: "Consultation & Planning",
          description: "We conduct a thorough examination with X-rays or 3D imaging to assess your situation. We discuss your medical history, explain the procedure in detail, review sedation options, and answer all your questions."
        },
        {
          step: 2,
          title: "Pre-Operative Preparation",
          description: "On surgery day, we review instructions and verify your medical status. We administer your chosen sedation or anesthesia to ensure you're comfortable throughout the procedure. We monitor you constantly for safety."
        },
        {
          step: 3,
          title: "Surgical Procedure",
          description: "Using precise surgical techniques and modern equipment, we perform your procedure efficiently and carefully. This may include extractions, bone grafting, tissue removal, or preparation for implants—whatever is needed for your specific case."
        },
        {
          step: 4,
          title: "Recovery & Follow-Up",
          description: "We provide detailed post-operative instructions, prescriptions for pain management and antibiotics if needed, and schedule follow-up appointments. We're available for any questions or concerns during your recovery."
        }
      ]}
      faqs={[
        {
          question: "What types of oral surgery do you perform?",
          answer: "We perform wisdom teeth removal, complex tooth extractions, dental implant placement, bone grafting, treatment of oral infections and cysts, jaw surgery preparation, facial trauma repair, and biopsy procedures. If specialized care is needed, we'll coordinate with oral surgeons."
        },
        {
          question: "Will I be put to sleep for oral surgery?",
          answer: "We offer various sedation levels: local anesthesia alone (awake but numb), nitrous oxide (relaxed but conscious), oral sedation (drowsy but responsive), and IV sedation (deeply relaxed with minimal memory). We'll recommend the best option for your procedure and anxiety level."
        },
        {
          question: "How long is recovery after oral surgery?",
          answer: "Recovery varies by procedure. Simple extractions may require only a few days, while complex surgeries like implants or bone grafts may take several weeks. Most patients return to normal activities within 3-7 days. We provide specific timelines and recovery guidelines."
        },
        {
          question: "What can I eat after oral surgery?",
          answer: "Stick to soft, cool foods for the first few days: yogurt, smoothies, mashed potatoes, soups (not too hot), eggs, and ice cream. Avoid hard, crunchy, spicy, or very hot foods. Gradually reintroduce normal foods as healing progresses and comfort allows."
        },
        {
          question: "How much will oral surgery cost?",
          answer: "Costs vary based on the specific procedure, complexity, sedation type, and whether insurance covers any portion. We provide detailed estimates before treatment and work with most insurance plans. Payment plans are available to make treatment affordable."
        }
      ]}
      relatedServices={[
        { name: "Tooth Extraction", link: "/services/tooth-extraction" },
        { name: "Dental Implants", link: "/services/implants" },
        { name: "Emergency Dentistry", link: "/services/emergency-dentistry" },
        { name: "Sleep Dentistry", link: "/services/sleep-dentistry" }
      ]}
    />
  );
};

export default OralSurgery;


