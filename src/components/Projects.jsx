import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaCode } from 'react-icons/fa';

const PROJECT_CONFIG = {
  'safetrailversion2': { 
    id: '1508739773434-c26b3d09e071', 
    title: 'SafeTrail v2', 
    category: 'Safety & IoT',
    priority: 1,
    description: 'Smart Tourist Safety Monitoring System with real-time geofencing and automated distress alerts.' 
  },
  'safetrail': { 
    id: '1465146344425-f00d5f5c8f07', 
    title: 'SafeTrail', 
    category: 'Safety & IoT',
    priority: 1.5,
    description: 'Smart Tourist Safety Monitoring System with GPS tracking and alert mechanisms.' 
  },
  'netwatch': { 
    id: '1451187580459-43490279c0fa', 
    title: 'NetWatch', 
    category: 'Networking & 3D',
    priority: 2,
    description: 'Real-time BGP internet traffic visualizer on a Three.js 3D globe with latency anomaly detection.' 
  },
  'recall': { 
    id: '1620712943543-bcc4688e7485', 
    title: 'Recall AI', 
    category: 'AI & Knowledge',
    priority: 3,
    description: 'AI-first note-taking and knowledge engine that connects thoughts using neural embeddings.' 
  },
  'dropsh': { 
    id: '1558494949-ef010cbdcc31', 
    title: 'Drop Sh', 
    category: 'Cloud & Sharing',
    priority: 4,
    description: 'Instant, encrypted peer-to-peer file sharing web application with zero friction.' 
  },
  'moviehub': { 
    id: '1574375927938-d5a98e8ffe85', 
    title: 'MovieHub', 
    category: 'Full Stack & Media',
    priority: 5,
    description: 'Cinematic Netflix-style movie streaming platform with TMDB metadata sync and multi-source streaming.' 
  },
  'websecure': { 
    id: '1550751827-4bd374c3f58b', 
    title: 'WebSecure Scanner', 
    category: 'Cybersecurity',
    priority: 6,
    description: 'Cloud-native DAST SaaS platform automating vulnerability discovery and AI false-positive filtering.' 
  },
  'project1portfolio': { 
    id: '1555066931-4365d14bab8c', 
    title: 'Developer Portfolio', 
    category: 'Frontend & UI/UX',
    priority: 7,
    description: 'Sleek, reactive developer portfolio built with React 19, Vite, Tailwind CSS, and Framer Motion.' 
  },
  'agrichain': { 
    id: '1625246333195-78d9c38ad449', 
    title: 'AgriChain', 
    category: 'Web3 & Blockchain',
    priority: 8,
    description: 'Track agricultural produce from farm to consumer on Polygon blockchain with anti-fraud verification.' 
  },
  'codedna': { 
    id: '1530497610245-94d3c16cda28', 
    title: 'Code DNA', 
    category: 'Algorithms & AI',
    priority: 9,
    description: 'Genetic programming evolutionary engine producing symbolic regression programs through natural selection.' 
  },
  'slacksimulatoragent': { 
    id: '1635070041078-e363dbe005cb', 
    title: 'Slack Simulink Agent', 
    category: 'Simulation & Bots',
    priority: 10,
    description: 'Interactive Slack bot rendering real-time physics simulations and differential equation visualizations.' 
  },
  'researchcollabhub': { 
    id: '1532094349884-543bc11b234d', 
    title: 'Research Collab Hub', 
    category: 'AI & Research',
    priority: 11,
    description: 'Collaborative research paper and resource workspace powered by Groq-accelerated AI models.' 
  },
  'dineview': { 
    id: '1517248135467-4c7edcad34c4', 
    title: 'DineView AR', 
    category: 'Augmented Reality',
    priority: 12,
    description: 'Contactless QR restaurant ordering web application featuring interactive 3D AR menu previews.' 
  },
  'examseat': { 
    id: '1434030216411-0b793f4b4173', 
    title: 'ExamSeat', 
    category: 'Systems & EdTech',
    priority: 13,
    description: 'Automated algorithm allocating conflict-free exam hall seating arrangements for academic institutions.' 
  },
  'ytautomation': { 
    id: '1611162617213-7d7a39e9b1d7', 
    title: 'YouTube Automation', 
    category: 'Automation & Media',
    priority: 14,
    description: 'High-throughput automated video publishing and scheduling pipeline for YouTube channels.' 
  },
  'ytautomation2': { 
    id: '1611162617213-7d7a39e9b1d7', 
    title: 'YouTube Automation v2', 
    category: 'Automation & Media',
    priority: 15,
    description: 'Enhanced video pipeline featuring automated thumbnail generation and telemetry analytics.' 
  },
  'linkedinautomation': { 
    id: '1611944212129-29977ae1398c', 
    title: 'LinkedIn Automation', 
    category: 'Automation & Python',
    priority: 16,
    description: 'Automated posting assistant and document publisher using Playwright headless browser control.' 
  },
  'somethingforyou': { 
    id: '1549465220-1a8b9238cd48', 
    title: 'Something For You', 
    category: 'Interactive Web',
    priority: 17,
    description: 'Personalized interactive celebration and surprise experience crafted with animations.' 
  },
  'studentsafety': { 
    id: '1523240795612-9a054b0db644', 
    title: 'Campus Safety', 
    category: 'Safety Systems',
    priority: 18,
    description: 'Campus emergency broadcast and real-time student incident reporting system.' 
  },
  'webfort': { 
    id: '1550751827-4bd374c3f58b', 
    title: 'WebFort', 
    category: 'Cybersecurity',
    priority: 19,
    description: 'Enterprise-grade web vulnerability scanner with automated reporting.' 
  },
  'firstcontributions': { 
    id: '1522071820081-009f0129c71c', 
    title: 'First Contributions', 
    category: 'Open Source',
    priority: 20,
    description: 'Open source mentorship and contributor gateway for emerging developers.' 
  },
  'pullshark': { 
    id: '1522071820081-009f0129c71c', 
    title: 'Pull Shark', 
    category: 'Open Source',
    priority: 21,
    description: 'GitHub achievements, pull request workflows, and automation tooling.' 
  },
  'demo': { 
    id: '1526374965328-7f61d4dc18c5', 
    title: 'Tech Sandbox', 
    category: 'Experimentation',
    priority: 99,
    description: 'Rapid prototyping sandbox for experimenting with cutting-edge frontend patterns and libraries.' 
  }
};

