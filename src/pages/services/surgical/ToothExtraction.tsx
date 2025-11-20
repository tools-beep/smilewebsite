import ServiceTemplate from "@/components/ServiceTemplate";
import { Zap } from "lucide-react";

const ToothExtraction = () => {
  return (
    <ServiceTemplate
      title="Tooth Extraction"
      subtitle="Surgical & Emergency Dentistry"
      description="Safe, gentle tooth removal when necessary. While we always try to save teeth, sometimes extraction is the best option for your overall oral health. We use modern techniques and sedation options to ensure a comfortable experience and promote quick healing."
      icon={<Zap className="w-6 h-6 text-primary" />}
      heroImage="/assets/surgicalandemergency/toothextraction.png"
      benefits={[
        "Relief from pain and infection",
        "Gentle, careful technique",
        "Quick procedure (15-30 minutes)",
        "Sedation options available",
        "Prevention of further complications",
        "Minimal discomfort during healing",
        "Expert post-operative care",
        "Preparation for replacement options"
      ]}
      process={[
        {
          step: 1,
          title: "Evaluation & Planning",
          description: "We examine the tooth and take X-rays to understand its position and condition. We discuss why extraction is necessary, what to expect, and review options for replacing the tooth. We answer all your questions and address concerns."
        },
        {
          step: 2,
          title: "Anesthesia Administration",
          description: "We administer local anesthesia to completely numb the area. For anxious patients or complex extractions, we offer sedation options. Once you're comfortable and numb, we begin the extraction—you won't feel pain, just some pressure."
        },
        {
          step: 3,
          title: "Tooth Removal",
          description: "For simple extractions, we gently loosen the tooth and remove it. Complex extractions may require sectioning the tooth or making a small incision. We work carefully to minimize trauma to surrounding tissue and bone."
        },
        {
          step: 4,
          title: "Post-Extraction Care",
          description: "We place gauze to control bleeding and may place sutures if needed. You'll receive detailed aftercare instructions, prescriptions if necessary, and information about replacement options. We schedule a follow-up to monitor healing."
        }
      ]}
      faqs={[
        {
          question: "When is tooth extraction necessary?",
          answer: "Extractions may be needed for severe decay beyond repair, advanced gum disease, fractured teeth, infection that doesn't respond to root canal treatment, impacted wisdom teeth, overcrowding before orthodontics, or teeth damaged by trauma."
        },
        {
          question: "Does tooth extraction hurt?",
          answer: "You shouldn't feel pain during the extraction due to local anesthesia. You'll feel pressure and movement, but not pain. After the anesthesia wears off, you may have some discomfort, but this is typically manageable with over-the-counter or prescribed pain medication."
        },
        {
          question: "How long does healing take after extraction?",
          answer: "Initial healing (closing of the socket) takes 1-2 weeks. Complete bone healing takes 6-8 weeks. Most people return to normal activities within a few days. Following post-operative instructions carefully promotes faster, smoother healing."
        },
        {
          question: "What is dry socket and how can I prevent it?",
          answer: "Dry socket occurs when the blood clot in the extraction site dislodges, exposing bone and nerves—causing significant pain. Prevent it by avoiding smoking, straws, spitting, and vigorous rinsing for 72 hours. Follow all post-op instructions carefully."
        },
        {
          question: "Should I replace an extracted tooth?",
          answer: "Yes, especially for visible teeth or molars. Leaving gaps can cause neighboring teeth to shift, bite problems, bone loss, and difficulty eating. Replacement options include dental implants, bridges, or dentures. We'll help you choose the best solution."
        }
      ]}
      relatedServices={[
        { name: "Dental Implants", link: "/services/implants" },
        { name: "Oral Surgery", link: "/services/oral-surgery" },
        { name: "Emergency Dentistry", link: "/services/emergency-dentistry" },
        { name: "Sleep Dentistry", link: "/services/sleep-dentistry" }
      ]}
    />
  );
};

export default ToothExtraction;


