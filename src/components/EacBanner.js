import React from "react";
import "../styles/EacBanner.css";
import eacBg from "../assets/eacBg.png"; // Ensure this image is placed correctly in assets

const EACBanner = () => {
  return (
    <div className="eacBanner">
      <img
        src={eacBg}
        alt="Entrepreneurship Awareness Camp"
        className="eacBanner__image"
      />
      <div className="eacBanner__overlay">
        <p className="eacBanner__subtitle">EDCIC'S Flagship Event</p>
        <h1 className="eacBanner__title">ENTREPRENEURSHIP AWARENESS CAMP</h1>
        <p className="eacBanner__location">St. Xavier’s College, Kolkata</p>
      </div>
    </div>
  );
};

export default EACBanner;
