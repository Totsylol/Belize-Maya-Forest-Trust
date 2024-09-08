import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import styles from "../styles/login.module.css";
import { FaUser } from "react-icons/fa";
import { IoLockClosedSharp } from "react-icons/io5";
import bgVid from '../assets/bgvid.mp4';
import logo from '../assets/logo.png';
import axios from 'axios'; 

const Login = () => {
    const [username, setUsername] = useState(''); 
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const nav = useHistory();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(''); 

        try {
            const response = await axios.post('http://localhost:5001/api/login', { username, password }); // Changed email to username in the payload
            localStorage.setItem('token', response.data.token); 
            nav.push('/');
            window.location.reload();
        } catch (err) {
            console.error('Login error:', err);
        }
    };

    return (
        <div>
            <a href ='./'><img className={styles.logo} src={logo} alt="Logo"/></a>
            <video className={styles.videobg} src={bgVid} autoPlay muted loop />
            <div className={styles.wrapper}>
                <div className={styles.container}>
                    <form onSubmit={handleSubmit} style={{ maxWidth: '100vw' }}>
                        <div className={styles.header}>
                            <h1><span className={styles.h1}>Admin</span><span className={styles.h2}> Access</span></h1>
                        </div>

                        <div className={styles.inputbox}>
                            <input className={styles.input} value={username} onChange={(e) => setUsername(e.target.value)} type="text" placeholder='Username' required />
                            <FaUser className={styles.icon}/>
                        </div>

                        <div className={styles.inputbox}>
                            <input className={styles.input} value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder='Password' required />
                            <IoLockClosedSharp className={styles.icon}/>
                        </div>

                        {error && <div className={styles.error}>{error}</div>}

                        <div className={styles.forgot}>
                            <label className={styles.in}><input className={styles.in} type="checkbox"/>Remember me</label>
                            <a className={styles.a} href="./reset-password">Forgot password?</a>
                        </div>

                        <button className={styles.btn} type="submit">Sign In</button>
                        <div className={styles.register}>
                            <p className={styles.p}>First time here?<a className={styles.a2} href='./register'> Register</a></p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;
