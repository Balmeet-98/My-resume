import React from "react";
import "./Card.css";
import { useNavigate } from "react-router-dom";
const Card = () => {
  const navigate = useNavigate();
  return (
    <>
      <span className="card bg-light" style={{ width: "30rem" }}>
        <span className="card-body">
          <h1>
            <b>Hello</b>
          </h1>
          <h5 className="card-title">A Bit About Me</h5>
          <p className="card-text">
            I'm a paragraph. Click here to add your own text and edit me. I’m a
            great place for you to tell a story and let your users know a little
            more about you.
          </p>
        </span>
      </span>
      <span className="btnCont">
        <button
          type="button"
          className="btn"
          onClick={() => navigate("/resume")}
        >
          Resume
        </button>
        <button type="button" className="btn">
          Projects
        </button>
        <button type="button" className="btn">
          Contact
        </button>
      </span>
    </>
  );
};

export default Card;
