import React from 'react';
import styles from './styles/WWDPanel2.module.css';
import WWDFire from "./assets/WWDFire.jpg"
import CommOut from "./assets/CommOut.jpg"
import Agrigo from "./assets/Agrigo.jpg"

const panelsData = [
  {
    id: 1,
    imgSrc: WWDFire,
    title: 'Protecting Biodiversity',
   
  },
  {
    id: 2,
    imgSrc: CommOut,
    title: 'Outreach',
    
  },
  {
    id: 3,
    imgSrc: Agrigo,
    title: 'Regenerative Agriculture Program',
    
  },
];

const Panel = ({ imgSrc, title, description }) => (
  <div className={styles.panel}>
    <img className={styles.panelimg} src={imgSrc} alt={title} />
    <h2 className={styles.paneltitle}>{title}</h2>
    <p className={styles.paneldescription}>{description}</p>
    <button className={styles.learnmorebtn}>Learn More</button>
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
      />
    ))}
  </div>
);

export default PanelContainer;
