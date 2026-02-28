import React from 'react';
import styles from '../styles/developers.module.css';
import tracks from '../assets/tracks.jpg';
const Developers = () => {
  return (
    <div className={styles.container}>
      <img src={tracks} alt="Developers" className={styles.image} />
      <div className={styles.description}>
        <h2>The Developers</h2>
        <p>Hey! We are the developers of this website. Jonah is a computer engineering major at the University of Maryland, and Ivan is a computer science major at Emory University. When we're not busy coding, you can find us on epic hiking adventures—just trying to figure out how to debug nature! We like to think of ourselves as 'full-stack adventurers': climbing mountains by day and scaling code by night. If you spot us in the wild, be sure to say hi (or at least don't trip over the trail while we’re too busy debugging our GPS). Enjoy our site, and remember: if it crashes, it’s probably just a ‘wildlife encounter’! </p>
      </div>
    </div>
  );
};

export default Developers;
