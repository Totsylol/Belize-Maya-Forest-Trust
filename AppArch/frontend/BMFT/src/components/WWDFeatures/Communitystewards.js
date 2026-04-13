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
import Placeholder from "../assets/Placeholder.jpg";

const micrograntRecipients = [
  {
    name: "Alvin Dyck",
    village: "Blue Creek",
    project: "Fruit plot expansion to boost local jam products",
    description: "Alvin produces artisanal locally sourced jams under the brand name Black Orchid Jams. He recognized the necessity of expanding his orchards and successfully acquired 75 mango seedlings along with an essential irrigation system.",
    imgSrc: Rec1,
  },
  {
    name: "Trudy Dominguez",
    village: "Blue Creek",
    project: "Sustainable sheep rearing",
    description: "In the wake of COVID-19 and finding a healthier milk option, Trudy established a goat rearing business. She successfully acquired additional goats, electric fencing, and essential equipment.",
    imgSrc: Rec2,
  },
  {
    name: "Emily Rempel",
    village: "Blue Creek",
    project: "Supporting women in beekeeping local business",
    description: "With several years of experience as a beekeeper, Emily has aspired to transform her apiary into a sanctuary. She was able to acquire a solar system, bullet tree seedlings, and various necessary tools.",
    imgSrc: Rec3,
  },
  {
    name: "David Requena",
    village: "Yalbac Village",
    project: "First Silvo-pastoral plot in Yalbac",
    description: "David cultivates a variety of vegetables and fruits while rearing livestock. COVID-19 significantly impacted his ability to invest in his Silvo-pastoral venture. However, he acquired an electric fencing system.",
    imgSrc: Rec4,
  },
  {
    name: "Sergio Fuentes",
    village: "La Gracia Village",
    project: "Vegetable solar irrigation system",
    description: "Alongside his brothers, Sergio grows vegetables and ground food crops. His family farm will implement a solar-powered irrigation system that utilizes natural gravitational forces.",
    imgSrc: Rec5,
  },
  {
    name: "Ana Aguirre",
    village: "Los Tambos Village",
    project: "Chicken rearing start-up supports women's local business",
    description: "With her family, Ana built a spacious coop equipped with feeders capable of supporting over 500 chickens and enhanced her facility by adding incubators.",
    imgSrc: Rec6,
  },
  {
    name: "Rolando Cowo",
    village: "Valley of Peace Village",
    project: "Community shredder service",
    description: "Rolando is addressing the persistent issue of backyard burning. He aims to establish a community shredder service that will convert organic waste into mulch that increases soil fertility.",
    imgSrc: Rec7,
  },
  {
    name: "Family PassionFruit Growers Group",
    village: "Selena Village",
    project: "PassionFruit farming expansion",
    description: "Driven to strengthen family business ventures by advancing passionfruit production through regenerative agriculture practices. The family business supports the livelihoods of 5 families, a total of 15 people through 9 acres of passionfruit plantation.",
    imgSrc: Rec8,
  },
  {
    name: "Saint Oscar Romero Primary School",
    village: "Valley of Peace Village",
    project: "Model school garden",
    description: "Building a model school garden that integrates agriculture, nutrition, and environmental education while nourishing students with fresh, sustainable food. The grant will assist the school with a water harvesting system.",
    imgSrc: Placeholder,
  },
  {
    name: "Ico Family Farm",
    village: "Valley of Peace",
    project: "Regenerative farm model",
    description: "Building a regenerative, resilient model farm that restores soil and shares practical farming knowledge. The farm will enhance butterfly pea tea production and establish a Canavalia cover crop plot to improve soil health.",
    imgSrc: Placeholder,
  },
];

