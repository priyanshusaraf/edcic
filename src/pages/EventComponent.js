import React from "react";
import "../styles/eventComponent.css";
import { Link } from "react-router-dom";
import Countdown from "../components/Countdown";
import { Button } from "@mui/material";
function EventComponent(
  bannerImg,
  eventName,
  eventDescription,
  countdown,
  bannerAlt,
  registrationLink
) {
  return (
    <div className="eventComponent">
      <div className="eventBanner">
        <img src={bannerImg} alt={bannerAlt} />
        <p className="eventName">{eventName}</p>
        <Countdown endTime={countdown} />
      </div>
      <div className="eventContent">
        <p className="contentHead">About Us</p>
        <p className="eventContent">{eventDescription}</p>
        <Button component={Link} to={registrationLink}></Button>
      </div>
    </div>
  );
}

export default EventComponent;
