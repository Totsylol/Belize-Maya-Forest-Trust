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
          content="To conserve forest ecosystems and their services, it is essential to reduce the occurrence of wildfires in the BMF and enhance the management of fire in the adjacent areas. Maintain and/or restore forest health in the larger BMF landscape. Key strategies to achieve this goal include raising awareness about fire safety, reforestation activities, and encouraging the adoption of regenerative agricultural practices."
          imageUrl={Cforest}
        />
        <Dropdown 
          title="Aquatic Ecosystems"
          content="To conserve aquatic ecosystem and their services, is critical to reduce contamination in aquatic ecosystems of BMF and surrounding landscape. Reduce the population of Armored Catfish in BMF. Key strategies to achieve this goal include the establishment of a baseline for contamination from pesticides and other runoff, improve pesticides use practices in farms in the BMF landscape, protect and restore the Cara Balance Pools Forest, and promote solutions for handling solid waste. "
          imageUrl={Cturtle}
        />
        <Dropdown 
          title="Jaguars/Wildcats"
          content="To conserve aquatic ecosystem and their services, is critical to reduce contamination in aquatic ecosystems of BMF and surrounding landscape. Reduce the population of Armored Catfish in BMF. Key strategies to achieve this goal include the establishment of a baseline for contamination from pesticides and other runoff, improve pesticides use practices in farms in the BMF landscape, protect and restore the Cara Balance Pools Forest, and promote solutions for handling solid waste. "
          imageUrl={Cjaguar}
        />
        <Dropdown 
          title="Cara Blanca Pools"
          content="To conserve aquatic ecosystem and their services, is critical to reduce contamination in aquatic ecosystems of BMF and surrounding landscape. Reduce the population of Armored Catfish in BMF. Key strategies to achieve this goal include the establishment of a baseline for contamination from pesticides and other runoff, improve pesticides use practices in farms in the BMF landscape, protect and restore the Cara Balance Pools Forest, and promote solutions for handling solid waste. "
          imageUrl={Cpools}
        />
      </section>

      <section className={styles.aboutPanel}>
        <p className={styles.aboutText}>
        Major threats of the BMF are deforestation especially the clearing of riparian buffers, natural disasters and climate change, contamination due to pesticides, sedimentation and solid waste, illegal extraction, Invasive non-native Species and primarily forest fires.  
        </p>
      </section>
    </div>
  );
};

export default Conservation;
