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
                                <h3>Category 1</h3>
                                <a href="#">Link 1</a>
                                <a href="#">Link 2</a>
                                <a href="#">Link 3</a>
                            </div>
                            <div className={styles.column}>
                                <h3>Category 2</h3>
                                <a href="#">Link 4</a>
                                <a href="#">Link 5</a>
                                <a href="#">Link 6</a>
                            </div>
                            <div className={styles.column}>
                                <h3>Category 3</h3>
                                <a href="#">Link 7</a>
                                <a href="#">Link 8</a>
                                <a href="#">Link 9</a>
                            </div>
                        </div>
                    </div>
                </li>
                <li className={`${styles.navItem} ${styles.dropdown}`}>
                    <a href='/FAQ' className={`${styles.navLink} ${currentPage === 'faq' ? styles.active : ''} ${isScrolled ? styles.scrolled : ''}`}>
                        FAQ
                    </a>
                    <div className={styles.dropdownContent}>
                        <div className={styles.row}>
                            <div className={styles.column}>
                                <h3>General</h3>
                                <a href="#">FAQ 1</a>
                                <a href="#">FAQ 2</a>
                                <a href="#">FAQ 3</a>
                            </div>
                            <div className={styles.column}>
                                <h3>Technical</h3>
                                <a href="#">FAQ 4</a>
                                <a href="#">FAQ 5</a>
                                <a href="#">FAQ 6</a>
                            </div>
                            <div className={styles.column}>
                                <h3>Billing</h3>
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
