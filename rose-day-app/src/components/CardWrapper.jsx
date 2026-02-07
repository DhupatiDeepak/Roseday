import React from 'react';
import { motion } from 'framer-motion';

const CardWrapper = ({ children, className = '' }) => {
    return (
        <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className={`card-wrapper ${className}`}
            style={{
                background: 'rgba(255, 240, 245, 0.95)', // LavenderBlush + transparency
                backdropFilter: 'blur(10px)',
                borderRadius: 'var(--card-radius)',
                boxShadow: 'var(--card-shadow)',
                padding: '2rem',
                maxWidth: '600px',
                width: '90%', // Responsive width
                textAlign: 'center',
                position: 'relative',
                zIndex: 10,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            {children}
        </motion.div>
    );
};

export default CardWrapper;
