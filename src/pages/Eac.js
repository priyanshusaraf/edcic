import React from "react";
import EacBanner from "../components/EacBanner";
import "../styles/EacPage.css";

// Import speaker images explicitly
import VC1 from "../assets/eac_vc/VC1.jpg";
import VC2 from "../assets/eac_vc/VC2.jpg";
import VC3 from "../assets/eac_vc/VC3.jpg";
import VC4 from "../assets/eac_vc/VC4.jpg";

// Import investor pitch images
import image1 from "../assets/eac/img1.JPG";
import image2 from "../assets/eac/img2.JPG";
import image3 from "../assets/eac/img3.JPG";
import image4 from "../assets/eac/img4.JPG";

// Import speaker session images
import speaker1 from "../assets/eac/speakerSession/eac_img5.png";
import speaker2 from "../assets/eac/speakerSession/eac_img6.png";
import speaker3 from "../assets/eac/speakerSession/eac_img7.png";

// Import mentorship images
import mentor1 from "../assets/eac/mentorship/eac_img1.JPG";
import mentor2 from "../assets/eac/mentorship/eac_img2.JPG";
import mentor3 from "../assets/eac/mentorship/eac_img3.JPG";
import mentor4 from "../assets/eac/mentorship/eac_img4.JPG";

// Array of panel discussion speakers with imported images
const panelSpeakers = [
  { id: 1, name: "Parag Dhol", image: VC1 },
  { id: 2, name: "Ankit Agarwal", image: VC2 },
  { id: 3, name: "Rohit Bafna", image: VC4 },
  { id: 4, name: "Madanmohan Rao", image: VC3 },
];

// Array for investor pitch images
const investorPitchImages = [image1, image2, image3, image4];

// Array for mentorship images
const mentorshipImages = [mentor1, mentor2, mentor3, mentor4];

// Array for featured speaker session images
const speakerSessionImages = [
  { id: 1, name: "Tripti Shinghal Somani", image: speaker1 },
  { id: 2, name: "Ish Anand", image: speaker2 },
  { id: 3, name: "Prashanth Tandon", image: speaker3 },
];

const EacPage = () => {
  return (
    <div className="eac-page">
      <div className="eac-banner-container">
        <EacBanner />
      </div>
      <section className="eac-description">
        <h2 className="eac-description__title">WHAT IS EAC?</h2>
        <p className="eac-description__text">
          With a vision to revolutionize innovation by inculcating a culture of
          spirit-driven entrepreneurship in the country, EAC is the flagship
          event of Entrepreneurship Development Cell which aims to bridge the
          gap between entrepreneurs and the resources they yearn for; through
          building connections with mentors and investors from an experienced,
          varied and distinguished pool of professionals from all over the
          country. With the help of Entrepreneurship Awareness Camp we seek to
          empower young and budding entrepreneurs through a 3-day curriculum
          involving a series of workshops by industry experts providing
          competency in the strategic decision processes of a start-up, panel
          discussions, and a platform to pitch their startups to eminent
          investors followed by an opportunity for networking to mobilize their
          feedback and guidance.
        </p>
      </section>

      {/* Updated Mentorship Section with Correct Images */}
      <section className="eac-mentorship">
        <h2 className="eac-mentorship__title">
          MENTORSHIP THROUGH STARTUP CLASSES
        </h2>
        <p className="eac-mentorship__text">
          We aim at creating a synergy between creativity and implementation by
          providing invaluable guidance crucial for the start-ups in their
          embryonic stage.
        </p>
        <div className="eac-mentorship__images">
          {mentorshipImages.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Mentorship session ${index + 1}`}
              className="eac-mentorship__image"
            />
          ))}
        </div>
      </section>

      {/* Panel Discussion Section */}
      <section className="eac-featured-speakers">
        <h2 className="eac-featured-speakers__title">Panel Discussion</h2>
        <div className="eac-featured-speakers__carousel">
          <div className="eac-featured-speakers__cards">
            {panelSpeakers.map((speaker) => (
              <div key={speaker.id} className="eac-featured-speakers__card">
                <img
                  src={speaker.image}
                  alt={speaker.name}
                  className="eac-featured-speakers__image"
                />
                <p className="eac-featured-speakers__name">{speaker.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Updated Investor Pitch Section with Images */}
      <section className="eac-investor-pitch">
        <div className="eac-investor-pitch__text">
          <h2 className="eac-investor-pitch__title">INVESTOR PITCH</h2>
          <p>
            The Investor Session at the Entrepreneurship Awareness Camp (EAC),
            organized by EDCIC, serves as a transformative opportunity for
            aspiring entrepreneurs to scale their ideas. With a history of
            raising ₹25 lakhs for startups, this platform has proven to be a
            catalyst for growth and success.
            <br />
            <br /> A standout success story is Tea Fit, a startup that secured
            investment during EAC and later gained national recognition on Shark
            Tank India. EAC’s dynamic environment brings together seasoned
            investors, mentors, and ambitious founders, fostering innovation,
            collaboration, and sustainable business development.
          </p>
        </div>
        <div className="eac-investor-pitch__cards">
          {investorPitchImages.map((image, index) => (
            <div key={index} className="eac-investor-pitch__card">
              <img
                src={image}
                alt={`Investor Pitch ${index + 1}`}
                className="eac-investor-pitch__image"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Updated Featured Speakers Section with Speaker Images */}
      <section className="eac-panel-discussion">
        <h2 className="eac-panel-discussion__title">Featured Speakers</h2>
        <div className="eac-panel-discussion__cards">
          {speakerSessionImages.map((speaker) => (
            <div key={speaker.id} className="eac-panel-discussion__card">
              <img
                src={speaker.image}
                alt={speaker.name}
                className="eac-panel-discussion__image"
              />
              <p className="eac-panel-discussion__name">{speaker.name}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default EacPage;
