import React from "react";
import "../styles/eventCards.css";
import HorizontalScrollContainer from "../components/HorizontalScrollContainer";
function Events() {
  return (
    <div className="events">
      <p className="eventsHead">Events</p>
      <HorizontalScrollContainer />
    </div>
  );
}

export default Events;
