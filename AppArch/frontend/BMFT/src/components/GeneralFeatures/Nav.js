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
                    <a href='/whoweare' className={`${styles.navLink} ${currentPage === 'whoweare' ? styles.active : ''} ${isScrolled ? styles.scrolled : ''}`}>
                        Who We Are
                    </a>
                    <div className={styles.dropdownContent}>
                        <div className={styles.row}>
                            <div className={styles.column}>
                                <a href="#">Mission</a>
                                <a href="#">Vision</a>
                                <a href="/ourpeople">Our People</a>
                            </div>
                        </div>
                    </div>
                </li>
                <li className={`${styles.navItem} ${styles.dropdown}`}>
                    <a href='/WhatWeDo' className={`${styles.navLink} ${currentPage === 'whatwedo' ? styles.active : ''} ${isScrolled ? styles.scrolled : ''}`}>
                        What We Do
                    </a>
                    <div className={styles.dropdownContent}>
                        <div className={styles.row}>
                            <div className={styles.column}>
                                <a href="/protbio">Protecting Biodiversity</a>
                                <a href="/stewards2">Building Stewardship</a>
                                <a href="#">Publications</a>
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
                    <a href='/Getinvolved' className={`${styles.navLink} ${currentPage === 'getinvolved' ? styles.active : ''} ${isScrolled ? styles.scrolled : ''}`}>
                        Get Involved
                    </a>
                </li>
                <li className={`${styles.navItem} ${styles.donationItem}`}>
                    <a href='/Inprog' className={`${styles.donationButton} ${isScrolled ? styles.scrolled : ''}`}>
                        Donate
                    </a>
                </li>
            </ul>
        </nav>
    );
};

export default Nav;
