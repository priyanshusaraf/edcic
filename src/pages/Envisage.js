import React from "react";
import "../styles/Envisage.css";
import { Download } from "@mui/icons-material";
import envisagePDF from "../assets/envisage.pdf";
import pdfPreview from "../assets/envisage_preview.png";
import team1 from "../assets/boardImages/img2.png";
import team2 from "../assets/boardImages/img3.png";
import team3 from "../assets/boardImages/img4.png";
import team5 from "../assets/boardImages/img1.png";
import team6 from "../assets/boardImages/img9.png";
import team7 from "../assets/boardImages/img7.png";
import img13 from "../assets/boardImages/img13.png";
import img14 from "../assets/boardImages/img14.png";
import akm from "../assets/boardImages/akm.png";

const editorialTeam = [
  { name: "Dr. Arup Kumar Mitra", role: "Deputy President", img: akm },
  { name: "Ansh Arya", role: "Director", img: team5 },
  { name: "Aarav Mittal", role: "Joint Secretary", img: team1 },
  { name: "Rishab Dugar", role: "Joint Secretary", img: team3 },
  { name: "Vedant Saboo", role: "Joint Secretary", img: team2 },
  { name: "Harshita Mundra", role: "Editorial Head", img: img14 },
  { name: "Pranit Parasrampuria", role: "Editorial Head", img: img13 },
];

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
        insights, industry trends, and real-world success stories.
      </p>

      {/* PDF Preview & Download Section */}
      <div className="envisage__download-section">
        <img
          src={pdfPreview}
          alt="Envisage Newsletter Preview"
          className="envisage__pdf-preview"
        />
        <a
          href={envisagePDF}
          download="Envisage_Newsletter.pdf"
          className="envisage__download-btn"
        >
          <Download className="envisage__download-icon" />
          Download PDF
        </a>
      </div>

      {/* Editorial Team Section */}
      <h2 className="envisage__team-title">EDITORIAL TEAM 2024-25</h2>
      <div className="envisage__team-grid">
        {editorialTeam.map((member, index) => (
          <div key={index} className="envisage__team-card">
            <img
              src={member.img}
              alt={member.name}
              className="envisage__team-img"
            />
            <h3 className="envisage__team-name">{member.name}</h3>
            <p className="envisage__team-role">{member.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Envisage;
