import React from "react";
import "react-slideshow-image/dist/styles.css";
import { Slide } from "react-slideshow-image";
import img1 from "../images/slide1.png";
import img2 from "../images/slide2.png";
import img3 from "../images/slide3.png";
import { Element } from "react-scroll";

export default function presentation() {
  const proprietes = {
    duration: 2500,
    transitionDuration: 500,
    infinite: true,
    arrows: true,
  };
  return (
    <Element id="mockup" name="send-destination">
      <div id="slide-container" className="slideContainer">
        <h1> UI presentation </h1>
        <p>
          Exercitation aliqua nostrud magna minim eu tempor culpa dolor
          cupidatat enim consequat laborum.
        </p>
        <Slide {...proprietes}>
          <div className="each-slide">
            <div className="image-container">
              <img src={img1} alt="slide1" />
            </div>
          </div>
          <div className="each-slide">
            <div className="image-container">
              <img src={img2} alt="slide1" />
            </div>
          </div>
          <div className="each-slide">
            <div className="image-container">
              <img src={img3} alt="slide1" />
            </div>
          </div>
        </Slide>
      </div>
    </Element>
  );
}
