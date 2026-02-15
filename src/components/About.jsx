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
                                initial={{ opacity: 0, x: -60, scale: 0.8 }}
                                whileInView={{ opacity: 1, x: 0, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.15, duration: 0.7, ease: "easeOut" }}
                                className="timeline-item"
                                whileHover={{ x: 10 }}
                            >
                                <motion.div 
                                    className="timeline-marker"
                                    whileHover={{ scale: 1.3, boxShadow: "0 0 30px rgba(0, 255, 136, 0.8)" }}
                                    animate={{ boxShadow: "0 0 0px rgba(0, 255, 136, 0)" }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                ></motion.div>
                                <motion.div 
                                    className="timeline-content"
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    transition={{ delay: index * 0.15 + 0.2 }}
                                >
                                    <motion.div 
                                        className="timeline-year mono"
                                        animate={{ color: ["var(--color-gray-400)", "var(--color-green)", "var(--color-gray-400)"] }}
                                        transition={{ duration: 3, repeat: Infinity }}
                                    >
                                        {item.year}
                                    </motion.div>
                                    <h4 className="timeline-title">{item.title}</h4>
                                    <p className="timeline-description">{item.description}</p>
                                </motion.div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
