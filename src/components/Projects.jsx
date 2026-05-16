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

const ProjectCard = ({ project }) => {
  const [imageError, setImageError] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.98 }}
      className="bg-dark-card/40 rounded-lg overflow-hidden border border-white/5 hover:border-neon-cyan/30 transition-all group flex flex-col h-full shadow-md"
    >
      <div className="h-32 overflow-hidden relative bg-dark-bg/80">
        {project.image && !imageError ? (
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center p-4 text-center bg-gradient-to-br from-dark-card to-dark-bg relative overflow-hidden group-hover:scale-105 transition-transform duration-500">
            <div className="absolute -right-4 -top-4 opacity-[0.03] rotate-12">
               <FaGithub size={100} />
            </div>
            <div className="relative z-10 flex flex-col items-center">
              <FaGithub size={24} className="text-neon-cyan/80 mb-2" />
              <h4 className="text-[11px] font-bold text-white/90 line-clamp-1">{project.title}</h4>
              <p className="text-[9px] text-gray-400 line-clamp-1 mt-1">{project.description}</p>
            </div>
            <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-neon-cyan/20 to-transparent"></div>
          </div>
        )}
        <div className="absolute inset-0 bg-dark-bg/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3 z-20">
          <a href={project.github} target="_blank" rel="noopener noreferrer" className="p-1.5 bg-white rounded-full text-black hover:bg-neon-cyan transition-colors">
            <FaGithub size={14} />
          </a>
          <a href={project.demo} target="_blank" rel="noopener noreferrer" className="p-1.5 bg-white rounded-full text-black hover:bg-neon-cyan transition-colors">
            <FaExternalLinkAlt size={14} />
          </a>
        </div>
      </div>

      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-sm font-bold mb-1 group-hover:text-neon-cyan transition-colors line-clamp-1">{project.title}</h3>
        <p className="text-[10px] opacity-60 mb-3 line-clamp-2 leading-relaxed h-7">{project.description}</p>
        
        <div className="mt-auto">
          <div className="flex flex-wrap gap-1 mb-3">
            {project.tags.slice(0, 3).map((tag, i) => (
              <span key={i} className="px-1.5 py-0.5 bg-neon-cyan/5 rounded text-[9px] text-neon-cyan border border-neon-cyan/10">
                {tag}
              </span>
            ))}
          </div>

          <div className="flex justify-between items-center pt-3 border-t border-white/5">
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="opacity-50 hover:opacity-100 transition-opacity flex items-center gap-1.5 text-[9px]">
              <FaGithub size={12} /> Code
            </a>
            <a href={project.demo} target="_blank" rel="noopener noreferrer" className="opacity-50 hover:opacity-100 transition-opacity flex items-center gap-1.5 text-[9px]">
              <FaExternalLinkAlt size={12} /> View
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
    <section id="project" className="py-12">
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-center mb-8"
      >
        <h2 className="text-2xl md:text-3xl font-bold mb-2">My Projects</h2>
        <div className="w-12 h-1 bg-neon-cyan mx-auto rounded-full mb-4"></div>
      </motion.div>

      {loading ? (
        <div className="flex justify-center py-10">
          <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-neon-cyan"></div>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
            <AnimatePresence mode='popLayout'>
              {projects.slice(0, visibleCount).map((project) => (
                <ProjectCard key={project.originalName} project={project} />
              ))}
            </AnimatePresence>
          </div>

          <div className="mt-8 text-center flex justify-center gap-3">
            {visibleCount < projects.length && (
              <button 
                onClick={showMore}
                className="px-6 py-2 rounded-md border border-neon-cyan text-neon-cyan hover:bg-neon-cyan hover:text-black transition-all text-[11px] font-bold"
              >
                More Projects
              </button>
            )}
            {visibleCount > 6 && (
              <button 
                onClick={showLess}
                className="px-6 py-2 rounded-md border border-white/10 text-white/50 hover:bg-white/5 transition-all text-[11px] font-bold"
              >
                Show Less
              </button>
            )}
          </div>
        </>
      )}
    </section>
  );
};

export default Projects;
