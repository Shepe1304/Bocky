import React from "react";
import "./Footer.css";

const Footer = (props) => {
  const OpenAboutUs = () => {
    props.setShowPopup(!props.showPopup);
    props.setShowPopupType("about_us");
  };

  const OpenEmailForm = () => {
    props.setShowPopup(!props.showPopup);
    props.setShowPopupType("email");
  }

  return (
    <footer className="footer">
      <div className="footer--about_us" onClick={OpenAboutUs}>
        About us
      </div>
      <div className="footer--email" onClick={OpenEmailForm}>bockybook@gmail.com</div>
      <div className="footer--year">2024</div>
    </footer>
  );
};

export default Footer;
