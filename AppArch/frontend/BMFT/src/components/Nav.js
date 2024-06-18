import React from 'react'

const Nav = () => {
  return (
    <div>
      <header className="bg-green-500"> 
        <nav>
          <div>

          </div>
          <div>
            <ul class ="flex items-center gap-[4vw]">
            <li><a href = "/">Home</a></li>
            <li><a href = "/FAQ">What We Do</a></li>
            <li><a href = "/News">News</a></li>
            <li><a href = "/Involvement">Get Involved</a></li>
            </ul>
          </div>
        </nav>
      </header>
    </div>
  )
}

export default Nav
