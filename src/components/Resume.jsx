import React from "react";
import "./Resume.css";
import { useNavigate } from "react-router-dom";
const Resume = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="resume">
        <div class="container">
          <div class="row">
            <div class="col-md-6">
              <h1 className="heading">
                <b>Work Experience</b>
              </h1>
              <div>
                <button className="btn" onClick={() => navigate("/education")}>
                  Education
                </button>
                <button
                  className="btn"
                  style={{ marginLeft: "80px" }}
                  onClick={() => navigate("/skills")}
                >
                  Skills
                </button>
              </div>
            </div>
            <div class="col-6 col-md-4">
              <div class="resume-card bg-light">
                <div class="card-body">
                  <h5 class="card-title">Editor</h5>
                  <h6 class="card-subtitle mb-2 text-muted">
                    (2035 - Present)
                  </h6>
                  <p class="card-text mb-3">
                    I'm a paragraph. Click here to add your own text and edit
                    me. It’s easy. Just click “Edit Text” or double click me to
                    add your own content and make changes to the font.
                  </p>
                </div>
                <div class="card-body">
                  <h5 class="card-title">Writer at Large</h5>
                  <h6 class="card-subtitle mb-2 text-muted">(2035 - 2035)</h6>
                  <p class="card-text mb-3">
                    I'm a paragraph. Click here to add your own text and edit
                    me. It’s easy. Just click “Edit Text” or double click me to
                    add your own content and make changes to the font.
                  </p>
                </div>
                <div class="card-body">
                  <h5 class="card-title">Intern</h5>
                  <h6 class="card-subtitle mb-2 text-muted">(2035 - 2035)</h6>
                  <p class="card-text mb-3">
                    I'm a paragraph. Click here to add your own text and edit
                    me. It’s easy. Just click “Edit Text” or double click me to
                    add your own content and make changes to the font.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Resume;
