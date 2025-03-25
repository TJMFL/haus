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
              <p className="text-haus-gold text-sm tracking-widest uppercase font-medium"></p>
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
      
      {/* Services Section */}
      <section ref={servicesRef} className="py-20 bg-black relative">
        <div className="container max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <p className="text-haus-gold text-sm tracking-widest uppercase font-medium">Our Services</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-2">Premium Services Tailored to Your Needs</h2>
            <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
              We offer a comprehensive range of luxury transportation and security services customized to meet the unique requirements of our distinguished clientele.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                custom={index}
                initial="hidden"
                animate={servicesControls}
                variants={fadeInUpVariant}
                className="animate-fade-in"
              >
                <ServiceCard
                  title={service.title}
                  description={service.description}
                  icon={service.icon}
                  delay={index * 150}
                />
              </motion.div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Button 
              asChild
              className="bg-transparent border border-haus-gold text-haus-gold hover:bg-haus-gold/10 rounded-none luxury-transition"
            >
              <Link to="/services">
                View All Services <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Stats Section */}
      <section ref={statsRef} className="py-16 bg-haus-900 relative">
        <div className="container max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              custom={0}
              initial="hidden"
              animate={statsControls}
              variants={fadeInVariant}
              className="text-center"
            >
              <div className="text-haus-gold text-3xl md:text-4xl font-bold mb-2">10+</div>
              <p className="text-gray-400">Years Experience</p>
            </motion.div>
            
            <motion.div
              custom={1}
              initial="hidden"
              animate={statsControls}
              variants={fadeInVariant}
              className="text-center"
            >
              <div className="text-haus-gold text-3xl md:text-4xl font-bold mb-2">500+</div>
              <p className="text-gray-400">Satisfied Clients</p>
            </motion.div>
            
            <motion.div
              custom={2}
              initial="hidden"
              animate={statsControls}
              variants={fadeInVariant}
              className="text-center"
            >
              <div className="text-haus-gold text-3xl md:text-4xl font-bold mb-2">24/7</div>
              <p className="text-gray-400">Service Availability</p>
            </motion.div>
            
            <motion.div
              custom={3}
              initial="hidden"
              animate={statsControls}
              variants={fadeInVariant}
              className="text-center"
            >
              <div className="text-haus-gold text-3xl md:text-4xl font-bold mb-2">100%</div>
              <p className="text-gray-400">Client Satisfaction</p>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section ref={testimonialsRef} className="py-20 bg-black relative">
        <div className="container max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <p className="text-haus-gold text-sm tracking-widest uppercase font-medium">Testimonials</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-2">What Our Clients Say</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                custom={index}
                initial="hidden"
                animate={testimonialsControls}
                variants={fadeInUpVariant}
              >
                <Card className="glass-card border-0 h-full">
                  <CardContent className="p-6 md:p-8">
                    <div className="text-haus-gold mb-6">
                      <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"></path>
                        <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"></path>
                      </svg>
                    </div>
                    <p className="text-gray-300 mb-6 italic">"{testimonial.quote}"</p>
                    <div>
                      <p className="text-white font-semibold">{testimonial.author}</p>
                      <p className="text-gray-500 text-sm">{testimonial.company}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-b from-haus-900 to-black relative overflow-hidden">
        <div className="container max-w-7xl mx-auto px-6 md:px-12">
          <div className="glass-card relative overflow-hidden luxury-shadow">
            <div className="absolute inset-0 opacity-10 dot-pattern"></div>
            <div className="p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
              <div className="max-w-xl">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Experience Elite Service?</h2>
                <p className="text-gray-300">
                  Contact us today to discuss your transportation and security needs. Our team is standing by to provide a tailored solution that exceeds your expectations.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  asChild
                  className="bg-haus-burgundy hover:bg-haus-burgundy/90 text-white rounded-none px-8 py-6 luxury-transition"
                >
                  <Link to="/booking">
                    Book Now
                  </Link>
                </Button>
                <Button 
                  asChild
                  variant="outline" 
                  className="bg-transparent border-white/30 hover:bg-white/10 text-white rounded-none px-8 py-6 luxury-transition"
                >
                  <Link to="/contact">
                    Contact Us
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
