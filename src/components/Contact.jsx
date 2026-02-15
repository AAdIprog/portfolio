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

                <motion.div 
                    className="contact-content"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                >
                    <motion.div
                        initial={{ opacity: 0, y: 50, scale: 0.8 }}
                        whileInView={{ opacity: 1, y: 0, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, duration: 0.7 }}
                        className="contact-card card"
                        whileHover={{ 
                            y: -15,
                            boxShadow: "0 0 40px rgba(0, 255, 136, 0.3)"
                        }}
                    >
                        <h3 className="contact-title mono">SOCIAL LINKS</h3>
                        <div className="social-links">
                            <motion.a
                                href={personalInfo.social.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="social-link"
                                whileHover={{ scale: 1.1, rotate: 5 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <FiGithub className="social-icon animate-float" />
                                <span className="mono">GITHUB</span>
                            </motion.a>
                            <motion.a
                                href={personalInfo.social.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="social-link"
                                whileHover={{ scale: 1.1, rotate: -5 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <FiLinkedin className="social-icon animate-float" style={{animationDelay: '1s'}} />
                                <span className="mono">LINKEDIN</span>
                            </motion.a>
                            {personalInfo.social.phone && (
                                <motion.a
                                    href={`tel:${personalInfo.social.phone.replace(/\s+/g, '')}`}
                                    className="social-link"
                                    whileHover={{ scale: 1.1, rotate: 5 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <FiPhone className="social-icon animate-float" style={{animationDelay: '2s'}} />
                                    <span className="mono">PHONE</span>
                                </motion.a>
                            )}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 50, scale: 0.8 }}
                        whileInView={{ opacity: 1, y: 0, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.35, duration: 0.7 }}
                        className="contact-card card"
                        whileHover={{ 
                            y: -15,
                            boxShadow: "0 0 40px rgba(0, 255, 136, 0.3)"
                        }}
                    >
                        <h3 className="contact-title mono">EMAIL</h3>
                        <motion.a 
                            href={`mailto:${personalInfo.email}`} 
                            className="email-link mono"
                            whileHover={{ x: 5, color: "var(--color-green)" }}
                        >
                            <FiMail className="email-icon animate-pulse-glow" />
                            {personalInfo.email}
                        </motion.a>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 50, scale: 0.8 }}
                        whileInView={{ opacity: 1, y: 0, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5, duration: 0.7 }}
                        className="contact-card card"
                        whileHover={{ 
                            y: -15,
                            boxShadow: "0 0 40px rgba(0, 255, 136, 0.3)"
                        }}
                    >
                        <h3 className="contact-title mono">RESUME</h3>
                        <motion.a 
                            href={personalInfo.resume} 
                            download 
                            className="btn btn-primary resume-btn"
                            whileHover={{ 
                                scale: 1.05,
                                boxShadow: "0 0 30px rgba(0, 255, 136, 0.6)"
                            }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <FiDownload /> DOWNLOAD RESUME
                        </motion.a>
                    </motion.div>
                </motion.div>

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
