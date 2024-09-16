import React, { useState } from 'react';
import styles from '../styles/fireman.module.css';
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

const Fireman = () => {
    const [modalImage, setModalImage] = useState(null);

    const handleImageClick = (src, alt) => {
        setModalImage({ src, alt });
    };

    const closeModal = () => {
        setModalImage(null);
    };

    return (
        <div className={styles.PageContainer}>
         
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

export default Fireman;
