import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Phone, MapPin, Send, MessageCircle, Clock, Sparkles, CheckCircle, Mail, Globe, ArrowUp } from 'lucide-react';
import { GYM_NAME, CONTACT_DETAILS } from '../data';

interface ContactProps {
  selectedPlan: string;
}

export default function Contact({ selectedPlan }: ContactProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    plan: selectedPlan || 'Standard Plan',
    message: ''
  });
  
  const [isSubmitSuccess, setIsSubmitSuccess] = useState(false);

  React.useEffect(() => {
    if (selectedPlan) {
      setFormData(prev => ({ ...prev, plan: selectedPlan }));
    }
  }, [selectedPlan]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      alert("Please fill out your Name and Phone Number.");
      return;
    }
    setIsSubmitSuccess(true);
  };

  // Construct Custom WhatsApp link dynamically from form parameters
  const getWhatsAppSubmitUrl = () => {
    const defaultText = `Hi Victory Guts Gym! I'm ${formData.name}. Phone: ${formData.phone}. I'm interested in the ${formData.plan}. ${formData.message ? `Note: ${formData.message}` : ''}`;
    return `https://wa.me/${CONTACT_DETAILS.whatsAppNum}?text=${encodeURIComponent(defaultText)}`;
  };

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const currentYear = new Date().getFullYear();

  return (
    <section id="contact" className="bg-[#111111] relative overflow-hidden">
      {/* Dynamic Ambient Background lights */}
      <div className="absolute top-0 right-1/2 w-80 h-80 rounded-full bg-primary-red/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/2 left-1/4 w-80 h-80 rounded-full bg-accent-orange/5 blur-[120px] pointer-events-none" />

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-neutral-900 border border-white/5 rounded-full text-xs font-semibold text-primary-red uppercase tracking-wider mb-4">
            <Sparkles className="h-3.5 w-3.5" />
            Connect Now
          </div>
          <h2 className="font-bebas text-4xl sm:text-5xl md:text-6xl tracking-wide text-white uppercase">
            VISIT THE <span className="text-primary-red text-glow-red">IRON TEMPLE</span> Today
          </h2>
          <p className="font-montserrat text-xs sm:text-sm text-stone-400 mt-4 leading-relaxed">
            Ready to rewrite your fitness narrative? Drop your details below, call us instantly, or walk right into Kothapeta, Vijayawada. Our doors are wide open!
          </p>
        </div>

        {/* Contact info/form columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20">
          
          {/* Left Column: Form booking */}
          <div className="lg:col-span-7">
            <div className="glass p-8 rounded-3xl border border-white/5 relative">
              
              <h3 className="font-bebas text-3xl text-white tracking-widest uppercase mb-2">
                RESERVE YOUR FREE TRIAL
              </h3>
              <p className="font-montserrat text-xs text-stone-400 mb-8 leading-relaxed">
                Submit details below to lock in a complimentary general trainer session pass this week.
              </p>

              <AnimatePresence mode="wait">
                {!isSubmitSuccess ? (
                  <motion.form 
                    key="form"
                    onSubmit={handleSubmit}
                    className="space-y-5"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    {/* Name input */}
                    <div>
                      <label className="block font-montserrat text-[10px] font-bold text-stone-300 uppercase tracking-widest mb-2">Your Full Name *</label>
                      <input 
                        type="text" 
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="John Doe"
                        className="w-full bg-[#1B1B1B]/70 border border-white/5 focus:border-primary-red focus:outline-none rounded-xl px-5 py-4 font-montserrat text-xs text-stone-200 transition"
                      />
                    </div>

                    {/* Phone input */}
                    <div>
                      <label className="block font-montserrat text-[10px] font-bold text-stone-300 uppercase tracking-widest mb-2">Mobile Phone Number *</label>
                      <input 
                        type="tel" 
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        placeholder="+91 9XXXX XXXXX"
                        className="w-full bg-[#1B1B1B]/70 border border-white/5 focus:border-primary-red focus:outline-none rounded-xl px-5 py-4 font-montserrat text-xs text-stone-200 transition"
                      />
                    </div>

                    {/* Plan selection */}
                    <div>
                      <label className="block font-montserrat text-[10px] font-bold text-stone-300 uppercase tracking-widest mb-2">Select Your Membership Pass</label>
                      <select 
                        name="plan"
                        value={formData.plan}
                        onChange={handleChange}
                        className="w-full bg-[#1B1B1B] border border-white/5 focus:border-primary-red focus:outline-none rounded-xl px-5 py-4 font-montserrat text-xs text-stone-200 transition"
                      >
                        <option value="Basic Plan">Basic Plan (₹1,200 / Month)</option>
                        <option value="Standard Plan">Standard Plan (₹2,500 / 3 Months)</option>
                        <option value="Premium Plan">Premium Plan (₹8,000 / Year)</option>
                      </select>
                    </div>

                    {/* Message Area */}
                    <div>
                      <label className="block font-montserrat text-[10px] font-bold text-stone-300 uppercase tracking-widest mb-2">Personal Goals or Comments (Optional)</label>
                      <textarea 
                        rows={4}
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Share any special goals, like weight loss or muscle building..."
                        className="w-full bg-[#1B1B1B]/70 border border-white/5 focus:border-primary-red focus:outline-none rounded-xl px-5 py-4 font-montserrat text-xs text-stone-200 transition resize-none"
                      />
                    </div>

                    {/* Action submit button */}
                    <button
                      type="submit"
                      className="w-full bg-gradient-to-r from-primary-red to-accent-orange hover:from-white hover:to-white text-white hover:text-black font-poppins font-bold text-xs uppercase tracking-widest py-4 rounded-xl flex items-center justify-center gap-2.5 shadow-lg shadow-primary-red/20 transition-all duration-300 hover:scale-102 cursor-pointer"
                    >
                      <Send className="h-4 w-4" />
                      Secure Trial Pass Now
                    </button>

                  </motion.form>
                ) : (
                  <motion.div 
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="py-10 text-center flex flex-col items-center justify-center"
                  >
                    <div className="bg-primary-red/10 border border-primary-red/20 rounded-full p-4 text-primary-red mb-6 animate-bounce">
                      <CheckCircle className="h-10 w-10" />
                    </div>
                    <h4 className="font-bebas text-3xl tracking-widest text-white uppercase">
                      TRIAL RESERVED SUCCESSFULLY!
                    </h4>
                    <p className="font-montserrat text-xs text-stone-400 mt-2 max-w-sm leading-relaxed mx-auto">
                      Congratulations, {formData.name}! Your free personal evaluation pass has been securely logged at Victory Guts Gym. Let us coordinate speed:
                    </p>

                    {/* Instant WhatsApp Action button for conversions */}
                    <div className="mt-8 flex flex-col gap-3 w-full max-w-sm">
                      <a
                        href={getWhatsAppSubmitUrl()}
                        target="_blank"
                        rel="noreferrer"
                        className="w-full bg-[#25D366] hover:bg-white text-white hover:text-stone-900 border border-transparent font-poppins font-bold text-xs tracking-widest uppercase py-4 rounded-xl flex items-center justify-center gap-2.5 shadow-lg transition-all duration-300 cursor-pointer hover:scale-103"
                      >
                        <MessageCircle className="h-4.5 w-4.5" />
                        Send Instantly over WhatsApp
                      </a>

                      <button
                        onClick={() => setIsSubmitSuccess(false)}
                        className="w-full bg-neutral-900 border border-white/5 hover:border-white/20 text-stone-400 hover:text-white font-poppins text-xs uppercase tracking-widest py-3 rounded-xl transition"
                      >
                        Back to Form
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

            </div>
          </div>

          {/* Right Column: Physical Location details & Maps */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-8">
            <div className="glass p-8 rounded-3xl border border-white/5 space-y-7">
              <h3 className="font-bebas text-3xl text-white tracking-widest uppercase">
                CONTACT DIRECTORY
              </h3>

              {/* Click-to-calls */}
              <div className="space-y-5">
                
                {/* Phone Numbers split maps */}
                <div className="flex gap-4 items-start">
                  <div className="p-3 bg-neutral-950 rounded-xl border border-white/5 text-primary-red mt-1">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="font-montserrat text-[10px] text-stone-500 uppercase tracking-widest block font-bold">Call Trainer Desks</span>
                    <div className="flex flex-col gap-1.5 mt-1.5">
                      {CONTACT_DETAILS.phones.map((phone) => (
                        <a 
                          key={phone}
                          href={`tel:${phone}`}
                          className="font-bebas text-2xl tracking-wider text-white hover:text-primary-red transition"
                        >
                          {phone}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Gym physical address */}
                <div className="flex gap-4 items-start">
                  <div className="p-3 bg-neutral-950 rounded-xl border border-white/5 text-accent-orange mt-1">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="font-montserrat text-[10px] text-stone-500 uppercase tracking-widest block font-bold font-montserrat">Gym Location Address</span>
                    <p className="font-montserrat text-xs text-stone-300 mt-1.5 leading-relaxed">
                      {CONTACT_DETAILS.address}
                    </p>
                  </div>
                </div>

                {/* Operations Timings */}
                <div className="flex gap-4 items-start">
                  <div className="p-3 bg-neutral-950 rounded-xl border border-white/5 text-yellow-400 mt-1">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="font-montserrat text-[10px] text-stone-500 uppercase tracking-widest block font-bold font-montserrat">Operational Hours</span>
                    <p className="font-montserrat text-xs text-stone-300 mt-1.5 leading-relaxed">
                      Monday to Saturday: <br />
                      <span className="text-white font-semibold">6:00 AM - 10:00 PM</span><br />
                      Sunday: <span className="text-primary-red font-semibold">Closed</span>
                    </p>
                  </div>
                </div>

              </div>
            </div>

            {/* Google map iframe box */}
            <div className="rounded-3xl overflow-hidden border border-white/5 shadow-2xl relative bg-neutral-900 group aspect-[4/3] flex-1">
              <iframe 
                src={CONTACT_DETAILS.mapsEmbedUrl}
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={false} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title={`${GYM_NAME} location in विजयवाड़ा`}
                className="grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 duration-500"
              />
            </div>
          </div>

        </div>

        {/* Footer Area */}
        <hr className="border-white/5 my-12" />

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 text-center md:text-left justify-between items-start">
          {/* Footer Logo brand */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center justify-center md:justify-start gap-2">
              <div className="bg-gradient-to-r from-primary-red to-accent-orange p-2 rounded-lg text-white">
                <span className="text-xl">💪</span>
              </div>
              <span className="font-bebas text-2xl tracking-wider uppercase text-white">
                VICTORY<span className="text-primary-red">GUTS</span>
              </span>
            </div>
            <p className="font-montserrat text-xs text-stone-500 leading-relaxed max-w-sm">
              Vijayawada's elite iron sanctuary dedicated to premium compound powerlifting coaching, targeted weightloss plans, and sports nutrition template guides. Transform your limits today.
            </p>
          </div>

          {/* Quick links block */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-bebas text-lg tracking-wider text-white uppercase">Quick Exploration</h4>
            <ul className="space-y-1.5 font-montserrat text-xs text-stone-400">
              <li><a href="#home" className="hover:text-primary-red transition">Home Page</a></li>
              <li><a href="#about" className="hover:text-primary-red transition">Our Philosophy</a></li>
              <li><a href="#programs" className="hover:text-primary-red transition">Coaching Blueprints</a></li>
              <li><a href="#trainers" className="hover:text-primary-red transition">Meet Mentors</a></li>
              <li><a href="#gallery" className="hover:text-primary-red transition">Image Sanctuary</a></li>
            </ul>
          </div>

          {/* Social connections */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="font-bebas text-lg tracking-wider text-white uppercase">Online Sanctuary Networks</h4>
            <p className="font-montserrat text-xs text-stone-500 mb-2">
              Stay inspired by daily local member transformation logs. Follow our official accounts.
            </p>
            <div className="flex justify-center md:justify-start gap-3.5">
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="p-3 bg-neutral-900 border border-white/5 hover:bg-primary-red rounded-xl text-stone-400 hover:text-white transition" aria-label="Follow us on Instagram">
                <Globe className="h-4 w-4" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="p-3 bg-neutral-900 border border-white/5 hover:bg-primary-red rounded-xl text-stone-400 hover:text-white transition" aria-label="Like us on Facebook">
                <Mail className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Legal copyright notice footer row */}
        <div className="border-t border-white/5 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between text-center gap-4 text-stone-600 font-montserrat text-[10px] font-medium tracking-wider">
          <p>© {currentYear} {GYM_NAME}. Built with professional precision. All Rights Reserved.</p>
          
          <button 
            onClick={handleScrollToTop}
            className="flex items-center gap-1 bg-neutral-900 hover:bg-primary-red border border-white/5 px-3 py-1.5 rounded-lg text-stone-400 hover:text-white transition cursor-pointer font-bold"
          >
            <ArrowUp className="h-3 h-3" />
            BACK TO TOP
          </button>
        </div>

      </div>
    </section>
  );
}
