import { Star, Quote } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Marketing Executive",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80",
      rating: 5,
      text: "The level of care and technology at Smile Innovations is incredible. My teeth have never looked better, and the entire process was completely painless. Truly the future of dentistry!"
    },
    {
      name: "Michael Chen",
      role: "Software Engineer",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80",
      rating: 5,
      text: "As someone who's anxious about dental work, I was amazed at how comfortable and relaxing my experience was. The AI diagnostics caught issues early, saving me from major problems."
    },
    {
      name: "Emily Rodriguez",
      role: "Teacher",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80",
      rating: 5,
      text: "The cosmetic work done on my smile exceeded all my expectations. The precision and attention to detail is unmatched. I couldn't be happier with the results!"
    },
    {
      name: "David Kim",
      role: "Business Owner",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80",
      rating: 5,
      text: "Smile Innovations transformed my dental health with their innovative approach. The convenience of digital scheduling and the quality of care make them the best in the city."
    }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            <span className="text-foreground">What Our </span>
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Patients Say
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our patients have to say about their experience at Smile Innovations.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="glass-card p-8 rounded-2xl hover-scale transition-smooth"
            >
              {/* Quote Icon */}
              <div className="bg-gradient-primary rounded-full w-12 h-12 flex items-center justify-center mb-6 glow-primary">
                <Quote className="w-6 h-6 text-white" />
              </div>

              {/* Rating */}
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, starIndex) => (
                  <Star 
                    key={starIndex} 
                    className="w-5 h-5 text-accent fill-current" 
                  />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-muted-foreground mb-6 leading-relaxed italic">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center space-x-4">
                <img 
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-display font-semibold text-foreground">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-3xl font-display font-bold text-primary mb-2">98%</div>
            <div className="text-sm text-muted-foreground">Satisfaction Rate</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-display font-bold text-secondary mb-2">5.0</div>
            <div className="text-sm text-muted-foreground">Average Rating</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-display font-bold text-accent mb-2">1200+</div>
            <div className="text-sm text-muted-foreground">Reviews</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-display font-bold text-innovation mb-2">5000+</div>
            <div className="text-sm text-muted-foreground">Happy Patients</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;