import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star, Sparkles, Quote, ChevronLeft, ChevronRight, Share2 } from 'lucide-react';
import { TESTIMONIALS_DATA } from '../data';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % TESTIMONIALS_DATA.length);
    }, 5500); // auto-slide every 5.5s
    return () => clearInterval(timer);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? TESTIMONIALS_DATA.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % TESTIMONIALS_DATA.length);
  };

  const currentReview = TESTIMONIALS_DATA[currentIndex];

  return (
    <section id="reviews" className="py-24 bg-secondary-black relative overflow-hidden">
      {/* Decorative Radial Lights */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-primary-red/5 blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-neutral-900 border border-white/5 rounded-full text-xs font-semibold text-primary-red uppercase tracking-wider mb-4">
            <Sparkles className="h-3.5 w-3.5" />
            Member Reviews
          </div>
          <h2 className="font-bebas text-4xl sm:text-5xl md:text-6xl tracking-wide text-white uppercase">
            WHAT OUR <span className="text-primary-red text-glow-red">COMMUNITY IS SAYING</span>
          </h2>

          {/* Golden credential rating box */}
          <div className="inline-flex flex-wrap items-center justify-center gap-4 mt-6 py-2.5 px-6 rounded-2xl bg-[#1B1B1B]/60 border border-white/5">
            <div className="flex items-center gap-1.5 font-bebas text-2xl text-white tracking-widest leading-none">
              <span className="text-[#FFD700] text-glow-orange">4.6</span> 
              <span className="text-stone-400 font-sans text-sm">/ 5</span>
              <div className="flex text-yellow-500 ml-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-yellow-500 text-yellow-500 stroke-none" />
                ))}
              </div>
            </div>
            <div className="h-4 w-px bg-white/10" />
            <span className="font-montserrat text-xs text-stone-300 font-bold uppercase tracking-widest">
              💪 33+ Verified Google Gym Reviews
            </span>
          </div>
        </div>

        {/* Sliding Testimonial block (Glassmorphic Box) */}
        <div className="relative">
          
          <AnimatePresence mode="wait">
            <motion.div
              key={currentReview.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4 }}
              className="glass p-8 sm:p-12 rounded-3xl border border-white/5 shadow-2xl relative select-none"
            >
              {/* Decorative quotation background */}
              <Quote className="absolute top-8 right-8 h-20 w-20 text-white/[0.02] stroke-[1] hidden sm:block" />

              <div className="flex flex-col items-center sm:items-start text-center sm:text-left gap-6">
                
                {/* Ratings */}
                <div className="flex text-[#FFD700]">
                  {[...Array(currentReview.rating)].map((_, i) => (
                    <Star key={i} className="h-4.5 w-4.5 fill-current stroke-none" />
                  ))}
                </div>

                {/* Testimonial body */}
                <p className="font-montserrat text-sm sm:text-base text-stone-200 leading-relaxed font-light">
                  "{currentReview.review}"
                </p>

                {/* Profile details split */}
                <div className="flex flex-col sm:flex-row items-center gap-4 mt-4 w-full">
                  <img
                    src={currentReview.avatarUrl}
                    alt={currentReview.name}
                    className="w-14 h-14 rounded-full border-2 border-primary-red object-cover shadow-lg"
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <h4 className="font-bebas text-xl text-white tracking-widest leading-tight">
                      {currentReview.name}
                    </h4>
                    <p className="font-montserrat text-xs text-stone-400 font-medium tracking-wide mt-1">
                      {currentReview.role}
                    </p>
                  </div>
                </div>

              </div>

            </motion.div>
          </AnimatePresence>

          {/* Navigation selectors (Arrows floating) */}
          <div className="flex justify-center sm:justify-end items-center gap-3 mt-8">
            <button
              onClick={handlePrev}
              className="p-3 rounded-full bg-neutral-900 border border-white/5 hover:bg-primary-red text-stone-400 hover:text-white transition-all duration-300 font-bold focus:outline-none cursor-pointer"
              aria-label="Previous review"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={handleNext}
              className="p-3 rounded-full bg-neutral-900 border border-white/5 hover:bg-primary-red text-stone-400 hover:text-white transition-all duration-300 font-bold focus:outline-none cursor-pointer"
              aria-label="Next review"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>

          {/* Dot navigation tracker */}
          <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 flex gap-1.5">
            {TESTIMONIALS_DATA.map((rev, idx) => (
              <button
                key={rev.id}
                onClick={() => setCurrentIndex(idx)}
                className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                  currentIndex === idx ? 'w-6 bg-primary-red' : 'w-1.5 bg-stone-700'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
