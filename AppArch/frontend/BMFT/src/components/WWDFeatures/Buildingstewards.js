import React, { useState } from 'react';
import styles from '../styles/buildingstewards.module.css';
import S2 from "../assets/S2.jpg";
import StewardSum from "../assets/StewardSum.jpg";
import MapSC from "../assets/MapSC.jpg";
import WWDPanel2 from './WWDPanel2';

const Modal = ({ src, alt, onClose }) => {
    return (
        <div className={styles.modalOverlay} onClick={onClose}>
            <div className={styles.modalContent} onClick={e => e.stopPropagation()}>
                <img src={src} alt={alt} className={styles.modalImage} />
                <button className={styles.modalClose} onClick={onClose}>×</button>
            </div>
        </div>
    );
};

const TopicSection = ({ title, imgSrc, children, reverse, onImageClick }) => (
    <section className={`${styles.topicSection} ${reverse ? styles.reverse : ''}`}>
        <div className={styles.topicText}>
            <h2>{title}</h2>
            <p>{children}</p>
        </div>
        <img 
            src={imgSrc} 
            alt={title} 
            className={styles.topicImage} 
            onClick={() => onImageClick(imgSrc, title)} 
        />
    </section>
);

const Buildingstewards = () => {
    const [modalImage, setModalImage] = useState(null);

    const handleImageClick = (src, alt) => {
        setModalImage({ src, alt });
    };

    const closeModal = () => {
        setModalImage(null);
    };

    return (
        <div className={styles.PageContainer}>
            <h1 className={styles.titleoverlay}>Building Stewardship</h1>
            <header className={styles.header}>
                <img src={StewardSum} alt="Header" />
            </header>
            <section className={styles.introduction}>
                <div className={styles.introText}>
                    <h2>About the stakeholder communities</h2>
                    <p> The Belize Maya Forest Trust (BMFT) works closely with ten (10) stakeholder communities neighboring the reserve. These communities benefit from the protected area through vital ecosystem services, including watershed protection, clean air, biodiversity conservation, and climate regulation. The map below illustrates the location of each stakeholder community within the broader landscape.
<p> </p>In northern Belize, BMFT collaborates with Sylvester, Blue Creek, and San Felipe. These communities benefit significantly from the Rio Hondo River, whose water cycle is supported by the healthy forests of the Belize Maya Forest.
<p> </p>In western Belize, BMFT works with Yalbac, Los Tambos, Selena, La Gracia, Buena Vista, and Valley of Peace. These villages rely heavily on the Belize River. The forested landscape of the Belize Maya Forest helps maintain the health of multiple tributaries that feed into the river, strengthening the overall watershed.
<p> </p>The stakeholder communities are primarily Hispanic, originally established by Central American migrants and Mestizo families. Spanish Lookout and Blue Creek are among the largest Mennonite communities within the Belize Maya Forest landscape. Agriculture and agribusiness are the main sources of income and livelihoods, making healthy natural resources, such as fertile soils and clean, abundant water indispensable.
However, climate change, ecosystem degradation, and the expansion of commercialized agricultural practices have disrupted natural cycles, resulting in economic losses and production challenges for farmers.
<p> </p>Across the landscape, there is a shared recognition of the need for sustainable solutions. Through regenerative agriculture, community stewardship, and environmental outreach, BMFT partners with these communities to restore ecosystems, enhance climate resilience, and safeguard the natural resources that sustain livelihoods and well-being for generations to come.   

<img src={MapSC} alt="Map of Stakeholder Communities" className={styles.mapImage} onClick={() => handleImageClick(MapSC, "Map of Stakeholder Communities")} />

                    </p>
                </div>
            </section>
            <section className={`${styles.section2} ${styles.animateRollIn}`}>
        <header className={styles.banner2}>Community Stewards Program</header>
        <WWDPanel2 />
      </section>

           
            {modalImage && (
                <Modal
                    src={modalImage.src}
                    alt={modalImage.alt}
                    onClose={closeModal}
                />
            )}
        </div>
    );
};

export default Buildingstewards;
