import React from "react";
import { Link } from "react-router-dom";
import "../styles/NotFound.css";
import logo from "../assets/logo.jpeg"; // Import the logo image

const NotFound = () => {
  return (
    <div className="not-found-container">
      <img src={logo} alt="Logo" className="not-found-logo" />
      <h1 className="not-found-title">404 Not Found!</h1>
      <p className="not-found-description">
        Oops! The page you're looking for doesn't exist.
      </p>
      <Link to="/" className="not-found-link">
        Go Back to Home
      </Link>
    </div>
  );
};

export default NotFound;
