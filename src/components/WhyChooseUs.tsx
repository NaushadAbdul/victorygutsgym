import { motion } from 'motion/react';
import { Award, Dumbbell, Heart, Tag, Shield, TrendingUp, Sparkles } from 'lucide-react';

export default function WhyChooseUs() {
  const features = [
    {
      icon: <Award className="h-6 w-6 text-primary-red" />,
      title: "Certified Trainers",
      description: "Our instructors hold elite level standard professional fitness certifications and undergo dynamic health coaching audits.",
      highlight: "Elite Staff"
    },
    {
      icon: <Dumbbell className="h-6 w-6 text-accent-orange" />,
      title: "Modern Equipment",
      description: "Equipped with state-of-the-art powerlifting machines, heavy calibrated bumper plates, and luxury cardio equipment.",
      highlight: "Premium Steel"
    },
    {
      icon: <Heart className="h-6 w-6 text-primary-red" />,
      title: "Personalized Training",
      description: "Workouts sculpted specifically around your muscle thresholds, bio-recovery cycles, and targets.",
      highlight: "Bespoke Plans"
    },
    {
      icon: <Tag className="h-6 w-6 text-accent-orange" />,
      title: "Affordable Membership",
      description: "High-value pricing packages with absolutely zero hidden taxes or assessment charges. Honest value.",
      highlight: "Best Quality/Price"
    },
    {
      icon: <Shield className="h-6 w-6 text-primary-red" />,
      title: "Clean Environment",
      description: "Continuously cleaned, hygienic free-weights rails, ventilated airflow, and sterile private bathroom facilities.",
      highlight: "100% Sanitized"
    },
    {
      icon: <TrendingUp className="h-6 w-6 text-accent-orange" />,
      title: "Proven Results",
      description: "Check our local reviews! Over 33+ Vijayawada athletes have secured life-changing body transformations with us.",
      highlight: "Google 4.6★"
    }
  ];

  return (
    <section className="py-24 bg-dark-charcoal relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] rounded-full bg-gradient-to-r from-primary-red/5 to-accent-orange/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-neutral-900 border border-white/5 rounded-full text-xs font-semibold text-primary-red uppercase tracking-wider mb-4">
            <Sparkles className="h-3.5 w-3.5" />
            Core Gym Values
          </div>
          <h2 className="font-bebas text-4xl sm:text-5xl md:text-6xl tracking-wide text-white uppercase">
            WHY ATHELETES CHOOSE <span className="text-primary-red text-glow-red">VICTORY GUTS</span>
          </h2>
          <p className="font-montserrat text-xs sm:text-sm text-stone-400 mt-4 leading-relaxed">
            We don't just sell gym memberships. We supply the absolute golden ecosystem required to ensure you crush every single physical commitment.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group relative p-8 rounded-2xl bg-[#1B1B1B]/40 border border-white/5 backdrop-blur-md overflow-hidden hover:border-primary-red/30 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            >
              {/* Top Row: Icon and Highlight Badge */}
              <div className="flex items-center justify-between">
                <div className="p-3.5 bg-neutral-950/80 rounded-2xl border border-white/10 group-hover:bg-primary-red/10 group-hover:border-primary-red/20 transition-all duration-300">
                  {feat.icon}
                </div>
                
                <span className="font-montserrat text-[9px] font-bold tracking-wider uppercase text-stone-500 bg-neutral-950/30 px-2.5 py-1 rounded border border-white/5 group-hover:text-primary-red group-hover:border-primary-red/10 transition-colors">
                  {feat.highlight}
                </span>
              </div>

              {/* Middle Row: Text details */}
              <div className="mt-8 flex-1">
                <h3 className="font-bebas text-2xl tracking-wider text-white group-hover:text-primary-red transition-colors duration-300">
                  {feat.title}
                </h3>
                <p className="font-montserrat text-xs text-stone-400 mt-3 leading-relaxed">
                  {feat.description}
                </p>
              </div>

              {/* Bottom Subtle Bar */}
              <div className="mt-6 pt-5 border-t border-white/5 flex items-center justify-between text-stone-500 font-bebas text-sm uppercase tracking-widest group-hover:text-stone-300 duration-300">
                <span>Victory Standard</span>
                <span className="text-[10px] sm:text-xs">✔ GUTS</span>
              </div>

              {/* Glowing Hover Background overlay */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary-red/5 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-accent-orange/5 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
