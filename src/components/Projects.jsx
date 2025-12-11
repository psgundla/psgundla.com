import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Eye } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import { useInView } from '../hooks/useParallax';

const Projects = () => {
  const { isDark } = useTheme();
  const [ref, inView] = useInView(0.2);
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: 'DILIGENCE - Head & Neck Cancer Detection',
      description: 'Web application for business development model for HNSCC relapses using innovative liquid biopsies.',
      longDescription: 'Developed an application for Business Development model for Head & Neck Squamous Cell Carcinoma (HNSCC) relapses using innovative liquid biopsies.',
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=400&fit=crop',
      technologies: ['AI', 'Machine Learning', 'Web Development', 'Medical Imaging'],
      github: '#',
      live: 'https://biocoderr.github.io/diligence.github.io/',
      category: 'Bioinformatics',
    },
    {
      id: 2,
      title: 'Real-time Biostatistics Analysis',
      description: 'Analysis of lung cancer dataset using R programming.',
      longDescription: 'Collected data from NCBI which have been Preprocessed and Normalized. Dataset GSE3141 Lung Cancer Dataset. Used R programming for analysis and get information from statistics.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
      technologies: ['R', 'Biostatistics', 'NCBI', 'Data Analysis'],
      github: '#',
      live: '#',
      category: 'Data Science',
    },
    {
      id: 3,
      title: 'Cognitive Neuroscience - MATLAB',
      description: 'Power spectral analysis and LFP of mouse behavior.',
      longDescription: 'Using Matlab software to generate customized code for power spectral analysis and the LFP of mouse behavior. Developed code for .abf files and Fast Fourier Transformations and Heat maps.',
      image: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=600&h=400&fit=crop',
      technologies: ['MATLAB', 'Neuroscience', 'FFT', 'Data Visualization'],
      github: '#',
      live: '#',
      category: 'Research',
    },
    {
      id: 4,
      title: 'GeneMark Database Analysis',
      description: 'Gene reading frames alignment using Hidden Markov chain.',
      longDescription: 'Using GeneMark database and how it works. The database uses the Hidden Markov chain to determine the reading frames. Learned the reading frames alignment and to check whether parallel alignment is present or absent.',
      image: 'https://images.unsplash.com/photo-1628595351029-c2bf17511435?w=600&h=400&fit=crop',
      technologies: ['Bioinformatics', 'Hidden Markov Model', 'Gene Analysis'],
      github: '#',
      live: '#',
      category: 'Bioinformatics',
    },
    {
      id: 5,
      title: 'RADAR System with Arduino',
      description: 'Object detection system with alarm warning.',
      longDescription: 'Using Arduino UNO developed the radar system. The system was able to generate the object detection for 0.5mts range and give the alarm for warning. Learned how the radar system detects the objects through the sensor.',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=400&fit=crop',
      technologies: ['Arduino', 'C', 'IoT', 'Sensors'],
      github: '#',
      live: '#',
      category: 'Hardware',
    },
    {
      id: 6,
      title: 'Line Following Robot',
      description: 'Mobility ecosystem with Fuzzy Logic Algorithm.',
      longDescription: 'Using Arduino UNO developed a Line following robot. Implemented Fuzzy Logic Algorithm technique to reduce errors. The robot can detect the black line and follow that line till end without interruption.',
      image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&h=400&fit=crop',
      technologies: ['Arduino', 'Fuzzy Logic', 'Robotics', 'C'],
      github: '#',
      live: 'https://youtu.be/UoOy0ychwoU',
      category: 'Hardware',
    },
    {
      id: 7,
      title: 'Bapp - College Application',
      description: 'Android app for complete offline use.',
      longDescription: 'Using MIT app inventor developed with pre tags. The application is developed for complete offline-use for college management and student information.',
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop',
      technologies: ['Android', 'MIT App Inventor', 'Mobile Development'],
      github: '#',
      live: '#',
      category: 'Mobile',
    },
    {
      id: 8,
      title: 'College Registration Database',
      description: 'Database development using PHP & MySQL.',
      longDescription: 'Using PHP & MySQL developed a form to store the data. This form is used to store various kinds of data to analyze the stats of the students. Learned how to develop the database in real time and implemented using PHP language.',
      image: 'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=600&h=400&fit=crop',
      technologies: ['PHP', 'MySQL', 'Database', 'Web Development'],
      github: '#',
      live: '#',
      category: 'Web Development',
    },
  ];

  const categories = ['All', 'Bioinformatics', 'Data Science', 'Research', 'Hardware', 'Mobile', 'Web Development'];
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section
      id="projects"
      ref={ref}
      className={`section-padding ${
        isDark ? 'bg-black text-white' : 'bg-white text-black'
      }`}
    >
      <div className="container-custom">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Section Header */}
          <motion.div className="text-center mb-16" variants={itemVariants}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              My <span className={isDark ? 'text-red-500' : 'text-black'}>Projects</span>
            </h2>
            <div className={`w-24 h-1 mx-auto mb-8 ${
              isDark ? 'bg-red-500' : 'bg-black'
            }`} />
            <p className={`text-xl max-w-3xl mx-auto leading-relaxed ${
              isDark ? 'text-gray-300' : 'text-gray-600'
            }`}>
              A showcase of my recent work, featuring modern web applications, 
              mobile apps, and innovative solutions.
            </p>
          </motion.div>

          {/* Category Filter */}
          <motion.div
            className="flex flex-wrap justify-center gap-4 mb-12"
            variants={itemVariants}
          >
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`
                  px-6 py-3 rounded-full font-medium transition-all duration-300
                  ${activeCategory === category
                    ? isDark 
                      ? 'bg-red-500 text-white' 
                      : 'bg-black text-white'
                    : isDark
                      ? 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }
                `}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category}
              </motion.button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            layout
          >
            <AnimatePresence mode="wait">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  className={`card ${isDark ? 'card-dark' : 'card-light'} group cursor-pointer`}
                  variants={itemVariants}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                  onClick={() => setSelectedProject(project)}
                >
                  {/* Project Image */}
                  <div className="relative overflow-hidden rounded-lg mb-6">
                    <motion.img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className={`
                      absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300
                      ${isDark ? 'bg-red-500/20' : 'bg-black/20'}
                      flex items-center justify-center
                    `}>
                      <Eye className="text-white" size={32} />
                    </div>
                  </div>

                  {/* Project Info */}
                  <div>
                    <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                    <p className={`mb-4 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                      {project.description}
                    </p>
                    
                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className={`
                            px-3 py-1 text-xs rounded-full
                            ${isDark 
                              ? 'bg-gray-800 text-red-500' 
                              : 'bg-gray-100 text-black'
                            }
                          `}
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className={`px-3 py-1 text-xs rounded-full ${
                          isDark ? 'text-gray-400' : 'text-gray-500'
                        }`}>
                          +{project.technologies.length - 3} more
                        </span>
                      )}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3">
                      <motion.a
                        href={project.github}
                        className={`
                          flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-300
                          ${isDark 
                            ? 'bg-gray-800 text-white hover:bg-gray-700' 
                            : 'bg-gray-100 text-black hover:bg-gray-200'
                          }
                        `}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Github size={16} />
                        Code
                      </motion.a>
                      
                      <motion.a
                        href={project.live}
                        className={`
                          flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-300
                          ${isDark 
                            ? 'bg-red-500 text-white hover:bg-red-600' 
                            : 'bg-black text-white hover:bg-gray-800'
                          }
                        `}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={(e) => e.stopPropagation()}
                      >
                        <ExternalLink size={16} />
                        Live
                      </motion.a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />
            
            <motion.div
              className={`
                relative max-w-4xl w-full max-h-[90vh] overflow-y-auto rounded-2xl p-8
                ${isDark ? 'bg-gray-900' : 'bg-white'}
              `}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-64 object-cover rounded-lg mb-6"
              />
              
              <h3 className="text-3xl font-bold mb-4">{selectedProject.title}</h3>
              <p className={`text-lg mb-6 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                {selectedProject.longDescription}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {selectedProject.technologies.map((tech) => (
                  <span
                    key={tech}
                    className={`
                      px-3 py-1 text-sm rounded-full
                      ${isDark 
                        ? 'bg-gray-800 text-red-500' 
                        : 'bg-gray-100 text-black'
                      }
                    `}
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="flex gap-4">
                <motion.a
                  href={selectedProject.github}
                  className={`btn-secondary ${
                    isDark ? 'btn-secondary-dark' : 'btn-secondary-light'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Github size={20} className="mr-2" />
                  View Code
                </motion.a>
                
                <motion.a
                  href={selectedProject.live}
                  className={`btn-primary ${
                    isDark ? 'btn-primary-dark' : 'btn-primary-light'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <ExternalLink size={20} className="mr-2" />
                  Live Demo
                </motion.a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;