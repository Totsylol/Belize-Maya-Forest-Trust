import React, { useState } from 'react';
import styles from '../styles/ProtBio.module.css';
import PBfireteam from '../assets/PBfireteam.jpg';
import PBCheck from "../assets/PBCheck.jpg";
import PBfire from "../assets/PBfire.jpg";
import Placeholder from "../assets/Placeholder.jpg";
import PBtop from "../assets/PBtop.JPG";
import PBbird from  "../assets/PBbird.JPG";
import PBgator from "../assets/PBgator.jpg";
import OTteam2 from "../assets/OTteam2.JPG";
import OTplan from "../assets/OTplan.JPG";
import OTplan2 from "../assets/OTplan2.JPG";

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
            <section className={styles.Head2}>
                <header className={styles.header2}>
                    <img src={PBgator} alt="Fire Prevention" />
                    <h1 className={styles.titleoverlay2}>Yalbac Water Quality</h1>
                </header>
            </section>
            <section className={styles.descriptionSection}>
                <h2 className={styles.sectionTitle}>Project Goals</h2>
                <p className={styles.descriptionText}>
                The Black Creek, which serves as a tributary to the Belize River and traverses numerous agricultural lands, is currently facing significant challenges due to the adverse effects of chemical and soil runoff. This situation has not only jeopardized the integrity of the freshwater ecosystem but has also adversely affected the local residents of Yalbac community. In partnership with the University of Leeds, Dr. Rachael Carrie organized a series of community workshops aimed at identifying the impacts, challenges, and potential solutions for enhancing the health of the creek. Following these workshops, she undertook the collection of water samples from both the creek and adjacent freshwater sources to perform water quality assessments, thereby gaining insights into effective strategies for improving the creek's condition. The initiative underscored the critical importance of maintaining clean water for the community and sought to address the health and livelihood issues stemming from the extensive application of pesticides and other agricultural chemicals. 
                </p>
                <p className={styles.des}>
                This project is ongoing.  
                </p>
            </section>
            <section className={styles.imageGallery}>
                <div className={styles.images}>
                    <img src={OTplan} alt="Planning Water Qaulity" className={styles.image} />
                    <img src={OTteam2} alt="The Team" className={styles.image} />
                    <img src={OTplan2} alt="Planning" className={styles.image} />
                </div>
            </section>
            <section className={styles.Head2}>
                <header className={styles.header2}>
                    <img src={PBbird} alt="Fire Prevention" />
                    <h1 className={styles.titleoverlay2}>Fire Prevention</h1>
                </header>
            </section>
            <section className={styles.descriptionSection}>
                <h2 className={styles.sectionTitle}>Project Goals</h2>
                <p className={styles.descriptionText}>
                    Effective fire prevention is crucial for protecting the diverse ecosystems within the Belize Maya Forest. By implementing proactive measures and strategies, such as controlled burns and firebreaks, we can reduce the risk of devastating wildfires. Education and community involvement also play a vital role in ensuring that the local population understands and supports fire prevention efforts. Continued research and innovation in fire management techniques are essential for adapting to changing environmental conditions and safeguarding our natural resources.
                </p>
            </section>
            <section className={styles.imageGallery}>
                <div className={styles.images}>
                    <img src={PBfireteam} alt="Habitat Restoration" className={styles.image} />
                    <img src={PBCheck} alt="Endangered Species" className={styles.image} />
                    <img src={PBfire} alt="Community Education" className={styles.image} />
                </div>
            </section>
            
            <section className={styles.videoSection}>
                <h2>LET FIRE SAFETY START WITH YOU!</h2>
                <div className={styles.videoContainer}>
                    <iframe
                        src="https://www.youtube.com/embed/8kR5UoYsj0o?controls=0&rel=0&modestbranding=1"
                        title="Learn More About Biodiversity Conservation"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className={styles.video}
                    ></iframe>
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