const scholarshipRecipients = [
  { name: "Ector Gomez", village: "Valley of Peace", field: "Applied Sustainable Agriculture, University of Belize", quote: "I see myself working along with farmers on innovative climate smart practices that are safe for the environment; hence become economically sustainable.", imgSrc: Placeholder },
  { name: "Lorena Monge", village: "Spanish Lookout", field: "Accounting and Economics, Saint Johns College", quote: "My goal is to provide high-quality financial services and advocate for sound economic policies that benefit underserved communities.", imgSrc: Placeholder },
  { name: "Elias Ayala", village: "San Felipe Village", field: "Agri-business, Centro Escolar Mexico Junior College", quote: "One of my passions is working with crops, my father is a farmer, and we have worked together since I was a little boy.", imgSrc: Placeholder },
  { name: "Christina Garcia", village: "Buena Vista Village", field: "Tourism Hospitality, Cayo Centre For Employment Training", quote: "My passion lies in creating enriching and memorable experiences for travellers, so that they can appreciate our culture and environment.", imgSrc: Placeholder },
  { name: "Alberto Garcia", village: "Buena Vista Village", field: "Tourism Hospitality, Cayo Centre For Employment Training", quote: "I am lucky to be where I am, and I want to be the change in my family and community.", imgSrc: Placeholder },
  { name: "Asirah Salazar", village: "Buena Vista Village", field: "Eden Seventh Day Adventist High School", quote: "", imgSrc: Placeholder },
  { name: "Raymundo Espinoza", village: "Los Tambos Village", field: "Natural Resources Management, University of Belize", quote: "I'm passionate about nature, and I believe that through education and research, we can safeguard our biodiversity.", imgSrc: Placeholder },
  { name: "Jeneanne McCullock", village: "Yalbac Village", field: "St. Ignatius High School", quote: "My passion is helping others or standing up for people's rights and being a voice for those who need it the most.", imgSrc: Placeholder },
  { name: "Keisly Montepeque", village: "Selena Village", field: "Eden Seventh-Day Adventist High School", quote: "Personal Growth is what inspires me for further education, being inspired by family members and/or people who value education.", imgSrc: Placeholder },
  { name: "Heisel Garcia", village: "Valley of Peace", field: "Valley of Peace S.D.A. Academy", quote: "I want to learn more so I can become someone who helps others and make a difference in the world.", imgSrc: Placeholder },
  { name: "Shawnia Duarte", village: "Selena Village", field: "Grace Instrument Christian Academy", quote: "What inspires me to further my education is that for sure it will broaden my knowledge and it will help me to become a better person.", imgSrc: Placeholder },
  { name: "Jeddiah Vasquez", village: "Sylvester Village", field: "Hospitality and Tourism Management, Centro Escolar Mexico Junior College", quote: "I have been part of the Jaguar project in Gallon Jug where the students and teachers of Virginia Tech come by to study on the different types of wild cats in Belize.", imgSrc: Placeholder },
  { name: "Zuriel Novelo", village: "San Felipe Village", field: "Agri-Business, Centro Escolar Mexico Junior College", quote: "I'm passionate about agriculture and eager to learn more about how to improve farming practices.", imgSrc: Placeholder },
  { name: "Leni Gomez", village: "Valley of Peace", field: "Tourism Hospitality Management, Cayo Centre for Employment Training", quote: "I began to see hospitality not just as a job, but as a way to bring people together.", imgSrc: Placeholder },
];

const StewardCard = ({ person, category, onClick }) => (
  <div className={styles.bubble} onClick={() => onClick(person, category)}>
    <div className={styles.bubbleImage}>
      <img src={person.imgSrc} alt={person.name} />
    </div>
    <div className={styles.bubbleText}>
      <p className={styles.bubbleName}>{person.name}</p>
      <p className={styles.bubbleVillage}>{person.village}</p>
    </div>
  </div>
);

