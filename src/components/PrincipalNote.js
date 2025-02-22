import React from "react";
import styled from "styled-components";
import principalImage from "../assets/principal.jpeg"; // Replace with the actual path to the principal's image

const NoteContainer = styled.div`
  background-color: #001d4a; /* Dark blue background */
  color: #ffffff;
  padding: 50px 20px;
  text-align: center;

  .note-header {
    font-size: 2.5rem;
    font-weight: bold;
    margin-bottom: 20px;
  }

  .note-content {
    background-color: #ffffff;
    color: #001d4a;
    border-radius: 20px;
    padding: 40px 20px;
    max-width: 900px;
    margin: 0 auto;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;

    @media (min-width: 768px) {
      flex-direction: row;
    }

    .image-container {
      flex-shrink: 0;
      border-radius: 50%;
      width: 150px;
      height: 150px;
      overflow: hidden;
      box-shadow: 10px 15px 20px rgba(0, 0, 0, 0.3);

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }

    .principalNote {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .text-content {
      flex: 1;
      text-align: left;

      h3 {
        font-size: 1.5rem;
        font-weight: bold;
        margin-bottom: 10px;
        text-align: center;

        @media (min-width: 768px) {
          text-align: left;
        }
      }

      p {
        font-size: 1.1rem;
        line-height: 1.8;
        text-align: justify;
      }

      .quote-marks {
        font-size: 2rem;
        font-weight: bold;
        color: #001d4a;
      }
    }
  }
`;

const PrincipalNote = () => {
  return (
    <div className="principalNote">
      <NoteContainer>
        <div className="note-header">TESTIMONIAL</div>
        <div className="note-content">
          <div className="image-container">
            <img src={principalImage} alt="Reverend Father Dominic Savio SJ" />
          </div>
          <div className="text-content">
            <h3>REVEREND FATHER DOMINIC SAVIO SJ</h3>
            <div>
              <span className="quote-marks">'</span>
              <p>
                The power to think differently and ahead of the times for the
                betterment of mankind is what sets entrepreneurs apart. India’s
                young generation today has that power. History has witnessed
                that countries which have encouraged entrepreneurs have grown at
                a faster pace. Entrepreneurs create opportunities, create jobs,
                create value and create wonders out of nothing. E-Cell provides
                exposure to entrepreneurship at an early age, helping many
                students realize their potential as individuals and world
                citizens.
              </p>
              <span className="quote-marks">'</span>
            </div>
          </div>
        </div>
      </NoteContainer>
    </div>
  );
};

export default PrincipalNote;
