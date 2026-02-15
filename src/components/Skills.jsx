import React from 'react';
import { motion } from 'framer-motion';
import { skills } from '../data/content';
import './Skills.css';

const Skills = () => {
    const skillCategories = [
        { title: 'Frontend', skills: skills.frontend, color: 'blue' },
        { title: 'Web3', skills: skills.web3, color: 'purple' },
        { title: 'Design', skills: skills.design, color: 'green' },
        { title: 'Backend/Infra', skills: skills.backend, color: 'orange' },
        { title: 'Tools', skills: skills.tools, color: 'yellow' },
    ];

    return (
        <section id="skills" className="skills-section bg-black section">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="section-header"
                >
                    <span className="badge badge-orange mono">TECH STACK</span>
                    <h2 className="section-title">
                        SKILLS &
                        <br />
                        <span className="title-accent">EXPERTISE</span>
                    </h2>
                </motion.div>

                <div className="skills-grid">
                    {skillCategories.map((category, catIndex) => (
                        <motion.div
                            key={category.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: catIndex * 0.1, duration: 0.6 }}
                            className="skill-category card"
                        >
                            <h3 className="category-title-skill mono">{category.title}</h3>
                            <div className="skill-tags">
                                {category.skills.map((skill, skillIndex) => (
                                    <motion.span
                                        key={skill}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: catIndex * 0.1 + skillIndex * 0.05, duration: 0.3 }}
                                        className={`badge badge-${category.color}`}
                                    >
                                        {skill}
                                    </motion.span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
