import React from 'react'
import styles from "./styles/home.module.css"
import home from "./assets/Home.jpg"
import LivePatrolTracker from './LivePatrolTracker'

const Home = () => {
  return (
    <div>
      <img src={home} className={styles.img}></img>
     <LivePatrolTracker/>
    </div>
  )
}

export default Home
