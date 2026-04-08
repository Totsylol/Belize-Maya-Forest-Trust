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
import Rtop from "../assets/Rtop.JPG";
import Staff from "./Staff";

const teamMembers = [
      {
    name: "Dr. Raquel Chun",
        position: "Conservation Data Analyst", 
        Education: "Ph.D. Climate Change and Smallholder Agriculture, Durham University",  
        description: "Raquel brings ten (10) years of experience in conservation and is dedicated to fostering a sustainable future. She is responsible for analysing complex datasets that inform conservation strategies and initiatives aimed at protecting biodiversity and ensuring that conservation efforts are both scientifically grounded and culturally sensitive. Prior to joining, she worked with other Belizean NGOs where she developed her capacity for and love of science.",
        imgSrc: Raquel
      },
    {
        name: "Sayuri Tzul",
        position: "Community Outreach and Stewards Coordinator ", 
        Education: "MSc. Agribusiness & Sustainable Markets, CATIE",  
        description: "Sayuri is at the forefront of developing and implementing the Community Stewards Program across the ten (10) stakeholder communities of the BMF. She promotes active participation in conservation efforts and empowers local communities by providing them the knowledge and necessary tools. Before joining, she actively participated in various conservation initiatives while developing expertise in communications and marketing, project management, and environmental education.",
        imgSrc: Sayuri
      },
      {
        name: "Lillian Centeno",
        position: "Silver Oaks Management Services Senior Human Resources Administrator",  
        description: "Lillian is committed to strengthening the operational efficiency of the Belize Maya Forest Trust (BMFT) and leads the organization’s Human Resources administration. She is supported by the outstanding team at Silver Oaks, whose expertise and dedication provide invaluable support to BMFT’s work.",
        imgSrc: LillianC
      },
      {
        name: "Lyndon Mai",
        position: "Protected Areas Manager", 
        Education:"B.Sc. Military degree in defence and international affairs", 
        description: "Under Lyndon’s guidance, the ranger team collaborates with partners and environmental organizations to foster a sense of stewardship. Lyndon and the protection team have the front-line duty to safeguard the Belize Maya Forest. His deep understanding of ecological health enables him to effectively address challenges such as illegal hunting, and forest fires. Before joining the team, he served in the Belize Defence Force for ten (10) years.",
        imgSrc: Mai
      },
      {
        name: "Ermain Requena",
        position: "Restorative & Regenerative Agriculture Coordinator ", 
        Education: "BSc in Applied Agriculture, University of Belize Central Farm",
        description: "Ermain is responsible for promoting sustainable land management and restoration by collaborating with local communities, stakeholders, and conservation organizations to improve soil health, increase biodiversity, and ensure the long-term viability of agricultural systems. He brings over fifteen (15) years of experience collaborating with farmers to enhance small-scale regenerative agriculture.",
        imgSrc: ERequena
      },
      {
        name: "Ian Sangster",
        position: "Finance and Administration Manager", 
        Education: "University",  
        description: "Ian Sangster brings over fifteen (15) years of experience in finance and administration. He is responsible for managing the BMFT's financial operations, ensuring compliance with regulations, and overseeing administrative functions that support the organization's mission.",
        imgSrc: ProfilePic
      },  
  {
      name: "Marco Diaz",
      position: "Head Ranger ",
      description: " Marco Diaz serves as the Head Ranger for the Belize Maya Forest Trust. His role involves overseeing the protection and management of the forest, ensuring that its native trees, water systems of the Cara Blanca Pools, and endangered animals are safeguarded. With extensive experience in forest management and conservation, Marco is dedicated to maintaining the ecological integrity of this vital ecosystem. His leadership and commitment are essential in guiding the ranger team in their mission to preserve this irreplaceable natural heritage for future generations.",
      imgSrc: ProfilePic
    },
    {
      name: "Andy Naj",
      position: "BMF Ranger ",
      description: "Andy, a dedicated BMF Ranger, is on a noble mission to safeguard and educate future generations on the intrinsic value of coexisting with nature. Residing in Arenal village, Cayo District, he has witnessed a gradual decline in wildlife, prompting him to immerse himself fully in the protection of the environment. Every moment spent in the defense of wildlife and forests is cherished by Andy, as he firmly believes in the interconnectedness between all living beings and the ecosystem. Andy considers himself fortunate to have found his calling as a BMF Ranger, where he is constantly learning from the diverse flora and fauna that surround him. Nature, in his eyes, is the ultimate mentor, imparting invaluable lessons on the importance of stewardship and conservation. Beyond the technical aspects of his role, Andy's unwavering passion and deep affection for the forest and its biodiversity drive him to instill a sense of responsibility in others. Through his work at BMF, he strives to raise awareness about the critical role that plants and animals play in sustaining our existence. ",
      imgSrc: AndyNaj
    },
    {
      name: "A",
      position: "BMF Ranger ",
      description: "M. ",
      imgSrc: ProfilePic
    },
    {
      name: "B",
      position: "BMF Ranger ",
      description: "M ",
      imgSrc: ProfilePic
    },
    {
      name: "C",
      position: "BMF Ranger ",
      description: "f.  ",
      imgSrc: ProfilePic
    },
    {
      name: "E",
      position: "BMF Ranger ",
      description: "K",
      imgSrc: ProfilePic
    },
    {
      name: "F",
      position: "BMF Ranger ",
      description: "M",
      imgSrc: ProfilePic
    },
       
   




  ];

  const Ourteam = () => {
    const [selectedMember, setSelectedMember] = useState(null);
  
    const openModal = (member) => {
      setSelectedMember(member);
    };
  
    const closeModal = () => {
      setSelectedMember(null);
    };
  
    return (
      <div>
        <header className={styles.header}>
          <img src={Staff26} alt="Header" className={styles.headerImage} />
          <h1 className={styles.titleoverlay}>Our Team</h1>
        </header>
        <Staff></Staff>
        <section className={`${styles.section2} ${styles.animateRollIn}`}>
        <header className={styles.banner3}>Staff</header>
      </section>
        <div className={styles.biographypage}>
          {teamMembers.map((member) => (
            <div
              key={member.name}
              className={styles.teammember}
              onClick={() => openModal(member)}
            >
              <div className={styles.image}>
                <img src={member.imgSrc} alt={member.name} />
              </div>
              <div className={styles.text}>
                <h2 className={styles.name}>{member.name}</h2>
                <h3 className={styles.position}>{member.position}</h3>
              </div>
            </div>
          ))}

          {selectedMember && (
            <div className={`${styles.modal} ${styles.show}`}>
              <div className={styles.modalContent}>
                <span className={styles.close} onClick={closeModal}>&times;</span>
                <div className={styles.modalImage}>
                  <img src={selectedMember.imgSrc} alt={selectedMember.name} />
                </div>
                <div className={styles.modalDetails}>
                  <h2 className={styles.name}>{selectedMember.name}</h2>
                  <h3 className={styles.position}>{selectedMember.position}</h3>
                  <p>{selectedMember.description}</p>
                </div>
              </div>
            </div>
          )}
        </div>

        <section style={{padding: '2rem 4rem', borderTop: '1px solid #eee', marginTop: '2rem'}}>
          <div style={{display: 'flex', gap: '2rem', flexWrap: 'wrap', justifyContent: 'center'}}>
            <div style={{flex: '1', minWidth: '220px', maxWidth: '320px', textAlign: 'center', padding: '2rem', boxShadow: '0 4px 12px rgba(0,0,0,0.1)', borderRadius: '8px'}}>
              <h3 style={{fontSize: '1.4rem', marginBottom: '0.75rem', color: '#2d3436'}}>Community Stewards</h3>
              <p style={{fontSize: '0.95rem', color: '#636e72', marginBottom: '1rem', lineHeight: '1.6'}}>Meet the community stewards supporting conservation and sustainable livelihoods across the BMF landscape.</p>
              <a href="/communitystewards" style={{display:'inline-block', backgroundColor:'#52c742', color:'#fff', padding:'0.5rem 1.2rem', borderRadius:'4px', textDecoration:'none', fontWeight:'600'}}>See More</a>
            </div>
            <div style={{flex: '1', minWidth: '220px', maxWidth: '320px', textAlign: 'center', padding: '2rem', boxShadow: '0 4px 12px rgba(0,0,0,0.1)', borderRadius: '8px'}}>
              <h3 style={{fontSize: '1.4rem', marginBottom: '0.75rem', color: '#2d3436'}}>Researchers & Scientists</h3>
              <p style={{fontSize: '0.95rem', color: '#636e72', marginBottom: '1rem', lineHeight: '1.6'}}>Explore the scientific research partnerships and projects taking place within the Belize Maya Forest.</p>
              <a href="/scientificresearch" style={{display:'inline-block', backgroundColor:'#52c742', color:'#fff', padding:'0.5rem 1.2rem', borderRadius:'4px', textDecoration:'none', fontWeight:'600'}}>See More</a>
            </div>
            <div style={{flex: '1', minWidth: '220px', maxWidth: '320px', textAlign: 'center', padding: '2rem', boxShadow: '0 4px 12px rgba(0,0,0,0.1)', borderRadius: '8px'}}>
              <h3 style={{fontSize: '1.4rem', marginBottom: '0.75rem', color: '#2d3436'}}>Volunteers & Interns</h3>
              <p style={{fontSize: '0.95rem', color: '#636e72', marginBottom: '1rem', lineHeight: '1.6'}}>Join our team as a volunteer or intern and contribute to protecting the Belize Maya Forest.</p>
              <a href="/Getinvolved" style={{display:'inline-block', backgroundColor:'#52c742', color:'#fff', padding:'0.5rem 1.2rem', borderRadius:'4px', textDecoration:'none', fontWeight:'600'}}>See More</a>
            </div>
          </div>
        </section>

        <div style={{textAlign: 'center', padding: '2rem 0 3rem'}}>
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
