import ServiceTemplate from "@/components/ServiceTemplate";
import { Zap } from "lucide-react";

const SleepDentistry = () => {
  return (
    <ServiceTemplate
      title="Sleep Dentistry (Sedation)"
      subtitle="Surgical & Emergency Dentistry"
      description="Overcome dental anxiety and fear with safe, effective sedation dentistry. Whether you need a simple cleaning or complex procedure, our sedation options help you feel relaxed and comfortable throughout your treatment—making it possible to complete dental work you've been avoiding."
      icon={<Zap className="w-6 h-6 text-primary" />}
      heroImage="https://images.unsplash.com/photo-1598256989800-fe5f95da9787?w=800&auto=format&fit=crop&q=85"
      benefits={[
        "Overcome dental anxiety and fear",
        "Painless, comfortable experience",
        "Multiple sedation levels available",
        "Complete more treatment in fewer visits",
        "Minimal memory of the procedure",
        "Safe, monitored administration",
        "Suitable for all ages",
        "Trained sedation team"
      ]}
      process={[
        {
          step: 1,
          title: "Consultation & Evaluation",
          description: "We discuss your anxiety, medical history, and the dental work you need. We explain sedation options, answer questions, and recommend the appropriate level for your situation. Pre-sedation instructions are provided."
        },
        {
          step: 2,
          title: "Pre-Treatment Preparation",
          description: "On treatment day, we verify you've followed pre-sedation instructions (like fasting if required). We establish monitoring equipment, review the plan, and begin administering your chosen sedation method."
        },
        {
          step: 3,
          title: "Sedation & Treatment",
          description: "As the sedation takes effect, you'll become deeply relaxed. We continuously monitor your vital signs for safety. Your dental procedure is performed while you're comfortable and anxiety-free. Time seems to pass very quickly."
        },
        {
          step: 4,
          title: "Recovery & Discharge",
          description: "After treatment, you'll rest in our office until sufficiently alert. You must have a responsible adult drive you home. Most sedation effects wear off within hours, though you may feel drowsy for the remainder of the day."
        }
      ]}
      faqs={[
        {
          question: "What types of sedation do you offer?",
          answer: "We offer nitrous oxide (laughing gas—mild relaxation, immediate recovery), oral sedation (pill form—moderate relaxation, drowsy), and IV sedation (deep relaxation, minimal memory). We'll recommend the best option based on your anxiety level and procedure."
        },
        {
          question: "Is sedation dentistry safe?",
          answer: "Yes, when administered by trained professionals. We carefully evaluate your medical history, monitor your vital signs throughout the procedure, and follow strict safety protocols. Millions of dental procedures are safely performed under sedation each year."
        },
        {
          question: "Will I be completely asleep?",
          answer: "It depends on the sedation level. With nitrous oxide and oral sedation, you're conscious but deeply relaxed. IV sedation creates a state between wakefulness and sleep—you can respond but will have minimal memory. General anesthesia (rarely used in dental offices) renders you completely unconscious."
        },
        {
          question: "Who is a good candidate for sedation dentistry?",
          answer: "Sedation is ideal for people with dental anxiety or phobia, low pain tolerance, sensitive gag reflex, difficulty getting numb, need for extensive dental work, past traumatic dental experiences, or special needs. We'll evaluate if you're a candidate."
        },
        {
          question: "What should I do after sedation dentistry?",
          answer: "Have someone drive you home and stay with you for a few hours. Rest for the remainder of the day, avoid making important decisions, don't drive or operate machinery, and eat soft foods. Follow any specific post-treatment instructions. Effects typically wear off within hours."
        }
      ]}
      relatedServices={[
        { name: "Oral Surgery", link: "/services/oral-surgery" },
        { name: "Tooth Extraction", link: "/services/tooth-extraction" },
        { name: "Root Canal Treatment", link: "/services/root-canal" },
        { name: "Dental Implants", link: "/services/implants" }
      ]}
    />
  );
};

export default SleepDentistry;


