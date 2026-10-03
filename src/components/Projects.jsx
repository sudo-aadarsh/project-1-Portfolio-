import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaCode } from 'react-icons/fa';

const PROJECT_CONFIG = {
  'safetrailversion2': { id: '1551632811-561732d1e306', title: 'SafeTrail v2', description: 'Smart Tourist Safety Monitoring System' },
  'safetrail': { id: '1551632811-561732d1e306', title: 'SafeTrail', description: 'Smart Tourist Safety Monitoring System' },
  'dropsh': { id: '1563986768609-322da13575f3', title: 'Drop Sh', description: 'Instant peer-to-peer file sharing web application' },
  'netwatch': { id: '1451187580459-43490279c0fa', title: 'NetWatch', description: 'Real-Time Internet Traffic Visualizer on a 3D globe' },
  'recall': { id: '1618005182384-a83a8bd57fbe', title: 'Recall AI', description: 'The AI-Native Knowledge Base & Second Brain' },
  'project1portfolio': { id: '1507238691740-187a5b1d37b8', title: 'Developer Portfolio', description: 'Modern, high-performance developer portfolio' },
  'demo': { id: '1555066931-4365d14bab8c', title: 'Interactive Demo', description: 'Interactive tech playground and code sandbox' },
  'slacksimulatoragent': { id: '1635070041078-e363dbe005cb', title: 'Slack Simulink Agent', description: 'Visual physics & system simulation directly in Slack' },
  'ytautomation': { id: '1611162617213-7d7a39e9b1d7', title: 'YouTube Automation', description: 'Workflow automation suite for YouTube channels' },
  'ytautomation2': { id: '1611162617213-7d7a39e9b1d7', title: 'YouTube Automation v2', description: 'Enhanced YouTube video automation pipeline' },
  'linkedinautomation': { id: '1611944212129-29977ae1398c', title: 'LinkedIn Automation', description: 'Personal assistant automation for LinkedIn' },
  'researchcollabhub': { id: '1532094349884-543bc11b234d', title: 'Research Collab Hub', description: 'Collaborative research paper management with Groq AI' },
  'somethingforyou': { id: '1549465220-1a8b9238cd48', title: 'Something For You', description: 'Interactive surprise celebration web experience' },
  'websecure': { id: '1550751827-4bd374c3f58b', title: 'WebSecure Scanner', description: 'Enterprise-grade DAST web vulnerability scanner' },
  'webfort': { id: '1550751827-4bd374c3f58b', title: 'WebFort', description: 'Enterprise-grade web vulnerability scanner' },
  'studentsafety': { id: '1523240795612-9a054b0db644', title: 'Campus Safety', description: 'Campus student safety and incident reporting platform' },
  'moviehub': { id: '1574375927938-d5a98e8ffe85', title: 'MovieHub', description: 'Full-stack cinematic Netflix-style movie streaming platform' },
  'examseat': { id: '1434030216411-0b793f4b4173', title: 'ExamSeat', description: 'Intelligent seating arrangement system for examinations' },
  'agrichain': { id: '1508921234172-b68ed335b3e6', title: 'AgriChain', description: 'Blockchain produce tracking on Polygon with fraud detection' },
  'codedna': { id: '1530497610245-94d3c16cda28', title: 'Code DNA', description: 'Genetic programming & symbolic regression evolutionary engine' },
  'dineview': { id: '1517248135467-4c7edcad34c4', title: 'DineView AR', description: 'QR-based restaurant ordering web app with AR menu viewing' },
  'firstcontributions': { id: '1522071820081-009f0129c71c', title: 'First Contributions', description: 'Open source mentorship and contributor gateway' },
  'pullshark': { id: '1522071820081-009f0129c71c', title: 'Pull Shark', description: 'GitHub achievements and automation tools' }
};

const getContextualImageId = (name, description = '', language = '') => {
  const text = `${name} ${description} ${language}`.toLowerCase();
  if (text.includes('ai') || text.includes('bot') || text.includes('intel') || text.includes('agent')) return '1677442136019-21780ecad995';
  if (text.includes('security') || text.includes('safe') || text.includes('vuln') || text.includes('shield')) return '1550751827-4bd374c3f58b';
  if (text.includes('trail') || text.includes('tourist') || text.includes('outdoor')) return '1551632811-561732d1e306';
  if (text.includes('traffic') || text.includes('network') || text.includes('globe') || text.includes('routing')) return '1451187580459-43490279c0fa';
  if (text.includes('video') || text.includes('movie') || text.includes('stream') || text.includes('youtube')) return '1574375927938-d5a98e8ffe85';
  if (text.includes('chain') || text.includes('crypto') || text.includes('polygon') || text.includes('block')) return '1508921234172-b68ed335b3e6';
  if (text.includes('share') || text.includes('drop') || text.includes('file')) return '1563986768609-322da13575f3';
  if (text.includes('portfolio') || text.includes('resume') || text.includes('personal')) return '1507238691740-187a5b1d37b8';
  if (text.includes('restaurant') || text.includes('food') || text.includes('dine')) return '1517248135467-4c7edcad34c4';
  if (text.includes('exam') || text.includes('seat') || text.includes('school') || text.includes('student')) return '1434030216411-0b793f4b4173';
  return '1555066931-4365d14bab8c';
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
      className="bg-dark-card/40 rounded-2xl overflow-hidden border border-white/5 hover:border-neon-cyan/30 transition-all group flex flex-col h-full shadow-lg"
    >
      <div className="h-40 overflow-hidden relative bg-dark-bg/80">
        {project.image && !imageError ? (
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center p-4 text-center bg-gradient-to-br from-dark-card to-dark-bg relative overflow-hidden group-hover:scale-110 transition-transform duration-700">
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
        <div className="absolute inset-0 bg-dark-bg/60 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center gap-4 z-20">
          <motion.a 
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.9 }}
            href={project.github} target="_blank" rel="noopener noreferrer" className="p-2.5 bg-white rounded-full text-black hover:bg-neon-cyan transition-colors"
          >
            <FaGithub size={18} />
          </motion.a>
          <motion.a 
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.9 }}
            href={project.demo} target="_blank" rel="noopener noreferrer" className="p-2.5 bg-white rounded-full text-black hover:bg-neon-cyan transition-colors"
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
          const imageUrl = `https://images.unsplash.com/photo-${imageId}?auto=format&fit=crop&q=80&w=800`;

          return {
            title: config.title || repo.name.replace(/[-_]+/g, ' ').trim(),
            originalName: repo.name,
            description: config.description || repo.description || 'A passionate project built with modern technologies.',
            tags: [repo.language].filter(Boolean),
            github: repo.html_url,
            demo: repo.homepage || repo.html_url,
            image: imageUrl,
          };
        });

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
