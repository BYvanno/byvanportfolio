import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ProjectCard = ({ project, index }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <motion.div
            layout
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -5, boxShadow: '0 10px 30px -10px rgba(0, 243, 255, 0.2)' }}
            className="glass-panel"
            style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                height: '100%',
                overflow: 'hidden',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                background: 'rgba(255, 255, 255, 0.03)'
            }}
        >
            <div>
                <motion.h3 layout="position" style={{ color: 'var(--primary-color)', fontSize: '1.5rem', marginBottom: '1rem' }}>
                    {project.title}
                </motion.h3>

                <motion.div
                    layout
                    style={{
                        color: 'var(--text-muted)',
                        marginBottom: '1.5rem',
                        position: 'relative',
                        maxHeight: isExpanded ? 'none' : '150px',
                        overflow: 'hidden',
                        maskImage: isExpanded ? 'none' : 'linear-gradient(to bottom, black 60%, transparent 100%)',
                        WebkitMaskImage: isExpanded ? 'none' : 'linear-gradient(to bottom, black 60%, transparent 100%)'
                    }}
                >
                    {Array.isArray(project.description) ? (
                        <ul style={{ paddingLeft: '1.2rem', textAlign: 'left' }}>
                            {project.description.map((item, i) => (
                                <li key={i} style={{ marginBottom: '0.5rem', fontSize: '0.9rem' }}>{item}</li>
                            ))}
                        </ul>
                    ) : (
                        <div style={{ fontSize: '0.95rem', lineHeight: '1.6' }}>{project.description}</div>
                    )}
                </motion.div>

                <motion.button
                    layout
                    onClick={() => setIsExpanded(!isExpanded)}
                    style={{
                        background: 'transparent',
                        border: 'none',
                        color: 'var(--primary-color)',
                        cursor: 'pointer',
                        fontSize: '0.9rem',
                        fontWeight: 'bold',
                        marginBottom: '1.5rem',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        padding: 0
                    }}
                    whileHover={{ scale: 1.05 }}
                >
                    {isExpanded ? 'Show Less' : 'Read More'}
                    <span style={{ transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s' }}>▼</span>
                </motion.button>
            </div>

            <motion.div layout style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: 'auto' }}>
                {project.tags.map((tag, i) => (
                    <span key={i} style={{
                        fontSize: '0.75rem',
                        padding: '0.4rem 1rem',
                        borderRadius: '20px',
                        background: 'rgba(0, 243, 255, 0.1)',
                        color: 'var(--primary-color)',
                        border: '1px solid rgba(0, 243, 255, 0.2)',
                        fontWeight: '500'
                    }}>
                        {tag}
                    </span>
                ))}
            </motion.div>
        </motion.div>
    );
};

