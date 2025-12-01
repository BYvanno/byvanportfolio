import React from 'react';
import { motion } from 'framer-motion';
import profilePic from '../assets/profile.jpg';

const Hero = () => {
    return (
        <section id="hero" style={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            overflow: 'hidden',
            paddingTop: '120px'
        }}>
            {/* Background Elements */}
            <div style={{
                position: 'absolute',
                top: '20%',
                left: '10%',
                width: '300px',
                height: '300px',
                background: 'var(--primary-color)',
                filter: 'blur(150px)',
                opacity: 0.2,
                borderRadius: '50%'
            }} />
            <div style={{
                position: 'absolute',
                bottom: '20%',
                right: '10%',
                width: '400px',
                height: '400px',
                background: 'var(--secondary-color)',
                filter: 'blur(150px)',
                opacity: 0.2,
                borderRadius: '50%'
            }} />

            <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                zIndex: 1,
                gap: '2rem'
            }}>
                <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.8, type: 'spring' }}
                    style={{
                        position: 'relative',
                        width: '200px',
                        height: '200px',
                        borderRadius: '50%',
                        padding: '5px',
                        background: 'linear-gradient(45deg, var(--primary-color), var(--secondary-color))',
                        boxShadow: '0 0 30px rgba(0, 243, 255, 0.3)',
                        marginTop: '3rem'
                    }}
                >
                    <img
                        src={profilePic}
                        alt="Byiringiro Elie Yvan"
                        style={{
                            width: '100%',
                            height: '100%',
                            borderRadius: '50%',
                            objectFit: 'cover',
                            border: '4px solid var(--bg-color)'
                        }}
                    />
                </motion.div>

                <motion.h1
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    style={{ fontSize: '3rem', margin: 0 }}
                >
                    Hi, I'm <span className="gradient-text">Byiringiro Elie Yvan</span>
                </motion.h1>

                <motion.h2
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    style={{ fontSize: '1.5rem', fontWeight: '400', color: 'var(--text-muted)' }}
                >
                    IT SUPPORT AND A DATA ANALYST
                </motion.h2>

                <motion.p
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.7 }}
                    style={{ maxWidth: '600px', margin: '0 auto', fontSize: '1.1rem' }}
                >
                    Resolving technical issues, managing digital operations, and delivering actionable data insights.
                </motion.p>

                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.9 }}
                    style={{ marginTop: '2rem', display: 'flex', gap: '1rem' }}
                >
                    <a href="#projects" style={{
                        padding: '0.8rem 2rem',
                        background: 'transparent',
                        border: '1px solid var(--primary-color)',
                        color: 'var(--primary-color)',
                        borderRadius: '30px',
                        fontWeight: 'bold',
                        position: 'relative',
                        overflow: 'hidden',
                        transition: 'all 0.3s'
                    }}
                        onMouseOver={(e) => {
                            e.currentTarget.style.background = 'var(--primary-color)';
                            e.currentTarget.style.color = 'var(--bg-color)';
                            e.currentTarget.style.boxShadow = '0 0 20px var(--primary-color)';
                        }}
                        onMouseOut={(e) => {
                            e.currentTarget.style.background = 'transparent';
                            e.currentTarget.style.color = 'var(--primary-color)';
                            e.currentTarget.style.boxShadow = 'none';
                        }}
                    >
                        View Work
                    </a>
                    <a href="#contact" style={{
                        padding: '0.8rem 2rem',
                        background: 'var(--secondary-color)',
                        color: 'white',
                        borderRadius: '30px',
                        fontWeight: 'bold',
                        border: 'none',
                        boxShadow: '0 0 15px rgba(189, 0, 255, 0.4)'
                    }}>
                        Contact Me
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
