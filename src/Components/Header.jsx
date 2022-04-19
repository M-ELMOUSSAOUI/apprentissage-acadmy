import React from "react";
import { Element } from "react-scroll";
import Navbar from "./Navbar";

export default function Header() {
  return (
    <Element id='home' name='send-destination'>
    <div id="main">
      <Navbar />
      <div className="name">
        <h1>
          LEARNING <br /> <span> ON YOUR COMPUTER </span>
        </h1>
        <p className='details'> Cillum nulla adipisicing labore id est excepteur et laboris. Ut culpa quis esse qui in tempor nisi aliquip ea. Aliquip fugiat voluptate non amet consectetur incididunt cillum incididunt dolor. Sit commodo mollit sunt anim officia ea fugiat. Labore fugiat mollit dolore minim pariatur nisi id eiusmod ut non proident qui. Laborum adipisicing culpa consectetur commodo voluptate ea adipisicing laboris et magna est ut quis. </p>
        <a href='www.google.com' className='cv-btn'> Télécharger  </a>
      </div>
    </div>
    </Element>

  );
}
