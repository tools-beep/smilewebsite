import ServiceTemplate from "@/components/ServiceTemplate";
import { Heart } from "lucide-react";

const NightGuard = () => {
  return (
    <ServiceTemplate
      title="Custom Night Guards"
      subtitle="General & Family Dentistry"
      description="Protect your teeth from nighttime grinding and clenching with a custom-fitted night guard. These comfortable, durable appliances prevent tooth damage, reduce jaw pain, and improve sleep quality—providing relief and long-term protection."
      icon={<Heart className="w-6 h-6 text-primary" />}
      heroImage="https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=800&auto=format&fit=crop"
      benefits={[
        "Prevents tooth wear and damage",
        "Reduces jaw pain and headaches",
        "Alleviates TMJ symptoms",
        "Improves sleep quality",
        "Custom-fitted for maximum comfort",
        "Protects dental work and restorations",
        "Durable and long-lasting",
        "Non-invasive treatment option"
      ]}
      process={[
        {
          step: 1,
          title: "Evaluation & Diagnosis",
          description: "We examine your teeth for signs of grinding or clenching (bruxism), such as worn enamel, tooth sensitivity, jaw pain, or muscle soreness. We'll also assess your bite and jaw alignment."
        },
        {
          step: 2,
          title: "Custom Impressions",
          description: "We take precise impressions or digital scans of your teeth to create a night guard that fits your mouth perfectly. Custom guards are far more comfortable and effective than over-the-counter options."
        },
        {
          step: 3,
          title: "Fabrication",
          description: "Your custom night guard is carefully crafted in a dental laboratory using high-quality, durable materials. The process typically takes 1-2 weeks, and we'll select the appropriate thickness and material for your needs."
        },
        {
          step: 4,
          title: "Fitting & Adjustment",
          description: "When your night guard is ready, we'll ensure it fits comfortably and makes proper contact with your teeth. We'll make any necessary adjustments and provide instructions for use and care."
        }
      ]}
      faqs={[
        {
          question: "How do I know if I grind my teeth?",
          answer: "Common signs include worn or flattened teeth, tooth sensitivity, jaw pain, morning headaches, tight jaw muscles, and disrupted sleep. Your dentist can also identify grinding damage during examinations. Sometimes bed partners notice grinding sounds at night."
        },
        {
          question: "How long do night guards last?",
          answer: "With proper care, a custom night guard typically lasts 3-5 years, though heavy grinders may need replacement sooner. We'll check your guard at regular dental visits for wear and tear."
        },
        {
          question: "Are custom night guards better than store-bought ones?",
          answer: "Yes! Custom night guards fit precisely, are more comfortable, stay in place better, and are more durable. They're also more effective at protecting your teeth because they're made specifically for your mouth and bite."
        },
        {
          question: "How do I care for my night guard?",
          answer: "Rinse it with cool water after each use, brush it gently with a toothbrush and mild soap, and store it in its protective case. Avoid hot water, which can warp the material. Bring it to dental appointments for professional cleaning."
        },
        {
          question: "Can I wear a night guard if I have dental work?",
          answer: "Yes, night guards are especially important if you have crowns, veneers, bridges, or other dental work, as grinding can damage these restorations. We'll design your night guard to accommodate your dental work."
        }
      ]}
      relatedServices={[
        { name: "Cleaning and Exams", link: "/services/cleaning-exams" },
        { name: "Crowns & Bridges", link: "/services/crowns-bridges" },
        { name: "Veneers", link: "/services/veneers" },
        { name: "Emergency Dentistry", link: "/services/emergency-dentistry" }
      ]}
    />
  );
};

export default NightGuard;


