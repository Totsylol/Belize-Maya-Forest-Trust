import React, { useState } from 'react';
import styles from './styles/WhatWeDo.module.css';
import WWDHeader1 from './assets/WWDHeader1.JPG';
import WWDHeader2 from './assets/WWDHeader2.jpg';
import WWDHeader3 from './assets/WWDHeader3.JPG';
import WWDInfo from './WWDInfo';
import WWDPanel from './WWDPanel';
import WWDPanel2 from './WWDPanel2';

const images = [WWDHeader1, WWDHeader2, WWDHeader3];

const WhatWeDoPage = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handlePreviousImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className={styles.pageContainer}>
      <header className={`${styles.header} ${styles.animateRollIn}`}>
        <div className={styles.headerImageWrapper} style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}>
          {images.map((image, index) => (
            <img key={index} src={image} alt={`BMFT Header ${index + 1}`} className={styles.headerImage} />
          ))}
        </div>
        <h1 className={`${styles.titleoverlay}`}>Setting the Standard for Effective and Enduring Conservation Worldwide</h1>
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
        </div>
      </section>

      <section className={`${styles.section2} ${styles.animateRollIn}`}>
        <WWDInfo />
        <WWDPanel />
        <WWDPanel2 />
      </section>
    </div>
  );
};

export default WhatWeDoPage;
