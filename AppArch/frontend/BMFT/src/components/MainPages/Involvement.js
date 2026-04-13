import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for routing
import styles from "../styles/involvment.module.css";
import Imonkey from "../assets/Imonkey.png";
import GIPanels from '../GIFeatures/GIPanels';

const Involvement = () => {
  return (
    <div className={styles.PageContainer}>
      <header className={styles.header}>
        <img src={Imonkey} alt="Header" />
        <div className={styles.titleoverlay}>
          <h1>Join Our Conservation Efforts</h1>
        </div>
      </header>
      <section className={styles.infoSection}>
        <div className={styles.infoContainer}>
          <h2>Why Your Support Matters</h2>
          <p>At the Belize Maya Forest Trust, conservation extends beyond protecting trees and wildlife. Our work strengthens the connection 
            between healthy ecosystems and resilient communities through science-based management, stewardship, and sustainable livelihood 
            initiatives. Safeguarding this landscape requires long-term commitment, strong partnerships, and the collective action of people 
            who care about the future of our planet. Your support helps transform conservation goals into tangible, measurable impact 
            on the ground.</p>
        </div>
      </section>
      <section>
        <GIPanels />
      </section>

      <section style={{padding: '2rem 4rem 3rem', textAlign: 'center', borderTop: '1px solid #eee'}}>
        <h2 style={{fontSize: '1.6rem', marginBottom: '1rem', color: '#2d3436'}}>We Want to Hear From You</h2>
        <p style={{fontSize: '1rem', color: '#555', marginBottom: '1.5rem', maxWidth: '600px', margin: '0 auto 1.5rem', lineHeight: '1.7'}}>
          Your feedback helps us improve our work and better serve our communities and partners.
        </p>
        <div style={{display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap'}}>
          <a
            href="/contact"
            style={{
              display: 'inline-block',
              backgroundColor: '#52c742',
              color: '#fff',
              padding: '0.65rem 1.8rem',
              borderRadius: '4px',
              textDecoration: 'none',
              fontSize: '1rem',
              fontWeight: '600',
              boxShadow: '0 4px 8px rgba(0,0,0,0.15)',
            }}
          >
            Contact Us
          </a>
          <a
            href="/contact#feedback"
            style={{
              display: 'inline-block',
              backgroundColor: '#0099c4',
              color: '#fff',
              padding: '0.65rem 1.8rem',
              borderRadius: '4px',
              textDecoration: 'none',
              fontSize: '1rem',
              fontWeight: '600',
              boxShadow: '0 4px 8px rgba(0,0,0,0.15)',
            }}
          >
            Share Your Feedback
          </a>
        </div>
      </section>
    </div>
  );
};

export default Involvement;
