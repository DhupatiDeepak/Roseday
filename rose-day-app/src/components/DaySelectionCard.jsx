import React from 'react';
import CardWrapper from './CardWrapper';
import { motion } from 'framer-motion';

const DaySelectionCard = ({ onSelect }) => {
    return (
        <CardWrapper>
            <motion.h1
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                style={{
                    fontFamily: "'Dancing Script', cursive",
                    fontSize: '2.5rem',
                    color: 'var(--color-primary)',
                    marginBottom: '0.5rem',
                    textShadow: '0 0 10px rgba(255, 0, 85, 0.3)'
                }}
            >
                For My Favorite Person ❤️
            </motion.h1>

            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                style={{
                    fontSize: '1.2rem',
                    color: 'var(--color-text-body)',
                    marginBottom: '2.5rem',
                    fontFamily: "'Quicksand', sans-serif"
                }}
            >
                Choose today's surprise...
            </motion.p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', width: '100%', maxWidth: '300px' }}>
                <SelectionButton
                    icon="🌹"
                    label="Rose Day"
                    onClick={() => onSelect('rose')}
                    delay={0.8}
                    color="linear-gradient(45deg, #ff416c, #ff4b2b)"
                />
                <SelectionButton
                    icon="💖"
                    label="Valentine's Day"
                    onClick={() => onSelect('valentine')}
                    delay={1.1}
                    color="linear-gradient(45deg, #ff00cc, #333399)"
                />
            </div>
        </CardWrapper>
    );
};

const SelectionButton = ({ icon, label, onClick, delay, color }) => (
    <motion.button
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay, type: 'spring', stiffness: 200 }}
        whileHover={{ scale: 1.05, boxShadow: '0 10px 25px rgba(0,0,0,0.3)' }}
        whileTap={{ scale: 0.95 }}
        onClick={onClick}
        style={{
            padding: '18px 30px',
            fontSize: '1.3rem',
            borderRadius: '50px',
            background: color,
            border: 'none',
            color: 'white',
            cursor: 'pointer',
            fontWeight: 'bold',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '15px',
            width: '100%',
            boxShadow: '0 5px 15px rgba(0,0,0,0.2)',
            position: 'relative',
            overflow: 'hidden'
        }}
    >
        <span style={{ fontSize: '1.8rem' }}>{icon}</span>
        {label}
    </motion.button>
);

export default DaySelectionCard;
