import React from 'react';
import { motion } from 'framer-motion';
import { personalInfo, timeline } from '../data/content';
import './About.css';

const About = () => {
    return (
        <section id="about" className="about-section bg-white section">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="section-header"
                >
                    <span className="badge badge-purple mono">ABOUT ME</span>
                    <h2 className="section-title">
                        MY
                        <br />
                        <span className="title-accent-dark">JOURNEY</span>
                    </h2>
                </motion.div>

                <div className="about-content">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="about-bio"
                    >
                        <p className="bio-text">{personalInfo.bio}</p>
                    </motion.div>

                    <div className="timeline">
                        {timeline.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.6 }}
                                className="timeline-item"
                            >
                                <div className="timeline-marker"></div>
                                <div className="timeline-content">
                                    <div className="timeline-year mono">{item.year}</div>
                                    <h4 className="timeline-title">{item.title}</h4>
                                    <p className="timeline-description">{item.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
