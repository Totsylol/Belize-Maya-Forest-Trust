import React from 'react'
import styles from "./styles/home.module.css"
import home from "./assets/Home.jpg"
import aerial from "./assets/cenoteaerial.jpg"
import cenote from "./assets/cenote.jpg"
import diver1 from "./assets/diver1.jpg"
import fish from "./assets/fish.jpg"
import diver2 from "./assets/diver2.jpg"
import agrigo from "./assets/Agrigo.jpg"
import c2 from "./assets/cenote2.jpg"
import c3 from "./assets/cenote3.jpg"
import c4 from "./assets/c4.jpg"
import c5 from "./assets/c5.jpg"
import c6 from "./assets/c6.jpg"
import c7 from "./assets/c7.jpg"
import c8 from "./assets/c8.jpg"
import fish2 from "./assets/fish2.jpg"
import fish3 from "./assets/fish3.jpg"
import LivePatrolTracker from './LivePatrolTracker'

const Home = () => {
  return (
    <div>
      
      <div className={styles.container}> 
    
      <div className={styles.gallery}>

      <div className={styles.column}>

        <div className={styles.img}>
            <img src={c3}/>
        </div>

        <div className={styles.img}>
          <img src={diver2}/>
        </div>

        <div className={styles.img}>
          <img src={c7}/>
        </div>
       
        <div className={styles.img}>
          <img src={fish3}/>
        </div>

       


      </div>

      <div className={styles.column}>

        <div className={styles.img}>
          <img src={diver1}/>
        </div>

        <div className={styles.img}>
          <img src={c5}/>
        </div>

        <div className={styles.img}>
          <img src={fish2}/>
        </div>

        <div className={styles.img}>
          <img src={fish}/>
        </div>

      </div>

      <div className={styles.column}>
       
        <div className={styles.img}>
          <img src={c6}/>
        </div>

        <div className={styles.img}>
            <img src={c2}/>
        </div>

       
        
        <div className={styles.img}>
          <img src={c4}/>
        </div>

        <div className={styles.img}>
          <img src={aerial}/>
        </div>
        
        <div className={styles.img}>
          <img src={c8}/>
        </div>
        

      </div>

      </div>
      </div>
     <LivePatrolTracker/>
    </div>
  )
}

export default Home
