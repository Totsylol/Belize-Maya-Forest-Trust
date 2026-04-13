import React, { useState } from 'react';
import styles from '../styles/ourteam.module.css';
import ProfilePic from "../assets/ProfilePic.jpg";
import Staff26 from "../assets/Topstaff.JPG";
import AndyNaj from "../assets/Andy Naj.JPG";
import EKay from "../assets/Elma.png";
import Sayuri from "../assets/Tzul.JPG";
import Mai from "../assets/Lyndon Mai.jpg";
import ERequena from "../assets/Placeholder.jpg";
import Raquel from "../assets/Raquel Chun.JPG";
import LillianC from "../assets/Placeholder.jpg";
import DWade from "../assets/Placeholder.jpg";
import JPepper from "../assets/JPepper.png";
import MGriffis from "../assets/Placeholder.jpg";
import MBowen from "../assets/MBowen.png";
import MGruin from "../assets/MGruin.png";

const boardMembers = [
  {
    name: "Dr. Elma Kay",
    position: "Managing Director",
    Education: "Ph.D. Biology (Ecology, Evolution and Systematics), Saint Louis University",
    description: "Under Elma's leadership, Belize Maya Forest (BMF) has seen significant advancements in biodiversity conservation, habitat restoration, and community engagement initiatives. She combines almost twenty (20) years of experience in academics, conservation and policy work. Prior to joining, she served on committees related to carbon projects and is currently on several non-governmental organization (NGO) boards while acting as Chairwoman for the board of directors of the Belize Network of NGOs.",
    imgSrc: EKay,
  },
  {
    name: "Deeriann Wade",
    position: "The Nature Conservancy's Conservation Analyst",
    description: "Deeriann is the Conservation Analyst with The Nature Conservancy's (TNC) Belize Business Unit. Prior to TNC, she served as a public officer with the Government of Belize for sixteen (16) years. Most recently, she served as a Blue Economy Officer responsible for matters related to energy, climate change, maritime transport and sustainable development.",
    imgSrc: DWade,
  },
  {
    name: "Justin Pepper",
    position: "Bobolink Foundation's Chief Conservation Officer",
    description: "Justin engages in community-based conservation of biodiversity in the Americas. Prior to Bobolink, he worked for Audubon supporting and amplifying grassroots conservation leaders in the Chicago area, and later, developing a market-based approach to grassland bird conservation.",
    imgSrc: JPepper,
  },
  {
    name: "Matt Griffis",
    position: "Wyss Foundation Conservation Program Officer",
    description: "Matt has served at the Wyss Foundation since 2011 and is responsible for managing the Foundation's land acquisitions and overseeing conservation grant making efforts in Africa, Asia, and Europe. He volunteers with organizations like the American Hiking Society and the Boy Scouts of America.",
    imgSrc: MGriffis,
  },
  {
    name: "Michael H.M. Bowen",
    position: "Bowen & Bowen CEO",
    description: "In 2010, Michael became CEO of Bowen & Bowen, a third-generation family business and parent company of Gallon Jug Estate, which is home to Chan Chich Lodge and a direct neighbor of the Belize Maya Forest.",
    imgSrc: MBowen,
  },
  {
    name: "Mark Gruin",
    position: "Past Board Director (Deceased)",
    description: "Mark, Trustee of Rainforest Trust, dedicated more than thirty (30) years to international conservation and sustainable development. His career was characterized by early commitment and involvement while establishing a foundation for lasting and sustainable impact.",
    imgSrc: MGruin,
  },
];

