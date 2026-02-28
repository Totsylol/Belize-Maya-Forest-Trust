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
                        Agriculture plays a critical role in providing income and sustaining the livelihoods of BMFT 
                        stakeholder communities. For these communities, access to healthy natural resources including rich soils and 
                        clean water is essential for their prosperity and well-being. Climate change, ecosystem degradation by harmful 
                        chemicals and solid waste contamination, and massive land clearing have altered natural cycles causing farmers 
                        economic losses and production challenges. 
                    </p>
                    <p>
                        Regenerative agriculture works hand-in-hand with local farmers to advance environmentally sustainable farming. 
                        The program enhances soil health by using cover crops like Mucuna and Canavalia beans, while promoting agroforestry 
                        and controlled burning practices that harmonize food production with natural resources conservation.
By reforestation initiatives, providing technical support, building capacity, and facilitating knowledge exchanges, the initiative 
empowers communities to adopt climate-resilient farming methods that boost productivity and safeguard the surrounding landscape resources.

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
            >Commonly known as jack bean, Canavalia spp. produces white beans and is a hardy leguminous plant, while Mucuna spp. 
            produces brown beans and grows as a vigorous climbing legume. These cover crops are intentionally cultivated on 
            separate one-acre plots to restore soil fertility, suppress weeds, reduce erosion, improve moisture retention, and 
            support nutrient cycling. By increasing nitrogen availability and organic matter, they enrich the soil and help build healthier, 
            more resilient farming systems that promote sustainable agricultural productivity.
                
            </TopicSection>
            <TopicSection
                title="Agroforestry"
                imgSrc={Placeholder}
                reverse={true} 
                onImageClick={handleImageClick}
            >Agroforestry integrates trees into crop and livestock farming systems, either grown alongside or incorporated within 
            agricultural production. By maintaining tree cover across agricultural landscapes, agroforestry helps protect forests, 
            create wildlife habitat and corridors, and support native species. Through the careful planning and management of diverse 
            vegetation, this approach conserves soil and water resources, enhances biodiversity, reduces pressure on surrounding natural 
            forests, and strengthens farm resilience to climate change.
            
            </TopicSection>
            <TopicSection
                title="Reforestation"
                imgSrc={Placeholder}
                reverse={false} 
                onImageClick={handleImageClick}
            >Restoring lost forests is a shared priority for local communities, the Government of Belize, and the Belize Maya Forest Trust (BMFT). 
            This important initiative addresses the impacts of climate change while restoring ecosystems and safeguarding essential ecological 
            services.
By 2025, BMFT successfully planted more than 10,000 native timber, palm, and fruit trees across stakeholder communities. 
Farmers, women, and youth actively participated in hands-on training focused on best practices for transplanting and nurturing seedlings. 
Following planting, BMFT continues to monitor plant health and provides ongoing technical support to community stewards to ensure strong growth, 
high survival rates, and long-term restoration success.
            
            </TopicSection>
            <TopicSection
                title="Knowledge Exchange and Farmer Networks"
                imgSrc={Placeholder}
                reverse={true} 
                onImageClick={handleImageClick}
            >Farmer networks and knowledge exchange platforms create opportunities for farmers to share best practices, innovations, 
            and experiences. Through peer learning and collaboration, farmers connect with one another to exchange practical knowledge, 
            techniques, and lessons learned from their work on the land.
The Belize Maya Forest Trust (BMFT) supports this process by organizing field trips to stakeholder communities, allowing farmers to visit 
demonstration sites, observe successful practices firsthand, and learn directly from fellow stewards. These exchanges strengthen local farming 
networks, encourage innovation, and promote continuous learning, helping to improve agricultural practices and advance sustainable landscape 
management across communities. 

            </TopicSection>
            <TopicSection
                title="Capacity Building and Technical Support"
                imgSrc={Placeholder}
                reverse={false} 
                onImageClick={handleImageClick}
            >Through a series of hands-on trainings and workshops focused on sustainable agricultural practices, farmers strengthen their 
            existing knowledge while learning innovative approaches that promote climate resilience. These sessions provide practical skills 
            and tools that support the adoption of environmentally responsible farming methods.
The Belize Maya Forest Trust (BMFT) also provides ongoing technical support to stewards, assisting with farm projects and the 
implementation of new climate adaptation practices to ensure long-term success and sustainability.
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
