import React from 'react';
import Topstaff from "../assets/Topstaff.JPG";
import WWArangers from "../assets/WWArangers.jpg";
import WWAboard from "../assets/WWAboard.jpg";
import Supp from "../assets/Supp.jpg";
import Vol from "../assets/Vol.jpg";
import styles from "../styles/ourpeople.module.css";
import Board from "../assets/Rec8-min.jpg";
import Stew from "../assets/Rec6-min.jpg";
import OTplan from "../assets/OTplan.JPG";

const OurPeople = () => {
  return (
    <div>
      <header className={styles.header}>
        <img src={Topstaff} alt="Header" />
        <h1 className={styles.titleoverlay}>Our People</h1>
      </header>
      
      <section className={`${styles.outreachSection} ${styles.rangers}`}>
        <div className={styles.textSide}>
          <h2>Our Team</h2>
          <p>
          Our team at the Belize Maya Forest Trust (BMFT) is a dedicated group of staff, rangers, and outsourced professionals, all united by a shared commitment to preserving the Belize Maya Forest. With a diverse range of expertise, we work collaboratively to protect the forest's rich biodiversity and cultural heritage, ensuring its sustainability and resilience for future generations.          </p>
          <a href="/ourteam" className={styles.outreachButton}>See More</a>
        </div>
        <div className={styles.imageSide}>
          <img src={WWAboard} alt="Ourteam" className={styles.image} />
        </div>
      </section>
      <section className={`${styles.outreachSection} ${styles.boardMembers}`}>
        <div className={styles.imageSide}>
          <img src={Stew} alt="Community Stewards" className={styles.image} />
        </div>
        <div className={styles.textSide}>
          <h2>Community Stewards</h2>
          <p>
          The Community Stewards Program enables individuals to create and lead projects that align with BMFT’s conservation goals. Stewards receive technical support, capacity-building, and financial aid to implement their initiatives. Our scholarship program provides educational opportunities for youth in stakeholder communities, covering various levels of schooling and vocational training. In return, scholarship recipients contribute conservation service hours, becoming active BMFT community stewards.      
          </p>
          <a href="/stewards" className={styles.outreachButton}>See More</a>
        </div>
      </section>
      <section className={`${styles.outreachSection} ${styles.rangers}`}>
        <div className={styles.textSide}>
          <h2>Volunteers and Interns</h2>
          <p>
            Volunteers and interns are crucial to the Belize Maya Forest Trust (BMFT). Their dedication and hard work are essential in advancing our conservation efforts and expanding our impact.
          </p>
          <a href="/volunteers" className={styles.outreachButton}>See More</a>
        </div>
        <div className={styles.imageSide}>
          <img src={Vol} alt="Volunteers and Interns" className={styles.image} />
        </div>
      </section>
      <section className={`${styles.outreachSection} ${styles.boardMembers}`}>
        <div className={styles.imageSide}>
          <img src={Board} alt="Board" className={styles.image} />
        </div>
        <div className={styles.textSide}>
          <h2>Board</h2>
          <p>
          The Board of Directors at BMFT is composed of experienced professionals dedicated to guiding and supporting our mission. Each board member brings a wealth of knowledge and expertise from diverse fields, contributing to strategic decision-making and organizational oversight. Their leadership and commitment are instrumental in advancing our conservation goals and ensuring the long-term sustainability of the Belize Maya Forest.
          </p>
          <a href="/board" className={styles.outreachButton}>See More</a>
        </div>
      </section>
      <section className={`${styles.outreachSection} ${styles.rangers}`}>
        <div className={styles.textSide}>
          <h2>Researchers</h2>
          <p>
          Our partner researchers are a vital part of BMFT’s conservation efforts, bringing specialized expertise and innovative approaches to our projects. Collaborating with leading institutions and independent experts, they conduct essential research that informs our strategies and enhances our understanding of the Belize Maya Forest’s ecosystem. Their work helps drive evidence-based conservation practices and supports our mission to protect and sustain this invaluable natural resource.
          </p>
          <a href="/supporters" className={styles.outreachButton}>See More</a>
        </div>
        <div className={styles.imageSide}>
          <img src={OTplan} alt="Supporters" className={styles.image} />
        </div>
      </section>
      <section className={`${styles.outreachSection} ${styles.boardMembers}`}>
        <div className={styles.imageSide}>
          <img src={Vol} alt="Volunteers and Interns" className={styles.image} />
        </div>
        <div className={styles.textSide}>
          <h2>Supporters and Partners</h2>
          <p>
          Supporters and partners are essential to the Belize Maya Forest Trust (BMFT), providing crucial resources and expertise that empower us to safeguard the Belize Maya Forest. Their involvement ensures the effective management and protection of this vital ecosystem, which supports diverse wildlife, sustains vital water sources, and preserves cultural heritage. Through their support, we can advance our conservation efforts, engage communities, and foster sustainable practices, ensuring the forest’s health and vitality for generations to come.
            </p>
          <a href="/volunteers" className={styles.outreachButton}>See More</a>
        </div>
      </section>
    </div>
  );
};

export default OurPeople;
