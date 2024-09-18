import React, { useState } from 'react';
import styles from '../styles/buildingstewards.module.css';
import S2 from "../assets/S2.jpg";
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
                <img src={S2} alt="Header" />
            </header>
            <section className={styles.introduction}>
                <div className={styles.introText}>
                    <h2>About the Program</h2>
                    <p>
                    The Belize Maya Forest Trust works with nine stakeholder communities that directly benefit from the protected area through watershed services, clean air, biodiversity, and other ecosystem services. The following map shows the location of each stakeholder community in the landscape. Sylvester village within the Gallon Jug Estate is surrounded by BMF and is a direct neighbour. The northern communities that directly and largely benefit from the BMF because it comprises a major part of their watershed, the Rio Hondo, are Blue Creek and San Felipe. Blue Creek is the second largest Mennonite community in the landscape and San Felipe is a primarily Mestizo community. The western communities that directly benefit from portions of the Belize River watershed that BMF protects are Yalbac, Los Tambos, La Gracia, Buena Vista, and Valley of Peace, which are primarily Hispanic communities first established by Central American migrants, and Spanish Lookout, the largest Mennonite community in the landscape and BMF’s direct neighbour.   

The stakeholder communities’ main source of income and livelihoods is agriculture and agribusiness, for which healthy natural resources such as fertile soils and clean and abundant water are indispensable. Due to climate change and ecosystem degradation, agricultural practices and natural cycles have been altered causing farmers economic losses and production challenges. In key informant surveys, community members across the landscape expressed concern about long and intense dry seasons, and few recognized capacity-building opportunities for women and youth. Elders in the communities indicated that they would like children to experience the forest and wildlife like it was once in the landscape, to give the younger generation pride and appreciation for their community and nature. The BMFT stakeholder communities also recognized the importance of nature and the sustainable use of resources.   
                    </p>
                </div>
            </section>
            <section className={`${styles.section2} ${styles.animateRollIn}`}>
        <header className={styles.banner2}>Join the Journey</header>
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
