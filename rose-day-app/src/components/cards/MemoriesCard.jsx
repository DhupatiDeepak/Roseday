import React from 'react';
import CardWrapper from '../CardWrapper';
import { motion } from 'framer-motion';
import { loadImages } from '../../utils/imageLoader';


import img1 from '../../assets/Snapchat-1978097576.jpg';
import img2 from '../../assets/Snapchat-1882554451.jpg';
import img3 from '../../assets/IMG-20240215-WA0026.jpg';
import img4 from '../../assets/Snapchat-1707151789.jpg';
import img5 from '../../assets/Snapchat-1381780761.jpg';

const allImages = loadImages();
// Use specific images for the left side
const smallImages = [img1, img2, img3, img4];
// Use specific image for the right side (tall image)
const tallImage = img5;

const MemoriesCard = ({ onNext }) => {
    return (
        <CardWrapper>
            <h2 style={{ marginBottom: '1.5rem' }}>Our Beautiful Memories</h2>

            <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '0', // No gap
                width: '100%',
                marginBottom: '2rem',
                borderRadius: '12px', // Apply radius to container
                overflow: 'hidden'    // Clip content
            }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0', height: '100%' }}>
                    {smallImages.map((src, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            whileHover={{ scale: 1.1, zIndex: 10, transition: { duration: 0.2 } }}
                            style={{
                                flex: 1, // Allow images to fill available height evenly
                                overflow: 'hidden',
                                position: 'relative', // Ensure relative positioning
                                cursor: 'pointer'
                            }}
                        >
                            <img
                                src={src}
                                alt={`Memory ${idx + 1}`}
                                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', position: 'absolute', top: 0, left: 0 }}
                            />
                        </motion.div>
                    ))}
                </div>
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 }}
                    whileHover={{ scale: 1.05, zIndex: 10 }}
                    style={{
                        height: '100%',
                        minHeight: '240px', // Minimum height for the card
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        overflow: 'hidden',
                        position: 'relative',
                        cursor: 'pointer'
                    }}
                >
                    <img
                        src={tallImage}
                        alt="Tall Memory"
                        style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', position: 'absolute', top: 0, left: 0 }}
                    />
                </motion.div>
            </div>

            <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={onNext}
                style={{
                    padding: '12px 30px',
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
                Next <span>→</span>
            </motion.button>
        </CardWrapper>
    );
};

export default MemoriesCard;
