import React from 'react';
import styles from '../styles/testbutton.module.css';

const Testbutton = ({ link }) => {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className={styles.button}>
      <span className={styles.arrowcontainer}>
        <span className={styles.arrow}>→</span>
      </span>
      <span className={styles.buttontext}>Learn More</span>
    </a>
  );
};

export default Testbutton;
