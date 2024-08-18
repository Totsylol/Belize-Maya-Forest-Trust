     import React, { useState } from 'react';
      import styles from './styles/biography.module.css';
      import Elma from "./assets/Elma.png";
      import Tzul from "./assets/Tzul.JPG";
      const teamMembers = [
        {
            name: "Elma Kay",
            position: "Managing Director of the Belize Maya Forest Trust",
            description: "Elma Kay, Managing Director of the Belize Maya Forest Trust was part of the effort to secure the protection of the Belize Maya Forest. She combines almost 20 years of experience in academics, conservation and policy work for protected areas and forest management, as well as institutional building and organizational leadership for civil society organizations. She has served in committees related to carbon such as the Belize National Climate Change Committee and the Reducing Emissions from Deforestation and Forest Degradation (REDD+) Technical Expert Group, currently serves in several non-governmental organization (NGO) boards and is Chairwoman of the board of directors of the Belize Network of NGO’s.",
            imgSrc: Elma
          },
        {
            name: "Sayuri Tzul",
            position: "Community Outreach and Stewards Coordinator ",
            description: "Sayuri Tzul is currently in the role of Community Outreach and Stewards Coordinator, where she brings her extensive experience in wildlife conservation, epiphyte inventory, communications, conservation education, and sustainable tourism. With over a decade of background in conservation work in Belize, she has pursued further education, earning a master's degree in Agrobusiness and Sustainable Markets from the University of CATIE in Costa Rica. Sayuri has been instrumental in developing educational materials for conservation education, implementing effective communication strategies, and initiating stewardship programs, all in line with her dedication to driving positive change and enhancing livelihoods through her work in conservation and sustainability.",
            imgSrc: Tzul
          },
      ];
      
      const Biography = () => {
        const [selectedMember, setSelectedMember] = useState(null);
      
        const openModal = (member) => {
          setSelectedMember(member);
        };
      
        const closeModal = () => {
          setSelectedMember(null);
        };
      
        return (
          <div className={styles.biographypage}>
            {teamMembers.map((member) => (
              <div key={member.name} className={styles.teammember} onClick={() => openModal(member)}>
                <div className={styles.image}>
                  <img src={member.imgSrc} alt={member.name} />
                </div>
                <div className={styles.description}>
                  <h2 className={styles.name}>{member.name}</h2>
                  <h3 className={styles.position}>{member.position}</h3>
                </div>
              </div>
            ))}
            <div className={`${styles.modal} ${selectedMember ? styles.show : ''}`}>
              <div className={styles.modalContent}>
                <span className={styles.close} onClick={closeModal}>&times;</span>
                <div className={styles.modalImage}>
                  <img src={selectedMember?.imgSrc} alt={selectedMember?.name} />
                </div>
                <div className={styles.modalDetails}>
                  <h2 className={styles.name}>{selectedMember?.name}</h2>
                  <h3 className={styles.position}>{selectedMember?.position}</h3>
                  <p>{selectedMember?.description}</p>
                </div>
              </div>
            </div>
          </div>
        );
      };
      
      export default Biography;
      