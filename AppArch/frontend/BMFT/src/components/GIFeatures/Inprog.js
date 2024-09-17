import React from 'react';
import styles from '../styles/inprog.module.css';
import CS from '../assets/CS.jpg'; 

const InProgress = () => {
  return (
    <div
      className={styles.container}
      style={{ backgroundImage: `url(${CS})` }} 
    >
      <div className={styles.textWrapper}>
        <h1 className={styles.fancyText}>Currently Under Construction</h1>
        <div className={styles.subtextWrapper}>
          <p className={styles.subtext}>Explore More Donation Methods</p>
          <a 
            href="mailto:ekay@bmft.org.bz?subject=Donation Inquiry"
            className={styles.button}
            target="_blank"
            rel="noopener noreferrer"
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
};

export default InProgress;
