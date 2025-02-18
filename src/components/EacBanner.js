// src/components/EacBanner.js
import React from "react";
import "../styles/EacBanner.css";
import eacLogo from "../assets/eac.jpeg"; // Update the path to your image if needed

const EacBanner = () => {
  return (
    <div className="eac-banner">
      <img
        src={eacLogo}
        alt="Entrepreneurship Awareness Camp Logo"
        className="eac-banner__logo"
      />
      <h1 className="eac-banner__title">ENTREPRENEURSHIP AWARENESS CAMP</h1>
    </div>
  );
};

export default EacBanner;
