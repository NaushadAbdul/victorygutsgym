import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageSquareCode, ArrowUp, PhoneCall, Sparkles } from 'lucide-react';
import { CONTACT_DETAILS } from '../data';

export default function ExtraWidgets() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const defaultMsg = encodeURIComponent(CONTACT_DETAILS.whatsAppText);
  const whatsAppUrl = `https://wa.me/${CONTACT_DETAILS.whatsAppNum}?text=${defaultMsg}`;

  return (
    <>
      {/* Persistent Floating Buttons (Bottom Right Side) */}
      <div className="fixed bottom-24 right-5 sm:right-8 z-40 flex flex-col gap-4.5">
        <AnimatePresence>
          {isVisible && (
            <>
              {/* Floating WhatsApp Button */}
              <motion.a
                key="whatsapp-btn"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                href={whatsAppUrl}
                target="_blank"
                rel="noreferrer"
                className="p-4 bg-[#25D366] text-white rounded-full shadow-2xl hover:bg-white hover:text-[#25D366] transition-all duration-300 flex items-center justify-center border border-transparent hover:border-[#25D366] group relative cursor-pointer"
                aria-label="Contact Victory Guts Gym on WhatsApp"
              >
                <span className="absolute right-14 bg-stone-900 border border-white/5 text-white text-[10px] uppercase font-bold tracking-widest py-1 px-3.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
                  WhatsApp Chat
                </span>
                <MessageSquareCode className="h-6 w-6 stroke-[1.5] group-hover:rotate-12 transition-transform" />
              </motion.a>

              {/* Scroll To Top Button */}
              <motion.button
                key="scroll-top"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                onClick={scrollToTop}
                className="p-4 bg-neutral-900 text-stone-400 border border-white/10 hover:border-primary-red hover:text-white rounded-full shadow-2xl transition-all duration-300 flex items-center justify-center group relative cursor-pointer"
                aria-label="Scroll to top of the page"
              >
                <span className="absolute right-14 bg-stone-900 border border-white/5 text-white text-[10px] uppercase font-bold tracking-widest py-1 px-3.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
                  Top of page
                </span>
                <ArrowUp className="h-6 w-6 stroke-[1.5] group-hover:-translate-y-0.5 transition-transform" />
              </motion.button>
            </>
          )}
        </AnimatePresence>
      </div>

      {/* Sticky Call Now CTA bottom bar on devices (Visible only on mobile screen widths) */}
      <div className="fixed bottom-0 left-0 w-full z-45 bg-[#0A0A0A]/95 border-t border-white/10 px-4 py-3.5 md:hidden flex gap-3 text-center shadow-2xl backdrop-blur-md">
        
        <a
          href={`tel:${CONTACT_DETAILS.phones[0]}`}
          className="flex-1 py-3 bg-[#111] border border-white/10 text-white font-poppins font-bold text-xs uppercase tracking-widest rounded-xl flex items-center justify-center gap-2"
        >
          <PhoneCall className="h-4 w-4 text-primary-red" />
          Call Us
        </a>

        <a
          href={whatsAppUrl}
          target="_blank"
          rel="noreferrer"
          className="flex-1 py-3 bg-gradient-to-r from-primary-red to-accent-orange text-white font-poppins font-bold text-xs uppercase tracking-widest rounded-xl flex items-center justify-center gap-1.5 shadow-lg shadow-primary-red/10"
        >
          <Sparkles className="h-3.5 w-3.5 animate-pulse" />
          Join GUTS Gym
        </a>

      </div>
    </>
  );
}
