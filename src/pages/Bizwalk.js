import React from "react";
import "../styles/bizwalk.css";
import img1 from "../assets/bizwalk/bizwalk_img1.jpg";
import img2 from "../assets/bizwalk/bizwalk_img2.jpg";
import img3 from "../assets/bizwalk/bizwalk_img3.jpg";
import img4 from "../assets/bizwalk/bizwalk_img4.jpg";

const Bizwalk = () => {
  return (
    <div className="bizwalk__container">
      <div className="bizwalk__content">
        <h1 className="bizwalk__title">BIZWALK</h1>
        <h2 className="bizwalk__subtitle">THE STARTUP WALK</h2>
        <p className="bizwalk__description">
          Bizwalk is an initiative designed to provide students with firsthand
          exposure to the operations of established startups. Through guided
          visits, students have the opportunity to observe daily workflows,
          interact with founders or senior management, and gain valuable
          insights into the entrepreneurial ecosystem.
        </p>
      </div>
      <div className="bizwalk__images">
        <img src={img1} alt="Bizwalk Event 1" className="bizwalk__image" />
        <img src={img2} alt="Bizwalk Event 2" className="bizwalk__image" />
        <img src={img3} alt="Bizwalk Event 3" className="bizwalk__image" />
        <img src={img4} alt="Bizwalk Event 4" className="bizwalk__image" />
      </div>
    </div>
  );
};

export default Bizwalk;
