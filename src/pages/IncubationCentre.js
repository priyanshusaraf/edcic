import React from "react";
import "../styles/IncubationCentre.css";
import backgroundImage from "../assets/incubation_img.jpg"; // Ensure this image is placed correctly in assets
import ideaStageIcon from "../assets/ic8.jpg";
import prototypeStageIcon from "../assets/ic9.jpg";
import incubationStageIcon from "../assets/ic10.jpg";
import step1Icon from "../assets/ic1.jpg";
import step2Icon from "../assets/ic2.jpg";
import step3Icon from "../assets/ic3.jpg";
import step4Icon from "../assets/ic4.jpg";
import rhizospheriXImage from "../assets/rhizo1.jpg";
import agnikImage from "../assets/agnik1.jpg";

// Startup Stages Data
const startupStages = [
  {
    id: 1,
    title: "Idea Stage Startup",
    description:
      "At the idea stage, we provide startups with inclusive support in transforming their ideas into viable business propositions.",
    icon: ideaStageIcon,
  },
  {
    id: 2,
    title: "Prototype Stage Startups",
    description:
      "At the prototype stage, we assist startups in the patenting process, offer guidance on intellectual property rights, and protection strategies.",
    icon: prototypeStageIcon,
  },
  {
    id: 3,
    title: "Incubation Stage Startups",
    description:
      "At the incubation stage, startups need to scale their operations. We provide them access to funding opportunities and business development resources.",
    icon: incubationStageIcon,
  },
];

// Onboarding Steps Data
const onboardingSteps = [
  {
    id: 1,
    title: "Form Fill and Screening",
    description:
      "The first step in our startup onboarding process is the completion of a detailed form designed to capture essential information about the startup.",
    icon: step1Icon,
  },
  {
    id: 2,
    title: "Team Interaction",
    description:
      "Once the initial screening is completed, selected startups are invited for a one-on-one interaction with a member(s) of our incubation team.",
    icon: step2Icon,
  },
  {
    id: 3,
    title: "Pitch Deck Submission",
    description:
      "Startups are required to submit their pitch deck. The pitch deck should provide a comprehensive overview of the startup.",
    icon: step3Icon,
  },
  {
    id: 4,
    title: "MOU and Confidentiality Agreement Signing",
    description:
      "The final step in the onboarding process is the signing of a Memorandum of Understanding outlining roles and responsibilities.",
    icon: step4Icon,
  },
];

// Startups Data
const startups = [
  {
    id: 1,
    name: "RHIZOSPHERI - X",
    description: `Rhizospheri - X is a company focused on bio-based solutions to improve soil health and crop productivity through beneficial microbes. 
    The team, with expertise in microbiology, agronomy, and sustainability, is dedicated to advancing eco-friendly agriculture. Several professors 
    have provided invaluable guidance and support, ensuring the company remains at the forefront of eco-friendly agricultural innovation.

    EDCIC has been instrumental in Rhizospheri - X’s success, providing expert guidance on sustainability, research collaboration, and product development.`,
    image: rhizospheriXImage,
  },
  {
    id: 2,
    name: "AGNIK'S BIOFARMING",
    description: `Agnik focuses on empowering students and professionals with opportunities in various industries. 
    With a keen focus on networking, mentorship, and entrepreneurial learning, Agnik has been shaping the future of students entering the corporate world.`,
    image: agnikImage,
  },
];

const IncubationCentre = () => {
  return (
    <div className="incubation-centre">
      {/* Incubation Centre Banner */}
      <div
        className="incubationCentre__bg"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <p className="incubationCentre__bgText">INCUBATION CENTRE</p>
      </div>

      {/* Startup Stages Section */}
      <section className="incubation-stages">
        <h2 className="incubation-title">
          TYPES OF STARTUPS INCUBATED BY EDCIC
        </h2>
        <div className="stages-container">
          {startupStages.map((stage) => (
            <div key={stage.id} className="stage-card">
              <img src={stage.icon} alt={stage.title} className="stage-icon" />
              <h3>{stage.title}</h3>
              <p>{stage.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Onboarding Process Section */}
      <section className="onboarding-process">
        <h2 className="incubation-title">STARTUP ONBOARDING PROCESS</h2>
        <div className="onboarding-steps">
          {onboardingSteps.map((step) => (
            <div key={step.id} className="onboarding-card">
              <div className="step-number">
                <img
                  src={step.icon}
                  alt={`Step ${step.id}`}
                  className="step-icon"
                />
                <h3>STEP {step.id.toString().padStart(2, "0")}</h3>
              </div>
              <div className="step-content">
                <h4>{step.title}</h4>
                <p>{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Startups by EDCIC Section */}
      <section className="startups-section">
        <h2 className="incubation-title">STARTUPS BY EDCIC</h2>
        {startups.map((startup) => (
          <div key={startup.id} className="startup-card">
            <div className="startup-text">
              <h3>{startup.name}</h3>
              <p>{startup.description}</p>
            </div>
            <img
              src={startup.image}
              alt={startup.name}
              className="startup-image"
            />
          </div>
        ))}
      </section>
    </div>
  );
};

export default IncubationCentre;
