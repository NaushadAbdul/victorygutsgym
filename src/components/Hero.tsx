import React from 'react';
import { motion } from 'motion/react';
import { Phone, ArrowRight, ShieldCheck, Star, Award, Sparkles, Heart } from 'lucide-react';
import { GYM_NAME, CONTACT_DETAILS, STATISTICS } from '../data';

export default function Hero() {

  const scrollToSection = (e: React.MouseEvent<HTMLButtonElement>, id: string) => {
    e.preventDefault();
    const element = document.querySelector(id);
    if (element) {
      const topOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-secondary-black"
    >
      {/* Background Cinematic Image with Overlays */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1920&auto=format&fit=crop" 
          alt="Athlete posing in Victory Guts Gym Vijayawada" 
          className="w-full h-full object-cover object-center scale-105 opacity-40 brightness-75 transition-all duration-[6000ms] ease-out hover:scale-100"
          referrerPolicy="no-referrer"
        />
        {/* Gradients to blend image cleanly with dark charcoal design */}
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-dark-charcoal/80 to-[#111111]/95" />
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-dark-charcoal to-transparent" />
        <div className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-dark-charcoal/80 to-transparent" />
      </div>

      {/* Dynamic Animated Ambient Lights */}
      <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-primary-red/10 blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/2 w-80 h-80 rounded-full bg-accent-orange/10 blur-[130px] pointer-events-none" />

      {/* Hero Content Grid */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16 w-full flex flex-col justify-center min-h-screen">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Info Columns */}
          <div className="lg:col-span-8 flex flex-col items-start text-left">
            
            {/* Trust badge / Rating */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-3 mb-6 bg-white/[0.02] border border-white/5 py-1.5 px-4 rounded-full backdrop-blur-md"
            >
              <span className="flex text-[#FFD700] text-sm select-none">★★★★★</span>
              <span className="font-montserrat text-xs font-bold uppercase tracking-widest text-white/70">4.6 Rating • 33 Google Reviews</span>
            </motion.div>

            {/* Main Bold Heading */}
            <motion.h1 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-bebas text-7xl sm:text-8xl md:text-[100px] lg:text-[110px] leading-[0.9] tracking-tighter uppercase italic font-black text-white"
            >
              BUILD YOUR <br />
              <span className="bg-gradient-to-r from-[#FF2D2D] to-[#FF7A00] bg-clip-text text-transparent drop-shadow-lg text-glow-red">
                BEST BODY
              </span>
            </motion.h1>

            {/* Supporting Subheadline */}
            <motion.p 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="font-montserrat text-lg sm:text-xl text-stone-300 mt-6 max-w-2xl font-light leading-relaxed"
            >
              Transform your strength, confidence, and lifestyle with world-class trainers and elite equipment at Vijayawada's premium fitness hub, <span className="text-white font-semibold">Victory Guts Gym</span>.
            </motion.p>

            {/* Quick reviews & credentials badge */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap items-center gap-5 mt-6 py-3 px-4 rounded-xl bg-white/[0.02] border border-white/5 backdrop-blur-md"
            >
              <div className="flex items-center gap-2">
                <span className="font-bebas text-lg tracking-wider text-white">ESTD. 2024</span>
              </div>
              <div className="hidden sm:block h-4 w-px bg-white/10" />
              <div className="flex items-center gap-2">
                <span className="text-xl">💪</span>
                <span className="font-montserrat text-xs text-stone-300 font-semibold tracking-wider uppercase">Equipped for Champions</span>
              </div>
            </motion.div>

            {/* Call To Actions */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 mt-10 w-full sm:w-auto"
            >
              <button
                onClick={(e) => scrollToSection(e, '#pricing')}
                className="group relative px-10 py-5 bg-[#FF2D2D] text-white font-poppins font-bold rounded shadow-[0_0_30px_rgba(255,45,45,0.4)] hover:scale-105 duration-300 overflow-hidden cursor-pointer tracking-widest uppercase text-base"
              >
                Start Training
              </button>

              <a
                href={`tel:${CONTACT_DETAILS.phones[0]}`}
                className="group px-10 py-5 border border-white/20 bg-white/5 backdrop-blur-sm text-white font-poppins font-bold rounded uppercase tracking-widest text-base flex items-center justify-center gap-3 transition-all duration-300 hover:bg-white/10"
              >
                <Phone className="h-4 w-4 text-primary-red group-hover:animate-bounce" />
                Call Now
              </a>
            </motion.div>

          </div>

          {/* Dynamic Statistics Block on Right Side */}
          <div className="lg:col-span-4 block">
            <div className="grid grid-cols-2 gap-4">
              {STATISTICS.map((stat, i) => (
                <motion.div
                  key={stat.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                  className="p-5 rounded-2xl bg-[#1B1B1B]/40 border border-white/5 backdrop-blur-md flex flex-col justify-center items-center text-center group hover:border-primary-red/30 transition-all duration-300 hover:scale-105"
                >
                  <span className="font-bebas text-4xl md:text-5xl text-gradient-to-r from-white to-neutral-200 text-glow-red text-white flex items-center">
                    {stat.value}
                  </span>
                  <span className="font-montserrat text-[10px] md:text-xs text-stone-400 font-bold uppercase tracking-wider mt-2 group-hover:text-primary-red transition-colors duration-300 leading-tight">
                    {stat.label}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Highlight Mini Feature Box */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="mt-4 p-5 rounded-2xl bg-gradient-to-br from-[#1B1B1B]/70 to-[#0A0A0A]/70 border border-white/5 backdrop-blur-md flex items-start gap-4 hover:border-primary-red/20 transition-all duration-300"
            >
              <div className="bg-primary-red/10 p-2.5 rounded-xl text-primary-red">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <div>
                <h4 className="font-bebas text-lg tracking-wider text-white">SAFETY & HYGIENE GUARANTEE</h4>
                <p className="font-montserrat text-xs text-stone-400 mt-1 leading-relaxed">
                  Fully sanitized equipment, high ventilation, and clean locker utilities for Vijayawada fitness enthusiasts.
                </p>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
      
      {/* Scroll Down mouse decoration */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none opacity-50 hidden md:flex">
        <span className="font-montserrat text-[9px] uppercase tracking-[0.3em] text-stone-400">Scroll Down</span>
        <div className="w-[18px] h-[30px] rounded-full border-2 border-stone-400 flex items-start justify-center p-[4px] relative">
          <motion.div 
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-[3px] h-[6px] rounded-full bg-white"
          />
        </div>
      </div>
    </section>
  );
}
