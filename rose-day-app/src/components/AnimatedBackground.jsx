import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const FloatingSymbols = ({ mode = 'landing' }) => {
  const [symbols, setSymbols] = useState([]);

  // Define symbol sets based on mode
  const getSymbolsForMode = () => {
    switch (mode) {
      case 'rose':
        return ['🌹', '❤', '💌', '✨'];
      case 'valentine':
        return ['💖', '💘', '❤', '✨', '💑'];
      case 'landing':
      default:
        return ['🌹', '💖', '❤', '✨', '💌', '💝'];
    }
  };

  useEffect(() => {
    const symbolOptions = getSymbolsForMode();

    const generateSymbols = () => {
      const count = 20; // Slightly less count for larger symbols to avoid clutter
      const newSymbols = Array.from({ length: count }).map((_, i) => ({
        id: i,
        char: symbolOptions[Math.floor(Math.random() * symbolOptions.length)],
        size: Math.random() * 40 + 30, // INCREASED SIZE: 30px to 70px
        left: Math.random() * 100,
        duration: Math.random() * 10 + 10,
        delay: Math.random() * 5,
        rotate: Math.random() * 360,
      }));
      setSymbols(newSymbols);
    };

    generateSymbols();
  }, [mode]); // Re-run when mode changes

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 0,
        overflow: 'hidden',
      }}
    >
      {symbols.map((symbol) => (
        <motion.div
          key={symbol.id}
          initial={{ y: '110vh', opacity: 0, rotate: 0 }}
          animate={{
            y: '-10vh',
            opacity: [0, 1, 1, 0],
            x: [0, Math.random() * 100 - 50, 0],
            rotate: [0, symbol.rotate, 0],
          }}
          transition={{
            duration: symbol.duration,
            repeat: Infinity,
            delay: symbol.delay,
            ease: 'linear',
          }}
          style={{
            position: 'absolute',
            left: `${symbol.left}%`,
            fontSize: `${symbol.size}px`,
            color: 'var(--color-primary)',
            textShadow: '0 0 15px rgba(255, 77, 136, 0.6)', // Intenser glow
            filter: 'blur(0.5px)',
          }}
        >
          {symbol.char}
        </motion.div>
      ))}
    </div>
  );
};

export default FloatingSymbols;
