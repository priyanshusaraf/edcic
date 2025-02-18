import React from "react";
import styled from "styled-components";

const EDFSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100vh;
  padding: 40px 20px;
  color: #fff;
  background: linear-gradient(to bottom, #00004c, #101070);

  h1 {
    font-size: 3rem;
    font-weight: bold;
    margin-bottom: 20px;
  }

  p {
    font-size: 1.2rem;
    max-width: 900px;
    line-height: 1.6;
    margin-bottom: 40px;
  }

  .highlight-section {
    font-size: 1.1rem;
    font-weight: bold;
    margin-bottom: 30px;
  }

  .contact-btn {
    padding: 12px 25px;
    font-size: 1rem;
    font-weight: bold;
    color: #000;
    background: #fff;
    border: none;
    border-radius: 30px;
    cursor: pointer;
    transition: background 0.3s ease;

    &:hover {
      background: #e0e0e0;
    }
  }
`;

const EDF = () => {
  return (
    <EDFSection>
      <h1>ENTREPRENEURSHIP DEVELOPMENT FUND</h1>
      <p>
        EDCIC’s vision to revolutionise innovation & entrepreneurship in the
        country through its students took form as it started a non-commercial
        initiative called the St. Xavier’s Entrepreneurship Development Fund
        (EDF) which serves as a building block among young Xaverian’s (both
        former & current) in their entrepreneurial journey & connects them to a
        pool of mentors, investors, & industry experts whilst giving them a
        chance to gain unconditional monetary support helping these budding
        entrepreneurs with their startups. Moreover, if a prototype is deemed
        unique and feasible, funding up to 50k can be provided from EDF to
        support their development and growth.
      </p>
      <div className="highlight-section">
        Are you an alumni or student of St. Xavier’s College (Autonomous),
        Kolkata running their own startup?
      </div>
      <button className="contact-btn">Contact us</button>
    </EDFSection>
  );
};

export default EDF;
