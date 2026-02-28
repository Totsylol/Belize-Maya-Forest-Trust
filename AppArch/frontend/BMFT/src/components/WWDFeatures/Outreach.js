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
import OTschol from "../assets/OTschol.jpg"
import OTschol1 from "../assets/OTschol1.JPG"
import OTschol2 from "../assets/OTschol2.png"
import Otop from "../assets/Otop.jpg"
const Outreach = () => {
   
    const [currentImage1, setCurrentImage1] = useState(0);
    const [currentImage2, setCurrentImage2] = useState(0);
    const [currentImage3, setCurrentImage3] = useState(0);

    const images1 = [OTduo, OTteach, OTclass];
    const images2 = [OTclean, OTsign, OTteam];
    const images3 = [OTclean, OTsign, OTteam];

    const handlePrev = (setter, images) => {
        setter(prev => (prev === 0 ? images.length - 1 : prev - 1));
    };

    const handleNext = (setter, images) => {
        setter(prev => (prev + 1) % images.length);
    };

    return (
        <div className={styles.pageContainer}>
            <h1 className={styles.titleoverlay}>Evironmental Outreach</h1>
            <header className={styles.header}>
                <img src={Otop} alt="Header" />
            </header>
            <section className={styles.outreachSection}>
                <div className={styles.textSide}>
                    <h2>Environmental Education and Awareness Campaigns</h2>
                    <p>
                   In response to the widespread wildfires of 2024, BMFT launched a Fire Safety Campaign aimed at raising awareness 
                   about safe burning practices and preventing uncontrolled fires. The campaign includes informational booths at 
                   community events, school presentations, workshops, digital outreach, and the distribution of printed fire safety 
                   materials. This initiative remains ongoing across stakeholder communities, strengthening local knowledge and promoting 
                   responsible land management practices.

Environmental awareness presentations are also a key component of BMFT’s outreach efforts, engaging children and youth through school 
visits and educational events. These sessions highlight biodiversity within the Belize Maya Forest and showcase ongoing research initiatives. 
Scientists collaborating with BMFT actively share their work and findings with students, helping inspire the next generation of environmental 
stewards.

BMFT also participates in national conservation events that promote environmental awareness and wildlife protection. 
Jaguar Day highlights the importance of the jaguar as an apex species and its critical role in maintaining healthy forest ecosystems. 
BMFT also supports the Belize Bird Festival, contributing to bird conservation efforts while helping raise public awareness of Belize’s 
rich avian biodiversity.

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
                    <h2>Community Stewards Taking Action</h2>
                    <p> For many years, Yalbac Creek accumulated debris that obstructed the natural flow of water, affecting an important 
                        resource for the entire community. In recognition of Earth Day 2024, the Yalbac community, in collaboration with 
                        the Belize Defence Force Second Infantry Battalion and the Belize Maya Forest Trust (BMFT), mobilized volunteers to 
                        remove waste and debris from the creek, restoring its flow. To reinforce long-term stewardship, six no-litter and 
                        plastic-free signs were strategically installed throughout the community.

Students from Valley of Peace SDA Academy participated in a series of workshops exploring youth-led climate initiatives taking place around 
the world. Inspired by these discussions, the students organized a community cleanup campaign to promote environmental responsibility and 
raise awareness about the importance of maintaining a clean and healthy environment. They also enhanced public spaces by beautifying three 
community bus stops, incorporating climate action messages through art. The murals highlighted wildlife and forest beauty while promoting 
actions such as controlled burning, recycling, reforestation, and freshwater watershed protection.

Five primary schools took part in a mural initiative that encouraged children to express their perspectives on nature and wildlife within 
their communities. Working alongside local artists, students created unique murals showcasing birds and their habitats. These vibrant 
artworks now serve as lasting reminders of the importance of conserving natural resources and protecting the environment for future generations. 

                </p>
                </div>
            </section>
            <section className={styles.outreachSection}>
                <div className={styles.textSide}>
                    <h2>Educational Field Trips</h2>
                 <p>
                    The Belize Maya Forest and Gallon Jug partners welcome visitors to learn about conservation, biodiversity, and 
                    sustainable coffee production while experiencing the stunning scenery of the forest. These shared immersive 
                    experiences strengthen environmental awareness, inspire stewardship, and encourage participants to become active 
                    advocates for conservation within their communities. Currently, educational field trips are exclusively for educational 
                    purposes to stakeholder communities and direct partners. 
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

