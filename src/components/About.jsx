import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <section id="about" style={{ background: 'var(--bg-color)' }}>
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="glass-panel"
                style={{ maxWidth: '800px' }}
            >
                <h2 className="neon-text" style={{ textAlign: 'center' }}>About Me</h2>
                <p style={{ fontSize: '1.1rem', marginBottom: '1.5rem', color: 'var(--text-muted)' }}>
                    I am an <strong style={{ color: 'var(--primary-color)' }}>IT SUPPORT AND A DATA ANALYST</strong> with strong experience resolving technical issues under pressure, supporting users, and managing live digital operations.
                </p>
                <p style={{ fontSize: '1.1rem', marginBottom: '1.5rem', color: 'var(--text-muted)' }}>
                    Skilled in troubleshooting hardware, software, connectivity, and audiovisual systems, with the ability to communicate clearly, manage escalations, and ensure smooth user experiences.
                </p>
                <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)' }}>
                    Also currently pursuing a Master’s in Big Data Analytics, with a passion for customer-focused problem-solving, process improvement, and delivering reliable technical support in fast-paced environments.
                </p>
            </motion.div>
        </section>
    );
};

export default About;
