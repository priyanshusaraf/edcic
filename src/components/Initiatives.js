import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import incubationImage from "../assets/incubation.jpeg"; // Replace with the actual path
import liveProjectsImage from "../assets/live-projects.jpeg"; // Replace with the actual path
import startupVoiceImage from "../assets/startup-voice.jpeg"; // Replace with the actual path
import edfImage from "../assets/edf.jpeg"; // Replace with the actual path

const InitiativesContainer = styled.div`
  text-align: center;
  background-color: #001d4a; /* Dark blue background */
  color: #ffffff;
  padding: 50px 20px;

  h2 {
    font-size: 2.5rem;
    margin-bottom: 20px;
    font-weight: bold;
  }

  .initiatives-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
    margin-top: 40px;

    @media (max-width: 1024px) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 768px) {
      grid-template-columns: 1fr;
    }

    .initiative-card {
      position: relative;
      overflow: hidden;
      border-radius: 10px;
      height: 70vh; /* Makes each image 70% of the viewport height */
      transition: transform 0.3s ease, box-shadow 0.3s ease;

      &:hover {
        transform: translateY(-10px);
        box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.2);
      }

      a {
        display: block;
        width: 100%;
        height: 100%;
        text-decoration: none;
        color: #ffffff;

        .image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s ease;
          filter: brightness(0.6) sepia(1) hue-rotate(230deg); /* Adds a purple tint */
        }

        &:hover .image {
          transform: scale(1.1); /* Zoom-in effect */
        }

        .title {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%) rotate(-90deg); /* Rotate text by -90 degrees */
          white-space: nowrap; /* Prevent text wrapping */
          font-size: 1.2rem;
          font-weight: bold;
          text-transform: uppercase;
          text-align: center;
          max-width: 100%;
        }
      }
    }
  }
`;

const Initiatives = () => {
  return (
    <InitiativesContainer>
      <h2>Our Initiatives</h2>
      <div className="initiatives-grid">
        <div className="initiative-card">
          <Link to="/initiatives/incubation">
            <img
              src={incubationImage}
              alt="Incubation Centre"
              className="image"
            />
            <span className="title">Incubation Centre</span>
          </Link>
        </div>
        <div className="initiative-card">
          <Link to="/initiatives/live-projects">
            <img
              src={liveProjectsImage}
              alt="Live Projects"
              className="image"
            />
            <span className="title">Live Projects</span>
          </Link>
        </div>
        <div className="initiative-card">
          <Link to="/seed-stories">
            <img
              src={startupVoiceImage}
              alt="Start Up Voice"
              className="image"
            />
            <span className="title">Seed Stories</span>
          </Link>
        </div>
        <div className="initiative-card">
          <Link to="/initiatives/edf">
            <img
              src={edfImage}
              alt="Entrepreneurship Development Fund"
              className="image"
            />
            <span className="title">Entrepreneurship Development Fund</span>
          </Link>
        </div>
      </div>
    </InitiativesContainer>
  );
};

export default Initiatives;
