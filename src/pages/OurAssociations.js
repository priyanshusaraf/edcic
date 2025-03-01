// components/Associations.js
import React from "react";
import "../styles/OurAssociations.css";

// Import all logos from the given directory
import friendsfm from "../assets/ourAssociations/91.9FriendsFM.jpg";
import aakash from "../assets/ourAssociations/aakash.jpg";
import adityaBirla from "../assets/ourAssociations/adityaBirlaGroup.png";
import ambuja from "../assets/ourAssociations/ambujaNeotia.jpg";
import amust from "../assets/ourAssociations/amust.jpg";
import axxela from "../assets/ourAssociations/axxela.jpg";
import blinkit from "../assets/ourAssociations/blinkIt.jpg";
import byjus from "../assets/ourAssociations/byjus.jpg";
import collegify from "../assets/ourAssociations/collegify.jpg";
import edugraph from "../assets/ourAssociations/edugraph.jpg";
import exchange22 from "../assets/ourAssociations/exchange22.jpg";
import globalReach from "../assets/ourAssociations/globalReach.jpg";
import hdfc from "../assets/ourAssociations/hdfc.jpg";
import hirect from "../assets/ourAssociations/hirect.jpg";
import inox from "../assets/ourAssociations/inox.jpg";
import internshala from "../assets/ourAssociations/internshala.jpg";
import lalbaba from "../assets/ourAssociations/lalbaba.jpg";
import nasscom from "../assets/ourAssociations/nasscom.jpg";
import nearbuy from "../assets/ourAssociations/nearbuy.jpg";
import orientElectric from "../assets/ourAssociations/orientElectric.jpg";
import paytm from "../assets/ourAssociations/paytm.jpg";
import psGroup from "../assets/ourAssociations/psGroup.jpg";
import rahee from "../assets/ourAssociations/rahee.jpg";
import redBull from "../assets/ourAssociations/redBull.jpg";
import sanmarg from "../assets/ourAssociations/sanmarg.jpg";
import selvelone from "../assets/ourAssociations/selvelone.jpg";
import t2 from "../assets/ourAssociations/t2.jpg";
import teKolkata from "../assets/ourAssociations/teKolkata.jpg";
import winPens from "../assets/ourAssociations/winPens.jpg";
import zomato from "../assets/ourAssociations/zomato.png";

// List of associations
const associations = [
  { name: "91.9 Friends FM", logo: friendsfm },
  { name: "Aakash", logo: aakash },
  { name: "Aditya Birla Group", logo: adityaBirla },
  { name: "Ambuja Neotia", logo: ambuja },
  { name: "Amust", logo: amust },
  { name: "Axxela", logo: axxela },
  { name: "Blinkit", logo: blinkit },
  { name: "BYJU'S", logo: byjus },
  { name: "Collegify", logo: collegify },
  { name: "Edugraph", logo: edugraph },
  { name: "Exchange22", logo: exchange22 },
  { name: "Global Reach", logo: globalReach },
  { name: "HDFC Bank", logo: hdfc },
  { name: "Hirect", logo: hirect },
  { name: "INOX", logo: inox },
  { name: "Internshala", logo: internshala },
  { name: "Lalbaba", logo: lalbaba },
  { name: "NASSCOM", logo: nasscom },
  { name: "Nearbuy", logo: nearbuy },
  { name: "Orient Electric", logo: orientElectric },
  { name: "Paytm", logo: paytm },
  { name: "PS Group", logo: psGroup },
  { name: "Rahee", logo: rahee },
  { name: "Red Bull", logo: redBull },
  { name: "Sanmarg", logo: sanmarg },
  { name: "Selvelone", logo: selvelone },
  { name: "t2", logo: t2 },
  { name: "TiE Kolkata", logo: teKolkata },
  { name: "WIN Pens", logo: winPens },
  { name: "Zomato", logo: zomato },
];

const Associations = () => {
  return (
    <section className="associations">
      <h2 className="associations__title">OUR ASSOCIATIONS</h2>
      <div className="associations__grid">
        {associations.map((partner, index) => (
          <div key={index} className="associations__card">
            <img
              src={partner.logo}
              alt={partner.name}
              className="associations__logo"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Associations;
