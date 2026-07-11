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
import Pool16 from "../assets/Pool166.png";
import HomepageVideoImg from "../assets/Homepage image next to video.jpg";
import StewardSum from "../assets/Placeholder.jpg";
import Ivol from "../assets/Ivol.jpg";
import Pat3 from "../assets/Pat3.jpg";
import APpeople from "../assets/APpeople.jpg";
import Placeholder from "../assets/Placeholder.jpg";

const slides = [
  {
    title: "Protecting Belize's Great Forest",
    subtitle: "",
    buttons: [
      { label: "Our Mission", href: "/WhoWeAre" },
      { label: "Learn More",  href: "/WhatWeDo" }
    ],
    image: home
  },
  {
    title: "Protecting Critical Ecosystems and Biodiversity",
    subtitle: "",
    buttons: [
      { label: "Get Involved", href: "/GetInvolved" },
      { label: "Our Impact",   href: "/WhatWeDo" }
    ],
    image: Cforest
  },
  {
    title: "Building Community Stewardship",
    subtitle: "",
    buttons: [
      { label: "Our People", href: "/OurPeople" },
      { label: "Learn More", href: "/WhatWeDo" }
    ],
    image: c3
  }
];

const Home = ({ setNavbarVisible }) => {
  // position 1..slides.length maps to real slides; 0 = clone of last; slides.length+1 = clone of first
  const [position, setPosition] = useState(1);
  const [transitionEnabled, setTransitionEnabled] = useState(true);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Auto-advance
  useEffect(() => {
    const timer = setInterval(() => {
      setPosition((prev) => prev + 1);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  // When we land on a clone, wait for transition then silently jump to the real slide
  useEffect(() => {
    if (position === slides.length + 1) {
      const t = setTimeout(() => {
        setTransitionEnabled(false);
        setPosition(1);
      }, 700);
      return () => clearTimeout(t);
    }
    if (position === 0) {
      const t = setTimeout(() => {
        setTransitionEnabled(false);
        setPosition(slides.length);
      }, 700);
      return () => clearTimeout(t);
    }
  }, [position]);

  // Re-enable transition after the silent jump
  useEffect(() => {
    if (!transitionEnabled) {
      const t = setTimeout(() => setTransitionEnabled(true), 50);
      return () => clearTimeout(t);
    }
  }, [transitionEnabled]);

  const dotIndex = (position - 1 + slides.length) % slides.length;
  const nextSlide = () => setPosition((prev) => prev + 1);
  const prevSlide = () => setPosition((prev) => prev - 1);

  return (
    <div className={styles.homePage}>
      {/* Hero Carousel */}
      <section className={styles.heroCarousel}>
        <div
          className={styles.carouselBackground}
          style={{ transform: `translateY(${scrollY * 0.5}px)` }}
        >
          <div
            className={styles.carouselTrack}
            style={{
              transform: `translateX(-${position * 100}%)`,
              transition: transitionEnabled ? 'transform 0.7s ease-in-out' : 'none'
            }}
          >
            {/* Clone of last slide */}
            <div className={styles.carouselSlide}>
              <img loading="lazy" src={slides[slides.length - 1].image} alt={slides[slides.length - 1].title} />
            </div>
            {slides.map((slide, index) => (
              <div key={index} className={styles.carouselSlide}>
                <img loading="lazy" src={slide.image} alt={slide.title} />
              </div>
            ))}
            {/* Clone of first slide */}
            <div className={styles.carouselSlide}>
              <img loading="lazy" src={slides[0].image} alt={slides[0].title} />
            </div>
          </div>
          <div className={styles.carouselOverlay}></div>
        </div>

        <div className={styles.carouselContent}>
          <div
            className={styles.slideContent}
            style={{ transform: `translateY(${scrollY * -0.2}px)` }}
          >
            <h1 className={styles.slideTitle}>{slides[dotIndex].title}</h1>
            <p className={styles.slideSubtitle}>{slides[dotIndex].subtitle}</p>
            <div className={styles.slideButtons}>
              <a href={slides[dotIndex].buttons[0].href} className={styles.primaryBtn}>{slides[dotIndex].buttons[0].label}</a>
              <a href={slides[dotIndex].buttons[1].href} className={styles.secondaryBtn}>{slides[dotIndex].buttons[1].label}</a>
            </div>
          </div>
        </div>

        <div className={styles.carouselDots}>
          {slides.map((_, index) => (
            <button
              key={index}
              className={`${styles.dot} ${index === dotIndex ? styles.active : ''}`}
              onClick={() => setPosition(index + 1)}
            ></button>
          ))}
        </div>

        <div className={styles.scrollHint}>
          <span></span>
        </div>

      </section>

      {/* Video Section */}
      <section className={styles.videoSection}>
        <div className={styles.container}>
          <div className={styles.videoPanel}>
          <div className={styles.videoColumns}>
            <div className={styles.videoRight}>
              <span className={styles.eyebrow}>Our Landscape</span>
              <h2>A glimpse into our landscape</h2>
              <p>Protecting 241,000 acres of the Belize Maya Forest, linked to the Rio Bravo Conservation Management Area and the greater Selva Maya, safeguards iconic wildlife, sacred Cara Blanca Pools, and the Rio Hondo watershed, while strengthening Belize's climate resilience and conservation goals.</p>
              {/* Replace Pool16 with BMFMap image once added to assets */}
              <div className={styles.mapWrap}>
                <img loading="lazy" src={HomepageVideoImg} alt="Belize Maya Forest" className={styles.mapImage} />
              </div>
            </div>
            <div className={styles.videoLeft}>
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/gU-yYppmWNM"
                title="BMFT Mission Video"
                frameBorder="0"
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className={styles.videoFrame}
              ></iframe>
            </div>
          </div>
          </div>
        </div>
      </section>

      {/* Explore Section */}
      <section className={styles.exploreSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2>Explore Our Work</h2>
            <p>Learn more about our story, conservation efforts, community partnerships, and ongoing initiatives.</p>
          </div>
          <div className={styles.newsGrid}>
            <a href="/WhatWeDo" className={styles.newsCard} style={{textDecoration:'none',color:'inherit'}}>
              <div className={styles.newsImage}>
                <img loading="lazy" src={Cforest} alt="What We Do" />
              </div>
              <div className={styles.newsContent}>
                <h3>What We Do</h3>
                <p>Explore our conservation programs, forest protection initiatives, and community engagement efforts.</p>
                <span className={styles.readMore}>Read More</span>
              </div>
            </a>

            <a href="/WhoWeAre" className={styles.newsCard} style={{textDecoration:'none',color:'inherit'}}>
              <div className={styles.newsImage}>
                <img loading="lazy" src={Pat3} alt="Who We Are" />
              </div>
              <div className={styles.newsContent}>
                <h3>Who We Are</h3>
                <p>Learn about our history, meet our team, and stewards behind the conservation efforts.</p>
                <span className={styles.readMore}>Read More</span>
              </div>
            </a>

            <a href="/GetInvolved" className={styles.newsCard} style={{textDecoration:'none',color:'inherit'}}>
              <div className={styles.newsImage}>
                <img loading="lazy" src={APpeople} alt="Get Involved" />
              </div>
              <div className={styles.newsContent}>
                <h3>Get Involved</h3>
                <p>Join our mission to protect Belize's Great Forest through volunteering, partnerships, and support.</p>
                <span className={styles.readMore}>Read More</span>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Impact Stats Section */}
      <section className={styles.impactSection} style={{backgroundImage: `url(${Cforest})`}}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 style={{color: 'white'}}>Our Impact</h2>
          </div>
          <div className={styles.impactGrid}>
            {[
              { number: "11,549 km", label: "of foot patrols" },
              { number: "8", label: "research and monitoring projects" },
              { number: "19,707", label: "trees planted" },
              { number: "15", label: "scholarship recipients" },
              { number: "10", label: "Microgrants" },
              { number: "843", label: "stakeholders engaged in outreach" },
              { number: "123", label: "youths, women and men in capacity building" },
              { number: "10", label: "stakeholder communities" },
            ].map((stat, i) => (
              <div key={i} className={styles.impactCard}>
                <span className={styles.impactNumber}>{stat.number}</span>
                <span className={styles.impactLabel}>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest News Section */}
      <section className={styles.newsSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2>Latest News</h2>
            <p>Stay informed about our conservation efforts.</p>
          </div>
          <div className={styles.newsGrid}>
            <a href="/news/ranger-station-eastern" className={styles.newsCard} style={{textDecoration:'none',color:'inherit'}}>
              <div className={styles.newsImage}>
                <img loading="lazy" src={c8} alt="Conservation Success Story" />
              </div>
              <div className={styles.newsContent}>
                <h3>New Ranger Station</h3>
                <p>BMFT opens a new ranger outpost to strengthen protection of critical wildlife corridors in the eastern section of our 241,000-acre reserve.</p>
                <span className={styles.readMore}>Read More</span>
              </div>
            </a>

            <a href="/news/biodiversity-study" className={styles.newsCard} style={{textDecoration:'none',color:'inherit'}}>
              <div className={styles.newsImage}>
                <img loading="lazy" src={fish} alt="Biodiversity Research" />
              </div>
              <div className={styles.newsContent}>
                <h3>Cara Blanca Pools Biodiversity Study Released</h3>
                <p>New research reveals incredible species diversity in our protected cenote system, including several previously undocumented aquatic species.</p>
                <span className={styles.readMore}>Read More</span>
              </div>
            </a>

            <a href="/news/community-expansion" className={styles.newsCard} style={{textDecoration:'none',color:'inherit'}}>
              <div className={styles.newsImage}>
                <img loading="lazy" src={diver2} alt="Community Partnership" />
              </div>
              <div className={styles.newsContent}>
                <h3>Community Stewardship Program Expands</h3>
                <p>BMFT partners with ten additional local communities to expand our successful environmental education and sustainable livelihood programs.</p>
                <span className={styles.readMore}>Read More</span>
              </div>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
