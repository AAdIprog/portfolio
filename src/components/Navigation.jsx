import React, { useState, useEffect } from 'react';
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

    return (
        <nav className={`navigation ${scrolled ? 'scrolled' : ''}`}>
            <div className="nav-container">
                <div className="nav-logo">
                    <a href="#hero" onClick={(e) => { e.preventDefault(); scrollToSection('hero'); }}>
                        <span className="logo-text">AADI.DEV</span>
                    </a>
                </div>

                <div className="nav-links">
                    <a href="#opensource" onClick={(e) => { e.preventDefault(); scrollToSection('opensource'); }}>
                        OPEN SOURCE
                    </a>
                    <a href="#projects" onClick={(e) => { e.preventDefault(); scrollToSection('projects'); }}>
                        PROJECTS
                    </a>
                    <a href="#skills" onClick={(e) => { e.preventDefault(); scrollToSection('skills'); }}>
                        SKILLS
                    </a>
                    <a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}>
                        ABOUT
                    </a>
                    <a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>
                        CONTACT
                    </a>
                </div>

                <div className="nav-badge">
                    <span className="badge badge-green">OPEN SOURCE CONTRIBUTOR</span>
                </div>
            </div>
        </nav>
    );
};

export default Navigation;
