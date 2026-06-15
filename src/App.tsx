import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Dumbbell } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Programs from './components/Programs';
import WhyChooseUs from './components/WhyChooseUs';
import StatsSection from './components/Stats';
import Trainers from './components/Trainers';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import ExtraWidgets from './components/ExtraWidgets';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [selectedPlan, setSelectedPlan] = useState('');

  useEffect(() => {
    // Artificial duration to represent asset loading & present high-energy intro
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  const handleSelectPlan = (planName: string) => {
    setSelectedPlan(planName);
  };

  return (
    <>
      {/* Intro Loading Screen Animation */}
      <AnimatePresence mode="wait">
        {isLoading && (
          <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="fixed inset-0 z-100 bg-secondary-black flex flex-col items-center justify-center text-center p-6"
          >
            <motion.div
              initial={{ scale: 0.8, rotate: -45 }}
              animate={{ scale: [1, 1.1, 1], rotate: 0 }}
              transition={{ repeat: Infinity, duration: 1.2, ease: "easeInOut" }}
              className="bg-gradient-to-br from-primary-red to-accent-orange p-5 rounded-3xl shadow-xl shadow-primary-red/15 text-white mb-6"
            >
              <Dumbbell className="h-10 w-10 md:h-12 md:w-12" />
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="font-bebas text-4xl sm:text-5xl md:text-6xl tracking-widest text-white uppercase"
            >
              VICTORY<span className="text-primary-red text-glow-red">GUTS</span> GYM
            </motion.h1>
            
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: 140 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="h-1.5 bg-gradient-to-r from-primary-red to-accent-orange rounded-full mt-4"
            />
            
            <span className="font-montserrat text-[10px] text-stone-500 font-semibold tracking-widest uppercase mt-3">
              Vijayawada, AP
            </span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main App Canvas */}
      {!isLoading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="bg-[#111111] min-h-screen text-white relative overflow-hidden"
        >
          {/* Background Decorative Elements */}
          <div className="absolute top-[-5%] right-[-10%] w-[500px] h-[500px] bg-[#FF2D2D] opacity-10 rounded-full blur-[120px] pointer-events-none z-0 animate-pulse" />
          <div className="absolute bottom-[-5%] left-[-10%] w-[400px] h-[400px] bg-[#FF7A00] opacity-10 rounded-full blur-[100px] pointer-events-none z-0" />
          {/* Header Navbar */}
          <Navbar />

          <main>
            {/* Hero Banner with Stats */}
            <Hero />

            {/* General About Facility */}
            <About />

            {/* Curated Programs Selection */}
            <Programs />

            {/* Why Choose Us Proposition list */}
            <WhyChooseUs />

            {/* Intersection Counter block */}
            <StatsSection />

            {/* Meet Elite Mentors */}
            <Trainers />

            {/* Media Image Masonry Lightbox */}
            <Gallery />

            {/* Verified ratings Slider */}
            <Testimonials />

            {/* Standard Tier Pricing table */}
            <Pricing onSelectPlan={handleSelectPlan} />

            {/* Dynamic Map Address Submit Area */}
            <Contact selectedPlan={selectedPlan} />
          </main>

          {/* Floating actions (WhatsApp, scroll-top, and Mobile CTAs) */}
          <ExtraWidgets />
        </motion.div>
      )}
    </>
  );
}
