import React from 'react';
import { motion } from 'framer-motion';
import { Award, ExternalLink } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import { useInView } from '../hooks/useParallax';

const Certifications = () => {
  const { isDark } = useTheme();
  const [ref, inView] = useInView(0.2);

  const certifications = [
    {
      title: 'Introduction To Julia',
      issuer: 'Julia Academy',
      date: 'October 2022',
      verifyLink: 'https://github.com/BioCoderR/Certifications/blob/main/julia/certificate-of-completion-for-introduction-to-julia.pdf',
      verifyId: 'cert_3nwr0g2p'
    },
    {
      title: 'Detecting COVID-19 with Chest X-Ray using Pytorch',
      issuer: 'Coursera Project Work',
      date: 'September 2020',
      verifyLink: 'https://www.coursera.org/account/accomplishments/certificate/CXRS5XPW52TL',
      verifyId: 'CXRS5XPW52TL'
    },
    {
      title: 'Google Cloud Product Fundamentals',
      issuer: 'Coursera - Google Cloud',
      date: 'September 2020',
      verifyLink: 'https://www.coursera.org/account/accomplishments/certificate/T767MN937XX4',
      verifyId: 'T767MN937XX4'
    },
    {
      title: 'Getting & Cleaning Data',
      issuer: 'Coursera - John Hopkins University',
      date: 'September 2020',
      verifyLink: 'https://www.coursera.org/account/accomplishments/certificate/TW5ZBMZNAHCY',
      verifyId: 'TW5ZBMZNAHCY'
    },
    {
      title: 'AWS: Publish a NodeJS Website from Scratch',
      issuer: 'Coursera',
      date: 'September 2020',
      verifyLink: 'https://www.coursera.org/account/accomplishments/certificate/E28VQUHWDW62',
      verifyId: 'E28VQUHWDW62'
    },
    {
      title: 'Python for Absolute Beginners',
      issuer: 'Udemy - Green Chameleon Learning',
      date: 'March 2019',
      verifyLink: 'https://www.udemy.com/certificate/UC-3035WCL3/',
      verifyId: 'UC-3035WCL3'
    },
    {
      title: 'Bioinformatics Methods I',
      issuer: 'Coursera - University of Toronto',
      date: 'January 2019',
      verifyLink: 'https://www.coursera.org/account/accomplishments/certificate/YJMDZR5DJJ3S',
      verifyId: 'YJMDZR5DJJ3S'
    },
    {
      title: 'Command Line Tools for Genomic Data Science',
      issuer: 'Coursera - John Hopkins University',
      date: 'November 2018',
      verifyLink: 'https://www.coursera.org/account/accomplishments/certificate/QP8JRWFF9HKC',
      verifyId: 'QP8JRWFF9HKC'
    }
  ];

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
      id="certifications"
      ref={ref}
      className={`section-padding ${
        isDark ? 'bg-gray-900 text-white' : 'bg-gray-50 text-black'
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
              Certifications <span className={isDark ? 'text-red-500' : 'text-black'}>& Courses</span>
            </h2>
            <div className={`w-24 h-1 mx-auto mb-8 ${
              isDark ? 'bg-red-500' : 'bg-black'
            }`} />
            <p className={`text-xl max-w-3xl mx-auto leading-relaxed ${
              isDark ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Professional certifications and completed courses in various domains including bioinformatics, cloud computing, and data science.
            </p>
          </motion.div>

          {/* Certifications Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={containerVariants}
          >
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                className={`card ${isDark ? 'card-dark' : 'card-light'} group`}
                variants={itemVariants}
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                {/* Icon */}
                <motion.div
                  className={`
                    w-14 h-14 rounded-full flex items-center justify-center mb-4
                    ${isDark ? 'bg-red-500/20 text-red-500' : 'bg-gray-100 text-black'}
                  `}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <Award size={28} />
                </motion.div>

                {/* Content */}
                <h3 className="text-lg font-bold mb-2 line-clamp-2">
                  {cert.title}
                </h3>

                <p className={`text-sm mb-2 ${
                  isDark ? 'text-red-500' : 'text-gray-700'
                } font-semibold`}>
                  {cert.issuer}
                </p>

                <p className={`text-sm mb-4 ${
                  isDark ? 'text-gray-400' : 'text-gray-500'
                }`}>
                  {cert.date}
                </p>

                {/* Verify Link */}
                <motion.a
                  href={cert.verifyLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`
                    inline-flex items-center gap-2 text-sm font-medium
                    ${isDark ? 'text-red-500 hover:text-red-400' : 'text-black hover:text-gray-600'}
                    transition-colors
                  `}
                  whileHover={{ x: 5 }}
                >
                  Verify: {cert.verifyId}
                  <ExternalLink size={14} />
                </motion.a>
              </motion.div>
            ))}
          </motion.div>

          {/* Additional Info */}
          <motion.div
            className="mt-16 text-center"
            variants={itemVariants}
          >
            <p className={`text-lg ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
              Continuously expanding knowledge through professional development and specialized courses.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;
