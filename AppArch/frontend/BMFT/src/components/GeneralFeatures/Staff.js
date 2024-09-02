import React from 'react'
import Rangers from '../BIOPages/Rangers'
import Board from "../BIOPages/Board"
import Topstaff from "../assets/Topstaff.JPG"
import styles from "../styles/staff.module.css"

const Staff = () => {
  return (
    <div>
       <h1 className={styles.titleoverlay}>
          Team Members
        </h1>
      <header className={styles.header}>
        <img src={Topstaff} alt="Header" />
      </header>
      
      <section className={`${styles.section} ${styles.animateRollIn}`}>
        <h2 className={styles.sectionTitle}>Our Vision</h2>
        <div className={styles.sectionContent}>
          <p className={styles.sectionContentParagraph}>
          To be a global benchmark for effective and lasting conservation.           </p>
          <header className={styles.banner}>Board Members</header>
          <Board></Board>
          <header className={styles.banner}>Rangers</header>
          <Rangers></Rangers>
        </div>
      </section>
      </div>
  )
}

export default Staff
