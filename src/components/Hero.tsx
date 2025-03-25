import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

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
        "relative w-full h-screen overflow-hidden flex items-start justify-center pt-70", // Changed items-center to items-start and added pt-20
        className
      )}
    >
      {/* Hero Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/90 z-10" />
        <img
          src="/lovable-uploads/97ae4719-5b6e-4975-8783-098ea1b3c482.png"
          alt="Luxury Mercedes SUV"
          className="w-full h-full object-cover object-center"
        />
      </div>
      
      {/* Content */}
      <div className="w-full pl-6 relative z-20"> {/* Changed px-0 to pl-6 for left padding */}
        <div className="pl-0">
          <div className="pl-0">
            <div className={cn(
              "transition-all duration-700 ease-out transform",
              isLoaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            )}>
              <p className="text-red-500 uppercase tracking-widest text-sm mb-2 font-medium drop-shadow-[0_1px_1px_rgba(255,255,255,0.8)]">
                Premium Transportation & Security
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
                Luxury at Your Service
              </h1>
              <p className="text-gray-300 text-lg mb-8 max-w-2xl">
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
                  className="bg-transparent border-white/30 hover:bg-white/10 text-white rounded-none luxury-transition"
                >
                  <Link to="/services">
                    Explore Services
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
        <div className="w-0.5 h-16 bg-gradient-to-b from-white/0 via-white/50 to-white/0 animate-pulse-subtle"></div>
      </div>
    </div>
  );
};

export default Hero;
