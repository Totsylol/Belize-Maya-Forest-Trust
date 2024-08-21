import React from 'react';
import styles from './styles/AgroProj.module.css';
import APField from './assets/APField.jpg'; 
import APpeople from './assets/APpeople.jpg';
import APgreen from './assets/APgreen.jpg';
import WWDPanel from './WWDPanel';

const AgroProj = () => {
    return (
        <div className={styles.pageContainer}>
            <header className={styles.header}>
            <header className={styles.banner2}>Regenerative Agriculture Program</header>
               
            </header>
            <section className={styles.introduction}>
                <div className={styles.introText}>
                    <h2>About the Program</h2>
                    <p>
                        Our Regenerative Agriculture Program focuses on sustainable farming practices that restore soil health, enhance biodiversity, and improve ecosystem resilience. By integrating techniques such as cover cropping, reduced tillage, and holistic grazing, we aim to transform agricultural landscapes and contribute to environmental sustainability.
                    </p>
                </div>
            </section>
            <section className={styles.imageGallery}>
                <div className={styles.images}>
                    <img src={APField} alt="Field showcasing regenerative agriculture practices" className={styles.image} />
                    <img src={APpeople} alt="Farmers engaged in sustainable farming" className={styles.image} />
                    <img src={APgreen} alt="Close-up of healthy, green soil" className={styles.image} />
                </div>
            </section>
            <section className={styles.videoSection}>
                <h2>Empowering Women in Conservation</h2>
                <div className={styles.videoContainer}>
                    <iframe
                        src="https://www.youtube.com/embed/RmMZr0urvOs"
                        title="Regenerative Agriculture Overview"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className={styles.video}
                    ></iframe>
                </div>
            </section>
        </div>
    );
};

export default AgroProj;
