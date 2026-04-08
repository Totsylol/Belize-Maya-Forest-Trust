import React, { useState, useEffect } from 'react';
import styles from '../styles/mobilenav.module.css';

const Mobilenav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen(prevState => !prevState);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <div id="myNav" className={`${styles.overlay} ${isOpen ? styles.open : ''}`}>
        <div className={styles.overlayContent}>
          <a href="/WhoWeAre">Who We Are</a>
          <a href="/whatwedo">What We Do</a>
          <a href="/news">News</a>
          <a href="/Getinvolved">Get Involved</a>
        </div>
      </div>

      <div className={`${styles.hamburger} ${isOpen ? styles.closeAnimation : ''}`} onClick={toggleNav}>
        <div className={styles.bar}></div>
        <div className={styles.bar}></div>
        <div className={styles.bar}></div>
      </div>
    </>
  );
};

export default Mobilenav;
