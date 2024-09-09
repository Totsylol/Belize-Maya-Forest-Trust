import React from 'react';
import styles from '../styles/interns.module.css';

const Interns = () => {
  return (
    <section className={styles.internsSection}>
      <div className={styles.description}>
        <h1>Internships/Volunteers</h1>
        <p>
          Provide important skills for Belize Maya Forest Trust and contribute to 
          meaningful projects. Gain hands-on experience while making a positive 
          impact on the environment and local communities.
        </p>
        <a href="https://docs.google.com/forms/d/your-form-id" target="_blank" rel="noopener noreferrer" className={styles.applyButton}>
          Apply Now
        </a>
      </div>
      <div className={styles.picture}>
        <img src="/path-to-your-image.jpg" alt="Internships and Volunteers" />
      </div>
    </section>
  );
};

export default Interns;
