import ServiceTemplate from "@/components/ServiceTemplate";
import { Zap } from "lucide-react";

const LaserDentistry = () => {
  return (
    <ServiceTemplate
      title="Laser Dentistry"
      subtitle="Surgical & Emergency Dentistry"
      description="Experience the future of dental care with advanced laser technology. Laser dentistry offers a minimally invasive, often pain-free alternative to traditional methods—reducing discomfort, speeding healing, and improving treatment outcomes for a wide range of procedures."
      icon={<Zap className="w-6 h-6 text-primary" />}
      benefits={[
        "Minimally invasive treatment",
        "Less pain and discomfort",
        "Reduced need for anesthesia",
        "Faster healing time",
        "Less bleeding and swelling",
        "Greater precision and accuracy",
        "Reduced risk of infection",
        "Quieter than traditional drills"
      ]}
      process={[
        {
          step: 1,
          title: "Assessment & Planning",
          description: "We evaluate your dental needs and determine if laser treatment is appropriate. We explain how the laser works for your specific procedure, what to expect, and answer all your questions about this advanced technology."
        },
        {
          step: 2,
          title: "Preparation",
          description: "For most laser procedures, little to no anesthesia is needed. You'll wear protective eyewear. We position the laser equipment and ensure you're comfortable. The laser is calibrated specifically for your treatment type."
        },
        {
          step: 3,
          title: "Laser Treatment",
          description: "We use the dental laser to precisely perform your procedure—whether it's treating cavities, reshaping gums, removing tissue, or treating infection. The laser works quickly and comfortably, with minimal sensation and no vibration."
        },
        {
          step: 4,
          title: "Post-Treatment Care",
          description: "Most laser procedures require minimal aftercare. You may experience less swelling and discomfort compared to traditional methods. We provide any necessary instructions and schedule follow-up appointments to ensure optimal healing."
        }
      ]}
      faqs={[
        {
          question: "What dental procedures can lasers be used for?",
          answer: "Lasers can treat cavities, gum disease, gum recontouring, teeth whitening acceleration, removal of oral lesions, exposure of wisdom teeth, tissue removal, biopsy procedures, treating cold sores and canker sores, and more. Technology continues to expand laser applications."
        },
        {
          question: "Does laser dentistry hurt?",
          answer: "Most patients report little to no discomfort with laser procedures. The laser cauterizes as it works, reducing bleeding and nerve stimulation. Many procedures require no anesthesia or less than traditional methods. Patients often describe feeling warmth or tingling rather than pain."
        },
        {
          question: "How is laser dentistry different from traditional methods?",
          answer: "Lasers use concentrated light energy instead of mechanical tools. They're more precise, cause less trauma to surrounding tissue, promote faster healing, minimize bleeding, reduce infection risk, and often eliminate the need for sutures. There's typically no drilling noise or vibration."
        },
        {
          question: "Is laser dentistry safe?",
          answer: "Yes, dental lasers are FDA-approved and very safe when used by trained professionals. We follow strict safety protocols, including protective eyewear for you and staff. Lasers have been used successfully in dentistry for decades with an excellent safety record."
        },
        {
          question: "Does insurance cover laser dentistry?",
          answer: "Most insurance companies cover laser dental procedures the same as traditional methods—they cover the procedure itself, not specifically the technology used. We'll verify your coverage and provide cost estimates before treatment."
        }
      ]}
      relatedServices={[
        { name: "Oral Surgery", link: "/services/oral-surgery" },
        { name: "Root Canal Treatment", link: "/services/root-canal" },
        { name: "Tooth-Colored Fillings", link: "/services/tooth-colored-fillings" },
        { name: "Emergency Dentistry", link: "/services/emergency-dentistry" }
      ]}
    />
  );
};

export default LaserDentistry;


