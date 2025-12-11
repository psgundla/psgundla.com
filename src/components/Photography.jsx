import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Camera, X } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import { useInView } from '../hooks/useParallax';

const Photography = () => {
  const { isDark } = useTheme();
  const [ref, inView] = useInView(0.2);
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    {
      src: '/assets/images/image-1.JPG',
      alt: 'Photography 1',
      gridClass: 'col-span-1 row-span-2'
    },
    {
      src: '/assets/images/image-2.JPEG',
      alt: 'Photography 2',
      gridClass: 'col-span-1 row-span-2'
    },
    {
      src: '/assets/images/image-3.JPEG',
      alt: 'Photography 3',
      gridClass: 'col-span-2 row-span-3'
    },
    {
      src: '/assets/images/image-4.JPG',
      alt: 'Photography 4',
      gridClass: 'col-span-2 row-span-2'
    },
    {
      src: '/assets/images/image-5.jpg',
      alt: 'Photography 5',
      gridClass: 'col-span-2 row-span-2'
    },
    {
      src: '/assets/images/image-6.jpg',
      alt: 'Photography 6',
      gridClass: 'col-span-2 row-span-2'
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
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section
      id="photography"
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
              Photography <span className={isDark ? 'text-red-500' : 'text-black'}>Portfolio</span>
            </h2>
            <div className={`w-24 h-1 mx-auto mb-8 ${
              isDark ? 'bg-red-500' : 'bg-black'
            }`} />
            <p className={`text-xl max-w-3xl mx-auto leading-relaxed ${
              isDark ? 'text-gray-300' : 'text-gray-600'
            }`}>
              View my taste of photography - capturing moments and perspectives through the lens.
            </p>
          </motion.div>

          {/* Gallery Grid */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 auto-rows-[150px] gap-4"
            variants={containerVariants}
          >
            {images.map((image, index) => (
              <motion.div
                key={index}
                className={`${image.gridClass} relative overflow-hidden rounded-2xl cursor-pointer group`}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                onClick={() => setSelectedImage(image)}
              >
                {/* Image */}
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />

                {/* Overlay */}
                <motion.div
                  className={`
                    absolute inset-0 flex items-center justify-center
                    ${isDark ? 'bg-black/60' : 'bg-white/60'}
                    opacity-0 group-hover:opacity-100 transition-opacity duration-300
                  `}
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    whileHover={{ scale: 1 }}
                    transition={{ duration: 0.3 }}
                    className={`
                      p-3 rounded-full
                      ${isDark ? 'bg-red-500' : 'bg-black'}
                      text-white
                    `}
                  >
                    <Camera size={24} />
                  </motion.div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            style={{ backgroundColor: isDark ? 'rgba(0,0,0,0.95)' : 'rgba(255,255,255,0.95)' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            {/* Close Button */}
            <motion.button
              className={`
                absolute top-4 right-4 p-3 rounded-full z-10
                ${isDark ? 'bg-red-500 text-white' : 'bg-black text-white'}
              `}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setSelectedImage(null)}
            >
              <X size={24} />
            </motion.button>

            {/* Image */}
            <motion.img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="max-w-full max-h-full object-contain rounded-lg"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Photography;
