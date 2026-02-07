import React from 'react';
import CardWrapper from '../CardWrapper';
import { motion } from 'framer-motion';
// import { loadImages } from '../../utils/imageLoader';
// import img1 from '../../assets/IMG_20240124_073114.jpg'; // Removed as requested
import img2 from '../../assets/IMG_20250622_153050.jpg';
import img3 from '../../assets/Snapchat-443000686.jpg';
import img4 from '../../assets/Snapchat-1412737721.jpg';
import img5 from '../../assets/Snapchat-1765336199.jpg';

const galleryImages = [img2, img3, img4, img5];

const MemoriesCard2 = ({ onNext }) => {
    return (
        <CardWrapper>
            <h2 style={{ marginBottom: '1.5rem' }}>More Special Moments...</h2>

            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)', // Side by side (2 columns)
                gap: '15px',
                width: '100%',
                marginBottom: '2rem',
                // maxHeight: '500px', // Removed limit
                // overflowY: 'auto', // Removed scroll
                paddingRight: '0'
            }}>
                {galleryImages.map((src, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, scale: 0.8, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{
                            delay: idx * 0.15,
                            type: "spring",
                            stiffness: 100
                        }}
                        whileHover={{
                            scale: 1.05,
                            zIndex: 10,
                            boxShadow: "0 10px 20px rgba(0,0,0,0.2)"
                        }}
                        style={{
                            borderRadius: '12px',
                            overflow: 'hidden',
                            width: '100%',
                            height: '220px', // Fixed height for uniformity
                            boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                            cursor: 'pointer'
                        }}
                    >
                        <img
                            src={src}
                            alt={`Special Moment ${idx + 1}`}
                            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                        />
                    </motion.div>
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
                    background: 'linear-gradient(45deg, #ff6b6b, #ff8e8e)',
                    border: 'none',
                    color: 'white',
                    cursor: 'pointer',
                    fontWeight: 'bold',
                    boxShadow: '0 4px 15px rgba(255, 107, 107, 0.4)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    marginTop: 'auto'
                }}
            >
                Next <span>→</span>
            </motion.button>
        </CardWrapper>
    );
};

export default MemoriesCard2;
