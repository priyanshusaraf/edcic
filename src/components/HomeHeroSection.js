import React from "react";
import styled from "styled-components";
import heroImage from "../assets/edcic_team.jpeg";
import cloudImage from "../assets/cloud.png";

const HeroSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 100vh;
  color: #fff;
  position: relative;
  overflow: hidden;
  padding: 0 20px;

  /* Background */
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(rgba(0, 0, 128, 0.6), rgba(0, 0, 128, 0.6)),
      url(${heroImage}) no-repeat center center/cover;
    z-index: -1;
  }

  /* Hero Text Styling */
  h1 {
    font-size: 3.5rem;
    font-weight: bold;
    margin-bottom: 20px;
    line-height: 1.2;
    max-width: 900px;
  }

  p {
    font-size: 1.2rem;
    max-width: 800px;
    line-height: 1.6;
    margin-bottom: 40px;
  }

  /* Navigation Links */
  .cta-links {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 15px;
    margin-bottom: 40px;

    a {
      text-decoration: none;
      color: #fff;
      font-size: 1rem;
      font-weight: bold;
      padding: 12px 20px;
      border: 2px solid #fff;
      border-radius: 30px;
      transition: background 0.3s ease;
      text-align: center;
    }

    a:hover {
      background: #fff;
      color: #000;
    }
  }

  /* Button */
  .know-more-btn {
    padding: 12px 25px;
    background: #fff;
    color: #000;
    font-size: 1rem;
    font-weight: bold;
    border: none;
    border-radius: 30px;
    cursor: pointer;
    transition: background 0.3s ease;
  }

  .know-more-btn:hover {
    background: #000;
    color: #fff;
  }

  /* Cloud Overlay */
  .cloud-overlay {
    position: absolute;
    top: 50%; /* Adjust to fine-tune positioning */
    left: 8%; /* Adjust to point at the right person */
    transform: translate(-50%, -50%);
    display: flex;
    align-items: center;
    gap: 10px;
    scale: 1.8;
  }

  .cloud {
    width: 120px;
    opacity: 0.9;
  }

  .cloud-text {
    font-size: 14px;
    font-weight: bold;
    color: black;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  /* Responsive Design */
  @media (max-width: 1024px) {
    h1 {
      font-size: 3rem;
    }

    p {
      font-size: 1.1rem;
    }

    .cta-links {
      gap: 10px;
    }

    .know-more-btn {
      font-size: 0.95rem;
      padding: 10px 20px;
    }
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 2.5rem;
    }

    p {
      font-size: 1rem;
    }

    .cta-links {
      flex-direction: column;
      align-items: center;
      width: 100%;
    }

    .cta-links a {
      width: 100%;
      max-width: 250px;
      padding: 12px 20px;
    }

    .know-more-btn {
      font-size: 0.9rem;
      padding: 10px 18px;
      width: 100%;
      max-width: 250px;
    }
  }

  @media (max-width: 480px) {
    h1 {
      font-size: 2rem;
    }

    p {
      font-size: 0.95rem;
    }

    .cta-links {
      flex-direction: column;
      align-items: center;
      width: 100%;
    }

    .cta-links a {
      font-size: 0.9rem;
      padding: 10px 16px;
      width: 100%;
      max-width: 250px;
    }

    .know-more-btn {
      font-size: 0.85rem;
      padding: 10px 16px;
      width: 100%;
      max-width: 250px;
    }
  }
`;

const HomeHeroSection = () => {
  return (
    <HeroSection>
      <h1>Entrepreneurship Development Cell and Incubation Centre</h1>
      <p>
        The Entrepreneurship Development Cell and Incubation Centre of St.
        Xavier's College (Autonomous), Kolkata seeks to transform how
        entrepreneurship is perceived in society.
      </p>
      <div className="cta-links">
        <a href="/eac">EAC</a>
        <a href="/live-projects">Live Projects</a>
        <a href="/start-up-voice">Seed Stories</a>
        <a href="/edf">EDF</a>
        <a href="/incubation-centre">Incubation Centre</a>
      </div>
      <a href="/about">
        <button className="know-more-btn">Know More</button>
      </a>
      {/* Cloud Overlay */}
      {/* <div className="cloud-overlay">
        <img src={cloudImage} alt="Cloud" className="cloud" />
      </div> */}
    </HeroSection>
  );
};

export default HomeHeroSection;
