import React, { useRef, useEffect } from "react";
import board from "../assets/board.jpeg";
import "../styles/team.css";
import { Phone, Linkedin, Mail } from "lucide-react";

// Import new team member images
import aakarshImg from "../newTeam/aakarsh.png";
import akshatImg from "../newTeam/akshat.png";
import akshitaImg from "../newTeam/akshita.png";
import chiragImg from "../newTeam/chirag.png";
import gouravImg from "../newTeam/gourav.png";
import harshImg from "../newTeam/harsh.png";
import hitenImg from "../newTeam/hiten.png";
import nikunjjImg from "../newTeam/nikunjj.png";
import nityaImg from "../newTeam/nitya.png";
import niyatiImg from "../newTeam/niyati.png";
import pradyumImg from "../newTeam/pradyum.png";
import raunakImg from "../newTeam/raunak.png";
import trishaImg from "../newTeam/trisha.png";
import vatsalImg from "../newTeam/vatsal.png";
import zaaraImg from "../newTeam/zaara.png";
import riyaImg from "../newTeam/riya.png";

const boardMembers = [

  {
    id: 1,
    name: "Riya Jindal",
    position: "Director", 
    email: "riyajindal.edcsxc@gmail.com",
    phone: "9051977777",
    linkedin: "https://linkedin.com/in/riya",
    image: riyaImg, 
  },
  {
    id: 2,
    name: "Akshat Goyal",
    position: "Joint Secretary",
    email: "akshatgoyal.edcsxc@gmail.com",
    phone: "6289954835",
    linkedin: "https://www.linkedin.com/in/akshat-goyal-be8637214",
    image: akshatImg,
  },
  {
    id: 3,
    name: "Raunak Khetan",
    position: "Joint Secretary",
    email: "raunakkhetan.edcsxc@gmail.com",
    phone: "9674526326",
    linkedin: "https://www.linkedin.com/in/raunakkhetan",
    image: raunakImg,
  },
  {
    id: 4,
    name: "Gourav Saria",
    position: "Joint Secretary",
    email: "gouravsaria.edcsxc@gmail.com",
    phone: "6436049949",
    linkedin: "https://www.linkedin.com/in/gourav-saria-59b4661b7",
    image: gouravImg,
  },
  {
    id: 5,
    name: "Nikunjj Saraf",
    position: "Incubation Head",
    email: "nikunji.saraf.edcsxc@gmail.com",
    phone: "9339014884",
    linkedin: "https://www.linkedin.com/in/nikunji-saraf-7ba644274",
    image: nikunjjImg,
  },
  
  // Second row: Harsh, Zaara, Pradyum
  {
    id: 6,
    name: "Harsh Chitlangia",
    position: "Startup and Innovation Head",
    email: "harshchitlangia.edcsxc@gmail.com",
    phone: "9830655675",
    linkedin: "https://www.linkedin.com/in/harsh-chitlangia-b3176a1a4",
    image: harshImg,
  },
  {
    id: 7,
    name: "Zaara Bux",
    position: "Startup and Innovation Head",
    email: "zaarabux.edcsxc@gmail.com",
    phone: "9836107353",
    linkedin: "http://linkedin.com/in/zaara-bux-87214328b",
    image: zaaraImg,
  },
  {
    id: 8,
    name: "Pradyum Kothari",
    position: "Research and Growth Head",
    email: "pradyumkothari.edcsxc@gmail.com",
    phone: "9874219884",
    linkedin: "http://linkedin.com/in/pradyum-kothari",
    image: pradyumImg,
  },
  
  // Other team members
  {
    id: 9,
    name: "Akshita Lohia",
    position: "Research and Growth Head",
    email: "akshitalohia.edcsxc@gmail.com",
    phone: "8585834144",
    linkedin: "https://www.linkedin.com/in/akshita-lohia-27615b2277",
    image: akshitaImg,
  },
  {
    id: 10,
    name: "Akarsh Nethwewala",
    position: "Finance Head",
    email: "akarshnethwewala.edc.sxc@gmail.com",
    phone: "9874967005",
    linkedin: "https://www.linkedin.com/in/akarsh-nethwewala-642587267",
    image: aakarshImg,
  },

  {
    id: 11,
    name: "Chirag Jhunjhunwala",
    position: "Finance Head",
    email: "chiragjhunjhunwala.edcsxc@gmail.com",
    phone: "8961041554",
    linkedin: "http://linkedin.com/in/chirag-jhunjhunwala-61318b28a",
    image: chiragImg,
  },
  {
    id: 12,
    name: "Hiten Golchha", 
    position: "Public Relations Head",
    email: "hitengolchha.edcsxc@gmail.com",
    phone: "8017605268",
    linkedin: "https://www.linkedin.com/in/hiten-golchha-2e271a248",
    image: hitenImg,
  },
  {
    id: 13,
    name: "Nitya Goyal",
    position: "Marketing and Creative Head",
    email: "nityagoyal.edcsxc@gmail.com",
    phone: "6292190280",
    linkedin: "https://www.linkedin.com/in/nitya-goyal-ab6152647",
    image: nityaImg, 
  },
  {
    id: 14,
    name: "Niyati Agarwal",
    position: "Editorial Head",
    email: "niyatiagarwal.edcsxc@gmail.com",
    phone: "9334272644",
    linkedin: "http://linkedin.com/in/niyati-agarwal-gunnu1922",
    image: niyatiImg,
  },

  {
    id: 16,
    name: "Vatsal Sadani",
    position: "Creative Head",
    email: "vatsalsadani.edcsxc@gmail.com",
    phone: "9007022739",
    linkedin: "https://www.linkedin.com/in/vatsal-sadani",
    image: vatsalImg, // Reusing aakarsh image for vatsal
  },
  // {
  //   id: 17,
  //   name: "Varun Agarwal",
  //   position: "Team Member",
  //   email: "varunagarwal.edcsxc@gmail.com",
  //   phone: "9733742000",
  //   linkedin: "https://www.linkedin.com/in/varun-agarwal-16559e28b",
  //   image: aakarshImg,
  // },
  // {
  //   id: 18,
  //   name: "Khushi Jain",
  //   position: "Team Member",
  //   email: "khushijain.edcsxc@gmail.com",
  //   phone: "7003514718",
  //   linkedin: "https://www.linkedin.com/in/khushi-jain-a993321a6",
  //   image: akshitaImg,
  // },
  // {
  //   id: 19,
  //   name: "Dhruv Mohta",
  //   position: "Team Member",
  //   email: "dhruvmohta.edcsxc@gmail.com",
  //   phone: "6291513970",
  //   linkedin: "https://www.linkedin.com/in/dhruv-mohta-507b30227b7",
  //   image: chiragImg,
  // },
  // {
  //   id: 20,
  //   name: "Siddhant Maheshwari",
  //   position: "Team Member",
  //   email: "siddhantmaheshwari.edcsxc@gmail.com",
  //   phone: "7439597149",
  //   linkedin: "https://www.linkedin.com/in/siddhant-maheshwari-921932807",
  //   image: hitenImg,
  // },
  // {
  //   id: 21,
  //   name: "Krish Jhawar",
  //   position: "Team Member",
  //   email: "krishjhawar.edcsxc@gmail.com",
  //   phone: "9832624173",
  //   linkedin: "http://linkedin.com/in/krishjhawar",
  //   image: vatsalImg,
  // },
  // {
  //   id: 22,
  //   name: "Tanmay Jain",
  //   position: "Team Member",
  //   email: "tanmayjain.edcsxc@gmail.com",
  //   phone: "9693592224",
  //   linkedin: "https://www.linkedin.com/in/tanmay-jain",
  //   image: pradyumImg,
  // },
  // {
  //   id: 23,
  //   name: "Kinjal Basu",
  //   position: "Team Member",
  //   email: "kinjalbasu.edcsxc@gmail.com",
  //   phone: "9831960363",
  //   linkedin: "https://www.linkedin.com/in/kinjal-basu-9b68a2264",
  //   image: akshitaImg,
  // },
  {
    id: 24,
    name: "Trisha Agarwal",
    position: "Marketing Head",
    email: "trishaagarwal.edcsxc@gmail.com",
    phone: "9830658953",
    linkedin: "https://www.linkedin.com/in/trisha-agarwal-b5323228b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
    image: trishaImg,
  },
  // {
  //   id: 25,
  //   name: "Gourav Chandak",
  //   position: "Team Member",
  //   email: "gauravchandak.edcsxc@gmail.com",
  //   phone: "6648917178",
  //   linkedin: "https://www.linkedin.com/in/gaurav-chandak-513202268a",
  //   image: gouravImg,
  // },
  // {
  //   id: 26,
  //   name: "Saanvi Khanna",
  //   position: "Team Member",
  //   email: "saanvikhanna.edcsxc@gmail.com",
  //   phone: "9748349819",
  //   linkedin: "www.linkedin.com/in/saanvi-khanna",
  //   image: zaaraImg,
  // },
  // {
  //   id: 27,
  //   name: "Sreshtha Sureka",
  //   position: "Team Member",
  //   email: "sreshthasureka.edcsxc@gmail.com",
  //   phone: "6291651278",
  //   linkedin: "https://www.linkedin.com/in/sreshtha-sureka",
  //   image: niyatiImg,
  // },
  // {
  //   id: 28,
  //   name: "Suhani Jain",
  //   position: "Team Member",
  //   email: "suhanijain.edcsxc@gmail.com",
  //   phone: "8296172732",
  //   linkedin: "https://www.linkedin.com/in/suhanijain01",
  //   image: riyaImg,
  // },
];

