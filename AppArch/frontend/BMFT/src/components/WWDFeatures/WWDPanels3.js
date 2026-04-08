import React from 'react';
import styles from '../styles/wwdpanels3.module.css';
import WWDFire from "../assets/WWDFire.jpg"
import Stewards from '../assets/Stewards.jpg';
import WWArangers from "../assets/WWArangers.jpg"; 
import OTplan from "../assets/OTplan.JPG";


const panelsData = [
  
  {
    id: 2,
    imgSrc: WWArangers,
    title: 'Patrols',
    link: '/patrols'
    
  },
  {
    id: 3,
    imgSrc: WWDFire,
    title: 'Fire Management',
    link: '/firemanagement'
  },
  {
    id: 3,
    imgSrc: OTplan,
    title: 'Scientific Research',
    link: '/scientificresearch'
  },

 
];

const Panel = ({ imgSrc, title, description, link }) => (
  <div className={styles.panel}>
    <img className={styles.panelimg} src={imgSrc} alt={title} />
    <h2 className={styles.paneltitle}>{title}</h2>
    <p className={styles.paneldescription}>{description}</p>
    <button
      className={styles.learnmorebtn}
      onClick={() => window.location.href = link}
    >
      Learn More
    </button>
  </div>
);

const PanelContainer = () => (
  <div className={styles.panelcontainer}>
    {panelsData.map(panel => (
      <Panel
        key={panel.id}
        imgSrc={panel.imgSrc}
        title={panel.title}
        description={panel.description}
        link={panel.link}
      />
    ))}
  </div>
);

export default PanelContainer;
