import React from "react";
import "../styles/EACDetails.css";

const startupBenefits = [
  "An opportunity to pitch in front of renowned investors",
  "A chance for one-on-one mentorship from industry experts",
  "Forming long-lasting connections through networking sessions",
];

const registrationCriteria = [
  "Fill the google form",
  "Get invited by Edcic after the screening process!",
];

const EACDetails = () => {
  return (
    <div className="eacDetails">
      <div className="eacDetails__section">
        <h2 className="eacDetails__title">FOR STARTUPS</h2>
        {startupBenefits.map((benefit, index) => (
          <div key={index} className="eacDetails__item">
            <span className="eacDetails__number">{index + 1}</span>
            <span className="eacDetails__text">{benefit}</span>
          </div>
        ))}
      </div>

      <div className="eacDetails__section_2">
        <h2 className="eacDetails__title_2">CRITERIA FOR REGISTRATION</h2>
        {registrationCriteria.map((criteria, index) => (
          <div key={index} className="eacDetails__item">
            <span className="eacDetails__number">{index + 1}</span>
            <span className="eacDetails__text">{criteria}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EACDetails;
