import React, { useState, useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import styles from "../styles/login.module.css";
import { FaUser } from "react-icons/fa";
import { IoLockClosedSharp } from "react-icons/io5";
import bgVid from '../assets/bgvid.mp4';
import logo from '../assets/logo.png';


const Login = () => {

    const [email, setEmail] = useState('');
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const nav = useHistory();

  return (
    <div>
        
          <video className={styles.videobg} src={bgVid} autoPlay muted loop />
          <a href ='./'><img className={styles.logo} src={logo}/></a>

          <div className={styles.wrapper}>
              <div className={styles.container}>
                  <form action="" style={{maxWidth: '100vw'}}> 
                      <div className={styles.header}> 
                          <h1><span className={styles.h1}>Admin</span><span className={styles.h2}> Access</span></h1>
                      </div>
          
                      <div className={styles.inputbox}> 
                          <input className ={styles.input} value={email || userName} onChange={(e) => setEmail(e.target.value) || setUserName(e.target.value)} type="text" placeholder='Username' required/> 
                          <FaUser className={styles.icon}/>
                      </div>
          
                      <div className={styles.inputbox}> 
                          <input className ={styles.input} value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder='Password' required/> 
                          <IoLockClosedSharp className={styles.icon}/>
                      </div>
          
                      <div className={styles.forgot}> 
                          <label className={styles.in}><input className={styles.in} type="checkbox"/>Remember me</label>
                          <a className ={styles.a} href="./reset-password">Forgot password?</a>
                      </div>
          
                      <button className={styles.btn} type="submit">sign in</button>
                      <div className={styles.register}>
                          <p className={styles.p}>First time here?<a className ={styles.a2} href='./register'> Register</a></p>
                      </div>
                  </form>
              </div>
          </div>
    </div>
  )
}

export default Login
