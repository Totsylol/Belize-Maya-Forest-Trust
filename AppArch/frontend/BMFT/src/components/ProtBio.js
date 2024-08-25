import React from 'react';
import styles from './styles/ProtBio.module.css';
import PBfireteam from './assets/PBfireteam.jpg';
import PBCheck from "./assets/PBCheck.jpg"
import PBfire from "./assets/PBfire.jpg"

const ProtBio = () => {
        return (
            <div className={styles.pageContainer}>
                <header className={styles.header}>
                <header className={styles.banner2}>Protecting Biodiversity</header>
                   
                </header>
                <section className={styles.introduction}>
                    <div className={styles.introText}>
                        <h2>About the Program</h2>
                        <p>
                        Our mission is to conserve the diverse range of life on Earth. 
            We work to protect habitats, support endangered species, and 
            promote sustainable practices to ensure that future generations 
            can enjoy a thriving natural world.
                        </p>
                    </div>
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
            </div>
        );
    };
    

export default ProtBio;
