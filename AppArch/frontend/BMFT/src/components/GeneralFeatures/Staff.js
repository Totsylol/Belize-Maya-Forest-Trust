import React from 'react';
import Rangers from '../BIOPages/Rangers';
import Board from "../BIOPages/Board";
import Topstaff from "../assets/Topstaff.JPG";
import styles from "../styles/staff.module.css";
import WWAmid from "../assets/WWAmid.jpg";
import WWArangers from "../assets/WWArangers.jpg"; 
import WWAboard from "../assets/WWAboard.jpg";
import Supp from "../assets/Supp.jpg";
import Vol from "../assets/Vol.jpg";

const Staff = () => {
  return (
    <div>
      <header className={styles.header}>
        <img src={Topstaff} alt="Header" />
        <h1 className={styles.titleoverlay}>Our People</h1>
      </header>
      
      <section className={`${styles.outreachSection} ${styles.rangers}`}>
        <div className={styles.textSide}>
          <h2>Protection Team</h2>
          <p>
            Our dedicated Rangers are crucial to our conservation efforts. They work tirelessly in the field, monitoring wildlife, patrolling the forest, and ensuring that the natural habitat remains protected from illegal activities.
          </p>
          <button className={styles.outreachButton}>See More</button>
        </div>
        <div className={styles.imageSide}>
          <img src={WWArangers} alt="Rangers" className={styles.image} />
        </div>
      </section>
      <section className={`${styles.outreachSection} ${styles.boardMembers}`}>
        <div className={styles.imageSide}>
          <img src={WWAboard} alt="Board Members" className={styles.image} />
        </div>
        <div className={styles.textSide}>
          <h2>Staff</h2>
          <p>
            Our staff members bring a wealth of experience and dedication to our mission. They provide strategic guidance and governance, ensuring that our goals align with best practices and the evolving needs of our conservation efforts.
          </p>
          <button className={styles.outreachButton}>See More </button>
        </div>
      </section>
      <section className={`${styles.outreachSection} ${styles.rangers}`}>
        <div className={styles.textSide}>
          <h2>Supporters</h2>
          <p>
            Supporters are the backbone of the Belize Maya Forest Trust (BMFT). Their contributions enable us to protect and preserve the vital Maya forest ecosystem, which is home to diverse wildlife and indigenous cultures.
          </p>
          <button className={styles.outreachButton}>See More</button>
        </div>
        <div className={styles.imageSide}>
          <img src={Supp} alt="Supporters" className={styles.image} />
        </div>
      </section>
      <section className={`${styles.outreachSection} ${styles.boardMembers}`}>
        <div className={styles.imageSide}>
          <img src={Vol} alt="Volunteers and Interns" className={styles.image} />
        </div>
        <div className={styles.textSide}>
          <h2>Volunteers and Interns</h2>
          <p>
            Volunteers and interns are crucial to the Belize Maya Forest Trust (BMFT). Their dedication and hard work are essential in advancing our conservation efforts and expanding our impact.
          </p>
          <button className={styles.outreachButton}>See More </button>
        </div>
      </section>
    </div>
  );
};

export default Staff;
