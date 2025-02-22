import React from "react";
import "../styles/Envisage.css";
import image1 from "../assets/eac/img1.JPG";
import image2 from "../assets/eac/img2.JPG";
import image3 from "../assets/eac/img3.JPG";

const Envisage = () => {
  return (
    <div className="envisage__container">
      <h1 className="envisage__title">ENVISAGE : OUR ANNUAL NEWSLETTER</h1>
      <p className="envisage__description">
        Envisage, the annual newsletter of the Entrepreneurship Development Cell
        & Incubation Centre (EDCIC) at St. Xavier’s College (Autonomous),
        Kolkata, is a curated window into the dynamic world of startups,
        innovation, and business strategy. Designed to inspire and inform, it
        captures the pulse of the entrepreneurial landscape through expert
        insights, industry trends, and real-world success stories. More than
        just a publication, Envisage is a platform for aspiring entrepreneurs to
        explore ideas, understand market shifts, and gain the knowledge needed
        to navigate the corporate world. Each edition brings fresh perspectives,
        thought-provoking discussions, and invaluable lessons from industry
        leaders, equipping students with the confidence to take their ideas
        forward. Envisage offers more than information—it cultivates a mindset,
        encouraging bold thinking and decisive action. Each edition empowers
        readers with the insights and inspiration needed to turn ideas into
        impact and ambitions into achievements.
      </p>

      <div className="envisage__image-grid">
        <img src={image1} alt="Envisage event 1" className="envisage__image" />
        <img src={image2} alt="Envisage event 2" className="envisage__image" />
        <img src={image3} alt="Envisage event 3" className="envisage__image" />
      </div>
    </div>
  );
};

export default Envisage;
