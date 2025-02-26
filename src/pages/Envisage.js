import React from "react";
import "../styles/Envisage.css";
import { Download } from "@mui/icons-material"; // Importing Material UI Download Icon
import envisagePDF from "../assets/envisage.pdf";
import pdfPreview from "../assets/envisage_preview.png"; // First-page preview of the PDF

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
    </div>
  );
};

export default Envisage;
