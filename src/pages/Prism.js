import React from "react";
import prismLogo from "../assets/prism.png"; // Update with actual image path
import prismLogo2 from "../assets/prism2.png"; // Update with actual image path
import faceLogo from "../assets/face_logo.png"; // Replace with actual paths
import caMonkLogo from "../assets/ca_monk.jpeg";
import edugraphLogo from "../assets/edugraph.jpeg";
import friendsFmLogo from "../assets/friends_fm_logo.webp";
import juiceologyLogo from "../assets/juiceology.png";
import balajiLogo from "../assets/balaji.png";
import aipLogo from "../assets/aip.jpg";
import "../styles/Prism.css";

const Prism = () => {
  return (
    <div className="prism__container">
      {/* Banner Section */}
      <section className="prism__banner">
        <div className="prism__bannerContent">
          <div className="prism__text">
            <h1>PRISM</h1>
            <p>A one of a kind corporate simulation event.</p>
            <button className="prism__registerButton" disabled>
              Register Now
            </button>
          </div>
          <img
            className="prism__bannerLogo"
            src={prismLogo}
            alt="Prism '24 Logo"
          />
        </div>
      </section>

      {/* About Section */}
      <section className="prism__about">
        <h2>What is Prism?</h2>
        <div className="prism__aboutContent">
          <p className="prism__textContentPara">
            Prism is a one-of-a-kind 2-day corporate simulation event organized
            especially for the first years of our college to showcase their
            competency while contending against those who are driven to reach
            the pinnacle. It aims to test the business acumen of the
            participants, challenge their management skills, and help them
            imbibe corporate insights that pave their future with greater
            victories to conquer. Serving as a platform to exhibit their
            potential and challenge the conventional, Prism tests their stride
            in the various realms of management.
          </p>
          <img
            className="prism__eventImage"
            src={prismLogo2}
            alt="Prism Event"
          />
        </div>
      </section>

      {/* Partners Section */}
      <section className="prism__partners">
        <h2>Our Partners</h2>
        <div className="prism__partnersGrid">
          <div className="prism__partner">
            <img src={faceLogo} alt="Magazine Partner" />
            <p>Magazine Partner</p>
          </div>
          <div className="prism__partner">
            <img src={caMonkLogo} alt="Skill Partner" />
            <p>Skill Partner</p>
          </div>
          <div className="prism__partner">
            <img src={edugraphLogo} alt="Outreach Partner" />
            <p>Outreach Partner</p>
          </div>
          <div className="prism__partner">
            <img src={friendsFmLogo} alt="Radio Partner" />
            <p>Radio Partner</p>
          </div>
          <div className="prism__partner">
            <img src={juiceologyLogo} alt="Food Partner" />
            <p>Food Partner</p>
          </div>
          <div className="prism__partner">
            <img src={balajiLogo} alt="Education Partner" />
            <p>Education Partner</p>
          </div>
          <div className="prism__partner">
            <img src={aipLogo} alt="Event Partner" />
            <p>Event Partner</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Prism;
