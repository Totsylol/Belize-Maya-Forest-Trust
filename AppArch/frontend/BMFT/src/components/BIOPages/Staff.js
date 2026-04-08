import React, { useState } from 'react';
import styles from '../styles/staff.module.css';
import EKay from "../assets/Elma.png";
import DWade from "../assets/Placeholder.jpg";
import JPepper from "../assets/JPepper.png";
import MGriffis from "../assets/Placeholder.jpg";
import MBowen from "../assets/MBowen.png";
import MGruin from "../assets/MGruin.png";
import ProfilePic from "../assets/ProfilePic.jpg";

import Stop from "../assets/Stop.JPG";

const teamMembers = [
  {
      name: "Dr. Elma Kay",
      position: "Managing Director", 
      Education: "Ph.D. Biology (Ecology, Evolution and Systematics), Saint Louis University", 
      description: "Under Elma’s leadership, Belize Maya Forest (BMF) has seen significant advancements in biodiversity conservation, habitat restoration, and community engagement initiatives. She combines almost twenty (20) years of experience in academics, conservation and policy work. Prior to joining, she served on committees related to carbon projects and is currently on several non-governmental organization (NGO) boards while acting as Chairwoman for the board of directors of the Belize Network of NGOs.",
      imgSrc: EKay
    },
    {
      name: "Deeriann Wade ",
      position: "The Nature Conservancy’s Conservation Analyst", 
      description: "Deeriann is the Conservation Analyst with The Nature Conservancy’s (TNC) Belize Business Unit. Prior to TNC, she served as a public officer with the Government of Belize for sixteen (16) years. Most recently, she served as a Blue Economy Officer responsible for matters related to energy, climate change, maritime transport and sustainable development.",
      imgSrc: DWade
    },
    {
  name: "Justin Pepper",
      position: "Bobolink Foundation’s Chief Conservation Officer", 
      description: "Justin engages in community-based conservation of biodiversity in the Americas. Prior to Bobolink, he worked for Audubon supporting and amplifying grassroots conservation leaders in the Chicago area, and later, developing a market-based approach to grassland bird conservation.",
      imgSrc: JPepper
    },
  {
      name: "Matt Griffis ",
      position: "Wyss Foundation Conservation Program Officer",   
      description: "Matt has served at the Wyss Foundation since 2011 and is responsible for managing the Foundation's land acquisitions and overseeing conservation grant making efforts in Africa, Asia, and Europe. He volunteers with organizations like the American Hiking Society and the Boy Scouts of America.",
      imgSrc: MGriffis
    },
    {
      name: "Michael H.M. Bowen ",
      position: "Bowen & Bowen CEO", 
      description: "In 2010, Michael became CEO of Bowen & Bowen, a third-generation family business and parent company of Gallon Jug Estate, which is home to Chan Chich Lodge and a direct neighbor of the Belize Maya Forest.",
      imgSrc: MBowen
    },
{
      name: "Mark Gruin",
      position: "Past Board Director (Deceased)", 
      description: "Mark, Trustee of Rainforest Trust, dedicated more than thirty (30) years to international conservation and sustainable development. His career was characterized by early commitment and involvement while establishing a foundation for lasting and sustainable impact.",
      imgSrc: MGruin
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
        <header className={styles.banner4}>Board of Directors</header>
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
