import React, { useRef, useEffect } from "react";
import board from "../assets/board.jpeg";
import "../styles/team.css";
import { Phone, Linkedin, Mail } from "lucide-react";

// Import each board member image manually
import img1 from "../assets/boardImages/img1.png";
import img2 from "../assets/boardImages/img2.png";
import img3 from "../assets/boardImages/img3.png";
import img4 from "../assets/boardImages/img4.png";
import img5 from "../assets/boardImages/img5.png";
import img6 from "../assets/boardImages/img6.png";
import img7 from "../assets/boardImages/img7.png";
import img8 from "../assets/boardImages/img8.png";
import img9 from "../assets/boardImages/img9.png";
import img10 from "../assets/boardImages/img10.png";
import img11 from "../assets/boardImages/img11.png";
import img12 from "../assets/boardImages/img12.png";
import img13 from "../assets/boardImages/img13.png";
import img14 from "../assets/boardImages/img14.png";
import img15 from "../assets/boardImages/img15.png";
import img16 from "../assets/boardImages/img16.png";
import img17 from "../assets/boardImages/img17.png";
import img18 from "../assets/boardImages/img18.png";
import img19 from "../assets/boardImages/img19.png";
import img20 from "../assets/boardImages/img20.png";
import img21 from "../assets/boardImages/img21.png";
import img23 from "../assets/boardImages/img24.png";

const boardMembers = [
  {
    id: 1,
    name: "Ansh Arya",
    position: "Director",
    email: "ansharya06@gmail.com",
    phone: "7003308220",
    linkedin: "http://linkedin.com/in/ansh-arya",
    image: img1,
  },
  {
    id: 2,
    name: "Aarav Mittal",
    position: "Joint Secretary",
    email: "mittalaarav966@gmail.com",
    phone: "7029418318",
    linkedin: "https://linkedin.com/in/aarav-mittal-75585024a",
    image: img2,
  },

  {
    id: 4,
    name: "Rishab Dugar",
    position: "Joint Secretary",
    email: "rishabdugar1225@gmail.com",
    phone: "8697957671",
    linkedin: "https://linkedin.com/in/rishab-dugar-2685911b5",
    image: img4,
  },
  {
    id: 3,
    name: "Vedant Saboo",
    position: "Joint Secretary",
    email: "saboovedant1@gmail.com",
    phone: "9830953922",
    linkedin: "https://linkedin.com/in/vedant-saboo-5a7bb9231",
    image: img3,
  },
  {
    id: 5,
    name: "Raima Chaterjee Ray",
    position: "Incubation Lead",
    email: "raimachatterjeeray@gmail.com",
    phone: "9038900958",
    linkedin: "https://linkedin.com/in/raima-chatterjee-ray-91009324b/",
    image: img15,
  },
  {
    id: 6,
    name: "Ashwin Nair",
    position: "Startup & Innovation Lead",
    email: "ashwin40nair@gmail.com",
    phone: "8420144823",
    linkedin: "https://linkedin.com/in/ashwin-nair-879b03250",
    image: img5,
  },

  {
    id: 8,
    name: "Harshvardhan Jalan",
    position: "Research Lead",
    email: "harshvardhanjalan03@gmail.com",
    phone: "98306034422",
    linkedin: "https://linkedin.com/in/harshvardhan-jalan-320aa0256",
    image: img6,
  },
  {
    id: 7,
    name: "Karan Daga",
    position: "Research & Finance",
    email: "kdaga007@gmail.com",
    phone: "8697710113",
    linkedin: "https://linkedin.com/in/karandaga",
    image: img7,
  },
  {
    id: 9,
    name: "Kashvi Khaitan",
    position: "Finance Lead",
    email: "kashvikhaitan11@gmail.com",
    phone: "8981506421",
    linkedin: "https://linkedin.com/in/kashvi-khaitan-0007b9258",
    image: img8,
  },
  {
    id: 10,
    name: "Bhawika Mittal",
    position: "Marketing Lead",
    email: "mittalbhawika@gmail.com",
    phone: "7319317458",
    linkedin: "https://linkedin.com/in/bhawika-mittal-9693a722a",
    image: img9,
  },
  {
    id: 11,
    name: "Muskan Jain",
    position: "Marketing & Creative",
    email: "7114.muskanjain@gmail.com",
    phone: "6291177018",
    linkedin: "https://linkedin.com/in/muskanjain",
    image: img10,
  },
  {
    id: 12,
    name: "Drishti Khemka",
    position: "Public Relations",
    email: "kmpldrishti@gmail.com",
    phone: "9732291000",
    linkedin: "https://linkedin.com/in/drishti-khemka-019086237",
    image: img11,
  },
  {
    id: 13,
    name: "Palak Daga",
    position: "Public Relations",
    email: "palakdaga1401@gmail.com",
    phone: "9339007477",
    linkedin: "https://linkedin.com/in/palak-daga-0874411ba",
    image: img12,
  },
  {
    id: 14,
    name: "Pranit Parasrampuria",
    position: "Editorial",
    email: "pranit2405@gmail.com",
    phone: "8777674050",
    linkedin: "https://linkedin.com/in/pranit01",
    image: img13,
  },
  {
    id: 15,
    name: "Harshita Mundra",
    position: "Editorial",
    email: "harshitamundra01@gmail.com",
    phone: "9432166081",
    linkedin: "https://linkedin.com/in/harshitamundra",
    image: img14,
  },
  {
    id: 16,
    name: "Aditi Agarwal",
    position: "Working Committee Member",
    email: "harshitamundra01@gmail.com",
    phone: "9432166081",
    linkedin: "https://linkedin.com/in/harshitamundra",
    image: img19,
  },
  {
    id: 18,
    name: "Devansh Roongta",
    position: "Working Committee Member",
    email: "harshitamundra01@gmail.com",
    phone: "9432166081",
    linkedin: "https://linkedin.com/in/harshitamundra",
    image: img23,
  },

  {
    id: 17,
    name: "Prachi Modi",
    position: "Working Committee Member",
    email: "harshitamundra01@gmail.com",
    phone: "9432166081",
    linkedin: "https://linkedin.com/in/harshitamundra",
    image: img21,
  },
  {
    id: 19,
    name: "Riya A. Jain",
    position: "Working Committee Member",
    email: "riyaajain.2301@gmail.com",
    phone: "9830249456",
    linkedin: "https://www.linkedin.com/in/riya-a-jain-63450b20a",
    image: img20,
  },
  {
    id: 20,
    name: "Ishita Bagri",
    position: "Editorial",
    email: "harshitamundra01@gmail.com",
    phone: "9432166081",
    linkedin: "https://linkedin.com/in/harshitamundra",
    image: img16,
  },
  {
    id: 21,
    name: "Sooryam Goenka",
    position: "Working Committee Member",
    email: "harshitamundra01@gmail.com",
    phone: "9432166081",
    linkedin: "https://linkedin.com/in/harshitamundra",
    image: img18,
  },

  {
    id: 22,
    name: "Kriti Mohta",
    position: "Working Committee Member",
    email: "harshitamundra01@gmail.com",
    phone: "9432166081",
    linkedin: "https://linkedin.com/in/harshitamundra",
    image: img17,
  },
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
