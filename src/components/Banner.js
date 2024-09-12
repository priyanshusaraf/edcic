import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import "../styles/banner.css";

function Banner() {
  const images = [
    "https://images.unsplash.com/photo-1720048171080-78849cff8b19?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Replace with your image URLs,
  ];

  return (
    <Box
      sx={{
        height: "100vh",
        width: "100vw",
        position: "relative",
      }}
      className="mainBanner"
    >
      <Box
        sx={{
          display: "flex",
          height: "100%",
          width: `${images.length * 100}vw`,
          transition: "transform 0.5s ease",
        }}
      >
        {images.map((src, index) => (
          <Box
            key={index}
            sx={{
              minWidth: "100vw",
              height: "100vh",
              backgroundImage: `url(${src})`,
              backgroundPosition: "center",
              position: "relative",
              backgroundRepeat: "no-repeat",
              backgroundAttachment: "fixed",
              backgroundSize: "cover",
              "&::before": {
                content: '""',
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                backgroundColor: "rgba(0, 0, 0, 0.6)", // Darker tint for better contrast
              },
            }}
          />
        ))}
      </Box>
      <p className="bannerHeader">EDCIC</p>
      <Typography
        variant="h4"
        sx={{
          position: "absolute",
          top: "60%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          textAlign: "center",
          color: "white",
          zIndex: 1,
          fontSize: {
            xs: "2rem", // Extra small screens
            sm: "2rem", // Small screens
            md: "2rem", // Medium screens
            lg: "3rem", // Large screens
            xl: "3rem", // Extra large screens
          },
          fontWeight: "300",
        }}
      >
        It's in the game.
      </Typography>
      <Button
        sx={{
          position: "absolute",
          top: "70%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: 1,
          padding: {
            xs: "8px 16px", // Extra small screens
            sm: "10px 20px", // Small screens
            md: "12px 24px", // Medium screens
            lg: "14px 28px", // Large screens
          },
          fontSize: {
            xs: "0.875rem", // Extra small screens
            sm: "1rem", // Small screens
            md: "1.25rem", // Medium screens
            lg: "1.5rem", // Large screens
          },
          font: "poppins",
          color: "#FFFFFF",
          border: ".5px solid ",
          textTransform: "uppercase",
          ":hover": {
            backgroundColor: "black",
            border: "none",
          },
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
        }}
        component={Link}
        to="/about-us"
      >
        Learn More
      </Button>
    </Box>
  );
}

export default Banner;
