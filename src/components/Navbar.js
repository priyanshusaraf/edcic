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
import "../styles/navbar.css";

const Navbar = () => {
  const returnToTop = () => {
    window.scrollTo(0, 0);
  };
  const navbarLinks = [
    { text: "Home", url: "/" },
    { text: "About Us", url: "/about-us" },
    { text: "Services", url: "/services" },
    { text: "Events", url: "/events" },
    { text: "Blog", url: "/blog" },
    { text: "Associations", url: "/associations" },
    { text: "Incubation Centre", url: "/incubation-centre" },
    { text: "Contact", url: "/contact" },
  ];
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ width: 250 }} role="presentation">
      <List>
        {navbarLinks.map((link, index) => (
          <ListItem button component={Link} to={link.url} key={index}>
            <ListItemText primary={link.text} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <AppBar
      position="sticky"
      className="appBar"
      sx={{ background: "none", position: "sticky" }}
    >
      <Toolbar className="toolBar">
        {/* Logo Section */}
        <Typography
          variant="h6"
          component={Link}
          to="/"
          sx={{ flexGrow: 1, color: "inherit", textDecoration: "none" }}
        >
          <Box
            component={Link}
            to="/"
            sx={{
              flexGrow: 1,
              display: "flex",
              alignItems: "center",
              textDecoration: "none",
              color: "inherit",
            }}
          >
            <img
              src="https://www.edcsxc.com/wp-content/uploads/2022/03/logo.png"
              alt="Your Logo"
              style={{
                height: "40px", // Adjust height as needed
                width: "auto",
              }}
            />
          </Box>
        </Typography>

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
          <Box sx={{ display: "flex", justifyContent: "space-around" }}>
            {navbarLinks.map((link, index) => (
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
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
