import React, { useState, useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import styles from "../styles/login.module.css";
import { FaUser } from "react-icons/fa";
import { IoLockClosedSharp } from "react-icons/io5";
/*import bgVid from '../assets/bgvid.mp4';*/
import logo from '../assets/logo.png';
/* <video className={styles.videobg} src={bgVid} autoPlay muted loop /> */

const Login = () => {

    const [email, setEmail] = useState('');
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const nav = useHistory();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    user_name: emailOrUserName,
                    password: password
                })
            });

            const data = await response.json();

            if (response.ok) {
                // Save the token in local storage or a context/state management
                localStorage.setItem('token', data.access_token);
                console.log('Login successful');
                nav.push('/dashboard'); // Redirect to a protected route after successful login
            } else {
                console.error('Login failed:', data.error);
                alert('Login failed. Please check your credentials.');
            }
        } catch (error) {
            console.error('Error during login:', error);
            alert('An error occurred. Please try again later.');
        }
    };

    return (
        <div>
            <a href='./'><img className={styles.logo} src={logo} alt="Logo"/></a>
            <div className={styles.wrapper}>
                <div className={styles.container}>
                    <form onSubmit={handleSubmit} style={{maxWidth: '100vw'}}>
                        <div className={styles.header}>
                            <h1><span className={styles.h1}>Admin</span><span className={styles.h2}> Access</span></h1>
                        </div>
                        <div className={styles.inputbox}>
                            <input
                                className={styles.input}
                                value={emailOrUserName}
                                onChange={(e) => setEmailOrUserName(e.target.value)}
                                type="text"
                                placeholder='Username or Email'
                                required
                            />
                            <FaUser className={styles.icon}/>
                        </div>
                        <div className={styles.inputbox}>
                            <input
                                className={styles.input}
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                type="password"
                                placeholder='Password'
                                required
                            />
                            <IoLockClosedSharp className={styles.icon}/>
                        </div>
                        <div className={styles.forgot}>
                            <label className={styles.in}><input className={styles.in} type="checkbox"/>Remember me</label>
                            <a className={styles.a} href="./reset-password">Forgot password?</a>
                        </div>
                        <button className={styles.btn} type="submit">Sign in</button>
                        <div className={styles.register}>
                            <p className={styles.p}>First time here?<a className={styles.a2} href='./register'> Register</a></p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;