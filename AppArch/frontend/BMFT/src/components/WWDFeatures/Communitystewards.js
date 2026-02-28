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
         <h1 className={styles.titleoverlay}>Community Stewards Program</h1>
            <header className={styles.header}>
                <img src={Ctop} alt="Header" />
            </header>
            <section className={styles.introduction}>
                <div className={styles.introText}>
                    <h2>About the Program</h2>
                    <p>
                    The Community Stewards Program empowers local stakeholders to lead 
                    conservation and sustainable development efforts across the Belize Maya Forest (BMF) landscape. 
                    By promoting inclusive participation, the program ensures that men, women, youth, and community 
                    groups play an active role in shaping solutions that support both environmental protection and 
                    sustainable livelihoods.                      </p>
                    <p>
                    Community stewards apply their knowledge, skills, and experience to implement locally driven initiatives such 
                    as regenerative agriculture, outreach, reforestation, Sustainability Support Microgrants, and Green Futures Scholarships. The program strengthens 
                    stewardship by fostering ownership, collaboration, and leadership within stakeholder communities.                      </p>
                    By placing people at the center of conservation, the program builds lasting relationships between 
                    communities and the forest, contributing to the protection of the BMF while enhancing community 
                    well-being and resilience.
                </div>
                </section>
                <header className={styles.header2}>
                    <img src={Cback} alt="Sayuri Speaking" />
                </header>
                <section className={styles.descriptionSection}>
                <h2 className={styles.sectionTitle}>Stewards Projects</h2>
                <p className={styles.descriptionText}>
               Sustainability Support Microgrants provide technical guidance, capacity-building opportunities, and financial support to 
               help stewards implement impactful, locally driven initiatives that strengthen long-term conservation and community resilience. 
               Supported projects include reforestation of farms and community spaces, installation of solar energy and water harvesting systems, 
               establishment of cover crop plots, composting and biofertilizer production, beekeeping, ecotourism ventures, fruit farm 
               diversification, and sustainable livestock practices.  </p>
                    <p> 
Green Futures Scholarships expand educational opportunities for youth at high school, tertiary, and vocational training levels. 
The program supports a wide range of academic disciplines, including tourism and hospitality, natural resource management, accounting, 
economics, agriculture, agribusiness, and more. Beyond financial assistance, scholarship recipients are encouraged to give back through 
community service and environmental stewardship. Scholars actively engage in BMFT community stewardship activities while receiving mentorship 
that strengthens their skills and prepares them for future careers.
Meet each of the Community Stewards and learn about their projects by clicking on the images below. Each steward is making a unique contribution, 
demonstrating the power of local leadership and community-driven solutions.</p>
            </section>

      <section className={styles.gallery}>
                <div className={styles.introduction2}>
                    <h2 className={styles.introText2}>Community Stewards</h2>
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
