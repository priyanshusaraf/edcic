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
import PastPartners from "./pages/PastPartners";
import Archives from "./pages/Archives";
import Contact from "./pages/Contact";
import VerticalTime from "./components/VerticalTimeline";
import EventComponent from "./pages/EventComponent";
import linkData from "./assets/linkData";
function App() {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<Events />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/fund" element={<Fund />} />
        <Route path="/blog/*" element={<Blog />} />
        <Route path="/past-partners" element={<PastPartners />} />
        <Route path="/archives" element={<Archives />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/incubation-centre" element={<IncubationCenter />} />
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
