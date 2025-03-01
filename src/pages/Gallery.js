import React from "react";
import "../styles/Gallery.css";
import image1 from "../assets/gallery/image1.jpg";
import image2 from "../assets/gallery/image2.jpg";
import image3 from "../assets/gallery/image3.JPG";
import image4 from "../assets/gallery/image4.jpg";
import image5 from "../assets/gallery/image5.JPG";
import image6 from "../assets/gallery/image6.JPG";
import image7 from "../assets/gallery/image7.PNG";
import image8 from "../assets/gallery/image8.JPG";
import image9 from "../assets/gallery/image9.JPG";
import image11 from "../assets/gallery/image11.jpg";
import image12 from "../assets/gallery/image12.jpg";
import image13 from "../assets/gallery/image13.jpg";
import image14 from "../assets/gallery/image14.jpg";
import image15 from "../assets/gallery/image15.JPG";

const galleryImages = [
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
  image9,
  image11,
  image12,
  image13,
  image14,
  image15,
];

const Gallery = () => {
  return (
    <div className="gallery">
      <h1 className="gallery__heading">Gallery</h1>
      <div className="gallery__images">
        {galleryImages.map((imgSrc, index) => (
          <img
            key={index}
            src={imgSrc}
            alt={`Gallery Image ${index + 1}`}
            className="gallery__image"
          />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
