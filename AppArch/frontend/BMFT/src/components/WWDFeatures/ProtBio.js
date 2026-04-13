import React, { useState } from 'react';
import styles from '../styles/ProtBio.module.css';
import PBtop from "../assets/PBtop.JPG";
import WWDPanels3 from './WWDPanels3';
import Wbird from "../assets/Wbird.JPG";
import Wshed from "../assets/Wshed.jpg";
import pools from "../assets/Cpools.jpg";
import archvisit from "../assets/Placeholder.jpg";

const Panel = ({ image, title, description }) => {
    const [flipped, setFlipped] = useState(false);
    return (
        <div
            className={`${styles.panel} ${flipped ? styles.flipped : ''}`}
            onClick={() => setFlipped(!flipped)}
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


const Modal = ({ src, alt, onClose }) => {
    return (
        <div className={styles.modalOverlay} onClick={onClose}>
            <div className={styles.modalContent} onClick={e => e.stopPropagation()}>
                <img src={src} alt={alt} className={styles.modalImage} />
                <button className={styles.modalClose} onClick={onClose}>&times;</button>
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

const ProtBio = () => {
    const [modalImage, setModalImage] = useState(null);

    const handleImageClick = (src, alt) => {
        setModalImage({ src, alt });
    };

    const closeModal = () => {
        setModalImage(null);
    };

    return (
        <div className={styles.PageContainer}>
            <h1 className={styles.titleoverlay}>Protecting Biodiversity</h1>
            <header className={styles.header}>
                <img src={PBtop} alt="Header" />
            </header>
            <section className={styles.introduction}>
                <div className={styles.introText}>
                    <h2>About the Program</h2>
                    <p>
                        The Protection Program safeguards the Belize Maya Forest (BMF) through a dedicated ranger team that conducts regular patrols, deters illegal activities, and strengthens wildfire prevention and response.
                        The BMF is a vital sanctuary for endangered and iconic species, including Belize's five wild cats, the spider monkey, white-lipped peccary, tapir, and keel-billed toucan. Beyond its rich biodiversity, the forest also holds deep cultural significance, including the historic Cara Blanca Pools. Through active protection and fire management, the team works to preserve both the ecological integrity and cultural heritage of this irreplaceable landscape.
                    </p>
                    <div style={{marginTop: '1.5rem', textAlign: 'center'}}>
                        <a
                            href="/Ourteam"
                            style={{
                                display: 'inline-block',
                                backgroundColor: '#52c742',
                                color: '#fff',
                                padding: '0.6rem 1.8rem',
                                borderRadius: '4px',
                                textDecoration: 'none',
                                fontSize: '1rem',
                                fontWeight: '600',
                                boxShadow: '0 4px 8px rgba(0,0,0,0.15)',
                            }}
                        >
                            Meet the Protection Team
                        </a>
                    </div>
                </div>
            </section>
            <section className={`${styles.section2} ${styles.animateRollIn}`}>
              <header className={styles.banner3}>Our focus</header>
              <WWDPanels3 />
            </section>

            <section className={styles.importanceSection}>
                <h2>Ecosystem Services and Cultural Heritage</h2>
                <div className={styles.panelsContainer}>
                    <Panel
                        image={Wbird}
                        title="Biodiversity"
                        description="The Belize Maya Forest is home to a remarkable diversity of wildlife, including the majestic jaguar, tapir, 19 species of bats, and over 100 species of birds, all of which contribute to global biodiversity and the health of vital ecosystems."
                    />
                    <Panel
                        image={Wshed}
                        title="Fresh Watersheds"
                        description="The BMF plays a vital role in watershed management, protecting the Cara Blanca Pools and ensuring water quality for surrounding communities and ecosystems that depend on these freshwater sources."
                    />
                    <Panel
                        image={pools}
                        title="Climate Regulation"
                        description="Protecting the BMF helps regulate the climate by storing large amounts of carbon, reducing greenhouse gas concentrations in the atmosphere. Its extensive forest cover moderates local temperatures and supports rainfall patterns."
                    />
                    <Panel
                        image={archvisit}
                        title="Cultural Heritage"
                        description="The BMF is rich in cultural heritage, shaped by ancient Maya civilizations, generations of chicleros, and a long history of logging, all of which have left a lasting legacy of Belizean history and cultural heritage."
                    />
                </div>
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

export default ProtBio;
