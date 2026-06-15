import { motion } from 'motion/react';
import { Shield, Sparkles, Trophy, CheckCircle, Flame, Dumbbell, Zap } from 'lucide-react';
import { GYM_NAME, CONTACT_DETAILS } from '../data';

export default function About() {
  const features = [
    {
      icon: <Dumbbell className="h-5 w-5 text-primary-red" />,
      title: "Modern Workout Equipment",
      description: "Equipped with pristine structural plating, loaded benches, high-grade barbells, and comprehensive resistance platforms."
    },
    {
      icon: <Trophy className="h-5 w-5 text-accent-orange" />,
      title: "Experienced Master Trainers",
      description: "Our certified coaches construct bespoke program templates matching your physical biology and lifting thresholds."
    },
    {
      icon: <Zap className="h-5 w-5 text-yellow-400" />,
      title: "Strength & Conditioning Focus",
      description: "Specialized platforms configured for powerlifting compound lifts, athletic posture squats, and core stability."
    },
    {
      icon: <Flame className="h-5 w-5 text-primary-red" />,
      title: "Targeted Transformation Plans",
      description: "Science-based muscle hypertrophy programs combined with targeted metabolic weight management."
    }
  ];

  return (
    <section id="about" className="py-24 bg-dark-charcoal relative overflow-hidden">
      {/* Decorative Radial glow */}
      <div className="absolute top-1/2 left-0 w-80 h-80 rounded-full bg-primary-red/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 bg-neutral-900 border border-white/5 rounded-full text-xs font-semibold text-primary-red uppercase tracking-wider mb-4"
          >
            <Sparkles className="h-3.5 w-3.5" />
            Discover Victory Guts Gym
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-bebas text-4xl sm:text-5xl md:text-6xl tracking-wide text-white uppercase"
          >
            WELCOME TO THE <span className="text-primary-red text-glow-red">ULTIMATE IRON SANCTUARY</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="font-montserrat text-xs sm:text-sm text-stone-400 mt-4 leading-relaxed"
          >
            Since inception, Victory Guts Gym has provided elite athletic engineering to Vijayawada residents. We curate an aggressive, supportive, results-backed fitness environment built around real effort and dedication.
          </motion.p>
        </div>

        {/* Split Grid Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left: Premium Image Montage/Creative layout */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 relative"
          >
            <div className="relative rounded-2xl overflow-hidden border border-white/10 group shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10" />
              <img 
                src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=1200&auto=format&fit=crop" 
                alt="Victory Guts Gym Premium Training Facility" 
                className="w-full aspect-[4/3] object-cover object-center group-hover:scale-105 duration-700 ease-out"
                referrerPolicy="no-referrer"
              />
              
              {/* Overlay elements */}
              <div className="absolute bottom-6 left-6 z-20 flex items-center gap-3">
                <div className="bg-primary-red text-white p-3 rounded-xl font-bebas text-2xl tracking-wider text-center shadow-lg shadow-primary-red/30">
                  ESTD
                  <div className="text-xs font-montserrat font-bold tracking-normal text-white/80">VIJAYAWADA</div>
                </div>
                <div>
                  <h4 className="font-bebas text-lg text-white tracking-widest leading-none">PROFESSIONAL FACILITY</h4>
                  <p className="font-montserrat text-[10px] text-stone-300 mt-1">Opposite KBN College, Vijayawada</p>
                </div>
              </div>
            </div>

            {/* Glowing Backdrop behind image */}
            <div className="absolute -inset-1.5 bg-gradient-to-r from-primary-red/10 to-accent-orange/10 rounded-2xl blur-lg -z-10 group-hover:opacity-100 transition duration-1000" />
          </motion.div>

          {/* Right: Rich Value Propositions */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <motion.h3 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-bebas text-3xl tracking-widest text-white uppercase mb-6"
            >
              WE BUILD STRONGER HUMAN BEINGS
            </motion.h3>

            <motion.p 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-montserrat text-sm text-stone-300 leading-relaxed mb-8"
            >
              We believe elite fitness has zero shortcuts. That's why we supply an atmosphere completely unbothered by gimmicks. Our core focus centers on providing clean amenities, top-tier powerlifting racks, specialized machines, and raw expert motivation tailored to help you shed fat or pack on muscle.
            </motion.p>

            {/* Features list */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feat, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="p-5 rounded-xl bg-card-bg/50 border border-white/5 flex flex-col items-start gap-3 hover:border-primary-red/20 hover:bg-card-bg/80 transition-all duration-300"
                >
                  <div className="p-2.5 rounded-lg bg-neutral-900 border border-white/5">
                    {feat.icon}
                  </div>
                  <div>
                    <h4 className="font-bebas text-lg tracking-wider text-white">{feat.title}</h4>
                    <p className="font-montserrat text-xs text-stone-400 mt-1.5 leading-relaxed">{feat.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Quote block */}
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="mt-8 p-4 rounded-xl border-l-4 border-l-primary-red bg-primary-red/5"
            >
              <p className="font-montserrat font-medium italic text-xs text-white/90">
                "Our single objective is simple: to make victory accessible to anybody willing to put in the training guts."
              </p>
              <span className="block font-bebas text-xs tracking-wider text-primary-red mt-2">— VIKRAM RATHORE, FOUNDER</span>
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
}
