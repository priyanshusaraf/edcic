import React from "react";
import "../styles/footer.css";
import { Box, Button } from "@mui/material";
import { Link } from "react-router-dom";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
function Footer() {
  const footerLinks = [
    { text: "Home", url: "/" },
    { text: "About Us", url: "/about-us" },
    { text: "Services", url: "/services" },
    { text: "Events", url: "/events" },
    { text: "Blog", url: "/blog" },
    { text: "Associations", url: "/associations" },
    { text: "Incubation Centre", url: "/incubation-centre" },
    { text: "Contact", url: "/contact" },
  ];
  const returnToTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <div className="footer">
      <div className="footerUp">
        <div className="footerImg">
          <img
            src="https://www.edcsxc.com/wp-content/uploads/2022/03/logo.png"
            alt=""
          />
        </div>
        <div className="footerLinks">
          <div className="footerLinksText">Site Map</div>
          <div className="footerLinks_link">
            <Box sx={{ display: "flex", justifyContent: "space-around" }}>
              {footerLinks.map((link, index) => (
                <Button
                  key={index}
                  color="inherit"
                  component={Link}
                  to={link.url}
                  sx={{
                    textTransform: "none",
                    fontSize: "14px",
                    fontWeight: "bold",
                  }}
                  onClick={returnToTop}
                >
                  {link.text}
                </Button>
              ))}
            </Box>
          </div>
        </div>
        <div className="footerSocials">
          <div className="socialsButtons">
            <Button
              sx={{ color: "black" }}
              component={Link}
              to="https://www.instagram.com/edcicsxc"
            >
              <InstagramIcon />
            </Button>{" "}
            <Button
              sx={{ color: "black" }}
              component={Link}
              to="https://www.linkedin.com/company/entrepreneurship-development-cell-st.-xavier's-college-autonomous-kolkata/?original_referer=https%3A%2F%2Fwww%2Egoogle%2Ecom%2F&originalSubdomain=in"
            >
              <LinkedInIcon />
            </Button>{" "}
            <Button
              sx={{ color: "black" }}
              component={Link}
              to="https://www.facebook.com/edcsxc"
            >
              <FacebookIcon />
            </Button>{" "}
            <Button
              sx={{ color: "black" }}
              component={Link}
              to="https://www.youtube.com/@EDCICSXC"
            >
              <YouTubeIcon />
            </Button>
          </div>
          <p className="footerSocialsText">pr@edcicsxc.com</p>
        </div>
      </div>
      <div className="footerDown">
        <p className="edcCopyright">© 2025 edcicsxc. All Rights Reserved. </p>
      </div>
    </div>
  );
}

export default Footer;
