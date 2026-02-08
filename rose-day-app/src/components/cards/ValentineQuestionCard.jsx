import React from 'react';
import CardWrapper from '../CardWrapper';
import { motion } from 'framer-motion';

const ValentineQuestionCard = ({ onNext }) => {
    return (
        <CardWrapper>
            <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
                style={{ fontSize: '4rem', marginBottom: '1rem' }}
            >
                💌
            </motion.div>

            <h2 style={{
                marginBottom: '2rem',
                color: 'var(--color-text-dark)',
                fontSize: '2rem'
            }}>
                Will you be my Valentine?
            </h2>

            <div style={{ display: 'flex', gap: '20px', justifyContent: 'center' }}>
                <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={onNext}
                    style={{
                        padding: '15px 40px',
                        fontSize: '1.2rem',
                        borderRadius: '50px',
                        background: 'linear-gradient(45deg, #ff00cc, #333399)',
                        border: 'none',
                        color: 'white',
                        cursor: 'pointer',
                        fontWeight: 'bold',
                        boxShadow: '0 4px 15px rgba(255, 0, 204, 0.4)'
                    }}
                >
                    Yes 💖
                </motion.button>

                <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={onNext} // Both lead to yes :)
                    style={{
                        padding: '15px 40px',
                        fontSize: '1.2rem',
                        borderRadius: '50px',
                        background: 'rgba(255, 255, 255, 0.1)',
                        border: '1px solid rgba(255, 255, 255, 0.3)',
                        color: 'var(--color-text-body)',
                        cursor: 'pointer',
                        fontWeight: 'bold',
                        backdropFilter: 'blur(5px)'
                    }}
                >
                    Of course 💕
                </motion.button>
            </div>
        </CardWrapper>
    );
};

export default ValentineQuestionCard;
