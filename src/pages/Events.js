import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom"; // Import Link from React Router DOM
import prismLogo from "../assets/prism.jpg";
import elevatorLogo from "../assets/elevator.jpg";
import enterpriseLogo from "../assets/entreprise.jpg";
import workshopLogo from "../assets/360.jpg";
import initiumLogo from "../assets/initium.jpeg";
import eacLogo from "../assets/eac.jpg";

const EventsContainer = styled.div`
  text-align: center;
  padding: 50px 20px;
  background-color: #001d4a; /* Dark blue background */
  color: #fff;

  h2 {
    font-size: 2.5rem;
    margin-bottom: 20px;
    font-weight: bold;
  }

  p {
    font-size: 1.2rem;
    margin-bottom: 40px;
    max-width: 800px;
    margin: 0 auto;
    padding-bottom: 50px;
    line-height: 1.6;
  }

  .events-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 30px;
    padding: 0 20px;

    @media (max-width: 768px) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 480px) {
      grid-template-columns: 1fr;
    }

    .event-card {
      background: #ffffff;
      color: #001d4a;
      padding: 20px;
      border-radius: 10px;
      display: flex;
      flex-direction: column;
      align-items: center;
      box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
      transition: transform 0.3s ease, box-shadow 0.3s ease;
      text-decoration: none; /* Remove underline from links */

      &:hover {
        transform: translateY(-10px);
        box-shadow: 0px 8px 12px rgba(0, 0, 0, 0.2);
      }

      .image-container {
        width: 100%;
        max-width: 200px; /* Ensures all images fit within the same width */
        aspect-ratio: 3 / 4; /* Ensures a consistent aspect ratio for all images */
        overflow: hidden;
        border-radius: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
        background: #f4f4f4;

        img {
          width: 100%;
          height: 100%;
          object-fit: cover; /* Ensures images fill the container without distortion */
        }
      }

      h3 {
        font-size: 1.5rem;
        margin-top: 20px;
        margin-bottom: 10px;
      }

      p {
        font-size: 1rem;
        line-height: 1.4;
      }
    }
  }
`;

const Events = () => {
  const returnToTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <EventsContainer>
      <h2>Our Events</h2>
      <p>
        We firmly believe that entrepreneurship is the key to fostering
        innovation in India and promoting the values surrounding
        entrepreneurship will result in attainment of the full capacity of the
        youths aptitude.
      </p>
      <div className="events-grid" onClick={returnToTop}>
        <Link to="/events/prism" className="event-card">
          <div className="image-container">
            <img src={prismLogo} alt="Prism '24 Logo" />
          </div>
          <h3>PRISM '24</h3>
          <p>Ignite the Uncharted</p>
        </Link>
        <Link
          to="/events/elevator"
          className="event-card"
          onClick={returnToTop}
        >
          <div className="image-container">
            <img src={elevatorLogo} alt="Elevator Logo" />
          </div>
          <h3>Elevator</h3>
          <p>The Idea Expo</p>
        </Link>
        <Link
          to="/events/entreprise"
          className="event-card"
          onClick={returnToTop}
        >
          <div className="image-container">
            <img src={enterpriseLogo} alt="Enterprise Logo" />
          </div>
          <h3>Enterprise</h3>
          <p>Think Big, Think Global</p>
        </Link>
        <Link
          to="/events/workshop"
          className="event-card"
          onClick={returnToTop}
        >
          <div className="image-container">
            <img src={workshopLogo} alt="360 Workshop Logo" />
          </div>
          <h3>360° Workshop</h3>
          <p>Learn and Grow</p>
        </Link>
        <Link to="/events/initium" className="event-card" onClick={returnToTop}>
          <div className="image-container">
            <img src={initiumLogo} alt="Initium Logo" />
          </div>
          <h3>Initium</h3>
          <p>The Internship Expo</p>
        </Link>
        <Link to="/events/eac" className="event-card" onClick={returnToTop}>
          <div className="image-container">
            <img src={eacLogo} alt="EAC Logo" />
          </div>
          <h3>EAC 2024</h3>
          <p>Entrepreneurship Awareness Camp</p>
        </Link>
      </div>
    </EventsContainer>
  );
};

export default Events;
