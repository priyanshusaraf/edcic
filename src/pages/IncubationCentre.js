import React from "react";
import "../styles/IncubationCentre.css";
import incubation from "../assets/incubationCentre.png";
import startupProcess from "../assets/startupOnboardingProcess.png"; // Add your uploaded image path here

const IncubationCentre = () => {
  return (
    <div className="incubationCentre">
      <h1 className="incubationCentre__head">Incubation Centre</h1>
      <div className="incubationCentre__body">
        <h1 className="incubationCentre__info">
          Types of Startups Incubated By EDCIC
        </h1>
        <img src={incubation} alt="" className="incubation__imgMain" />
        <div className="incubationCentre__moreInfo">
          <div className="incubationCentre__realInfo">
            <div className="incubationCentre__card">
              <h1 className="incubationCentre__cardHead">
                Idea Stage Startup <br />
                At the idea stage, We provide startups with inclusive support in
                transforming their ideas into viable business propositions.
              </h1>
            </div>
            <div className="incubationCentre__card">
              <h1 className="incubationCentre__cardHead">
                Prototype Stage Startups <br />
                At the prototype stage, We assist startups in the patenting
                process, offer guidance on intellectual property rights, and
                protection strategies.
              </h1>
            </div>
            <div className="incubationCentre__card">
              <h1 className="incubationCentre__cardHead">
                Incubation Stage Startups <br />
                At the incubation stage, startups need to scale their
                operations. We provide them access to funding opportunities and
                business development resources.
              </h1>
            </div>
          </div>
        </div>
        <div className="incubationCentre__startupOnboarding">
          <h1 className="startupOnboarding__header">
            STARTUP ONBOARDING PROCESS
          </h1>
          {/* Add the uploaded image element here */}
          <img
            src={startupProcess}
            alt="Startup Onboarding Process"
            className="startupOnboarding__image"
          />
        </div>
      </div>
    </div>
  );
};

export default IncubationCentre;
