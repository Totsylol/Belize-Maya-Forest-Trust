import React from 'react'
import styles from "./styles/home.module.css"
import LivePatrolTracker from './LivePatrolTracker'

const Home = () => {
  return (
    <div>
      <div className={styles.container}> 
      <div className={styles.gallery}>

      <div className={styles.column}>

        <div className={styles.img}>
          <img src='./assets/cenoteaerial.jpg'/>
        </div>
        <div className={styles.img}>
          <img src='./assets/Home.jpg'/>
        </div>
        <div className={styles.img}>
          <img src='./assets/cenote.jpg'/>
        </div>

      </div>

      <div className={styles.column}>

        <div className={styles.img}>
          <img src='./assets/diver1.jpg'/>
        </div>
        <div className={styles.img}>
          <img src='./assets/fish.jpg'/>
        </div>
        <div className={styles.img}>
          <img src='./assets/diver2.jpg'/>
        </div>
        
      </div>

      <div className={styles.column}>

        <div className={styles.img}>
          <img src='./assets/Agrigo.jpg'/>
        </div>
        <div className={styles.img}>
          <img src='./assets/antiwaste.jpg'/>
        </div>
        <div className={styles.img}>
          <img src='./assets/visit.jpg'/>
        </div>
        
      </div>

      </div>
      </div>
     <LivePatrolTracker/>
    </div>
  )
}

export default Home
