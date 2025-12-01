import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
    const skillCategories = [
        {
            category: 'Technical Skills',
            skills: [
                'Customer Support & Troubleshooting',
                'Zoom, Teams, Google Meet, OBS',
                'Windows OS, Android, Hardware/Software',
                'Network Diagnostics'
            ]
        },
        {
            category: 'Data & Analysis',
            skills: [
                'SQL', 'Python', 'R', 'Excel', 'Power BI', 'Tableau'
            ]
        },
        {
            category: 'Documentation',
            skills: [
                'Technical Writing', 'Support Guides', 'Incident Tracking'
            ]
        },
        {
            category: 'Soft Skills',
            skills: [
                'Customer Service Mindset', 'Communication', 'Problem-solving',
                'Stakeholder Management', 'Time Management', 'Collaboration', 'Empathy'
            ]
        }
    ];

    return (
        <section id="skills">
            <h2 className="neon-text" style={{ marginBottom: '3rem' }}>Skills & Expertise</h2>
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                gap: '2rem',
                width: '100%'
            }}>
                {skillCategories.map((cat, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="glass-panel"
                    >
                        <h3 style={{ color: 'var(--secondary-color)', marginBottom: '1rem' }}>{cat.category}</h3>
                        <ul style={{ listStyle: 'none', padding: 0 }}>
                            {cat.skills.map((skill, i) => (
                                <li key={i} style={{
                                    marginBottom: '0.5rem',
                                    display: 'flex',
                                    alignItems: 'center',
                                    color: 'var(--text-muted)'
                                }}>
                                    <span style={{
                                        width: '6px',
                                        height: '6px',
                                        background: 'var(--primary-color)',
                                        borderRadius: '50%',
                                        marginRight: '10px'
                                    }} />
                                    {skill}
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Skills;
