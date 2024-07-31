import React from 'react';
import styles from './styles/foot.module.css';
import { Link } from 'react-router-dom';
import FinalBMFT from './assets/FinalBMFT.jpg';


function Footer() {
  return (
    
    <div className={styles.footercontainer}>
      <section className={styles.footersubscription}>
        <p className={styles.footersubscriptionheading}>
        Subscribe to Our Newsletter
        </p>
        <p className={styles.footersubscriptiontext}>
        </p>
        <img className={styles.FinalBMFT} src={FinalBMFT}/>
        <div className={styles.inputareas}>
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
      </section>
      <div class='footerlinks'>
        <div className={styles.footerlinkwrapper}>
          <div className={styles.footerlinkitems}>
            <h2>About Us</h2>
            <Link to='/sign-up'>Our Story</Link>
            <Link to='/'>Biodiversity</Link>
            <Link to='/'>Cultural Heritage</Link>
            <Link to='/'>Conerservation Targets</Link>
            <Link to='/'>Threats</Link>
          </div>
          <div class={styles.footerlinkitems}>
            <h2>Contact Us</h2>
            <Link to='/'>Contact</Link>
            <Link to='/'>Support</Link>
            <Link to='/'>Donate</Link>
            <Link to='/'></Link>
          </div>
          <div class={styles.footerlinkitems}>
            <h2>Social Media</h2>
            <Link to='/'>Email Us</Link>
            <Link to='/'>Facebook</Link>
            <Link to='/'>Youtube</Link>
            
            
          </div>
        </div>
      </div>
      <section className={styles.socialmedia}>
        <div className={styles.socialmediawrap}>
          <div class='footerlogo'>
            <Link to='/' className={styles.sociallogo}>
              <i class='fab fa-typo3' />
            </Link>
          </div>
          <small className={styles.websiterights}> ©Belize Maya Forest Trust 2020</small>
          
          
        </div>
      </section>
    </div>
  );
}

export default Footer;