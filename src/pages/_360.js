import React from "react";
import "../styles/360.css";
import workshopLogo from "../assets/360logo2.png"; // Ensure this image exists
import personalFinanceImg from "../assets/edf.jpeg"; // Replace with actual image
import dhairya from "../assets/360/pageDhairyaGangwani_5.png";
import pawan from "../assets/360/pagePawanLalwani_2.png";
import shubhang from "../assets/360/pageShubhangiMadan_3.png";
import vaibhav from "../assets/360/pageVaibhavGoyal_4.png";
import neil from "../assets/360/pageNeilBorate_1.png";

const pastWorkshops = [
  {
    title: "Workshop on Personal Finance by Mr. Neil Borate",
    image: neil, // Add more images for other workshops if needed
  },
  {
    title: "Workshop on Power BI by Mr. Pavan Lalwani",
    image: pawan,
  },
  {
    title: "Workshop on LinkedIn networking by Ms. Dhairya Gangwani ",
    image: dhairya,
  },
  {
    title: "Workshop on freelancing by Ms. Shubhangi Madan",
    image: shubhang,
  },
  {
    title: "Workshop on Artificial Intelligence by Mr. Vaibhav Goyal",
    image: vaibhav,
  },
];

const Workshop360 = () => {
  return (
    <div className="workshop360__wrapper">
      {/* Section 1: Logo & Title */}
      <div className="workshop360__container">
        <div className="workshop360__content">
          <h1 className="workshop360__title">360 Degree Workshop</h1>
          <img
            src={workshopLogo}
            alt="360 Workshop Logo"
            className="workshop360__logo"
          />
        </div>
      </div>

      {/* Section 2: Description */}
      <div className="workshop360__description">
        <h2 className="workshop360__heading">What is 360 Degree Workshop?</h2>
        <p className="workshop360__text">
          <strong>
            The Entrepreneurship Development Cell, St. Xavier's College
            (Autonomous), Kolkata
          </strong>{" "}
          presents to you
          <strong> 360 Degree Workshop</strong> - a series of upskilling
          workshops. Get ready for a transformative journey!
          <br />
          <br />
          Our upcoming 360-degree workshop is a powerhouse of knowledge and
          inspiration, featuring six dynamic speaker sessions that will reshape
          your perspective and drive your success.
        </p>
      </div>

      {/* Section 3: Past Workshops */}
      <div className="workshop360__past">
        <h2 className="workshop360__pastTitle">Our Past Workshops</h2>
        <div className="workshop360__pastContainer">
          {pastWorkshops.map((workshop, index) => (
            <div key={index} className="workshop360__pastItem">
              <div className="workshop360__pastText">{workshop.title}</div>
              <img
                src={workshop.image}
                alt={workshop.title}
                className="workshop360__pastImage"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Workshop360;
