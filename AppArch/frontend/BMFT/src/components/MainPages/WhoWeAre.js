import React from 'react';
import styles from '../styles/whoweare.module.css'; 
import WWAtop from "../assets/WWAtop.jpg";
import WWAposter from "../assets/WWAposter.jpg";
import WWAmid from "../assets/WWAmid.jpg";
import WWArangers from "../assets/WWArangers.jpg"; 
import WWAboard from "../assets/WWAboard.jpg";
import facebookicon from "../assets/facebookicon.webp";
import youtubeicon from "../assets/youtubeicon.png";
import gmailicon2 from "../assets/gmailicon2.jpg";

const WhoWeAre = () => {
    return (
        <div className={styles.pageContainer}>
            <header className={styles.header}>
                <img src={WWAtop} alt="Header" />
                <div className={styles.titleoverlay}>
                    <h1>Belize Maya Forest Trust</h1>
                </div>
            </header>
            <section className={styles.infoSection}>
                <div className={styles.infoContent}>
                    <div className={styles.infoContainer}>
                        <h2>Our Story</h2>
                        <p>
                            The Belize Maya Forest Trust (BMFT), established in December 2020, is dedicated to preserving the Belize Maya Forest (BMF) as a global model of effective, lasting conservation.
                        </p>
                        <p>
                            The BMF, encompassing 236,000 acres of rich, biodiverse forest, was acquired in December 2020 from a US timber investment firm. This achievement followed years of collaboration among NGOs, the Belizean government, private sector entities, and individuals. The BMF is the last extensive lowland broadleaf forest in Belize, bordered by Guatemala, the Rio Bravo Conservation and Management Area (RBCMA), and private agricultural lands. It also surrounds the private property of Gallon Jug, which includes the Chan Chich Lodge and Sylvester Village. Together with the RBCMA and Gallon Jug, the BMF represents 9% of Belize’s land area.
                        </p>
                        <p>
                            The BMFT’s protection of the BMF is one of Belize’s largest contributions to land and ocean conservation. This forest, integral to the Rio Hondo watershed, supports a rich array of species such as the jaguar, Baird’s tapir, and Central American river turtle. It also plays a crucial role in regional climate resilience, water security, and biodiversity preservation.
                        </p>
                        <p>
                            To guide its efforts, BMFT developed a Conservation Action Plan (CAP) through a yearlong stakeholder engagement process, adhering to the Conservation Measures Partnership’s Open Standards for the Practice of Conservation. This plan outlines strategies to enhance conservation targets and address threats within the BMF and its surrounding landscape.
                        </p>
                    </div>
                    <div className={styles.infoImage}>
                        <img src={WWAposter} alt="WWA Poster" />
                    </div>
                </div>
            </section>
            <section className={styles.header2}>
                <img src={WWAmid} alt="Fire Prevention" />
                <h1 className={styles.titleoverlay2}>Meet the Team</h1>
            </section>
            <section className={`${styles.outreachSection} ${styles.rangers}`}>
                <div className={styles.textSide}>
                    <h2>Rangers</h2>
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
                    <h2>Board Members</h2>
                    <p>
                        Our Board Members bring a wealth of experience and dedication to our mission. They provide strategic guidance and governance, ensuring that our goals align with best practices and the evolving needs of our conservation efforts.
                    </p>
                    <button className={styles.outreachButton}>See More </button>
                </div>
            </section>
            <section className={styles.socials}>
                <a href="info@bmft.org.bz" className={styles.socialIcon} title="Email">
                    <img src={gmailicon2} alt="Gmail" className={styles.iconImage} />
                </a>
                <a href="https://www.facebook.com/BelizeMayaForestTrust" className={styles.socialIcon} title="Facebook">
                    <img src={facebookicon} alt="Facebook" className={styles.iconImage} />
                </a>
                <a href="https://www.youtube.com/channel/UCWKdyK1WxDc7nKskT_vsEeQ" className={styles.socialIcon} title="YouTube">
                    <img src={youtubeicon} alt="YouTube" className={styles.iconImage} />
                </a>
            </section>

        </div>
    );
};

export default WhoWeAre;
