import React from "react";
import styled from "styled-components";
import heroImage from "../assets/hero-image.jpg"; // Replace with the actual path to the image

const HeroSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(${heroImage}) no-repeat center center/cover;
  height: 100vh;
  color: #fff;
  padding: 0 20px;

  h1 {
    font-size: 3rem;
    font-weight: bold;
    margin: 20px 0;
  }

  p {
    font-size: 1.2rem;
    max-width: 800px;
    line-height: 1.6;
    margin: 0 auto 30px auto;
  }

  .cta-links {
    display: flex;
    gap: 20px;
    margin-top: 20px;

    a {
      text-decoration: none;
      color: #fff;
      font-size: 1rem;
      padding: 10px 20px;
      border: 1px solid #fff;
      border-radius: 5px;
      transition: background 0.3s ease;

      &:hover {
        background: #fff;
        color: #000;
      }
    }
  }

  .know-more-btn {
    margin-top: 30px;
    padding: 15px 30px;
    background: #fff;
    color: #000;
    font-size: 1.2rem;
    border: none;
    border-radius: 5px;
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
        The Entrepreneurship Development Cell of St. Xavier's College
        (Autonomous), Kolkata seeks to transform how entrepreneurship is
        perceived in society. We firmly believe that entrepreneurship is the key
        to fostering innovation in India and promoting the values surrounding
        entrepreneurship will result in attainment of the full capacity of the
        youths aptitude.
      </p>
      <div className="cta-links">
        <a href="/eac">EAC</a>
        <a href="/live-projects">Live Projects</a>
        <a href="/start-up-voice">Start Up Voice</a>
        <a href="/edf">EDF</a>
        <a href="/incubation-centre">Incubation Centre</a>
      </div>
      <button className="know-more-btn">Know More</button>
    </HeroSection>
  );
};

export default HomeHeroSection;
