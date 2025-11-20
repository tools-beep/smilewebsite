import ServiceTemplate from "@/components/ServiceTemplate";
import { Heart } from "lucide-react";

const PediatricDentistry = () => {
  return (
    <ServiceTemplate
      title="Pediatric Dentistry"
      subtitle="General & Family Dentistry"
      description="Specialized dental care for infants, children, and adolescents. Our gentle, child-friendly approach creates positive dental experiences that set the foundation for a lifetime of healthy smiles. We make dentistry fun and stress-free for kids!"
      icon={<Heart className="w-6 h-6 text-primary" />}
      heroImage="/assets/generalandfamily/pediaticdentistry.png"
      benefits={[
        "Child-friendly, welcoming environment",
        "Gentle, patient-centered care",
        "Early detection of dental issues",
        "Preventive education for kids and parents",
        "Building positive dental associations",
        "Specialized training in pediatric dentistry",
        "Treatment of unique childhood dental needs",
        "Establishing healthy habits early"
      ]}
      process={[
        {
          step: 1,
          title: "First Visit Introduction",
          description: "We welcome your child with a friendly, non-threatening environment. The first visit is often just a 'meet and greet' to build comfort and familiarity with the dental office, team, and equipment."
        },
        {
          step: 2,
          title: "Gentle Examination",
          description: "Using age-appropriate language and techniques, we examine your child's teeth, gums, and oral development. We check for cavities, assess bite development, and evaluate oral hygiene habits."
        },
        {
          step: 3,
          title: "Cleaning & Prevention",
          description: "We gently clean your child's teeth and may apply fluoride or sealants as needed. We demonstrate proper brushing and flossing techniques in a fun, engaging way that kids can understand and remember."
        },
        {
          step: 4,
          title: "Parent Education",
          description: "We discuss your child's oral health with you, provide guidance on nutrition, thumb-sucking, pacifier use, and answer any questions about your child's dental development and care needs."
        }
      ]}
      faqs={[
        {
          question: "When should my child first visit the dentist?",
          answer: "The American Academy of Pediatric Dentistry recommends a child's first dental visit by their first birthday or within six months of their first tooth erupting. Early visits help prevent problems and establish good habits."
        },
        {
          question: "How can I prepare my child for their dental visit?",
          answer: "Keep explanations simple and positive, read children's books about dentist visits, avoid using scary words, and never use the dentist as a threat. Let us handle the explanations during the visit—we're experts at making it fun!"
        },
        {
          question: "What if my child has dental anxiety?",
          answer: "We specialize in helping anxious children feel comfortable. We use gentle techniques, positive reinforcement, distraction methods, and take breaks as needed. For severe anxiety, sedation options are available."
        },
        {
          question: "Are dental X-rays safe for children?",
          answer: "Yes, modern digital X-rays use very low radiation levels and are very safe for children. We only take X-rays when necessary for diagnosis and use protective lead aprons to maximize safety."
        },
        {
          question: "How do I help my child develop good oral hygiene habits?",
          answer: "Lead by example, make brushing fun with songs or apps, use age-appropriate toothbrushes and flavored toothpaste, supervise brushing until age 7-8, and maintain regular dental visits. Positive reinforcement works best!"
        }
      ]}
      relatedServices={[
        { name: "Cleaning and Exams", link: "/services/cleaning-exams" },
        { name: "Sealants and Fluoride", link: "/services/sealants-fluoride" },
        { name: "X-rays", link: "/services/xrays" },
        { name: "Emergency Dentistry", link: "/services/emergency-dentistry" }
      ]}
    />
  );
};

export default PediatricDentistry;


