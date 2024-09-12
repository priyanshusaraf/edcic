import React from "react";
import { motion } from "framer-motion";
import { Box, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import "../styles/info.css";
function Info() {
  const images = [
    "https://images.unsplash.com/photo-1720048171080-78849cff8b19?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Replace with your image URLs,
    "https://plus.unsplash.com/premium_photo-1690574169354-d6cc4299cf84?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1719937051124-91c677bc58fc?q=80&w=2944&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1721367632166-0d851a5349af?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];

  return (
    <Box
      sx={{
        overflowX: "hidden",
        height: "100vh",
        width: "100vw",
        position: "relative",
      }}
      className="infoBox"
    >
      <Box
        sx={{
          display: "flex",
          height: "100%",
          width: `${images.length * 100}vw`,
          transition: "transform 0.5s ease",
          overflowX: "scroll",
          scrollBehavior: "smooth",
        }}
      >
        {images.map((src, index) => (
          <Box
            key={index}
            sx={{
              minWidth: "100vw",
              height: "100vh",
              backgroundImage: `url(${src})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              position: "relative",
              "&::before": {
                content: '""',
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                backgroundColor: "rgba(0, 0, 0, 0.8)", // Darker tint
              },
            }}
          />
        ))}
      </Box>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "32%",
          transform: "translate(-50%, -50%)",
          display: "flex",
          justifyContent: "center",
          color: "white",
          zIndex: 1,
          padding: "20px",
          borderRadius: "10px",
          fontSize: "18rem",
        }}
      >
        EDCIC
      </Box>
      <Box
        sx={{
          position: "absolute",
          top: "69%",
          left: "12%",
          transform: "translate(-50%, -50%)",
          textAlign: "center",
          color: "white",
          zIndex: 1,
          padding: "20px",
          borderRadius: "10px",
          fontSize: "2rem",
        }}
      >
        It's in the game.
      </Box>
      <Box
        sx={{
          display: "flex",
          top: "77%",
          color: "white",
          zIndex: 1,
        }}
      >
        <Button
          sx={{
            position: "absolute",
            justifyContent: "center",
            top: "77%",
            left: "7.5%",
            transform: "translate(-50%, -50%)",
            zIndex: 1,
            padding: "10px",
            fontSize: "1rem",
            color: "#38CFFF",
            border: "1px solid #38CFFF",
          }}
          component={Link}
          to="/about"
        >
          Learn More
        </Button>
      </Box>
    </Box>
  );
}

export default Info;
