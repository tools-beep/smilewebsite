import { SiteHeader } from "@/components/header-1";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Briefcase, MapPin, DollarSign, Clock, Check, Upload } from "lucide-react";
import { useState } from "react";

const Careers = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted");
  };

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5"></div>
        <div className="absolute top-20 right-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-slide-in-up">
            <div className="inline-flex items-center px-4 py-2 rounded-full glass-card glow-primary mb-6">
              <Briefcase className="w-5 h-5 text-primary mr-2" />
              <span className="text-sm font-medium">Join Our Team</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-display font-bold leading-tight mb-6">
              Build Your Career at <span className="text-gradient-animate">Smile Innovation</span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Join a thriving dental practice in Tempe, AZ where innovation meets compassion. We're looking for talented professionals ready to grow with us.
            </p>
          </div>
        </div>
      </section>

      {/* Job Listings */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto space-y-12">
            
            {/* Position 1: Dentist */}
            <Card className="glass-card border-0 hover:shadow-2xl transition-all duration-300 animate-slide-in-up">
              <CardContent className="p-8 md:p-12">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h2 className="text-3xl md:text-4xl font-display font-bold mb-2">
                      🦷 Associate Dentist / Partner Dentist
                    </h2>
                    <div className="flex flex-wrap gap-4 mt-4">
                      <div className="flex items-center text-muted-foreground">
                        <MapPin className="w-4 h-4 mr-2" />
                        Tempe, Arizona
                      </div>
                      <div className="flex items-center text-muted-foreground">
                        <DollarSign className="w-4 h-4 mr-2" />
                        OTE $150,000+
                      </div>
                      <div className="flex items-center text-muted-foreground">
                        <Clock className="w-4 h-4 mr-2" />
                        Full-Time | Partnership Opportunity
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-bold mb-3">About the Role</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      We're looking for a motivated and compassionate Dentist in Chair ready to take ownership of their craft — and their future. This is more than an associate position — it's a partnership opportunity within a growing, innovative dental practice in Tempe, AZ. You'll have access to advanced technology, a supportive team, and a loyal patient base that values quality and comfort.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold mb-3">What You'll Do</h3>
                    <ul className="space-y-2">
                      {[
                        "Deliver exceptional general and cosmetic dental care to our patients",
                        "Develop strong, lasting relationships with patients and team members",
                        "Collaborate with practice leadership to improve patient experience and clinical outcomes",
                        "Contribute to the growth of the practice and share in its success through a revenue share partnership model",
                        "Maintain high clinical standards in all procedures and patient interactions"
                      ].map((item, index) => (
                        <li key={index} className="flex items-start">
                          <Check className="w-5 h-5 text-primary mr-3 flex-shrink-0 mt-0.5" />
                          <span className="text-muted-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold mb-3">What We're Looking For</h3>
                    <ul className="space-y-2">
                      {[
                        "DDS/DMD degree from an accredited dental school",
                        "Active Arizona dental license (or eligibility to obtain one)",
                        "Strong communication skills and a patient-first mindset",
                        "Desire to grow with a team-oriented, forward-thinking practice",
                        "Entrepreneurial spirit and interest in partnership/ownership opportunities"
                      ].map((item, index) => (
                        <li key={index} className="flex items-start">
                          <Check className="w-5 h-5 text-primary mr-3 flex-shrink-0 mt-0.5" />
                          <span className="text-muted-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold mb-3">Why Join Us</h3>
                    <ul className="space-y-2">
                      {[
                        "OTE $150,000+ with partnership revenue potential",
                        "State-of-the-art technology and modern facilities",
                        "Supportive, collaborative, and fun work culture",
                        "Opportunity to shape the future of a thriving local dental brand"
                      ].map((item, index) => (
                        <li key={index} className="flex items-start">
                          <Check className="w-5 h-5 text-primary mr-3 flex-shrink-0 mt-0.5" />
                          <span className="text-muted-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4">
                    <Button 
                      variant="premium" 
                      size="lg"
                      onClick={() => document.getElementById('application-form')?.scrollIntoView({ behavior: 'smooth' })}
                      className="group"
                    >
                      Apply Now
                      <Briefcase className="ml-2 w-5 h-5 group-hover:scale-110 transition-transform" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Position 2: Hygienist */}
            <Card className="glass-card border-0 hover:shadow-2xl transition-all duration-300 animate-slide-in-up" style={{ animationDelay: '0.1s' }}>
              <CardContent className="p-8 md:p-12">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h2 className="text-3xl md:text-4xl font-display font-bold mb-2">
                      💎 Full-Time Dental Hygienist
                    </h2>
                    <div className="flex flex-wrap gap-4 mt-4">
                      <div className="flex items-center text-muted-foreground">
                        <MapPin className="w-4 h-4 mr-2" />
                        Tempe, Arizona
                      </div>
                      <div className="flex items-center text-muted-foreground">
                        <DollarSign className="w-4 h-4 mr-2" />
                        OTE $80,000+
                      </div>
                      <div className="flex items-center text-muted-foreground">
                        <Clock className="w-4 h-4 mr-2" />
                        Full-Time
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-bold mb-3">About the Role</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      We're searching for an enthusiastic and detail-oriented Dental Hygienist who's passionate about patient care and oral health education. You'll be joining a supportive and energetic team that treats every patient like family. Our hygienists play a vital role in creating confident, healthy smiles in a relaxed and positive environment.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold mb-3">What You'll Do</h3>
                    <ul className="space-y-2">
                      {[
                        "Provide top-quality hygiene care including cleanings, scaling, and root planing",
                        "Educate patients on oral hygiene and preventive care",
                        "Support the dentist and clinical team to deliver a seamless patient experience",
                        "Maintain accurate patient records and uphold infection control standards",
                        "Contribute to a positive, growth-oriented team culture"
                      ].map((item, index) => (
                        <li key={index} className="flex items-start">
                          <Check className="w-5 h-5 text-primary mr-3 flex-shrink-0 mt-0.5" />
                          <span className="text-muted-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold mb-3">What We're Looking For</h3>
                    <ul className="space-y-2">
                      {[
                        "Valid Arizona Dental Hygiene License",
                        "Excellent clinical and communication skills",
                        "A team player with a caring, upbeat personality",
                        "Comfortable using modern dental technology and digital charting"
                      ].map((item, index) => (
                        <li key={index} className="flex items-start">
                          <Check className="w-5 h-5 text-primary mr-3 flex-shrink-0 mt-0.5" />
                          <span className="text-muted-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold mb-3">Why Join Us</h3>
                    <ul className="space-y-2">
                      {[
                        "OTE $80,000+ annually",
                        "Supportive team with growth and learning opportunities",
                        "Modern practice and upbeat culture",
                        "Patients who truly appreciate your care and expertise"
                      ].map((item, index) => (
                        <li key={index} className="flex items-start">
                          <Check className="w-5 h-5 text-primary mr-3 flex-shrink-0 mt-0.5" />
                          <span className="text-muted-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4">
                    <Button 
                      variant="premium" 
                      size="lg"
                      onClick={() => document.getElementById('application-form')?.scrollIntoView({ behavior: 'smooth' })}
                      className="group"
                    >
                      Apply Now
                      <Briefcase className="ml-2 w-5 h-5 group-hover:scale-110 transition-transform" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section id="application-form" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12 animate-slide-in-up">
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
                Apply Now
              </h2>
              <p className="text-xl text-muted-foreground">
                Please fill out the form below and upload your resume.
              </p>
            </div>

            <Card className="glass-card border-0 shadow-2xl">
              <CardContent className="p-8 md:p-12">
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Full Name */}
                  <div className="space-y-2">
                    <Label htmlFor="fullName">Full Name *</Label>
                    <Input 
                      id="fullName" 
                      placeholder="John Doe" 
                      required 
                      className="h-12"
                    />
                  </div>

                  {/* Email */}
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="john@example.com" 
                      required 
                      className="h-12"
                    />
                  </div>

                  {/* Phone */}
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input 
                      id="phone" 
                      type="tel" 
                      placeholder="(480) 555-0123" 
                      required 
                      className="h-12"
                    />
                  </div>

                  {/* Position */}
                  <div className="space-y-2">
                    <Label htmlFor="position">Position Applying For *</Label>
                    <Select required>
                      <SelectTrigger className="h-12">
                        <SelectValue placeholder="Select a position" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="dentist">Associate Dentist / Partner Dentist</SelectItem>
                        <SelectItem value="hygienist">Full-Time Dental Hygienist</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Resume Upload */}
                  <div className="space-y-2">
                    <Label htmlFor="resume">Upload Resume * (PDF or Word format)</Label>
                    <div className="relative">
                      <Input 
                        id="resume" 
                        type="file" 
                        accept=".pdf,.doc,.docx" 
                        onChange={handleFileChange}
                        required 
                        className="h-12"
                      />
                      {selectedFile && (
                        <div className="mt-2 flex items-center text-sm text-muted-foreground">
                          <Upload className="w-4 h-4 mr-2" />
                          {selectedFile.name}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Cover Letter */}
                  <div className="space-y-2">
                    <Label htmlFor="message">Message / Cover Letter (optional)</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Tell us why you'd be a great fit for our team..."
                      rows={6}
                      className="resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-4">
                    <Button 
                      type="submit" 
                      variant="premium" 
                      size="xl"
                      className="w-full group"
                    >
                      Submit Application
                      <Briefcase className="ml-2 w-5 h-5 group-hover:scale-110 transition-transform" />
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Careers;

