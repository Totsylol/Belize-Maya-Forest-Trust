import React from 'react';
import styles from '../styles/foot.module.css';
import BMFTlogo from '../assets/Final BMFT.jpg';
import { FaFacebookF, FaYoutube, FaEnvelope } from 'react-icons/fa';

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
      <div className={styles.top}>

        <div className={styles.brand}>
          <img src={BMFTlogo} alt="BMFT Logo" className={styles.logo} />
          <p>Protecting 241,000 acres of Belize's Great Forest — safeguarding wildlife, watersheds, and cultural heritage for all Belizeans.</p>
        </div>

        <div className={styles.col}>
          <h4>Explore</h4>
          <a href='/WhoWeAre'>Our Story</a>
          <a href='/ProtBio'>Protecting Biodiversity</a>
          <a href='/communitystewards'>Community Stewardship</a>
          <a href='/Ourteam'>Our Team</a>
          <a href='/News'>News</a>
        </div>

        <div className={styles.col}>
          <h4>Connect</h4>
          <a href='mailto:info@bmft.org.bz'>Contact Us</a>
          <a href='/Getinvolved'>Volunteer</a>
        </div>

        <div className={styles.col}>
          <h4>Follow Us</h4>
          <a href='https://www.facebook.com/BelizeMayaForestTrust'>Facebook</a>
          <a href='https://www.youtube.com/channel/UCWKdyK1WxDc7nKskT_vsEeQ'>YouTube</a>
          <a href='mailto:info@bmft.org.bz'>Email</a>
        </div>

        <div className={styles.newsletter}>
          <h4>Stay in Touch</h4>
          <p>Subscribe to our e-newsletter for conservation updates.</p>
          <form className={styles.inputRow} onSubmit={(e) => e.preventDefault()}>
            <input type='email' placeholder='Your email' />
            <button type='submit'>Subscribe</button>
          </form>
          <div className={styles.socials}>
            <a href='https://www.facebook.com/BelizeMayaForestTrust' title='Facebook'>
              <FaFacebookF />
            </a>
            <a href='https://www.youtube.com/channel/UCWKdyK1WxDc7nKskT_vsEeQ' title='YouTube'>
              <FaYoutube />
            </a>
            <a href='mailto:info@bmft.org.bz' title='Email'>
              <FaEnvelope />
            </a>
          </div>
        </div>

      </div>

      <div className={styles.bottom}>
        <small>©Belize Maya Forest Trust 2020</small>
      </div>
      </div>
    </footer>
  );
}

export default Footer;
