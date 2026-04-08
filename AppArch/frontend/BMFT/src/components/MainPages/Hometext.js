import React from "react";
import styles from "../styles/hometext.module.css";
import Placeholder from "../assets/Placeholder.jpg";

const HomeText = () => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>
          BMFT’s Mission
          <br />
          Demonstrating a globally recognized, locally relevant model of healthy, biodiverse forest protected for and by all Belizeans.
        </h1>
      </header>

      <section className={styles.videoSection}>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/gU-yYppmWNM"
          title="BMFT Mission Video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </section>

      <nav className={styles.nav}>
        <ul className={styles.navList}>
          <li className={styles.navItem}>
            <a href="/WhatWeDo" className={styles.navLink}>
              <img src={Placeholder} alt="What We Do" className={styles.navImage} />
              <span className={styles.navTitle}>What We Do</span>
            </a>
          </li>
          <li className={styles.navItem}>
            <a href="/News" className={styles.navLink}>
              <img src={Placeholder} alt="News" className={styles.navImage} />
              <span className={styles.navTitle}>News</span>
            </a>
          </li>
          <li className={styles.navItem}>
            <a href="/WhoWeAre" className={styles.navLink}>
              <img src={Placeholder} alt="Who We Are" className={styles.navImage} />
              <span className={styles.navTitle}>Who We Are</span>
            </a>
          </li>
          <li className={styles.navItem}>
            <a href="/GetInvolved" className={styles.navLink}>
              <img src={Placeholder} alt="Get Involved" className={styles.navImage} />
              <span className={styles.navTitle}>Get Involved</span>
            </a>
          </li>
        </ul>
      </nav>

      <section className={styles.newsSection}>
        <h2>Latest News</h2>
        <div className={styles.newsPanel}>
          <div className={styles.newsItem}>
            <img src={Placeholder} alt="News Article 1" className={styles.newsImage} />
            <div className={styles.newsContent}>
              <h3>Article Title 1</h3>
              <p>Brief summary of the news article...</p>
              <a href="/news/article1" className={styles.readMore}>Read More</a>
            </div>
          </div>
          <div className={styles.newsItem}>
            <img src={Placeholder} alt="News Article 2" className={styles.newsImage} />
            <div className={styles.newsContent}>
              <h3>Article Title 2</h3>
              <p>Brief summary of the news article...</p>
              <a href="/news/article2" className={styles.readMore}>Read More</a>
            </div>
          </div>
          <div className={styles.newsItem}>
            <img src={Placeholder} alt="News Article 3" className={styles.newsImage} />
            <div className={styles.newsContent}>
              <h3>Article Title 3</h3>
              <p>Brief summary of the news article...</p>
              <a href="/news/article3" className={styles.readMore}>Read More</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeText;
