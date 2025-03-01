import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import logo from "../assets/logo.jpeg";
import "../styles/navbar.css";

const Navbar = () => {
  const returnToTop = () => {
    window.scrollTo(0, 0);
  };

  const navbarLinks = [
    { text: "Home", url: "/" },
    { text: "About Us", url: "/about" },
    { text: "Team", url: "/team" },
    { text: "Our Network", url: "/network" },
    { text: "Our Associations", url: "/associations" },
    { text: "Gallery", url: "/gallery" },
    { text: "Contact", url: "/contact" },
  ];

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerToggle = () => setDrawerOpen(!drawerOpen);

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{ width: 250, display: "flex", flexDirection: "column", padding: 2 }}
    >
      <List>
        {navbarLinks.map((link, index) => (
          <ListItem
            button
            component={Link}
            to={link.url}
            key={index}
            onClick={returnToTop}
            sx={{ paddingY: 1 }}
          >
            <ListItemText
              primary={link.text}
              primaryTypographyProps={{
                fontWeight: "bold", // Bold font for drawer links
                fontSize: "1rem",
              }}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <AppBar
      position="sticky"
      className="appBar"
      sx={{
        background: "rgba(255, 255, 255, 0.8)",
        backdropFilter: "blur(10px)",
        boxShadow: "none",
      }}
    >
      <Toolbar className="toolBar" sx={{ justifyContent: "space-between" }}>
        {/* Logo Section */}
        <Box
          component={Link}
          to="/"
          sx={{
            display: "flex",
            alignItems: "center",
            textDecoration: "none",
            color: "inherit",
          }}
        >
          <img
            src={logo}
            alt="Your Logo"
            style={{
              height: "50px", // Adjust height as needed
              width: "50px",
              borderRadius: "50%", // Circular styling
              objectFit: "cover",
            }}
          />
        </Box>

        {isMobile ? (
          <>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
            <Drawer
              anchor="left"
              open={drawerOpen}
              onClose={handleDrawerToggle}
            >
              {drawer}
            </Drawer>
          </>
        ) : (
          <Box sx={{ display: "flex", gap: 2 }}>
            {navbarLinks.map((link, index) => (
              <Button
                key={index}
                color="inherit"
                component={Link}
                to={link.url}
                sx={{
                  textTransform: "none",
                  fontSize: "14px",
                  fontWeight: "bold", // Bold font for desktop links
                  color: "inherit",
                  ":hover": { color: theme.palette.primary.main },
                }}
                onClick={returnToTop}
              >
                {link.text}
              </Button>
            ))}
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
