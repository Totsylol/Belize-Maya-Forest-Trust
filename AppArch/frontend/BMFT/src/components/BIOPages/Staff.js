import React, { useState } from 'react';
import styles from '../styles/staff.module.css';
import Elma from "../assets/Elma.png";
import Tzul from "../assets/Tzul.JPG";
import ProfilePic from "../assets/ProfilePic.jpg";
import Lyndon from "../assets/Lyndon Mai.jpg";
import Raquel from "../assets/Raquel Chun.JPG";
import Stop from "../assets/Stop.JPG";

const teamMembers = [
  {
      name: "Elma Kay",
      position: "Managing Director",
      description: "Elma Kay, Managing Director of the Belize Maya Forest Trust was part of the effort to secure the protection of the Belize Maya Forest. She combines almost 20 years of experience in academics, conservation and policy work for protected areas and forest management, as well as institutional building and organizational leadership for civil society organizations. She has served in committees related to carbon such as the Belize National Climate Change Committee and the Reducing Emissions from Deforestation and Forest Degradation (REDD+) Technical Expert Group, currently serves in several non-governmental organization (NGO) boards and is Chairwoman of the board of directors of the Belize Network of NGO’s.",
      imgSrc: Elma
    },
  {
      name: "Sayuri Tzul",
      position: "Community Outreach and Stewards Coordinator ",
      description: "Sayuri Tzul is currently in the role of Community Outreach and Stewards Coordinator, where she brings her extensive experience in wildlife conservation, epiphyte inventory, communications, conservation education, and sustainable tourism. With over a decade of background in conservation work in Belize, she has pursued further education, earning a master's degree in Agrobusiness and Sustainable Markets from the University of CATIE in Costa Rica. Sayuri has been instrumental in developing educational materials for conservation education, implementing effective communication strategies, and initiating stewardship programs, all in line with her dedication to driving positive change and enhancing livelihoods through her work in conservation and sustainability.",
      imgSrc: Tzul
    },
    {
      name: "Lyndon Mai",
      position: "Protected Areas Manager",
      description: "Lyndon currently serves as the Protected Area Manager for the Belize Maya Forest Trust, where he is committed to the conservation and protection of Belize's natural heritage. He is responsible for overseeing the protection and management of the Belize Maya Forest, a vast expanse of 236,000 acres. His role involves implementing a strategic approach to environmental protection to ensure the forest continued preservation and heath. He began his tenure at BMFT as the Protection and Operations Coordinator, playing a pivotal role in safeguarding the forest and coordinating efforts to maintain its ecological integrity. In his current position, he manages the daily operations of the ranger team, aligning fieldwork and administrative activities with the organization’s conservation objectives. Before joining BMFT, he served for a decade with the Belize Defence Force. During his military career, he developed a diverse skill set and a disciplined approach to operations management. His expertise in navigation, mapping, and operational oversight has proven essential in his present role. Driven by a passion for the natural world and a strong foundation in organizational and technological skills, Lyndon is dedicated to advancing BMFT’s mission. He is enthusiastic about contributing to the protection and sustainability of the Belize Maya Forest, ensuring its preservation for future generations.",
      imgSrc: Lyndon
    },
    {
      name: "Ermain Requena",
      position: "Regenerative Agriculture Coordinator",
      description: "Ermain Requena is a proud team member of the Belize Maya Forest Trust, serving as the Restoration and Regenerative Agriculture Coordinator. With over fifteen years of experience in working with farmers and providing technical support for small-scale agriculture, Ermain is dedicated to sharing his knowledge and promoting sustainable farming practices within the farming community. As part of the Belize Maya Forest Trust, Ermain collaborates with nine stakeholder communities in the wider Belize Maya Forest landscape. The focus of their regenerative agriculture program is to enhance livelihoods through nature-based solutions while working closely with farmers, community stakeholders, and community stewards. Ermain is grateful to be part of a passionate and diverse team that is committed to conserving the Belize Maya Forest through collaboration with nearby communities. ",
      imgSrc: ProfilePic
    },
    {
      name: "Raquel Chun",
      position: "Conservation Data Analyst",
      description: "Raquel comes from the beautiful village of Roaring Creek in the Cayo District. She has joined the Belize Maya Forest Trust (BMFT) team as the new Conservation Data Analyst. The endless natural beauty of Belize, along with the struggles and challenges in managing these areas, has always fascinated her. Her journey into conservation started at the University of Belize, where she studied marine science and natural resource management. She furthered her studies abroad with a Master's degree in Wildlife Health and Population Management at the University of Sydney, Australia and she is completing a doctoral degree in Climate Change and Smallholder Agriculture at Durham University in the United Kingdom. Belize has always held her heart and she has returned home to help protect the vibrant natural resources and contribute to the communities that depend on them.",
      imgSrc: Raquel
    },

   




];

const Staff = () => {
  const [selectedMember, setSelectedMember] = useState(null);

  const openModal = (member) => {
    setSelectedMember(member);
  };

  const closeModal = () => {
    setSelectedMember(null);
  };

  return (
    <div>
       <section className={`${styles.section2} ${styles.animateRollIn}`}>
        <header className={styles.banner4}>Staff</header>
      </section>
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
    </div>
  );
};

export default Staff;