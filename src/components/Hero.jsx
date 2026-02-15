import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowDown } from 'react-icons/fi';
import './Hero.css';

const Hero = () => {
    return (
        <section id="hero" className="hero-section bg-black grid-bg">
            <div className="container hero-container">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="hero-content"
                >
                    <div className="hero-badge">
                        <span className="badge badge-green mono">UI/UX & WEB3 DEVELOPER</span>
                    </div>

                    <h1 className="hero-title">
                        BUILDING
                        <br />
                        <span className="hero-title-accent">BEAUTIFUL</span>
                        <br />
                        & DECENTRALIZED SYSTEMS
                    </h1>

                    <p className="hero-subtitle mono">
                        Active contributor to cloud-native infrastructure, blockchain protocols, and smart contracts.
                        <br />
                        Focus on code quality, design systems, and secure decentralized applications.
                    </p>

                    <div className="hero-cta">
                        <a href="#projects" className="btn btn-primary">
                            VIEW MY WORK
                        </a>
                        <a href="#contact" className="btn btn-outline">
                            GET IN TOUCH
                        </a>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 1 }}
                    className="scroll-indicator"
                >
                    <FiArrowDown className="scroll-icon" />
                    <span className="mono">SCROLL TO EXPLORE</span>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
