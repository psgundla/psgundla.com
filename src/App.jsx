import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from './contexts/ThemeContext';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Resume from './components/Resume';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Publications from './components/Publications';
import Photography from './components/Photography';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const { isDark } = useTheme();

  const pageVariants = {
    initial: { opacity: 0 },
    animate: { 
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: 'easeInOut'
      }
    },
    exit: { 
      opacity: 0,
      transition: {
        duration: 0.3
      }
    }
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={isDark ? 'dark' : 'light'}
        variants={pageVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        className={`min-h-screen transition-colors duration-300 ${
          isDark ? 'bg-black text-white' : 'bg-white text-black'
        }`}
      >
        <Navigation />
        
        <main>
          <Hero />
          <About />
          <Skills />
          <Resume />
          <Projects />
          <Publications />
          <Certifications />
          <Photography />
          <Contact />
        </main>
        
        <Footer />
      </motion.div>
    </AnimatePresence>
  );
}

export default App;