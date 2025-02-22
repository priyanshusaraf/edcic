// src/components/EacBanner.js
import React from "react";
import "../styles/EacBanner.css";
import eacLogo from "../assets/eaclongblue.png"; // Update the path to your image if needed

const EacBanner = () => {
  return (
    <div className="eac-banner">
      <img
        src={eacLogo}
        alt="Entrepreneurship Awareness Camp Logo"
        className="eac-banner__logo"
      />
    </div>
  );
};

export default EacBanner;