const Projects = () => {
    const projects = [
        {
            title: 'Elevvo Data Analytics Internship',
            description: [
                'Task 1: Sales Dashboard (Excel) - Created a clean workbook with pivot summaries and slicers.',
                'Task 2: Titanic EDA (Python) - Performed cleaning, summary stats, and visualizations.',
                'Task 3: Customer Segmentation (RFM) - Generated RFM scores and recommendations.',
                'Task 4: Survey Data Insights - Analyzed Kaggle survey data for key insights.',
                'Task 5: SQL Sales Analysis - Answered business questions using SQL scripts.',
                'Task 6: Job Market Analysis - Scraped and cleaned job listings data.',
                'Task 7: Tableau Dashboard - Visualized Walmart Sales trends and seasonality.',
                'Task 8: Predictive Modeling - Built an interactive Power BI dashboard.',
                'Task 9: Final Report - End-to-end analysis of Brazilian E-Commerce data.'
            ],
            tags: ['Python', 'Excel', 'SQL', 'Power BI', 'Tableau']
        },
        {
            title: 'Bike Sharing Analysis',
            description: (
                <>
                    <p><strong>🚴‍♂️ Analyzing Factors Affecting Bike-Sharing Demand in Seoul</strong></p>
                    <p>This project explores the key environmental and temporal factors that influence daily bike-sharing demand in Seoul. Using the Seoul Bike Sharing Dataset, the analysis uncovers patterns in weather, seasons, holidays, working days, and time-related features that shape rental behavior.</p>

                    <p style={{ marginTop: '1rem' }}><strong>📊 Project Overview</strong></p>
                    <p>The goal of this project is to understand what drives bike-sharing demand and how usage patterns change across seasons, days, and weather conditions. The findings can help optimize operations, improve planning, and support data-driven decisions in urban mobility systems.</p>

                    <p style={{ marginTop: '1rem' }}><strong>🛠 Tools & Technologies</strong></p>
                    <ul style={{ paddingLeft: '1.2rem', marginTop: '0.5rem' }}>
                        <li>Python</li>
                        <li>pandas, NumPy</li>
                        <li>matplotlib, seaborn</li>
                        <li>Jupyter Notebook</li>
                    </ul>

                    <p style={{ marginTop: '1rem' }}><strong>🔍 Key Steps</strong></p>
                    <ul style={{ paddingLeft: '1.2rem', marginTop: '0.5rem' }}>
                        <li><strong>Data Preprocessing:</strong> Converted date column into useful time features (year, month, day, weekday), handled missing values & ensured data quality, created additional features for deeper insight.</li>
                        <li><strong>Exploratory Data Analysis (EDA):</strong> Summary statistics, rental distribution, time-series trends, weather-based analysis, correlation heatmap.</li>
                    </ul>

                    <p style={{ marginTop: '1rem' }}><strong>📈 Major Findings</strong></p>
                    <p><strong>✨ Temporal Insights</strong></p>
                    <ul style={{ paddingLeft: '1.2rem', marginTop: '0.5rem' }}>
                        <li><strong>Strong seasonality:</strong> Rentals peak in summer and drop sharply in winter.</li>
                        <li><strong>Weekday vs Weekend:</strong> Higher demand on weekdays—indicating commuter usage.</li>
                        <li><strong>Hour of day:</strong> Two demand peaks at 8–9 AM and 6–7 PM, matching typical commuting times.</li>
                    </ul>

                    <p style={{ marginTop: '0.5rem' }}><strong>🌦 Environmental Insights</strong></p>
                    <ul style={{ paddingLeft: '1.2rem', marginTop: '0.5rem' }}>
                        <li><strong>Temperature:</strong> High positive correlation with rentals (strongest factor). Moderate to warm temperatures bring the highest usage.</li>
                        <li><strong>Humidity & Rainfall:</strong> Rentals decrease significantly during rainy or highly humid conditions.</li>
                        <li><strong>Visibility & Solar Radiation:</strong> Positively associated with higher rentals but less impactful than temperature.</li>
                    </ul>

                    <p style={{ marginTop: '0.5rem' }}><strong>📅 Operational Factors</strong></p>
                    <ul style={{ paddingLeft: '1.2rem', marginTop: '0.5rem' }}>
                        <li><strong>Functioning days &gt; Non-functioning days:</strong> People heavily rely on the system on regular working days.</li>
                        <li><strong>Holidays:</strong> Show lower usage, suggesting the system is used more for daily routines than leisure.</li>
                    </ul>

                    <p style={{ marginTop: '1rem' }}><strong>🧠 Conclusion</strong></p>
                    <p>Weather conditions and time-based variables play a major role in shaping bike-sharing demand. These insights support better fleet distribution, policy and infrastructure planning, demand forecasting models, and weather-aware operational strategies.</p>
                </>
            ),
            tags: ['Python', 'Data Analysis', 'Visualization', 'Jupyter']
        },
        {
            title: 'Cholera Outbreak Data Analysis',
            description: (
                <>
                    <p><strong>📌 Project Overview</strong></p>
                    <p>This project analyzes a cholera outbreak dataset collected from two provinces. The goal was to provide actionable insights for the Ministry of Health by identifying case distributions, risk factors, and recovery outcomes, as well as producing visualizations to inform outbreak response and resource allocation.</p>
                    <p>The project was completed as part of the R for Data Science (MSDA9113) final exam, MSc in Big Data Analytics.</p>

                    <p style={{ marginTop: '1rem' }}><strong>🎯 Objectives</strong></p>
                    <ul style={{ paddingLeft: '1.2rem', marginTop: '0.5rem' }}>
                        <li>Clean and prepare outbreak data (handling quality issues, harmonizing variables).</li>
                        <li>Recode age into meaningful groups for epidemiological analysis.</li>
                        <li>Calculate:
                            <ul style={{ paddingLeft: '1.2rem', listStyleType: 'circle' }}>
                                <li>Total cases</li>
                                <li>Deaths and case fatality rate (CFR)</li>
                                <li>Recovery rate</li>
                            </ul>
                        </li>
                        <li>Analyze distribution by age, gender, and geography.</li>
                        <li>Build an epidemic curve to visualize outbreak progression.</li>
                        <li>Identify risk factors driving the spread using statistical analysis.</li>
                        <li>Provide recommendations for improving surveillance and response.</li>
                    </ul>

                    <p style={{ marginTop: '1rem' }}><strong>🛠️ Tools & Technologies</strong></p>
                    <ul style={{ paddingLeft: '1.2rem', marginTop: '0.5rem' }}>
                        <li>R (tidyverse: ggplot2, dplyr, tidyr)</li>
                        <li>Excel (for initial inspection)</li>
                        <li>Statistical methods: descriptive analysis, visualization, risk factor estimation</li>
                    </ul>

                    <p style={{ marginTop: '1rem' }}><strong>📊 Key Insights</strong></p>
                    <ul style={{ paddingLeft: '1.2rem', marginTop: '0.5rem' }}>
                        <li>Case distribution varies significantly by district and age group.</li>
                        <li>Children under 5 and elderly populations are the most vulnerable.</li>
                        <li>Gender differences were identified but not uniform across districts.</li>
                        <li>The epidemic curve highlights clear outbreak peaks.</li>
                        <li>Recommendations were made to strengthen real-time data reporting, early detection, and resource allocation.</li>
                    </ul>
                </>
            ),
            tags: ['R', 'Data Analysis', 'Public Health', 'Visualization']
        },
        {
            title: 'WHO-World-Health-Organization-Data-Visualization',
            description: (
                <>
                    <p>This project explores global health and demographic indicators using datasets from the World Health Organization (WHO) and the World Bank. It focuses on life expectancy, fertility rates, and population trends, using data cleaning, exploratory data analysis (EDA), visualization, and statistical modeling to uncover insights.</p>

                    <p style={{ marginTop: '1rem' }}><strong>🚀 Project Objectives</strong></p>
                    <ul style={{ paddingLeft: '1.2rem', marginTop: '0.5rem' }}>
                        <li>Analyze global trends in life expectancy, fertility rates, and population.</li>
                        <li>Clean and preprocess WHO datasets for accurate analysis.</li>
                        <li>Perform Exploratory Data Analysis (EDA) using R.</li>
                        <li>Create clear and insightful visualizations with ggplot2.</li>
                        <li>Conduct correlation and regression analysis.</li>
                        <li>Compare regional blocs such as EAC and SADC.</li>
                        <li>Provide data-driven insights for health and development research.</li>
                    </ul>

                    <p style={{ marginTop: '1rem' }}><strong>🛠️ Tools & Technologies</strong></p>
                    <ul style={{ paddingLeft: '1.2rem', marginTop: '0.5rem' }}>
                        <li>R Programming</li>
                        <li>ggplot2 for visualizations</li>
                        <li>dplyr, tidyr for data manipulation</li>
                        <li>readr, openxlsx for data import/export</li>
                        <li>corrplot, stats for correlation & regression</li>
                    </ul>

                    <p style={{ marginTop: '1rem' }}><strong>📈 Key Analyses & Visualizations</strong></p>
                    <ul style={{ paddingLeft: '1.2rem', marginTop: '0.5rem' }}>
                        <li>Global life expectancy trends over time</li>
                        <li>Relationship between fertility rate and life expectancy</li>
                        <li>Population distribution by continent</li>
                        <li>Correlation heatmaps</li>
                        <li>Linear regression model predicting life expectancy</li>
                        <li>Comparative analysis: EAC vs SADC trends</li>
                    </ul>

                    <p style={{ marginTop: '1rem' }}><strong>🔍 Main Insights</strong></p>
                    <ul style={{ paddingLeft: '1.2rem', marginTop: '0.5rem' }}>
                        <li>Countries with higher fertility rates tend to have lower life expectancy.</li>
                        <li>African regions show significant disparities across countries.</li>
                        <li>Population size alone does not directly affect life expectancy without socioeconomic context.</li>
                        <li>Visualizations highlight patterns useful for policy and academic research.</li>
                    </ul>
                </>
            ),
            tags: ['R', 'ggplot2', 'Data Visualization', 'Statistical Analysis']
        }
    ];

    return (
        <section id="projects">
            <h2 className="neon-text" style={{ marginBottom: '4rem', fontSize: '2.5rem' }}>Key Projects</h2>
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
                gap: '2.5rem',
                width: '100%',
                padding: '0 1rem'
            }}>
                {projects.map((project, index) => (
                    <ProjectCard key={index} project={project} index={index} />
                ))}
            </div>
        </section>
    );
};

export default Projects;
