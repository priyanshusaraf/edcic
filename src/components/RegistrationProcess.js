import React from "react";
import "../styles/registrationProcess.css";
import step1 from "../assets/step1.png";
import step2 from "../assets/step2.png";
import step3 from "../assets/step3.png";
import step4 from "../assets/step4.png";
import step5 from "../assets/step5.png";

const RegistrationProcess = () => {
  return (
    <div className="registration__container">
      <h2 className="registration__title">Registration Process</h2>
      <div className="registration__steps">
        <div className="registration__step">
          <img src={step1} alt="Step 1" className="registration__icon" />
          <p>
            Register for the CV writing and "How to crack an Interview"
            workshops
          </p>
        </div>
        <div className="registration__step">
          <img src={step2} alt="Step 2" className="registration__icon" />
          <p>Go through the company brochure</p>
        </div>
        <div className="registration__step">
          <img src={step3} alt="Step 3" className="registration__icon" />
          <p>Select your top 3 companies and fill the registration form</p>
        </div>
        <div className="registration__step">
          <img src={step4} alt="Step 4" className="registration__icon" />
          <p>If selected, appear for the interview</p>
        </div>
        <div className="registration__step">
          <img src={step5} alt="Step 5" className="registration__icon" />
          <p>Check your inbox</p>
        </div>
      </div>
    </div>
  );
};

export default RegistrationProcess;
