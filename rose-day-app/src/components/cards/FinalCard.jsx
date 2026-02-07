import React from 'react';
import CardWrapper from '../CardWrapper';
import { motion } from 'framer-motion';
import { loadImages, getRandomImage } from '../../utils/imageLoader';

const images = loadImages();
// Pick a different image for the final card
const finalImage = images.length > 0 ? (images[images.length - 5] || images[1]) : getRandomImage([]);

const FinalCard = ({ onReplay }) => {
    return (
        <CardWrapper>
            <motion.h1
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
                style={{
                    marginBottom: '1.5rem',
                    fontSize: '2.8rem',
                    fontFamily: "'Dancing Script', cursive",
                    color: '#ff4d88',
                    textShadow: '2px 2px 4px rgba(0,0,0,0.1)'
                }}
            >
                I Love You baby!
            </motion.h1>

            <motion.div
                animate={{ scale: [1, 1.02, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                style={{
                    width: '100%',
                    height: '280px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    overflow: 'hidden',
                    borderRadius: '20px',
                    boxShadow: '0 10px 30px rgba(255, 77, 136, 0.3)',
                    marginBottom: '2rem',
                    position: 'relative'
                }}
            >
                <div style={{ position: 'absolute', top: 10, left: 10, fontSize: '2rem' }}>💕</div>
                <div style={{ position: 'absolute', bottom: 10, right: 10, fontSize: '2rem' }}>💖</div>

                <img
                    src={finalImage}
                    alt="Final Love"
                    onError={(e) => { e.target.src = 'https://placehold.co/600x400/ff4d88/ffffff?text=Error+Loading'; }}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
            </motion.div>

            <motion.button
                whileHover={{ scale: 1.1, boxShadow: "0px 0px 20px rgb(255, 77, 136)" }}
                whileTap={{ scale: 0.95 }}
                onClick={onReplay}
                style={{
                    padding: '14px 40px',
                    fontSize: '1.3rem',
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
                Replay My Love 🔄
            </motion.button>
        </CardWrapper>
    );
};

export default FinalCard;
