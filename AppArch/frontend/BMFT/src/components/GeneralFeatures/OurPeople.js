import React from 'react';
import Topstaff from "../assets/Topstaff.JPG";
import WWArangers from "../assets/WWArangers.jpg";
import OTduo from "../assets/OTduo.jpg";
import Supp from "../assets/Supp.jpg";
import StewardSum from "../assets/Placeholder.jpg";
import styles from "../styles/ourpeople.module.css";
import Board from "../assets/Rec8-min.jpg";
import Staff26 from "../assets/Topstaff.JPG";
import OTplan from "../assets/OTplan.JPG";
import { MdInbox } from 'react-icons/md';

const OurPeople = () => {
  return (
    <div>
      <header className={styles.header}>
        <img src={Staff26} alt="Header" />
        <h1 className={styles.titleoverlay}>Our People</h1>
      </header>

      <section className={`${styles.outreachSection} ${styles.rangers}`}>
        <div className={styles.textSide}>
          <h2>Board of Directors</h2>
          <p>
            The BMFT Board of Directors provides strategic leadership and governance, guiding the organization's mission to protect and steward the Belize Maya Forest. With diverse backgrounds in conservation, law, business, and community development, our board ensures the Trust operates with transparency, accountability, and long-term impact.
          </p>
          <a href="/staff" className={styles.outreachButton}>See More</a>
        </div>
        <div className={styles.imageSide}>
          <img src={Board} alt="Board of Directors" className={styles.image} />
        </div>
      </section>

      <section className={`${styles.outreachSection} ${styles.boardMembers}`}>
        <div className={styles.imageSide}>
          <img src={StewardSum} alt="Our Team" className={styles.image} />
        </div>
        <div className={styles.textSide}>
          <h2>Our Team & Staff</h2>
          <p>
            Our team at the Belize Maya Forest Trust (BMFT) is a dedicated group of staff and rangers, united by a shared commitment to preserving the Belize Maya Forest. With a diverse range of expertise, we work collaboratively to protect the forest's rich biodiversity and cultural heritage, ensuring its sustainability and resilience for future generations.
          </p>
          <a href="/Ourteam" className={styles.outreachButton}>See More</a>
        </div>
      </section>

      <div style={{textAlign: 'center', padding: '2rem 0 3rem'}}>
        <a
          href="/WhoWeAre"
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
          ← Back to Who We Are
        </a>
      </div>
    </div>
  );
};

export default OurPeople;
