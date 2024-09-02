import React, { useEffect, useState } from 'react';
import styles from '../styles/WhatWeDo.module.css';
import WWDHeader1 from '../assets/WWDHeader1.JPG';
import WWDHeader2 from '../assets/WWDHeader2.jpg';
import WWDHeader3 from '../assets/WWDHeader3.JPG';
import WWDInfo from '../WWDFeatures/WWDInfo';
import WWDPanel from '../WWDFeatures/WWDPanel';
import WWDPanel2 from '../WWDFeatures/WWDPanel2';
import Biography from '../GeneralFeatures/Biography';
import Conservation from '../WWDFeatures/Conservation';

const images = [WWDHeader1, WWDHeader2, WWDHeader3];

const WhatWeDoPage = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handlePreviousImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 10000); 

    return () => clearInterval(interval); 
  }, []);

  return (
    <div className={styles.pageContainer}>
      <header className={`${styles.header}`}>
        <div className={styles.headerImageWrapper}>
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Header ${index + 1}`}
              className={`${styles.headerImage} ${index === currentImageIndex ? styles.active : ''}`}
            />
          ))}
        </div>
        <h1 className={styles.titleoverlay}>
          Setting the Standard for Effective and Enduring Conservation Worldwide
        </h1>
        <button className={`${styles.arrowButton} ${styles.leftArrow}`} onClick={handlePreviousImage}>
          &lt;
        </button>
        <button className={`${styles.arrowButton} ${styles.rightArrow}`} onClick={handleNextImage}>
          &gt;
        </button>
      </header>

      <section className={`${styles.section} ${styles.animateRollIn}`}>
        <h2 className={styles.sectionTitle}>Our Mission</h2>
        <div className={styles.sectionContent}>
          <p className={styles.sectionContentParagraph}>
            Demonstrating a globally recognized, locally relevant model of healthy, biodiverse forest protected for and by all Belizeans.
          </p>
          <header className={styles.banner}>About the BMF</header>
          <WWDInfo />
        </div>
      </section>

      <section className={`${styles.section2} ${styles.animateRollIn}`}>
        
        <header className={styles.banner3}>Building Community Stewardship</header>
        <WWDPanel2 />
      </section>
      <section className={`${styles.section2} ${styles.animateRollIn}`}>
        <header className={styles.banner2}>BMF Conservation</header>
            <Conservation></Conservation>
      </section>
    </div>
  );
};

export default WhatWeDoPage;
