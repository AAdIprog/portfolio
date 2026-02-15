import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import { personalProjects } from '../data/content';
import './Projects.css';

const Projects = () => {
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
                    <span className="badge badge-blue mono">PERSONAL PROJECTS</span>
                    <h2 className="section-title">
                        PROOF OF
                        <br />
                        <span className="title-accent-dark">WORK</span>
                    </h2>
                </motion.div>

                <div className="featured-projects">
                    {personalProjects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2, duration: 0.7 }}
                            className="featured-project-card card-white"
                        >
                            <div className="project-content-grid">
                                <div className="project-info">
                                    <h3 className="featured-project-title">{project.name}</h3>
                                    <p className="featured-project-description">{project.description}</p>

                                    <div className="features-section">
                                        <div className="features-label mono">KEY FEATURES:</div>
                                        <ul className="features-list">
                                            {project.features.map((feature, idx) => (
                                                <li key={idx}>{feature}</li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div className="project-tech">
                                        {project.technologies.map((tech, idx) => (
                                            <span key={idx} className="badge badge-purple">{tech}</span>
                                        ))}
                                    </div>

                                    <div className="project-actions">
                                        <a
                                            href={project.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="btn btn-primary"
                                        >
                                            <FiExternalLink /> LIVE DEMO
                                        </a>
                                        {project.github && (
                                            <a
                                                href={project.github}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="btn btn-secondary"
                                            >
                                                <FiGithub /> VIEW CODE
                                            </a>
                                        )}
                                    </div>
                                </div>

                                <div className="project-preview">
                                    {project.image ? (
                                        <img
                                            src={project.image}
                                            alt={`${project.name} preview`}
                                            className="preview-image"
                                        />
                                    ) : (
                                        <div className="preview-placeholder">
                                            <div className="preview-icon">
                                                <FiExternalLink size={48} />
                                            </div>
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
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
