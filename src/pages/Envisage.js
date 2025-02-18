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
        Rhizospheri - X is a company focused on bio-based solutions to improve
        soil health and crop productivity through beneficial microbes. The team,
        with expertise in microbiology, agronomy, and sustainability, is
        dedicated to advancing eco-friendly agriculture. Several professors
        namely Dr. Arup Kumar Mitra, Dr. Subhamoy Chatterjee, Bikram Dhara,
        Debapriya Maitra, Bedaprana Roy, Sanjana Ghosh, and Bidisha Chatterjee
        have also provided invaluable guidance and support. These professors’
        mentorship continues to drive Rhizospheri - X’s success, ensuring the
        company remains at the forefront of eco-friendly agricultural
        innovation.
      </p>
      <p className="envisage__description">
        EDCIC (Entrepreneurship Development Cell and Incubation Centre) has been
        instrumental in Rhizospheri - X’s success. We have provided expert
        guidance on sustainability, research collaboration, and product
        development, while also enhancing Rhizospheri - X’s marketing efforts.
        We are currently helping them in the process of onboarding clients along
        with branding their products.
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
