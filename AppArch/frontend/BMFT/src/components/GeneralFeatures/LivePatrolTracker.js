import React, { useEffect, useState } from 'react';

function LivePatrolTracker() {
  const [count, setCount] = useState(10000);

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


  const containerStyle = {
    textAlign: 'center',
    fontFamily: 'Arial, sans-serif',
  };

  const headingStyle = {
    fontSize: '24px',
    fontWeight: 'normal',
  };

  const counterContainerStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '48px',
    fontWeight: 'bold',
    color: '#52c742',
    marginTop: '20px',
    animation: 'countAnimation 2s ease-in-out',
  };

  const counterStyle = {
    marginLeft: '10px', 
  };

  const dotStyle = {
    width: '10px',
    height: '10px',
    borderRadius: '50%',
    backgroundColor: 'red',
    marginRight: '10px', 
  };

  const keyframesStyle = `
    @keyframes countAnimation {
      from {
        opacity: 0;
        transform: scale(0.8);
      }
      to {
        opacity: 1;
        transform: scale(1);
      }
    }
  `;

 
  useEffect(() => {
    const styleSheet = document.createElement('style');
    styleSheet.type = 'text/css';
    styleSheet.innerText = keyframesStyle;
    document.head.appendChild(styleSheet);
    return () => document.head.removeChild(styleSheet);
  }, []);

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>Live Patrol Distance Covered</h1>
      <div style={counterContainerStyle}>
        <div style={dotStyle}></div>
        <div style={counterStyle}>{count.toLocaleString()} miles</div>
      </div>
    </div>
  );
}

export default LivePatrolTracker;
