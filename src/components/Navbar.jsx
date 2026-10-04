import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { User, IdCard, Folder, Mail } from 'lucide-react';

const NAV_ITEMS = [
  { id: 'home',    label: 'Home',     icon: User,   href: '#home' },
  { id: 'about',   label: 'About',    icon: IdCard, href: '#about' },
  { id: 'project', label: 'Projects', icon: Folder, href: '#project' },
  { id: 'contact', label: 'Contact',  icon: Mail,   href: '#contact' },
];

const Navbar = () => {
  const [activeTab, setActiveTab] = useState('home');
  const scrollingRef = React.useRef(false);
  const scrollTimerRef = React.useRef(null);

  useEffect(() => {
    const onScroll = () => {
      // Ignore scroll events fired during a programmatic smooth scroll
      if (scrollingRef.current) return;

      const sectionIds = ['contact', 'project', 'about', 'home'];
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 260) {
          setActiveTab(id);
          break;
        }
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = (e, item) => {
    e.preventDefault();
    setActiveTab(item.id);

    // Block scroll listener while smooth scroll is in progress
    scrollingRef.current = true;
    clearTimeout(scrollTimerRef.current);
    scrollTimerRef.current = setTimeout(() => {
      scrollingRef.current = false;
    }, 1000); // enough time for smooth scroll to finish

    document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="fixed top-3 left-0 right-0 md:top-6 md:left-1/2 md:right-auto md:-translate-x-1/2 z-[100] px-4 md:px-0 w-full md:w-auto flex justify-center pointer-events-auto">
      <nav className="w-full max-w-[330px] xs:max-w-[350px] sm:max-w-md md:max-w-none md:w-max flex flex-nowrap items-center gap-0.5 sm:gap-1.5 md:gap-2 p-1 sm:p-1.5 md:p-2 rounded-full border border-white/15 bg-black/25 md:bg-black/30 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.25)] justify-between md:justify-center">
        {NAV_ITEMS.map((item) => {
          const Icon     = item.icon;
          const isActive = activeTab === item.id;

          return (
            <a
              key={item.id}
              href={item.href}
              onClick={(e) => handleNavClick(e, item)}
              className={`relative flex-1 md:flex-initial flex items-center justify-center gap-1.5 sm:gap-2 md:gap-2.5 px-2 sm:px-4 md:px-6 py-2 md:py-2.5 rounded-full text-xs sm:text-[13px] md:text-[14px] font-medium md:font-semibold select-none whitespace-nowrap transition-colors ${
                isActive ? 'text-black' : 'text-slate-300 hover:text-white'
              }`}
            >
              {/* Local fade pill — no cross-tab travel */}
              <AnimatePresence>
                {isActive && (
                  <motion.div
                    key="pill"
                    initial={{ opacity: 0, scale: 0.85 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.85 }}
                    transition={{ duration: 0.2, ease: [0.4, 0, 0.2, 1] }}
                    className="absolute inset-0 bg-neon-cyan rounded-full shadow-[0_0_20px_rgba(0,240,255,0.45)]"
                  />
                )}
              </AnimatePresence>

              <span className="relative z-10 flex items-center gap-2 md:gap-2.5">
                <Icon
                  className={`w-4 h-4 md:w-5 md:h-5 ${isActive ? 'text-black' : 'text-slate-400'}`}
                />
                <span className="hidden xs:inline sm:inline capitalize tracking-wide">{item.label}</span>
              </span>
            </a>
          );
        })}
      </nav>
    </header>
  );
};

export default Navbar;

