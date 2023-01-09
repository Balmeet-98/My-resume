import React from "react";
import { Route, Routes } from "react-router-dom";
import Education from "./components/Education";
import Main from "./components/Main";
import Resume from "./components/Resume";
import Skills from "./components/Skills";

const Routing = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/education" element={<Education />} />
        <Route path="/skills" element={<Skills />} />
      </Routes>
    </>
  );
};

export default Routing;
