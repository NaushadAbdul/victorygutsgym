import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Flame, Dumbbell, Zap, Users, Activity, Award, Sparkles, X, ArrowRight, Check } from 'lucide-react';
import { PROGRAMS_DATA, CONTACT_DETAILS } from '../data';
import { Program } from '../types';

export default function Programs() {
  const [selectedProgram, setSelectedProgram] = useState<Program | null>(null);

  // Icon mapper helper
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Flame': return <Flame className="h-6 w-6 text-primary-red" />;
      case 'Dumbbell': return <Dumbbell className="h-6 w-6 text-primary-red" />;
      case 'Zap': return <Zap className="h-6 w-6 text-primary-red" />;
      case 'Users': return <Users className="h-6 w-6 text-primary-red" />;
      case 'Activity': return <Activity className="h-6 w-6 text-primary-red" />;
      case 'Award': return <Award className="h-6 w-6 text-primary-red" />;
      default: return <Dumbbell className="h-6 w-6 text-primary-red" />;
    }
  };

  // Curated additional facts for each program to present in the premium modal
  const getProgramDetails = (title: string) => {
    switch (title) {
      case 'Weight Loss Training': return {
        tagline: "Torch stubborn calories, enhance dynamic metabolism.",
        duration: "12 Weeks (Recommended)",
        intensity: "High (Meta-Con)",
        amenities: ["Bespoke macro weight-management sheet", "Heart-rate threshold tracking", "Weekly physical density assessments", "Metabolic conditioning guides"],
        extra: "Ideal for burning fast stored fat while building dense muscle fibers."
      };
      case 'Muscle Building': return {
        tagline: "Build dense skeletal structure and optimal hypertrophy.",
        duration: "16 Weeks focused cycles",
        intensity: "Moderate to Very High",
        amenities: ["Progressive overload calculation log", "Optimal mechanical tension sheets", "Recovery & post-workout protein plans", "Anatomical safety checks"],
        extra: "Constructed utilizing raw resistance principles for continuous mass gain."
      };
      case 'Strength Training': return {
        tagline: "Unleash extreme force velocity, master compound lifts.",
        duration: "Ongoing power cycles",
        intensity: "Maximum load thresholds",
        amenities: ["Squat, bench & deadlift technical analysis", "Neuromuscular central coordination drills", "Calibrated plates and secure bars", "Personal records (PR) logs"],
        extra: "Tailored for prospective powerlifters and functional force athletes."
      };
      case 'Personal Training': return {
        tagline: "One-on-one direct mentorship & private coaching slots.",
        duration: "Monthly / Quarterly slots",
        intensity: "Highly customized to individual",
        amenities: ["Dedicated 1-on-1 private trainer sessions", "Precision body composition testing", "Flexible scheduling and priority access", "Absolute lifestyle habit coaching"],
        extra: "The fastest pathway to safely crush specific strength markers."
      };
      case 'Cardio Fitness': return {
        tagline: "Elevate VO2 Max capacity and optimal heart state.",
        duration: "Year-round conditioning",
        intensity: "Variable steady + HIIT",
        amenities: ["Equipped with top-rated treadmills & bikes", "Low-impact orthopedic conditioning", "VO2 Max performance tests", "Endurance dynamic tracking"],
        extra: "Strengthens cardiovascular output and builds relentless physical stamina."
      };
      case 'Body Transformation': return {
        tagline: "The absolute custom makeover: training, diet & focus.",
        duration: "12 to 24 Weeks blueprints",
        intensity: "High Discipline",
        amenities: ["Full personalized lifestyle transformation guides", "Daily accountability chat check-ins", "Before/After digital photographic records", "VIP nutritional lifestyle sheets"],
        extra: "A holistic custom overhaul. Best suited for high-priority targets."
      };
      default: return {
        tagline: "Elevate your physical form with elite engineering.",
        duration: "Flexible duration templates",
        intensity: "Customized according to level",
        amenities: ["Custom fitness maps", "Unlimited locker & shower facility access", "Flexible timeslots allowed", "General advice logs"],
        extra: "Engineered to promote victory in strength, aesthetics, and general fitness."
      };
    }
  };

  const handleBookNow = (programTitle: string) => {
    setSelectedProgram(null);
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
    <section id="programs" className="py-24 bg-secondary-black relative overflow-hidden">
      {/* Dynamic Ambient Background Lights */}
      <div className="absolute top-1/3 right-0 w-96 h-96 rounded-full bg-accent-orange/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/3 left-0 w-96 h-96 rounded-full bg-primary-red/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-neutral-900 border border-white/5 rounded-full text-xs font-semibold text-accent-orange uppercase tracking-wider mb-4">
            <Sparkles className="h-3.5 w-3.5" />
            Victory Gym Blueprints
          </div>
          <h2 className="font-bebas text-4xl sm:text-5xl md:text-6xl tracking-wide text-white uppercase">
            POWERFUL TRAINING <span className="text-primary-red text-glow-red">PROGRAMS</span>
          </h2>
          <p className="font-montserrat text-xs sm:text-sm text-stone-400 mt-4 leading-relaxed">
            Choose a specialized discipline curated by our master coaches. Each track utilizes custom methodologies structured to drive rapid body recomposition and peak performance.
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROGRAMS_DATA.map((prog, index) => (
            <motion.div
              key={prog.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative rounded-2xl bg-card-bg/40 border border-white/5 overflow-hidden hover:border-primary-red/30 transition-all duration-300 flex flex-col justify-between shadow-xl cursor-default hover:shadow-primary-red/5"
            >
              {/* Image Container with Zoom */}
              <div className="relative aspect-[16/10] overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-card-bg via-transparent to-transparent z-10" />
                <img 
                  src={prog.imageUrl} 
                  alt={prog.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  referrerPolicy="no-referrer"
                />
                
                {/* Floating Icon */}
                <div className="absolute top-4 left-4 z-20 p-3 bg-neutral-950/80 backdrop-blur-md rounded-xl border border-white/10 group-hover:bg-primary-red group-hover:scale-110 duration-300 shadow-lg">
                  {getIcon(prog.iconName)}
                </div>
              </div>

              {/* Text Area */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-bebas text-2xl tracking-wider text-white group-hover:text-primary-red duration-300">
                    {prog.title}
                  </h3>
                  <p className="font-montserrat text-xs text-stone-400 mt-2 leading-relaxed">
                    {prog.description}
                  </p>
                </div>

                <div className="mt-6 pt-5 border-t border-white/5 flex items-center justify-between">
                  <span className="font-montserrat text-[10px] text-stone-500 uppercase tracking-wider font-bold">
                    EST. Blueprints
                  </span>
                  
                  <button
                    onClick={() => setSelectedProgram(prog)}
                    className="flex items-center gap-1 font-poppins text-xs font-semibold uppercase text-primary-red group-hover:text-accent-orange transition-colors duration-300 text-left cursor-pointer"
                  >
                    Learn Details
                    <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1.5 transition-transform duration-300" />
                  </button>
                </div>
              </div>

              {/* Orange/Red Underline Border on Hover */}
              <div className="absolute bottom-0 left-0 h-[3px] w-0 bg-gradient-to-r from-primary-red to-accent-orange group-hover:w-full transition-all duration-300" />
            </motion.div>
          ))}
        </div>

      </div>

      {/* Premium Program Details Modal (AnimatePresence) */}
      <AnimatePresence>
        {selectedProgram && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            
            {/* Modal Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProgram(null)}
              className="absolute inset-0 bg-black/85 backdrop-blur-md"
            />

            {/* Modal Glass Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 15 }}
              transition={{ type: "spring", damping: 25, stiffness: 180 }}
              className="relative w-full max-w-2xl rounded-2xl bg-gradient-to-b from-[#1E1E1E] to-[#121212] border border-white/10 overflow-hidden shadow-2xl z-10"
            >
              
              {/* Top Banner Image */}
              <div className="relative h-48 sm:h-56">
                <div className="absolute inset-0 bg-gradient-to-t from-[#1E1E1E] via-[#1E1E1E]/30 to-transparent z-10" />
                <img 
                  src={selectedProgram.imageUrl} 
                  alt={selectedProgram.title} 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                
                {/* Close Button */}
                <button
                  onClick={() => setSelectedProgram(null)}
                  className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-neutral-950/80 hover:bg-primary-red text-white border border-white/5 transition-colors focus:outline-none cursor-pointer"
                  aria-label="Close details modal"
                >
                  <X className="h-4 w-4" />
                </button>

                {/* Floating Icon Badge */}
                <div className="absolute bottom-4 left-6 z-20 flex items-center gap-3">
                  <div className="p-3 bg-neutral-950/90 rounded-xl border border-white/10">
                    {getIcon(selectedProgram.iconName)}
                  </div>
                  <div>
                    <span className="font-montserrat text-[10px] bg-primary-red/20 text-primary-red font-bold px-2 py-0.5 rounded uppercase tracking-widest">
                      SPECIAL FOCUS
                    </span>
                    <h4 className="font-bebas text-2xl sm:text-3xl tracking-wider text-white uppercase mt-0.5 leading-none">
                      {selectedProgram.title}
                    </h4>
                  </div>
                </div>
              </div>

              {/* Content Body */}
              <div className="p-6 sm:p-8">
                
                {/* Tagline sentence */}
                <p className="font-montserrat text-sm text-stone-300 font-semibold tracking-wide italic">
                  "{getProgramDetails(selectedProgram.title).tagline}"
                </p>

                {/* Grid details (Intensity / Duration) */}
                <div className="grid grid-cols-2 gap-4 my-6 py-4 border-y border-white/5">
                  <div>
                    <span className="font-montserrat text-[11px] text-stone-500 uppercase tracking-wider block font-bold">Recommended Duration</span>
                    <span className="font-bebas text-xl text-white tracking-widest mt-1 block">
                      {getProgramDetails(selectedProgram.title).duration}
                    </span>
                  </div>
                  <div>
                    <span className="font-montserrat text-[11px] text-stone-500 uppercase tracking-wider block font-bold">Workout Intensity</span>
                    <span className="font-bebas text-xl text-primary-red tracking-widest mt-1 block uppercase">
                      {getProgramDetails(selectedProgram.title).intensity}
                    </span>
                  </div>
                </div>

                {/* Key components and guides */}
                <h5 className="font-bebas text-base tracking-widest text-stone-300 uppercase mb-3">
                  What you will receive in this program:
                </h5>
                <ul className="space-y-2.5">
                  {getProgramDetails(selectedProgram.title).amenities.map((item, id) => (
                    <li key={id} className="flex items-start gap-2.5 text-xs font-montserrat text-stone-400 leading-tight">
                      <div className="p-0.5 rounded-full bg-primary-red/10 text-primary-red mt-0.5">
                        <Check className="h-3 w-3" />
                      </div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                {/* Bottom Call to Actions */}
                <div className="mt-8 pt-6 border-t border-white/5 flex flex-col sm:flex-row gap-4 items-center justify-between">
                  <p className="font-montserrat text-[10px] text-stone-500 max-w-xs text-center sm:text-left leading-normal">
                    * {getProgramDetails(selectedProgram.title).extra} Join today with our flexible month/quarter memberships.
                  </p>
                  
                  <div className="flex gap-3 w-full sm:w-auto">
                    <button
                      onClick={() => setSelectedProgram(null)}
                      className="flex-1 sm:flex-initial px-6 py-3 rounded-lg border border-white/10 hover:border-white/30 text-xs font-poppins font-medium text-white transition tracking-wide cursor-pointer"
                    >
                      Close
                    </button>
                    <button
                      onClick={() => handleBookNow(selectedProgram.title)}
                      className="flex-1 sm:flex-initial px-6 py-3 bg-gradient-to-r from-primary-red to-accent-orange text-white text-xs font-poppins font-bold rounded-lg tracking-wider uppercase flex items-center justify-center gap-1.5 shadow-lg shadow-primary-red/20 hover:scale-102 transition cursor-pointer"
                    >
                      Book Now
                      <ArrowRight className="h-3.5 w-3.5" />
                    </button>
                  </div>
                </div>

              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
