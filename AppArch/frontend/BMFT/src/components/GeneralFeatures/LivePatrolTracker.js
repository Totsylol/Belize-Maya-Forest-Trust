import React, { useEffect, useState } from 'react';
import styles from '../styles/livepatroltracker.module.css';

function LivePatrolTracker() {
  const [count, setCount] = useState(1000);

  useEffect(() => {
    const end = 15000;
    const duration = 2000; 
    const stepTime = 50; 

    const stepCount = Math.ceil(duration / stepTime);
    const increment = (end - 10000) / stepCount; 

    const interval = setInterval(() => {
      setCount(prevCount => {
        if (prevCount >= end) {
          clearInterval(interval);
          return end;
        }
        return Math.ceil(prevCount + increment);
      });
    }, stepTime);

    return () => clearInterval(interval); 
  }, []);

  return (
    <div className={styles.panel}>
      <h1 className={styles.heading}>Distance Covered</h1>
      <div className={styles.counterContainer}>
        <div className={styles.dotContainer}>
          <div className={styles.outerCircle}></div>
          <div className={styles.dot}></div>
        </div>
        <div className={styles.counter}>{count.toLocaleString()} miles</div>
      </div>
    </div>
  );
}

export default LivePatrolTracker;
