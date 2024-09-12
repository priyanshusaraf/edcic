import React from "react";
import { motion } from "framer-motion";
import { Box, Typography } from "@mui/material";
import "../styles/ourNetwork.css";
import networkData from "../assets/NetworkData";

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
            {[...networkData, ...networkData].map((person, index) => (
              <Box
                key={index}
                sx={{
                  minWidth: "150px",
                  textAlign: "center",
                  mx: 2,
                }}
              >
                <img
                  src={person.image}
                  alt={person.name}
                  style={{
                    width: "150px",
                    height: "150px",
                    borderRadius: "50%",
                    objectFit: "cover",
                  }}
                />
                <Typography variant="subtitle1" sx={{ mt: 1 }}>
                  {person.name}
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

// import React from "react";
// import { Box, Typography } from "@mui/material";
// import "../styles/ourNetwork.css";

// function NetworkMarquee() {
//   const network = [
//     { name: "Person 1", img: "https://via.placeholder.com/150" },
//     { name: "Person 2", img: "https://via.placeholder.com/150" },
//     { name: "Person 3", img: "https://via.placeholder.com/150" },
//     { name: "Person 4", img: "https://via.placeholder.com/150" },
//     { name: "Person 5", img: "https://via.placeholder.com/150" },
//   ];

//   return (
//     <Box sx={{ overflow: "hidden", padding: "20px" }}>
//       <Typography
//         variant="h4"
//         sx={{
//           textAlign: "center",
//           marginBottom: "20px",
//           fontSize: {
//             xs: "1.5rem", // Extra small screens
//             sm: "2rem", // Small screens
//             md: "2.5rem", // Medium screens
//             lg: "3rem", // Large screens
//             xl: "3.5rem", // Extra large screens
//           },
//         }}
//       >
//         Our Network
//       </Typography>
//       <Box className="network-container" sx={{ display: "flex" }}>
//         <Box
//           className="scrolling-container"
//           sx={{
//             display: "flex",
//             animation: "scroll 20s linear infinite",
//             "&:hover": {
//               animationPlayState: "paused", // Pause on hover
//             },
//             "@keyframes scroll": {
//               "0%": { transform: "translateX(0)" },
//               "100%": { transform: `translateX(-${network.length * 100}%)` },
//             },
//           }}
//         >
//           {network.map((person, index) => (
//             <Box
//               key={index}
//               sx={{
//                 minWidth: "200px",
//                 margin: "0 20px",
//                 textAlign: "center",
//               }}
//             >
//               <Box
//                 component="img"
//                 src={person.img}
//                 alt={person.name}
//                 sx={{
//                   width: {
//                     xs: "100px", // Extra small screens
//                     sm: "120px", // Small screens
//                     md: "140px", // Medium screens
//                     lg: "160px", // Large screens
//                     xl: "180px", // Extra large screens
//                   },
//                   height: {
//                     xs: "100px",
//                     sm: "120px",
//                     md: "140px",
//                     lg: "160px",
//                     xl: "180px",
//                   },
//                   borderRadius: "50%",
//                 }}
//               />
//               <Typography
//                 variant="subtitle1"
//                 sx={{
//                   fontSize: {
//                     xs: "0.75rem", // Extra small screens
//                     sm: "0.875rem", // Small screens
//                     md: "1rem", // Medium screens
//                     lg: "1.125rem", // Large screens
//                     xl: "1.25rem", // Extra large screens
//                   },
//                   marginTop: "10px",
//                   fontWeight: "bold",
//                 }}
//               >
//                 {person.name}
//               </Typography>
//             </Box>
//           ))}
//         </Box>
//       </Box>
//     </Box>
//   );
// }

// export default NetworkMarquee;
