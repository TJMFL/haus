import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';

const Contact = () => {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-black relative">
        <div className="container max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center">
            <p className="text-red-500 text-sm tracking-widest uppercase font-medium animate-fade-in">Get In Touch</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-4 animate-fade-in" style={{ animationDelay: '100ms' }}>
              Contact Us
            </h1>
            <p className="text-gray-400 mt-6 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '200ms' }}>
              Reach out to discuss your transportation and security needs. Our team is available 24/7 to assist you.
            </p>
          </div>
        </div>
      </section>
      
      {/* Contact Section */}
      <section className="py-12 md:py-20 bg-black relative">
        <div className="container max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-12">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">How to Reach Us</h2>
                <p className="text-gray-400">
                  Our dedicated team is ready to assist you with any inquiries regarding our services. Contact us through any of the following methods, and we'll respond promptly.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="glass-card p-6 flex flex-col shadow-red-500/50">
                  <div className="text-red-500 mb-4">
                    <Phone size={28} />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-white">Phone</h3>
                  <a href="tel:+19546614434" className="text-gray-300 hover:text-white transition-colors">+1 (954) 661-4434</a>
                  <p className="text-gray-500 text-sm mt-2">Available 24/7</p>
                </div>
                
                <div className="glass-card p-6 flex flex-col shadow-red-500/50">
                  <div className="text-red-500 mb-4">
                    <Mail size={28} />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-white">Email</h3>
                  <a href="mailto:info@haustransport.com" className="text-gray-300 hover:text-white transition-colors break-all">info@haustransport.com</a>
                  <p className="text-gray-500 text-sm mt-2">We respond within 2 hours</p>
                </div>
                
                <div className="glass-card p-6 flex flex-col shadow-red-500/50">
                  <div className="text-red-500 mb-4">
                    <MapPin size={28} />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-white">Office</h3>
                  <p className="text-gray-300">
                    1234 Protection Dr<br />
                    Suite 500<br />
                    Chicago, IL 60654
                  </p>
                </div>
                
                <div className="glass-card p-6 flex flex-col shadow-red-500/50">
                  <div className="text-red-500 mb-4">
                    <Clock size={28} />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-white">Hours</h3>
                  <p className="text-gray-300">
                    Monday - Friday: 8am - 8pm<br />
                    Saturday: 9am - 5pm<br />
                    Sunday: By appointment
                  </p>
                  <p className="text-gray-500 text-sm mt-2">24/7 phone support available</p>
                </div>
              </div>
              
              <div className="glass-card p-6 md:p-8 shadow-red-500/50">
                <h3 className="text-xl font-semibold mb-4 text-white">Emergency Contact</h3>
                <p className="text-gray-400 mb-4">
                  For urgent matters requiring immediate attention, please use our dedicated emergency line:
                </p>
                <a href="tel:+18005551234" className="text-red-500 text-xl font-semibold hover:underline">+1 (800) 555-1234</a>
                <p className="text-gray-500 text-sm mt-2">Available 24/7 for clients with active services</p>
              </div>
            </div>
            
            <div className="glass-card p-8 md:p-10 luxury-shadow shadow-red-500/50">
              <h2 className="text-2xl font-bold text-white mb-6">Send Us a Message</h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
      
      {/* Map Section */}
      <section className="py-12 bg-black relative">
        <div className="container max-w-7xl mx-auto px-6 md:px-12">
          <div className="glass-card overflow-hidden h-[400px] md:h-[500px] luxury-shadow shadow-red-500/50">
            {/* TODO: Update map embed to new address: 1234 Protection Dr, Suite 500, Chicago, IL 60654 */}
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52893.33931073433!2d-118.42289106170656!3d34.09021588182043!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2bc04d6d147ab%3A0xd6c7c379fd081ed1!2sBeverly%20Hills%2C%20CA%2090210!5e0!3m2!1sen!2sus!4v1621436591975!5m2!1sen!2sus" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="HAUS Office Location"
            ></iframe>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Contact;
