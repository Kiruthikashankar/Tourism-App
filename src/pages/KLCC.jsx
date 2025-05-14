import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./KLCC.css";

import img1 from "../assets/kl1.jpg";
import img2 from "../assets/kl2.jpg";
import img3 from "../assets/kl3.jpg";

const KLCC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  return (
    <div className="klcc-container">
      <h1 className="klcc-title">Explore KLCC</h1>
      <Slider {...settings} className="carousel">
        <div>
          <img src={img1} alt="KLCC 1" className="carousel-img" />
        </div>
        <div>
          <img src={img2} alt="KLCC 2" className="carousel-img" />
        </div>
        <div>
          <img src={img3} alt="KLCC 3" className="carousel-img" />
        </div>
      </Slider>

      <div className="klcc-info">
        <h2>About KLCC</h2>
        <p>
          The Kuala Lumpur City Centre (KLCC) is a stunning icon of Malaysia. 
          Home to the iconic Petronas Twin Towers, it offers everything from world-class shopping, 
          dining, to cultural experiences. Whether you're here for the view or the vibe, KLCC delivers.
        </p>

        <h3>Things To Do in KLCC</h3>
        <ul>
          <li>🌆 Visit the Observation Deck of the Twin Towers</li>
          <li>🛍️ Shop at Suria KLCC Mall</li>
          <li>🌳 Relax at KLCC Park</li>
          <li>🎨 Explore Petrosains Science Discovery Centre</li>
          <li>🖼️ Check out the Art Gallery</li>
        </ul>
      </div>
    </div>
  );
};

export default KLCC;
