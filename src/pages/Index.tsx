import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { 
  Car, 
  Shield, 
  Users, 
  Clock, 
  Briefcase, 
  Map, 
  Award, 
  ChevronRight 
} from 'lucide-react';
import { motion, useInView, useAnimation } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Hero from '@/components/Hero';
import ServiceCard from '@/components/ServiceCard';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

const Index = () => {
  const servicesRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const testimonialsRef = useRef<HTMLDivElement>(null);
  
  const isServicesInView = useInView(servicesRef, { once: true, amount: 0.2 });
  const isStatsInView = useInView(statsRef, { once: true, amount: 0.2 });
  const isTestimonialsInView = useInView(testimonialsRef, { once: true, amount: 0.2 });
  
  const servicesControls = useAnimation();
  const statsControls = useAnimation();
  const testimonialsControls = useAnimation();
  
  useEffect(() => {
    if (isServicesInView) {
      servicesControls.start("visible");
    }
  }, [isServicesInView, servicesControls]);
  
  useEffect(() => {
    if (isStatsInView) {
      statsControls.start("visible");
    }
  }, [isStatsInView, statsControls]);
  
  useEffect(() => {
    if (isTestimonialsInView) {
      testimonialsControls.start("visible");
    }
  }, [isTestimonialsInView, testimonialsControls]);
  
  const services = [
    {
      title: "Executive Transportation",
      description: "Premium vehicles and professional chauffeurs for executives and VIPs who expect nothing but the best.",
      icon: <Car size={36} />
    },
    {
      title: "Personal Security",
      description: "Experienced security professionals providing discreet personal protection and peace of mind.",
      icon: <Shield size={36} />
    },
    {
      title: "Event Security",
      description: "Comprehensive security solutions for private and corporate events, ensuring smooth operations.",
      icon: <Users size={36} />
    },
    {
      title: "24/7 Availability",
      description: "Round-the-clock service to accommodate your schedule, whether planned in advance or on short notice.",
      icon: <Clock size={36} />
    },
    {
      title: "Corporate Services",
      description: "Customized solutions for businesses, including employee transportation and executive protection.",
      icon: <Briefcase size={36} />
    },
    {
      title: "Custom Routes",
      description: "Tailored transportation routes and security protocols based on risk assessment and client needs.",
      icon: <Map size={36} />
    }
  ];
  
  const testimonials = [
    {
      quote: "The level of professionalism from the HAUS team was exceptional. Their attention to detail and discreet service made our high-profile event run smoothly.",
      author: "Sarah J., Event Coordinator",
      company: "Luxury Events International"
    },
    {
      quote: "As a traveling executive, I need reliable and secure transportation. HAUS has consistently exceeded my expectations with their punctuality and professionalism.",
      author: "Michael R., CEO",
      company: "Global Investments Corp"
    },
    {
      quote: "Their combination of transportation and security services simplified our planning process. The team's military background shows in their meticulous execution.",
      author: "David L., Director of Security",
      company: "Premiere Entertainment"
    }
  ];
  
  const fadeInUpVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: { 
        delay: custom * 0.1,
        duration: 0.6,
        ease: "easeOut" 
      }
    })
  };
  
  const fadeInVariant = {
    hidden: { opacity: 0 },
    visible: (custom: number) => ({
      opacity: 1,
      transition: { 
        delay: custom * 0.1,
        duration: 0.6,
        ease: "easeOut"
      }
    })
  };
  
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <Hero />
      
      {/* About Section */}
      <section className="py-20 bg-haus-900 relative">
        <div className="container max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-haus-gold text-sm tracking-widest uppercase font-medium">About HAUS</p>
              <h2 className="text-3xl md:text-4xl font-bold text-white">The Vision Behind Haus Transportation and Security</h2>
              <p className="text-gray-400 leading-relaxed">
                Haus Transportation and Security was built on a foundation of discipline, precision, and unwavering commitment to safety—principles deeply ingrained in its founder, Rich Cartolano. As a United States Marine Corps veteran and licensed security professional with 25 years of experience, Rich has spent his career mastering the skills necessary to protect, transport, and serve high-profile individuals with the highest level of discretion and professionalism.
              </p>
              <p className="text-gray-400 leading-relaxed">
                His background in military operations, private security, and advanced evasive driving techniques has shaped the very core of Haus Transportation and Security. Every service is designed with strategic precision—whether it's executive transportation, airport transfers, or personal security. Clients benefit from the same elite-level protection and efficiency trusted by military and security professionals worldwide.
              </p>
              <p className="text-gray-400 leading-relaxed">
                At Haus, security is not just about protection—it's about creating a seamless, stress-free experience where clients feel both safe and valued. This commitment to excellence ensures that every ride is more than just transportation; it's a secure, first-class experience tailored for those who demand the best.
              </p>
              <div className="pt-4">
                <Button asChild className="bg-haus-burgundy hover:bg-haus-burgundy/90 text-white rounded-none luxury-transition">
                  <Link to="/services">
                    Learn More About Our Services <ChevronRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="relative h-[400px] md:h-[500px]">
              <div className="absolute inset-0 glass-card overflow-hidden dot-pattern">
                <div className="absolute inset-0 rounded-xl overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-tr from-black via-transparent to-transparent z-10"></div>
                  <img 
                    src="/Capturerich1.PNG" 
                    alt="Rich Cartolano, Founder of Haus Transportation and Security" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Remaining code stays the same... */}
      
      <Footer />
    </div>
  );
};

export default Index;