const Communitystewards = () => {
  const [selectedPerson, setSelectedPerson] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleClick = (person, category) => {
    setSelectedPerson(person);
    setSelectedCategory(category);
  };

  const handleClose = () => {
    setSelectedPerson(null);
    setSelectedCategory(null);
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
            The Community Stewards Program empowers local stakeholders to lead conservation and sustainable development efforts across the Belize Maya Forest (BMF) landscape. By promoting inclusive participation, the program ensures that men, women, youth, and community groups play an active role in shaping solutions that support both environmental protection and sustainable livelihoods.
          </p>
          <p>
            Community stewards apply their knowledge, skills, and experience to implement locally driven initiatives such as regenerative agriculture, outreach, reforestation, Sustainability Support Microgrants, and Green Futures Scholarships. The program strengthens stewardship by fostering ownership, collaboration, and leadership within stakeholder communities.
          </p>
          <p>
            By placing people at the center of conservation, the program builds lasting relationships between communities and the forest, contributing to the protection of the BMF while enhancing community well-being and resilience.
          </p>
        </div>
      </section>

      <header className={styles.header2}>
        <img src={Cback} alt="Community Stewards" />
      </header>

      {/* Microgrants Section */}
      <section className={styles.programSection}>
        <h2 className={styles.programTitle}>Sustainability Support Microgrants</h2>
        <p className={styles.programDesc}>
          Sustainability Support Microgrants provide technical guidance, capacity-building opportunities, and financial support to help stewards implement impactful, locally driven initiatives that strengthen long-term conservation and community resilience. Supported projects include reforestation, solar energy, water harvesting, cover crop plots, beekeeping, ecotourism, and more.
        </p>
        <div className={styles.stewardGrid}>
          {micrograntRecipients.map((person, i) => (
            <StewardCard key={i} person={person} category="microgrant" onClick={handleClick} />
          ))}
        </div>
      </section>

      {/* Scholarships Section */}
      <section className={styles.programSection}>
        <h2 className={styles.programTitle}>Green Futures Scholarships</h2>
        <p className={styles.programDesc}>
          Green Futures Scholarships expand educational opportunities for youth at high school, tertiary, and vocational training levels. The program supports a wide range of academic disciplines, including tourism and hospitality, natural resource management, accounting, economics, agriculture, agribusiness, and more. Beyond financial assistance, scholarship recipients are encouraged to give back through community service and environmental stewardship.
        </p>
        <div className={styles.stewardGrid}>
          {scholarshipRecipients.map((person, i) => (
            <StewardCard key={i} person={person} category="scholarship" onClick={handleClick} />
          ))}
        </div>
      </section>

      {/* Modal */}
      {selectedPerson && (
        <div className={styles.modal} onClick={handleClose}>
          <div className={styles.modalContent} onClick={e => e.stopPropagation()}>
            <span className={styles.close} onClick={handleClose}>&times;</span>
            <div className={styles.modalInner}>
              <img src={selectedPerson.imgSrc} alt={selectedPerson.name} className={styles.modalImage} />
              <div className={styles.modalDetails}>
                <span className={`${styles.categoryBadge} ${selectedCategory === 'scholarship' ? styles.badgeScholarship : styles.badgeMicrogrant}`}>
                  {selectedCategory === 'scholarship' ? 'Green Futures Scholarship' : 'Sustainability Support Microgrant'}
                </span>
                <h2 className={styles.modalName}>{selectedPerson.name}</h2>
                <p className={styles.modalVillage}>{selectedPerson.village}</p>
                {selectedCategory === 'microgrant' && (
                  <p className={styles.modalProject}><strong>Project:</strong> {selectedPerson.project}</p>
                )}
                {selectedCategory === 'scholarship' && selectedPerson.field && (
                  <p className={styles.modalProject}><strong>Field of Study:</strong> {selectedPerson.field}</p>
                )}
                <p className={styles.modalDesc}>{selectedPerson.description || selectedPerson.quote}</p>
                {selectedCategory === 'scholarship' && selectedPerson.quote && (
                  <p className={styles.modalQuote}>"{selectedPerson.quote}"</p>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

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
    </main>
  );
};

export default Communitystewards;
