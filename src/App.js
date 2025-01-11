import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Events from "./pages/Events";
import AboutUs from "./pages/AboutUs";
import Fund from "./pages/Fund";
import Blog from "./pages/Blog";
import IncubationCenter from "./pages/IncubationCentre";
import Archives from "./pages/Archives";
import Initiatives from "./components/Initiatives";
import Contact from "./pages/Contact";
import WhatWeDo from "./components/WhatWeDo";
import EventComponent from "./pages/EventComponent";
import linkData from "./assets/linkData";
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
        <Route path="/partners" element={<Contact />} />
        <Route path="/team" element={<IncubationCenter />} />
        <Route path="/contact" element={<IncubationCenter />} />
        {linkData.map((data, index) => {
          <Route
            path={data.path}
            element={
              <EventComponent
                key={index}
                bannerImg={data.img}
                eventName={data.title}
                eventDescription={data.description}
                bannerAlt={data.title}
                registrationLink={data.reglink}
              />
            }
          />;
        })}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
