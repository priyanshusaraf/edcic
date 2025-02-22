import React from "react";
import "../styles/initium.css";
import initiumLogo from "../assets/initium.png";
import Stats from "../components/Stats";
//import WhatIsInitium from "../components/WhatIsInitium.js"; // Import new sections
// import RegistrationProcess from "./components/RegistrationProcess";

const Initium = () => {
  return (
    <div>
      <div className="initium__container">
        <div className="initium__top">
          <p className="initium__text-left">
            ENTREPRENEURSHIP DEVELOPMENT CELL AND INCUBATION CENTRE
          </p>
          <p className="initium__text-center">&</p>
          <p className="initium__text-right">THE PLACEMENT CELL</p>
        </div>
        <div className="initium__logo-container">
          <img src={initiumLogo} alt="Initium Logo" className="initium__logo" />
        </div>
      </div>
      <Stats />
    </div>
  );
};

export default Initium;
