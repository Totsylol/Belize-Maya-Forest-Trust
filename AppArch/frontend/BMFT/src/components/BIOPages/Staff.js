import React, { useState } from 'react';
import styles from '../styles/staff.module.css';
import Elma from "../assets/Elma.png";
import Raquel from "../assets/Raquel Chun.JPG";
import Tzul from "../assets/Tzul.JPG";
import Lyndon from "../assets/Lyndon Mai.jpg";
import ProfilePic from "../assets/ProfilePic.jpg";
import Stop from "../assets/Stop.JPG";

const teamMembers = [
  {
      name: "Elma Kay",
      position: "Managing Director", 
      Education: "Ph.D. Biology (Ecology, Evolution and Systematics), Saint Louis University", 
      description: "Elma was part of the effort to secure the protection of the Belize Maya Forest, the last large remaining forest that connects to the regional Selva Maya. Under her leadership, the Belize Maya Forest has seen significant advancements in biodiversity conservation, habitat restoration, and community engagement initiatives. Her dedication to fostering sustainable livelihoods has not only enhanced the resilience of the forest but has also empowered local communities, making her a pivotal figure in the ongoing efforts to protect this unique and irreplaceable natural resource.  Elma combines almost 20 years of experience in academics, conservation and policy work for protected areas and forest management, as well as institutional building and organizational leadership for civil society organizations.  Prior to joining Belize Maya Forest Trust, she has served in committees related to carbon such as the Belize National Climate Change Committee and the Reducing Emissions from Deforestation and Forest Degradation (REDD+) Technical Expert Group, currently serves in several non-governmental organization (NGO) boards and is Chairwoman of the board of directors of the Belize Network of NGO’s.  ",
      imgSrc: Elma
    },
  {
      name: "Sayuri Tzul",
      position: "Community Outreach and Stewards Coordinator ", 
      Education: "MSc. Agribusiness & Sustainable Markets, CATIE",  
      description: "Sayuri is at the forefront of developing and implementing the Community Stewards Program across the ten stakeholder communities of the Belize Maya Forest. The Community Stewards Program aim to build awareness in local communities about the importance of forest conservation and the sustainable use of natural resources through stewardship. Sayuri collaborates closely with various stakeholders, including local leaders, environmental organizations, and community members, to promote awareness and encourage active participation in conservation efforts. Her work also seeks to empower local communities by providing them with the knowledge and tools necessary to manage their natural resources effectively and become stewards in their communities. Before joining the Belize Maya Forest Trust team, she actively participated in various initiatives focused on the conservation of both flora and fauna. During this time, she developed expertise in communications, marketing, project management, and environmental education. Her commitment and leadership are essential in aligning conservation objectives with the needs of communities, fostering a harmonious coexistence that benefits both.",
      imgSrc: Tzul
    },
    {
      name: "Lyndon Mai",
      position: "Protected Areas Manager", 
      Education:"B.Sc. Military degree in defence and international affairs", 
      description: "Lyndon is at the forefront of conservation efforts in one of Central America's most diverse ecosystems. Under his guidance, the ranger team collaborates with stakeholders, and environmental organizations to foster a sense of stewardship among residents, ensuring that the natural resources and cultural heritage of Belize is respected and integrated into conservation efforts. Lyndon’s deep understanding of the ecological significance of the Belize Maya Forest enables him to address challenges such as illegal hunting, forest fires, and climate change impacts effectively. He can share his passion, knowledge and skill with the entire protection team, supporting their capacity and careers in conservation. Before joining the Belize Maya Forest Trust team, he served the Belize Defence Force for ten years and gain a military background in navigation, mapping, search and rescue and many adventures that gave him valuable experiences and skills.  ",
      imgSrc: Lyndon
    },
    {
      name: "Ermain Requena",
      position: "Regenerative Agriculture Coordinator", 
      Education: "BSc in Applied Agriculture, University of Belize Central Farm",
      description: "Ermain is responsable to promote sustainable land management and ecological restoration within Belize Maya Forest landscape. His work involves collaborating with local communities, stakeholders, and conservation organizations to foster a deeper understanding of regenerative agriculture principles, which aim to improve soil health, increase biodiversity, and ensure the long-term viability of agricultural systems. Ermain brings over fifteen years of experience in collaborating with farmers and offering technical assistance aimed at enhancing small-scale agricultural practices. His deep-seated passion for sustainable agriculture drives him to invest significant time and effort in both understanding and disseminating effective sustainable farming techniques to local farmers.  Before becoming a member of the Belize Maya Forest Trust team, Ermain was actively involved in various agricultural initiatives that focused on supporting small-scale farmers. His commitment to promoting sustainable practices not only benefits the farmers he works with but also contributes to the broader goal of fostering environmentally responsible agriculture.  ",
      imgSrc: ProfilePic
    },
    {
      name: "Raquel Chun",
      position: "Conservation Data Analyst", 
      Education: "Ph.D. Climate Change and Smallholder Agriculture, Durham University",  
      description: "Raquel brings ten years of experience in conservation and is a dedicated Belizean committed to fostering a sustainable future. Her enthusiasm for science and technology drives her to engage in thorough research and innovative strategies that enhance our understanding and appreciation of the natural environment. She is responsible for analysing complex datasets that inform conservation strategies and initiatives aimed at protecting the rich biodiversity of the Belize Maya Forest. Her expertise in data analysis allows her to identify trends and patterns that are crucial for understanding the ecological health and local impacts of the organization work. By collaborating with local communities, governmental agencies, and international organizations, she ensures that conservation efforts are both scientifically grounded and culturally sensitive. Prior to joining the Belize Maya Forest Trust, she has worked with other Belizean non-governmental organization where she gains develop her capacity and love for science.  ",
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
