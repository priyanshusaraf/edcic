import React from "react";
import { Box } from "@mui/material";
import "../styles/OurVision.css";
const OurVision = () => {
  return (
    <Box
      sx={{
        py: 5,
        textAlign: "center",
        color: "#fff",
        background: "#001d4a",
      }}
    >
      <div className="ourVision__content">
        <p className="ourVision__heading">Our Vision</p>
        <p className="ourVision__body">
          Entrepreneurs have a clear vision. These are the thinkers, innovators,
          the action takers who change society for a better tomorrow. Our vision
          is to enable these action-takers to efficiently traverse their road to
          an enterprise by giving them exposure, mentorship, network, funding
          opportunities, and wisdom to turn their dreams into reality.
        </p>
      </div>
    </Box>
  );
};

export default OurVision;
