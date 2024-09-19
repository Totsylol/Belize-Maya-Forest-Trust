import React from 'react';
import styles from '../styles/patrols.module.css';
import Ptop from "../assets/Ptop.jpg";
import Placeholder from "../assets/Placeholder.jpg";
import Patrolcir from "./Patrolcir";
import LivePatrolTracker from '../GeneralFeatures/LivePatrolTracker';
import Pbot from "../assets/Pbot.jpg";

const Patrols = () => {
    return (
        <div className={styles.pageContainer}>
            <h1 className={styles.titleOverlay}>Patrols</h1>
            <header className={styles.header}>
                <img src={Pbot} alt="Header" />
            </header>
            <div className={styles.panelContainer}>
                <LivePatrolTracker />
                
                <div className={`${styles.panel} ${styles.animateRollIn}`}>
                    <div className={styles.textContainer}>
                        <h2 className={styles.introText}>What Are Patrols?</h2>
                        <p>
                            Patrols are essential for monitoring, protecting, and preserving wildlife and natural resources. 
                            They involve systematic observations of designated areas to ensure safety, manage wildlife, and 
                            prevent illegal activities. By conducting regular patrols, teams can gather valuable data, enhance 
                            community awareness, and foster conservation efforts.
                        </p>
                    </div>
                    <img src={Placeholder} alt="Ranger Team" className={styles.image} />
                </div>

                <section>
                    <Patrolcir />
                </section>

                <div className={styles.sideBySideContainer}>
                    <div className={`${styles.panel} ${styles.animateRollIn}`}>
                        <div className={styles.textContainer}>
                            <h2 className={styles.introText}>The Reserve</h2>
                            <p>
                                The Reserve is a vital ecological sanctuary where diverse species thrive and ecosystems flourish. 
                                This protected area serves as a habitat for wildlife and a space for education and research. 
                                Regular patrols within the Reserve help maintain its integrity by monitoring wildlife populations 
                                and enforcing regulations that safeguard the environment.
                            </p>
                        </div>
                    </div>

                    <div className={`${styles.panel} ${styles.animateRollIn}`}>
                        <div className={styles.textContainer}>
                            <h2 className={styles.introText}>Importance of Patrols</h2>
                            <p>
                                Patrols play a crucial role in conservation efforts. They help prevent poaching, illegal logging, 
                                and habitat destruction. By maintaining a visible presence, patrol teams deter potential threats 
                                and ensure compliance with environmental regulations. Additionally, patrols facilitate community 
                                engagement, fostering partnerships that promote sustainable practices and enhance local support for 
                                conservation initiatives.
                            </p>
                        </div>
                    </div>
                </div>

                <img src={Ptop} alt="Ranger Team" className={styles.image2} /> 
            </div>
        </div>
    );
};

export default Patrols;

