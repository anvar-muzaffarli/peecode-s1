import React from 'react'
import Shekil from '../assets/images/logo.svg'


import { FaBars } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg">
  <div className="container">
    <a className="navbar-brand" href="#">
        <img src={Shekil} alt="" />
    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <FaBars />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">What we do</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Career</a>
        </li>

        <li class="nav-item">
          <a class="nav-link" href="#">Contact</a>
        </li>

        <li class="nav-item">
          <a class="nav-link" href="#">Blog</a>
        </li>
      
       
      </ul>
    
    </div>
  </div>
</nav>
  )
}

export default Navbar

