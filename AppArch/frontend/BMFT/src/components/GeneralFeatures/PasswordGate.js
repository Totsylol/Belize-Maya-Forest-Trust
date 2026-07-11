import React, { useState } from 'react';
import logo from '../assets/logo.png';

// NOTE: This is a lightweight viewing gate, NOT strong security.
// The password lives in REACT_APP_SITE_PASSWORD (set in Vercel / .env.local),
// but because this is a client-side check, the value ships in the browser
// bundle and a technical visitor could bypass it. It only keeps casual
// viewers out while the site is being reviewed.
const SITE_PASSWORD = process.env.REACT_APP_SITE_PASSWORD;
const STORAGE_KEY = 'site_access';

function PasswordGate({ children }) {
  const [authed, setAuthed] = useState(
    () => sessionStorage.getItem(STORAGE_KEY) === 'granted'
  );
  const [value, setValue] = useState('');
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (SITE_PASSWORD && value === SITE_PASSWORD) {
      sessionStorage.setItem(STORAGE_KEY, 'granted');
      setAuthed(true);
      setError(false);
    } else {
      setError(true);
    }
  };

  if (authed) {
    return children;
  }

  return (
    <div style={styles.overlay}>
      <form style={styles.card} onSubmit={handleSubmit}>
        <img src={logo} alt="Belize Maya Forest Trust" style={styles.logo} />
        <h1 style={styles.heading}>This site is private</h1>
        <p style={styles.subtext}>Enter the password to continue.</p>
        <input
          type="password"
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
            setError(false);
          }}
          placeholder="Password"
          autoFocus
          style={styles.input}
        />
        {error && <p style={styles.error}>Incorrect password. Please try again.</p>}
        <button type="submit" style={styles.button}>Enter</button>
      </form>
    </div>
  );
}

const styles = {
  overlay: {
    position: 'fixed',
    inset: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: '#0f2417',
    padding: '20px',
    zIndex: 9999,
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    maxWidth: '360px',
    background: '#ffffff',
    borderRadius: '12px',
    padding: '40px 32px',
    boxShadow: '0 10px 40px rgba(0, 0, 0, 0.3)',
    textAlign: 'center',
  },
  logo: {
    width: '90px',
    height: 'auto',
    marginBottom: '20px',
  },
  heading: {
    fontSize: '1.5rem',
    color: '#0f2417',
    margin: '0 0 8px',
  },
  subtext: {
    fontSize: '0.95rem',
    color: '#555',
    margin: '0 0 24px',
  },
  input: {
    width: '100%',
    boxSizing: 'border-box',
    padding: '12px 14px',
    fontSize: '1rem',
    border: '1px solid #ccc',
    borderRadius: '8px',
    marginBottom: '12px',
    outline: 'none',
  },
  error: {
    color: '#c0392b',
    fontSize: '0.85rem',
    margin: '0 0 12px',
  },
  button: {
    width: '100%',
    padding: '12px',
    fontSize: '1rem',
    fontWeight: 600,
    color: '#ffffff',
    background: '#52c742',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
  },
};

export default PasswordGate;
