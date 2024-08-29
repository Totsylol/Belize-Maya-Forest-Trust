import React, { useEffect, useState } from 'react';
import styles from '../styles/nav.module.css';
import logo from '../assets/logo.png';

const Nav = ({ isVisible, currentPage }) => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    if (!isVisible) return null;

    return (
        <nav className={`${styles.nav} ${isScrolled ? styles.scrolled : ''}`}>
            <ul className={styles.navList}>
                <li className={`${styles.navItem} ${styles.logoItem}`}>
                    <a href='/' className={`${styles.navLink} ${currentPage === 'home' ? styles.active : ''} ${isScrolled ? styles.scrolled : ''}`}>
                        <img className={styles.logo} src={logo} alt="Logo" />
                    </a>
                </li>
                <li className={`${styles.navItem} ${styles.dropdown}`}>
                    <a href='/WhatWeDo' className={`${styles.navLink} ${currentPage === 'whatwedo' ? styles.active : ''} ${isScrolled ? styles.scrolled : ''}`}>
                        What We Do
                    </a>
                    <div className={styles.dropdownContent}>
                        <div className={styles.row}>
                            <div className={styles.column}>
                                <a href="/outreach">Outreach</a>
                                <a href="/protbio">Protecting Biodiversity</a>
                                <a href="/agroproj">Regenerative Agriculture Project</a>
                            </div>
                        </div>
                    </div>
                </li>
                <li className={`${styles.navItem} ${styles.dropdown}`}>
                    <a href='/Our Team' className={`${styles.navLink} ${currentPage === 'Our Team' ? styles.active : ''} ${isScrolled ? styles.scrolled : ''}`}>
                          Our Team
                    </a>
                    <div className={styles.dropdownContent}>
                        <div className={styles.row}>
                            <div className={styles.column}>
                                <a href="/staff">Staff</a>
                                <a href="/rangers">Rangers</a>
                                <a href="#">FAQ 3</a>
                            </div>
                            <div className={styles.column}>
                                <a href="#">FAQ 4</a>
                                <a href="#">FAQ 5</a>
                                <a href="#">FAQ 6</a>
                            </div>
                            <div className={styles.column}>
                                <a href="#">FAQ 7</a>
                                <a href="#">FAQ 8</a>
                                <a href="#">FAQ 9</a>
                            </div>
                        </div>
                    </div>
                </li>
                <li className={`${styles.navItem}`}>
                    <a href='/News' className={`${styles.navLink} ${currentPage === 'news' ? styles.active : ''} ${isScrolled ? styles.scrolled : ''}`}>
                        News
                    </a>
                </li>
                <li className={`${styles.navItem}`}>
                    <a href='/GetInvolved' className={`${styles.navLink} ${currentPage === 'getinvolved' ? styles.active : ''} ${isScrolled ? styles.scrolled : ''}`}>
                        Get Involved
                    </a>
                </li>
            </ul>
        </nav>
    );
};

export default Nav;
