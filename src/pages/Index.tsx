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
  // ... (previous code remains the same)

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
                    src="/path/to/new/image.jpg" 
                    alt="Rich Cartolano, Founder of Haus Transportation and Security" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Rest of the code remains the same */}
    </div>
  );
};

export default Index;
