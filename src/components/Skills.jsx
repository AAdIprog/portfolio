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

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
            },
        },
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 40, scale: 0.9 },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                duration: 0.6,
                ease: "easeOut",
            }
        },
    };

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
                    <motion.span 
                        className="badge badge-orange mono"
                        animate={{ boxShadow: "0 0 20px rgba(249, 115, 22, 0.4)" }}
                        transition={{ duration: 2, repeat: Infinity }}
                    >
                        TECH STACK
                    </motion.span>
                    <h2 className="section-title">
                        SKILLS &
                        <br />
                        <span className="title-accent animate-gradient-shift">EXPERTISE</span>
                    </h2>
                </motion.div>

                <motion.div 
                    className="skills-grid"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {skillCategories.map((category, catIndex) => (
                        <motion.div
                            key={category.title}
                            variants={cardVariants}
                            className="skill-category card"
                            whileHover={{ 
                                y: -15,
                                boxShadow: `0 0 30px rgba(255, 255, 255, 0.1), 0 0 40px rgba(14, 165, 233, 0.2)`
                            }}
                            transition={{ duration: 0.4 }}
                        >
                            <motion.h3 
                                className="category-title-skill mono"
                                animate={{ color: ["var(--color-white)", "var(--color-green)", "var(--color-white)"] }}
                                transition={{ duration: 3, repeat: Infinity }}
                            >
                                {category.title}
                            </motion.h3>
                            <div className="skill-tags">
                                {category.skills.map((skill, skillIndex) => (
                                    <motion.span
                                        key={skill}
                                        initial={{ opacity: 0, scale: 0, rotate: -20 }}
                                        whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: catIndex * 0.15 + skillIndex * 0.08, duration: 0.5 }}
                                        whileHover={{ 
                                            scale: 1.15,
                                            boxShadow: `0 0 15px rgba(14, 165, 233, 0.6)`,
                                            rotate: 5
                                        }}
                                        className={`badge badge-${category.color}`}
                                    >
                                        {skill}
                                    </motion.span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Skills;
