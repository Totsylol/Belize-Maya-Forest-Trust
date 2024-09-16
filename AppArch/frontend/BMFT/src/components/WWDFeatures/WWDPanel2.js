import React from 'react';
import styles from '../styles/WWDPanel2.module.css';
import WWDFire from "../assets/WWDFire.jpg"
import CommOut from "../assets/CommOut.jpg"
import Agrigo from "../assets/Agrigo.jpg"
import { Link } from 'react-router-dom';
import Stewards from '../assets/Stewards.jpg';

const panelsData = [
  
  {
    id: 2,
    imgSrc: CommOut,
    title: 'Outreach',
    link: '/outreach'
    
  },
  {
    id: 3,
    imgSrc: Agrigo,
    title: 'Restorative and Regenerative Agriculture',
    link: '/agroproj'
  },

  {
    id: 4,
    imgSrc: Stewards,
    title: 'Community Stewards',
    link: '/communitystewards'
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
