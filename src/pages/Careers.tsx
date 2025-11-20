import { SiteHeader } from "@/components/header-1";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Briefcase, MapPin, DollarSign, Clock, Check, Upload, Users, TrendingUp, Heart, Award, Coffee, Zap, Mail, Phone } from "lucide-react";
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
      <section className="relative pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/10"></div>
        <div className="absolute top-20 right-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-secondary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-5xl mx-auto text-center animate-slide-in-up">
            <div className="inline-flex items-center px-5 py-2.5 rounded-full glass-card glow-primary mb-8">
              <Briefcase className="w-5 h-5 text-primary mr-2" />
              <span className="text-sm font-semibold">WE'RE HIRING</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold leading-tight mb-8">
              Build Your <span className="text-gradient-animate">Dream Career</span> With Us
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed">
              Join Smile Innovation in Tempe, AZ — where cutting-edge dentistry meets a supportive, growth-focused culture.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="premium" 
                size="xl"
                onClick={() => document.getElementById('job-openings')?.scrollIntoView({ behavior: 'smooth' })}
                className="group text-lg"
              >
                View Open Positions
                <Briefcase className="ml-2 w-5 h-5 group-hover:scale-110 transition-transform" />
              </Button>
              <Button 
                variant="outline" 
                size="xl"
                onClick={() => document.getElementById('application-form')?.scrollIntoView({ behavior: 'smooth' })}
                className="text-lg"
              >
                Apply Now
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats & Culture Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
              {[
                { icon: Users, number: "15+", label: "Team Members" },
                { icon: TrendingUp, number: "10+", label: "Years Experience" },
                { icon: Heart, number: "5000+", label: "Happy Patients" },
                { icon: Award, number: "98%", label: "Satisfaction Rate" }
              ].map((stat, index) => (
                <Card key={index} className="glass-card border-0 text-center p-6 animate-slide-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                  <CardContent className="p-0">
                    <stat.icon className="w-10 h-10 text-primary mx-auto mb-4" />
                    <h3 className="text-4xl font-bold mb-2">{stat.number}</h3>
                    <p className="text-muted-foreground">{stat.label}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Why Join Us */}
            <div className="text-center mb-12 animate-slide-in-up">
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
                Why Join <span className="text-gradient-animate">Smile Innovation</span>?
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                We're not just building smiles — we're building careers. Here's what makes us different.
              </p>
            </div>

            {/* Benefits Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: TrendingUp,
                  title: "Career Growth",
                  description: "Partnership opportunities and continuous professional development",
                  gradient: "from-blue-500/10 to-cyan-500/10"
                },
                {
                  icon: DollarSign,
                  title: "Competitive Compensation",
                  description: "Industry-leading salaries with performance bonuses and revenue sharing",
                  gradient: "from-green-500/10 to-emerald-500/10"
                },
                {
                  icon: Zap,
                  title: "Advanced Technology",
                  description: "Work with state-of-the-art equipment and cutting-edge dental technology",
                  gradient: "from-purple-500/10 to-pink-500/10"
                },
                {
                  icon: Users,
                  title: "Supportive Team",
                  description: "Collaborative environment where everyone's voice is heard and valued",
                  gradient: "from-orange-500/10 to-red-500/10"
                },
                {
                  icon: Coffee,
                  title: "Work-Life Balance",
                  description: "Flexible schedules and paid time off to recharge and enjoy life",
                  gradient: "from-amber-500/10 to-yellow-500/10"
                },
                {
                  icon: Heart,
                  title: "Patient-Centered Care",
                  description: "Make a real difference in patients' lives with compassionate dentistry",
                  gradient: "from-rose-500/10 to-pink-500/10"
                }
              ].map((benefit, index) => (
                <Card 
                  key={index} 
                  className="glass-card border-0 hover:shadow-xl transition-all duration-300 animate-slide-in-up group cursor-pointer"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-6">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${benefit.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                      <benefit.icon className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                    <p className="text-muted-foreground">{benefit.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Job Listings */}
      <section id="job-openings" className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-16 animate-slide-in-up">
              <div className="inline-flex items-center px-4 py-2 rounded-full glass-card glow-primary mb-6">
                <Briefcase className="w-5 h-5 text-primary mr-2" />
                <span className="text-sm font-medium">CURRENT OPENINGS</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
                Open Positions
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Find your perfect role and join our growing team
              </p>
            </div>

            <div className="space-y-8">
            
            {/* Position 1: Dentist */}
            <Card className="glass-card border-0 hover:shadow-2xl transition-all duration-300 animate-slide-in-up group overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-colors"></div>
              <CardContent className="p-8 md:p-12 relative">
                {/* Header with Badge */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex-1">
                    <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
                      Partnership Track
                    </div>
                    <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 group-hover:text-primary transition-colors">
                      Associate Dentist / Partner Dentist 🦷
                    </h2>
                    <div className="flex flex-wrap gap-4">
                      <div className="flex items-center text-muted-foreground bg-muted/50 px-3 py-1.5 rounded-lg">
                        <MapPin className="w-4 h-4 mr-2 text-primary" />
                        <span className="font-medium">Tempe, AZ</span>
                      </div>
                      <div className="flex items-center text-muted-foreground bg-muted/50 px-3 py-1.5 rounded-lg">
                        <DollarSign className="w-4 h-4 mr-2 text-primary" />
                        <span className="font-medium">OTE $150,000+</span>
                      </div>
                      <div className="flex items-center text-muted-foreground bg-muted/50 px-3 py-1.5 rounded-lg">
                        <Clock className="w-4 h-4 mr-2 text-primary" />
                        <span className="font-medium">Full-Time</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent my-8"></div>

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
            <Card className="glass-card border-0 hover:shadow-2xl transition-all duration-300 animate-slide-in-up group overflow-hidden" style={{ animationDelay: '0.1s' }}>
              <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/5 rounded-full blur-3xl group-hover:bg-secondary/10 transition-colors"></div>
              <CardContent className="p-8 md:p-12 relative">
                {/* Header with Badge */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex-1">
                    <div className="inline-flex items-center px-3 py-1 rounded-full bg-secondary/10 text-secondary text-sm font-semibold mb-4">
                      Full-Time Position
                    </div>
                    <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 group-hover:text-primary transition-colors">
                      Full-Time Dental Hygienist 💎
                    </h2>
                    <div className="flex flex-wrap gap-4">
                      <div className="flex items-center text-muted-foreground bg-muted/50 px-3 py-1.5 rounded-lg">
                        <MapPin className="w-4 h-4 mr-2 text-primary" />
                        <span className="font-medium">Tempe, AZ</span>
                      </div>
                      <div className="flex items-center text-muted-foreground bg-muted/50 px-3 py-1.5 rounded-lg">
                        <DollarSign className="w-4 h-4 mr-2 text-primary" />
                        <span className="font-medium">OTE $80,000+</span>
                      </div>
                      <div className="flex items-center text-muted-foreground bg-muted/50 px-3 py-1.5 rounded-lg">
                        <Clock className="w-4 h-4 mr-2 text-primary" />
                        <span className="font-medium">Full-Time</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent my-8"></div>

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
        </div>
      </section>

      {/* Application Form */}
      <section id="application-form" className="relative py-24 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5"></div>
        <div className="absolute top-20 right-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-secondary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-12 animate-slide-in-up">
              <div className="inline-flex items-center px-4 py-2 rounded-full glass-card glow-primary mb-6">
                <Briefcase className="w-5 h-5 text-primary mr-2" />
                <span className="text-sm font-medium">START YOUR JOURNEY</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">
                Ready to <span className="text-gradient-animate">Join Us</span>?
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Take the first step towards an exciting career. Fill out the form below and we'll be in touch soon.
              </p>
            </div>

            <Card className="glass-card border-0 shadow-2xl">
              <CardContent className="p-8 md:p-12">
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name & Email Row */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="fullName" className="text-sm font-semibold">Full Name *</Label>
                      <Input 
                        id="fullName" 
                        placeholder="John Doe" 
                        required 
                        className="h-12 border-2 focus:border-primary transition-colors"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-sm font-semibold">Email Address *</Label>
                      <Input 
                        id="email" 
                        type="email" 
                        placeholder="john@example.com" 
                        required 
                        className="h-12 border-2 focus:border-primary transition-colors"
                      />
                    </div>
                  </div>

                  {/* Phone & Position Row */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-sm font-semibold">Phone Number *</Label>
                      <Input 
                        id="phone" 
                        type="tel" 
                        placeholder="(480) 555-0123" 
                        required 
                        className="h-12 border-2 focus:border-primary transition-colors"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="position" className="text-sm font-semibold">Position Applying For *</Label>
                      <Select required>
                        <SelectTrigger className="h-12 border-2 focus:border-primary transition-colors">
                          <SelectValue placeholder="Select a position" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="dentist">Associate Dentist / Partner Dentist</SelectItem>
                          <SelectItem value="hygienist">Full-Time Dental Hygienist</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  {/* Resume Upload */}
                  <div className="space-y-2">
                    <Label htmlFor="resume" className="text-sm font-semibold">Upload Resume *</Label>
                    <p className="text-xs text-muted-foreground mb-2">PDF or Word format (max 5MB)</p>
                    <div className="relative">
                      <div className="border-2 border-dashed border-border hover:border-primary rounded-lg p-8 text-center transition-colors cursor-pointer group">
                        <Input 
                          id="resume" 
                          type="file" 
                          accept=".pdf,.doc,.docx" 
                          onChange={handleFileChange}
                          required 
                          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                        />
                        {selectedFile ? (
                          <div className="flex items-center justify-center text-primary">
                            <Check className="w-6 h-6 mr-2" />
                            <span className="font-medium">{selectedFile.name}</span>
                          </div>
                        ) : (
                          <div>
                            <Upload className="w-12 h-12 mx-auto mb-3 text-muted-foreground group-hover:text-primary transition-colors" />
                            <p className="text-sm font-medium text-foreground mb-1">
                              Click to upload or drag and drop
                            </p>
                            <p className="text-xs text-muted-foreground">
                              Supported formats: PDF, DOC, DOCX
                            </p>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Cover Letter */}
                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-sm font-semibold">Cover Letter / Message (Optional)</Label>
                    <p className="text-xs text-muted-foreground mb-2">Tell us why you'd be a great fit for our team</p>
                    <Textarea 
                      id="message" 
                      placeholder="Share your story, experience, and what excites you about joining Smile Innovation..."
                      rows={6}
                      className="resize-none border-2 focus:border-primary transition-colors"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="space-y-4 pt-6">
                    <Button 
                      type="submit" 
                      variant="premium" 
                      size="xl"
                      className="w-full group text-lg h-14 shadow-xl hover:shadow-2xl"
                    >
                      Submit Application
                      <Briefcase className="ml-2 w-5 h-5 group-hover:scale-110 transition-transform" />
                    </Button>
                    
                    <p className="text-xs text-center text-muted-foreground">
                      By submitting this form, you agree to our{" "}
                      <a href="/privacy-policy" className="text-primary hover:underline">Privacy Policy</a>
                      . We'll contact you within 2-3 business days.
                    </p>
                  </div>
                </form>

                {/* Contact Info Below Form */}
                <div className="mt-8 pt-8 border-t border-border">
                  <p className="text-center text-muted-foreground mb-4">
                    Questions about the position? Get in touch!
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a 
                      href="mailto:admin@smileinnovation.com"
                      className="flex items-center justify-center text-primary hover:text-primary/80 transition-colors"
                    >
                      <Mail className="w-4 h-4 mr-2" />
                      admin@smileinnovation.com
                    </a>
                    <a 
                      href="tel:+14808207777"
                      className="flex items-center justify-center text-primary hover:text-primary/80 transition-colors"
                    >
                      <Phone className="w-4 h-4 mr-2" />
                      (480) 820-7777
                    </a>
                  </div>
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

export default Careers;

