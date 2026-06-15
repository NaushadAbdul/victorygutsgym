import { motion } from 'motion/react';
import { Sparkles, Instagram, Facebook, Twitter, Award, Check } from 'lucide-react';
import { TRAINERS_DATA, GYM_NAME } from '../data';

export default function Trainers() {
  const getSocialIcon = (platform: string) => {
    switch (platform) {
      case 'instagram': return <Instagram className="h-4 w-4" />;
      case 'facebook': return <Facebook className="h-4 w-4" />;
      case 'twitter': return <Twitter className="h-4 w-4" />;
      default: return null;
    }
  };

  return (
    <section id="trainers" className="py-24 bg-[#111111] relative overflow-hidden">
      {/* Decorative Radial Lights */}
      <div className="absolute top-1/2 right-0 w-80 h-80 rounded-full bg-accent-orange/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-primary-red/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-neutral-900 border border-white/5 rounded-full text-xs font-semibold text-primary-red uppercase tracking-wider mb-4">
            <Sparkles className="h-3.5 w-3.5 text-primary-red" />
            Victory Mentors
          </div>
          <h2 className="font-bebas text-4xl sm:text-5xl md:text-6xl tracking-wide text-white uppercase">
            MEET OUR <span className="text-primary-red text-glow-red">ELITE GYM TRAINERS</span>
          </h2>
          <p className="font-montserrat text-xs sm:text-sm text-stone-400 mt-4 leading-relaxed">
            Our expert professionals aren't just rep counters. They are dedicated physical sculptors holding certifications across biomechanics, nutrition, and strength engineering.
          </p>
        </div>

        {/* Trainers Card Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TRAINERS_DATA.map((trainer, index) => (
            <motion.div
              key={trainer.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative rounded-2xl bg-[#1B1B1B]/40 border border-white/5 hover:border-primary-red/30 overflow-hidden shadow-2xl transition-all duration-300 flex flex-col justify-between"
            >
              
              {/* Image with zoom and filter on hover */}
              <div className="relative aspect-[3/4] overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-[#1B1B1B] via-transparent to-transparent z-10 opacity-80" />
                <img 
                  src={trainer.imageUrl} 
                  alt={trainer.name} 
                  className="w-full h-full object-cover object-center group-hover:scale-103 transition-transform duration-500 ease-out brightness-90 group-hover:brightness-100"
                  referrerPolicy="no-referrer"
                />

                {/* Floating Cert Badge */}
                <div className="absolute top-4 right-4 z-20 flex items-center gap-1.5 px-3 py-1 bg-neutral-950/80 backdrop-blur-md rounded-lg border border-white/5">
                  <Award className="h-3.5 w-3.5 text-primary-red" />
                  <span className="font-bebas text-xs tracking-wider text-white">CERTIFIED</span>
                </div>

                {/* Hover Slide Up details overlay */}
                <div className="absolute bottom-6 inset-x-6 z-20 transition-all duration-300">
                  <span className="font-montserrat text-[10px] text-accent-orange font-bold uppercase tracking-widest bg-accent-orange/10 px-2 py-0.5 rounded border border-accent-orange/20">
                    {trainer.experience}
                  </span>
                  <h3 className="font-bebas text-3xl tracking-wide text-white uppercase mt-2.5 leading-none group-hover:text-primary-red duration-300">
                    {trainer.name}
                  </h3>
                  <p className="font-montserrat text-xs text-stone-300 mt-1.5 font-medium leading-relaxed">
                    {trainer.specialization}
                  </p>

                  {/* Social Channels on Hover Slider */}
                  <div className="flex gap-2.5 mt-5">
                    {Object.entries(trainer.socials).map(([platform, url]) => (
                      <a
                        key={platform}
                        href={url}
                        target="_blank"
                        rel="noreferrer"
                        className="p-2 bg-neutral-950 hover:bg-primary-red rounded-lg text-stone-400 hover:text-white border border-white/5 transition-all duration-300 flex items-center justify-center transform group-hover:translate-y-0"
                        aria-label={`Visit ${trainer.name}'s ${platform}`}
                      >
                        {getSocialIcon(platform)}
                      </a>
                    ))}
                  </div>
                </div>

              </div>
              
              {/* Core Features listing at bottom */}
              <div className="p-6 bg-card-bg/20 border-t border-white/5 flex flex-wrap gap-2">
                <div className="flex items-center gap-1 text-[10px] font-montserrat font-semibold text-stone-400">
                  <Check className="h-3 w-3 text-primary-red" />
                  Form Assessment
                </div>
                <div className="h-3 w-px bg-white/10" />
                <div className="flex items-center gap-1 text-[10px] font-montserrat font-semibold text-stone-400">
                  <Check className="h-3 w-3 text-primary-red" />
                  Diet Consulting
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
