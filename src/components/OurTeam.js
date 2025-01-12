import React from "react";
import board from "../assets/hero-image.jpg";
import { Typography, Box } from "@mui/material";
import "../styles/team.css";

function OurTeam() {
  return (
    <div className="team">
      <p className="teamHeader">Meet Us</p>
      <img src={board} alt="" className="teamImg" />
    </div>
  );
}

export default OurTeam;
