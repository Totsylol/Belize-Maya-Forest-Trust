import React, { useState } from 'react';
import styles from '../styles/communitystewards.module.css';
import Rec1 from  "../assets/Rec1-min.jpg";
import Rec8 from  "../assets/Rec8-min.jpg";
import Rec2 from  "../assets/Rec2-min.jpg";
import Rec3 from  "../assets/Rec3-min.jpg";
import Rec4 from  "../assets/Rec4-min.jpg";
import Rec5 from  "../assets/Rec5-min.jpg";
import Rec6 from  "../assets/Rec6-min.jpg";
import Rec7 from  "../assets/Rec7-min.jpg";
import Ctop from  "../assets/Ctop.jpg";
import Cback from  "../assets/Cback.jpg";

const images = [
  { src: Rec1, alt: 'Recipient 1' },
  { src: Rec2, alt: 'Recipient 2' },
  { src: Rec3, alt: 'Recipient 3' },
  { src: Rec4, alt: 'Recipient 4' },
  { src: Rec5, alt: 'Recipient 5' },
  { src: Rec6, alt: 'Recipient 6' },
  { src: Rec7, alt: 'Recipient 7' },
  { src: Rec8, alt: 'Recipient 8' },
];

const Communitystewards = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleClick = (image) => {
    setSelectedImage(image);
  };

  const handleClose = () => {
    setSelectedImage(null);
  };

  return (
    <main className={styles.container}>
         <h1 className={styles.titleoverlay}>Community Steward Program</h1>
            <header className={styles.header}>
                <img src={Ctop} alt="Header" />
            </header>
            <section className={styles.introduction}>
                <div className={styles.introText}>
                    <h2>About the Program</h2>
                    <p>
                    Community Steward Program's goal is to guide initiatives and solutions to conservation and sustainable livelihood challenges within the BMF landscape.                      </p>
                    <p>
                    The Belize Maya Forest Community Stewards Program aims to involve stakeholders in conservation projects and initiatives of their interest to bring socio-ecological benefits that will contribute to the protection of the BMF, and the sustainable livelihoods, health, and well-being of the stakeholder communities.  Fostering stewardship in the stakeholder communities builds stronger relationships than traditional outreach or engagement activities centered on environmental education. Stewardship establishes ownership, collaboration, inclusion, and leadership with community members who are key to the accomplishment of the BMFT’s conservation objectives. It also contributes to productive and sustained relationships with the environment. The program will have people as the main actors in caring for the environment, using their expertise, knowledge, and skills to lead local conservation stewardship actions.                      </p>
                </div>
                </section>
                <header className={styles.header2}>
                    <img src={Cback} alt="Sayuri Speaking" />
                </header>
                <section className={styles.descriptionSection}>
                <h2 className={styles.sectionTitle}>Stewards Projects</h2>
                <p className={styles.descriptionText}>
                Stewards will have the opportunity to design and implement initiatives and projects of interest in their communities aligned with the BMFT mission, vision, and conservation targets and objectives. The BMFT will provide technical capacity, capacity-building opportunities, and financial support towards the completion of the stewards’ projects. The program will support the nine stakeholder communities in attaining higher stewardship levels in an environmentally beneficial and cost-effective manner.                  </p>
            </section>

      <section className={styles.gallery}>
                <div className={styles.introduction2}>
                    <h2 className={styles.introText2}>Recipients</h2>
                    </div>
        <div className={styles.grid}>
          {images.map((image, index) => (
            <div key={index} className={styles.imageContainer} onClick={() => handleClick(image)}>
              <img src={image.src} alt={image.alt} className={styles.image} />
            </div>
          ))}
        </div>
        {selectedImage && (
          <div className={styles.modal} onClick={handleClose}>
            <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
              <span className={styles.close} onClick={handleClose}>&times;</span>
              <img src={selectedImage.src} alt={selectedImage.alt} className={styles.modalImage} />
            </div>
          </div>
        )}
      </section>
    </main>
  );
};

export default Communitystewards;
