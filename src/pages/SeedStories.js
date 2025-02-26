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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea rem
            possimus, error voluptate nemo quas dolore, eligendi quos,
            aspernatur aliquid saepe blanditiis amet vitae est fugiat? Dolore
            cumque eum dolores!
          </p>
        </div>

        <div className="seedStories__story">
          <p className="seedStories__description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea rem
            possimus, error voluptate nemo quas dolore, eligendi quos,
            aspernatur aliquid saepe blanditiis amet vitae est fugiat? Dolore
            cumque eum dolores!
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea rem
            possimus, error voluptate nemo quas dolore, eligendi quos,
            aspernatur aliquid saepe blanditiis amet vitae est fugiat? Dolore
            cumque eum dolores!
          </p>
        </div>
      </div>
    </div>
  );
};

export default SeedStories;
