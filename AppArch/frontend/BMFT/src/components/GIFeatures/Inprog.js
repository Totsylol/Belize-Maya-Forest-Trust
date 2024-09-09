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
        <h1 className={styles.fancyText}>Coming Soon</h1>
      </div>
    </div>
  );
};

export default InProgress;
