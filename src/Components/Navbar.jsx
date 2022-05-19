/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import logo from "../images/logobg.png";
import Scroll from 'react-scroll'

export default function Navbar() {
  const [nav, setNav] = useState(false)
  const Link = Scroll.Link

  const changeBackground = () => {
    if (window.scrollY >= 50) setNav(true);
    else setNav(false)
  }
  window.addEventListener('scroll', changeBackground)

  return (
    <nav className={nav ? 'nav active' : 'nav'}>
      <a href="#" className="logo">
        <img src={logo} alt="" />
      </a>
      <input type="checkbox" className="menu-btn" id="menu-btn" />
      <label className="menu-icon" for="menu-btn">
        <span className="nav-icon"> </span>
      </label>
      <ul className='menu' >
        <Link class to="home" spy={true} smooth={true} duration={1000}>
          <li> <a href='#' className='active'> Accueil </a> </li>
        </Link>
        <Link to="team" spy={true} smooth={true} duration={1000}>
          <li> <a href='#' > Notre équipe </a> </li>
        </Link>
        <Link to="about" spy={true} smooth={true} duration={1000} >
          <li> <a href='#'> à propos de nous </a> </li>
        </Link>

        <Link to="mockup" spy={true} smooth={true} duration={1000}>
          <li>
            <a href='#'> App  </a>
          </li>
        </Link>
        <Link to="coments-element" spy={true} smooth={true} duration={1000}>
          <li>
            <a href='#'> Témoignages </a>
          </li>
        </Link>
        <Link to="contact" spy={true} smooth={true} duration={1000}>
          <li> <a href='#'> Contactez-nous </a> </li>
        </Link>

      </ul>
    </nav>
  );
}
