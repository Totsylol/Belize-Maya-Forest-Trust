import React, { useState, useEffect } from 'react';
import styles from '../styles/whoweare.module.css'; 
import WWAtop from "../assets/WWAtop.jpg";
import BMFPoster from "../assets/BMFPoster.png";
import Staff26 from "../assets/Topstaff.JPG";
import pools from "../assets/Cpools.jpg";
import archvisit from "../assets/Placeholder.jpg";
import WWAposter from "../assets/WWAposter.jpg";
import WWAmid from "../assets/WWAmid.jpg";
import WWArangers from "../assets/WWArangers.jpg"; 
import facebookicon from "../assets/facebookicon.webp";
import youtubeicon from "../assets/youtubeicon.png";
import gmailicon2 from "../assets/gmailicon2.jpg";
import Wbird from "../assets/Wbird.JPG";
import Wshed from "../assets/Wshed.jpg";
import Wcul from "../assets/Wcul.JPG";
import Wshed2 from "../assets/Wshed2.jpg";
import Placeholder from "../assets/Placeholder.jpg";
import WWDInfo from '../WWDFeatures/WWDInfo';
import Ntop from "../assets/Ntop.jpg";

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
    useEffect(() => {
        const hash = window.location.hash;
        if (hash) {
            const el = document.querySelector(hash);
            if (el) {
                setTimeout(() => {
                    el.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }, 100);
            }
        }
    }, []);

    return (
        <div className={styles.pageContainer}>
            <header className={styles.header}>
                <img src={WWAtop} alt="Header" />
                <div className={styles.titleoverlay}>
                    <h1>Belize Maya Forest Trust</h1>
                </div>
            </header>

            <section id="story" className={styles.infoSection}>
                <div className={styles.infoContent}>
                    <div className={styles.infoContainer}>
                        <h2>Our Story</h2>
                        <div className={styles.storyUnderline}></div>
                        <p>
                            Belize is situated within the heart of the Maya region, a land steeped in rich cultural history, that we refer to as The Maya World. The Belize Maya Forest (BMF) carries an illustrious history marked by the activities of chicleros, loggers, and the Yucatec Maya community. Following Belize's independence from colonial rule, the land transitioned into the hands of a foreign timber company, which operated under the names Yalbac Ranch and Laguna Seca.
                        </p>
                        <p>
                            In December 2020, supporters conserved 236,000 acres of forest that is now recognized as the last extensive and contiguous lowland broadleaf forest in Belize.
                        </p>
                        <p>
                            In August 2021, the Belize Maya Forest Trust (BMFT) was recognized as a Non-Governmental Organization (NGO) under Belize's NGO Act. The BMFT serves as a dedicated trustee, steward, and manager tasked with the vital role of implementing protective and sustainable conservation measures within the reserve and its surrounding areas.
                        </p>
                        <p>
                            Furthermore, in September 2024, an additional 5,500 acres of adjacent forest known as Sierra de Agua were acquired from a private owner. Today, the BMF now encompasses a total of 241,000 acres, ten (10) percent of Belize's total land area, for all Belizeans.
                        </p>
                    </div>
                    <div className={styles.infoImage}>
                        <img src={BMFPoster} alt="BMFPoster" />
                    </div>
                </div>
            </section>

            <section id="mission" className={styles.quoteSection}>
                <div className={styles.quoteItem}>
                    <div className={styles.quoteTag}>Our Mission</div>
                    <p className={styles.quoteText}>"To demonstrate a locally relevant, globally recognized model of healthy, biodiverse forest protected by and for all Belizeans."</p>
                    <div className={styles.quoteBar}></div>
                </div>
                <div className={styles.quoteItem}>
                    <div className={styles.quoteTag}>Our Vision</div>
                    <p className={styles.quoteText}>"To be a global benchmark for effective and lasting conservation."</p>
                    <div className={styles.quoteBar}></div>
                </div>
                <div className={styles.quoteItem}>
                    <div className={styles.quoteTag}>Our Values</div>
                    <p className={styles.quoteText}>"Respect for people, communities, and diversity, transparency and accountability, collaboration, and environmental stewardship."</p>
                    <div className={styles.quoteBar}></div>
                </div>
            </section>

            <section className={styles.header2}>
                <img src={Staff26} alt="Meet the Team" />
                <div className={styles.titleoverlay2}>
                    <h1>Meet the BMFT Team</h1>
                    <a href="/ourpeople" className={styles.seeMoreButton}>See More</a>
                </div>
            </section>
        </div>
    );
};

export default WhoWeAre;
