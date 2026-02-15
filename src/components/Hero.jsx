import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowDown } from 'react-icons/fi';
import './Hero.css';

const Hero = () => {
    // Animate each letter individually
    const titleText = "BUILDING BEAUTIFUL & DECENTRALIZED SYSTEMS";
    const letters = titleText.split("");

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.08,
                delayChildren: 0.2,
            },
        },
    };

    const letterVariants = {
        hidden: { 
            opacity: 0, 
            y: 50,
            rotateX: 90,
            scale: 0.3
        },
        visible: { 
            opacity: 1, 
            y: 0,
            rotateX: 0,
            scale: 1,
            transition: {
                duration: 0.8,
                ease: "easeOut",
            }
        },
    };

    return (
        <section id="hero" className="hero-section bg-black grid-bg">
            <div className="container hero-container">
                {/* Floating animated particles */}
                <div className="hero-particles">
                    <div className="particle particle-1 animate-float"></div>
                    <div className="particle particle-2 animate-float" style={{animationDelay: '1s'}}></div>
                    <div className="particle particle-3 animate-float" style={{animationDelay: '2s'}}></div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="hero-content"
                >
                    {/* Animated badge */}
                    <motion.div 
                        className="hero-badge"
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                    >
                        <span className="badge badge-green mono animate-shimmer-glow">
                            UI/UX & WEB3 DEVELOPER
                        </span>
                    </motion.div>

                    {/* Letter-by-letter animated title */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="hero-title-wrapper"
                    >
                        <h1 className="hero-title">
                            {letters.map((letter, index) => (
                                <motion.span
                                    key={index}
                                    variants={letterVariants}
                                    className={letter === " " ? "letter-space" : "letter"}
                                >
                                    {letter === " " ? "\u00A0" : letter}
                                </motion.span>
                            ))}
                        </h1>
                    </motion.div>

                    {/* Animated accent underline */}
                    <motion.div 
                        className="hero-accent-line"
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ delay: 1.2, duration: 0.8 }}
                    ></motion.div>

                    {/* Subtitle with staggered animation */}
                    <motion.p 
                        className="hero-subtitle mono"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.4, duration: 0.6 }}
                    >
                        Active contributor to cloud-native infrastructure, blockchain protocols, and smart contracts.
                        <br />
                        Focus on code quality, design systems, and secure decentralized applications.
                    </motion.p>

                    {/* CTA Buttons with hover glow */}
                    <motion.div 
                        className="hero-cta"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.6, duration: 0.6 }}
                    >
                        <motion.a 
                            href="#projects" 
                            className="btn btn-primary animate-scale-bounce"
                            whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(0, 255, 136, 0.6)" }}
                            whileTap={{ scale: 0.95 }}
                        >
                            VIEW MY WORK
                        </motion.a>
                        <motion.a 
                            href="#contact" 
                            className="btn btn-outline animate-bounce-border"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            GET IN TOUCH
                        </motion.a>
                    </motion.div>
                </motion.div>

                {/* Animated scroll indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2, duration: 1 }}
                    className="scroll-indicator"
                >
                    <motion.div
                        animate={{ y: [0, 10, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                    >
                        <FiArrowDown className="scroll-icon animate-pulse-glow" />
                    </motion.div>
                    <span className="mono">SCROLL TO EXPLORE</span>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
