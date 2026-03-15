import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaHeartbeat } from 'react-icons/fa';
import './Style/Preloader.css';

const Preloader = () => {
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setVisible(false), 300);
          return 100;
        }
        return prev + 2;
      });
    }, 40);
    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="preloader"
          exit={{ opacity: 0, scale: 1.1 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
        >
          <div className="preloader-content">
            <motion.div
              className="preloader-icon"
              animate={{
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 0.8,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              <FaHeartbeat />
            </motion.div>

            <motion.h2
              className="preloader-brand"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Medico<span>Care</span>
            </motion.h2>

            <div className="preloader-bar-container">
              <motion.div
                className="preloader-bar"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.1 }}
              />
            </div>

            <motion.p
              className="preloader-text"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Loading your health partner...
            </motion.p>
          </div>

          <div className="preloader-particles">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="particle"
                initial={{
                  x: Math.random() * window.innerWidth,
                  y: Math.random() * window.innerHeight,
                  opacity: 0,
                  scale: 0,
                }}
                animate={{
                  y: [null, Math.random() * -200],
                  opacity: [0, 0.6, 0],
                  scale: [0, 1, 0],
                }}
                transition={{
                  duration: 2 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                }}
                style={{
                  width: 4 + Math.random() * 6,
                  height: 4 + Math.random() * 6,
                }}
              />
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;