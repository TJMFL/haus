import { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Car, 
  Shield, 
  Users, 
  Clock, 
  Briefcase, 
  Map, 
  CheckCircle,
  Plane,
  Calendar,
  Headphones,
  ChevronRight
} from 'lucide-react';
import { motion, useInView, useAnimation } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Services = () => {
  const transportationRef = useRef<HTMLDivElement>(null);
  const securityRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);
  
  const isTransportationInView = useInView(transportationRef, { once: true, amount: 0.2 });
  const isSecurityInView = useInView(securityRef, { once: true, amount: 0.2 });
  const isFeaturesInView = useInView(featuresRef, { once: true, amount: 0.2 });
  
  const transportationControls = useAnimation();
  const securityControls = useAnimation();
  const featuresControls = useAnimation();
  
  useEffect(() => {
    if (isTransportationInView) {
      transportationControls.start("visible");
    }
  }, [isTransportationInView, transportationControls]);
  
  useEffect(() => {
    if (isSecurityInView) {
      securityControls.start("visible");
    }
  }, [isSecurityInView, securityControls]);
  
  useEffect(() => {
    if (isFeaturesInView) {
      featuresControls.start("visible");
    }
  }, [isFeaturesInView, featuresControls]);
  
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
  
  const fadeInLeftVariant = {
    hidden: { opacity: 0, x: -20 },
    visible: (custom: number) => ({
      opacity: 1,
      x: 0,
      transition: { 
        delay: custom * 0.1,
        duration: 0.6,
        ease: "easeOut" 
      }
    })
  };
  
  const fadeInRightVariant = {
    hidden: { opacity: 0, x: 20 },
    visible: (custom: number) => ({
      opacity: 1,
      x: 0,
      transition: { 
        delay: custom * 0.1,
        duration: 0.6,
        ease: "easeOut" 
      }
    })
  };
  
  const transportationServices = [
    {
      title: "Executive Transport",
      description: "Luxury vehicles with professional chauffeurs for executives and VIPs.",
      icon: <Car size={36} />
    },
    {
      title: "Airport Transfers",
      description: "Smooth and stress-free transportation to and from airports.",
      icon: <Plane size={36} />
    },
    {
      title: "Event Transportation",
      description: "Comprehensive transport solutions for special events and gatherings.",
      icon: <Calendar size={36} />
    },
    {
      title: "Corporate Services",
      description: "Regular employee transport, client pickups, and executive shuttles.",
      icon: <Briefcase size={36} />
    },
  ];
  
  const securityServices = [
    {
      title: "Personal Protection",
      description: "Discreet security professionals for personal and family protection.",
      icon: <Shield size={36} />
    },
    {
      title: "Event Security",
      description: "Comprehensive security services for private and corporate events.",
      icon: <Users size={36} />
    },
    {
      title: "Travel Security",
      description: "Security professionals to accompany you during domestic or international travel.",
      icon: <Map size={36} />
    },
    {
      title: "24/7 Support",
      description: "Round-the-clock security services available when you need them.",
      icon: <Headphones size={36} />
    },
  ];
  
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-black relative">
        <div className="container max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center">
            <p className="text-red-500 text-sm tracking-widest uppercase font-medium animate-fade-in">Luxury and Discretion</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-4 animate-fade-in" style={{ animationDelay: '100ms' }}>
              Our Premium Services
            </h1>
            <p className="text-gray-400 mt-6 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '200ms' }}>
              Experience the perfect blend of luxury, safety, and professionalism with our comprehensive range of transportation and security services.
            </p>
          </div>
        </div>
      </section>
      
      {/* Transportation Services */}
      <section ref={transportationRef} className="py-20 bg-haus-900 relative">
        <div className="container max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              animate={transportationControls}
              variants={fadeInLeftVariant}
              custom={0}
              className="space-y-6"
            >
              <p className="text-red-500 text-sm tracking-widest uppercase font-medium">Transportation Services</p>
              <h2 className="text-3xl md:text-4xl font-bold text-white">Elite Transportation for Discerning Clients</h2>
              <p className="text-gray-400 leading-relaxed">
                Our fleet of luxury vehicles and professional chauffeurs provide an unparalleled transportation experience. Whether you need a single ride or a recurring schedule, we offer flexibility to accommodate your needs.
              </p>
              <div className="space-y-4 pt-4">
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-red-500 mt-1 mr-3" />
                  <div>
                    <h4 className="text-white font-medium">Premium Fleet</h4>
                    <p className="text-gray-400 text-sm">Late-model luxury vehicles meticulously maintained for comfort and safety</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-red-500 mt-1 mr-3" />
                  <div>
                    <h4 className="text-white font-medium">Professional Chauffeurs</h4>
                    <p className="text-gray-400 text-sm">Experienced, discreet, and professionally trained to provide exceptional service</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-red-500 mt-1 mr-3" />
                  <div>
                    <h4 className="text-white font-medium">Flexible Scheduling</h4>
                    <p className="text-gray-400 text-sm">Book single rides or set up recurring daily, weekly, or monthly schedules</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-red-500 mt-1 mr-3" />
                  <div>
                    <h4 className="text-white font-medium">Customized Experience</h4>
                    <p className="text-gray-400 text-sm">Tailored service to meet your specific preferences and requirements</p>
                  </div>
                </div>
              </div>
              <div className="pt-4">
                <Button asChild className="bg-haus-burgundy hover:bg-haus-burgundy/90 text-white rounded-none luxury-transition">
                  <Link to="/booking">
                    Book Transportation <ChevronRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </motion.div>
            
            <motion.div
              initial="hidden"
              animate={transportationControls}
              variants={fadeInRightVariant}
              custom={0}
              className="grid grid-cols-1 sm:grid-cols-2 gap-6"
            >
              {transportationServices.map((service, index) => (
                <div key={index} className="glass-card p-6 flex flex-col h-full">
                  <div className="mb-4 text-red-500">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-white">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 text-sm">
                    {service.description}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Security Services */}
      <section ref={securityRef} className="py-20 bg-black relative">
        <div className="container max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              animate={securityControls}
              variants={fadeInLeftVariant}
              custom={0}
              className="order-2 md:order-1 grid grid-cols-1 sm:grid-cols-2 gap-6"
            >
              {securityServices.map((service, index) => (
                <div key={index} className="glass-card p-6 flex flex-col h-full">
                  <div className="mb-4 text-red-500">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-white">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 text-sm">
                    {service.description}
                  </p>
                </div>
              ))}
            </motion.div>
            
            <motion.div
              initial="hidden"
              animate={securityControls}
              variants={fadeInRightVariant}
              custom={0}
              className="order-1 md:order-2 space-y-6"
            >
              <p className="text-red-500 text-sm tracking-widest uppercase font-medium">Security Services</p>
              <h2 className="text-3xl md:text-4xl font-bold text-white">Professional Security by Veterans</h2>
              <p className="text-gray-400 leading-relaxed">
                Our security team, led by a Marine veteran, brings military-grade training and expertise to civilian security. We offer discreet protection services that prioritize your safety without compromising your lifestyle.
              </p>
              <div className="space-y-4 pt-4">
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-red-500 mt-1 mr-3" />
                  <div>
                    <h4 className="text-white font-medium">Veteran-Led Team</h4>
                    <p className="text-gray-400 text-sm">Security professionals with military and law enforcement backgrounds</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-red-500 mt-1 mr-3" />
                  <div>
                    <h4 className="text-white font-medium">Discreet Protection</h4>
                    <p className="text-gray-400 text-sm">Unobtrusive security that maintains your privacy and normal routine</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-red-500 mt-1 mr-3" />
                  <div>
                    <h4 className="text-white font-medium">Risk Assessment</h4>
                    <p className="text-gray-400 text-sm">Thorough evaluation of potential security concerns tailored to your situation</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-red-500 mt-1 mr-3" />
                  <div>
                    <h4 className="text-white font-medium">Customized Security Plans</h4>
                    <p className="text-gray-400 text-sm">Personalized security strategies based on your specific needs and lifestyle</p>
                  </div>
                </div>
              </div>
              <div className="pt-4">
                <Button asChild className="bg-haus-burgundy hover:bg-haus-burgundy/90 text-white rounded-none luxury-transition">
                  <Link to="/booking">
                    Book Security Services <ChevronRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Key Features */}
      <section ref={featuresRef} className="py-20 bg-haus-900 relative">
        <div className="container max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <p className="text-red-500 text-sm tracking-widest uppercase font-medium">Why Choose Us</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-2">The HAUS Difference</h2>
            <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
              Our commitment to excellence sets us apart in the industry, providing unmatched service quality for our clientele.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              initial="hidden"
              animate={featuresControls}
              variants={fadeInUpVariant}
              custom={0}
              className="glass-card p-8 flex flex-col items-center text-center"
            >
              <div className="mb-6 text-red-500">
                <Shield size={48} />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">Military Experience</h3>
              <p className="text-gray-400">
                Our team brings military discipline and training to every service, ensuring meticulous attention to detail and operational excellence.
              </p>
            </motion.div>
            
            <motion.div
              initial="hidden"
              animate={featuresControls}
              variants={fadeInUpVariant}
              custom={1}
              className="glass-card p-8 flex flex-col items-center text-center"
            >
              <div className="mb-6 text-red-500">
                <Clock size={48} />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">24/7 Availability</h3>
              <p className="text-gray-400">
                Round-the-clock service to accommodate your schedule, with responsive support available whenever you need assistance.
              </p>
            </motion.div>
            
            <motion.div
              initial="hidden"
              animate={featuresControls}
              variants={fadeInUpVariant}
              custom={2}
              className="glass-card p-8 flex flex-col items-center text-center"
            >
              <div className="mb-6 text-red-500">
                <Users size={48} />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">Discreet Professionals</h3>
              <p className="text-gray-400">
                Our team understands the importance of privacy and confidentiality, providing services with the utmost discretion.
              </p>
            </motion.div>
            
            <motion.div
              initial="hidden"
              animate={featuresControls}
              variants={fadeInUpVariant}
              custom={3}
              className="glass-card p-8 flex flex-col items-center text-center"
            >
              <div className="mb-6 text-red-500">
                <Car size={48} />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">Premium Fleet</h3>
              <p className="text-gray-400">
                Luxury vehicles maintained to the highest standards, offering comfort, safety, and sophistication for all transportation needs.
              </p>
            </motion.div>
            
            <motion.div
              initial="hidden"
              animate={featuresControls}
              variants={fadeInUpVariant}
              custom={4}
              className="glass-card p-8 flex flex-col items-center text-center"
            >
              <div className="mb-6 text-red-500">
                <Map size={48} />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">Global Network</h3>
              <p className="text-gray-400">
                Established connections worldwide to ensure seamless service delivery, regardless of your location or destination.
              </p>
            </motion.div>
            
            <motion.div
              initial="hidden"
              animate={featuresControls}
              variants={fadeInUpVariant}
              custom={5}
              className="glass-card p-8 flex flex-col items-center text-center"
            >
              <div className="mb-6 text-red-500">
                <Briefcase size={48} />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">Tailored Solutions</h3>
              <p className="text-gray-400">
                Customized services designed to meet your specific needs, preferences, and security requirements.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-black relative">
        <div className="container max-w-7xl mx-auto px-6 md:px-12">
          <div className="glass-card p-10 md:p-16 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Experience Unmatched Service?</h2>
            <p className="text-gray-300 max-w-3xl mx-auto mb-8">
              Contact us today to discuss your transportation and security needs. Our team of professionals is standing by to deliver an exceptional experience tailored to your requirements.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button 
                asChild
                className="bg-haus-burgundy hover:bg-haus-burgundy/90 text-white rounded-none px-8 py-6 luxury-transition"
              >
                <Link to="/booking">
                  Book Our Services
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
      </section>
      
      <Footer />
    </div>
  );
};

export default Services;
