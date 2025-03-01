import React from "react";
import "../styles/SeedStories.css";
import SeedStoriesBg from "../assets/seed_stories_image.jpg"; // Correct background image import
import SeedStories1 from "../assets/ss4.jpg";
import SeedStories2 from "../assets/ss1.jpg";
import SeedStories3 from "../assets/ss2.jpg";

const SeedStories = () => {
  return (
    <div className="seedStories">
      {/* Parallax Background Section */}
      <div
        className="seedStories__parallax"
        style={{ backgroundImage: `url(${SeedStoriesBg})` }}
      >
        <h1 className="seedStories__heading">Seed Stories</h1>
      </div>

      {/* Video Section */}
      <div className="seedStories__videoSection">
        <h1 className="seedStories__heading">Watch Our Latest Video Here!</h1>
        <a
          href="https://www.youtube.com/watch?v=jdyypQDmhmY"
          target="_blank"
          rel="noopener noreferrer"
          className="seedStories__videoLink"
        >
          <img
            src="https://img.youtube.com/vi/jdyypQDmhmY/0.jpg"
            alt="YouTube Video Thumbnail"
            className="seedStories__videoThumbnail"
          />
        </a>
        <button
          className="seedStories__subscribeButton"
          onClick={() =>
            window.open("https://www.youtube.com/@EDCICSXC", "_blank")
          }
        >
          Subscribe to EDCIC Channel
        </button>
      </div>

      {/* Middle Section */}
      <div className="seedStories__middlePart">
        <p className="seedStories__intro">WHAT IS SEED STORIES?</p>
        <div className="seedStories__story">
          <img
            src={SeedStories1}
            alt="seed stories image"
            className="seedStories__img"
          />
          <p className="seedStories__description">
            Introducing Seed Stories, a podcast by the Entrepreneurship
            Development Cell and Incubation Centre, where we explore the
            journeys of startup founders—their challenges, breakthroughs, and
            lessons.
          </p>
        </div>

        <div className="seedStories__story">
          <p className="seedStories__description">
            Our mission is to inspire and empower aspiring entrepreneurs by
            sharing real, raw stories of perseverance, passion, and resilience.
          </p>
          <img
            src={SeedStories2}
            alt="seed stories image"
            className="seedStories__img"
          />
        </div>

        <div className="seedStories__story">
          <img
            src={SeedStories3}
            alt="seed stories image"
            className="seedStories__img"
          />
          <p className="seedStories__description">
            These stories go beyond building businesses; they’re about the
            courage to fail, the strength to start over, and the drive to push
            forward. Whether you're just starting or already on your journey,
            let Seed Stories ignite your passion and remind you that every step
            you take brings you closer to making an impact.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SeedStories;
