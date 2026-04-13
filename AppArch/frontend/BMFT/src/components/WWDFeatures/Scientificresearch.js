import React, { useState } from "react";
import styles from '../styles/scientificresearch.module.css';
import PBgator from "../assets/PBgator.jpg";
import OTplan from "../assets/OTplan.JPG";
import OTteam2 from "../assets/OTteam2.JPG";
import OTplan2 from "../assets/OTplan2.JPG";

const researchProjects = [
  {
    id: 1,
    category: "Flora & Fauna Research",
    title: "Ix Jaguar Project",
    lead: "Dr. Marcella Kelly | Darby & David Lugo",
    mainImage: PBgator,
    description: "The Ix Jaguar Project established by Dr. Marcella Kelly in 1998 has become a cornerstone of wildlife monitoring efforts. Dr. Kelly enlisted the help of Darby and David Lugo to further the project's mission. Currently, Darby and David take the lead in guiding groups of students and training local stewards from Sylvester to participate in wildlife monitoring activities.",
  },
  {
    id: 2,
    category: "Flora & Fauna Research",
    title: "Bats Survey",
    lead: "Giselle Marin | University of York",
    mainImage: OTplan,
    description: "Giselle Marin is conducting doctoral research at the University of York where she investigates the dietary adaptability of bats in Belize. Such adaptability during periods of scarcity serves as a vital buffer against the challenges posed by fluctuating environmental conditions like climate change and habitat degradation. The study aims to contribute to the conservation and understanding of essential pollinators.",
  },
  {
    id: 3,
    category: "Flora & Fauna Research",
    title: "Neotropical Ungulate Ecology Project",
    lead: "Annie Stevens & Johny Tzib | Virginia Tech",
    mainImage: OTteam2,
    description: "Annie Stevens and Johny Tzib, graduate students at Virginia Tech, are spearheading Belize's first research focused on deer populations. The study of white-tailed and red brocket deer will establish essential baseline data for Belize, enhancing the understanding of these key game species.",
  },
  {
    id: 4,
    category: "Flora & Fauna Research",
    title: "Liana Research",
    lead: "Denver Cayetano | University of Florida",
    mainImage: OTplan2,
    description: "Denver Cayetano, a doctoral student at the University of Florida, is focusing his research on the intricate dynamics between lianas and trees within the BMF. This study aligns with the objectives of the REDD+ Carbon Project, improving the effectiveness of carbon reduction initiatives and establishing best practices for reforestation.",
  },
  {
    id: 5,
    category: "Aquatic Research",
    title: "Yalbac Water Quality",
    lead: "Dr. Rachael Carrie | University of Leeds",
    mainImage: PBgator,
    description: "Dr. Rachael Carrie from the University of Leeds conducts an ongoing, comprehensive baseline study assessing the water quality in various sources within Yalbac village, nearby points along Black Creek, and BMF lagoons and cenotes to identify and analyze the challenges the communities face to both access and quality. This project is ongoing.",
  },
  {
    id: 6,
    category: "Aquatic Research",
    title: "Savanna Field Station",
    lead: "Day Ligon | Donald & Jen McKnight",
    mainImage: OTplan,
    description: "The Savanna Field Station under the leadership of Day Ligon, Donald McKnight, and Jen McKnight, has made significant strides in enhancing our understanding of aquatic ecosystems. Donald has invested considerable time and effort in collecting water samples and conducting fish surveys from the Cara Blanca Pools to assess water quality, and fish and Hicatee turtle populations.",
  },
  {
    id: 7,
    category: "Archaeology Studies",
    title: "Valley of Peace Archaeology (VOPA) Project",
    lead: "Dr. Lisa Lucero | University of Illinois",
    mainImage: OTteam2,
    description: "Dr. Lisa Lucero embarked on an extensive study of the Maya Civilization in the Cayo District beginning in 1997. This archaeological study highlights the significant role of the landscape and the hidden cultural heritage associated with the BMF. There remains a wealth of information yet to be discovered. Although the project is currently on hold, interested parties can access the project reports through the provided link.",
  },
  {
    id: 8,
    category: "Archaeology Studies",
    title: "Environmental Justice & Water Temple at Cara Blanca",
    lead: "Dr. Jean Larmon | University of Montana",
    mainImage: OTplan2,
    description: "Dr. Jean Larmon focused her doctoral research on the significant role of water in shaping the landscape of the Terminal Classic Maya period (circa 800–950 CE) at the archaeological site of Cara Blanca. Larmon's research dives into the historical significance of this infrastructure and the impact of archaeological constructs on the dynamics of environmental justice.",
  },
  {
    id: 9,
    category: "Archaeology Studies",
    title: "Chan Chich Archaeological Project",
    lead: "Dr. Brett Houk | Texas Tech University",
    mainImage: OTplan,
    description: "Dr. Brett Houk leads the Chan Chich Archaeological Project investigating the ancient Maya site of Chan Chich between 1996 and 2019. The project has researched a wide range of topics at the site including development and nature of Maya urbanism, the relationships between rulers and their architectural complexes, and the process of city planning.",
  },
];

const categories = [...new Set(researchProjects.map(p => p.category))];

const ResearchBubble = ({ project, onClick }) => (
  <div className={styles.bubble} onClick={() => onClick(project)}>
    <div className={styles.bubbleImage}>
      <img src={project.mainImage} alt={project.title} />
    </div>
    <div className={styles.bubbleText}>
      <h2 className={styles.bubbleName}>{project.title}</h2>
      <h3 className={styles.bubblePosition}>{project.lead}</h3>
    </div>
  </div>
);

const ScientificResearch = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div className={styles.pageContainer}>
      <h1 className={styles.titleOverlay1}>Scientific Research</h1>
      <header className={styles.header}>
        <div className={styles.greenBackground}></div>
      </header>

      <section className={styles.introSection}>
        <p>The role of scientific researchers in the Belize Maya Forest (BMF) is crucial for the long-term conservation of the unique ecosystem. By monitoring wildlife populations, assessing the health of various plant species, and analysing the impacts of climate change, these dedicated professionals provide invaluable data that can guide policy decisions and conservation efforts.</p>
      </section>

      {categories.map(category => (
        <section key={category} className={styles.categorySection}>
          <h2 className={styles.categoryTitle}>{category}</h2>
          <div className={styles.bubbleGrid}>
            {researchProjects
              .filter(p => p.category === category)
              .map(project => (
                <ResearchBubble
                  key={project.id}
                  project={project}
                  onClick={setSelectedProject}
                />
              ))
            }
          </div>
        </section>
      ))}

      {selectedProject && (
        <div className={styles.modalOverlay} onClick={() => setSelectedProject(null)}>
          <div className={styles.modalBox} onClick={e => e.stopPropagation()}>
            <button className={styles.modalClose} onClick={() => setSelectedProject(null)}>×</button>
            <div className={styles.modalInner}>
              <img src={selectedProject.mainImage} alt={selectedProject.title} className={styles.modalImg} />
              <div className={styles.modalText}>
                <h2>{selectedProject.title}</h2>
                <p className={styles.modalLead}><em>{selectedProject.lead}</em></p>
                <p>{selectedProject.description}</p>
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
    </div>
  );
};

export default ScientificResearch;
