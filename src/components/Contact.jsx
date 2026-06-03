import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt, FaGithub, FaLinkedinIn, FaInstagram, FaCheckCircle, FaExclamationCircle } from 'react-icons/fa';

const Contact = () => {
  const [status, setStatus] = useState({
    submitting: false,
    succeeded: false,
    error: null
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ submitting: true, succeeded: false, error: null });
    
    const form = e.target;
    const formData = new FormData(form);
    
    try {
      // Use environment variable if available, otherwise fallback to the hardcoded ID for deployment
      const formId = import.meta.env.VITE_FORMSPREE_ID || "xgoqwlkz";
      
      if (!formId || formId === "YOUR_FORMSPREE_ID") {
        setStatus({ 
          submitting: false, 
          succeeded: false, 
          error: "Form not configured. Please add your VITE_FORMSPREE_ID." 
        });
        return;
      }

      const response = await fetch(`https://formspree.io/f/${formId}`, {
        method: "POST",
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });
      
      if (response.ok) {
        setStatus({ submitting: false, succeeded: true, error: null });
        form.reset();
      } else {
        const data = await response.json();
        setStatus({ 
          submitting: false, 
          succeeded: false, 
          error: data.errors ? data.errors.map(e => e.message).join(', ') : "Something went wrong. Please try again." 
        });
      }
    } catch (error) {
      setStatus({ 
        submitting: false, 
        succeeded: false, 
        error: "Failed to send message. Please check your internet connection." 
      });
    }
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
    <section id="contact" className="py-10 relative overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute left-[-10%] bottom-0 w-[500px] h-[500px] bg-neon-cyan/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Contact Me</h2>
          <div className="w-16 h-1 bg-neon-cyan mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-start">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.1 }}
          >
            <motion.h3 variants={itemVariants} className="text-2xl md:text-3xl font-bold text-white mb-4 text-center lg:text-left tracking-tight">
              Let's build something <span className="text-neon-cyan italic">extraordinary</span> together.
            </motion.h3>
            <motion.p variants={itemVariants} className="text-slate-400 text-sm md:text-base mb-10 leading-relaxed text-center lg:text-left max-w-lg">
              I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
            </motion.p>

            <div className="space-y-6">
              {[
                { icon: <FaEnvelope size={18} />, label: 'Email Me', value: 'jhaaadarsh2988@gmail.com' },
                { icon: <FaMapMarkerAlt size={18} />, label: 'Location', value: 'India' },
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  variants={itemVariants}
                  whileHover={{ x: 10 }}
                  className="flex items-center gap-4 group cursor-pointer"
                >
                  <div className="p-3 bg-white/5 rounded-2xl text-neon-cyan border border-white/5 group-hover:bg-neon-cyan group-hover:text-black transition-all duration-300">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">{item.label}</p>
                    <p className="text-white text-sm md:text-base font-medium transition-colors group-hover:text-neon-cyan">{item.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div variants={itemVariants} className="mt-12 text-center lg:text-left">
              <p className="text-white font-bold text-base mb-6">Follow My Journey</p>
              <div className="flex justify-center lg:justify-start gap-4">
                {[
                  { icon: <FaGithub size={20} />, link: 'https://github.com/sudo-aadarsh' },
                  { icon: <FaLinkedinIn size={20} />, link: 'https://www.linkedin.com/in/aadarsh-jha-b87a6b26b/' },
                  { icon: <FaInstagram size={20} />, link: 'https://www.instagram.com/im_adars_h/' },
                ].map((social, i) => (
                  <motion.a 
                    key={i} 
                    whileHover={{ y: -5, scale: 1.1, backgroundColor: 'rgba(0, 240, 255, 1)', color: '#000' }}
                    whileTap={{ scale: 0.9 }}
                    href={social.link} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center text-gray-400 transition-all duration-300 shadow-lg"
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="bg-white/5 p-8 md:p-12 rounded-[40px] border border-white/5 backdrop-blur-xl relative group"
          >
            <div className="absolute -inset-1 bg-gradient-to-br from-neon-cyan/20 to-transparent rounded-[40px] blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            
            {status.succeeded ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="relative z-10 flex flex-col items-center justify-center py-12 text-center"
              >
                <div className="w-20 h-20 bg-neon-cyan/20 rounded-full flex items-center justify-center text-neon-cyan mb-6">
                  <FaCheckCircle size={40} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
                <p className="text-slate-400 mb-8">Thank you for reaching out. I'll get back to you soon.</p>
                <button 
                  onClick={() => setStatus({ ...status, succeeded: false })}
                  className="px-8 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl text-white transition-all"
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              <form 
                onSubmit={handleSubmit}
                className="space-y-6 relative z-10"
              >
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-2">Your Name</label>
                    <input 
                      type="text" 
                      name="name"
                      required
                      className="w-full bg-dark-bg/50 border border-white/10 rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-neon-cyan transition-all placeholder:text-gray-700 text-sm"
                      placeholder="Aadarsh Jha"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-2">Your Email</label>
                    <input 
                      type="email" 
                      name="email"
                      required
                      className="w-full bg-dark-bg/50 border border-white/10 rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-neon-cyan transition-all placeholder:text-gray-700 text-sm"
                      placeholder="hello@aadarsh.dev"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-2">Message</label>
                  <textarea 
                    name="message"
                    required
                    rows="5"
                    className="w-full bg-dark-bg/50 border border-white/10 rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-neon-cyan transition-all resize-none placeholder:text-gray-700 text-sm"
                    placeholder="How can we collaborate?"
                  ></textarea>
                </div>

                {status.error && (
                  <motion.div 
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-3 text-red-400 text-sm bg-red-400/10 p-4 rounded-xl border border-red-400/20"
                  >
                    <FaExclamationCircle className="shrink-0" />
                    <p>{status.error}</p>
                  </motion.div>
                )}

                <motion.button 
                  whileHover={!status.submitting ? { scale: 1.02, y: -2, backgroundColor: "rgba(0, 240, 255, 0.95)" } : {}}
                  whileTap={!status.submitting ? { scale: 0.98 } : {}}
                  disabled={status.submitting}
                  type="submit" 
                  className={`w-full ${status.submitting ? 'bg-neon-cyan/50 cursor-not-allowed' : 'bg-neon-cyan/90'} backdrop-blur-md text-black font-black text-sm uppercase tracking-widest py-5 rounded-2xl border border-white/10 transition-all shadow-[0_0_30px_rgba(0,212,255,0.25)] flex items-center justify-center gap-3`}
                >
                  {status.submitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-black/30 border-t-black rounded-full animate-spin"></div>
                      Sending...
                    </>
                  ) : 'Send Message'}
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
