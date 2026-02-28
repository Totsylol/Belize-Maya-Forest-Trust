import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for routing
import styles from "../styles/involvment.module.css";
import Imonkey from "../assets/Imonkey.png";
import GIPanels from '../GIFeatures/GIPanels';

const Involvement = () => {
  return (
    <div className={styles.PageContainer}>
      <header className={styles.header}>
        <img src={Imonkey} alt="Header" />
        <div className={styles.titleoverlay}>
          <h1>Join Our Conservation Efforts</h1>
          <Link to="/Inprog" className={styles.donationButton}>
            Donate
          </Link>
        </div>
      </header>
      <section className={styles.infoSection}>
        <div className={styles.infoContainer}>
          <h2>Why Your Support Matters</h2>
          <p>At the Belize Maya Forest Trust, conservation extends beyond protecting trees and wildlife. Our work strengthens the connection 
            between healthy ecosystems and resilient communities through science-based management, stewardship, and sustainable livelihood 
            initiatives. Safeguarding this landscape requires long-term commitment, strong partnerships, and the collective action of people 
            who care about the future of our planet. Your support helps transform conservation goals into tangible, measurable impact 
            on the ground.</p>
        </div>
      </section>
      <section>
        <GIPanels />
      </section>
    </div>
  );
};

export default Involvement;
