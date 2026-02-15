import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import { openSourceProjects, stats } from '../data/content';
import './OpenSource.css';

const OpenSource = () => {
    return (
        <section id="opensource" className="opensource-section bg-black section">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="section-header"
                >
                    <span className="badge badge-green mono">OPEN SOURCE CONTRIBUTIONS</span>
                    <h2 className="section-title">
                        CONTRIBUTING TO
                        <br />
                        <span className="title-accent">REAL SYSTEMS</span>
                    </h2>
                    <p className="section-subtitle mono">
                        Active contributor to cloud-native infrastructure, runtime systems, and tooling.
                        <br />
                        Focus on code quality, test stability, and system reliability.
                    </p>
                </motion.div>

                {/* Stats Cards */}
                <div className="stats-grid">
                    <motion.div
                        initial={{ opacity: 0, y: 40, scale: 0.8 }}
                        whileInView={{ opacity: 1, y: 0, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1, duration: 0.6 }}
                        className="stat-card"
                        whileHover={{ 
                            scale: 1.05,
                            boxShadow: "0 0 40px rgba(0, 255, 136, 0.4)"
                        }}
                    >
                        <motion.div 
                            className="stat-number"
                            animate={{ color: ["var(--color-white)", "var(--color-green)", "var(--color-white)"] }}
                            transition={{ duration: 3, repeat: Infinity }}
                        >
                            {stats.prsmerged}
                        </motion.div>
                        <div className="stat-label mono">PRS MERGED</div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 40, scale: 0.8 }}
                        whileInView={{ opacity: 1, y: 0, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        className="stat-card"
                        whileHover={{ 
                            scale: 1.05,
                            boxShadow: "0 0 40px rgba(0, 255, 136, 0.4)"
                        }}
                    >
                        <motion.div 
                            className="stat-number"
                            animate={{ color: ["var(--color-white)", "var(--color-blue)", "var(--color-white)"] }}
                            transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                        >
                            {stats.issuesResolved}
                        </motion.div>
                        <div className="stat-label mono">ISSUES RESOLVED</div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 40, scale: 0.8 }}
                        whileInView={{ opacity: 1, y: 0, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                        className="stat-card"
                        whileHover={{ 
                            scale: 1.05,
                            boxShadow: "0 0 40px rgba(0, 255, 136, 0.4)"
                        }}
                    >
                        <motion.div 
                            className="stat-number"
                            animate={{ color: ["var(--color-white)", "var(--color-purple)", "var(--color-white)"] }}
                            transition={{ duration: 3, repeat: Infinity, delay: 2 }}
                        >
                            {stats.repositories}
                        </motion.div>
                        <div className="stat-label mono">REPOSITORIES</div>
                    </motion.div>
                </div>

                {/* Project Category */}
                <div className="category-section">
                    <h3 className="category-title mono">
                        <span className="category-icon">▣</span> CLOUD NATIVE INFRASTRUCTURE
                    </h3>

                    <motion.div 
                        className="projects-grid"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                    >
                        {openSourceProjects.map((project, index) => (
                            <motion.div
                                key={project.id}
                                initial={{ opacity: 0, y: 50, scale: 0.8 }}
                                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.15, duration: 0.7 }}
                                className="project-card card"
                                whileHover={{ 
                                    y: -20,
                                    boxShadow: "0 0 40px rgba(0, 255, 136, 0.2), 0 20px 60px rgba(0, 0, 0, 0.3)"
                                }}
                            >
                                <div className="project-header">
                                    <div>
                                        <h4 className="project-name">{project.name}</h4>
                                        <p className="project-repo mono">{project.repo}</p>
                                    </div>
                                    <div className="project-tech-badge">
                                        <span className="badge badge-blue">{project.technologies[0]}</span>
                                    </div>
                                </div>

                                <p className="project-description">{project.description}</p>

                                <div className="contribution-section">
                                    <div className="contribution-label mono">KEY CONTRIBUTIONS:</div>
                                    <ul className="contribution-list">
                                        {project.details.map((detail, idx) => (
                                            <li key={idx}>{detail}</li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="project-footer">
                                    <div className="tech-tags">
                                        {project.technologies.slice(1).map((tech, idx) => (
                                            <span key={idx} className="badge badge-orange">{tech}</span>
                                        ))}
                                    </div>
                                    <div className="project-links">
                                        {project.prLink && (
                                            <a
                                                href={project.prLink}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="project-link"
                                            >
                                                <FiExternalLink /> VIEW WORK
                                            </a>
                                        )}
                                        <a
                                            href={project.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="project-link"
                                        >
                                            <FiGithub /> VIEW ON GITHUB
                                        </a>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default OpenSource;
