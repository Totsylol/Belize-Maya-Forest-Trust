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
        

    
      
      <section className={`${styles.section2} ${styles.animateRollIn}`}>
        <header className={styles.banner4}>BMF Conservation Targets</header>
        <Conservation />
      </section>

      <section className={`${styles.section2} ${styles.animateRollIn}`}>
        <header className={styles.banner2}>Building Community Stewards</header>
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
