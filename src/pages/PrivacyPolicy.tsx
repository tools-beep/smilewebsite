import { SiteHeader } from "@/components/header-1";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Shield } from "lucide-react";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5"></div>
        <div className="absolute top-20 right-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 left-20 w-64 h-64 bg-secondary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-slide-in-up">
            <div className="inline-flex items-center px-4 py-2 rounded-full glass-card glow-primary mb-6">
              <Shield className="w-5 h-5 text-primary mr-2" />
              <span className="text-sm font-medium">POLICIES</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-display font-bold leading-tight mb-6">
              Smile Innovation Privacy Policy: <span className="text-gradient-animate">Your Data Protection Guide</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground mb-4">
              <em>– Smile Innovation (Tempe, Arizona)</em>
            </p>

            <p className="text-base text-muted-foreground max-w-3xl mx-auto">
              Thank you for visiting the website of Smile Innovation – Cosmetic & Family Dentistry. We are committed to protecting your personal information and your right to privacy. If you have any questions about our policy or how we handle your personal information, please contact us at{" "}
              <a href="mailto:admin@smileinnovation.com" className="text-primary hover:underline">
                admin@smileinnovation.com
              </a>
              .
            </p>

            <p className="text-base text-muted-foreground max-w-3xl mx-auto mt-4">
              This privacy policy is intended to inform individuals in Tempe, Arizona (and beyond) how we collect, use, and protect your Personally Identifiable Information (PII) in accordance with U.S. privacy law.
            </p>
          </div>
        </div>
      </section>

      {/* Policy Content */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-8">
            {/* Section 1 */}
            <Card className="glass-card">
              <CardContent className="p-8">
                <h2 className="text-2xl font-display font-bold mb-4">
                  1. INFORMATION COLLECTED THAT YOU DISCLOSE TO US
                </h2>
                <p className="text-muted-foreground mb-4">
                  We collect personal information you voluntarily provide when you:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li>Schedule an appointment</li>
                  <li>Fill out a contact form</li>
                  <li>Subscribe to our newsletter</li>
                  <li>Communicate with us via email or phone</li>
                </ul>
                <p className="text-muted-foreground mt-4">
                  This may include your name, email address, phone number, address, date of birth, insurance details, and medical history relevant to dental care.
                </p>
              </CardContent>
            </Card>

            {/* Section 2 */}
            <Card className="glass-card">
              <CardContent className="p-8">
                <h2 className="text-2xl font-display font-bold mb-4">
                  2. INFORMATION AUTOMATICALLY COLLECTED
                </h2>
                <p className="text-muted-foreground mb-4">
                  We may collect technical information such as:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li>IP address</li>
                  <li>Browser type</li>
                  <li>Device identifiers</li>
                  <li>Operating system</li>
                  <li>Time of access</li>
                  <li>Referring URLs</li>
                  <li>Site usage behavior</li>
                </ul>
                <p className="text-muted-foreground mt-4">
                  This data helps improve site functionality and security.
                </p>
                <div className="mt-6 p-4 bg-muted/50 rounded-lg">
                  <p className="font-semibold mb-2">Cookies:</p>
                  <p className="text-muted-foreground">
                    We use cookies to enhance user experience and serve personalized ads. You may disable cookies through your browser settings, though this may impact site performance.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Section 3 */}
            <Card className="glass-card">
              <CardContent className="p-8">
                <h2 className="text-2xl font-display font-bold mb-4">
                  3. HOW DO WE PROTECT YOUR INFORMATION?
                </h2>
                <p className="text-muted-foreground mb-4">We:</p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li>Use SSL encryption</li>
                  <li>Restrict access to your data</li>
                  <li>Monitor for security vulnerabilities</li>
                </ul>
                <p className="text-muted-foreground mt-4">
                  Personal data is only retained for as long as necessary to fulfill the purposes outlined in this policy.
                </p>
              </CardContent>
            </Card>

            {/* Section 4 */}
            <Card className="glass-card">
              <CardContent className="p-8">
                <h2 className="text-2xl font-display font-bold mb-4">
                  4. DO WE SHARE YOUR INFORMATION WITH THIRD PARTIES?
                </h2>
                <p className="text-muted-foreground mb-4">We may share your data:</p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li>To comply with legal obligations</li>
                  <li>With trusted vendors or service providers</li>
                  <li>In the event of a business transfer</li>
                  <li>With your consent</li>
                </ul>
                <p className="text-muted-foreground mt-4">
                  We <strong>do not</strong> sell or trade your data.
                </p>
                <div className="mt-6 p-4 bg-muted/50 rounded-lg">
                  <p className="font-semibold mb-2">Third-Party Links:</p>
                  <p className="text-muted-foreground">
                    Our site may contain links to third-party websites. We are not responsible for their content or privacy practices.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Section 5 */}
            <Card className="glass-card">
              <CardContent className="p-8">
                <h2 className="text-2xl font-display font-bold mb-4">
                  5. DO WE MAKE UPDATES TO THIS POLICY?
                </h2>
                <p className="text-muted-foreground">
                  Yes. Changes will be posted on this page with an updated revision date. Your continued use of the site means you accept the updated policy.
                </p>
              </CardContent>
            </Card>

            {/* Section 6 */}
            <Card className="glass-card">
              <CardContent className="p-8">
                <h2 className="text-2xl font-display font-bold mb-4">
                  6. WHAT ARE MY PRIVACY RIGHTS?
                </h2>
                <p className="text-muted-foreground mb-4">You may:</p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li>Request access to your personal data</li>
                  <li>Request corrections or deletion</li>
                  <li>Withdraw consent</li>
                </ul>
                <p className="text-muted-foreground mt-4">
                  We will notify users via email within 7 business days of a data breach.
                </p>
              </CardContent>
            </Card>

            {/* Section 7 */}
            <Card className="glass-card">
              <CardContent className="p-8">
                <h2 className="text-2xl font-display font-bold mb-4">
                  7. DO WE COLLECT INFORMATION FROM MINORS?
                </h2>
                <p className="text-muted-foreground">
                  No. We do not knowingly collect personal data from individuals under 18. Parents may contact us to remove data collected inadvertently.
                </p>
              </CardContent>
            </Card>

            {/* Section 8 */}
            <Card className="glass-card">
              <CardContent className="p-8">
                <h2 className="text-2xl font-display font-bold mb-4">
                  8. ARIZONA PRIVACY RIGHTS
                </h2>
                <p className="text-muted-foreground">
                  Although Arizona does not currently have a specific online privacy act like California, we adhere to high standards of data protection and comply with all applicable federal privacy laws. Arizona residents may contact us to review or delete their information at any time.
                </p>
              </CardContent>
            </Card>

            {/* Section 9 */}
            <Card className="glass-card">
              <CardContent className="p-8">
                <h2 className="text-2xl font-display font-bold mb-4">
                  9. CAN-SPAM ACT
                </h2>
                <p className="text-muted-foreground mb-4">We collect your email to:</p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li>Send updates or reminders</li>
                  <li>Market services</li>
                </ul>
                <p className="text-muted-foreground mt-4 mb-4">To comply, we:</p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li>Avoid false/misleading headers</li>
                  <li>Provide unsubscribe options in all emails</li>
                  <li>Include our full contact information</li>
                </ul>
                <p className="text-muted-foreground mt-4">
                  To unsubscribe, follow the link in our emails or contact us at{" "}
                  <a href="mailto:admin@smileinnovation.com" className="text-primary hover:underline">
                    admin@smileinnovation.com
                  </a>
                  .
                </p>
              </CardContent>
            </Card>

            {/* Section 10 */}
            <Card className="glass-card">
              <CardContent className="p-8">
                <h2 className="text-2xl font-display font-bold mb-4">
                  10. CONTACTING US
                </h2>
                <div className="space-y-2 text-muted-foreground">
                  <p className="font-semibold text-foreground">Smile Innovation – Cosmetic & Family Dentistry</p>
                  <p>6323 S Rural Rd #101,</p>
                  <p>Tempe, AZ 85283, USA</p>
                  <p>
                    <strong>Email:</strong>{" "}
                    <a href="mailto:admin@smileinnovation.com" className="text-primary hover:underline">
                      admin@smileinnovation.com
                    </a>
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;


