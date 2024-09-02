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

const panelsData = [
  {
    title: 'Donate to Specific Programs',
    description: 'Support our various programs and initiatives. Click to learn more and donate.',
    imageUrl: IGBird,
    link: '/donate',
  },
  {
    title: 'Apply to Become a Community Steward',
    description: 'Learn about eligibility and apply for microgrants or scholarships.',
    imageUrl: IGBird2,
    link: '/apply',
  },
  {
    title: 'Volunteer/Intern Opportunities',
    description: 'Discover ways to volunteer or intern with us. Check out guidelines and apply.',
    imageUrl: IGvol,
    link: '/volunteer',
  },
  {
    title: 'Visit BMF',
    description: 'Find out how you can visit us, including guidelines and application forms.',
    imageUrl: IGfor,
    link: '/visit',
  },
  {
    title: 'Donate Monthly',
    description: 'Contribute in a monthly subscription plan. Click to learn more and donate.', 
    imageUrl: IGBird3, 
    link: '/donate',
  },
  {
    title: 'Donate Yearly', 
    description: 'Contribute in a yearly subscription plan. Click to learn more and donate.', 
    imageUrl: IGDeer, 
    link: '/donate',
  },
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
