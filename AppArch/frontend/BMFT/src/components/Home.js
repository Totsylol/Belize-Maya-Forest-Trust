import React from 'react'
import styles from "./styles/home.module.css"
import home from "./assets/Home.jpg"

const Home = () => {
  return (
    <div>
      <img src={home} className={styles.img}></img>
      <h1>Hello</h1>
    </div>
  )
}

export default Home