const getContextualImageId = (name, description = '', language = '') => {
  const text = `${name} ${description} ${language}`.toLowerCase();
  if (text.includes('ai') || text.includes('bot') || text.includes('intel') || text.includes('agent')) return '1620712943543-bcc4688e7485';
  if (text.includes('security') || text.includes('safe') || text.includes('vuln') || text.includes('shield')) return '1550751827-4bd374c3f58b';
  if (text.includes('trail') || text.includes('tourist') || text.includes('outdoor')) return '1508739773434-c26b3d09e071';
  if (text.includes('traffic') || text.includes('network') || text.includes('globe') || text.includes('routing')) return '1451187580459-43490279c0fa';
  if (text.includes('video') || text.includes('movie') || text.includes('stream') || text.includes('youtube')) return '1574375927938-d5a98e8ffe85';
  if (text.includes('chain') || text.includes('crypto') || text.includes('polygon') || text.includes('block')) return '1625246333195-78d9c38ad449';
  if (text.includes('share') || text.includes('drop') || text.includes('file')) return '1558494949-ef010cbdcc31';
  if (text.includes('portfolio') || text.includes('resume') || text.includes('personal')) return '1555066931-4365d14bab8c';
  if (text.includes('restaurant') || text.includes('food') || text.includes('dine')) return '1517248135467-4c7edcad34c4';
  if (text.includes('exam') || text.includes('seat') || text.includes('school') || text.includes('student')) return '1434030216411-0b793f4b4173';
  return '1526374965328-7f61d4dc18c5';
};

