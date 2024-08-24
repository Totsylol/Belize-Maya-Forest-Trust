import React from 'react'
import styles from "./styles/home.module.css"
import home from "./assets/Home.jpg"
import aerial from "./assets/cenoteaerial.jpg"
import cenote from "./assets/cenote.jpg"
import diver1 from "./assets/diver1.jpg"
import fish from "./assets/fish.jpg"
import diver2 from "./assets/diver2.jpg"
import agrigo from "./assets/Agrigo.jpg"
import anti from "./assets/antiwaste.JPG"
import visit from "./assets/visit.jpg"
import LivePatrolTracker from './LivePatrolTracker'

const Home = () => {
  return (
    <div>
      
      <div className={styles.container}> 
    
      <div className={styles.gallery}>

      <div className={styles.column}>

        <div className={styles.img}>
          <img src={aerial}/>
        </div>
      </div>

      <div className={styles.column}>

        <div className={styles.img}>
          <img src={diver1}/>
        </div>
        <div className={styles.img}>
          <img src={fish}/>
        </div>
        <div className={styles.img}>
          <img src={diver2}/>
        </div>
        
      </div>

      <div className={styles.column}>

        <div className={styles.img}>
          <img src={agrigo}/>
        </div>
        <div className={styles.img}>
          
        </div>
        <div className={styles.img}>
          
        </div>
        
      </div>

      </div>
      </div>
     <LivePatrolTracker/>
    </div>
  )
}

export default Home
