import React from 'react';
import CardWrapper from '../CardWrapper';
import { motion } from 'framer-motion';

const MessageCard = ({ onNext }) => {
    return (
        <CardWrapper>
            <motion.div
                initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ duration: 0.8, type: "spring" }}
                style={{
                    border: 'none',
                    borderRadius: '4px', // Sharp corners like paper
                    padding: '3rem',
                    backgroundColor: '#fffdf0', // Creamy paper color
                    marginBottom: '2rem',
                    width: '100%',
                    boxSizing: 'border-box',
                    boxShadow: '0 10px 30px rgba(0,0,0,0.15)',
                    position: 'relative',
                    backgroundImage: 'linear-gradient(#e1e1e1 1px, transparent 1px)', // Lined paper effect
                    backgroundSize: '100% 2rem'
                }}
            >
                <div style={{ position: 'absolute', top: '-15px', left: '50%', transform: 'translateX(-50%)', fontSize: '2rem' }}>
                    💌
                </div>

                <h2 style={{
                    fontSize: '2rem',
                    marginBottom: '1.5rem',
                    fontFamily: "'Dancing Script', cursive",
                    color: '#d4145a',
                    lineHeight: '2rem' // Align with lines
                }}>
                    "To My Favorite Person,"
                </h2>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 1 }}
                    style={{
                        fontFamily: "'Dancing Script', cursive",
                        fontSize: '1.8rem',
                        lineHeight: '2rem', // Align with lines
                        color: '#444',
                        margin: 0
                    }}
                >
                    Just like a rose, you make my life beautiful. Thank you for everything. <br />
                    <br />
                    Happy Rose Day baby! 💖
                </motion.p>
                <div style={{ marginTop: '2rem', textAlign: 'right', fontSize: '1.5rem', fontFamily: "'Dancing Script', cursive", color: '#d4145a' }}>
                    - Forever Yours
                </div>
            </motion.div>

            <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={onNext}
                style={{
                    padding: '12px 32px',
                    fontSize: '1.1rem',
                    borderRadius: '50px',
                    background: 'linear-gradient(45deg, #ff6b6b, #ff8e8e)',
                    border: 'none',
                    color: 'white',
                    cursor: 'pointer',
                    fontWeight: 'bold',
                    boxShadow: '0 4px 15px rgba(255, 107, 107, 0.4)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px'
                }}
            >
                Last Surprise <span>→</span>
            </motion.button>
        </CardWrapper>
    );
};

export default MessageCard;