const ProjectCard = ({ project, index }) => {
  const [imageError, setImageError] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      viewport={{ once: true }}
      whileHover={{ y: -8 }}
      className="bg-dark-card/40 rounded-2xl overflow-hidden border border-white/5 hover:border-neon-cyan/40 transition-all group flex flex-col h-full shadow-lg hover:shadow-[0_12px_32px_rgba(0,240,255,0.12)]"
    >
      <div className="h-48 overflow-hidden relative bg-dark-bg/90">
        {project.category && (
          <div className="absolute top-3 left-3 z-20 pointer-events-none">
            <span className="px-2.5 py-1 rounded-md text-[9px] font-black uppercase tracking-wider bg-black/75 backdrop-blur-md text-neon-cyan border border-neon-cyan/30 shadow-lg">
              {project.category}
            </span>
          </div>
        )}

        {project.image && !imageError ? (
          <>
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out brightness-[0.92] group-hover:brightness-105 contrast-[1.08]"
              loading="lazy"
              onError={() => setImageError(true)}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-[#020617]/25 to-transparent pointer-events-none" />
          </>
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center p-4 text-center bg-gradient-to-br from-dark-card to-dark-bg relative overflow-hidden group-hover:scale-105 transition-transform duration-700">
            <div className="absolute -right-4 -top-4 opacity-[0.05] rotate-12">
               <FaCode size={120} />
            </div>
            <div className="relative z-10 flex flex-col items-center">
              <div className="w-10 h-10 rounded-full bg-neon-cyan/10 border border-neon-cyan/20 flex items-center justify-center mb-2">
                <FaCode size={18} className="text-neon-cyan" />
              </div>
              <h4 className="text-xs font-bold text-white/90 line-clamp-1 px-4">{project.title}</h4>
              <p className="text-[10px] text-gray-400 line-clamp-1 mt-1">{project.description}</p>
            </div>
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-neon-cyan/30 to-transparent"></div>
          </div>
        )}
        <div className="absolute inset-0 bg-dark-bg/65 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center gap-4 z-20 backdrop-blur-[2px]">
          <motion.a 
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.9 }}
            href={project.github} target="_blank" rel="noopener noreferrer" className="p-2.5 bg-white rounded-full text-black hover:bg-neon-cyan transition-colors shadow-lg"
          >
            <FaGithub size={18} />
          </motion.a>
          <motion.a 
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.9 }}
            href={project.demo} target="_blank" rel="noopener noreferrer" className="p-2.5 bg-white rounded-full text-black hover:bg-neon-cyan transition-colors shadow-lg"
          >
            <FaExternalLinkAlt size={18} />
          </motion.a>
        </div>
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-lg font-bold mb-2 group-hover:text-neon-cyan transition-colors line-clamp-1 tracking-tight">{project.title}</h3>
        <p className="text-xs opacity-60 mb-5 line-clamp-2 leading-relaxed h-8">{project.description}</p>
        
        <div className="mt-auto">
          <div className="flex flex-wrap gap-2 mb-5">
            {project.tags.slice(0, 3).map((tag, i) => (
              <span key={i} className="px-2.5 py-0.5 bg-neon-cyan/5 rounded-full text-[10px] text-neon-cyan border border-neon-cyan/10 font-bold uppercase tracking-tighter">
                {tag}
              </span>
            ))}
          </div>

          <div className="flex justify-between items-center pt-4 border-t border-white/5">
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="opacity-50 hover:opacity-100 transition-all flex items-center gap-2 text-xs font-bold uppercase tracking-widest">
              <FaGithub size={14} /> Code
            </a>
            <a href={project.demo} target="_blank" rel="noopener noreferrer" className="opacity-50 hover:opacity-100 transition-all flex items-center gap-2 text-xs font-bold uppercase tracking-widest">
              <FaExternalLinkAlt size={14} /> View
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [visibleCount, setVisibleCount] = useState(6);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch('https://api.github.com/users/sudo-aadarsh/repos?sort=updated&per_page=100');
        const data = await response.json();
        const filteredRepos = data.filter(repo => !repo.fork && repo.name !== 'sudo-aadarsh');
        
        const formattedProjects = filteredRepos.map(repo => {
          const normalizedKey = repo.name.toLowerCase().replace(/[^a-z0-9]/g, '');
          const config = PROJECT_CONFIG[normalizedKey] || PROJECT_CONFIG[repo.name.toLowerCase()] || {};
          const imageId = config.id || getContextualImageId(repo.name, repo.description, repo.language);
          const imageUrl = `https://images.unsplash.com/photo-${imageId}?auto=format&fit=crop&q=85&w=1200`;

          return {
            title: config.title || repo.name.replace(/[-_]+/g, ' ').trim(),
            originalName: repo.name,
            category: config.category || repo.language || 'Software',
            priority: config.priority !== undefined ? config.priority : 50,
            description: config.description || repo.description || 'A passionate project built with modern technologies.',
            tags: [repo.language].filter(Boolean),
            github: repo.html_url,
            demo: repo.homepage || repo.html_url,
            image: imageUrl,
          };
        });

        formattedProjects.sort((a, b) => a.priority - b.priority);

        setProjects(formattedProjects);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching repositories:', error);
        setLoading(false);
      }
    };
    fetchRepos();
  }, []);

  const showMore = () => setVisibleCount(prev => prev + 6);
  const showLess = () => {
    setVisibleCount(6);
    document.getElementById('project')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="project" className="py-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-5xl font-bold mb-4">My Projects</h2>
        <div className="w-16 h-1 bg-neon-cyan mx-auto rounded-full"></div>
      </motion.div>

      {loading ? (
        <div className="flex justify-center py-20">
          <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-neon-cyan"></div>
        </div>
      ) : (
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode='popLayout'>
              {projects.slice(0, visibleCount).map((project, index) => (
                <ProjectCard key={project.originalName} project={project} index={index % 3} />
              ))}
            </AnimatePresence>
          </div>

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="mt-16 text-center flex justify-center gap-4"
          >
            {visibleCount < projects.length && (
              <motion.button 
                whileHover={{ scale: 1.05, y: -2, backgroundColor: "rgba(0, 240, 255, 0.15)" }}
                whileTap={{ scale: 0.95 }}
                onClick={showMore}
                className="px-8 py-3.5 rounded-xl border border-neon-cyan/40 bg-neon-cyan/5 backdrop-blur-md text-neon-cyan hover:border-neon-cyan transition-all text-xs font-black tracking-widest uppercase shadow-[0_0_20px_rgba(0,240,255,0.1)]"
              >
                Explore More
              </motion.button>
            )}
            {visibleCount > 6 && (
              <motion.button 
                whileHover={{ scale: 1.05, y: -2, backgroundColor: "rgba(255,255,255,0.1)" }}
                whileTap={{ scale: 0.95 }}
                onClick={showLess}
                className="px-8 py-3.5 rounded-xl border border-white/10 bg-white/5 backdrop-blur-md text-white/60 hover:text-white transition-all text-xs font-black tracking-widest uppercase"
              >
                Show Less
              </motion.button>
            )}
          </motion.div>
        </div>
      )}
    </section>
  );
};

export default Projects;
