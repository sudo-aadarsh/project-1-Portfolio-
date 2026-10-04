import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { User, IdCard, Folder, Mail } from 'lucide-react';

const NAV_ITEMS = [
  { id: 'home',    label: 'Home',     icon: User,   href: '#home' },
  { id: 'about',   label: 'About',    icon: IdCard, href: '#about' },
  { id: 'project', label: 'Projects', icon: Folder, href: '#project' },
  { id: 'contact', label: 'Contact',  icon: Mail,   href: '#contact' },
];

const Navbar = () => {
  const [activeTab, setActiveTab] = useState('home');

  useEffect(() => {
    const onScroll = () => {
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
    document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="fixed top-3 left-0 right-0 md:top-5 md:left-1/2 md:right-auto md:-translate-x-1/2 z-50 px-3 md:px-0">
      <nav className="flex items-center gap-1.5 p-2 rounded-full border border-white/20 bg-black/60 md:bg-black/40 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.4)] justify-center">
        {NAV_ITEMS.map((item) => {
          const Icon     = item.icon;
          const isActive = activeTab === item.id;

          return (
            <a
              key={item.id}
              href={item.href}
              onClick={(e) => handleNavClick(e, item)}
              className={`relative flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-full text-sm sm:text-[14px] font-medium select-none transition-colors duration-200 ${
                isActive
                  ? 'text-black'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              {/* Sliding active pill */}
              {isActive && (
                <motion.div
                  layoutId="pill"
                  className="absolute inset-0 bg-neon-cyan rounded-full shadow-[0_0_16px_rgba(0,240,255,0.4)]"
                  transition={{ type: 'spring', stiffness: 400, damping: 35 }}
                />
              )}

              <span className="relative z-10 flex items-center gap-2">
                <Icon
                  size={16}
                  className={isActive ? 'text-black' : 'text-slate-400 transition-colors duration-200 group-hover:text-neon-cyan'}
                />
                {/* Hide label on very small screens */}
                <span className="hidden xs:inline sm:inline capitalize">{item.label}</span>
              </span>
            </a>
          );
        })}
      </nav>
    </header>
  );
};

export default Navbar;
