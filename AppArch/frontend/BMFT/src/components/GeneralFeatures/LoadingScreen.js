import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import styles from '../styles/loading.module.css';
import logo from '../assets/logo.png';

const MIN_DISPLAY = 1400; // always show for at least this long
const FADE_DURATION = 400; // fade-out duration (matches CSS transition)

function LoadingScreen() {
  const location = useLocation();
  const [visible, setVisible] = useState(true);
  const [fadingOut, setFadingOut] = useState(false);

  useEffect(() => {
    setVisible(true);
    setFadingOut(false);

    const start = Date.now();

    const finish = () => {
      const elapsed = Date.now() - start;
      const remaining = Math.max(0, MIN_DISPLAY - elapsed);

      setTimeout(() => {
        setFadingOut(true);
        setTimeout(() => setVisible(false), FADE_DURATION);
      }, remaining);
    };

    // Trigger finish once the page has painted
    if (document.readyState === 'complete') {
      finish();
    } else {
      window.addEventListener('load', finish, { once: true });
    }

    return () => window.removeEventListener('load', finish);
  }, [location.pathname]);

  if (!visible) return null;

  return (
    <div className={`${styles.overlay} ${fadingOut ? styles.fadeOut : ''}`}>
      <div className={styles.spinner}>
        <img src={logo} alt="Loading" className={styles.paw} />
      </div>
    </div>
  );
}

export default LoadingScreen;
