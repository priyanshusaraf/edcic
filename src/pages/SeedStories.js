import React from "react";
import "../styles/SeedStories.css";
import SeedStories1 from "../assets/seedStories.png";

const SeedStories = () => {
  return (
    <div className="seedStories">
      <div className="seedStories__headerView">
        <h1 className="seedStories__heading">Seed Stories</h1>
      </div>
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

      <div className="seedStories__middlePart">
        <p className="seedStories__intro">WHAT IS SEED STORIES?</p>
        <div className="seedStories__story">
          <img
            src={SeedStories1}
            alt="seed stories image"
            className="seedStories__img"
          />
          <p className="seedStories__description">
            what the fuck is seed stories bro fuck it we going lorem ipsum with
            this one fam Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Ea rem possimus, error voluptate nemo quas dolore, eligendi
            quos, aspernatur aliquid saepe blanditiis amet vitae est fugiat?
            Dolore cumque eum dolores!
          </p>
        </div>

        {/* Add YouTube video thumbnail */}

        <div className="seedStories__story">
          <p className="seedStories__description">
            what the fuck is seed stories bro fuck it we going lorem ipsum with
            this one fam Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Ea rem possimus, error voluptate nemo quas dolore, eligendi
            quos, aspernatur aliquid saepe blanditiis amet vitae est fugiat?
            Dolore cumque eum dolores!
          </p>
          <img
            src={SeedStories1}
            alt="seed stories image"
            className="seedStories__img"
          />
        </div>
        <div className="seedStories__story">
          <img
            src={SeedStories1}
            alt="seed stories image"
            className="seedStories__img"
          />
          <p className="seedStories__description">
            what the fuck is seed stories bro fuck it we going lorem ipsum with
            this one fam Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Ea rem possimus, error voluptate nemo quas dolore, eligendi
            quos, aspernatur aliquid saepe blanditiis amet vitae est fugiat?
            Dolore cumque eum dolores!
          </p>
        </div>
      </div>
    </div>
  );
};

export default SeedStories;
