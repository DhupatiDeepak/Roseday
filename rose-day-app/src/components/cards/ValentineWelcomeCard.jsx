import React from 'react';
import CardWrapper from '../CardWrapper';
import { motion } from 'framer-motion';

const ValentineWelcomeCard = ({ onNext }) => {
    return (
        <CardWrapper>
            <motion.h1
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                style={{
                    fontFamily: "'Dancing Script', cursive",
                    fontSize: '3rem',
                    color: 'var(--color-text-dark)',
                    marginBottom: '1rem',
                    textShadow: '0 0 15px rgba(255, 0, 85, 0.4)'
                }}
            >
                Happy Valentine's Day baby 💖
            </motion.h1>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                style={{
                    fontSize: '1.2rem',
                    color: 'var(--color-text-body)',
                    marginBottom: '2rem',
                    lineHeight: '1.6',
                    fontFamily: "'Quicksand', sans-serif"
                }}
            >
                Today is all about us... <br />
                And how lucky I am to have you.
            </motion.div>

            <motion.button
                whileHover={{ scale: 1.1, boxShadow: "0px 0px 20px rgb(255, 0, 85)" }}
                whileTap={{ scale: 0.95 }}
                onClick={onNext}
                style={{
                    padding: '16px 45px',
                    fontSize: '1.3rem',
                    borderRadius: '50px',
                    background: 'linear-gradient(45deg, #ff00cc, #333399)',
                    border: 'none',
                    color: 'white',
                    cursor: 'pointer',
                    fontWeight: 'bold',
                    boxShadow: '0 4px 15px rgba(255, 0, 204, 0.4)'
                }}
            >
                Continue 💕
            </motion.button>
        </CardWrapper>
    );
};

export default ValentineWelcomeCard;
