import { motion } from 'motion/react';
import { Check, Sparkles, HelpCircle } from 'lucide-react';
import { MEMBERSHIP_PLANS_DATA } from '../data';
import { PricingPlan } from '../types';

interface PricingProps {
  onSelectPlan: (planName: string) => void;
}

export default function Pricing({ onSelectPlan }: PricingProps) {
  
  const handleSelect = (plan: PricingPlan) => {
    onSelectPlan(plan.name);
    const element = document.querySelector('#contact');
    if (element) {
      const topOffset = 85;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="pricing" className="py-24 bg-dark-charcoal relative overflow-hidden">
      {/* Decorative Radial glow background */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 rounded-full bg-primary-red/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-neutral-900 border border-white/5 rounded-full text-xs font-semibold text-primary-red uppercase tracking-wider mb-4">
            <Sparkles className="h-3.5 w-3.5 text-primary-red" />
            Victory Passes
          </div>
          <h2 className="font-bebas text-4xl sm:text-5xl md:text-6xl tracking-wide text-white uppercase">
            MEMBERSHIP <span className="text-primary-red text-glow-red">PRICING PLANS</span>
          </h2>
          <p className="font-montserrat text-xs sm:text-sm text-stone-400 mt-4 leading-relaxed">
            Invest in your longevity, physical performance, and confidence. Choose a flexible membership pass with simple upfront pricing.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {MEMBERSHIP_PLANS_DATA.map((plan) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className={`relative rounded-3xl p-8 bg-card-bg/50 border backdrop-blur-md flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 ${
                plan.isPopular 
                  ? 'border-primary-red shadow-2xl shadow-primary-red/5 bg-gradient-to-b from-[#221010]/70 to-[#121212]/95 scale-102 z-10' 
                  : 'border-white/5 hover:border-white/15'
              }`}
            >
              
              {/* Popularity indicator Badge */}
              {plan.isPopular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-primary-red to-accent-orange px-4 py-1.5 rounded-full border border-primary-red/20 shadow-lg text-glow-red">
                  <span className="font-bebas text-[11px] font-bold uppercase tracking-widest text-white flex items-center gap-1">
                    <Sparkles className="h-3.5 w-3.5 animate-pulse" />
                    MOST POPULAR PASS
                  </span>
                </div>
              )}

              {/* Title & Tagline */}
              <div>
                <span className="font-montserrat text-[10px] text-stone-500 uppercase tracking-widest block font-bold">
                  PASS CATEGORY
                </span>
                <h3 className="font-bebas text-3xl tracking-widest text-white uppercase mt-1 leading-none">
                  {plan.name}
                </h3>
                <p className="font-montserrat text-xs text-stone-400 mt-2 italic leading-relaxed min-h-[32px]">
                  {plan.tagline}
                </p>

                {/* Pricing values */}
                <div className="my-6 pt-5 border-t border-white/5 flex items-baseline">
                  <span className="font-bebas text-5xl md:text-6xl text-white tracking-wide text-glow-red">
                    {plan.price}
                  </span>
                  <span className="font-montserrat text-xs text-stone-400 font-bold tracking-widest ml-1.5 uppercase">
                    / {plan.billingPeriod}
                  </span>
                </div>

                {/* Features Checklist */}
                <ul className="space-y-3.5 my-6">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="p-0.5 rounded-full bg-primary-red/10 text-primary-red mt-0.5 shadow-sm">
                        <Check className="h-3.5 w-3.5" />
                      </div>
                      <span className="font-montserrat text-xs text-stone-300 leading-snug">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Select Plan Button */}
              <button
                onClick={() => handleSelect(plan)}
                className={`w-full py-4 rounded-xl font-poppins font-bold text-xs uppercase tracking-widest transition-all duration-300 cursor-pointer ${
                  plan.isPopular
                    ? 'bg-gradient-to-r from-primary-red to-accent-orange hover:from-white hover:to-white text-white hover:text-black shadow-lg shadow-primary-red/10 hover:box-glow-orange hover:scale-103'
                    : 'bg-neutral-900 border border-white/10 text-white hover:bg-neutral-800 hover:border-primary-red/50 hover:text-primary-red'
                }`}
              >
                Join Now with {plan.name}
              </button>

            </motion.div>
          ))}
        </div>

        {/* Footnote assurance */}
        <p className="font-montserrat text-[11px] text-stone-500 text-center mt-12 max-w-xl mx-auto leading-relaxed">
          * Admission is open to adult individuals of all competence stages. Corporate customized corporate memberships can be requested through our primary team desk via call.
        </p>

      </div>
    </section>
  );
}
