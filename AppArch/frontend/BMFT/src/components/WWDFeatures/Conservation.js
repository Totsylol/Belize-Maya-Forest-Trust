import React, { useState } from 'react';
import styles from '../styles/conservation.module.css'; 
import Cjaguar from "../assets/Cjaguar.JPG";
import Cforest from "../assets/Cforest.jpg";
import Cturtle from "../assets/Cturtle.JPG";

const Dropdown = ({ title, content, imageUrl }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    
    <div className={styles.dropdown}>
      <div className={styles.imageContainer}>
      <span className={styles.dropdownTitle}>{title}</span>
        <img loading="lazy" src={imageUrl} alt={title} className={styles.image} />
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
        <p>{content}</p>
      </div>
    </div>
  );
};

const Conservation = () => {
  return (
    <div className={styles.container}>
      <div className={styles.aboutPanel}>
        <div className={styles.aboutPanelAccent}></div>
        <div className={styles.aboutPanelBody}>
          <p className={styles.aboutText}>
            BMFT initiated a yearlong process of engaging stakeholders to create a Conservation Action Plan (CAP), identifying key conservation goals to address the various threats the BMF face. Among the most pressing challenges are deforestation, natural disasters, climate change, pesticide contamination, sediment buildup, and accumulation of solid waste. Illegal extraction activities, presence of invasive non-native species, and occurrence of forest fires further exacerbate these issues. As a result, it is essential to focus on specific conservation targets.
          </p>
        </div>
      </div>

      <section className={styles.section}>
        <Dropdown
          title="Forest Ecosystems"
          content="To conserve the Belize Maya Forest and its important services, we must reduce wildfires, strengthen fire management, and restore forest health across the landscape. Key actions include fire prevention awareness, reforestation, and promoting regenerative agriculture."
          imageUrl={Cforest}
        />
        <Dropdown
          title="Jaguars/Wildcats"
          content="Maintain healthy and stable predator–prey populations by protecting habitat connectivity, reducing poaching, and ensuring adequate prey availability, allowing jaguars and other wildcats to continue fulfilling their important role as top predators in the ecosystem."
          imageUrl={Cjaguar}
        />
        <Dropdown
          title="Aquatic Ecosystems"
          content="Protect and maintain the ecological integrity of the Cara Blanca Pools and surrounding aquatic habitats by reducing sedimentation, preventing contamination, and safeguarding biodiversity — including the critically endangered Hicatee turtle — within the BMF's freshwater ecosystems."
          imageUrl={Cturtle}
        />
      </section>
    </div>
  );
};

export default Conservation;
