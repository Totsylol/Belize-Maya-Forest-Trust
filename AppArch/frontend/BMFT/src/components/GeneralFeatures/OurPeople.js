import React from 'react';
import Topstaff from "../assets/Topstaff.JPG";
import WWArangers from "../assets/WWArangers.jpg";
import OTduo from "../assets/OTduo.jpg";
import Supp from "../assets/Supp.jpg";
import StewardSum from "../assets/Placeholder.jpg";
import styles from "../styles/ourpeople.module.css";
import Staff26 from "../assets/Topstaff.JPG";
import OTplan from "../assets/OTplan.JPG";
import OTteam2 from "../assets/OTteam2.JPG";
import Ctop from "../assets/Ctop.jpg";

const OurPeople = () => {
  return (
    <div>
      <header className={styles.header}>
        <img loading="lazy" src={Staff26} alt="Header" />
        <h1 className={styles.titleoverlay}>Our People</h1>
      </header>

      <section className={`${styles.outreachSection} ${styles.boardMembers}`}>
        <div className={styles.imageSide}>
          <img loading="lazy" src={StewardSum} alt="Our Team" className={styles.image} />
        </div>
        <div className={styles.textSide}>
          <h2>Our Team & Staff</h2>
          <p>
            Our team at the Belize Maya Forest Trust (BMFT) is a dedicated group of staff and rangers, united by a shared commitment to preserving the Belize Maya Forest. With a diverse range of expertise, we work collaboratively to protect the forest's rich biodiversity and cultural heritage, ensuring its sustainability and resilience for future generations.
          </p>
          <a href="/Ourteam" className={styles.outreachButton}>See More</a>
        </div>
      </section>

      <section className={`${styles.outreachSection} ${styles.researchers}`}>
        <div className={styles.textSide}>
          <h2>Researchers & Scientists</h2>
          <p>
            Scientific researchers play a vital role in the long-term conservation of the Belize Maya Forest. From wildlife monitoring and aquatic studies to archaeology, our research partners provide data that guides conservation policy and action.
          </p>
          <a href="/scientificresearch" className={styles.outreachButton}>See More</a>
        </div>
        <div className={styles.imageSide}>
          <img loading="lazy" src={OTteam2} alt="Researchers & Scientists" className={styles.image} />
        </div>
      </section>

      <section className={`${styles.outreachSection} ${styles.stewards}`}>
        <div className={styles.imageSide}>
          <img loading="lazy" src={Ctop} alt="Community Stewards" className={styles.image} />
        </div>
        <div className={styles.textSide}>
          <h2>Community Stewards</h2>
          <p>
            The Community Stewards Program empowers local stakeholders to lead conservation and sustainable development efforts. Through microgrants, scholarships, and active participation, stewards protect the forest while strengthening community livelihoods.
          </p>
          <a href="/communitystewards" className={styles.outreachButton}>See More</a>
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
