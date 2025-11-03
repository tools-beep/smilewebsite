import { Button } from "@/components/ui/button";
import { SiteHeader } from "@/components/header-1";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <div className="py-20">
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Compassionate Dental Care Starts With Our Doctors
          </h1>
          <p className="text-lg text-muted-foreground">
            Get to know the leaders behind Smile Innovation’s patient-first philosophy in Tempe, AZ.
          </p>
          <div className="mt-6">
            <Button size="lg" className="group transform transition-all duration-300 hover:scale-105">Schedule a Visit</Button>
          </div>
        </div>

        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-2">Meet the Doctors at<br />Smile Innovation</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Compassionate care, advanced expertise, and a commitment to helping you smile brighter.
          </p>
          <div className="mt-6">
            <Button variant="premium" size="lg" className="group transform transition-all duration-300 hover:scale-105">Schedule Your Appointment</Button>
          </div>
        </div>

        <div className="space-y-12">
          <section>
            <h3 className="text-2xl md:text-3xl font-display font-semibold mb-4">about your trusted healthcare provider</h3>
            <p className="text-muted-foreground leading-relaxed">
              At Smile Innovation, we believe great dentistry starts with connection and trust. That’s why we’re proud to introduce you to our leadership team—two dedicated professionals who bring decades of clinical experience, cutting-edge dental techniques, and a genuine love for the Tempe community.
            </p>
            <p className="text-muted-foreground leading-relaxed mt-4">
              Whether you’re here for a routine visit or a full smile transformation, Dr. Boyd and Dr. Linda Ma are here to guide your journey with precision, warmth, and purpose.
            </p>
          </section>

          <section>
            <h3 className="text-2xl md:text-3xl font-display font-semibold mb-4">Dr. Boyd Patummas DMD</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              With over 20 years of hands-on experience, Dr. Boyd is known for his calming presence, attention to detail, and passion for restoring confidence through dentistry. He specializes in cosmetic and restorative procedures, blending function with natural aesthetics.
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-1">
              <li>UC Irvine Graduate (1998)</li>
              <li>DDS, Temple University School of Dentistry (2004)</li>
              <li>Fluent in English & Thai</li>
              <li>Passionate about automotive design, mountain biking, and precision-based care</li>
            </ul>
            <div className="mt-4">
              <Button variant="glass">Learn More about Dr. Boyd</Button>
            </div>
          </section>

          <section>
            <h3 className="text-2xl md:text-3xl font-display font-semibold mb-4">Dr. Linda Ma</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Dr. Ma brings a rare combination of clinical experience and business insight. A Temple-trained dentist with 20+ years in the field, she leads Smile Innovation’s systems, patient experience, and technological growth—ensuring every visit is smooth, modern, and memorable.
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-1">
              <li>DDS, Temple University School of Dentistry (2004)</li>
              <li>Advanced training in dental implants, laser dentistry, and sleep care</li>
              <li>Background in data, systems, and photography</li>
              <li>Passionate about baking, design, and patient education</li>
            </ul>
            <div className="mt-4">
              <Button variant="glass">Learn More about Dr. Ma</Button>
            </div>
          </section>

          <section>
            <h3 className="text-2xl md:text-3xl font-display font-semibold mb-4">Why Our Patients Choose Us</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="glass-card p-6 rounded-2xl">Experienced care with over 40 years combined in dentistry</div>
              <div className="glass-card p-6 rounded-2xl">Advanced technology for precision and comfort</div>
              <div className="glass-card p-6 rounded-2xl">Trusted by hundreds of Tempe families</div>
              <div className="glass-card p-6 rounded-2xl">Multilingual care and personalized communication</div>
              <div className="glass-card p-6 rounded-2xl">A team that listens, explains, and empowers</div>
            </div>
          </section>

          <section className="text-center">
            <h3 className="text-2xl md:text-3xl font-display font-semibold mb-4">
              Let our doctors help you smile with confidence — your journey starts with one click.
            </h3>
            <Button size="lg" className="group transform transition-all duration-300 hover:scale-105">Book Your Appointment Today →</Button>
          </section>
        </div>
      </section>
      </div>
      <Footer />
    </div>
  );
};

export default About;
