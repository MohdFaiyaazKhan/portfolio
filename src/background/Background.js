import React from "react";
import "../styles/background.css";
import bg from "../assets/bg.png";

const Background = () => {
  return (
    <>
      <div className="shadow-overlay"></div>
      <img
            src={bg}
            alt="Background"
            id="bg"
            className="background-image"
      />

    </>
  );
};

export default Background;
