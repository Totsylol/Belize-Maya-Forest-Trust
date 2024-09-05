import React from 'react';
import styles from "../styles/involvment.module.css"
import Imonkey from "../assets/Imonkey.png"
import ContactUs from "../GeneralFeatures/ContactUs"
import GIPanels from '../GIFeatures/GIPanels'
import GIbot from '../assets/GIbot.JPG'
import Testbutton from '../GIFeatures/Testbutton'

const Involvement = () => {
  return (
    <div className={styles.PageContainer}>
      <header className={styles.header}>
        <img src={Imonkey} alt="Header" />
        <div className={styles.titleoverlay}>
          <h1>Join Our Conservation Efforts</h1>
          <button className={styles.donationButton}>Donate</button>
        </div>
      </header>
      <section className={styles.infoSection}>
        <div className={styles.infoContainer}>
          <h2>Why Your Support Matters</h2>
          <p>Your contributions fund vital research, protect endangered species, and educate communities about wildlife conservation.</p>
        </div>
      </section>
      <section>
        <GIPanels />
      </section>
    </div>
  );
};

export default Involvement;



