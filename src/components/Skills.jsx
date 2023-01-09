import React from "react";
import { useNavigate } from "react-router-dom";
import "./Skills.css";

const Skills = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="resume">
        <div class="container">
          <div class="row">
            <div class="col-md-6">
              <h1 className="skill-heading">
                <b>Skills</b>
              </h1>
              <div>
                <button className="btn" onClick={() => navigate("/resume")}>
                  Work Experience
                </button>
                <button
                  className="btn"
                  style={{ marginLeft: "80px" }}
                  onClick={() => navigate("/education")}
                >
                  Education
                </button>
              </div>
            </div>
            <div class="col-6 col-md-4">
              <div class="card bg-light">
                <ul>
                  <li>
                    I'm a paragraph. Click here to add your own text and edit
                    me.
                  </li>
                  <li>
                    I'm a paragraph. Click here to add your own text and edit
                    me.
                  </li>
                  <li>
                    I'm a paragraph. Click here to add your own text and edit
                    me.
                  </li>
                  <li>
                    I'm a paragraph. Click here to add your own text and edit
                    me.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
