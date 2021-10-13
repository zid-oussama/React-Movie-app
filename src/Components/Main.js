import React from 'react';
import './Main.css';



export default function Main() {
  return (
    <div className="Main">
      <div className="navbar">
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/">Movies</a></li>
          <li><a href="/">Add</a></li>
          <li className='disable'><a href="/">Log In</a></li>
        </ul>
      </div>
      <div className="maintitle">
        <h1><span>W</span>ELCOME TO  MY <br /> <span>M</span>OVIE APP</h1>
        <p>U will find in here some of the best movies. <br /> Let's hope  u will enjoy it .</p>
      </div>

    </div>
  )
}
