import React from 'react';
import CardWrapper from '../CardWrapper';
import { motion } from 'framer-motion';

const PickRoseCard = ({ onNext }) => {
    return (
        <CardWrapper>
            <h2 style={{ marginBottom: '0.5rem' }}>Pick a Rose</h2>
            <p style={{ marginBottom: '2.5rem', opacity: 0.7 }}>Find the hidden message...</p>

            <div style={{ display: 'flex', gap: '30px', justifyContent: 'center', marginBottom: '2rem' }}>
                {[1, 2, 3].map((i) => (
                    <motion.div
                        key={i}
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{
                            scale: 1,
                            opacity: 1,
                            y: [0, -10, 0]
                        }}
                        transition={{
                            delay: i * 0.2, // Stagger entrance
                            y: { duration: 3, repeat: Infinity, ease: "easeInOut", delay: i * 0.5 } // Stagger float
                        }}
                        whileHover={{
                            scale: 1.3,
                            transition: { duration: 0.3 }
                        }}
                        whileTap={{ scale: 0.9 }}
                        onClick={onNext}
                        style={{
                            fontSize: '4rem',
                            cursor: 'pointer',
                            filter: 'drop-shadow(0 10px 15px rgba(255, 105, 180, 0.4))',
                            userSelect: 'none'
                        }}
                    >
                        🌹
                    </motion.div>
                ))}
            </div>
        </CardWrapper>
    );
};

export default PickRoseCard;
