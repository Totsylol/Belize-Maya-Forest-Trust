import React, { useState } from 'react';
import styles from '../styles/fireman.module.css';
import PBfireteam from '../assets/PBfireteam.jpg';
import Cfire from '../assets/Cfire.jpg';
import PBCheck from "../assets/PBCheck.jpg";
import PBfire from "../assets/PBfire.jpg";

const Modal = ({ src, alt, onClose }) => {
    return (
        <div className={styles.modalOverlay} onClick={onClose}>
            <div className={styles.modalContent} onClick={e => e.stopPropagation()}>
                <img loading="lazy" src={src} alt={alt} className={styles.modalImage} />
                <button className={styles.modalClose} onClick={onClose}>×</button>
            </div>
        </div>
    );
};

const Fireman = () => {
    const [modalImage, setModalImage] = useState(null);

    const closeModal = () => {
        setModalImage(null);
    };

    return (
        <div className={styles.PageContainer}>
         
            <section className={styles.Head2}>
                <header className={styles.header2}>
                    <img loading="lazy" src={PBfireteam} alt="Fire Prevention" />
                    <h1 className={styles.titleoverlay2}>Fire Safety</h1>
                </header>
            </section>
            <section className={styles.descriptionSection}>
                <h2 className={styles.sectionTitle}>Forest Fire Prevention</h2>
                <p className={styles.descriptionText}>
                    Wildfires are the greatest threat to the Belize Maya Forest (BMF). To address this, the ranger team has received specialized training in fire suppression and uses strategies like controlled burns and firebreaks to reduce wildfire risk. 
Additionally, a Fire Safety Awareness Campaign was launched that promotes safe burning practices, fire safety training, strengthens fire prevention, and build awareness within stakeholder communities about the importance of protecting the forest. By combining proactive management, community engagement, and ongoing innovation, the campaign helps safeguard the BMF's rich ecosystems and biodiversity.
                </p>
            </section>
            <section className={styles.imageGallery}>
                <div className={styles.images}>
                    <img loading="lazy" src={PBfireteam} alt="Habitat Restoration" className={styles.image} />
                    <img loading="lazy" src={PBCheck} alt="Endangered Species" className={styles.image} />
                    <img loading="lazy" src={PBfire} alt="Community Education" className={styles.image} />
                </div>
            </section>
            
            <section className={styles.videoSection}>
                <h2>LET FIRE SAFETY START WITH YOU!</h2>
                <div style={{maxWidth: '600px', margin: '1.5rem auto', textAlign: 'center'}}>
                    <img loading="lazy"
                        src={Cfire}
                        alt="Fire Safety Poster"
                        style={{width: '100%', borderRadius: '8px', boxShadow: '0 4px 12px rgba(0,0,0,0.2)'}}
                    />
                    <p style={{marginTop: '1rem', fontSize: '1rem', color: '#444', lineHeight: '1.6'}}>
                        Help protect the Belize Maya Forest by practicing safe burning. Always clear a firebreak before burning, never burn on windy days, and ensure fires are fully extinguished before leaving. Report any uncontrolled fires immediately. Fire safety starts with you!
                    </p>
                </div>
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
