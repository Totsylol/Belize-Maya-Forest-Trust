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
                    The Belize Maya Forest represents a vital and ecologically rich protected area that serves as a sanctuary for numerous endangered species, including the spider monkey and the white-lipped peccary. This forest is also inhabited by several emblematic species, notably the five wild cats of Belize: the jaguar, puma, ocelot, margay, and jaguarundi. Additionally, it is home to the national animal, the tapir, and the national bird, the keel-billed toucan, among a plethora of other wildlife. Beyond its biological diversity, the Belize Maya Forest holds significant cultural importance, particularly through the preservation of the Secret Cara Blanca Pools, which are integral to the history of the Yucatec Maya, and logging years.  
                    
The conservation of the Belize Maya Forest is of paramount importance, prompting the establishment of a dedicated protection team that conducts regular patrols to safeguard the area's natural resources and deter illegal activities.  

In recent years, the occurrence of wildfires has posed a significant threat to this ecosystem, leading the ranger team to enhance their knowledge and skills in fire suppression and prevention strategies. Through training and experience, they have developed effective mechanisms to combat wildfires, ensuring the continued protection of this invaluable forest and its diverse inhabitants. The ongoing efforts of the protection team are crucial in maintaining the ecological integrity and cultural heritage of the Belize Maya Forest. 
                    </p>
                </div>
            </section>
            <section className={`${styles.section2} ${styles.animateRollIn}`}>
        <header className={styles.banner3}>Join the Journey</header>
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
