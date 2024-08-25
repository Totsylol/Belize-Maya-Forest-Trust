import React, { useState } from 'react';
import styles from '../styles/Outreach.module.css';
import OTclean from "../assets/OTclean.JPG"
import OTsign from "../assets/OTsign.JPG"
import OTteam from "../assets/OTteam.JPG"
import OTplan from "../assets/OTplan.JPG"
import OTteam2 from "../assets/OTteam2.JPG"
import OTplan2 from "../assets/OTplan2.JPG"
import OTduo from "../assets/OTduo.jpg"
import OTteach from "../assets/OTteach.jpg"
import OTclass from "../assets/OTclass.JPG"

const Outreach = () => {
   
    const [currentImage1, setCurrentImage1] = useState(0);
    const [currentImage2, setCurrentImage2] = useState(0);
    const [currentImage3, setCurrentImage3] = useState(0);

    const images1 = [OTclean, OTsign, OTteam];
    const images2 = [OTplan, OTteam2, OTplan2];
    const images3 = [OTduo, OTteach, OTclass];

    const handlePrev = (setter, images) => {
        setter(prev => (prev === 0 ? images.length - 1 : prev - 1));
    };

    const handleNext = (setter, images) => {
        setter(prev => (prev + 1) % images.length);
    };

    return (
        <div className={styles.pageContainer}>
            <header className={styles.header}>
            <header className={styles.banner2}>Community Outreach</header>
               
            </header>
            <section className={styles.outreachSection}>
                <div className={styles.textSide}>
                    <h2>Yalbac Creek Cleaning Earthday</h2>
                    <p>
                    On Earth Day, join us for the Yalbac Creek Cleaning event, a community-driven initiative dedicated to preserving and enhancing the natural beauty of Yalbac Creek. This event invites volunteers to come together for a day of cleaning and revitalizing the creek's banks, removing litter, and restoring its pristine environment. By participating, you'll contribute to the health of local ecosystems, improve water quality, and promote environmental stewardship. This is a fantastic opportunity to engage with fellow nature enthusiasts, make a tangible impact on our local waterways, and celebrate Earth Day through meaningful action.
                    </p>
                </div>
                <div className={styles.imageSide}>
                    <div className={styles.carousel}>
                        <button onClick={() => handlePrev(setCurrentImage1, images1)} className={styles.carouselButton}>‹</button>
                        <img src={images1[currentImage1]} alt="Community Event" className={`${styles.image} ${styles.imageEntering}`} />
                        <button onClick={() => handleNext(setCurrentImage1, images1)} className={styles.carouselButton}>›</button>
                    </div>
                </div>
            </section>
            <section className={styles.outreachSection}>
                <div className={styles.imageSide}>
                    <div className={styles.carousel}>
                        <button onClick={() => handlePrev(setCurrentImage2, images2)} className={styles.carouselButton}>‹</button>
                        <img src={images2[currentImage2]} alt="Educational Workshop" className={`${styles.image} ${styles.imageEntering}`} />
                        <button onClick={() => handleNext(setCurrentImage2, images2)} className={styles.carouselButton}>›</button>
                    </div>
                </div>
                <div className={styles.textSide}>
                    <h2>Yalbac Water Qaulity Project</h2>
                    <p>
                    The Yalbac Water Quality Project is a vital initiative focused on enhancing and maintaining the health of Yalbac Creek’s ecosystem. This project aims to monitor and improve the water quality through comprehensive testing, pollution control measures, and habitat restoration efforts. By identifying and addressing sources of contamination, implementing sustainable practices, and engaging with the local community, the project seeks to ensure clean, safe water for both wildlife and residents. Through ongoing research and active management, the Yalbac Water Quality Project is committed to fostering a thriving and resilient aquatic environment.
                    </p>
                </div>
            </section>
            <section className={styles.outreachSection}>
                <div className={styles.textSide}>
                    <h2>Outreach Events</h2>
                    <p>
                    Outreach events are a cornerstone of our wildlife organization's mission, designed to engage and educate the community about the importance of wildlife conservation. These events provide opportunities for people of all ages to learn about local ecosystems, endangered species, and sustainable practices through interactive activities, workshops, and informative sessions. By fostering a deeper understanding and appreciation of wildlife, outreach events inspire positive action and support for conservation efforts. They also create a platform for building strong community connections, encouraging collective responsibility, and driving meaningful change in the protection and preservation of our natural world.
                    </p>
                </div>
                <div className={styles.imageSide}>
                    <div className={styles.carousel}>
                        <button onClick={() => handlePrev(setCurrentImage3, images3)} className={styles.carouselButton}>‹</button>
                        <img src={images3[currentImage3]} alt="Volunteer Activities" className={`${styles.image} ${styles.imageEntering}`} />
                        <button onClick={() => handleNext(setCurrentImage3, images3)} className={styles.carouselButton}>›</button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Outreach;

