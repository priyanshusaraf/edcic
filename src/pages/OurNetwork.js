import React from "react";
import "../styles/ourNetwork2.css";
import arjunMalhotra from "../assets/network/arjunMalhotra.png";
import harshitaSabharwal from "../assets/network/harshitaSabharwal.png";
import manojKohli from "../assets/network/manojKohli.png";
import nayanMehta from "../assets/network/nayanMehta.png";
import philipKotler from "../assets/network/philipkotler.png";
import prashantTandon from "../assets/network/prashantTandon.png";
import sanjeevBakchandani from "../assets/network/sanjeevBakchandani.png";
import soumenRay from "../assets/network/soumenRay.png";
import souravGanguly from "../assets/network/souravGanguly.png";
import suhailSameer from "../assets/network/suhailSameer.png";
import vivekSharma from "../assets/network/vivekSharma.png";
import vKrishnan from "../assets/network/vKrishnan.png";

const networkMembers = [
  {
    id: 1,
    name: "Arjun Malhotra",
    image: arjunMalhotra,
    // description:
    //   "An industry veteran known for his leadership in the technology sector.",
  },
  {
    id: 2,
    name: "Harshita Sabharwal",
    image: harshitaSabharwal,
    // description:
    //   "An expert in digital transformation and innovation strategies.",
  },
  {
    id: 3,
    name: "Manoj Kohli",
    image: manojKohli,
    // description:
    //   "A visionary business leader with experience in global markets.",
  },
  {
    id: 4,
    name: "Nayan Mehta",
    image: nayanMehta,
    // description:
    //   "A financial strategist with deep expertise in investment banking.",
  },
  {
    id: 5,
    name: "Philip Kotler",
    image: philipKotler,
    // description:
    //   "The father of modern marketing, influencing generations of marketers.",
  },
  {
    id: 6,
    name: "Prashant Tandon",
    image: prashantTandon,
    // description: "An entrepreneur shaping the future of health-tech solutions.",
  },
  {
    id: 7,
    name: "Sanjeev Bikchandani",
    image: sanjeevBakchandani,
    // description:
    //   "A pioneer in online recruitment and startup ecosystem building.",
  },
  {
    id: 8,
    name: "Soumen Ray",
    image: soumenRay,
    // description:
    //   "A finance expert leading corporate growth and expansion strategies.",
  },
  {
    id: 9,
    name: "Sourav Ganguly",
    image: souravGanguly,
    // description:
    //   "A legendary sports figure who has revolutionized Indian cricket.",
  },
  {
    id: 10,
    name: "Suhail Sameer",
    image: suhailSameer,
    // description: "A business leader in the consumer and fintech industries.",
  },
  {
    id: 11,
    name: "Vivek Sharma",
    image: vivekSharma,
    // description: "A technology and AI enthusiast driving innovation forward.",
  },
  {
    id: 12,
    name: "V Krishnan",
    image: vKrishnan,
    // description: "A mentor and investor in the Indian startup ecosystem.",
  },
];

const OurNetwork = () => {
  return (
    <section className="ourNetwork">
      <h2 className="ourNetwork__title">OUR NETWORK</h2>
      <div className="ourNetwork__grid">
        {networkMembers.map((member, index) => (
          <div key={index} className="ourNetwork__card">
            <img
              src={member.image}
              alt={member.name}
              className="ourNetwork__image"
            />
            <h3 className="ourNetwork__name">{member.name}</h3>
            <p className="ourNetwork__description">{member.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurNetwork;
