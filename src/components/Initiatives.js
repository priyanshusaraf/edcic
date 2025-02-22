import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import incubationImage from "../assets/incubation_centre.jpg"; // Replace with the actual path
import liveProjectsImage from "../assets/live_projects.jpg"; // Replace with the actual path
import startupVoiceImage from "../assets/seed_stories.jpg"; // Replace with the actual path
import edfImage from "../assets/edf.jpg"; // Replace with the actual path
import envisageImage from "../assets/envisage.jpg"; // Replace with the actual path
import bizwalk from "../assets/bizwalk.jpg"; // Replace with the actual path

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
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    margin-top: 40px;

    @media (max-width: 1024px) {
      grid-template-columns: repeat(2, 1fr); /* 2 per row on tablets */
    }

    @media (max-width: 768px) {
      grid-template-columns: 1fr; /* 1 per row on mobile */
    }

    .initiative-card {
      position: relative;
      overflow: hidden;
      border-radius: 10px;
      height: 70vh; /* Makes each image 60% of the viewport height */
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
        }

        &:hover .image {
          transform: scale(1.1); /* Zoom-in effect */
        }

        .title {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          font-size: 1.5rem;
          font-weight: bold;
          text-transform: uppercase;
          text-align: center;
          max-width: 100%;
          padding: 10px 20px;
          border-radius: 8px;
        }
      }
    }
  }
`;

const Initiatives = () => {
  const initiatives = [
    {
      link: "/initiatives/incubation",
      image: incubationImage,
      title: "Incubation Centre",
    },
    {
      link: "/initiatives/live-projects",
      image: liveProjectsImage,
      title: "Live Projects",
    },
    { link: "/seed-stories", image: startupVoiceImage, title: "Seed Stories" },
    {
      link: "/initiatives/edf",
      image: edfImage,
      title: "Entrepreneurship Development Fund",
    },
    { link: "/initiatives/envisage", image: envisageImage, title: "Envisage" },
    { link: "/initiatives/bizwalk", image: bizwalk, title: "Bizwalk" },
  ];

  return (
    <InitiativesContainer>
      <h2>Our Initiatives</h2>
      <div className="initiatives-grid">
        {initiatives.map((initiative, index) => (
          <div key={index} className="initiative-card">
            <Link to={initiative.link}>
              <img
                src={initiative.image}
                alt={initiative.title}
                className="image"
              />
              <span className="title">{initiative.title}</span>
            </Link>
          </div>
        ))}
      </div>
    </InitiativesContainer>
  );
};

export default Initiatives;
