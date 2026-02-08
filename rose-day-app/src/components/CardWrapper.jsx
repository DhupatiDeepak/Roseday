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
                background: 'var(--color-card-bg)',
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
                borderRadius: 'var(--card-radius)',
                boxShadow: 'var(--glass-shadow)',
                border: 'var(--card-border)',
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
                color: 'var(--color-text-body)',
                transition: 'background 0.3s ease, color 0.3s ease, box-shadow 0.3s ease',
            }}
        >
            {children}
        </motion.div>
    );
};

export default CardWrapper;
