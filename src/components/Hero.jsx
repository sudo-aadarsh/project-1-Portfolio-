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
    <section id="home" className="min-h-[85vh] flex items-center justify-center relative overflow-hidden pt-20 pb-12 md:py-12">
      {/* Static Background Glow for Stability */}
      <div className="absolute right-[-5%] top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-neon-cyan/5 rounded-full blur-[120px] pointer-events-none"></div>
      
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-10 lg:gap-16 items-center relative z-10 px-0 md:px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="order-1 md:order-1 text-center md:text-left flex flex-col items-center md:items-start px-5 md:px-0"
        >
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-neon-cyan text-[9px] md:text-[10px] font-bold mb-5 tracking-widest uppercase">
            <span className="w-1.5 h-1.5 bg-neon-cyan rounded-full animate-pulse"></span>
            "Avoid or just undertake it"
          </motion.div>
          
          <motion.h1 variants={itemVariants} className="w-full text-3xl md:text-5xl lg:text-6xl font-extrabold text-white mb-3 leading-tight">
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-white">Aadarsh</span>
          </motion.h1>
          
          <motion.p variants={itemVariants} className="w-full text-xs md:text-sm text-slate-400 mb-7 leading-relaxed">
            I craft high-performance, visually stunning web experiences. Focused on system design and modern frontend architectures.
          </motion.p>
          
          <motion.div variants={itemVariants} className="flex flex-row gap-3 justify-center md:justify-start w-full">
            <motion.button 
              whileHover={{ scale: 1.05, y: -2, backgroundColor: "rgba(0, 240, 255, 0.9)" }}
              whileTap={{ scale: 0.98 }}
              onClick={scrollToProjects}
              className="flex-1 md:flex-none px-6 py-3 rounded-xl bg-neon-cyan/80 backdrop-blur-md text-black transition-all duration-300 text-xs font-black shadow-[0_0_20px_rgba(0,240,255,0.2)] border border-white/10"
            >
              VIEW MY WORK
            </motion.button>
            <motion.a 
              href="/My_Resume.pdf"
              download="My_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.15)" }}
              whileTap={{ scale: 0.98 }}
              className="flex-1 md:flex-none px-6 py-3 rounded-xl border border-white/20 bg-white/5 backdrop-blur-md text-white transition-all text-xs font-bold shadow-lg inline-flex items-center justify-center cursor-pointer"
            >
              DOWNLOAD RESUME
            </motion.a>
          </motion.div>

          {/* ── Social Links ───────────────────────────────── */}
          <motion.div
            variants={itemVariants}
            className="flex items-center gap-3.5 justify-center md:justify-start w-full mt-8 md:mt-10"
          >
            {[
              {
                href: 'https://github.com/sudo-aadarsh',
                label: 'GitHub',
                icon: (
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                  </svg>
                ),
              },
              {
                href: 'https://www.instagram.com/aadarsh.jha_/',
                label: 'Instagram',
                icon: (
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                ),
              },
              {
                href: 'https://www.linkedin.com/in/aadarsh-jha-b87a6b26b/',
                label: 'LinkedIn',
                icon: (
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                ),
              },
            ].map(({ href, label, icon }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                title={label}
                whileHover={{ scale: 1.12, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="w-11 h-11 rounded-xl flex items-center justify-center border border-white/10 bg-white/5 backdrop-blur-md text-slate-300 hover:text-neon-cyan hover:border-neon-cyan/40 hover:bg-neon-cyan/10 hover:shadow-[0_0_18px_rgba(0,240,255,0.25)] transition-all duration-300 cursor-pointer"
              >
                {icon}
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative flex justify-center md:justify-end order-2 md:order-2 lg:pr-12"
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
                src="/profile.jpg" 
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
