import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, ExternalLink } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import { useInView } from '../hooks/useParallax';

const Publications = () => {
  const { isDark } = useTheme();
  const [ref, inView] = useInView(0.2);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
      id="publications"
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
              Publications <span className={isDark ? 'text-red-500' : 'text-black'}>& Research</span>
            </h2>
            <div className={`w-24 h-1 mx-auto mb-8 ${
              isDark ? 'bg-red-500' : 'bg-black'
            }`} />
            <p className={`text-xl max-w-3xl mx-auto leading-relaxed ${
              isDark ? 'text-gray-300' : 'text-gray-600'
            }`}>
              My research contributions and scientific publications in bioinformatics and computational biology.
            </p>
          </motion.div>

          {/* ORCID Section */}
          <motion.div
            className="max-w-4xl mx-auto mb-12"
            variants={itemVariants}
          >
            <motion.div
              className={`card ${isDark ? 'card-dark' : 'card-light'} text-center`}
              whileHover={{ y: -5 }}
            >
              <motion.div
                className={`
                  inline-flex items-center justify-center w-20 h-20 rounded-full mb-6
                  ${isDark ? 'bg-red-500/20 text-red-500' : 'bg-gray-100 text-black'}
                `}
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.3 }}
              >
                <BookOpen size={36} />
              </motion.div>

              <h3 className="text-2xl font-bold mb-4">
                ORCiD Profile
              </h3>

              <div className="mb-4">
                <span className={`text-lg ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                  ORCiD:
                </span>
                <motion.a
                  href="https://orcid.org/0000-0002-3726-1445"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`
                    ml-2 text-lg font-mono font-semibold
                    ${isDark ? 'text-red-500 hover:text-red-400' : 'text-black hover:text-gray-600'}
                    inline-flex items-center gap-2
                  `}
                  whileHover={{ x: 5 }}
                >
                  0000-0002-3726-1445
                  <ExternalLink size={18} />
                </motion.a>
              </div>

              <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                Visit my ORCiD profile to view all published works and research contributions.
              </p>
            </motion.div>
          </motion.div>

          {/* Research Areas */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
            variants={containerVariants}
          >
            {[
              {
                title: 'Bioinformatics',
                description: 'Gene network analysis, disease resistance, and computational biology',
                icon: '🧬'
              },
              {
                title: 'Data Science',
                description: 'Machine learning applications in biological data analysis',
                icon: '📊'
              },
              {
                title: 'Precision Medicine',
                description: 'Cancer therapeutics and personalized treatment approaches',
                icon: '💊'
              }
            ].map((area, index) => (
              <motion.div
                key={index}
                className={`card ${isDark ? 'card-dark' : 'card-light'} text-center`}
                variants={itemVariants}
                whileHover={{ y: -8 }}
              >
                <div className="text-5xl mb-4">{area.icon}</div>
                <h4 className="text-xl font-bold mb-3">{area.title}</h4>
                <p className={`${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                  {area.description}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* Additional Info */}
          <motion.div
            className="mt-16 text-center"
            variants={itemVariants}
          >
            <p className={`text-lg ${isDark ? 'text-gray-300' : 'text-gray-600'} max-w-3xl mx-auto`}>
              Currently working on gene networks in disease resistance and developing data-driven insights through applied statistics and machine learning in bioinformatics.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Publications;
