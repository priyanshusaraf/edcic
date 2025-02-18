import React from "react";
import "../styles/whatIsInitium.css";
import img1 from "../assets/initium1.png";
import img2 from "../assets/initium2.png";
import img3 from "../assets/initium3.png";
import img4 from "../assets/initium4.png";
import img5 from "../assets/initium5.png";
import img6 from "../assets/initium6.png";

const WhatIsInitium = () => {
  return (
    <div className="whatIsInitium__container">
      <h2 className="whatIsInitium__title">What is Initium?</h2>
      <div className="whatIsInitium__content">
        <div className="whatIsInitium__images">
          <img
            src={img1}
            alt="Initium Event"
            className="whatIsInitium__image"
          />
          <img
            src={img2}
            alt="Initium Event"
            className="whatIsInitium__image"
          />
          <img
            src={img3}
            alt="Initium Event"
            className="whatIsInitium__image"
          />
          <img
            src={img4}
            alt="Initium Event"
            className="whatIsInitium__image"
          />
          <img
            src={img5}
            alt="Initium Event"
            className="whatIsInitium__image"
          />
          <img
            src={img6}
            alt="Initium Event"
            className="whatIsInitium__image"
          />
        </div>
        <p className="whatIsInitium__text">
          The Entrepreneurship Development Cell in collaboration with the
          Placement Cell brings enormous opportunities to students of St.
          Xavier’s College (Autonomous), Kolkata with Initium: The Internship
          Exposition. It gives aspiring students an opportunity to work as
          interns in rising startups and established companies across the
          country. It opens up doors for first-hand learning, professional
          training, and getting a taste of the startup culture before stepping
          into it.
        </p>
      </div>
    </div>
  );
};

export default WhatIsInitium;
