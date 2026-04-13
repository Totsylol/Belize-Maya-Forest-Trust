import React, { useState } from 'react';
import styles from '../styles/patrols.module.css';
import Patrolcir from "./Patrolcir";
import LivePatrolTracker from '../GeneralFeatures/LivePatrolTracker';
import Pat1 from "../assets/Pat1.jpg";
import Pat3 from "../assets/Pat3.jpg";
import Pat4 from "../assets/Pat4.jpg";
import Pat5 from "../assets/Pat5.jpg";

const ImageModal = ({ isOpen, onClose, imageSrc }) => {
    if (!isOpen) return null;

    return (
        <div className={styles.modalOverlay} onClick={onClose}>
            <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
                <span className={styles.close} onClick={onClose}>&times;</span>
                <img src={imageSrc} alt="Modal" className={styles.modalImage} />
            </div>
        </div>
    );
};

const Patrols = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentImage, setCurrentImage] = useState('');

    const openModal = (imageSrc) => {
        setCurrentImage(imageSrc);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setCurrentImage('');
    };

    return (
        <div className={styles.pageContainer}>
            <h1 className={styles.titleOverlay}>Patrols</h1>
            <header className={styles.header}>
                <div className={styles.greenBackground}></div> {/* Green background div */}
            </header>
            <div className={styles.panelContainer}>
                <LivePatrolTracker />
                <div className={`${styles.panel} ${styles.animateRollIn}`}>
                    <div className={styles.textContainer}>
                        <h2 className={styles.introText}>What Are Patrols?</h2>
                        <p>
                            The ranger team conducts routine foot patrols for the protection of the BMF's natural resources and the prevention and detection of unlawful activities. These patrols involve traversing extensive distances on foot through the jungle regardless of weather and conditions. The team is equipped with the necessary tools and provides comprehensive trainings. BMF rangers also engage in data collection utilizing the Spatial Monitoring and Reporting Tool (SMART) alongside advanced technologies such as drones and satellite imagery.
                        </p>
                    </div>
                    <img src={Pat1} alt="Ranger Team" className={styles.image} />
                </div>

                <section>
                    <Patrolcir />
                </section>

                <div className={styles.sideBySideContainer}>
                    <div className={`${styles.panel} ${styles.animateRollIn}`}>
                        <div className={styles.textContainer}>
                            <h2 className={styles.introText}>Foot Patrols</h2>
                            <p>
                                Patrols allow rangers to monitor the forest on the ground, providing real-time insights into ecological conditions, wildlife presence, and potential threats such as illegal logging, poaching, or unauthorized land use. Unlike remote surveillance or occasional aerial monitoring, foot patrols give rangers access to remote and sensitive areas that are otherwise difficult to reach, ensuring no part of the forest is left unmonitored. These observations provide critical data that informs conservation strategies, ensuring protection efforts are adaptive, targeted, and effective.
                            </p>
                        </div>
                    </div>

                    <div className={`${styles.panel} ${styles.animateRollIn}`}>
                        <div className={styles.textContainer}>
                            <h2 className={styles.introText}>Capacity Building</h2>
                            <p>
                                Rangers receive comprehensive training in wilderness survival, first aid, and navigation, while also gaining hands-on experience with innovative technologies used for biodiversity monitoring and conservation. Beyond skills development, rangers have the incredible opportunity to witness Belize's rich wildlife up close, spotting e jaguars, tapirs, and many bird species, while immersing themselves in the breathtaking landscapes of the Belize Maya Forest.
                            </p>
                        </div>
                    </div>
                </div>

                <div className={styles.imageGallery}>
                    <img src={Pat3} alt="Patrol 1" onClick={() => openModal(Pat3)} className={styles.galleryImage} />
                    <img src={Pat4} alt="Patrol 2" onClick={() => openModal(Pat4)} className={styles.galleryImage} />
                    <img src={Pat5} alt="Patrol 3" onClick={() => openModal(Pat5)} className={styles.galleryImage} />
                </div>

                <ImageModal isOpen={isModalOpen} onClose={closeModal} imageSrc={currentImage} />
            </div>
        </div>
    );
};

export default Patrols;
