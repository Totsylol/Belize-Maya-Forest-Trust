import React, { useState } from 'react';
import styles from '../styles/AgroProj.module.css';
import APField from '../assets/APField.jpg'; 
import APpeople from '../assets/APpeople.jpg';
import APgreen from '../assets/APgreen.jpg';
import APshells from '../assets/APshells.jpg';
import Placeholder from "../assets/Placeholder.jpg";


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

const AgroProj = () => {
    const [modalImage, setModalImage] = useState(null);

    const handleImageClick = (src, alt) => {
        setModalImage({ src, alt });
    };

    const closeModal = () => {
        setModalImage(null);
    };

    return (
        <div className={styles.PageContainer}>
            <h1 className={styles.titleoverlay}>Regenerative Agriculture</h1>
            <header className={styles.header}>
                <img src={APField} alt="Header" />
            </header>
            <section className={styles.introduction}>
                <div className={styles.introText}>
                    <h2>About the Program</h2>
                    <p>
                        The nine stakeholder communities surrounding the BMF landscape predominantly consist of agricultural communities engaged in the cultivation of vegetables, fruits, and rearing of livestock. These communities primarily employ conventional farming methods characterized by significant reliance on chemical inputs and the practice of monocropping. In response to the challenges posed by these traditional practices, the regenerative agriculture program aims to enhance the livelihoods of farmers while facilitating their transition towards more sustainable agricultural methods. This initiative focuses on implementing restorative soil health practices, including the use of cover crops such as Mucuna and Canavalia beans, as well as Inga edulis, all of which are leguminous plants known to improve soil fertility.
                    </p>
                    <p>
                        Additionally, the program advocates for agroforestry and controlled burning as essential farming techniques that foster a harmonious relationship among food production, wildlife conservation, and community well-being. By promoting these practices, the initiative seeks to create a balanced ecosystem where agricultural activities coexist with natural habitats, thereby benefiting both the environment and local populations. Through awareness and support, the program endeavours to empower farmers to adopt these innovative approaches, ultimately leading to a more resilient agricultural landscape that prioritizes sustainability and ecological health.
                    </p>
                </div>
                <section className={styles.imageGallery}>
                <div className={styles.images}>
                    <img src={APshells} alt="Field showcasing regenerative agriculture practices" className={styles.image} />
                    <img src={APpeople} alt="Farmers engaged in sustainable farming" className={styles.image} />
                    <img src={APgreen} alt="Close-up of healthy, green soil" className={styles.image} />
                </div>
            </section>
            </section>
            <TopicSection
                title="Cover Crops"
                imgSrc={Placeholder}
                reverse={false} 
                onImageClick={handleImageClick}
            >
                Cover crops are planted to cover the soil rather than for the purpose of being harvested. They play a crucial role in improving soil health by enhancing soil structure, increasing organic matter, and preventing erosion. Common examples include legumes and grasses, which also contribute to nutrient cycling and weed suppression.
            </TopicSection>
            <TopicSection
                title="Inga edulis"
                imgSrc={Placeholder}
                reverse={true} 
                onImageClick={handleImageClick}
            >
                Inga edulis, also known as the ice cream bean tree, is a leguminous tree that is integral to agroforestry systems. Its leaves are high in nitrogen, which helps in enriching the soil, and it provides shade, reduces soil erosion, and supports biodiversity.
            </TopicSection>
            <TopicSection
                title="Agroforestry"
                imgSrc={Placeholder}
                reverse={false} 
                onImageClick={handleImageClick}
            >
                Agroforestry integrates trees and shrubs into crop and animal farming systems to create environmental and economic benefits. This approach enhances biodiversity, improves soil health, and increases farm resilience against climate change.
            </TopicSection>
            <TopicSection
                title="Reforestation"
                imgSrc={Placeholder}
                reverse={true} 
                onImageClick={handleImageClick}
            >
                Controlled or prescribed burns are a land management tool used to reduce the risk of uncontrolled wildfires, improve soil health, and promote new plant growth. This technique helps in maintaining ecological balance by mimicking natural fire cycles.
            </TopicSection>
            <TopicSection
                title="Workshops and Training"
                imgSrc={Placeholder}
                reverse={false} 
                onImageClick={handleImageClick}
            >
The Belize Maya Forest Trust’s Regenerative Agriculture Program is dedicated to empowering local communities through a series of hands-on training and workshops focused on sustainable agricultural practices. These sessions are designed to enhance farmers' knowledge and skills, ensuring that they can implement methods that improve soil health, increase biodiversity, and promote climate resilience.
            </TopicSection>
            <section className={styles.videoSection}>
                <h2>Empowering Women in Conservation</h2>
                <div className={styles.videoContainer}>
                    <iframe
                        src="https://www.youtube.com/embed/RmMZr0urvOs"
                        title="Regenerative Agriculture Overview"
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

export default AgroProj;
