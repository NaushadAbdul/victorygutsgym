import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Image, Sparkles, X, ChevronLeft, ChevronRight, Eye } from 'lucide-react';
import { GALLERY_DATA } from '../data';
import { GalleryItem } from '../types';

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState<'all' | 'workout' | 'equipment' | 'interior' | 'transformation'>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const categories = [
    { value: 'all', label: 'All Images' },
    { value: 'workout', label: 'Workouts' },
    { value: 'equipment', label: 'Equipment' },
    { value: 'interior', label: 'Interior' },
    { value: 'transformation', label: 'Transformations' },
  ] as const;

  const filteredItems = activeFilter === 'all'
    ? GALLERY_DATA
    : GALLERY_DATA.filter(item => item.category === activeFilter);

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex === null) return;
    const nextIndex = lightboxIndex === 0 ? filteredItems.length - 1 : lightboxIndex - 1;
    setLightboxIndex(nextIndex);
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex === null) return;
    const nextIndex = lightboxIndex === filteredItems.length - 1 ? 0 : lightboxIndex + 1;
    setLightboxIndex(nextIndex);
  };

  return (
    <section id="gallery" className="py-24 bg-dark-charcoal relative overflow-hidden">
      {/* Decorative Radial Lights */}
      <div className="absolute top-1/3 left-0 w-80 h-80 rounded-full bg-primary-red/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-neutral-900 border border-white/5 rounded-full text-xs font-semibold text-primary-red uppercase tracking-wider mb-4">
            <Sparkles className="h-3.5 w-3.5" />
            Victory Visuals
          </div>
          <h2 className="font-bebas text-4xl sm:text-5xl md:text-6xl tracking-wide text-white uppercase">
            VICTORY GUTS <span className="text-primary-red text-glow-red">GYM GALLERY</span>
          </h2>
          <p className="font-montserrat text-xs sm:text-sm text-stone-400 mt-4 leading-relaxed">
            Take a visual tour inside Vijayawada’s premier fitness hub. Explore our heavy-lifting zones, state-of-the-art cardiovascular platforms, and physical success records.
          </p>
        </div>

        {/* Filter categories tabs */}
        <div className="flex flex-wrap justify-center items-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => {
                setActiveFilter(cat.value);
                setLightboxIndex(null);
              }}
              className={`px-5 py-2.5 rounded-xl font-poppins text-xs font-semibold tracking-wider uppercase transition-all duration-300 border cursor-pointer ${
                activeFilter === cat.value
                  ? 'bg-gradient-to-r from-primary-red to-accent-orange text-white border-transparent shadow-lg shadow-primary-red/10'
                  : 'bg-card-bg/30 text-stone-400 border-white/5 hover:text-white hover:border-white/15 hover:bg-card-bg/60'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Interactive Responsive Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                onClick={() => setLightboxIndex(index)}
                className="group relative aspect-[4/3] rounded-2xl overflow-hidden bg-card-bg border border-white/5 cursor-pointer shadow-xl"
              >
                {/* Background Image with Zoom */}
                <img 
                  src={item.imageUrl} 
                  alt={item.title} 
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out brightness-90 group-hover:brightness-100"
                  referrerPolicy="no-referrer"
                />

                {/* Glass Hover Overlay */}
                <div className="absolute inset-0 bg-neutral-950/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-3 z-10 p-6 text-center">
                  <div className="p-3 bg-primary-red text-white rounded-full scale-75 group-hover:scale-100 duration-300 ease-out shadow-lg">
                    <Eye className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="font-montserrat text-[9px] bg-primary-red/20 text-primary-red font-bold px-2 py-0.5 rounded uppercase tracking-widest">
                      {item.category}
                    </span>
                    <h3 className="font-bebas text-xl tracking-wider text-white mt-2 leading-tight">
                      {item.title}
                    </h3>
                  </div>
                </div>

                {/* Subtitle tag at corner by default */}
                <div className="absolute bottom-4 left-4 z-5 bg-black/70 backdrop-blur-md px-3 py-1 rounded-lg border border-white/5 text-[9px] font-bold font-montserrat tracking-widest text-white uppercase group-hover:opacity-0 transition-opacity">
                  {item.category}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>

      {/* Lightbox Modal (AnimatePresence) */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <div className="fixed inset-0 z-55 flex items-center justify-center p-4 bg-black/95 backdrop-blur-md">
            
            {/* Dark Close overlay */}
            <div 
              className="absolute inset-0 cursor-zoom-out"
              onClick={() => setLightboxIndex(null)}
            />

            {/* Lightbox Header with close buttons */}
            <button
              onClick={() => setLightboxIndex(null)}
              className="absolute top-6 right-6 z-20 p-3 bg-neutral-900 border border-white/10 hover:bg-primary-red text-white rounded-full transition-colors cursor-pointer"
              aria-label="Close lightbox"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Left selector */}
            <button
              onClick={handlePrev}
              className="absolute left-4 sm:left-8 z-20 p-3 bg-neutral-900/60 border border-white/5 hover:bg-primary-red text-white rounded-full transition-colors font-bold cursor-pointer"
              aria-label="Previous image"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>

            {/* Image display container */}
            <motion.div
              key={lightboxIndex}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-4xl max-h-[80vh] w-full z-10 flex flex-col items-center"
            >
              <img 
                src={filteredItems[lightboxIndex].imageUrl} 
                alt={filteredItems[lightboxIndex].title} 
                className="max-w-full max-h-[70vh] object-contain rounded-xl border border-white/10 shadow-2xl"
                referrerPolicy="no-referrer"
              />
              
              {/* Image Description Footer */}
              <div className="mt-4 text-center max-w-xl">
                <span className="font-montserrat text-[10px] bg-primary-red text-white uppercase font-bold px-2 py-0.5 rounded tracking-wider">
                  {filteredItems[lightboxIndex].category}
                </span>
                <p className="font-bebas text-xl text-stone-200 uppercase tracking-widest mt-2">
                  {filteredItems[lightboxIndex].title}
                </p>
              </div>
            </motion.div>

            {/* Right selector */}
            <button
              onClick={handleNext}
              className="absolute right-4 sm:right-8 z-20 p-3 bg-neutral-900/60 border border-white/5 hover:bg-primary-red text-white rounded-full transition-colors font-bold cursor-pointer"
              aria-label="Next image"
            >
              <ChevronRight className="h-6 w-6" />
            </button>

          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
