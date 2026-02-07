import React from 'react';
import CardWrapper from '../CardWrapper';
import { motion } from 'framer-motion';
import { loadImages, getRandomImage } from '../../utils/imageLoader';
import specificWelcomeImage from '../../assets/IMG-20241103-WA0000_1.png';

// const images = loadImages();
// Ensure we have a valid image, otherwise fallback
const welcomeImage = specificWelcomeImage; // Use the specific image requested

const WelcomeCard = ({ onNext }) => {
    return (
        <CardWrapper>
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1, y: [0, -10, 0] }}
                transition={{
                    opacity: { duration: 0.8 },
                    scale: { duration: 0.8 },
                    y: { duration: 3, repeat: Infinity, ease: "easeInOut" }
                }}
                style={{
                    width: '100%',
                    height: '300px', // Increased height for better visual
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    overflow: 'hidden',
                    borderRadius: '16px', // Rounded corners for image
                    boxShadow: '0 10px 25px rgba(255, 105, 180, 0.3)', // Pink glow
                    marginBottom: '1.5rem',
                    backgroundColor: '#fff0f5' // Soft background
                }}
            >
                <img
                    src={welcomeImage}
                    alt="Welcome Surprise"
                    onError={(e) => { e.target.src = 'https://placehold.co/600x400?text=Error+Loading'; }}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
            </motion.div>

            <motion.h1
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                style={{
                    fontFamily: "'Dancing Script', cursive",
                    fontSize: '2.5rem',
                    color: '#d4145a',
                    marginBottom: '0.5rem'
                }}
            >
                Happy Rose Day baby!
            </motion.h1>

            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                style={{
                    margin: '0 0 2rem',
                    fontSize: '1.2rem',
                    color: '#666',
                    fontFamily: "'Quicksand', sans-serif"
                }}
            >
                A special surprise is waiting for you...
            </motion.p>

            <motion.button
                whileHover={{ scale: 1.1, boxShadow: "0px 0px 15px rgb(255, 105, 180)" }}
                whileTap={{ scale: 0.95 }}
                animate={{ scale: [1, 1.05, 1] }}
                transition={{
                    scale: { duration: 1.5, repeat: Infinity, ease: "easeInOut" },
                    default: { duration: 0.3 }
                }}
                onClick={onNext}
                style={{
                    padding: '14px 40px',
                    fontSize: '1.2rem',
                    borderRadius: '50px',
                    background: 'linear-gradient(45deg, #ff6b6b, #ff8e8e)',
                    border: 'none',
                    color: 'white',
                    cursor: 'pointer',
                    fontWeight: 'bold',
                    boxShadow: '0 4px 15px rgba(255, 107, 107, 0.4)'
                }}
            >
                Open Surprise 🌹
            </motion.button>
        </CardWrapper>
    );
};

export default WelcomeCard;
