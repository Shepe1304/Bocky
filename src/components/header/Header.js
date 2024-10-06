import React from "react";
import "./Header.css";
import magnifier from "../images/magnifier.png";

const Header = () => {
  return (
    <div className="header--container">
      <div className="header--dummy"></div>
      <header className="header">
        <div className="header--logo heading">
          <div className="header--logo_text">BOCKY</div>
          <img className="header--logo_icon" src={magnifier}></img>
        </div>
        <div className="header--slogan">
          <div className="header--slogan_main">
            Scientific and US History events from 1400 to 2023!
          </div>
          <div className="header--slogan_secondary">
            Enter a year and find out.
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
