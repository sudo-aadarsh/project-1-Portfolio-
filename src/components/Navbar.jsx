import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-dark-bg/80 backdrop-blur-md py-4 shadow-lg border-b border-neon-cyan/20' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-2xl font-bold text-white tracking-wider"
        >
          Aadarsh<span className="text-neon-cyan">.</span>
        </motion.div>
        
        <div className="hidden md:flex space-x-8">
          {['Home', 'About', 'Project', 'Contact'].map((item, index) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="text-gray-300 hover:text-neon-cyan transition-colors font-medium"
            >
              {item}
            </motion.a>
          ))}
        </div>

        {/* Mobile menu could go here */}
      </div>
    </nav>
  );
};

export default Navbar;
