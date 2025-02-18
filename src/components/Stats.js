import React from "react";
import "../styles/stats.css";

const Stats = () => {
  return (
    <div className="stats__container">
      <div className="stats__item">
        <h2 className="stats__number">1000 +</h2>
        <p className="stats__label">Registrations</p>
      </div>
      <div className="stats__item">
        <h2 className="stats__number">80 +</h2>
        <p className="stats__label">Internships</p>
      </div>
      <div className="stats__item">
        <h2 className="stats__number">65 +</h2>
        <p className="stats__label">Companies</p>
      </div>
    </div>
  );
};

export default Stats;
