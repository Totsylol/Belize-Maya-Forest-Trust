import React from 'react';
import styles from './styles/footer.module.css';
import { Link } from 'react-router-dom';



function Footer() {
  return (
    <div className={styles.footercontainer}>
      <section className={styles.footersubscription}>
        <p className={styles.footersubscriptionheading}>
          Belize Maya Forest Trust
        </p>
        <p className={styles.footersubscriptiontext}>
        </p>
        <div className={styles.inputareas}>
          <form>
            <input
              className={styles.footerinput}
              name='email'
              type='email'
              placeholder='Email'
            />
          </form>
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
          <div className={styles.socialicons}>
            <Link
              class='social-icon-link facebook'
              to='/'
              target='_blank'
              aria-label='Facebook'
            >
              <i class='fab fa-facebook-f' />
            </Link>
            <Link
              class='social-icon-link instagram'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
            </Link>
            <Link
              class='social-icon-link youtube'
              to='/'
              target='_blank'
              aria-label='Youtube'
            >
              <i class='fab fa-youtube' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='Twitter'
            >
              <i class='fab fa-twitter' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i class='fab fa-linkedin' />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;