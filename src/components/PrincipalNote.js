import React from "react";
import "../styles/principalNote.css";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
function PrincipalNote() {
  return (
    <div className="principal">
      <div className="principalNote">
        <div className="principalImg">
          <img
            src="https://www.edcsxc.com/wp-content/uploads/2023/11/principal-edited.jpg"
            alt=""
          />
        </div>
        <div className="principalText">
          <p className="principalTextHead">Principal's Note</p>
          <p className="principalTextContent">
            Rev. Dr. Dominic Savio, S.J. St. Xavier’s College (Autonomous),
            Kolkata is proud to have contributed to the cause of education and
            culture in Bengal for the last 160 years. We were the first to set
            up a centre for Entrepreneurship in the form of NSTEDB [National
            Science and Technology Entrepreneurship Development Board] in an
            undergraduate Arts, Science and Commerce College. The
            Entrepreneurship Development Cell of St. Xavier’s College
            (Autonomous), Kolkata, intends to nurture an entrepreneurial
            attitude among young minds by conducting various programmes for the
            undergraduate students where they are given a platform to interact
            with the corporate intelligentsia…
          </p>
          <Button
            sx={{ color: "aqua", border: "1px solid aqua" }}
            component={Link}
            className="principalButton"
            to="principals-note"
          >
            Learn More
          </Button>
        </div>
      </div>
    </div>
  );
}

export default PrincipalNote;
