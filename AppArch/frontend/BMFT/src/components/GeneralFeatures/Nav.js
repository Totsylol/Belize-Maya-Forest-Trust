import React from 'react';
import styles from "../styles/nav.module.css";
import logo from '../assets/logo.png';

const Nav = ({ isVisible }) => {
    if (!isVisible) return null; 

    return (
        <div>
            <nav className={styles.nav}>
                <ul>
                    <li><a href='/'><img className={styles.logo} src={logo} alt="Logo" /></a></li>
                    <li><a href='/WhatWeDo'>What We Do</a></li>
                    <li><a href='/FAQ'>FAQ</a></li>
                    <li><a href='/'>News</a></li>
                    <li><a href='/FAQ'>Get Involved</a></li>
                </ul>
            </nav>
        </div>
    );
}

export default Nav;