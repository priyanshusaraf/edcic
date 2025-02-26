import React from "react";
import styled from "styled-components";
import certificateImage from "../assets/certificate.jpeg"; // Replace with the actual path to the certificate image

const CertificateContainer = styled.div`
  background-color: #001d4a; /* Dark blue background */
  color: #ffffff;
  text-align: center;
  padding: 50px 20px;

  .title {
    font-size: 2.5rem;
    font-weight: bold;
    margin-bottom: 20px;
  }

  .certificate-image {
    max-width: 50%;
    height: 50%;
    margin: 0 auto;
    border: 5px solid #ffffff; /* Optional border for the image */
    border-radius: 10px; /* Rounded corners for a cleaner look */
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.3); /* Add subtle shadow for depth */
  }
  .certificate__text {
    padding-bottom: 50px;
  }

  @media (max-width: 768px) {
    .title {
      font-size: 2rem;
    }
  }
`;

const Certificate = () => {
  return (
    <CertificateContainer>
      <h1 className="title">Institution’s Innovation Council</h1>
      <p className="certificate__text">
        The Institution’s Innovation Council (IIC) at St. Xavier’s College,
        Kolkata, fosters a dynamic innovation ecosystem, encouraging students to
        transform ideas into prototypes. It connects students with mentors,
        industry experts, and research institutions, focusing on bridging
        scientific research with commercial applications. The IIC aims to drive
        sustainable development and promote holistic student growth through
        mentorship, collaboration, and interdisciplinary learning.
      </p>
      <img
        src={certificateImage}
        alt="Certificate of Establishment"
        className="certificate-image"
      />
    </CertificateContainer>
  );
};

export default Certificate;
