import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

// Type definition for component props
interface HeroProps {
  className?: string;
}

const Hero = ({ className }: HeroProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <div 
      className={cn(
        "relative w-full h-screen overflow-hidden flex items-start justify-center pt-40",
        className
      )}
    >
      {/* Hero Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/90 z-10" />
        <picture>
          <source 
            srcSet="/lovable-uploads/97ae4719-5b6e-4975-8783-098ea1b3c482.webp" 
            type="image/webp" 
          />
          <img
            src="/lovable-uploads/97ae4719-5b6e-4975-8783-098ea1b3c482.png"
            alt="Luxury Mercedes SUV"
            className="w-full h-full object-cover object-center"
            loading="lazy"
            decoding="async"
          />
        </picture>
      </div>
      
      {/* Content */}
      <div className="w-full pl-6 relative z-20">
        {/* Refined Subtitle with White Text and Intense Red Glow */}
        <p className={`
          text-white 
          uppercase 
          tracking-widest 
          text-sm 
          mb-2 
          font-semibold 
          drop-shadow-[0_0_10px_theme('colors.haus-burgundy')]
        `}>
          Premium Transportation & Security
        </p>
        
        {/* Rest of content */}
        <div className="mt-12">
          <div className={cn(
            "transition-all duration-700 ease-out transform",
            isLoaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          )}>
            <h1 className={`
              text-4xl 
              md:text-5xl 
              lg:text-6xl 
              font-bold 
              text-white 
              mb-4 
              tracking-tight 
              leading-[1.1]
              text-shadow-[0_2px_4px_rgba(0,0,0,0.3)]
            `}>
              Luxury at Your Service
            </h1>
            <p className={`
              text-gray-200 
              text-lg 
              mb-8 
              max-w-2xl 
              font-light 
              tracking-wide 
              leading-relaxed
            `}>
              Elite transportation and professional security services tailored for discerning clients who value privacy, reliability, and sophistication.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                asChild
                size="lg" 
                className="bg-haus-burgundy hover:bg-haus-burgundy/90 text-white rounded-none luxury-transition px-6"
              >
                <Link to="/booking">
                  Book Our Services <ChevronRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button 
                asChild
                variant="outline" 
                size="lg" 
                className="bg-white/10 border-white/20 hover:bg-white/20 text-white rounded-none luxury-transition"
              >
                <Link to="/risk-assessment">
                  <span className="text-white drop-shadow-[0_0_5px_theme('colors.haus-burgundy')]">
                    Free Custom HAUS Elite Plan
                  </span> 
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
