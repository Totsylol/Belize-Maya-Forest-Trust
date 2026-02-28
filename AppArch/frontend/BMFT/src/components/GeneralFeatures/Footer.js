import React from 'react';
import styles from '../styles/foot.module.css';
import BMFTlogo from '../assets/BMFTlogo.jpg';
import Logout from '../API/Logout';

function Footer() {
  const token = localStorage.getItem('token');

  return (
    <div className={styles.footercontainer}>
      <section className={styles.footersubscription}>
        <p className={styles.footersubscriptiontext}>
        </p>
      </section>
      <div className='footerlinks'>
        <div className={styles.footerlinkwrapper}>
          <img className={styles.BMFTlogo} src={BMFTlogo} alt="BMFT Logo" />
          <div className={styles.footerlinkitems}>
            <h2>Explore</h2>
            <a href='/whoweare'>Our Story</a>
            <a href='/protbio'>Protecting Biodiversity</a>
            <a href='/communitystewards'>Community Stewardship</a>
            <a href='/ourpeople'>Our Team</a>
            <a href='/news'>News</a>
          </div>
          <div className={styles.footerlinkitems}>
            <h2>Connect</h2>
            <a href='/whatwedo'>Contact Us</a>
            <a href='/news'>Volunteer</a>
            <a href='/ourpeople'>FAQ</a>
          </div>
          <div className={styles.footerlinkitems}>
            <h2>Social Media</h2>
            <a href='mailto:info@bmft.org.bz'>Email Us</a>
            <a href='https://www.facebook.com/BelizeMayaForestTrust'>Facebook</a>
            <a href='https://www.youtube.com/channel/UCWKdyK1WxDc7nKskT_vsEeQ'>YouTube</a>
          </div>
          
          <div className={styles.inputareas}>
            <p className={styles.footersubscriptionheading}>
              Subscribe to Our E-Newsletter
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
            <div>
            {token ? (
            <Logout/>):(
            <button className={styles.btnLogin}>
              <a href = "/login">Admin Access</a>
            </button>
              )}
            </div>
           
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
