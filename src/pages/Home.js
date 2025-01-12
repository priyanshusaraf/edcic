import React from "react";
import Banner from "../components/Banner";
import Events from "./Events";
import Initiatives from "../components/Initiatives";
import Info from "../components/Info";
import PrincipalNote from "../components/PrincipalNote";
import Stats from "../components/Stats";
import OurTeam from "../components/OurTeam";
import NetworkMarquee from "../components/OurNetwork";
import Certificate from "../components/Certificate";
import HomeHeroSection from "../components/HomeHeroSection";
function Home() {
  return (
    <div className="home">
      <HomeHeroSection />
      {/* <Info /> */}
      <PrincipalNote />
      <Stats />
      <Events />
      <Initiatives />
      <Certificate />
      {/* <OurTeam /> */}
      <NetworkMarquee />
    </div>
  );
}

export default Home;
