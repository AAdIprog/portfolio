import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './Navigation.css';

const Navigation = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const navLinks = [
        { label: 'OPEN SOURCE', href: 'opensource' },
        { label: 'PROJECTS', href: 'projects' },
        { label: 'SKILLS', href: 'skills' },
        { label: 'ABOUT', href: 'about' },
        { label: 'CONTACT', href: 'contact' },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: -10 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <motion.nav 
            className={`navigation ${scrolled ? 'scrolled' : ''}`}
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
        >
            <div className="nav-container">
                <motion.div 
                    className="nav-logo"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <a href="#hero" onClick={(e) => { e.preventDefault(); scrollToSection('hero'); }}>
                        <motion.span 
                            className="logo-text"
                            animate={{ textShadow: scrolled ? "0 0 20px rgba(0, 255, 136, 0.5)" : "0 0 0px rgba(0, 255, 136, 0)" }}
                            transition={{ duration: 0.3 }}
                        >
                            AADI.DEV
                        </motion.span>
                    </a>
                </motion.div>

                <motion.div 
                    className="nav-links"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {navLinks.map((link, index) => (
                        <motion.a 
                            key={link.href}
                            href={`#${link.href}`}
                            onClick={(e) => { e.preventDefault(); scrollToSection(link.href); }}
                            variants={itemVariants}
                            whileHover={{ 
                                color: "var(--color-green)",
                                textShadow: "0 0 10px rgba(0, 255, 136, 0.6)"
                            }}
                            className="nav-link"
                            transition={{ duration: 0.3 }}
                        >
                            {link.label}
                        </motion.a>
                    ))}
                </motion.div>

                <motion.div 
                    className="nav-badge"
                    whileHover={{ scale: 1.1, boxShadow: "0 0 30px rgba(0, 255, 136, 0.5)" }}
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                >
                    <span className="badge badge-green animate-shimmer-glow">OPEN SOURCE CONTRIBUTOR</span>
                </motion.div>
            </div>
        </motion.nav>
    );
};

export default Navigation;
