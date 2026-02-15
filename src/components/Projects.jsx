import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import { personalProjects } from '../data/content';
import './Projects.css';

const Projects = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3,
            },
        },
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 60, scale: 0.8 },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                duration: 0.8,
                ease: "easeOut",
            }
        },
    };

    return (
        <section id="projects" className="projects-section bg-white section">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="section-header"
                >
                    <motion.span 
                        className="badge badge-blue mono"
                        animate={{ boxShadow: "0 0 20px rgba(14, 165, 233, 0.4)" }}
                        transition={{ duration: 2, repeat: Infinity }}
                    >
                        PERSONAL PROJECTS
                    </motion.span>
                    <h2 className="section-title">
                        PROOF OF
                        <br />
                        <span className="title-accent-dark animate-gradient-shift">WORK</span>
                    </h2>
                </motion.div>

                <motion.div 
                    className="featured-projects"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {personalProjects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            variants={cardVariants}
                            className="featured-project-card card-white"
                            whileHover={{ 
                                y: -20,
                                boxShadow: "0 20px 60px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 255, 136, 0.2)"
                            }}
                            transition={{ duration: 0.4 }}
                        >
                            <motion.div 
                                className="project-content-grid"
                                whileHover={{ scale: 1.02 }}
                                transition={{ duration: 0.3 }}
                            >
                                <div className="project-info">
                                    <motion.h3 
                                        className="featured-project-title"
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.2 }}
                                    >
                                        {project.name}
                                    </motion.h3>
                                    <motion.p 
                                        className="featured-project-description"
                                        initial={{ opacity: 0 }}
                                        whileInView={{ opacity: 1 }}
                                        transition={{ delay: 0.3 }}
                                    >
                                        {project.description}
                                    </motion.p>

                                    <motion.div 
                                        className="features-section"
                                        initial={{ opacity: 0 }}
                                        whileInView={{ opacity: 1 }}
                                        transition={{ delay: 0.4 }}
                                    >
                                        <div className="features-label mono">KEY FEATURES:</div>
                                        <ul className="features-list">
                                            {project.features.map((feature, idx) => (
                                                <motion.li 
                                                    key={idx}
                                                    initial={{ opacity: 0, x: -10 }}
                                                    whileInView={{ opacity: 1, x: 0 }}
                                                    transition={{ delay: 0.4 + idx * 0.1 }}
                                                >
                                                    {feature}
                                                </motion.li>
                                            ))}
                                        </ul>
                                    </motion.div>

                                    <motion.div 
                                        className="project-tech"
                                        initial={{ opacity: 0 }}
                                        whileInView={{ opacity: 1 }}
                                        transition={{ delay: 0.5 }}
                                    >
                                        {project.technologies.map((tech, idx) => (
                                            <motion.span 
                                                key={idx} 
                                                className="badge badge-purple"
                                                whileHover={{ scale: 1.1, boxShadow: "0 0 15px rgba(168, 85, 247, 0.6)" }}
                                                initial={{ opacity: 0, scale: 0 }}
                                                whileInView={{ opacity: 1, scale: 1 }}
                                                transition={{ delay: 0.5 + idx * 0.08 }}
                                            >
                                                {tech}
                                            </motion.span>
                                        ))}
                                    </motion.div>

                                    <motion.div 
                                        className="project-actions"
                                        initial={{ opacity: 0, y: 10 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.6 }}
                                    >
                                        <motion.a
                                            href={project.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="btn btn-primary"
                                            whileHover={{ 
                                                scale: 1.05,
                                                boxShadow: "0 0 30px rgba(0, 255, 136, 0.6)"
                                            }}
                                            whileTap={{ scale: 0.95 }}
                                        >
                                            <FiExternalLink /> LIVE DEMO
                                        </motion.a>
                                        {project.github && (
                                            <motion.a
                                                href={project.github}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="btn btn-secondary"
                                                whileHover={{ 
                                                    scale: 1.05,
                                                    boxShadow: "0 0 20px rgba(14, 165, 233, 0.6)"
                                                }}
                                                whileTap={{ scale: 0.95 }}
                                            >
                                                <FiGithub /> VIEW CODE
                                            </motion.a>
                                        )}
                                    </motion.div>
                                </div>

                                <motion.div 
                                    className="project-preview"
                                    whileHover={{ scale: 1.05, rotateY: 5 }}
                                    style={{ perspective: "1000px" }}
                                    transition={{ duration: 0.3 }}
                                >
                                    {project.image ? (
                                        <motion.img
                                            src={project.image}
                                            alt={`${project.name} preview`}
                                            className="preview-image"
                                            whileHover={{ scale: 1.1 }}
                                            transition={{ duration: 0.3 }}
                                        />
                                    ) : (
                                        <div className="preview-placeholder">
                                            <motion.div 
                                                className="preview-icon"
                                                animate={{ rotate: 360 }}
                                                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                            >
                                                <FiExternalLink size={48} />
                                            </motion.div>
                                            <p className="mono">LIVE DEMO AVAILABLE</p>
                                            <a
                                                href={project.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="preview-link"
                                            >
                                                {project.url}
                                            </a>
                                        </div>
                                    )}
                                </motion.div>
                            </motion.div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Projects;
