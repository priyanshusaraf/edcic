// src/pages/EacPage.js
import React from "react";
import EacBanner from "../components/EacBanner";
import "../styles/EacPage.css";

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
          discussions and a platform to pitch their startups to eminent
          investors followed by an opportunity of networking to mobilize their
          feedback and guidance.
        </p>
      </section>
      <section className="eac-mentorship">
        <h2 className="eac-mentorship__title">
          MENTORSHIP THROUGH STARTUP CLASSES
        </h2>
        <p className="eac-mentorship__text">
          With the help of Entrepreneurship Awareness Camp we seek to empower
          young and budding entrepreneurs through a 3-day curriculum involving a
          series of workshops by industry experts providing competency in the
          strategic decision processes of a start-up, panel discussions and a
          platform to pitch their startups to eminent investors followed by an
          opportunity of networking to mobilize their feedback and guidance. We
          aim at creating a synergy between creativity and implementation by
          providing invaluable guidance crucial for the start-ups in their
          embryonic stage.
        </p>
        <div className="eac-mentorship__images">
          <img
            src="/assets/image1.jpg"
            alt="Mentorship session 1"
            className="eac-mentorship__image"
          />
          <img
            src="/assets/image2.jpg"
            alt="Mentorship session 2"
            className="eac-mentorship__image"
          />
          <img
            src="/assets/image3.jpg"
            alt="Mentorship session 3"
            className="eac-mentorship__image"
          />
          <img
            src="/assets/image4.jpg"
            alt="Mentorship session 4"
            className="eac-mentorship__image"
          />
        </div>
      </section>
      <section className="eac-panel-discussion" style={{ height: "100vh" }}>
        <div className="eac-panel-discussion__header">
          <img
            src="/assets/panel-logo.png"
            alt="Panel Discussion Logo"
            className="eac-panel-discussion__logo"
          />
          <h2 className="eac-panel-discussion__title">PANEL DISCUSSION</h2>
        </div>
        <div className="eac-panel-discussion__cards">
          <div className="eac-panel-discussion__card"></div>
          <div className="eac-panel-discussion__card"></div>
          <div className="eac-panel-discussion__card"></div>
          <div className="eac-panel-discussion__card"></div>
        </div>
      </section>
      <section
        className="eac-investor-pitch"
        style={{
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "40px",
        }}
      >
        <div
          className="eac-investor-pitch__text"
          style={{ flex: "1", paddingRight: "20px", color: "#004e87" }}
        >
          <h2 className="eac-investor-pitch__title">INVESTOR PITCH</h2>
          <p>
            This section highlights the importance of pitching to investors,
            showcasing creative ideas and business models.
          </p>
        </div>
        <div
          className="eac-investor-pitch__cards"
          style={{
            flex: "1",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "20px",
          }}
        >
          <div
            className="eac-investor-pitch__card"
            style={{
              backgroundColor: "#004e87",
              height: "200px",
              borderRadius: "12px",
            }}
          ></div>
          <div
            className="eac-investor-pitch__card"
            style={{
              backgroundColor: "#004e87",
              height: "200px",
              borderRadius: "12px",
            }}
          ></div>
          <div
            className="eac-investor-pitch__card"
            style={{
              backgroundColor: "#004e87",
              height: "200px",
              borderRadius: "12px",
            }}
          ></div>
          <div
            className="eac-investor-pitch__card"
            style={{
              backgroundColor: "#004e87",
              height: "200px",
              borderRadius: "12px",
            }}
          ></div>
        </div>
      </section>
      <section className="eac-featured-speakers">
        <h2 className="eac-featured-speakers__title">Featured Speakers</h2>
        <div className="eac-featured-speakers__carousel">
          <button className="eac-featured-speakers__arrow eac-featured-speakers__arrow--left">
            &#9664;
          </button>
          <div className="eac-featured-speakers__cards">
            <div className="eac-featured-speakers__card">
              <div className="eac-featured-speakers__image"></div>
              <p className="eac-featured-speakers__name">Name of the Speaker</p>
            </div>
            <div className="eac-featured-speakers__card">
              <div className="eac-featured-speakers__image"></div>
              <p className="eac-featured-speakers__name">Name of the Speaker</p>
            </div>
            <div className="eac-featured-speakers__card">
              <div className="eac-featured-speakers__image"></div>
              <p className="eac-featured-speakers__name">Name of the Speaker</p>
            </div>
          </div>
          <button className="eac-featured-speakers__arrow eac-featured-speakers__arrow--right">
            &#9654;
          </button>
        </div>
      </section>
    </div>
  );
};

export default EacPage;
