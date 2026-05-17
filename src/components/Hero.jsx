import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  const scrollToProjects = () => {
    document.getElementById('project')?.scrollIntoView({ behavior: 'smooth' });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section id="home" className="min-h-[85vh] flex items-center justify-center relative overflow-hidden py-12">
      {/* Static Background Glow for Stability */}
      <div className="absolute right-[-5%] top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-neon-cyan/5 rounded-full blur-[120px] pointer-events-none"></div>
      
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-10 lg:gap-16 items-center relative z-10 px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="order-2 md:order-1 text-center md:text-left flex flex-col items-center md:items-start"
        >
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-neon-cyan text-[9px] md:text-[10px] font-bold mb-5 tracking-widest uppercase">
            <span className="w-1.5 h-1.5 bg-neon-cyan rounded-full animate-pulse"></span>
            "Avoid or just undertake it"
          </motion.div>
          
          <motion.h1 variants={itemVariants} className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-white mb-3 leading-tight">
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-white">Aadarsh</span>
          </motion.h1>
          
          <motion.p variants={itemVariants} className="text-xs md:text-sm text-slate-400 mb-7 max-w-sm leading-relaxed">
            I craft high-performance, visually stunning web experiences. Focused on system design and modern frontend architectures.
          </motion.p>
          
          <motion.div variants={itemVariants} className="flex flex-wrap gap-3 justify-center md:justify-start">
            <motion.button 
              whileHover={{ scale: 1.05, y: -2, backgroundColor: "rgba(0, 240, 255, 0.9)" }}
              whileTap={{ scale: 0.98 }}
              onClick={scrollToProjects}
              className="px-6 py-3 rounded-xl bg-neon-cyan/80 backdrop-blur-md text-black transition-all duration-300 text-xs font-black shadow-[0_0_20px_rgba(0,240,255,0.2)] border border-white/10"
            >
              VIEW MY WORK
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.15)" }}
              whileTap={{ scale: 0.98 }}
              className="px-6 py-3 rounded-xl border border-white/20 bg-white/5 backdrop-blur-md text-white transition-all text-xs font-bold shadow-lg"
            >
              DOWNLOAD CV
            </motion.button>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative flex justify-center md:justify-end order-1 md:order-2 lg:pr-12"
        >
          <motion.div 
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="relative w-48 h-48 md:w-56 md:h-56 lg:w-80 lg:h-80 group"
          >
            {/* Elegant Aura */}
            <div className="absolute -inset-2 bg-neon-cyan/5 rounded-[30px] md:rounded-[40px] blur-[15px] group-hover:bg-neon-cyan/10 transition-all duration-700"></div>
            
            <div className="relative z-10 w-full h-full rounded-[30px] md:rounded-[40px] border border-white/10 overflow-hidden shadow-xl bg-dark-card/30 backdrop-blur-md">
              <img 
                src="https://github.com/sudo-aadarsh.png" 
                alt="Aadarsh Jha" 
                className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-110 grayscale-[10%] group-hover:grayscale-0"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
