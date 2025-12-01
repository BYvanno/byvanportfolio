import React from 'react';
import { motion } from 'framer-motion';

const Experience = () => {
    const experiences = [
        {
            role: 'Data Analyst Intern',
            company: 'Elevvo',
            period: 'Sept 2025 – Present',
            details: [
                'Collect, clean, and prepare datasets using Excel, Power Query, Python, and SQL.',
                'Built automated workflows to reduce manual data entry and improve reporting accuracy.',
                'Created dashboards and pivot-table reports used for weekly decision-making.',
                'Collaborated with teams to understand data needs and deliver actionable insights.'
            ]
        },
        {
            role: 'Data Annotation Intern',
            company: 'Elevvo',
            period: 'Oct 2024 – Mar 2025',
            details: [
                'Labeled, cleaned, and validated datasets for machine learning projects.',
                'Ensured data quality and consistency while working under tight deadlines.',
                'Handled large volumes of structured and unstructured data.'
            ]
        },
        {
            role: 'IT Support Technician',
            company: 'CTMK Cooperative',
            period: 'Sept 2022 – Sept 2024',
            details: [
                'Installed, configured, and maintained computers, projectors, cameras, and other digital equipment.',
                'Provided real-time support during presentations, trainings, and meetings.',
                'Troubleshot software, hardware, and network issues including VOIP and conferencing tools.',
                'Managed AV tasks such as device setup, display calibration, and equipment testing.',
                'Maintained logs, conducted preventive maintenance, and ensured equipment uptime.',
                'Strengthened customer service skills through daily user interaction and support.'
            ]
        }
    ];

    return (
        <section id="experience">
            <h2 className="neon-text" style={{ marginBottom: '3rem' }}>Professional Experience</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', width: '100%', maxWidth: '800px' }}>
                {experiences.map((exp, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.2 }}
                        viewport={{ once: true }}
                        className="glass-panel"
                        style={{ position: 'relative', borderLeft: '4px solid var(--primary-color)' }}
                    >
                        <h3 style={{ margin: 0, fontSize: '1.5rem' }}>{exp.role}</h3>
                        <h4 style={{ margin: '0.5rem 0', color: 'var(--secondary-color)' }}>{exp.company} | {exp.period}</h4>
                        <ul style={{ paddingLeft: '1.5rem', marginTop: '1rem' }}>
                            {exp.details.map((detail, i) => (
                                <li key={i} style={{ marginBottom: '0.5rem', color: 'var(--text-muted)' }}>{detail}</li>
                            ))}
                        </ul>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Experience;
