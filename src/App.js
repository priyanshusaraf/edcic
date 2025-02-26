import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import React from "react";
import Navbar from "./components/Navbar";
import EacPage from "./pages/Eac.js";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Prism from "./pages/Prism";
import Archives from "./pages/Archives";
import NotFound from "./pages/NotFound";
import Initium from "./pages/Initium";
import Elevator from "./pages/Elevator";
import Initiatives from "./components/Initiatives";
import Contact from "./pages/Contact";
import WhatWeDo from "./components/WhatWeDo";
import SeedStories from "./pages/SeedStories";
import Entreprise from "./pages/Entreprise";
import IncubationCentre from "./pages/IncubationCentre.js";
import Team from "./pages/Team.js";
import Edf from "./pages/Edf.js";
import Workshop360 from "./pages/_360";
import Envisage from "./pages/Envisage";
import LiveProjects from "./pages/LiveProjects.js";
import Bizwalk from "./pages/Bizwalk.js";
import OurNetwork from "./pages/OurNetwork";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/initiatives" element={<Initiatives />} />
        <Route path="/what-we-do" element={<WhatWeDo />} />
        <Route path="/archives" element={<Archives />} />
        <Route path="/team" element={<Team />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/events/prism" element={<Prism />} />
        <Route path="/prism" element={<Prism />} />
        <Route path="/events/initium" element={<Initium />} />
        <Route path="/initium" element={<Initium />} />
        <Route path="/events/elevator" element={<Elevator />} />
        <Route path="/events/entreprise" element={<Entreprise />} />
        <Route path="/seed-stories" element={<SeedStories />} />
        <Route path="/events/eac" element={<EacPage />} />
        <Route path="/eac" element={<EacPage />} />
        <Route path="/bizwalk" element={<Bizwalk />} />
        <Route path="/initiatives/bizwalk" element={<Bizwalk />} />
        <Route path="/initiatives/seed-stories" element={<SeedStories />} />
        <Route path="/start-up-voice" element={<SeedStories />} />
        <Route path="/initiatives/edf" element={<Edf />} />
        <Route path="/edf" element={<Edf />} />
        <Route path="/initiatives/live-projects" element={<LiveProjects />} />
        <Route path="/live-projects" element={<LiveProjects />} />
        <Route
          path="/initiatives/incubation-centre"
          element={<IncubationCentre />}
        />
        <Route path="/incubation-centre" element={<IncubationCentre />} />
        <Route path="/initiatives/incubation" element={<IncubationCentre />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/360" element={<Workshop360 />} />
        <Route path="/envisage" element={<Envisage />} />
        <Route path="/initiatives/envisage" element={<Envisage />} />
        <Route path="/events/workshop" element={<Workshop360 />} />
        <Route path="/events/360" element={<Workshop360 />} />
        <Route path="/events/elevator" element={<Elevator />} />
        <Route path="/elevator" element={<Elevator />} />
        <Route path="/network" element={<OurNetwork />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
