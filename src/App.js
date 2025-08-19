import React from "react";
import { Route, Routes } from "react-router-dom";

// Layout Components
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

// Page Components
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Team from "./pages/Team";
import Contact from "./pages/Contact";
import Archives from "./pages/Archives";
import Gallery from "./pages/Gallery";
import NotFound from "./pages/NotFound";

// Event Pages
import Prism from "./pages/Prism";
import Initium from "./pages/Initium";
import Elevator from "./pages/Elevator";
import Entreprise from "./pages/Entreprise";
import EacPage from "./pages/Eac.js";
import Workshop360 from "./pages/_360";
import Envisage from "./pages/Envisage";

// Initiative Pages
import Initiatives from "./components/Initiatives";
import SeedStories from "./pages/SeedStories";
import IncubationCentre from "./pages/IncubationCentre.js";
import Edf from "./pages/Edf.js";
import LiveProjects from "./pages/LiveProjects.js";
import Bizwalk from "./pages/Bizwalk.js";

// Network & Association Pages
import OurNetwork from "./pages/OurNetwork";
import OurAssociations from "./pages/OurAssociations";
import Recruited from "./pages/Recruited";

// Special Components
import EacBanner from "./components/EacBanner";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        {/* Main Pages */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/team" element={<Team />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/archives" element={<Archives />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/network" element={<OurNetwork />} />
        <Route path="/associations" element={<OurAssociations />} />

        {/* Initiative Pages */}
        <Route path="/initiatives" element={<Initiatives />} />
        <Route path="/initiatives/bizwalk" element={<Bizwalk />} />
        <Route path="/initiatives/seed-stories" element={<SeedStories />} />
        <Route path="/initiatives/edf" element={<Edf />} />
        <Route path="/initiatives/live-projects" element={<LiveProjects />} />
        <Route path="/initiatives/incubation-centre" element={<IncubationCentre />} />
        <Route path="/initiatives/incubation" element={<IncubationCentre />} />
        <Route path="/initiatives/envisage" element={<Envisage />} />

        {/* Event Pages */}
        <Route path="/events/prism" element={<Prism />} />
        <Route path="/events/initium" element={<Initium />} />
        <Route path="/events/elevator" element={<Elevator />} />
        <Route path="/events/entreprise" element={<Entreprise />} />
        <Route path="/events/eac" element={<EacPage />} />
        <Route path="/events/workshop" element={<Workshop360 />} />
        <Route path="/events/360" element={<Workshop360 />} />

        {/* Legacy/Shortcut Routes */}
        <Route path="/prism" element={<Prism />} />
        <Route path="/initium" element={<Initium />} />
        <Route path="/elevator" element={<Elevator />} />
        <Route path="/eac" element={<EacPage />} />
        <Route path="/360" element={<Workshop360 />} />
        <Route path="/envisage" element={<Envisage />} />
        <Route path="/bizwalk" element={<Bizwalk />} />
        <Route path="/seed-stories" element={<SeedStories />} />
        <Route path="/start-up-voice" element={<SeedStories />} />
        <Route path="/edf" element={<Edf />} />
        <Route path="/live-projects" element={<LiveProjects />} />
        <Route path="/incubation-centre" element={<IncubationCentre />} />

        {/* Special Routes */}
        <Route path="/eac-banner" element={<EacBanner />} />
        <Route path="/recruited" element={<Recruited />} />

        {/* 404 Route */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
