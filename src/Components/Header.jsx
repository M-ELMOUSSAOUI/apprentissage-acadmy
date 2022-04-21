import React from "react";
import { Element } from "react-scroll";
import Navbar from "./Navbar";
import Code from '../images/frame.png'
export default function Header() {
  return (
    <Element id='home' name='send-destination'>
    <div id="main">
      <Navbar />
      <div className="name">
        <h1>
        apprendre <br /> <span>sur votre mobile </span>
        </h1>
        <p className='details'> L’objectif d’Apprentissage Academy est de redonner confiance à l’élève en lui montrant qu’il est capable de réussir. Nous devons connaître la personnalité et les objectifs de chaque élève pour adapter nos solutions pédagogiques et le valoriser au mieux.</p>
        <a href='https://play.google.com/store/apps/details?id=com.us.apprentissageacademy' className='cv-btn'> Télécharger  </a>
        <div className='code-container' >
          <h2> OU scannez le code  </h2>
          <img src={Code} alt='qrCode' />
        </div>
      </div>
    </div>
    </Element>

  );
}
