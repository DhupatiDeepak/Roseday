import React from 'react';
import CardWrapper from '../CardWrapper';
import { motion } from 'framer-motion';

const ValentineFinalCard = ({ onHome }) => {
    return (
        <CardWrapper>
            <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8 }}
            >
                <div style={{ fontSize: '5rem', marginBottom: '1rem' }}>💑</div>
            </motion.div>

            <motion.h1
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                style={{
                    fontFamily: "'Dancing Script', cursive",
                    fontSize: '2.5rem',
                    color: 'var(--color-text-dark)',
                    marginBottom: '1rem',
                    textShadow: '0 0 20px rgba(255, 0, 85, 0.5)'
                }}
            >
                I'm so lucky to have you ❤️
            </motion.h1>

            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                style={{
                    fontSize: '1.2rem',
                    color: 'var(--color-text-body)',
                    marginBottom: '2.5rem'
                }}
            >
                Happy Valentine's Day My Love!
            </motion.p>

            <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={onHome}
                style={{
                    padding: '14px 40px',
                    fontSize: '1.2rem',
                    borderRadius: '50px',
                    background: 'linear-gradient(45deg, #ff416c, #ff4b2b)',
                    border: 'none',
                    color: 'white',
                    cursor: 'pointer',
                    fontWeight: 'bold',
                    boxShadow: '0 4px 15px rgba(255, 65, 108, 0.4)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px'
                }}
            >
                Replay Our Love 💞
            </motion.button>
        </CardWrapper>
    );
};

export default ValentineFinalCard;
