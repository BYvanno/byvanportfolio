import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
    return (
        <section id="contact" style={{ minHeight: '50vh', background: 'linear-gradient(to top, var(--footer-gradient-start), var(--bg-color))' }}>
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="glass-panel"
                style={{ textAlign: 'center', maxWidth: '600px' }}
            >
                <h2 className="neon-text">Get In Touch</h2>
                <p style={{ marginBottom: '2rem', color: 'var(--text-muted)' }}>
                    Feel free to reach out for collaborations or opportunities.
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem' }}>
                    <a href="mailto:yvanbyiringiro4@gmail.com" style={{ fontSize: '1.2rem', color: 'var(--primary-color)' }}>
                        yvanbyiringiro4@gmail.com
                    </a>
                    <a href="tel:+250786191834" style={{ fontSize: '1.2rem', color: 'var(--text-color)' }}>
                        +250 786 191 834
                    </a>
                    <p style={{ color: 'var(--text-muted)' }}>Kigali, Rwanda</p>
                </div>

                <div style={{ borderTop: '1px solid var(--glass-border)', paddingTop: '1rem', marginTop: '2rem' }}>
                    <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                        © {new Date().getFullYear()} Byiringiro Elie Yvan. All rights reserved.
                    </p>
                </div>
            </motion.div>
        </section>
    );
};

export default Contact;
