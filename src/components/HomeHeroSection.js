import React from "react";
import styled from "styled-components";
import heroImage from "../assets/edcic_team.jpeg"; // Replace with the actual path to the image

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
    gap: 20px;
    margin-bottom: 40px;

    a {
      text-decoration: none;
      color: #fff;
      font-size: 1rem;
      font-weight: bold;
      padding: 10px 20px;
      border: 2px solid #fff;
      border-radius: 30px;
      transition: background 0.3s ease;

      &:hover {
        background: #fff;
        color: #000;
      }
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

    &:hover {
      background: #000;
      color: #fff;
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
        entrepreneurship is perceived in society. We firmly believe that
        entrepreneurship is the key to fostering innovation in India and
        promoting the values surrounding entrepreneurship will result in
        attainment of the full capacity of the youths aptitude.
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
    </HeroSection>
  );
};

export default HomeHeroSection;
