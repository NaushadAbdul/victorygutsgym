import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Dumbbell, Phone } from 'lucide-react';
import { GYM_NAME, CONTACT_DETAILS } from '../data';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Programs', href: '#programs' },
    { name: 'Trainers', href: '#trainers' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const topOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <nav
        id="navbar"
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 px-4 md:px-8 py-3 ${
          isScrolled 
            ? 'bg-secondary-black/85 backdrop-blur-md border-b border-white/5 py-4 shadow-2xl' 
            : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <a 
            href="#home" 
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex items-center gap-2.5 group cursor-pointer"
            id="nav-logo"
          >
            <div className="w-10 h-10 bg-gradient-to-tr from-primary-red to-accent-orange rounded flex items-center justify-center font-black text-xl italic text-white shadow-lg shadow-primary-red/15 transform group-hover:scale-105 duration-300">
              V
            </div>
            <span className="font-bebas text-2xl md:text-3xl tracking-tighter italic uppercase font-black text-white">
              VICTORY GUTS <span className="text-primary-red text-glow-red">GYM</span>
            </span>
          </a>

          {/* Desktop Nav Items */}
          <div className="hidden lg:flex items-center gap-8">
            <ul className="flex items-center gap-8 font-montserrat text-sm font-semibold tracking-wider uppercase">
              {navItems.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className="text-gray-300 hover:text-primary-red transition-all duration-300 relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-primary-red hover:after:w-full after:transition-all after:duration-300"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>

            {/* Quick Action Button */}
            <a
              href={`tel:${CONTACT_DETAILS.phones[0]}`}
              id="nav-call-btn"
              className="flex items-center gap-1.5 bg-white text-black hover:bg-primary-red hover:text-white font-poppins font-bold text-xs tracking-widest uppercase px-6 py-2.5 rounded-full border border-transparent shadow-[0_0_15px_rgba(255,255,255,0.08)] hover:scale-105 duration-300"
            >
              <Phone className="h-3.5 w-3.5" />
              Call Now
            </a>
          </div>

          {/* Mobile Menu Icon */}
          <div className="flex items-center gap-4 lg:hidden">
            <a
              href={`tel:${CONTACT_DETAILS.phones[0]}`}
              className="p-2.5 bg-primary-red/10 rounded-lg text-primary-red border border-primary-red/20 active:scale-95 transition-all"
            >
              <Phone className="h-4 w-4" />
            </a>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2.5 rounded-lg bg-neutral-900 border border-white/5 text-white focus:outline-none"
              aria-label="Toggle navigation menu"
              id="mobile-menu-trigger"
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed top-[72px] left-0 w-full z-45 bg-[#0D0D0D]/95 backdrop-blur-xl border-b border-white/5 py-8 px-6 lg:hidden flex flex-col justify-between shadow-2xl"
          >
            <ul className="flex flex-col gap-5 font-montserrat text-lg font-bold tracking-widest text-center uppercase">
              {navItems.map((item, i) => (
                <motion.li
                  key={item.name}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <a
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className="block text-gray-300 py-1 hover:text-primary-red active:text-primary-red transition"
                  >
                    {item.name}
                  </a>
                </motion.li>
              ))}
            </ul>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="mt-8 pt-6 border-t border-white/5 flex flex-col gap-4 text-center"
            >
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, '#contact')}
                className="w-full bg-neutral-900 border border-white/10 py-3 rounded-xl font-poppins text-sm font-semibold tracking-wider text-white hover:bg-neutral-800 transition"
              >
                Join Now
              </a>
              <a
                href={`tel:${CONTACT_DETAILS.phones[0]}`}
                className="w-full bg-gradient-to-r from-primary-red to-accent-orange py-3 rounded-xl font-poppins text-sm font-semibold tracking-wider text-white flex items-center justify-center gap-2 shadow-lg shadow-primary-red/10"
              >
                <Phone className="h-4 w-4" />
                Call Trainer ({CONTACT_DETAILS.phones[0]})
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
