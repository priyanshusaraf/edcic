import React from "react";
import { Box, Grid, Typography, Card } from "@mui/material";
import { motion } from "framer-motion";

const socialReach = [
  {
    platform: "Facebook",
    followers: "400K +",
    icon: "https://via.placeholder.com/80",
  },
  {
    platform: "Instagram",
    followers: "50000 +",
    icon: "https://via.placeholder.com/80",
  },
  {
    platform: "LinkedIn",
    followers: "45000 +",
    icon: "https://via.placeholder.com/80",
  },
];

const OurReach = () => {
  return (
    <Box
      sx={{
        py: 5,
        textAlign: "center",
        width: "100%",
        height: "70vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        background: "linear-gradient(to bottom, #101070, #00004c)",
        color: "#fff",
      }}
    >
      <Typography variant="h4" gutterBottom>
        OUR REACH
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {socialReach.map((reach, index) => (
          <Grid item xs={12} sm={4} key={index}>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Card
                sx={{
                  background: "none",
                  boxShadow: "none",
                  textAlign: "center",
                }}
              >
                <img
                  src={reach.icon}
                  alt={reach.platform}
                  style={{
                    width: "80px",
                    height: "80px",
                    margin: "0 auto 16px",
                  }}
                />
                <Typography variant="h6">{reach.followers}</Typography>
                <Typography variant="body2">{reach.platform}</Typography>
              </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default OurReach;
