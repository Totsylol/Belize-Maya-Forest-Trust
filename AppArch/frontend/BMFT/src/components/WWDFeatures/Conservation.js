import React, { useState } from 'react';
import styles from '../styles/conservation.module.css'; 
import Cjaguar from "../assets/Cjaguar.JPG";
import Cforest from "../assets/Cforest.jpg";
import Cturtle from "../assets/Cturtle.JPG";
import Cpools from "../assets/Cpools.jpg";

const Dropdown = ({ title, content, imageUrl }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.dropdown}>
      <div className={styles.imageContainer}>
        <img src={imageUrl} alt={title} className={styles.image} />
      </div>
      <button 
        className={`${styles.button} ${isOpen ? styles.buttonOpen : ''}`} 
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className={styles.arrowContainer}>
          <span className={styles.arrow}>→</span>
        </span>
        <span className={styles.buttonText}>Learn More</span>
      </button>
      <div 
        className={`${styles.dropdownContent} ${isOpen ? styles.show : ''}`}
      >
        <span className={styles.dropdownTitle}>{title}</span>
        <p>{content}</p>
      </div>
    </div>
  );
};

const Conservation = () => {
  return (
    <div className={styles.container}>
      <section className={styles.section}>
        <Dropdown 
          title="Forest Ecosystems"
          content="Information about Forest Ecosystems."
          imageUrl={Cforest}
        />
        <Dropdown 
          title="Aquatic Ecosystems"
          content="Information about Aquatic Ecosystems."
          imageUrl={Cturtle}
        />
        <Dropdown 
          title="Jaguars/Wildcats"
          content="Information about Jaguars and Wildcats."
          imageUrl={Cjaguar}
        />
        <Dropdown 
          title="Cara Blanca Pools"
          content="Information about Cara Blanca Pools."
          imageUrl={Cpools}
        />
      </section>

      <section className={styles.aboutPanel}>
        <p className={styles.aboutText}>
          This is where the small description for conservation threats goes.
        </p>
      </section>
    </div>
  );
};

export default Conservation;
