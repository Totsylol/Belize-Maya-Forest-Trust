import React from 'react';
import styles from '../styles/WhatWeDo.module.css';
import WWDtop from '../assets/WWDtop.jpg';
import WWDPanels3 from '../WWDFeatures/WWDPanels3';
import WWDInfo from '../WWDFeatures/WWDInfo';
import WWDPanel2 from '../WWDFeatures/WWDPanel2';
import Conservation from '../WWDFeatures/Conservation';


const WhatWeDoPage = () => {
  return (
    <div className={styles.PageContainer}>
      <header className={styles.header}>
        <img loading="lazy" src={WWDtop} alt="Header" />
        <div className={styles.titleoverlay}>
          <h1>Protecting Forest Ecosystems</h1>
        </div>
      </header>

      <section className={styles.aboutSection}>
        <h2>Protecting Forests, Sustaining Our Future</h2>
        <p>The Belize Maya Forest (BMF) protection offers crucial ecological benefits including the provision of clean air and water, fertile soils, essential pollinators and strengthen the regional Selva Maya Forest connectivity. At the core of our work is the commitment to preserving a vibrant and diverse forest that remains protected by and for the benefit of all Belizeans.</p>
      </section>

      <section className={`${styles.section2} ${styles.animateRollIn}`}>
        <header className={styles.banner4}>BMF Conservation Targets</header>
        <Conservation />
      </section>

      <section className={`${styles.section2} ${styles.animateRollIn}`}>
        <a href="/ProtBio" style={{textDecoration:'none'}}>
          <header className={styles.banner3}>Protecting Biodiversity</header>
        </a>
        <WWDPanels3 />
      </section>

      <section className={`${styles.section2} ${styles.animateRollIn}`}>
        <a href="/stewards2" style={{textDecoration:'none'}}>
          <header className={styles.banner2}>Building Stewardship</header>
        </a>
        <WWDPanel2 />
      </section>
    </div>
  );
};

export default WhatWeDoPage;
