import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const skills = [
    { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
    { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
    { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
    { name: 'C', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg' },
    { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
    { name: 'GitHub', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
    { name: 'Linux', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section id="about" className="py-10">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">About Me</h2>
          <div className="w-16 h-1 bg-neon-cyan mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p className="text-base md:text-lg text-slate-400 leading-relaxed mb-8">
              I'm <span className="text-white font-bold">Aadarsh Jha</span>, a dedicated developer with a sharp focus on modern web architectures. My journey is fueled by a passion for solving complex problems through elegant code and robust system design.
            </p>
            <p className="text-base md:text-lg text-slate-400 leading-relaxed mb-10">
              I believe in building applications that are not just functional, but also provide a seamless and high-performance user experience.
            </p>

            <div className="grid grid-cols-2 gap-6">
              {[
                { count: '20+', label: 'Projects Done' },
                { count: '2+', label: 'Years Exp.' },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -5, borderColor: 'rgba(0, 240, 255, 0.3)' }}
                  className="bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-white/5 transition-colors"
                >
                  <h3 className="text-2xl md:text-3xl font-black text-neon-cyan mb-1">{stat.count}</h3>
                  <p className="text-gray-500 text-[10px] font-bold uppercase tracking-widest">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-4 gap-4"
          >
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="aspect-square bg-white/5 rounded-2xl border border-white/5 flex flex-col items-center justify-center p-4 group hover:bg-neon-cyan/10 transition-colors"
              >
                <img 
                  src={skill.icon} 
                  alt={skill.name} 
                  className="w-10 h-10 md:w-12 md:h-12 object-contain group-hover:brightness-110 transition-all" 
                />
                <span className="text-[8px] md:text-[10px] text-gray-500 group-hover:text-neon-cyan mt-2 font-bold uppercase tracking-tighter opacity-0 group-hover:opacity-100 transition-opacity">
                  {skill.name}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
