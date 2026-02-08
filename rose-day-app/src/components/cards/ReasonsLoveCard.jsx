import React, { useState } from 'react';
import CardWrapper from '../CardWrapper';
import { motion, AnimatePresence } from 'framer-motion';

const reasons = [
    { title: "Your Smile", icon: "❤️", desc: "It lights up my whole world." },
    { title: "Your Support", icon: "🤝", desc: "You're always there for me." },
    { title: "Your Madness", icon: "🤪", desc: "Never a dull moment with you." },
    { title: "Our Memories", icon: "📸", desc: "Every moment is precious." },
];

const ReasonsLoveCard = ({ onNext }) => {
    return (
        <CardWrapper>
            <h2 style={{ marginBottom: '1.5rem', color: 'var(--color-text-dark)' }}>Why I Love You...</h2>

            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: '15px',
                width: '100%',
                marginBottom: '2rem'
            }}>
                {reasons.map((reason, idx) => (
                    <ReasonItem key={idx} reason={reason} index={idx} />
                ))}
            </div>

            <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={onNext}
                style={{
                    padding: '12px 30px',
                    fontSize: '1.1rem',
                    borderRadius: '50px',
                    background: 'linear-gradient(45deg, #ff00cc, #333399)',
                    border: 'none',
                    color: 'white',
                    cursor: 'pointer',
                    fontWeight: 'bold',
                    boxShadow: '0 4px 15px rgba(255, 0, 204, 0.4)'
                }}
            >
                Next 💖
            </motion.button>
        </CardWrapper>
    );
};

const ReasonItem = ({ reason, index }) => {
    const [isFlipped, setIsFlipped] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            onClick={() => setIsFlipped(!isFlipped)}
            style={{
                perspective: '1000px',
                cursor: 'pointer',
                height: '120px'
            }}
        >
            <motion.div
                animate={{ rotateY: isFlipped ? 180 : 0 }}
                transition={{ duration: 0.6 }}
                style={{
                    width: '100%',
                    height: '100%',
                    position: 'relative',
                    transformStyle: 'preserve-3d',
                }}
            >
                {/* Front */}
                <div style={{
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                    backfaceVisibility: 'hidden',
                    background: 'rgba(255, 255, 255, 0.1)',
                    backdropFilter: 'blur(5px)',
                    borderRadius: '15px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    boxShadow: '0 5px 15px rgba(0,0,0,0.1)'
                }}>
                    <span style={{ fontSize: '2.5rem', marginBottom: '5px' }}>{reason.icon}</span>
                    <span style={{ fontWeight: 'bold', color: 'var(--color-text-body)' }}>{reason.title}</span>
                </div>

                {/* Back */}
                <div style={{
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                    backfaceVisibility: 'hidden',
                    background: 'linear-gradient(135deg, #ff00cc 0%, #333399 100%)',
                    borderRadius: '15px',
                    transform: 'rotateY(180deg)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '10px',
                    textAlign: 'center',
                    boxShadow: '0 5px 15px rgba(0,0,0,0.2)'
                }}>
                    <p style={{ color: 'white', fontSize: '0.9rem', margin: 0 }}>{reason.desc}</p>
                </div>
            </motion.div>
        </motion.div>
    );
};

export default ReasonsLoveCard;
