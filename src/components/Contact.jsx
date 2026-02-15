import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiPhone, FiMail, FiDownload } from 'react-icons/fi';
import { personalInfo } from '../data/content';
import './Contact.css';

const Contact = () => {
    return (
        <section id="contact" className="contact-section bg-black section">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="section-header"
                >
                    <span className="badge badge-green mono">GET IN TOUCH</span>
                    <h2 className="section-title">
                        LET'S
                        <br />
                        <span className="title-accent">CONNECT</span>
                    </h2>
                    <p className="section-subtitle mono">
                        Open to collaborations, open source contributions, and new opportunities.
                    </p>
                </motion.div>

                <div className="contact-content">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        className="contact-card card"
                    >
                        <h3 className="contact-title mono">SOCIAL LINKS</h3>
                        <div className="social-links">
                            <a
                                href={personalInfo.social.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="social-link"
                            >
                                <FiGithub className="social-icon" />
                                <span className="mono">GITHUB</span>
                            </a>
                            <a
                                href={personalInfo.social.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="social-link"
                            >
                                <FiLinkedin className="social-icon" />
                                <span className="mono">LINKEDIN</span>
                            </a>
                            {personalInfo.social.phone && (
                                <a
                                    href={`tel:${personalInfo.social.phone.replace(/\s+/g, '')}`}
                                    className="social-link"
                                >
                                    <FiPhone className="social-icon" />
                                    <span className="mono">PHONE</span>
                                </a>
                            )}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                        className="contact-card card"
                    >
                        <h3 className="contact-title mono">EMAIL</h3>
                        <a href={`mailto:${personalInfo.email}`} className="email-link mono">
                            <FiMail className="email-icon" />
                            {personalInfo.email}
                        </a>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4, duration: 0.6 }}
                        className="contact-card card"
                    >
                        <h3 className="contact-title mono">RESUME</h3>
                        <a href={personalInfo.resume} download className="btn btn-primary resume-btn">
                            <FiDownload /> DOWNLOAD RESUME
                        </a>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6, duration: 0.6 }}
                    className="footer"
                >
                    <p className="mono">
                        © {new Date().getFullYear()} {personalInfo.name}.
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
