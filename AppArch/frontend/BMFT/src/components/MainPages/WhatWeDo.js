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
      <img src={WWDtop} alt="Header" />
      <div className={styles.titleoverlay}>
        <h1>Setting New Standards in Conservation</h1>
        </div>
        </header>
        
        <section className={styles.aboutSection}>
      <h2>Comprehensive Management and Protection of Expansive Forest Landscapes</h2>
      <p>
      Expansive forest areas are managed and protected to ensure their long-term preservation. Strategic partnerships and effective conservation strategies safeguard these vital landscapes against threats such as deforestation and climate change. Coordination with local communities and stakeholders maintains ecological balance, supports biodiversity, and enhances environmental resilience. Through sustainable management practices, these forests provide essential ecosystem services and support diverse wildlife.
      </p> 
         </section>
    
      
      <section className={`${styles.section2} ${styles.animateRollIn}`}>
        <header className={styles.banner4}>BMF Conservation Targets</header>
        <Conservation />
      </section>

      <section className={`${styles.section2} ${styles.animateRollIn}`}>
        <header className={styles.banner2}>Building Stewardship</header>
        <WWDPanel2 />
      </section>

      <section className={`${styles.section2} ${styles.animateRollIn}`}>
        <header className={styles.banner3}>Protecting Biodiversity</header>
        <WWDPanels3 />
      </section>
    </div>
    
  );
};

export default WhatWeDoPage;
