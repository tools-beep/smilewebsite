import ServiceTemplate from "@/components/ServiceTemplate";
import { Zap } from "lucide-react";

const RootCanal = () => {
  return (
    <ServiceTemplate
      title="Root Canal Treatment"
      subtitle="Surgical & Emergency Dentistry"
      description="Save your natural tooth and relieve pain with modern root canal therapy. Despite its reputation, root canal treatment is a comfortable, routine procedure that eliminates infection, preserves your tooth, and provides lasting relief—no more painful than getting a filling."
      icon={<Zap className="w-6 h-6 text-primary" />}
      heroImage="/assets/surgicalandemergency/rootcanal.png"
      benefits={[
        "Save your natural tooth",
        "Eliminate pain and infection",
        "Modern, comfortable procedure",
        "Prevent further complications",
        "Cost-effective compared to extraction",
        "Maintain proper bite and jaw alignment",
        "High success rate (95%+)",
        "Quick recovery time"
      ]}
      process={[
        {
          step: 1,
          title: "Diagnosis & Anesthesia",
          description: "We take X-rays to assess the infection and surrounding bone. Local anesthesia is administered to completely numb the area. We can also provide sedation options if you're anxious. You shouldn't feel any pain during the procedure."
        },
        {
          step: 2,
          title: "Accessing & Cleaning",
          description: "We create a small opening in the tooth to access the infected pulp chamber. Using specialized instruments, we carefully remove the infected tissue, bacteria, and debris. The canals are then cleaned, disinfected, and shaped."
        },
        {
          step: 3,
          title: "Filling the Canals",
          description: "Once thoroughly cleaned, the empty canals are filled with a biocompatible material called gutta-percha and sealed with adhesive cement. This prevents future infection and strengthens the tooth structure."
        },
        {
          step: 4,
          title: "Restoration",
          description: "A temporary filling is placed, and you'll return in a few weeks for a permanent crown to protect and restore the tooth. The crown provides strength and allows you to use the tooth normally for years to come."
        }
      ]}
      faqs={[
        {
          question: "Do root canals hurt?",
          answer: "Modern root canal therapy is no more uncomfortable than getting a filling. Local anesthesia ensures you feel no pain during the procedure. Most pain associated with root canals actually comes from the infection before treatment—the procedure relieves that pain!"
        },
        {
          question: "How do I know if I need a root canal?",
          answer: "Signs include severe toothache, prolonged sensitivity to hot or cold, tooth discoloration, swelling or tenderness in nearby gums, and a persistent or recurring pimple on the gums. However, sometimes there are no symptoms. Regular checkups help us detect issues early."
        },
        {
          question: "How long does a root canal take?",
          answer: "Most root canals are completed in 60-90 minutes in a single visit. Complex cases or certain teeth may require a second appointment. The time depends on which tooth is affected and the extent of infection."
        },
        {
          question: "What happens if I don't get a root canal?",
          answer: "An infected tooth won't heal on its own. The infection can spread, causing abscess, bone loss, severe pain, and systemic health issues. Ultimately, the tooth will need extraction, which is more costly and requires replacement with an implant, bridge, or denture."
        },
        {
          question: "How long will the treated tooth last?",
          answer: "With proper care and a quality crown restoration, a root canal-treated tooth can last a lifetime. Success rates are very high, and most teeth function normally after treatment. Regular dental checkups and good oral hygiene are essential for longevity."
        }
      ]}
      relatedServices={[
        { name: "Crowns & Bridges", link: "/services/crowns-bridges" },
        { name: "Emergency Dentistry", link: "/services/emergency-dentistry" },
        { name: "Tooth Extraction", link: "/services/tooth-extraction" },
        { name: "Dental Implants", link: "/services/implants" }
      ]}
    />
  );
};

export default RootCanal;


