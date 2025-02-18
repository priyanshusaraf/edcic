import React from "react";
import { motion } from "framer-motion";
import { Box, Typography } from "@mui/material";
import "../styles/ourNetwork.css";

// Import all images individually
import img1 from "../assets/speakerSessions/360degree_1.png";
import img2 from "../assets/speakerSessions/360degree_2.png";
import img3 from "../assets/speakerSessions/360degree_3.png";
import img4 from "../assets/speakerSessions/360degree_4.png";
import img6 from "../assets/speakerSessions/360degree_6.png";
import img5 from "../assets/speakerSessions/360degree_5.png";
import img8 from "../assets/speakerSessions/eac_2.png";
import img7 from "../assets/speakerSessions/eac_1.png";
import img9 from "../assets/speakerSessions/eac_3.png";
import img10 from "../assets/speakerSessions/eac_4.png";
import img11 from "../assets/speakerSessions/prism_1.png";
import img12 from "../assets/speakerSessions/prism_2.png";
import img13 from "../assets/speakerSessions/prism_3.png";
import img14 from "../assets/speakerSessions/INITIUM.png";
import img15 from "../assets/speakerSessions/ELEVATOR.png";
import img16 from "../assets/speakerSessions/entreprise_1.png";
import img17 from "../assets/speakerSessions/entreprise_2.png";
import img18 from "../assets/speakerSessions/entreprise_3.png";

// Define the network data
const networkData = [
  { name: "Speaker 1", image: img1 },
  { name: "Speaker 2", image: img2 },
  { name: "Speaker 3", image: img3 },
  { name: "Speaker 4", image: img4 },
  { name: "Speaker 5", image: img5 },
  { name: "Speaker 6", image: img6 },
  { name: "Speaker 7", image: img7 },
  { name: "Speaker 8", image: img8 },
  { name: "Speaker 9", image: img9 },
  { name: "Speaker 10", image: img10 },
  { name: "Speaker 11", image: img11 },
  { name: "Speaker 12", image: img12 },
  { name: "Speaker 13", image: img13 },
  { name: "Speaker 14", image: img14 },
  { name: "Speaker 15", image: img15 },
  { name: "Speaker 16", image: img16 },
  { name: "Speaker 17", image: img17 },
  { name: "Speaker 18", image: img18 },
];

const NetworkMarquee = () => {
  return (
    <div className="networkMarquee">
      <p className="networkHeadText">Our Network</p>
      <Box sx={{ overflow: "hidden", width: "100%", py: 4 }}>
        <motion.div
          className="marquee"
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{
            duration: 20, // Adjust the duration to control the speed
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <Box className="marquee-content" sx={{ display: "flex" }}>
            {[...networkData, ...networkData].map((session, index) => (
              <Box
                key={index}
                sx={{
                  minWidth: "300px",
                  textAlign: "center",
                  mx: 2,
                }}
              >
                <img
                  src={session.image}
                  alt={session.name}
                  style={{
                    width: "300px",
                    height: "180px", // Rectangular aspect ratio
                    borderRadius: "6px",
                    objectFit: "cover",
                    border: "5px solid white",
                  }}
                />
                <Typography
                  variant="subtitle1"
                  sx={{ mt: 1, fontWeight: "bold" }}
                >
                  {session.name}
                </Typography>
              </Box>
            ))}
          </Box>
        </motion.div>
      </Box>
    </div>
  );
};

export default NetworkMarquee;
