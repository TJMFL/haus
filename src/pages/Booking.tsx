
import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Calendar, Clock, Users } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BookingForm from '@/components/BookingForm';

const Booking = () => {
  const [activeTab, setActiveTab] = useState('transportation');
  
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-black relative">
        <div className="container max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center">
            <p className="text-haus-gold text-sm tracking-widest uppercase font-medium animate-fade-in">Reserve Your Service</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-4 animate-fade-in" style={{ animationDelay: '100ms' }}>
              Book Your Experience
            </h1>
            <p className="text-gray-400 mt-6 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '200ms' }}>
              Schedule your luxury transportation, professional security, or combined services tailored to your specific needs.
            </p>
          </div>
        </div>
      </section>
      
      {/* Booking Section */}
      <section className="py-12 md:py-20 bg-haus-900 relative">
        <div className="container max-w-7xl mx-auto px-6 md:px-12">
          <div className="glass-card p-8 md:p-12 luxury-shadow">
            <Tabs defaultValue="transportation" className="space-y-8" onValueChange={setActiveTab}>
              <TabsList className="grid w-full grid-cols-3 bg-haus-800 h-auto p-1">
                <TabsTrigger 
                  value="transportation" 
                  className="py-3 data-[state=active]:text-white data-[state=active]:bg-haus-burgundy rounded-none"
                >
                  <Car className="mr-2 h-4 w-4 md:h-5 md:w-5" />
                  <span className="hidden md:inline">Transportation</span>
                </TabsTrigger>
                <TabsTrigger 
                  value="security" 
                  className="py-3 data-[state=active]:text-white data-[state=active]:bg-haus-burgundy rounded-none"
                >
                  <Shield className="mr-2 h-4 w-4 md:h-5 md:w-5" />
                  <span className="hidden md:inline">Security</span>
                </TabsTrigger>
                <TabsTrigger 
                  value="combined" 
                  className="py-3 data-[state=active]:text-white data-[state=active]:bg-haus-burgundy rounded-none"
                >
                  <Users className="mr-2 h-4 w-4 md:h-5 md:w-5" />
                  <span className="hidden md:inline">Combined Services</span>
                </TabsTrigger>
              </TabsList>
              
              <div className="mb-8">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  {activeTab === 'transportation' && 'Book Transportation Services'}
                  {activeTab === 'security' && 'Book Security Services'}
                  {activeTab === 'combined' && 'Book Combined Services'}
                </h2>
                <p className="text-gray-400">
                  {activeTab === 'transportation' && 
                    'Schedule luxury transportation with our professional chauffeurs. Available for single rides or recurring schedules.'}
                  {activeTab === 'security' && 
                    'Arrange professional security services for personal protection, events, or travel security.'}
                  {activeTab === 'combined' && 
                    'Book our comprehensive package combining transportation and security for a seamless experience.'}
                </p>
              </div>
              
              <TabsContent value="transportation" className="space-y-8 mt-0">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="glass-card p-6 flex flex-col items-center text-center">
                    <Calendar className="h-10 w-10 text-haus-gold mb-4" />
                    <h3 className="text-lg font-semibold text-white mb-2">Flexible Scheduling</h3>
                    <p className="text-gray-400 text-sm">
                      Book single rides or set up daily, weekly, or monthly schedules.
                    </p>
                  </div>
                  <div className="glass-card p-6 flex flex-col items-center text-center">
                    <Clock className="h-10 w-10 text-haus-gold mb-4" />
                    <h3 className="text-lg font-semibold text-white mb-2">24/7 Availability</h3>
                    <p className="text-gray-400 text-sm">
                      Our services are available around the clock to accommodate your schedule.
                    </p>
                  </div>
                  <div className="glass-card p-6 flex flex-col items-center text-center">
                    <Car className="h-10 w-10 text-haus-gold mb-4" />
                    <h3 className="text-lg font-semibold text-white mb-2">Premium Fleet</h3>
                    <p className="text-gray-400 text-sm">
                      Choose from our selection of luxury vehicles for your transportation needs.
                    </p>
                  </div>
                </div>
                
                <BookingForm />
              </TabsContent>
              
              <TabsContent value="security" className="space-y-8 mt-0">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="glass-card p-6 flex flex-col items-center text-center">
                    <Shield className="h-10 w-10 text-haus-gold mb-4" />
                    <h3 className="text-lg font-semibold text-white mb-2">Professional Protection</h3>
                    <p className="text-gray-400 text-sm">
                      Experienced security professionals with military and law enforcement backgrounds.
                    </p>
                  </div>
                  <div className="glass-card p-6 flex flex-col items-center text-center">
                    <Users className="h-10 w-10 text-haus-gold mb-4" />
                    <h3 className="text-lg font-semibold text-white mb-2">Event Security</h3>
                    <p className="text-gray-400 text-sm">
                      Comprehensive security solutions for private and corporate events.
                    </p>
                  </div>
                  <div className="glass-card p-6 flex flex-col items-center text-center">
                    <Clock className="h-10 w-10 text-haus-gold mb-4" />
                    <h3 className="text-lg font-semibold text-white mb-2">Flexible Duration</h3>
                    <p className="text-gray-400 text-sm">
                      Book security services for hours, days, weeks, or ongoing protection.
                    </p>
                  </div>
                </div>
                
                <BookingForm />
              </TabsContent>
              
              <TabsContent value="combined" className="space-y-8 mt-0">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="glass-card p-6 flex flex-col items-center text-center">
                    <Users className="h-10 w-10 text-haus-gold mb-4" />
                    <h3 className="text-lg font-semibold text-white mb-2">Seamless Integration</h3>
                    <p className="text-gray-400 text-sm">
                      Combined transportation and security services for a comprehensive experience.
                    </p>
                  </div>
                  <div className="glass-card p-6 flex flex-col items-center text-center">
                    <Shield className="h-10 w-10 text-haus-gold mb-4" />
                    <h3 className="text-lg font-semibold text-white mb-2">Enhanced Protection</h3>
                    <p className="text-gray-400 text-sm">
                      Security professionals travel with you for continuous protection.
                    </p>
                  </div>
                  <div className="glass-card p-6 flex flex-col items-center text-center">
                    <Calendar className="h-10 w-10 text-haus-gold mb-4" />
                    <h3 className="text-lg font-semibold text-white mb-2">Customized Plans</h3>
                    <p className="text-gray-400 text-sm">
                      Tailored service packages designed to meet your specific needs.
                    </p>
                  </div>
                </div>
                
                <BookingForm />
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-20 bg-black relative">
        <div className="container max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <p className="text-haus-gold text-sm tracking-widest uppercase font-medium">Questions</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-2">Frequently Asked Questions</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="glass-card p-6 md:p-8">
              <h3 className="text-xl font-semibold mb-3 text-white">How far in advance should I book?</h3>
              <p className="text-gray-400">
                While we accommodate last-minute requests when possible, we recommend booking at least 48 hours in advance for transportation and 72 hours for security services to ensure availability.
              </p>
            </div>
            
            <div className="glass-card p-6 md:p-8">
              <h3 className="text-xl font-semibold mb-3 text-white">What vehicles are in your fleet?</h3>
              <p className="text-gray-400">
                Our premium fleet includes luxury sedans, SUVs, and executive vans from brands like Mercedes-Benz, BMW, and Cadillac. All vehicles are late models maintained to the highest standards.
              </p>
            </div>
            
            <div className="glass-card p-6 md:p-8">
              <h3 className="text-xl font-semibold mb-3 text-white">Can I request a specific chauffeur or security personnel?</h3>
              <p className="text-gray-400">
                Yes, returning clients can request specific team members they've worked with previously, subject to availability. We strive to accommodate these requests whenever possible.
              </p>
            </div>
            
            <div className="glass-card p-6 md:p-8">
              <h3 className="text-xl font-semibold mb-3 text-white">How are your security professionals trained?</h3>
              <p className="text-gray-400">
                Our security team consists of professionals with military and law enforcement backgrounds. All undergo extensive vetting, regular training, and hold relevant certifications in security and protection.
              </p>
            </div>
            
            <div className="glass-card p-6 md:p-8">
              <h3 className="text-xl font-semibold mb-3 text-white">What is your cancellation policy?</h3>
              <p className="text-gray-400">
                For transportation, cancellations made 24+ hours in advance receive a full refund. For security services, we require 48+ hours notice. Detailed policy information is provided upon booking.
              </p>
            </div>
            
            <div className="glass-card p-6 md:p-8">
              <h3 className="text-xl font-semibold mb-3 text-white">Do you offer international services?</h3>
              <p className="text-gray-400">
                Yes, through our global network of partners, we can arrange transportation and security services internationally. Please contact us directly to discuss your international requirements.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Booking;