const Team = () => {
  const nameRefs = useRef([]);

  const adjustFontSize = () => {
    nameRefs.current.forEach((nameElement) => {
      if (nameElement) {
        const parentWidth = nameElement.parentElement.offsetWidth;
        let fontSize = 18; // Starting font size

        // Decrease font size if text overflows
        while (nameElement.scrollWidth > parentWidth && fontSize > 12) {
          fontSize -= 1;
          nameElement.style.fontSize = `${fontSize}px`;
        }
      }
    });
  };

  useEffect(() => {
    adjustFontSize();
    window.addEventListener("resize", adjustFontSize);

    return () => {
      window.removeEventListener("resize", adjustFontSize);
    };
  }, []);
  return (
    <div className="team">
      <h1 className="team__header">Meet Our Team</h1>
      <img src={board} alt="Board Group" className="team__boardImg" />

      <div className="team__members">
        {boardMembers.map((member, index) => (
          <div key={member.id} className="team__card">
            <img
              src={member.image}
              alt={member.name}
              className="team__memberImg"
            />
            <h2
              ref={(el) => (nameRefs.current[index] = el)}
              className="team__memberName"
            >
              {member.name}
            </h2>
            <p className="team__memberPosition">{member.position}</p>

            <div className="team__memberEmail">
              <Mail className="team__icon" />
              <a href={`mailto:${member.email}`}>Mail Here!</a>
            </div>
            <div className="team__memberContact">
              <Phone className="team__icon" />
              <span>{member.phone}</span>
            </div>
            <div className="team__memberLinkedIn">
              <Linkedin className="team__icon" />
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn Profile
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;