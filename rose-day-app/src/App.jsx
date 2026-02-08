import React, { useState } from 'react';
import FloatingSymbols from './components/AnimatedBackground'; // Renamed/Updated component
import RoseDayFlow from './components/RoseDayFlow';
import ValentineFlow from './components/ValentineFlow';
import DaySelectionCard from './components/DaySelectionCard';
import ErrorBoundary from './components/ErrorBoundary';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import { motion } from 'framer-motion';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={toggleTheme}
      style={{
        position: 'fixed',
        top: '20px',
        right: '20px',
        zIndex: 100,
        background: 'rgba(255, 255, 255, 0.2)',
        backdropFilter: 'blur(5px)',
        borderRadius: '50%',
        width: '50px',
        height: '50px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '1.5rem',
        boxShadow: '0 4px 10px rgba(0,0,0,0.2)',
        border: '1px solid rgba(255,255,255,0.3)',
      }}
    >
      {theme === 'dark' ? '🌙' : '☀️'}
    </motion.button>
  );
};

function App() {
  const [experienceMode, setExperienceMode] = useState('landing'); // 'landing' | 'rose' | 'valentine'
  const [step, setStep] = useState(1);

  const handleHome = () => {
    setExperienceMode('landing');
    setStep(1);
  };

  return (
    <ThemeProvider>
      <ErrorBoundary>
        <ThemeToggle />
        <FloatingSymbols mode={experienceMode} />

        {experienceMode === 'landing' && (
          <DaySelectionCard onSelect={setExperienceMode} />
        )}

        {experienceMode === 'rose' && (
          <RoseDayFlow step={step} setStep={setStep} />
        )}

        {experienceMode === 'valentine' && (
          <ValentineFlow onHome={handleHome} />
        )}

      </ErrorBoundary>
    </ThemeProvider>
  );
}

export default App;
