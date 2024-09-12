import React from 'react';
import styles from "../styles/GIPanels.module.css";
import Placeholder from "../assets/Placeholder.jpg";
import Testbutton from '../GIFeatures/Testbutton';
import IGBird from '../assets/IGBird.jpg';
import IGBird2 from '../assets/IGBird2.JPG';
import IGvol from '../assets/IGvol.jpg';
import IGfor from '../assets/IGfor.jpg';
import IGBird3 from '../assets/IGBird3.JPG';
import IGDeer from '../assets/IGDeer.JPG';
import rangerad from "../assets/ranger ad.png"

const panelsData = [
  {
    title: 'Donate to Specific Programs',
    description: 'Support our various programs and initiatives. Click to learn more and donate.',
    imageUrl: IGBird,
    link: '/inprog',
  },
  {
    title: 'Apply to Become a Community Steward',
    description: 'Learn about eligibility and apply for microgrants or scholarships.',
    imageUrl: IGBird2,
    link: '/apply',
  },
  {
    title: 'Staff/Volunteer Opportunities',
    description: 'Discover ways to volunteer or intern with us. Check out guidelines and apply.',
    imageUrl: IGvol,
    link: rangerad,  
  },
  /*
  {
    title: 'Visitation Guidelines',
    description: 'Find out how you can visit us, including guidelines and application forms.',
    imageUrl: IGfor,
    link: '/visit',
  },
  */
];


const GIPanels = () => {
  return (
    <div className={styles.panelsContainer}>
      {panelsData.map((panel, index) => (
        <div key={index} className={styles.panel}>
          <img src={panel.imageUrl} alt={panel.title} className={styles.panelImage} />
          <div className={styles.panelContent}>
            <h3 className={styles.panelTitle}>{panel.title}</h3>
            <p className={styles.panelDescription}>{panel.description}</p>
            {panel.link && (
              <div className={styles.buttonContainer}>
                <Testbutton link={panel.link} />
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default GIPanels;
