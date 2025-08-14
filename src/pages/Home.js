import React from "react";

// Hero and Main Sections
import HomeHeroSection from "../components/HomeHeroSection";
import PrincipalNote from "../components/PrincipalNote";
import OurVision from "../components/OurVision";

// Features and Content
import Events from "./Events";
import Initiatives from "../components/Initiatives";
import Certificate from "../components/Certificate";

// Commented out components - uncomment when needed
// import Info from "../components/Info";
// import Stats from "../components/Stats";
// import OurTeam from "../components/OurTeam";
// import NetworkMarquee from "../components/OurNetwork";

function Home() {
  return (
    <div className="home">
      <HomeHeroSection />
      <PrincipalNote />
      <OurVision />
      <Events />
      <Initiatives />
      <Certificate />
    </div>
  );
}

export default Home;
