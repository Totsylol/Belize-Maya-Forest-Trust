import React, { useState } from 'react';
import styles from '../styles/ProtBio.module.css';
import PBtop from "../assets/PBtop.JPG";
import WWDPanels3 from './WWDPanels3';


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
The BMF is a vital sanctuary for endangered and iconic species, including Belize’s five wild cats, the spider monkey, white-lipped peccary, tapir, and keel-billed toucan. Beyond its rich biodiversity, the forest also holds deep cultural significance, including the historic Cara Blanca Pools. Through active protection and fire management, the team works to preserve both the ecological integrity and cultural heritage of this irreplaceable landscape. 
                    </p>
                </div>
            </section>
            <section className={`${styles.section2} ${styles.animateRollIn}`}>
        <header className={styles.banner3}>Our focus</header>
        <WWDPanels3 />
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
