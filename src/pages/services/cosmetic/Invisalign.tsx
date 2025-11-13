import ServiceTemplate from "@/components/ServiceTemplate";
import { Sparkles } from "lucide-react";

const Invisalign = () => {
  return (
    <ServiceTemplate
      title="Invisalign Clear Aligners in Tempe, AZ"
      subtitle="Book Your Free Invisalign Consultation"
      description="Straighten your teeth discreetly—no metal, no hassle. Invisalign is an advanced orthodontic system that uses a series of clear, custom-made aligners to gently and gradually shift your teeth into alignment. Designed for both adults and teens, Invisalign provides a nearly invisible, highly convenient alternative to traditional metal braces. Each aligner is worn for about 1–2 weeks before progressing to the next in the series, gently guiding your teeth into the desired position—without brackets or wires."
      icon={<Sparkles className="w-6 h-6 text-primary" />}
      heroImage="https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=800&auto=format&fit=crop"
      benefits={[
        "Virtually invisible for discreet treatment",
        "Smooth and comfortable compared to braces",
        "Removable for easy eating, brushing, and flossing",
        "Fewer dental visits required during treatment",
        "Custom-designed for faster, more predictable results",
        "Ideal for working professionals and teens alike",
        "Certified Invisalign providers with years of success stories",
        "Digital 3D scanning—no messy impressions"
      ]}
      process={[
        {
          step: 1,
          title: "Consultation & Digital Scan",
          description: "We evaluate your teeth and bite, then create a precise 3D digital scan of your mouth. Using advanced software, we'll show you a virtual representation of your treatment plan and expected results."
        },
        {
          step: 2,
          title: "Custom Aligner Creation",
          description: "Your custom Invisalign aligners are manufactured specifically for your treatment plan. Each set is designed to make precise adjustments to gradually shift your teeth into place."
        },
        {
          step: 3,
          title: "Wearing Your Aligners",
          description: "You'll wear each set of aligners for about 1-2 weeks, 20-22 hours per day, removing them only to eat, drink, brush, and floss. Every few weeks, you'll progress to the next set of aligners."
        },
        {
          step: 4,
          title: "Monitoring Progress",
          description: "We'll check your progress every 6-8 weeks to ensure your treatment is on track. Once complete, we'll provide retainers to maintain your beautiful new smile."
        }
      ]}
      faqs={[
        {
          question: "How long does Invisalign treatment take?",
          answer: "Treatment time ranges from 6 to 18 months depending on the complexity of your case."
        },
        {
          question: "Can Invisalign fix bite problems?",
          answer: "Yes, Invisalign can address mild to moderate bite issues such as overbite, underbite, and crossbite."
        },
        {
          question: "Is Invisalign painful?",
          answer: "Most patients experience minor pressure when switching aligners, which is a sign they're working."
        },
        {
          question: "How often do I need to wear the aligners?",
          answer: "For best results, wear them 20–22 hours per day, removing only for eating and oral hygiene."
        },
        {
          question: "What if I lose an aligner?",
          answer: "Contact our office immediately. Depending on your stage, we may advise you to move forward or reorder."
        }
      ]}
      relatedServices={[
        { name: "Veneers", link: "/services/veneers" },
        { name: "Teeth Whitening", link: "/services/teeth-whitening" },
        { name: "Smile Makeover", link: "/services/smile-makeover" },
        { name: "Cosmetic Consultations", link: "/services/cosmetic-consultations" }
      ]}
    />
  );
};

export default Invisalign;


