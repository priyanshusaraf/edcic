import React from "react";
import Banner from "../components/Banner";
import Events from "./Events";
import Info from "../components/Info";
import PrincipalNote from "../components/PrincipalNote";
import Stats from "../components/Stats";
import OurTeam from "../components/OurTeam";
import NetworkMarquee from "../components/OurNetwork";
function Home() {
  return (
    <div className="home">
      <Banner />
      <Info />
      <PrincipalNote />
      <Stats />
      <Events />
      <OurTeam />
      <NetworkMarquee />
    </div>
  );
}

export default Home;
