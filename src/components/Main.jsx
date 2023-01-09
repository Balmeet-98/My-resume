import React from "react";
import Card from "./Card";
import "./Main.css";
const Main = () => {
  return (
    <>
      <div className="main">
        <img
          src="https://static.wixstatic.com/media/c837a6_a5f904abc9224779abfc65cb53fa6ba7~mv2.jpg/v1/crop/x_158,y_151,w_1117,h_1117/fill/w_480,h_480,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/gettyimages-1284121212-2048x2048_edited_.jpg"
          alt="pictur"
        />
        <span>
          <Card />
        </span>
      </div>
    </>
  );
};

export default Main;
