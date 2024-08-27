import React, { useState } from 'react';
import styles from '../styles/biography.module.css';
import Elma from "../assets/Elma.png";
import Tzul from "../assets/Tzul.JPG";
import ProfilePic from "../assets/ProfilePic.jpg";
import MichealHM from "../assets/MichealHM.png"
import JPepper from "../assets/JPepper.png"
import MGruin from "../assets/MGruin.png"
import DBuck from "../assets/DBuck.jpg"
import JRob from "../assets/JRob.jpg"

const teamMembers = [
    {
      name: "Michael H.M. Bowen",
      position: "Unkown",
      description: "Michael H.M. Bowen, an eighth-generation Belizean, who’s family first came to Belize in 1752, was educated in the United States of America, joined the family company after graduating from Duke University. In 2010 Michael became the CEO of Bowen & Bowen, a third-generation family company, which is the parent company of Crystal Bottling Company and Belize Brewing Company, the bottlers of Coca-Cola and Belikin Beer, among other companies, including Gallon Jug, a ~30,000 acres private rainforest jungle reserve which host the world-renown boutique lodge Chan Chich. Michael continues to push Bowen & Bowen’s mission statement, Pursuing excellence for a stronger Belize. ",
      imgSrc: MichealHM
    },
    {
      name: "Justin Pepper",
      position: "Uknown",
      description: "Justin Pepper is the Bobolink Foundation’s Chief Conservation Officer. Bobolink’s focus is biodiversity conservation in the Americas, emphasizing grasslands, coastal conservation, wildlife and wild landscapes, and community-based conservation. Prior to Bobolink, Justin worked for Audubon, first, supporting, amplifying and celebrating grassroots conservation leaders in the Chicago area, and later, developing a market-based approach to grassland bird conservation in partnership with conservation-minded ranchers. He previously worked for the Missouri Department of Conservation and The Nature Conservancy of Minnesota and graduated from the University of Kansas. ",
      imgSrc: JPepper
    },
    {
      name: "Mark Gruin",
      position: "Past Board Director",
      description: "Past Board Director (Deceased) Mark Gruin, Trustee of Rainforest Trust has dedicated more than 30 years to international conservation and sustainable development. He has worked, lived and traveled in more than 40 countries, helping a wide range of local and international non-governmental organizations create, develop and implement sustainable development strategies that integrate preserving biodiversity and threatened habitats with creating economic and humanitarian benefits to local communities. His career has been characterized by committed early involvement, working on the ground in early stages of difficult projects to find ways to quickly address immediate needs, while establishing a foundation for lasting and sustainable impact and increased local capacity. An inveterate wanderer and wonderer, working in remote places with little infrastructure and pressing needs has been the norm, including many projects throughout South and Central America and the Caribbean, the Russian Far East, sub-Saharan and the Horn of Africa, North America, Europe and the Caucasus. ",
      imgSrc: MGruin
    },
    {
      name: "Deeriann Buckley-Wade",
      position: "Uknown",
      description: "Deeriann Buckley-Wade is the Conservation Analyst with The Nature Conservancy’s Belize Business Unit. She holds a dual bachelor’s degree in environmental science from Galen University and the University of Indianapolis, as well as a master’s degree in Climate Change and Development from the SOAS University of London. Prior to TNC, she served as a public officer with the Government of Belize for almost 16 years, working in various capacities within the administrative and technical grades. Most recently, she served as a Blue Economy Officer responsible for matters relating to energy, climate change, maritime transport and sustainable development with the Ministry of Blue Economy and Civil Aviation. ",
      imgSrc: DBuck
    },
    {
      name: "Julie Robinson",
      position: "Belize Program Director, The Nature Conservancy",
      description: "Julie has a BSc in Biology from the University of South Florida. For over twenty-five years, Julie has focused her work on marine research and conservation off the coast of Belize. Today, she is the Belize Program Director for The Nature Conservancy where she provides strategic leadership for a steadily growing program that addresses crises including biodiversity loss and climate change through the implementation of Sustainable Fisheries and Mariculture Programs, Regenerative Ranching & Agriculture Programs, Land protection and Carbon offsetting programs. She was pivotal in the closing of the Belize Blue Bonds deal and continues to lead this program in close collaboration with the Government of Belize. Each of these programs aim to align science, technology, policy, finance and livelihoods for the benefit of people and the environment. Julie joined the Conservancy in 2006 where her focus was primarily as a marine program manager, building research and management capacity of local partners. She has led multi-disciplinary planning and science teams and built partnerships across diverse sectors and disciplines including government, private sector and non-profit organizations across multiple geographies including Mexico and the Seychelles. All of Julie’s conservation work is based on consultation where she has built a long process for cultivation and building consensus amongst stakeholders.",
      imgSrc: JRob
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
