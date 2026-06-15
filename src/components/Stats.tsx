import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { Sparkles, TrendingUp, Heart, Star, Award } from 'lucide-react';
import { STATISTICS } from '../data';

// Custom component to handle counting animation for each stat card
function StatCounter({ targetValue, suffix, label, delayTime, icon }: { targetValue: number, suffix: string, label: string, delayTime: number, icon: React.ReactNode, key?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    // For values like 4.6, let's treat them specifically
    const isFloat = targetValue % 1 !== 0;
    const end = targetValue;
    const duration = 1800; // ms
    const incrementTime = isFloat ? 30 : 20; // faster for ints
    const steps = duration / incrementTime;
    const increment = (end - start) / steps;

    const timer = setTimeout(() => {
      const interval = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(interval);
        } else {
          setCount(start);
        }
      }, incrementTime);
      return () => clearInterval(interval);
    }, delayTime);

    return () => clearTimeout(timer);
  }, [isInView, targetValue, delayTime]);

  const displayCount = (targetValue % 1 !== 0) ? count.toFixed(1) : Math.floor(count);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: delayTime / 1000 }}
      className="p-8 rounded-2xl bg-gradient-to-b from-[#1C1C1C] to-[#121212] border border-white/5 relative overflow-hidden group hover:border-primary-red/30 transition-all duration-500 shadow-2xl flex flex-col items-center justify-center text-center"
    >
      {/* Background radial highlight */}
      <div className="absolute -top-12 -left-12 w-32 h-32 bg-primary-red/5 rounded-full blur-2xl group-hover:bg-primary-red/10 duration-500" />
      
      {/* Glowing Icon holder */}
      <div className="p-4 bg-neutral-900 border border-white/5 rounded-2xl mb-5 text-primary-red group-hover:scale-110 duration-500 group-hover:box-glow-red/20 shadow-md">
        {icon}
      </div>

      {/* Dynamic Count */}
      <span className="font-bebas text-5xl sm:text-6xl md:text-7xl tracking-wider text-white text-glow-red flex items-center justify-center">
        {displayCount}{suffix}
      </span>

      {/* Description tag */}
      <span className="font-montserrat text-xs sm:text-sm text-stone-300 font-semibold tracking-wider uppercase mt-3 group-hover:text-primary-red duration-300">
        {label}
      </span>

      {/* Inner design line */}
      <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-primary-red/20 to-transparent group-hover:via-primary-red/70 transition-all duration-500" />
    </motion.div>
  );
}

export default function StatsSection() {
  const getIcon = (id: string) => {
    switch (id) {
      case 'stat-1': return <Award className="h-6 w-6" />;
      case 'stat-2': return <Star className="h-6 w-6 text-yellow-400 stroke-[1.5] fill-yellow-400" />;
      case 'stat-3': return <TrendingUp className="h-6 w-6" />;
      case 'stat-4': return <Heart className="h-6 w-6" />;
      default: return <Award className="h-6 w-6" />;
    }
  };

  return (
    <section className="py-20 bg-secondary-black relative overflow-hidden">
      {/* Glow highlight */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 rounded-full bg-primary-red/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Responsive Grid layout for 4 counter cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {STATISTICS.map((stat, idx) => (
            <StatCounter
              key={stat.id}
              targetValue={stat.numericValue}
              suffix={stat.suffix}
              label={stat.label}
              delayTime={idx * 150}
              icon={getIcon(stat.id)}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
