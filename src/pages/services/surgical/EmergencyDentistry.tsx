import ServiceTemplate from "@/components/ServiceTemplate";
import { Zap } from "lucide-react";

const EmergencyDentistry = () => {
  return (
    <ServiceTemplate
      title="Emergency Dentistry"
      subtitle="Surgical & Emergency Dentistry"
      description="Fast, effective care when you need it most. Our emergency dental services provide immediate relief from pain, trauma, and urgent dental issues. We're equipped to handle any dental emergency with compassion, skill, and advanced technology—getting you out of pain quickly."
      icon={<Zap className="w-6 h-6 text-primary" />}
      heroImage="https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&auto=format&fit=crop"
      benefits={[
        "Same-day emergency appointments",
        "Immediate pain relief",
        "Experienced emergency team",
        "Advanced diagnostic technology",
        "Comprehensive urgent care",
        "After-hours availability",
        "Minimize long-term damage",
        "Compassionate, efficient service"
      ]}
      process={[
        {
          step: 1,
          title: "Immediate Contact",
          description: "Call us right away when you have a dental emergency. Our team will provide immediate guidance over the phone and schedule you for the earliest possible appointment—often the same day or even after hours for severe emergencies."
        },
        {
          step: 2,
          title: "Rapid Assessment",
          description: "Upon arrival, we quickly evaluate your condition, take necessary X-rays, and determine the severity of your emergency. Our priority is to understand your situation and provide immediate pain relief."
        },
        {
          step: 3,
          title: "Emergency Treatment",
          description: "We provide the appropriate treatment to address your emergency—whether it's pain medication, antibiotics, tooth repair, extraction, or stabilization. We explain everything clearly and ensure your comfort throughout."
        },
        {
          step: 4,
          title: "Follow-Up Care",
          description: "We provide detailed aftercare instructions and prescriptions if needed. Follow-up appointments are scheduled to monitor healing, complete any additional treatment, and ensure the best long-term outcome."
        }
      ]}
      faqs={[
        {
          question: "What qualifies as a dental emergency?",
          answer: "Dental emergencies include severe toothache, knocked-out or loosened teeth, chipped or broken teeth, dental abscesses, soft tissue injuries, uncontrolled bleeding, lost fillings or crowns, and facial swelling. When in doubt, call us—we'll help determine if you need immediate care."
        },
        {
          question: "What should I do if my tooth gets knocked out?",
          answer: "Time is critical! Handle the tooth by the crown (not the root), rinse it gently with water if dirty, try to reinsert it in the socket if possible (don't force it), or keep it in milk or saliva. Call us immediately—reimplantation is most successful within 30-60 minutes."
        },
        {
          question: "Can I go to the emergency room for dental emergencies?",
          answer: "While ERs can help with severe facial trauma, infections, or uncontrolled bleeding, they typically can't provide definitive dental treatment. Calling your dentist first is usually best—we can provide specialized care and save you time and money."
        },
        {
          question: "How quickly can I be seen for an emergency?",
          answer: "We prioritize dental emergencies and typically see patients the same day they call. For severe emergencies outside regular hours, we offer after-hours emergency contact information for urgent situations."
        },
        {
          question: "What if I can't afford emergency dental treatment?",
          answer: "Don't let cost prevent you from seeking emergency care. We offer flexible payment plans and work with most insurance providers. We'll discuss all options with you and prioritize getting you out of pain and stabilizing your condition."
        }
      ]}
      relatedServices={[
        { name: "Root Canal Treatment", link: "/services/root-canal" },
        { name: "Tooth Extraction", link: "/services/tooth-extraction" },
        { name: "Oral Surgery", link: "/services/oral-surgery" },
        { name: "Crowns & Bridges", link: "/services/crowns-bridges" }
      ]}
    />
  );
};

export default EmergencyDentistry;


