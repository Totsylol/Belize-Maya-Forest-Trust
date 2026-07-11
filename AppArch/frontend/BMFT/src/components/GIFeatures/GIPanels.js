import React from 'react';
import styles from "../styles/GIPanels.module.css";
import Testbutton from '../GIFeatures/Testbutton';
import IGBird from '../assets/IGBird.jpg';
import IGBird2 from '../assets/IGBird2.JPG';
import IGvol from '../assets/IGvol.jpg';
import IGBird3 from '../assets/IGBird3.JPG';
import rangerad from "../assets/ranger ad.png"

const panelsData = [
  {
    title: 'Support a Specific Programs',
    description: 'Support our various programs and initiatives. Click to learn more and donate.',
    imageUrl: IGBird,
    link: '/inprog',
  },
  {
    title: 'Community Steward Opportunities',
    description: 'Learn about eligibility and apply for Green Futures scholarships or submit your sustainable project proposal.',
    imageUrl: IGBird2,
    link: '/apply',
  },
  {
    title: 'Staff/Volunteer Opportunities',
    description: 'Explore open volunteer and vacancy opportunities and become part of our team. Review the guidelines and submit your application.',
    imageUrl: IGvol,
    link: rangerad,
  },
  {
    title: 'Researchers & Scientists',
    description: 'Collaborate with us on scientific research and monitoring projects within the Belize Maya Forest. Learn about research opportunities and how to apply.',
    imageUrl: IGBird3,
    link: '/scientificresearch',
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
          <img loading="lazy" src={panel.imageUrl} alt={panel.title} className={styles.panelImage} />
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
