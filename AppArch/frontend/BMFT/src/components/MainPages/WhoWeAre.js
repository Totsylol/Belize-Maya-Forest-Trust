import React, { useState } from 'react';
import styles from '../styles/whoweare.module.css'; 
import WWAtop from "../assets/WWAtop.jpg";
import WWAposter from "../assets/WWAposter.jpg";
import WWAmid from "../assets/WWAmid.jpg";
import WWArangers from "../assets/WWArangers.jpg"; 
import WWAboard from "../assets/WWAboard.jpg";
import facebookicon from "../assets/facebookicon.webp";
import youtubeicon from "../assets/youtubeicon.png";
import gmailicon2 from "../assets/gmailicon2.jpg";
import Wbird from "../assets/Wbird.JPG";
import Wshed from "../assets/Wshed.jpg";
import Wcul from "../assets/Wcul.JPG";
import Wshed2 from "../assets/Wshed2.jpg";
import Placeholder from "../assets/Placeholder.jpg"
import WWDInfo from '../WWDFeatures/WWDInfo';
import Ntop from "../assets/Ntop.jpg"

const Panel = ({ image, title, description }) => {
    const [flipped, setFlipped] = useState(false);

    const handleClick = () => {
        setFlipped(!flipped);
    };

    return (
        <div
            className={`${styles.panel} ${flipped ? styles.flipped : ''}`}
            onClick={handleClick}
        >
            <div className={styles.panelFront}>
                <div className={styles.panelImageWrapper}>
                    <img src={image} alt={title} className={styles.panelImage} />
                </div>
                <div className={styles.panelTitle}>
                    <h3>{title}</h3>
                </div>
            </div>
            <div className={styles.panelBack}>
                <p>{description}</p>
            </div>
        </div>
    );
};


const WhoWeAre = () => {
    return (
        <div className={styles.pageContainer}>
            <header className={styles.header}>
                <img src={WWAtop} alt="Header" />
                <div className={styles.titleoverlay}>
                    <h1>Belize Maya Forest Trust</h1>
                </div>
            </header>
            <section className={styles.missionVisionSection}>
                <div className={styles.missionPanel}>
                    <h2>BMFT's Mission</h2>
                    <p>
                        Demonstrating a globally recognized, locally relevant model of healthy, biodiverse forest protected for and by all Belizeans.
                    </p>
                </div>
                </section>
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
                <img src={WWAmid} alt="Meet the Team" />
                <div className={styles.titleoverlay2}>
                    <h1>Meet the Team</h1>
                    <a href="/ourpeople" className={styles.seeMoreButton}>See More</a>
                </div>
            </section>
            <section className={styles.missionVisionSection}>
                <div className={styles.visionPanel}>
                    <h2>BMFT's Vision</h2>
                    <p>
                        A world where the Belize Maya Forest serves as a model for sustainable conservation, ensuring the health and well-being of our planet and its inhabitants.
                    </p>
                </div>
            </section>
            <section className={styles.importanceSection}>
                <h2>Ecosystem Services</h2>
                <div className={styles.panelsContainer}>
                    <Panel 
                        image={Wbird} 
                        title="Biodiversity" 
                        description="The Belize Maya Forest is home to a diverse range of species, contributing to global biodiversity and the health of various ecosystems."
                    />
                    <Panel 
                        image={Wshed2} 
                        title="Watersheds" 
                        description="The forest plays a vital role in watershed management, influencing water quality and availability for surrounding communities."
                    />
                    <Panel 
                        image={Placeholder} 
                        title="Climate Regulation" 
                        description="About climate regulation."
                    />
                    <Panel 
                        image={Wcul} 
                        title="Cultural Heritage" 
                        description="The Belize Maya Forest is rich in cultural heritage, with significant archaeological sites and traditional practices."
                    />
                </div>
            </section>
            <section className={styles.aboutPanel}>
        <p className={styles.aboutText}>
        The Belize Maya Forest (BMF), previously known as Yalbac and Laguna Seca, were owned and managed by a foreign logging company. The properties were bought in December 2020 for protection by the Belize Maya Forest Trust (BMFT) through an effort led by TNC, and many other generous organizations and individual supporters.          </p>
      </section>

            <section className={styles.socials}>
                <a href="mailto:info@bmft.org.bz" className={styles.socialIcon} title="Email">
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
