import React from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt, FaGithub, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="section-card">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Contact Me</h2>
        <div className="w-24 h-1.5 bg-neon-cyan mx-auto rounded-full"></div>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-20">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-white mb-8">Get In Touch</h3>
          <p className="text-gray-400 text-lg mb-10 leading-relaxed">
            I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions. Let's build something amazing together!
          </p>

          <div className="space-y-8">
            <div className="flex items-center gap-6 group">
              <div className="p-4 bg-white/5 rounded-2xl text-neon-cyan border border-white/5 group-hover:bg-neon-cyan group-hover:text-black transition-all duration-300">
                <FaEnvelope size={24} />
              </div>
              <div>
                <p className="text-sm text-gray-500 font-bold uppercase tracking-wider mb-1">Email Me</p>
                <p className="text-white text-lg font-medium">jhaaadarsh2988@gmail.com</p>
              </div>
            </div>

            <div className="flex items-center gap-6 group">
              <div className="p-4 bg-white/5 rounded-2xl text-neon-cyan border border-white/5 group-hover:bg-neon-cyan group-hover:text-black transition-all duration-300">
                <FaPhoneAlt size={24} />
              </div>
              <div>
                <p className="text-sm text-gray-500 font-bold uppercase tracking-wider mb-1">Call Me</p>
                <p className="text-white text-lg font-medium">+91 XX XX XX XX XX</p>
              </div>
            </div>

            <div className="flex items-center gap-6 group">
              <div className="p-4 bg-white/5 rounded-2xl text-neon-cyan border border-white/5 group-hover:bg-neon-cyan group-hover:text-black transition-all duration-300">
                <FaMapMarkerAlt size={24} />
              </div>
              <div>
                <p className="text-sm text-gray-500 font-bold uppercase tracking-wider mb-1">Location</p>
                <p className="text-white text-lg font-medium">India</p>
              </div>
            </div>
          </div>

          <div className="mt-16">
            <p className="text-white font-bold text-xl mb-8">Follow My Journey</p>
            <div className="flex gap-5">
              {[
                { icon: <FaGithub size={22} />, link: 'https://github.com/sudo-aadarsh' },
                { icon: <FaLinkedinIn size={22} />, link: '#' },
                { icon: <FaInstagram size={22} />, link: '#' },
              ].map((social, i) => (
                <a 
                  key={i} 
                  href={social.link} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-14 h-14 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center text-gray-400 hover:text-black hover:bg-neon-cyan hover:border-neon-cyan hover:-translate-y-1 transition-all duration-300 shadow-xl"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white/5 p-10 md:p-14 rounded-[40px] border border-white/5 shadow-inner"
        >
          <form className="space-y-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <label className="block text-sm font-bold text-gray-500 uppercase tracking-widest mb-3">Your Name</label>
                <input 
                  type="text" 
                  className="w-full bg-dark-bg/50 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-neon-cyan transition-all placeholder:text-gray-700"
                  placeholder="Aadarsh Jha"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-500 uppercase tracking-widest mb-3">Your Email</label>
                <input 
                  type="email" 
                  className="w-full bg-dark-bg/50 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-neon-cyan transition-all placeholder:text-gray-700"
                  placeholder="hello@aadarsh.dev"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-bold text-gray-500 uppercase tracking-widest mb-3">Message</label>
              <textarea 
                rows="6"
                className="w-full bg-dark-bg/50 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-neon-cyan transition-all resize-none placeholder:text-gray-700"
                placeholder="How can we collaborate?"
              ></textarea>
            </div>
            <button 
              type="submit" 
              className="w-full bg-neon-cyan text-black font-extrabold text-lg py-5 rounded-2xl hover:bg-white transition-all shadow-[0_0_30px_rgba(0,212,255,0.2)] transform hover:-translate-y-1"
            >
              Send Message
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
