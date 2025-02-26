import React from "react";
import "../styles/aboutUs.css";
import OurReach from "../components/OurReach.js";
import OurVision from "../components/OurVision.js";
import { Container, Typography } from "@mui/material";
import { motion } from "framer-motion";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const AboutUs = () => {
  return (
    <div className="aboutUs__container">
      <Container maxWidth="100%">
        {/* Intro Section */}
        <div className="aboutUsLanding">
          <Typography variant="h2" align="center" gutterBottom>
            About Us
          </Typography>
        </div>
        <div className="aboutUsTimeline">
          <Typography
            variant="h2"
            align="center"
            gutterBottom
            sx={{ fontSize: "3.2rem", margin: "20px", color: "white" }}
          >
            A Brief History Of Events
          </Typography>

          {/* Timeline Section */}
          <VerticalTimeline>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{
                background: "white",
                color: "#010250",
                border: "none",
                borderRadius: "12px",
              }}
              contentArrowStyle={{ borderRight: "7px solid white" }}
              date="2015"
              iconStyle={{ background: "white", color: "#010250" }}
            >
              <Typography
                variant="h5"
                className="vertical-timeline-element-title"
              >
                Foundation of EDC
              </Typography>
              <Typography
                variant="subtitle1"
                className="vertical-timeline-element-subtitle"
              >
                2015
              </Typography>
              <Typography>
                The Entrepreneurship Development Cell (EDC) was established to
                foster innovation, entrepreneurship, and startup culture among
                students at St. Xavier's College (Autonomous), Kolkata.
              </Typography>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="2017"
              iconStyle={{ background: "white", color: "#010250" }}
            >
              <Typography
                variant="h5"
                className="vertical-timeline-element-title"
              >
                Biztatva Goes National
              </Typography>
              <Typography>
                Biztatva, the first EDC event to expand its reach across India,
                marked a significant milestone, showcasing the growing impact of
                entrepreneurship at EDC.
              </Typography>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="2019"
              iconStyle={{ background: "white", color: "#010250" }}
            >
              <Typography
                variant="h5"
                className="vertical-timeline-element-title"
              >
                Entrepreneurship Awareness Camp (EAC)
              </Typography>
              <Typography>
                The first Entrepreneurship Awareness Camp (EAC) was organized to
                educate students about entrepreneurship and connect startups
                with investors and mentors.
              </Typography>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="2019"
              iconStyle={{ background: "white", color: "#010250" }}
            >
              <Typography
                variant="h5"
                className="vertical-timeline-element-title"
              >
                Initium: Collaboration with Placement Cell
              </Typography>
              <Typography>
                In collaboration with the Placement Cell, EDC launched Initium –
                The Internship Expo, connecting students with top companies and
                fostering career development.
              </Typography>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="2020"
              iconStyle={{ background: "white", color: "#010250" }}
            >
              <Typography
                variant="h5"
                className="vertical-timeline-element-title"
              >
                Biztatva to Entreprise
              </Typography>
              <Typography>
                Biztatva was restructured into Entreprise, a national-level
                entrepreneurial simulation that tests participants' business
                acumen through rigorous rounds.
              </Typography>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="2022"
              iconStyle={{ background: "white", color: "#010250" }}
            >
              <Typography
                variant="h5"
                className="vertical-timeline-element-title"
              >
                IIC Certification Awarded
              </Typography>
              <Typography>
                The Institution’s Innovation Council (IIC) certification
                recognized EDC’s commitment to fostering an entrepreneurial
                ecosystem within the college.
              </Typography>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="2022"
              iconStyle={{ background: "white", color: "#010250" }}
            >
              <Typography
                variant="h5"
                className="vertical-timeline-element-title"
              >
                Teafit at Shark Tank India
              </Typography>
              <Typography>
                Teafit, a startup hosted at EAC, secured ₹50 lakh for 8% equity
                after impressing the Sharks on Shark Tank India.
              </Typography>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="2022"
              iconStyle={{ background: "white", color: "#010250" }}
            >
              <Typography
                variant="h5"
                className="vertical-timeline-element-title"
              >
                Rhizospheri-X Incubation
              </Typography>
              <Typography>
                EDC incubated its first startup, Rhizospheri-X, which develops
                eco-friendly biofertilizers and biopesticides. The startup
                continues to receive mentorship and support from EDC.
              </Typography>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="2023"
              iconStyle={{ background: "white", color: "#010250" }}
            >
              <Typography
                variant="h5"
                className="vertical-timeline-element-title"
              >
                First Patent Filing
              </Typography>
              <Typography>
                EDC marked a significant milestone by facilitating its first
                patent filing, promoting innovation-driven entrepreneurship.
              </Typography>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="2023"
              iconStyle={{ background: "white", color: "#010250" }}
            >
              <Typography
                variant="h5"
                className="vertical-timeline-element-title"
              >
                Launch of Envisage
              </Typography>
              <Typography>
                EDC launched "Envisage," its official newsletter, offering
                valuable business insights to inspire and inform future leaders.
              </Typography>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="2023"
              iconStyle={{ background: "white", color: "#010250" }}
            >
              <Typography
                variant="h5"
                className="vertical-timeline-element-title"
              >
                Bizwalk Initiative
              </Typography>
              <Typography>
                EDC launched Bizwalk, providing students with hands-on exposure
                to established startups through guided visits, starting with a
                visit to the Coca-Cola factory.
              </Typography>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="2024"
              iconStyle={{ background: "white", color: "#010250" }}
            >
              <Typography
                variant="h5"
                className="vertical-timeline-element-title"
              >
                Transformation to EDCIC
              </Typography>
              <Typography>
                EDC transformed into EDCIC with the establishment of a formal
                incubation center, fostering the growth of promising startups.
              </Typography>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </div>

        {/* Team Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        ></motion.div>
      </Container>
    </div>
  );
};

export default AboutUs;
