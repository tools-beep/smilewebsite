import ServiceTemplate from "@/components/ServiceTemplate";
import { Heart } from "lucide-react";

const GeneralFamily = () => {
  return (
    <ServiceTemplate
      title="General & Family Dentistry"
      subtitle="Comprehensive Care for All Ages"
      description="Focused on prevention, comfort, and long-term oral health for your entire family. From routine cleanings to pediatric care, we provide comprehensive dental services in a welcoming environment."
      icon={<Heart className="w-6 h-6 text-primary" />}
      benefits={[
        "Preventive care for the whole family",
        "Early detection of dental issues",
        "Child-friendly environment",
        "Comprehensive oral health education",
        "Flexible scheduling for busy families",
        "Advanced diagnostic technology",
        "Gentle, patient-centered approach",
        "Building lifelong healthy habits"
      ]}
      process={[
        {
          step: 1,
          title: "Welcome & Registration",
          description: "We start by getting to know you and your family's dental history, concerns, and goals. Our friendly staff will ensure you feel comfortable and welcomed."
        },
        {
          step: 2,
          title: "Comprehensive Examination",
          description: "Our dentist performs a thorough examination of your teeth, gums, and oral structures, using digital X-rays when necessary to get a complete picture of your oral health."
        },
        {
          step: 3,
          title: "Professional Cleaning",
          description: "Our skilled hygienists provide gentle, thorough cleanings, removing plaque and tartar buildup to keep your smile healthy and bright."
        },
        {
          step: 4,
          title: "Education & Prevention",
          description: "We discuss your oral health status, provide personalized care recommendations, and educate you on proper home care techniques to maintain optimal oral health."
        }
      ]}
      faqs={[
        {
          question: "How often should my family visit the dentist?",
          answer: "We recommend dental check-ups and cleanings every six months for most patients. However, some individuals may need more frequent visits based on their oral health needs."
        },
        {
          question: "When should my child first visit the dentist?",
          answer: "Children should have their first dental visit by their first birthday or within six months of their first tooth erupting. Early visits help establish good oral health habits and allow us to monitor development."
        },
        {
          question: "Do you offer emergency dental services?",
          answer: "Yes, we provide emergency dental care for urgent situations like severe pain, knocked-out teeth, or dental trauma. Contact us immediately if you have a dental emergency."
        },
        {
          question: "Are dental X-rays safe?",
          answer: "Yes, modern digital X-rays use minimal radiation and are very safe. We only take X-rays when necessary for diagnosis and follow strict safety protocols to protect you and your family."
        }
      ]}
      relatedServices={[
        { name: "Pediatric Dentistry", link: "/services/pediatric-dentistry" },
        { name: "Cleaning and Exams", link: "/services/cleaning-exams" },
        { name: "Sealants and Fluoride", link: "/services/sealants-fluoride" },
        { name: "X-rays", link: "/services/xrays" },
        { name: "Night Guard", link: "/services/night-guard" }
      ]}
    />
  );
};

export default GeneralFamily;


