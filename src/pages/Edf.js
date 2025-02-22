import React from "react";
import styled from "styled-components";
import EDFImage from "../assets/EDF_image.jpg"; // Importing the background image

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
`;

/* Parallax Background Section */
const ParallaxSection = styled.div`
  width: 100%;
  height: 80vh;
  background-image: url(${EDFImage});
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;

  /* Added overlay to improve text visibility */
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.4); /* Dark overlay */
  }

  h1 {
    font-size: 3.5rem;
    font-weight: bold;
    color: white;
    z-index: 1; /* Ensure text is above the overlay */
    text-transform: uppercase;
    text-align: center;
    padding: 20px;
  }
`;

const ContentWrapper = styled.div`
  max-width: 900px;
  padding: 20px;
  text-align: center;

  h1 {
    font-size: 3rem;
    font-weight: bold;
    margin-bottom: 20px;
    color: white;
  }

  p {
    font-size: 1.2rem;
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

/* Responsive Adjustments */
const ResponsiveWrapper = styled.div`
  @media (max-width: 768px) {
    .parallax-section {
      height: 40vh; /* Reduce height for smaller screens */
    }

    h1 {
      font-size: 2.5rem; /* Increased size on mobile */
    }

    p {
      font-size: 1rem;
    }
  }
`;

const EDF = () => {
  return (
    <ResponsiveWrapper>
      {/* Parallax Background Section */}
      <ParallaxSection className="parallax-section">
        <h1>ENTREPRENEURSHIP DEVELOPMENT FUND</h1>
      </ParallaxSection>

      {/* Main Content Section */}
      <EDFSection>
        <ContentWrapper>
          <p>
            EDCIC’s vision to revolutionise innovation & entrepreneurship in the
            country through its students took form as it started a
            non-commercial initiative called the St. Xavier’s Entrepreneurship
            Development Fund (EDF). This serves as a building block among young
            Xaverians (both former & current) in their entrepreneurial journey,
            connecting them with mentors, investors, & industry experts.
          </p>
          <p>
            If a prototype is deemed unique and feasible, funding up to 50k can
            be provided from EDF to support development and growth.
          </p>
          <div className="highlight-section">
            Are you an alumni or student of St. Xavier’s College (Autonomous),
            Kolkata running their own startup?
          </div>
          <button className="contact-btn">Contact us</button>
        </ContentWrapper>
      </EDFSection>
    </ResponsiveWrapper>
  );
};

export default EDF;
