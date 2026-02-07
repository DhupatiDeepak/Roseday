import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const FloatingHearts = () => {
  const [hearts, setHearts] = useState([]);

  useEffect(() => {
    const generateHearts = () => {
      const heartCount = 20;
      const newHearts = Array.from({ length: heartCount }).map((_, i) => ({
        id: i,
        size: Math.random() * 20 + 10, // 10px to 30px
        left: Math.random() * 100, // 0% to 100%
        duration: Math.random() * 5 + 5, // 5s to 12s
        delay: Math.random() * 5,
      }));
      setHearts(newHearts);
    };

    generateHearts();
  }, []);

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: -1,
        overflow: 'hidden',
      }}
    >
      {hearts.map((heart) => (
        <motion.div
          key={heart.id}
          initial={{ y: '110vh', opacity: 0 }}
          animate={{
            y: '-10vh',
            opacity: [0, 1, 0],
            x: [0, Math.random() * 50 - 25, 0], // Slight drift
          }}
          transition={{
            duration: heart.duration,
            repeat: Infinity,
            delay: heart.delay,
            ease: 'linear',
          }}
          style={{
            position: 'absolute',
            left: `${heart.left}%`,
            fontSize: `${heart.size}px`,
            color: 'var(--color-heart)',
          }}
        >
          ❤
        </motion.div>
      ))}
    </div>
  );
};

export default FloatingHearts;
