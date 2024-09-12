// HorizontalScrollContainer.js
import React, { useEffect } from "react";
import "../styles/HorizontalScrollContainer.css";
import Card from "./CardComponents";
import linkData from "../assets/linkData";

const HorizontalScrollContainer = () => {
  useEffect(() => {
    const scrollContainer = document.querySelector(".scroll-container");
    let scrollAmount = 0;
    const scrollSpeed = 1;

    const scroll = () => {
      const maxScrollLeft =
        scrollContainer.scrollWidth - scrollContainer.clientWidth;
      if (scrollAmount >= maxScrollLeft) {
        scrollAmount = 0;
      } else {
        scrollAmount += scrollSpeed;
      }

      scrollContainer.scrollTo({
        left: scrollAmount,
        behavior: "smooth",
      });
    };

    const intervalId = setInterval(scroll, 30000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="scroll-container">
      {linkData.map((data, index) => (
        <Card
          key={index}
          image={data.img}
          title={data.title}
          description={data.description}
          link={data.path}
        />
      ))}
    </div>
  );
};

export default HorizontalScrollContainer;
