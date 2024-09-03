import React, { useState } from 'react';
import styles from "../styles/home.module.css"
import home from "../assets/Home.jpg"
import cenote from "../assets/cenote.jpg"
import diver1 from "../assets/diver1.jpg"
import fish from "../assets/fish.jpg"
import diver2 from "../assets/diver2.jpg"
import agrigo from "../assets/Agrigo.jpg"
import c3 from "../assets/c3.jpg"
import c4 from "../assets/c4.jpg"
import c5 from "../assets/c5.jpg"
import c6 from "../assets/c6.jpg"
import c7 from "../assets/c7.jpg"
import c8 from "../assets/c8.jpg"
import c9 from "../assets/c9.jpg"
import c10 from "../assets/c10.jpg"
import c11 from "../assets/c11.jpg"
import fish2 from "../assets/fish2.jpg"
import fish3 from "../assets/fish3.jpg"
import LivePatrolTracker from '../GeneralFeatures/LivePatrolTracker'
import Hometext from './Hometext'

const Home = ({ setNavbarVisible }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalImgSrc, setModalImgSrc] = useState('');
  const [modalCaption, setModalCaption] = useState('');

  const openModal = (src, alt) => {
      setModalImgSrc(src);
      setModalCaption(alt);
      setModalVisible(true);
      setNavbarVisible(false); 
  };

  const closeModal = () => {
      setModalVisible(false);
      setNavbarVisible(true); 
  };

  return (
    <div>
      
      <div className={styles.container}> 
      <div className={styles.gallery}>
      <div className={styles.textwrapper}>
        <div className={styles.textcontainer}>
          <Hometext />
        </div>
            
        </div>

      <div className={styles.column}>
          <div className={styles.img}>
            <img src={c3} alt="Image 1" onClick={() => openModal(c3, '© 2024 Tony Rath All Rights Reserved')} />
          </div>
          <div className={styles.img}>
            <img src={c10} alt="Image 4" onClick={() => openModal(c10, '© 2024 Tony Rath All Rights Reserved')} />
          </div>
          <div className={styles.img}>
            <img src={diver2} alt="Image 2" onClick={() => openModal(diver2, '© 2024 Tony Rath All Rights Reserved')} />
          </div>
          <div className={styles.img}>
            <img src={c7} alt="Image 3" onClick={() => openModal(c7, '© 2024 Tony Rath All Rights Reserved')} />
          </div>
          <div className={styles.img}>
            <img src={fish3} alt="Image 4" onClick={() => openModal(fish3, '© 2024 Tony Rath All Rights Reserved')} />
          </div>
        </div>

        <div className={styles.column}>
          <div className={styles.img}>
            <img src={diver1} alt="Image 5" onClick={() => openModal(diver1, '© 2024 Tony Rath All Rights Reserved')} />
          </div>
          <div className={styles.img}>
            <img src={c9} alt="Image 6" onClick={() => openModal(c9, '© 2024 Tony Rath All Rights Reserved')} />
          </div>
          <div className={styles.img}>
            <img src={fish2} alt="Image 7" onClick={() => openModal(fish2, '© 2024 Tony Rath All Rights Reserved')} />
          </div>
          <div className={styles.img}>
            <img src={fish} alt="Image 8" onClick={() => openModal(fish, '© 2024 Tony Rath All Rights Reserved')} />
          </div>
          <div className={styles.img}>
            <img src={c8} alt="Image 12" onClick={() => openModal(c8, '© 2024 Tony Rath All Rights Reserved')} />
          </div>
        </div>

        <div className={styles.column}>
          <div className={styles.img}>
            <img src={c6} alt="Image 9" onClick={() => openModal(c6, '© 2024 Tony Rath All Rights Reserved')} />
          </div>
          <div className={styles.img}>
            <img src={c5} alt="Image 10" onClick={() => openModal(c5, '© 2024 Tony Rath All Rights Reserved')} />
          </div>
          <div className={styles.img}>
            <img src={c4} alt="Image 11" onClick={() => openModal(c4, '© 2024 Tony Rath All Rights Reserved')} />
          </div>
          <div className={styles.img}>
            <img src={c11} alt="Image 4" onClick={() => openModal(c11, '© 2024 Tony Rath All Rights Reserved')} />
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
