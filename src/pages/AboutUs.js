// AboutUs.js
import React from "react";
import "../styles/aboutUs.css";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Avatar,
} from "@mui/material";
import { motion } from "framer-motion";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
const teamMembers = [
  {
    name: "John Doe",
    role: "CEO",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Jane Smith",
    role: "CTO",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Alice Johnson",
    role: "COO",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Alice Johnson",
    role: "COO",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Alice Johnson",
    role: "COO",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Alice Johnson",
    role: "COO",
    image: "https://via.placeholder.com/150",
  },
];

const AboutUs = () => {
  return (
    <Container maxWidth="2xl" sx={{ py: 5 }}>
      {/* Intro Section */}

      <Typography variant="h2" align="center" gutterBottom>
        About Us
      </Typography>
      <Typography variant="h6" align="center" paragraph>
        We are a team of dedicated professionals committed to delivering
        excellence in everything we do. Our mission is to innovate and lead the
        industry with our cutting-edge solutions.
      </Typography>
      <div className="aboutUsTimeline">
        <Typography
          variant="h2"
          sx={{ width: "md", fontSize: "3.2rem", margin: "20px" }}
          align="center"
          gutterBottom
        >
          A Brief History Of Events
        </Typography>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work verticalElement"
            contentStyle={{
              background: "rgb(20,20,20)",
              color: "#fff",
              borderStyle:
                "1px solid linear-gradient(rgba(255,255,255), rgba(160,32,240))",
            }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
            date="2011 - present"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          >
            <h3 className="vertical-timeline-element-title">Our Beginning</h3>
            <h4 className="vertical-timeline-element-subtitle">2001</h4>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis
              tempore tenetur quae omnis possimus quam odit recusandae iusto,
              explicabo quidem at dolorum, temporibus facere ipsam natus
              excepturi quod rerum earum.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2010 - 2011"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          >
            <h3 className="vertical-timeline-element-title">
              Growing into something
            </h3>
            <h4 className="vertical-timeline-element-subtitle">grow balls</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia
              atque maxime veniam deleniti delectus ipsa eligendi quibusdam
              perspiciatis illo, autem consequatur totam sed? Officiis natus
              similique aut magni, sint voluptas!
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2008 - 2010"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          >
            <h3 className="vertical-timeline-element-title">
              They see me rolling
            </h3>
            <h4 className="vertical-timeline-element-subtitle">they hate it</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum ea
              numquam quibusdam similique tenetur, repellat rerum dolore
              perspiciatis aspernatur sit nesciunt in doloribus velit officiis
              iusto nobis. Impedit, harum labore.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2006 - 2008"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          >
            <h3 className="vertical-timeline-element-title">Web Designer</h3>
            <h4 className="vertical-timeline-element-subtitle">
              San Francisco, CA
            </h4>
            <p>User Experience, Visual Design</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="April 2013"
            iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
          >
            <h3 className="vertical-timeline-element-title">
              Content Marketing for Web, Mobile and Social Media
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Online Course
            </h4>
            <p>Strategy, Social Media</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="November 2012"
            iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
          >
            <h3 className="vertical-timeline-element-title">
              Agile Development Scrum Master
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Certification
            </h4>
            <p>Creative Direction, User Experience, Visual Design</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="2002 - 2006"
            iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
          >
            <h3 className="vertical-timeline-element-title">
              Bachelor of Science in Interactive Digital Media Visual Imaging
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Bachelor Degree
            </h4>
            <p>Creative Direction, Visual Design</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }}
          />
        </VerticalTimeline>
      </div>

      {/* Team Section */}
      <Box sx={{ py: 5 }} className="aboutUsHeader">
        <Typography variant="h4" align="center" gutterBottom>
          Meet Our Team
        </Typography>
        <Grid container spacing={4}>
          {teamMembers.map((member, index) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              key={index}
              className="aboutUsCard"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <Card sx={{ textAlign: "center", py: 3 }}>
                  <Avatar
                    src={member.image}
                    alt={member.name}
                    sx={{ width: 100, height: 100, margin: "0 auto 16px auto" }}
                    className="aboutUsAvatar"
                  />
                  <CardContent>
                    <Typography variant="h6">{member.name}</Typography>
                    <Typography variant="subtitle1" color="textSecondary">
                      {member.role}
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Mission Statement */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Box sx={{ py: 5 }}>
          <Typography
            variant="h4"
            align="center"
            gutterBottom
            className="aboutUsHead"
          >
            Our Mission
          </Typography>
          <Typography variant="body1" align="center" className="aboutUsMission">
            Our mission is to create innovative products that improve lives. We
            strive to be a leader in our industry, continuously pushing the
            boundaries of what’s possible and delivering exceptional value to
            our customers and stakeholders.
          </Typography>
        </Box>
      </motion.div>
    </Container>
  );
};

export default AboutUs;
