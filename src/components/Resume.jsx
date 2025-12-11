import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Download } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import { useInView } from '../hooks/useParallax';

const Resume = () => {
  const { isDark } = useTheme();
  const [ref, inView] = useInView(0.2);

  const education = [
    {
      degree: 'Master of Sciences in Bioinformatics',
      institution: 'Manipal Academy of Higher Education',
      location: 'Manipal, Karnataka, India',
      period: '2018 - 2020',
      gpa: '8.3',
      description: 'Graduated from Bioinformatics in M1 with good academic, social and sports performance.'
    },
    {
      degree: 'Masters in BioHealth Engineering (Exchange Program)',
      institution: 'Universite of Grenoble-Alpes',
      location: 'Grenoble, France',
      period: '2019 - 2020',
      gpa: '8.3',
      description: 'Graduated from M2 Biohealth Engineering with good academic performance.'
    },
    {
      degree: 'Bachelor of Sciences in Mathematics, Electronics & Computer Science',
      institution: 'Bhavans Vivekananda College for Science, Humanties & Commerce',
      location: 'Hyderabad, India',
      period: '2015 - 2018',
      gpa: '83%',
      description: 'Graduated from Electronics Major with good academic & Sports performance.'
    },
    {
      degree: 'Pre-University',
      institution: 'Sri Chaithanya Junior College',
      location: 'Hyderabad, Telangana, India',
      period: '2013 - 2015',
      gpa: '79.9%'
    }
  ];

  const experience = [
    {
      title: 'Bioinformatician',
      company: 'Plantik Biosciences',
      location: 'Paris, France',
      period: 'November 2020 - Present',
      responsibilities: [
        'Hemp: Gene networks in Disease Resistance & curation of those genes.',
        'Data processing, quality check, data transformation and filtering using Applied statistics and machine-learning.',
        'Communicate data-driven insights/stories via publications, posters and presentations.',
        'Building the pipelines and databases for processing data.'
      ]
    },
    {
      title: 'Software Engineer (Intern)',
      company: 'Himalaya Hydro Private Limited (Toqqer Technologies)',
      location: 'Hyderabad, Telangana, India',
      period: 'October 2020 - November 2020',
      responsibilities: [
        'JAVA Backend development with Spring Tool Suite (STS) & Hibernate for building Database.',
        'Optimisation of search query using hibernate.'
      ]
    },
    {
      title: 'Internee',
      company: 'Institute for Advanced Biosciences',
      location: 'Grenoble, France',
      period: 'January 2020 - July 2020',
      responsibilities: [
        'Lead in the design, development, and implementation of the analysis, visualizations and predictions in Lung Adenocarcinomas.',
        'Worked with a startup project SigNet (AI based Biological multimodel graph systems) using ML deployment.',
        'Predicted the Networks of Cancer therapeutics.',
        'Supervise the assessment of all the results and predicting the network cartography of TP53 in Lung adenocarcinomas.',
        'Oversee the efficiency of TP53 activity in Lung Adenocarcinomas.'
      ]
    },
    {
      title: 'Summer School - Computational Medicine',
      company: 'European Scientific Institute (ESI)',
      location: 'Geneva, Switzerland',
      period: 'August 2019',
      project: 'GRAPHENE MULTIPLEX BIOSENSOR FOR COPD & ASTHMA DIFFERENTIATION',
      responsibilities: [
        'RAPID DIAGNOSTIC TEST TO DIFFERENTIATE BETWEEN COPD AND ASTHMA.',
        'To differentiate between the similar symptoms of COPD and Asthma using a multiplex biosensor that uses antibodies to detect a panel of biomarkers.',
        'This device targets the diagnosis in a population of people where the usual characteristics of COPD patients do not apply (non-smoker, young age) who are usually misdiagnosed with asthma.'
      ]
    },
    {
      title: 'Summer School - Precision Oncology',
      company: 'European Scientific Institute (ESI)',
      location: 'Geneva, Switzerland',
      period: 'July 2020',
      project: 'DILIGENECE (Diagnose wIth artificiaL IntelliGence hEad Neck Cancer rElapses)',
      responsibilities: [
        'An in-depth insight into the challenges, objectives, concepts and functions of precision medicine applied to oncology.',
        'Familiarity with precision medicine techniques, such as search algorithms, bayesian networks, machine and reinforcement learning.',
        'Practical experience of working in an international and interdisciplinary group to design and pitch the business model of an innovative data-driven project.'
      ]
    }
  ];

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
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section
      id="resume"
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
              Resume <span className={isDark ? 'text-red-500' : 'text-black'}>& Experience</span>
            </h2>
            <div className={`w-24 h-1 mx-auto mb-8 ${
              isDark ? 'bg-red-500' : 'bg-black'
            }`} />
            <p className={`text-xl max-w-3xl mx-auto leading-relaxed mb-6 ${
              isDark ? 'text-gray-300' : 'text-gray-600'
            }`}>
              My professional journey in bioinformatics, data science, and software development.
            </p>
            <motion.a
              href="/assets/CV5.0.pdf"
              download
              className={`inline-flex items-center gap-2 px-6 py-3 rounded-full ${
                isDark
                  ? 'bg-red-500 text-white hover:bg-red-600'
                  : 'bg-black text-white hover:bg-gray-800'
              } transition-colors`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Download size={20} />
              Download CV
            </motion.a>
          </motion.div>

          {/* Experience and Education Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Professional Experience */}
            <motion.div variants={containerVariants}>
              <motion.div
                className="flex items-center gap-3 mb-8"
                variants={itemVariants}
              >
                <div className={`p-3 rounded-full ${
                  isDark ? 'bg-red-500/20 text-red-500' : 'bg-gray-100'
                }`}>
                  <Briefcase size={24} />
                </div>
                <h3 className="text-3xl font-bold">Professional Experience</h3>
              </motion.div>

              <div className="space-y-8">
                {experience.map((job, index) => (
                  <motion.div
                    key={index}
                    className={`pl-6 border-l-2 ${
                      isDark ? 'border-red-500' : 'border-black'
                    } relative`}
                    variants={itemVariants}
                    whileHover={{ x: 5 }}
                  >
                    {/* Timeline dot */}
                    <div className={`absolute -left-[9px] top-0 w-4 h-4 rounded-full border-2 ${
                      isDark ? 'bg-black border-red-500' : 'bg-white border-black'
                    }`} />

                    <h4 className="text-xl font-bold mb-2">{job.title}</h4>
                    <div className={`inline-block px-4 py-1 rounded-full text-sm mb-3 ${
                      isDark ? 'bg-red-500/20 text-red-500' : 'bg-gray-100'
                    }`}>
                      {job.period}
                    </div>
                    <p className={`font-medium mb-2 ${
                      isDark ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                      {job.company} • {job.location}
                    </p>
                    {job.project && (
                      <p className={`font-semibold mb-2 ${
                        isDark ? 'text-red-500' : 'text-black'
                      }`}>
                        Project: {job.project}
                      </p>
                    )}
                    <ul className={`list-disc list-inside space-y-1 ${
                      isDark ? 'text-gray-300' : 'text-gray-600'
                    }`}>
                      {job.responsibilities.map((resp, idx) => (
                        <li key={idx} className="text-sm">{resp}</li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Education */}
            <motion.div variants={containerVariants}>
              <motion.div
                className="flex items-center gap-3 mb-8"
                variants={itemVariants}
              >
                <div className={`p-3 rounded-full ${
                  isDark ? 'bg-red-500/20 text-red-500' : 'bg-gray-100'
                }`}>
                  <GraduationCap size={24} />
                </div>
                <h3 className="text-3xl font-bold">Education</h3>
              </motion.div>

              <div className="space-y-8">
                {education.map((edu, index) => (
                  <motion.div
                    key={index}
                    className={`pl-6 border-l-2 ${
                      isDark ? 'border-red-500' : 'border-black'
                    } relative`}
                    variants={itemVariants}
                    whileHover={{ x: 5 }}
                  >
                    {/* Timeline dot */}
                    <div className={`absolute -left-[9px] top-0 w-4 h-4 rounded-full border-2 ${
                      isDark ? 'bg-black border-red-500' : 'bg-white border-black'
                    }`} />

                    <h4 className="text-xl font-bold mb-2">{edu.degree}</h4>
                    <div className={`inline-block px-4 py-1 rounded-full text-sm mb-3 ${
                      isDark ? 'bg-red-500/20 text-red-500' : 'bg-gray-100'
                    }`}>
                      {edu.period}
                    </div>
                    <p className={`font-medium mb-2 ${
                      isDark ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                      {edu.institution}
                    </p>
                    <p className={`text-sm mb-2 ${
                      isDark ? 'text-gray-400' : 'text-gray-500'
                    }`}>
                      {edu.location}
                    </p>
                    <p className={`text-sm font-semibold mb-2 ${
                      isDark ? 'text-red-500' : 'text-black'
                    }`}>
                      {edu.gpa.includes('%') ? `Percentage: ${edu.gpa}` : `CPI: ${edu.gpa}`}
                    </p>
                    {edu.description && (
                      <p className={`text-sm ${
                        isDark ? 'text-gray-300' : 'text-gray-600'
                      }`}>
                        {edu.description}
                      </p>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Resume;
