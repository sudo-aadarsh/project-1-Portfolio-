import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const skills = [
    { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
    { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
    { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
    { name: 'Tailwind', icon: 'https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg' },
    { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
    { name: 'GitHub', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
    { name: 'Blockchain', icon: 'https://cdn-icons-png.flaticon.com/512/2091/2091665.png' },
    { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
    { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
    { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
    { name: 'Tailwind', icon: 'https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg' },
    { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
    { name: 'GitHub', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
    { name: 'Blockchain', icon: 'https://cdn-icons-png.flaticon.com/512/2091/2091665.png' },
  ];

  return (
    <section id="about" className="section-card !p-10 md:!p-16 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mb-12 flex flex-col items-center"
      >
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">About Me</h2>
        <div className="w-16 h-1 bg-neon-cyan rounded-full"></div>
      </motion.div>

      <div className="max-w-4xl mx-auto flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="w-full"
        >
          <p className="text-sm md:text-base text-slate-400 leading-relaxed mb-12 max-w-2xl mx-auto">
            I'm <span className="text-white font-bold">Aadarsh Jha</span>, a Computer Science student passionate about building modern, high-performance web applications. 
            I enjoy working with the latest technologies and continuously improving my skills.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 w-full max-w-2xl mx-auto">
            <div className="bg-white/5 backdrop-blur-[20px] p-8 rounded-[32px] border border-white/5 hover:border-neon-cyan/50 hover:shadow-[0_0_25px_rgba(0,240,255,0.15)] transition-all group">
              <h3 className="text-3xl font-extrabold text-neon-cyan mb-2">20<span className="text-white">+</span></h3>
              <p className="text-slate-400 text-xs font-medium uppercase tracking-widest">Projects Completed</p>
            </div>
            <div className="bg-white/5 backdrop-blur-[20px] p-8 rounded-[32px] border border-white/5 hover:border-neon-cyan/50 hover:shadow-[0_0_25px_rgba(0,240,255,0.15)] transition-all group">
              <h3 className="text-3xl font-extrabold text-neon-cyan mb-2">2<span className="text-white">+</span></h3>
              <p className="text-slate-400 text-xs font-medium uppercase tracking-widest">Years of Experience</p>
            </div>
          </div>
        </motion.div>

        <div className="relative mt-8 w-full overflow-hidden py-6">
          <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#0d1f27] to-transparent z-10"></div>
          <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#0d1f27] to-transparent z-10"></div>
          
          <motion.div 
            className="flex gap-16 items-center"
            animate={{ x: [0, -1000] }}
            transition={{ x: { repeat: Infinity, repeatType: "loop", duration: 35, ease: "linear" }}}
            style={{ width: "fit-content" }}
          >
            {skills.map((skill, index) => (
              <div key={index} className="flex-shrink-0 w-12 h-12 flex items-center justify-center p-1 group transition-all duration-500">
                <img 
                  src={skill.icon} 
                  alt={skill.name} 
                  className="w-full h-full object-contain group-hover:scale-110 transition-transform" 
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
