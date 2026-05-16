import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  const scrollToProjects = () => {
    const element = document.getElementById('project');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const downloadCV = () => {
    alert('CV download initiated.');
  };

  return (
    <section id="home" className="min-h-[85vh] flex items-center relative">
      {/* Background Soft Glow Effect from reference */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-neon-cyan/5 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="w-full grid md:grid-cols-2 gap-16 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-neon-cyan text-xs font-medium mb-8">
            <span className="w-2 h-2 bg-neon-cyan rounded-full animate-pulse"></span>
            "Avoid or just undertake it"
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-3 leading-[1.2]">
            Hi, I'm <span className="text-neon-cyan">Aadarsh</span>
          </h1>
          <p className="text-xs md:text-sm text-slate-400 mb-6 max-w-sm leading-relaxed">
            System Design Enthusiast and Developer passionate about web development and modern technologies. 
            I build responsive, high-performance applications.
          </p>
          <div className="flex flex-wrap gap-4">
            <button 
              onClick={downloadCV}
              className="px-6 py-3 rounded-lg border border-white/20 text-white hover:bg-white/5 transition-all text-sm font-medium"
            >
              Download CV
            </button>
            <button 
              onClick={scrollToProjects}
              className="px-6 py-3 rounded-lg bg-neon-cyan text-black hover:bg-white transition-all text-sm font-bold shadow-[0_0_20px_rgba(0,240,255,0.3)]"
            >
              Explore My Projects
            </button>
          </div>

        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative flex justify-center"
        >
          <div className="relative w-72 h-72 md:w-[480px] md:h-[480px] group cursor-pointer">
            {/* The soft teal glow effect from screenshot */}
            <div className="absolute -inset-4 bg-neon-cyan/40 rounded-[80px] blur-[40px] opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
            
            <div className="relative z-10 w-full h-full rounded-[80px] border border-white/10 overflow-hidden shadow-2xl bg-[#0d1f27]">
              <img 
                src="https://github.com/sudo-aadarsh.png" 
                alt="Aadarsh Jha" 
                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
