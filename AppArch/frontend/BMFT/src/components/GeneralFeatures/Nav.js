import React from 'react';
import styles from "../styles/nav.module.css";
import logo from '../assets/logo.png';

const Nav = ({ isVisible }) => {
    if (!isVisible) return null; 

    return (
        <div>
            <nav className={styles.nav}>
                <ul className={styles.navList}>
                    <li className={`${styles.navItem} ${styles.logoItem}`}>
                        <a href='/' className={styles.navLink}>
                            <img className={styles.logo} src={logo} alt="Logo" />
                        </a>
                    </li>
                    <li className={`${styles.navItem} ${styles.dropdown}`}>
                        <a href='/WhatWeDo' className={styles.navLink}>What We Do</a>
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
                        <a href='/FAQ' className={styles.navLink}>FAQ</a>
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
                    <li className={`${styles.navItem} ${styles.dropdown}`}>
                        <a href='/News' className={styles.navLink}>News</a>
                        <div className={styles.dropdownContent}>
                            <div className={styles.row}>
                                <div className={styles.column}>
                                    <h3>Latest</h3>
                                    <a href="#">News 1</a>
                                    <a href="#">News 2</a>
                                    <a href="#">News 3</a>
                                </div>
                                <div className={styles.column}>
                                    <h3>Archive</h3>
                                    <a href="#">News 4</a>
                                    <a href="#">News 5</a>
                                    <a href="#">News 6</a>
                                </div>
                                <div className={styles.column}>
                                    <h3>Press</h3>
                                    <a href="#">News 7</a>
                                    <a href="#">News 8</a>
                                    <a href="#">News 9</a>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className={`${styles.navItem} ${styles.dropdown}`}>
                        <a href='/GetInvolved' className={styles.navLink}>Get Involved</a>
                        <div className={styles.dropdownContent}>
                            <div className={styles.row}>
                                <div className={styles.column}>
                                    <h3>Volunteer</h3>
                                    <a href="#">Get Involved 1</a>
                                    <a href="#">Get Involved 2</a>
                                    <a href="#">Get Involved 3</a>
                                </div>
                                <div className={styles.column}>
                                    <h3>Donate</h3>
                                    <a href="#">Get Involved 4</a>
                                    <a href="#">Get Involved 5</a>
                                    <a href="#">Get Involved 6</a>
                                </div>
                                <div className={styles.column}>
                                    <h3>Events</h3>
                                    <a href="#">Get Involved 7</a>
                                    <a href="#">Get Involved 8</a>
                                    <a href="#">Get Involved 9</a>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </nav>
        </div>
    );

}

export default Nav;
