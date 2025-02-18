import React from "react";
import "../styles/Entreprise.css";
import edugraphLogo from "../assets/edugraph.jpeg"; // Replace with actual paths
import friendsFmLogo from "../assets/friends_fm_logo.webp";
import faceLogo from "../assets/face_logo.png";
import educationTreeLogo from "../assets/education_tree.avif";
import teachnookLogo from "../assets/teachnook.png";
import entreprise_logo from "../assets/entreprise_logo.png";

const Entreprise = () => {
  const redirect_to_form = () => {
    window.open("https://www.github.com", "_blank");
    // Redirects to the form page
  };
  return (
    <div className="entreprise__container">
      {/* Banner Section */}
      <section className="entreprise__banner">
        <div className="entreprise__bannerContent">
          <div className="entreprise__text">
            <h1>Entreprise</h1>
            <p>A one of a kind corporate simulation event.</p>
            <button
              className="entreprise__registerButton"
              onClick={redirect_to_form}
            >
              Register Now
            </button>
          </div>
          <img
            className="entreprise__bannerLogo"
            src={entreprise_logo}
            alt="Entreprise '24 Logo"
          />
        </div>
      </section>

      {/* About Section */}
      <section className="entreprise__about">
        <h2>What is Entreprise?</h2>
        <div className="entreprise__aboutContent">
          <p className="entreprise__textContentPara">
            Entreprise is a one-of-a-kind 2-day corporate simulation event
            organized especially for the first years of our college to showcase
            their competency while contending against those who are driven to
            reach the pinnacle. It aims to test the business acumen of the
            participants, challenge their management skills, and help them
            imbibe corporate insights that pave their future with greater
            victories to conquer. Serving as a platform to exhibit their
            potential and challenge the conventional, Entreprise tests their
            stride in the various realms of management.
          </p>
          <img
            className="entreprise__eventImage"
            src={entreprise_logo}
            alt="Entreprise Event"
          />
        </div>
      </section>

      {/* Partners Section */}
      <section className="entreprise__partners">
        <h2>Our Partners</h2>
        <div className="entreprise__partnersGrid">
          <div className="entreprise__partner">
            <img src={faceLogo} alt="Magazine Partner" />
            <p>Magazine Partner</p>
          </div>
          <div className="entreprise__partner">
            <img src={educationTreeLogo} alt="Skill Partner" />
            <p>Skill Partner</p>
          </div>
          <div className="entreprise__partner">
            <img src={edugraphLogo} alt="Outreach Partner" />
            <p>Outreach Partner</p>
          </div>
          <div className="entreprise__partner">
            <img src={friendsFmLogo} alt="Radio Partner" />
            <p>Radio Partner</p>
          </div>
          <div className="entreprise__partner">
            <img src={teachnookLogo} alt="Teaching Partner" />
            <p>Teaching Partner</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Entreprise;
