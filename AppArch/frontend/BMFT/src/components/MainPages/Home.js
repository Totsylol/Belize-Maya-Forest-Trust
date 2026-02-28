import React, { useState, useEffect } from 'react';
import styles from "../styles/home.module.css";
import home from "../assets/Home.jpg";
import cenote from "../assets/cenote.jpg";
import diver1 from "../assets/diver1.jpg";
import fish from "../assets/fish.jpg";
import diver2 from "../assets/diver2.jpg";
import c3 from "../assets/c3.jpg";
import c4 from "../assets/c4.jpg";
import c5 from "../assets/c5.jpg";
import c6 from "../assets/c6.jpg";
import Cforest from "../assets/Cforest.jpg";
import c8 from "../assets/c8.jpg";
import Pool16 from "../assets/Pool16.jpg";
import StewardSum from "../assets/StewardSum.jpg";
import Ivol from "../assets/Ivol.jpg";
import Pat3 from "../assets/Pat3.jpg";
import APpeople from "../assets/APpeople.jpg";
import Jaguar01 from "../assets/Jaguar01.jpg";
import Placeholder from "../assets/Placeholder.jpg";

const Home = ({ setNavbarVisible }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [scrollY, setScrollY] = useState(0);

  // Handle scroll for parallax effects - only when images are present
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const slides = [
    {
      title: "Protecting Belize's Great Forest",
      subtitle: "",
      buttons: ["Our Mission", "Learn More"]
    },
    {
      title: "Protecting Critical Ecosystems and Biodiversity",
      subtitle: "",
      buttons: ["Get Involved", "Our Impact"]
    },
    {
      title: "Building Community Stewardship",
      subtitle: "",
      buttons: ["Our People", "Learn More"]
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className={styles.homePage}>
      {/* Hero Carousel - HAS IMAGE - PARALLAX ENABLED */}
      <section className={styles.heroCarousel}>
        <div 
          className={styles.carouselBackground}
          style={{
            transform: `translateY(${scrollY * 0.5}px)`
          }}
        >
          <img src={home} alt="Belize Maya Forest" />
          <img src={Pool16} alt="Pool 16" className={styles.pool16Image} />
          <img src={StewardSum} alt="StewardSum" className={styles.StewardSumImage} />
          <div className={styles.carouselOverlay}></div>
        </div>
        
        <div className={styles.carouselContent}>
          <div 
            className={styles.slideContent}
            style={{
              transform: `translateY(${scrollY * -0.2}px)`
            }}
          >
            <h1 className={styles.slideTitle}>{slides[currentSlide].title}</h1>
            <p className={styles.slideSubtitle}>{slides[currentSlide].subtitle}</p>
            <div className={styles.slideButtons}>
              <button className={styles.primaryBtn}>{slides[currentSlide].buttons[0]}</button>
              <button className={styles.secondaryBtn}>{slides[currentSlide].buttons[1]}</button>
            </div>
          </div>
        </div>

        <button className={styles.carouselPrev} onClick={prevSlide}>‹</button>
        <button className={styles.carouselNext} onClick={nextSlide}>›</button>

        <div className={styles.carouselDots}>
          {slides.map((_, index) => (
            <button
              key={index}
              className={`${styles.dot} ${index === currentSlide ? styles.active : ''}`}
              onClick={() => setCurrentSlide(index)}
            ></button>
          ))}
        </div>
      </section> 


      {/* Video Section - SOLID COLOR BACKGROUND - NO PARALLAX */}
      <section className={styles.videoSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2>A glimpse into our landscape</h2>
            <p>Protecting 241,000 acres of the Belize Maya Forest, linked to the Rio Bravo Conservation Management Area and the greater Selva Maya, safeguards iconic wildlife, sacred Cara Blanca Pools, and the Rio Hondo watershed, while strengthening Belize’s climate resilience and conservation goals.</p>
          </div>
          <div className={styles.videoWrapper}>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/gU-yYppmWNM"
              title="BMFT Mission Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className={styles.videoFrame}
            ></iframe>
          </div>
        </div>
      </section>

      {/* Explore Section - SOLID COLOR BACKGROUND - NO PARALLAX */}
      <section className={styles.exploreSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2>Explore Our Work</h2>
            <p>Learn more about our story, conservation efforts, community partnerships, and ongoing initiatives.</p>
          </div>
          <div className={styles.exploreGrid}>
            <a href="/WhatWeDo" className={styles.exploreCard}>
              <div className={styles.cardImage}>
                <img src={Cforest} alt="What We Do" />
              </div>
              <div className={styles.cardContent}>
                <h3>What We Do</h3>
                <p>Explore our conservation programs, forest protection initiatives, and community engagement efforts.</p>
                <span className={styles.cardArrow}>→</span>
              </div>
            </a>
            
            <a href="/WhoWeAre" className={styles.exploreCard}>
              <div className={styles.cardImage}>
                <img src={Pat3} alt="Who We Are" />
              </div>
              <div className={styles.cardContent}>
                <h3>Who We Are</h3>
                <p>Learn about our history, meet our team, and stewards behind the conservation efforts.</p>
                <span className={styles.cardArrow}>→</span>
              </div>
            </a>
            
            <a href="/GetInvolved" className={styles.exploreCard}>
              <div className={styles.cardImage}>
                <img src={APpeople} alt="Get Involved" />
              </div>
              <div className={styles.cardContent}>
                <h3>Get Involved</h3>
                <p>Join our mission to protect Belize's Great Forest through volunteering, partnerships, and support.</p>
                <span className={styles.cardArrow}>→</span>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Latest News Section - SOLID COLOR BACKGROUND - NO PARALLAX */}
      <section className={styles.newsSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2>Latest News</h2>
            <p>Stay informed about our conservation efforts.</p>
          </div>
          <div className={styles.newsGrid}>
            <article className={styles.newsCard}>
              <div className={styles.newsImage}>
                <img src={c8} alt="Conservation Success Story" />
              </div>
              <div className={styles.newsContent}>
                <h3>New Ranger Station</h3>
                <p>BMFT opens a new ranger outpost to strengthen protection of critical wildlife corridors in the eastern section of our 241,000-acre reserve.</p>
                <a href="/news/ranger-station-eastern" className={styles.readMore}>Read More</a>
              </div>
            </article>
            
            <article className={styles.newsCard}>
              <div className={styles.newsImage}>
                <img src={fish} alt="Biodiversity Research" />
              </div>
              <div className={styles.newsContent}>
                <h3>Cara Blanca Pools Biodiversity Study Released</h3>
                <p>New research reveals incredible species diversity in our protected cenote system, including several previously undocumented aquatic species.</p>
                <a href="/news/biodiversity-study" className={styles.readMore}>Read More</a>
              </div>
            </article>
            
            <article className={styles.newsCard}>
              <div className={styles.newsImage}>
                <img src={diver2} alt="Community Partnership" />
              </div>
              <div className={styles.newsContent}>
                <h3>Community Stewardship Program Expands</h3>
                <p>BMFT partners with ten additional local communities to expand our successful environmental education and sustainable livelihood programs.</p>
                <a href="/news/community-expansion" className={styles.readMore}>Read More</a>
              </div>
            </article>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;