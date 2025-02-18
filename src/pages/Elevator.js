import React from "react";
import "../styles/elevator.css";
import networkingIcon from "../assets/networking.jpg";
import prizesIcon from "../assets/prizes.png";
import mentoringIcon from "../assets/mentoring.jpeg";
import workshopsIcon from "../assets/workshops.jpg";
import fundraisingIcon from "../assets/fundraising.webp";
import benefitsIcon from "../assets/benefits.png";

const ElevatorInfo = () => {
  return (
    <div className="elevatorInfo__container">
      <div className="elevatorInfo__section">
        <h2 className="elevatorInfo__title">What is Elevator?</h2>
        <p className="elevatorInfo__description">
          The Idea Expo is a National Level Business Plan Competition organized
          by the Entrepreneurship Development Cell and Incubation Centre, St.
          Xavier's College (Autonomous), Kolkata.
          <br />
          In Elevator 2024, aspiring entrepreneurs have an opportunity to
          showcase their innovative ideas. It serves as a catalyst providing
          budding entrepreneurs with the tools, resources, and mentorship they
          need to transform their visionary concepts into tangible realities.
        </p>
      </div>

      <hr className="elevatorInfo__divider" />

      <div className="elevatorInfo__section">
        <h2 className="elevatorInfo__title">Why Elevator?</h2>
        <div className="elevatorInfo__grid">
          <div className="elevatorInfo__item">
            <img
              src={networkingIcon}
              alt="Networking"
              className="elevatorInfo__icon"
            />
            <p>Networking</p>
          </div>
          <div className="elevatorInfo__item">
            <img src={prizesIcon} alt="Prizes" className="elevatorInfo__icon" />
            <p>Prizes</p>
          </div>
          <div className="elevatorInfo__item">
            <img
              src={mentoringIcon}
              alt="Mentoring"
              className="elevatorInfo__icon"
            />
            <p>Mentoring</p>
          </div>
          <div className="elevatorInfo__item">
            <img
              src={workshopsIcon}
              alt="Workshops"
              className="elevatorInfo__icon"
            />
            <p>Workshops</p>
          </div>
          <div className="elevatorInfo__item">
            <img
              src={fundraisingIcon}
              alt="Fundraising"
              className="elevatorInfo__icon"
            />
            <p>Fundraising</p>
          </div>
          <div className="elevatorInfo__item">
            <img
              src={benefitsIcon}
              alt="Benefits"
              className="elevatorInfo__icon"
            />
            <p>Benefits</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ElevatorInfo;
