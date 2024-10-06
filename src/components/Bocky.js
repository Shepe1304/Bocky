import React, { useState } from "react";
import "./Bocky.css";
import bocky from "./images/bocky1.png";

const Bocky = () => {
  return (
    <div className="bocky">
      <img src={bocky} alt="" />
    </div>
  );
};

export default Bocky;
