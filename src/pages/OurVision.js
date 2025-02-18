import React from "react";
import "../styles/OurVision.css";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const OurVision = () => {
  return (
    <div className="our-vision-container">
      {/* Vision Section */}
      <div className="vision-section">
        <h2>OUR VISION</h2>
        <p>
          Entrepreneurs have a clear vision. These are the thinkers, innovators,
          the action takers who change society for a better tomorrow. The vision
          of E-Cell IIT Bombay is to enable these action-takers to efficiently
          traverse their road to an enterprise by giving them exposure,
          mentorship, network, funding opportunities, and wisdom to turn their
          dreams into reality.
        </p>
      </div>

      {/* Reach Section */}
      <div className="reach-section">
        <h2>OUR REACH</h2>
        <div className="reach-icons">
          <div className="reach-card">
            <FaFacebookF className="reach-icon" />
            <h3>400K +</h3>
            <p>FOLLOWERS</p>
          </div>
          <div className="reach-card">
            <FaInstagram className="reach-icon" />
            <h3>50,000 +</h3>
            <p>FOLLOWERS</p>
          </div>
          <div className="reach-card">
            <FaLinkedinIn className="reach-icon" />
            <h3>45,000 +</h3>
            <p>FOLLOWERS</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurVision;
