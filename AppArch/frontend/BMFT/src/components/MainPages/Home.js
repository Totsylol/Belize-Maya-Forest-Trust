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
import c7 from "../assets/c7.jpg";
import c8 from "../assets/c8.jpg";
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
      title: "Protecting Belize's Natural Heritage",
      subtitle: "Demonstrating a globally recognized, locally relevant model of healthy, biodiverse forest protected for and by all Belizeans.",
      buttons: ["Our Mission", "Learn More"]
    },
    {
      title: "236,000 Acres Under Protection",
      subtitle: "Working with local communities to safeguard one of Central America's most important forest ecosystems.",
      buttons: ["Get Involved", "Our Impact"]
    },
    {
      title: "Community-Driven Conservation",
      subtitle: "Empowering local communities through sustainable practices and environmental education programs.",
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

      {/* Mission Section - HAS IMAGE - PARALLAX ENABLED */}
      <section className={styles.missionSection}>
        <div 
          className={styles.missionBackground}
          style={{
            transform: `translateY(${(scrollY - 800) * 0.3}px)`
          }}
        >
          <img src={home} alt="Forest Background" />
          <div className={styles.missionOverlay}></div>
        </div>
        
        <div 
          className={styles.missionContent}
          style={{
            transform: `translateY(${(scrollY - 800) * -0.1}px)`
          }}
        >
          <div className={styles.missionCards}>
            <div className={styles.missionCard}>
              <div className={styles.cardIcon}>
                <div className={styles.iconCircle}>🌿</div>
              </div>
              <h3>Our Mission</h3>
              <p>Demonstrating a globally recognized, locally relevant model of healthy, biodiverse forest protected for and by all Belizeans.</p>
            </div>

            <div className={styles.missionCard}>
              <div className={styles.cardIcon}>
                <div className={styles.iconCircle}>🎯</div>
              </div>
              <h3>Our Impact</h3>
              <p>236,000 acres of pristine forest under protection through community partnerships and innovative conservation strategies.</p>
            </div>
          </div>

          <div className={styles.aboutCard}>
            <h3>Belize Maya Forest Trust</h3>
            <p>The Belize Maya Forest Trust is dedicated to conserving 236,000 acres of pristine tropical forest through innovative conservation strategies, community partnerships, and scientific research. We work hand-in-hand with local communities to ensure sustainable stewardship of this critical ecosystem for future generations.</p>
          </div>
        </div>
      </section>

     

      {/* Why BMFT Section - HAS IMAGES - PARALLAX ENABLED */}
      <section className={styles.whySection}>
        <div className={styles.parallaxContainer}>
          <div 
            className={styles.parallaxLayer} 
            style={{
              backgroundImage: `url(${c3})`,
              transform: `translateY(${(scrollY - 2000) * 0.6}px)`
            }}
          ></div>
          <div 
            className={styles.parallaxLayer} 
            style={{
              backgroundImage: `url(${cenote})`,
              transform: `translateY(${(scrollY - 2000) * 0.4}px)`
            }}
          ></div>
          <div 
            className={styles.parallaxLayer} 
            style={{
              backgroundImage: `url(${diver1})`,
              transform: `translateY(${(scrollY - 2000) * 0.2}px)`
            }}
          ></div>
          <div className={styles.whyOverlay}></div>
        </div>

        <div 
          className={styles.whyContent}
          style={{
            transform: `translateY(${(scrollY - 2200) * -0.1}px)`
          }}
        >
          <h2>Why BMFT?</h2>
          
          
          <div className={styles.whyGrid}>
            {[
              { icon: "👥", title: "Community Partnership", text: "Working directly with local communities to ensure sustainable conservation practices." },
              { icon: "🔬", title: "Scientific Approach", text: "Using cutting-edge research and monitoring to guide our conservation strategies." },
              { icon: "🌳", title: "Proven Results", text: "Successfully protecting 236,000 acres of critical forest ecosystem." },
              { icon: "🛡️", title: "24/7 Protection", text: "Dedicated ranger teams providing round-the-clock forest monitoring and protection." },
              { icon: "🎯", title: "Focused Mission", text: "Concentrated efforts on preserving Belize's most critical forest ecosystems." },
              { icon: "🤝", title: "Collaborative Model", text: "Building partnerships across government, communities, and international organizations." },
              { icon: "📈", title: "Sustainable Growth", text: "Ensuring conservation efforts support long-term community development." },
              { icon: "🌿", title: "Biodiversity Focus", text: "Protecting critical habitats for endangered species and ecosystem health." }
            ].map((item, index) => (
              <div 
                key={index}
                className={styles.whyCard}
                style={{
                  transform: `translateY(${(scrollY - 2400 - index * 50) * -0.02}px)`
                }}
              >
                <div className={styles.whyIcon}>{item.icon}</div>
                <h4>{item.title}</h4>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Section - SOLID COLOR BACKGROUND - NO PARALLAX */}
      <section className={styles.videoSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2>Our Mission in Action</h2>
            <p>Discover how we're protecting Belize's natural heritage through community partnership and innovative conservation strategies.</p>
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
            <p>Learn more about our conservation efforts, community partnerships, and ongoing initiatives.</p>
          </div>
          <div className={styles.exploreGrid}>
            <a href="/WhatWeDo" className={styles.exploreCard}>
              <div className={styles.cardImage}>
                <img src={c4} alt="What We Do" />
              </div>
              <div className={styles.cardContent}>
                <h3>What We Do</h3>
                <p>Discover our conservation programs, forest protection initiatives, and community engagement efforts.</p>
                <span className={styles.cardArrow}>→</span>
              </div>
            </a>
            
            <a href="/WhoWeAre" className={styles.exploreCard}>
              <div className={styles.cardImage}>
                <img src={c6} alt="Who We Are" />
              </div>
              <div className={styles.cardContent}>
                <h3>Who We Are</h3>
                <p>Meet our team, learn about our history, and understand the people behind the conservation mission.</p>
                <span className={styles.cardArrow}>→</span>
              </div>
            </a>
            
            <a href="/GetInvolved" className={styles.exploreCard}>
              <div className={styles.cardImage}>
                <img src={c7} alt="Get Involved" />
              </div>
              <div className={styles.cardContent}>
                <h3>Get Involved</h3>
                <p>Join our mission to protect Belize's forests through volunteering, partnerships, and support.</p>
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
            <p>Stay informed about our conservation efforts and forest protection updates.</p>
          </div>
          <div className={styles.newsGrid}>
            <article className={styles.newsCard}>
              <div className={styles.newsImage}>
                <img src={c8} alt="Conservation Success Story" />
              </div>
              <div className={styles.newsContent}>
                <h3>New Ranger Station Established in Eastern Sector</h3>
                <p>BMFT opens a new ranger outpost to strengthen protection of critical wildlife corridors in the eastern section of our 236,000-acre reserve.</p>
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
                <p>BMFT partners with three additional local communities to expand our successful environmental education and sustainable livelihood programs.</p>
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