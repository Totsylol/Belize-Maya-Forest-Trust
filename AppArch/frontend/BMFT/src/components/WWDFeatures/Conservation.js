import React, { useState } from 'react';
import styles from '../styles/conservation.module.css'; // Importing CSS module
import Cjaguar from "../assets/Cjaguar.JPG"
import Cforest from "../assets/Cforest.jpg"
import Cturtle from "../assets/Cturtle.JPG"
import Cpools from "../assets/Cpools.jpg"
import Churricane from "../assets/Churricane.jpg"
import Clionfish from "../assets/Clionfish.jpg"
import Ctrash from "../assets/Ctrash.jpg"
import Cfire from "../assets/Cfire.jpg"
import Chunt from "../assets/Chunt.JPG"

const Dropdown = ({ title, content, imageUrl }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.dropdown}>
      <button 
        className={`${styles.dropdownButton} ${isOpen ? styles.open : ''}`} 
        onClick={() => setIsOpen(!isOpen)}
      >
        {title}
        <span className={`${styles.arrow} ${isOpen ? styles.arrowUp : styles.arrowDown}`}></span>
      </button>
      <div 
        className={`${styles.dropdownContent} ${isOpen ? styles.show : ''}`}
      >
        <img src={imageUrl} alt={title} className={styles.image} />
        <p>{content}</p>
      </div>
    </div>
  );
};

const Conservation = () => {
  return (
    <div className={styles.container}>
      
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Conservation Targets</h2>
        <div className={styles.dropdownContainer}>
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
        </div>
      </section>
      
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Conservation Threats</h2>
        <div className={styles.dropdownContainer}>
          <Dropdown 
           title="Invasive Non-native Species"
           content="Information about Invasive Non-native Species."
           imageUrl={Clionfish}
          />
          <Dropdown 
            title="Climate Change & Hurricanes"
            content="Information about Climate Change and Hurricanes."
            imageUrl={Churricane}
          />
          <Dropdown 
              title="Impaired Genetic Viability"
              content="Information about Impaired Genetic Viability."
              imageUrl="genetic-viability.jpg"
          />
          <Dropdown 
            title="Solid Waste Contamination"
            content="Information about Solid Waste Contamination."
            imageUrl={Ctrash}
          />
          <Dropdown 
            title="Fire"
            content="Information about Fire."
            imageUrl={Cfire}
          />
          <Dropdown 
            title="Hunting"
            content="Information about Hunting."
            imageUrl={Chunt}
          />
          <Dropdown 
            title="Illegal Logging"
            content="Information about Illegal Logging."
            imageUrl="illegal-logging.jpg"
          />
          <Dropdown 
            title="Overfishing"
            content="Information about Overfishing."
            imageUrl="overfishing.jpg"
          />
          <Dropdown 
            title="Pesticide Contamination & Sedimentation"
            content="Information about Pesticide Contamination and Sedimentation."
            imageUrl="pesticide-contamination.jpg"
          />
          <Dropdown 
            title="Deforestation/Clearing of Riparian Buffers"
            content="Information about Deforestation and Clearing of Riparian Buffers."
            imageUrl="deforestation.jpg"
          />
        </div>
      </section>
    </div>
  );
};
;

export default Conservation;
