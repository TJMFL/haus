import React, { useState, useRef, useEffect } from 'react';
import { generateRiskAssessment } from '../services/groqService';
import { motion, useInView, useAnimation } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { ChevronRight, Shield } from 'lucide-react';
import Navbar from './Navbar';

const RiskForm: React.FC = () => {
  const [whoYouAre, setWhoYouAre] = useState('Professional');
  const [whatYouNeed, setWhatYouNeed] = useState('Executive Transportation');
  const [otherSpecifics, setOtherSpecifics] = useState('');
  const [briefDescription, setBriefDescription] = useState('');
  const [priorities, setPriorities] = useState<string[]>([]);
  const [report, setReport] = useState<string | null>(null);
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [logs, setLogs] = useState<string[]>([]);

  const formRef = useRef<HTMLDivElement>(null);
  const reportRef = useRef<HTMLDivElement>(null);
  const isFormInView = useInView(formRef, { once: true, amount: 0.2 });
  const isReportInView = useInView(reportRef, { once: true, amount: 0.2 });
  const formControls = useAnimation();
  const reportControls = useAnimation();

  useEffect(() => {
    if (isFormInView) formControls.start('visible');
  }, [isFormInView, formControls]);

  useEffect(() => {
    if (isReportInView && report) reportControls.start('visible');
  }, [isReportInView, report]);

  useEffect(() => {
    console.log('Report state updated:', report ? report.substring(0, 100) + '...' : 'null');
    if (report) reportControls.start('visible');
  }, [report]);

  const fadeInUpVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: custom * 0.1, duration: 0.6, ease: 'easeOut' },
    }),
  };

  const addLog = (message: string) => {
    console.log(`Log: ${message}`);
    setLogs((prev) => [...prev, `${new Date().toLocaleTimeString()} - ${message}`]);
  };

  const handlePriorityChange = (priority: string) => {
    setPriorities((prev) =>
      prev.includes(priority) ? prev.filter((p) => p !== priority) : [...prev, priority]
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setReport(null);
    setLogs([]);

    try {
      addLog('HAUS systems engaged...');
      addLog('Processing your mission profile...');
      const specifics = whatYouNeed === 'Other' ? otherSpecifics : '';
      const reportText = await generateRiskAssessment({
        whoYouAre,
        whatYouNeed,
        briefSpecifics: specifics,
        briefDescription,
        priority: priorities.join(', '),
      });
      if (!reportText || reportText.includes('Error')) {
        throw new Error('HAUS AI failed to generate plan');
      }
      addLog('Plan deployed.');
      setReport(reportText);
    } catch (error: any) {
      addLog(`Error: ${error.message || 'Processing failed'}`);
      setReport(`Error: ${error.message || 'Failed to generate plan'}`);
    } finally {
      setLoading(false);
    }
  };

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Email submitted:', email);
    setEmail('');
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <section className="pt-44 pb-16 bg-black">
        <div className="container max-w-7xl mx-auto px-4 md:px-12 text-center">
          <p className="text-haus-burgundy text-sm tracking-widest uppercase font-medium animate-fade-in">
            HAUS Elite Protection
          </p>
          <h1 className="text-3xl md:text-5xl font-bold text-gold mt-4 animate-fade-in" style={{ animationDelay: '100ms' }}>
            Your HAUS Plan
          </h1>
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '200ms' }}>
            Experience HAUS’s unmatched precision and luxury—tailored to your world, delivered with cutting-edge tech.
          </p>
        </div>
      </section>

      <section ref={formRef} className="py-12 md:py-20 bg-black">
        <div className="container max-w-7xl mx-auto px-4 md:px-12 space-y-6 md:space-y-0 md:flex md:space-x-6">
          <motion.div
            initial="hidden"
            animate={formControls}
            variants={fadeInUpVariant}
            custom={0}
            className="w-full md:w-1/4 bg-black/50 border border-haus-burgundy/50 p-4 rounded-md text-gold font-mono text-sm max-h-[400px] md:max-h-[600px] overflow-y-auto"
          >
            <h3 className="text-lg font-semibold text-haus-burgundy mb-2">HAUS Intel Feed</h3>
            {logs.map((log, index) => (
              <p key={index} className="animate-fade-in">{log}</p>
            ))}
          </motion.div>

          <motion.div
            initial="hidden"
            animate={formControls}
            variants={fadeInUpVariant}
            custom={1}
            className="w-full md:w-3/4 bg-black/70 border border-gold/50 p-6 md:p-8 rounded-md shadow-lg"
          >
            <div className="flex items-center mb-6">
              <Shield className="h-8 w-8 text-haus-burgundy mr-3" />
              <h2 className="text-2xl md:text-3xl font-bold text-gold">Define Your Mission</h2>
            </div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="whoYouAre" className="text-gold font-medium">Who You Are</Label>
                <select
                  id="whoYouAre"
                  value={whoYouAre}
                  onChange={(e) => setWhoYouAre(e.target.value)}
                  className="w-full bg-black/50 border-gold/50 text-gold p-2 rounded hover:border-haus-burgundy transition"
                >
                  <option value="Professional">Professional</option>
                  <option value="Family">Family</option>
                  <option value="VIP/High-Profile">VIP/High-Profile</option>
                  <option value="Diplomat/Official">Diplomat/Official</option>
                </select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="whatYouNeed" className="text-gold font-medium">What You Need</Label>
                <select
                  id="whatYouNeed"
                  value={whatYouNeed}
                  onChange={(e) => setWhatYouNeed(e.target.value)}
                  className="w-full bg-black/50 border-gold/50 text-gold p-2 rounded hover:border-haus-burgundy transition"
                >
                  <option value="Executive Transportation">Executive Transportation</option>
                  <option value="Airport Transfers">Airport Transfers</option>
                  <option value="Event Security">Event Security</option>
                  <option value="Personal Protection">Personal Protection</option>
                  <option value="Special Events">Special Events</option>
                  <option value="Corporate Services">Corporate Services</option>
                  <option value="Other">Other</option>
                </select>
                {whatYouNeed === 'Other' && (
                  <Input
                    id="otherSpecifics"
                    value={otherSpecifics}
                    onChange={(e) => setOtherSpecifics(e.target.value)}
                    placeholder="> Brief Specifics (e.g., Secure jet arrival)"
                    className="mt-2 bg-black/50 border-gold/50 text-gold placeholder-gray-500 p-2 rounded animate-fade-in"
                  />
                )}
              </div>
              <div className="space-y-2">
                <Label htmlFor="briefDescription" className="text-gold font-medium">Brief Description</Label>
                <Input
                  id="briefDescription"
                  value={briefDescription}
                  onChange={(e) => setBriefDescription(e.target.value)}
                  placeholder="e.g., Pickup from LAX, talk show, red carpet"
                  className="w-full bg-black/50 border-gold/50 text-gold placeholder-gray-500 p-2 rounded hover:border-haus-burgundy transition"
                />
              </div>
              <div className="space-y-2">
                <Label className="text-gold font-medium">Priority (Check All That Apply)</Label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {['Luxury', 'Safety', 'Privacy', 'Speed'].map((option) => (
                    <label key={option} className="flex items-center space-x-2 text-gold">
                      <input
                        type="checkbox"
                        checked={priorities.includes(option)}
                        onChange={() => handlePriorityChange(option)}
                        className="accent-haus-burgundy"
                      />
                      <span>{option}</span>
                    </label>
                  ))}
                </div>
              </div>
              <Button
                type="submit"
                disabled={loading}
                className="w-full bg-haus-burgundy hover:bg-haus-burgundy/90 text-gold border border-gold/50 rounded-none transition-all duration-300 hover:shadow-[0_0_10px_#FFD700]"
              >
                {loading ? 'Generating...' : 'Generate Plan'}
                {!loading && <ChevronRight className="ml-2 h-4 w-4" />}
              </Button>
            </form>
          </motion.div>
        </div>

        {report && (
          <motion.div
            ref={reportRef}
            initial="hidden"
            animate={reportControls}
            variants={fadeInUpVariant}
            custom={2}
            className="container max-w-7xl mx-auto px-4 md:px-12 mt-8 md:mt-12"
          >
            <div className="bg-black/80 backdrop-blur-md border border-gold/20 p-6 md:p-8 rounded-lg shadow-[0_0_15px_rgba(255,215,0,0.2)]">
              <h2 className="text-xl md:text-2xl font-semibold text-haus-burgundy mb-4 tracking-wider">HAUS Mission Brief</h2>
              <div className="text-gold text-sm font-mono leading-relaxed">
                {report.split('\n\n').map((section, index) => (
                  <div key={index} className="mb-6 last:mb-0">
                    {section.split('\n').map((line, i) => (
                      <p key={i} className={line.startsWith('**') ? 'text-base md:text-lg font-bold text-white mb-2' : 'ml-2'}>
                        {line.replace(/\*\*/g, '')}
                      </p>
                    ))}
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-6 flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-3">
              <Shield className="h-6 w-6 text-haus-burgundy" />
              <p className="text-gold text-base md:text-lg font-bold tracking-wide shadow-[0_0_10px_rgba(128,0,32,0.3)] text-center">
                Limited Offer: Up to 50% Off Your Elite HAUS Plan
              </p>
            </div>
            <form onSubmit={handleEmailSubmit} className="mt-4 flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
              <Input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="> Secure Channel: Enter Email"
                className="bg-black/50 border-gold/50 text-gold placeholder-gray-500 p-2 rounded flex-1"
              />
              <Button
                type="submit"
                className="bg-haus-burgundy hover:bg-haus-burgundy/90 text-gold border border-gold/50 rounded-none transition-all duration-300 hover:shadow-[0_0_10px_#FFD700]"
              >
                Transmit
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </form>
          </motion.div>
        )}
      </section>
    </div>
  );
};

export default RiskForm;
