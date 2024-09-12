import React from "react";
import "../styles/Card.css"; // Import the CSS file
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
const Card = ({ image, title, description, link }) => {
  const returnToTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <div className="card">
      <img src={image} alt={title} className="card-image" />
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <p className="card-description">{description}</p>
        <Button
          component={Link}
          to={link}
          onClick={returnToTop}
          sx={{
            mt: "20px",
            fontSize: "16px",
            color: "black",
            border: ".5px solid #1e1e1e",
            textTransform: "capitalize",
          }}
        >
          learn more
        </Button>
      </div>
    </div>
  );
};

export default Card;
