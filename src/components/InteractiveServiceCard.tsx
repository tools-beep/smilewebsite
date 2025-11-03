import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

interface InteractiveServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
  color: string;
  gradient: string;
  delay?: number;
}

const InteractiveServiceCard = ({ 
  icon: Icon, 
  title, 
  description, 
  features, 
  color, 
  gradient,
  delay = 0 
}: InteractiveServiceCardProps) => {
  const { ref, isInView } = useScrollAnimation(0.2);

  return (
    <div 
      ref={ref}
      className={`
        card-3d group relative overflow-hidden rounded-3xl p-8 h-full
        glass-card hover:shadow-2xl transition-all duration-500
        ${isInView ? 'animate-slide-in-up opacity-100' : 'opacity-0'}
      `}
      style={{ 
        animationDelay: `${delay}s`,
        background: `linear-gradient(135deg, ${gradient})` 
      }}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-32 h-32 rounded-full" 
             style={{ background: color }}></div>
        <div className="absolute bottom-0 left-0 w-24 h-24 rounded-full" 
             style={{ background: color }}></div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Icon */}
        <div className="mb-6 transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
          <div className={`w-16 h-16 rounded-2xl flex items-center justify-center`} 
               style={{ background: `${color}20` }}>
            <Icon className="w-8 h-8" style={{ color }} />
          </div>
        </div>

        {/* Title */}
        <h3 className="text-2xl font-display font-bold mb-4 group-hover:text-primary transition-colors duration-300">
          {title}
        </h3>

        {/* Description */}
        <p className="text-muted-foreground mb-6 leading-relaxed">
          {description}
        </p>

        {/* Features */}
        <ul className="space-y-3 mb-8">
          {features.map((feature, index) => (
            <li 
              key={index}
              className={`
                flex items-center text-sm text-muted-foreground
                transform transition-all duration-300
                ${isInView ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'}
              `}
              style={{ transitionDelay: `${delay + 0.2 + index * 0.1}s` }}
            >
              <div className={`w-2 h-2 rounded-full mr-3 flex-shrink-0`}
                   style={{ background: color }}></div>
              {feature}
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <Button 
          variant="ghost" 
          className="group/btn w-full justify-between hover:bg-white/10 hover:text-white transition-all duration-300"
        >
          Learn More
          <div className="w-0 group-hover/btn:w-6 overflow-hidden transition-all duration-300">
            →
          </div>
        </Button>
      </div>

      {/* Hover Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </div>
  );
};

export default InteractiveServiceCard;