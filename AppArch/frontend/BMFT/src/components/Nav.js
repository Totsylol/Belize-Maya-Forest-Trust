import React, { useEffect, useState } from 'react';
import { TfiAngleDown } from "react-icons/tfi";
import styles from "./nav.module.css"


const Nav = () => {

  return (
    <div>
      <header className={styles.header}> 
        <nav className='flex justify-between items-center w-[92%] mx-auto'>
          <div>

          </div>
          
          <div className='md:static absolute bg-green-500 md:min-h-fit min-h-[60vh left-0 top-0 md:w-auto w-full flex items-center px-5'>
            <ul className ="flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-6">
            <li><a className = "hover:text-gray-500" href = "/">Home</a></li>
            <li><a className = "hover:text-gray-500" href = "/FAQ">What We Do</a></li>
            <li><a className = "hover:text-gray-500" href = "/News">News</a></li>
            <li><a className = "hover:text-gray-500" href = "/Involvement">Get Involved</a></li>
            </ul>  
          </div> 

        </nav>
      </header>
    </div>
  )
}

export default Nav
