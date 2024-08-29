import React from 'react';
import styles from '../styles/ProtBio.module.css';
import PBfireteam from '../assets/PBfireteam.jpg';
import PBCheck from "../assets/PBCheck.jpg"
import PBfire from "../assets/PBfire.jpg"

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
                        The Belize Maya Forest represents a vital and ecologically rich protected area that serves as a sanctuary for numerous endangered species, including the spider monkey and the white-lipped peccary. This forest is also inhabited by several emblematic species, notably the five wild cats of Belize: the jaguar, puma, ocelot, margay, and jaguarundi. Additionally, it is home to the national animal, the tapir, and the national bird, the keel-billed toucan, among a plethora of other wildlife. Beyond its biological diversity, the Belize Maya Forest holds significant cultural importance, particularly through the preservation of the Secret Cara Blanca Pools, which are integral to the history of the Yucatec Maya, and logging years.  
The conservation of the Belize Maya Forest is of paramount importance, prompting the establishment of a dedicated protection team that conducts regular patrols to safeguard the area's natural resources and deter illegal activities.  
In recent years, the occurrence of wildfires has posed a significant threat to this ecosystem, leading the ranger team to enhance their knowledge and skills in fire suppression and prevention strategies. Through training and experience, they have developed effective mechanisms to combat wildfires, ensuring the continued protection of this invaluable forest and its diverse inhabitants. The ongoing efforts of the protection team are crucial in maintaining the ecological integrity and cultural heritage of the Belize Maya Forest. 
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
