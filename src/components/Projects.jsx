import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const PROJECT_CONFIG = {
  'moviehub': { id: '1485846234645-a62644f84728', title: 'MovieHub' },
  'drop-sh': { id: '1563986768609-322da13575f3', title: 'Drop Sh' },
  'research-collab-hub': { id: '1454165833467-12a0d3d4296c', title: 'Research Collab Hub' },
  'webfort': { id: '1550751827-4bd374c3f58b', title: 'WebFort' },
  'examseat': { id: '1434031219348-1dfa497323f1', title: 'ExamSeat' },
  'safetrail': { id: '1464822759023-fed622ff5c3b', title: 'SafeTrail' },
  'agrichain': { id: '1508921234172-b68ed335b3e6', title: 'AgriChain' },
  'code_dna': { id: '1614850523296-e8c041df43a9', title: 'Code DNA' },
  'internet_traffic_visualizer': { id: '1518186239751-dc0d67bb166e', title: 'Traffic Visualizer' },
  'dineview': { id: '1517248135467-4c7ed9d42c77', title: 'DineView' },
  'somethingforyou': { id: '1513201099681-44467d01e55e', title: 'SomethingForYou' }
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
            <div className="absolute -right-4 -top-4 opacity-[0.03] rotate-12">
               <FaGithub size={120} />
            </div>
            <div className="relative z-10 flex flex-col items-center">
              <FaGithub size={32} className="text-neon-cyan/50 mb-3" />
              <h4 className="text-xs font-bold text-white/80 line-clamp-1 px-4">{project.title}</h4>
              <p className="text-[10px] text-gray-500 line-clamp-1 mt-1">{project.description}</p>
            </div>
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-neon-cyan/20 to-transparent"></div>
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
          const repoNameLower = repo.name.toLowerCase();
          const config = PROJECT_CONFIG[repoNameLower] || {};
          const imageId = config.id;
          const imageUrl = imageId ? `https://images.unsplash.com/photo-${imageId}?auto=format&fit=crop&q=80&w=800` : null;

          return {
            title: config.title || repo.name.replace(/-/g, ' ').replace(/_/g, ' '),
            originalName: repo.name,
            description: repo.description || 'A passionate project built with modern technologies.',
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
