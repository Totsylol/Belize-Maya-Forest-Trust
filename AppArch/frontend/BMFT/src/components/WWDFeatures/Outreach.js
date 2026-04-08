import React, { useState, useEffect } from 'react';
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

const AutoCarousel = ({ images }) => {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent(prev => (prev + 1) % images.length);
        }, 3500);
        return () => clearInterval(timer);
    }, [images.length]);

    const handlePrev = () => setCurrent(prev => (prev === 0 ? images.length - 1 : prev - 1));
    const handleNext = () => setCurrent(prev => (prev + 1) % images.length);

    return (
        <div className={styles.carousel}>
            <button onClick={handlePrev} className={styles.carouselButton}>‹</button>
            <img src={images[current]} alt="Outreach" className={`${styles.image} ${styles.imageEntering}`} />
            <button onClick={handleNext} className={styles.carouselButton}>›</button>
        </div>
    );
};

const Outreach = () => {
    const images1 = [OTduo, OTteach, OTclass, OTschol];
    const images2 = [OTclean, OTsign, OTteam, OTplan2];
    const images3 = [OTschol1, OTschol2, OTplan, OTteam2];

    return (
        <div className={styles.pageContainer}>
            <h1 className={styles.titleoverlay}>Environmental Outreach</h1>
            <header className={styles.header}>
                <img src={Otop} alt="Header" />
            </header>

            <section className={styles.introSection}>
                <h2>About the Program</h2>
                <p>
                    Environmental outreach engages ten stakeholder communities through a variety of initiatives, including community clean-up activities, Fire Safety campaign educational field trips, and awareness events that promote environmental stewardship. Through these activities, the Belize Maya Forest (BMF) fosters a deeper understanding of environmental issues, strengthens community connections to nature, and encourages collective action toward sustainable and responsible practices.
                </p>
            </section>

            <section className={styles.outreachSection}>
                <div className={styles.textSide}>
                    <h2>Environmental Education and Awareness Campaigns</h2>
                    <p>
                        In response to the widespread wildfires of 2024, BMFT launched a Fire Safety Campaign aimed at raising awareness about safe burning practices and preventing uncontrolled fires. The campaign includes informational booths at community events, school presentations, workshops, digital outreach, and the distribution of printed fire safety materials. This initiative remains ongoing across stakeholder communities, strengthening local knowledge and promoting responsible land management practices.
                    </p>
                    <p>
                        Environmental awareness presentations are also a key component of BMFT's outreach efforts, engaging children and youth through school visits and educational events. Scientists collaborating with BMFT actively share their work and findings with students, helping inspire the next generation of environmental stewards.
                    </p>
                    <p>
                        BMFT also participates in national conservation events including Jaguar Day and the Belize Bird Festival, contributing to wildlife conservation while raising public awareness of Belize's rich biodiversity.
                    </p>
                </div>
                <div className={styles.imageSide}>
                    <AutoCarousel images={images1} />
                </div>
            </section>

            <section className={styles.outreachSection}>
                <div className={styles.imageSide}>
                    <AutoCarousel images={images2} />
                </div>
                <div className={styles.textSide}>
                    <h2>Community Stewards Taking Action</h2>
                    <p>
                        For many years, Yalbac Creek accumulated debris that obstructed the natural flow of water, affecting an important resource for the entire community. In recognition of Earth Day 2024, the Yalbac community, in collaboration with the Belize Defence Force and BMFT, mobilized volunteers to remove waste and debris from the creek, restoring its flow. Six no-litter and plastic-free signs were strategically installed throughout the community.
                    </p>
                    <p>
                        Students from Valley of Peace SDA Academy participated in a series of workshops exploring youth-led climate initiatives. Inspired by these discussions, they organized a community cleanup campaign and enhanced public spaces by beautifying three community bus stops with climate action murals.
                    </p>
                    <p>
                        Five primary schools took part in a mural initiative encouraging children to express their perspectives on nature and wildlife. Working alongside local artists, students created unique murals showcasing birds and their habitats.
                    </p>
                </div>
            </section>

            <section className={styles.outreachSection}>
                <div className={styles.textSide}>
                    <h2>Educational Field Trips</h2>
                    <p>
                        The Belize Maya Forest and Gallon Jug partners welcome visitors to learn about conservation, biodiversity, and sustainable coffee production while experiencing the stunning scenery of the forest. These shared immersive experiences strengthen environmental awareness, inspire stewardship, and encourage participants to become active advocates for conservation within their communities. Currently, educational field trips are exclusively for educational purposes to stakeholder communities and direct partners.
                    </p>
                </div>
                <div className={styles.imageSide}>
                    <AutoCarousel images={images3} />
                </div>
            </section>
        </div>
    );
};

export default Outreach;
