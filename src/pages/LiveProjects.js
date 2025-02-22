import React from "react";
import styled from "styled-components";
import img1 from "../assets/lp1.jpg";
import img2 from "../assets/lp2.jpg";
import img3 from "../assets/lp3.jpg";
import img4 from "../assets/lp4.jpg";
import img5 from "../assets/lp5.jpg";
const LiveProjectsSection = styled.section`
  background: linear-gradient(to bottom, #00004c, #101070);
  color: #fff;
  text-align: center;
  padding: 60px 20px;

  h1 {
    font-size: 3rem;
    font-weight: bold;
    margin-bottom: 20px;
  }

  p {
    font-size: 1.2rem;
    max-width: 800px;
    margin: 0 auto 40px;
    line-height: 1.6;
  }

  .benefits {
    margin: 60px 0;
  }

  .benefits h2 {
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 40px;
  }

  .benefits-grid {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 40px;
  }

  .benefit-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    width: 200px;
  }

  .benefit-card img {
    width: 80px;
    height: 80px;
    margin-bottom: 20px;
    border-radius: 10px;
    background: #fff;
  }

  .benefit-card h3 {
    font-size: 1.2rem;
    font-weight: bold;
    margin-bottom: 10px;
  }

  .collaboration-section {
    margin-top: 60px;
    font-size: 1.2rem;
    font-weight: bold;
  }

  .contact-btn {
    margin-top: 20px;
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
      background: #e0e0e0;
    }
  }
`;

const LiveProjects = () => {
  return (
    <LiveProjectsSection>
      <h1>Live Projects</h1>
      <p>
        Live projects are educational assignments that allow students to work on
        real-world projects with external clients. They are a way for students
        to apply theoretical knowledge to practical situations.
      </p>

      <div className="benefits">
        <h2>Benefits of Live Projects for Startups</h2>
        <div className="benefits-grid">
          <div className="benefit-card">
            <img src={img1} alt="Valuable Guidance" />
            <h3>Valuable Guidance</h3>
          </div>
          <div className="benefit-card">
            <img src={img2} alt="Fresh Talent" />
            <h3>Fresh Talent</h3>
          </div>
          <div className="benefit-card">
            <img src={img3} alt="Increased Productivity" />
            <h3>Increased Productivity</h3>
          </div>
          <div className="benefit-card">
            <img src={img4} alt="Brand Awareness" />
            <h3>Brand Awareness</h3>
          </div>
          <div className="benefit-card">
            <img src={img5} alt="Talent Scouting" />
            <h3>Talent Scouting</h3>
          </div>
        </div>
      </div>

      <div className="collaboration-section">
        Wanna collaborate with EDCIC on a Live Project?
      </div>
      <button className="contact-btn">Contact us</button>
    </LiveProjectsSection>
  );
};

export default LiveProjects;