const staffMembers = [
  {
    name: "Dr. Raquel Chun",
    position: "Conservation Data Analyst",
    Education: "Ph.D. Climate Change and Smallholder Agriculture, Durham University",
    description: "Raquel brings ten (10) years of experience in conservation and is dedicated to fostering a sustainable future. She is responsible for analysing complex datasets that inform conservation strategies and initiatives aimed at protecting biodiversity and ensuring that conservation efforts are both scientifically grounded and culturally sensitive.",
    imgSrc: Raquel,
  },
  {
    name: "Sayuri Tzul",
    position: "Community Outreach and Stewards Coordinator",
    Education: "MSc. Agribusiness & Sustainable Markets, CATIE",
    description: "Sayuri is at the forefront of developing and implementing the Community Stewards Program across the ten (10) stakeholder communities of the BMF. She promotes active participation in conservation efforts and empowers local communities by providing them the knowledge and necessary tools.",
    imgSrc: Sayuri,
  },
  {
    name: "Lillian Centeno",
    position: "Silver Oaks Management Services Senior Human Resources Administrator",
    description: "Lillian is committed to strengthening the operational efficiency of the Belize Maya Forest Trust (BMFT) and leads the organization's Human Resources administration. She is supported by the outstanding team at Silver Oaks, whose expertise and dedication provide invaluable support to BMFT's work.",
    imgSrc: LillianC,
  },
  {
    name: "Lyndon Mai",
    position: "Protected Areas Manager",
    Education: "B.Sc. Military degree in defence and international affairs",
    description: "Under Lyndon's guidance, the ranger team collaborates with partners and environmental organizations to foster a sense of stewardship. Lyndon and the protection team have the front-line duty to safeguard the Belize Maya Forest. His deep understanding of ecological health enables him to effectively address challenges such as illegal hunting, and forest fires.",
    imgSrc: Mai,
  },
  {
    name: "Ermain Requena",
    position: "Restorative & Regenerative Agriculture Coordinator",
    Education: "BSc in Applied Agriculture, University of Belize Central Farm",
    description: "Ermain is responsible for promoting sustainable land management and restoration by collaborating with local communities, stakeholders, and conservation organizations to improve soil health, increase biodiversity, and ensure the long-term viability of agricultural systems.",
    imgSrc: ERequena,
  },
  {
    name: "Ian Sangster",
    position: "Finance and Administration Manager",
    description: "Ian Sangster brings over fifteen (15) years of experience in finance and administration. He is responsible for managing the BMFT's financial operations, ensuring compliance with regulations, and overseeing administrative functions that support the organization's mission.",
    imgSrc: ProfilePic,
  },
  {
    name: "Marco Diaz",
    position: "Head Ranger",
    description: "Marco Diaz serves as the Head Ranger for the Belize Maya Forest Trust. His role involves overseeing the protection and management of the forest, ensuring that its native trees, water systems of the Cara Blanca Pools, and endangered animals are safeguarded.",
    imgSrc: ProfilePic,
  },
  {
    name: "Andy Naj",
    position: "BMF Ranger",
    description: "Andy, a dedicated BMF Ranger, is on a noble mission to safeguard and educate future generations on the intrinsic value of coexisting with nature. Residing in Arenal village, Cayo District, he has witnessed a gradual decline in wildlife, prompting him to immerse himself fully in the protection of the environment.",
    imgSrc: AndyNaj,
  },
];

const categories = [
  { label: "Board of Directors", members: boardMembers },
  { label: "Staff", members: staffMembers },
];

const TeamBubble = ({ member, onClick }) => (
  <div className={styles.bubble} onClick={() => onClick(member)}>
    <div className={styles.bubbleImage}>
      <img src={member.imgSrc} alt={member.name} />
    </div>
    <div className={styles.bubbleText}>
      <h2 className={styles.bubbleName}>{member.name}</h2>
      <h3 className={styles.bubblePosition}>{member.position}</h3>
    </div>
  </div>
);

const Ourteam = () => {
  const [selectedMember, setSelectedMember] = useState(null);

  return (
    <div className={styles.pageContainer}>
      <h1 className={styles.titleoverlay}>Our Team</h1>
      <header className={styles.header}>
        <div className={styles.greenBackground}></div>
      </header>

      {categories.map(({ label, members }) => (
        <section key={label} className={styles.categorySection}>
          <h2 className={styles.categoryTitle}>{label}</h2>
          <div className={styles.bubbleGrid}>
            {members.map((member) => (
              <TeamBubble key={member.name} member={member} onClick={setSelectedMember} />
            ))}
          </div>
        </section>
      ))}

      {selectedMember && (
        <div className={styles.modalOverlay} onClick={() => setSelectedMember(null)}>
          <div className={styles.modalBox} onClick={e => e.stopPropagation()}>
            <button className={styles.modalClose} onClick={() => setSelectedMember(null)}>×</button>
            <div className={styles.modalInner}>
              <img src={selectedMember.imgSrc} alt={selectedMember.name} className={styles.modalImg} />
              <div className={styles.modalText}>
                <h2>{selectedMember.name}</h2>
                <h3 className={styles.modalPosition}>{selectedMember.position}</h3>
                {selectedMember.Education && (
                  <p className={styles.modalEducation}><em>{selectedMember.Education}</em></p>
                )}
                <p>{selectedMember.description}</p>
              </div>
            </div>
          </div>
        </div>
      )}

      <div style={{ textAlign: 'center', padding: '2rem 0 3rem' }}>
        <a
          href="/ourpeople"
          style={{
            display: 'inline-block',
            backgroundColor: '#52c742',
            color: '#fff',
            padding: '0.6rem 1.8rem',
            borderRadius: '4px',
            textDecoration: 'none',
            fontSize: '1rem',
            fontWeight: '600',
          }}
        >
          ← Back to Our People
        </a>
      </div>
    </div>
  );
};

export default Ourteam;
