import React, { useState } from 'react';
import styles from "./styles/home.module.css"
import home from "./assets/Home.jpg"
import cenote from "./assets/cenote.jpg"
import diver1 from "./assets/diver1.jpg"
import fish from "./assets/fish.jpg"
import diver2 from "./assets/diver2.jpg"
import agrigo from "./assets/Agrigo.jpg"
import c3 from "./assets/c3.jpg"
import c4 from "./assets/c4.jpg"
import c5 from "./assets/c5.jpg"
import c6 from "./assets/c6.jpg"
import c7 from "./assets/c7.jpg"
import c8 from "./assets/c8.jpg"
import c9 from "./assets/c9.jpg"
import fish2 from "./assets/fish2.jpg"
import fish3 from "./assets/fish3.jpg"
import LivePatrolTracker from './LivePatrolTracker'

const Home = () => {

    const [modalVisible, setModalVisible] = useState(false);
    const [modalImgSrc, setModalImgSrc] = useState('');
    const [modalCaption, setModalCaption] = useState('');
  
    const openModal = (src, alt) => {
      setModalImgSrc(src);
      setModalCaption(alt);
      setModalVisible(true);
    };
  
    const closeModal = () => {
      setModalVisible(false);
    };

  return (
    <div>
      
      <div className={styles.container}> 
      <div className={styles.gallery}>
      <div className={styles.textwrapper}>
        <div className={styles.textcontainer}>
          <h1 className={styles.h1}>The Belize Maya Forest Trust</h1>
          <p className={styles.p}>The Belize Maya Forest (BMF), previously known as Yalbac and Laguna Seca, were owned and managed by a foreign logging company. The properties were bought in December 2020 for protection by the Belize Maya Forest Trust (BMFT) through an effort led by TNC, and many other generous organizations and individual supporters.</p>  

<h2 className={styles.h2}>BMFT’s Mission</h2>

<p className={styles.p}>Demonstrating a globally recognized, locally relevant model of healthy, biodiverse forest protected for and by all Belizeans.</p>

<h2 className={styles.h2}>BMFT’s Vision </h2>

<p className={styles.p}>To be a global benchmark for effective and lasting conservation.</p>

<p className={styles.p}>The BMF comprises of 236,000 acres of forest, rich in biodiversity, that will be protected in perpetuity for the people and Government of Belize (GoB). It was purchased from a US-based timber investment management company in December 2020, through the efforts of years of partnership amongst NGOs, government and private sector organizations, and individuals, as it represented the last remaining extensive and contiguous lowland broadleaf forest of     Belize. The reserve borders Guatemala to the west, the Rio Bravo Conservation and Management Area (RBCMA) to the north, and private agricultural lands of the Spanish Lookout community, Valley of Peace Farms Ltd., and others to the east and south. The northern part of the BMF also surrounds a private, mainly forested property, known as Gallon Jug, which includes the Chan Chich Lodge and Sylvester Village. Together with the RBCMA and Gallon Jug, the BMF comprises nine (9) percent of Belize’s land territory. </p>
        </div>
            
        </div>

      <div className={styles.column}>
          <div className={styles.img}>
            <img src={c3} alt="Image 1" onClick={() => openModal(c3, 'Image 1')} />
          </div>
          <div className={styles.img}>
            <img src={diver2} alt="Image 2" onClick={() => openModal(diver2, 'Image 2')} />
          </div>
          <div className={styles.img}>
            <img src={c7} alt="Image 3" onClick={() => openModal(c7, 'Image 3')} />
          </div>
          <div className={styles.img}>
            <img src={fish3} alt="Image 4" onClick={() => openModal(fish3, 'Image 4')} />
          </div>
        </div>

        <div className={styles.column}>
          <div className={styles.img}>
            <img src={diver1} alt="Image 5" onClick={() => openModal(diver1, 'Image 5')} />
          </div>
          <div className={styles.img}>
            <img src={c9} alt="Image 6" onClick={() => openModal(c9, 'Image 6')} />
          </div>
          <div className={styles.img}>
            <img src={fish2} alt="Image 7" onClick={() => openModal(fish2, 'Image 7')} />
          </div>
          <div className={styles.img}>
            <img src={fish} alt="Image 8" onClick={() => openModal(fish, 'Image 8')} />
          </div>
        </div>

        <div className={styles.column}>
          <div className={styles.img}>
            <img src={c6} alt="Image 9" onClick={() => openModal(c6, 'Image 9')} />
          </div>
          <div className={styles.img}>
            <img src={c5} alt="Image 10" onClick={() => openModal(c5, 'Image 10')} />
          </div>
          <div className={styles.img}>
            <img src={c4} alt="Image 11" onClick={() => openModal(c4, 'Image 11')} />
          </div>
          <div className={styles.img}>
            <img src={c8} alt="Image 12" onClick={() => openModal(c8, 'Image 12')} />
          </div>
        </div>

      </div>
      </div> 
      
    {modalVisible && (
        <div className={styles.modal}>
          
          <span className={styles.close} onClick={closeModal}>&times;</span>

          <img className={styles.modalContent} src={modalImgSrc} alt={modalCaption} />

          <div className={styles.caption}>{modalCaption}</div>
        </div>
      )}

    </div>
  )
}

export default Home
