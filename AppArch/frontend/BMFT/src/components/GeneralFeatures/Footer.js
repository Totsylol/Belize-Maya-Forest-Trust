import React from 'react';
import styles from '../styles/foot.module.css';
import FinalBMFT from '../assets/FinalBMFT.jpg';

function Footer() {
  return (
    <div className={styles.footercontainer}>
      <section className={styles.footersubscription}>
        <p className={styles.footersubscriptiontext}>
        </p>
      </section>
      <div className='footerlinks'>
        <div className={styles.footerlinkwrapper}>
          <img className={styles.FinalBMFT} src={FinalBMFT} alt="FinalBMFT" />
          <div className={styles.footerlinkitems}>
            <h2>About Us</h2>
            <a href='/sign-up'>Our Story</a>
            <a href='/protbio'>Biodiversity</a>
            <a href='/outreach'>Outreach</a>
            <a href='/agroproj'>Agriculture Program</a>
            <a href='/communitystewards'>Community Stewards</a>
          </div>
          <div className={styles.footerlinkitems}>
            <h2>Contact Us</h2>
            <a href='/'>Contact</a>
            <a href='/'>Support</a>
            <a href='/'>Donate</a>
          </div>
          <div className={styles.footerlinkitems}>
            <h2>Social Media</h2>
            <a href='mailto:info@bmft.org.bz'>Email Us</a>
            <a href='https://www.facebook.com/BelizeMayaForestTrust'>Facebook</a>
            <a href='https://www.youtube.com/channel/UCWKdyK1WxDc7nKskT_vsEeQ'>YouTube</a>
          </div>
          
          <div className={styles.inputareas}>
            <p className={styles.footersubscriptionheading}>
              Subscribe to Our Newsletter
            </p>
            <form>
              <input
                className={styles.footerinput}
                name='email'
                type='email'
                placeholder='Email'
              />
            </form>
            <button className={styles.subbutton}>
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <section className={styles.socialmedia}>
        <div className={styles.socialmediawrap}>
          <div className='footerlogo'>
            <a href='/' className={styles.sociallogo}>
              <i className='fab fa-typo3' />
            </a>
          </div>
          <small className={styles.websiterights}> ©Belize Maya Forest Trust 2020</small>
        </div>
      </section>
    </div>
  );
}

export default Footer;
