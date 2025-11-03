import ServiceTemplate from "@/components/ServiceTemplate";
import { Heart } from "lucide-react";

const Xrays = () => {
  return (
    <ServiceTemplate
      title="Dental X-Rays"
      subtitle="General & Family Dentistry"
      description="Advanced digital X-ray technology provides essential diagnostic information while using up to 90% less radiation than traditional X-rays. These images help us detect hidden problems, plan treatments accurately, and monitor your oral health over time."
      icon={<Heart className="w-6 h-6 text-primary" />}
      benefits={[
        "Early detection of hidden problems",
        "Up to 90% less radiation than traditional X-rays",
        "Instant digital images for immediate review",
        "Better treatment planning accuracy",
        "Detection of issues invisible to the eye",
        "Monitoring of tooth and bone development",
        "Environmentally friendly (no chemicals)",
        "Easy to store and share electronically"
      ]}
      process={[
        {
          step: 1,
          title: "Preparation",
          description: "We'll have you wear a protective lead apron to shield your body from radiation. If you're pregnant or might be pregnant, please inform us—we may postpone non-urgent X-rays."
        },
        {
          step: 2,
          title: "Positioning",
          description: "We position a small sensor or film holder in your mouth to capture the image. You'll be asked to bite down gently and remain still for a few seconds while we take the X-ray from outside your mouth."
        },
        {
          step: 3,
          title: "Image Capture",
          description: "The X-ray machine emits a brief, focused beam through your teeth to the sensor. With digital X-rays, images appear on the screen instantly, allowing for immediate review with no processing delay."
        },
        {
          step: 4,
          title: "Review & Discussion",
          description: "We'll review the X-ray images with you, pointing out any areas of concern and explaining what we see. These images become part of your permanent dental record for future reference."
        }
      ]}
      faqs={[
        {
          question: "How often should I have dental X-rays?",
          answer: "It depends on your oral health status. Most adults with good oral health need X-rays every 1-2 years. Children, people with gum disease, frequent cavities, or complex dental work may need them more often."
        },
        {
          question: "Are dental X-rays safe?",
          answer: "Yes, dental X-rays are very safe. Modern digital X-rays use minimal radiation—equivalent to a few hours of natural background radiation or a short airplane flight. We only take X-rays when necessary and use lead aprons for extra protection."
        },
        {
          question: "What can dental X-rays detect?",
          answer: "X-rays reveal cavities between teeth, bone loss from gum disease, infections, cysts, tumors, impacted teeth, tooth and root positions, developmental abnormalities, and problems with existing dental work—issues often invisible during a regular exam."
        },
        {
          question: "What types of dental X-rays are there?",
          answer: "Common types include bitewing X-rays (for cavities between teeth), periapical X-rays (full tooth and bone), panoramic X-rays (entire mouth overview), and 3D cone beam CT scans (detailed imaging for implants or complex cases)."
        },
        {
          question: "Can I have X-rays if I'm pregnant?",
          answer: "We generally avoid non-urgent X-rays during pregnancy, especially in the first trimester. However, if urgent treatment requires X-rays, they can be taken safely with proper shielding. Always inform us if you are or might be pregnant."
        }
      ]}
      relatedServices={[
        { name: "Cleaning and Exams", link: "/services/cleaning-exams" },
        { name: "Pediatric Dentistry", link: "/services/pediatric-dentistry" },
        { name: "Dental Implants", link: "/services/implants" },
        { name: "Root Canal Treatment", link: "/services/root-canal" }
      ]}
    />
  );
};

export default Xrays;


