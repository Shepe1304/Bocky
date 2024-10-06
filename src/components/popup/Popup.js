import React from "react";
import "./Popup.css";
import x_icon from "../images/x.png";
import magnifier from "../images/magnifier.png";
import Email from "../contact-form/Email";

const Popup = (props) => {
  const ClosePopup = () => {
    props.setShowPopup(!props.showPopup);
    props.setShowPopupType("");
  };

  return (
    <>
      {props.showPopup ? (
        <div className="popup--container">
          {props.showPopupType == "about_us" ? (
            <div className="popup">
              <div className="popup--headline heading">ABOUT US</div>
              <div className="popup--content">
                <div className="popup--headline2">Our School:</div>{" "}
                <div>University of South Florida</div>
                <div className="popup--headline2">Our Team:</div>{" "}
                <div>CSieSTAR</div>
                <div className="popup--name_list">
                  <div className="popup--headline2">Our Members:</div>
                  <div className="popup--name_list_items">
                    <div className="popup--name_list_item">Quynh Giang Ho</div>
                    <div className="popup--name_list_item">Duc Cuong Le</div>
                    <div className="popup--name_list_item">Hoang Nam Tran</div>
                    <div className="popup--name_list_item">Rodela Ghosh</div>
                  </div>
                </div>
                <div className="popup--headline2">
                  Our{" "}
                  <span className="popup--logo">
                    <div className="popup--logo_text heading">BOCKY</div>
                    <img className="popup--logo_icon" src={magnifier}></img>
                  </span>
                </div>{" "}
                <div className="popup--last_line">
                  Presented to SASEHack 2024!
                </div>
                <abbr title="Close">
                  <div onClick={ClosePopup} className="popup--close_button">
                    <img src={x_icon} alt="" />
                  </div>
                </abbr>
              </div>
            </div>
          ) : (
            <Email showPopup={props.showPopup} setShowPopup={props.setShowPopup}/>
          )}
        </div>
      ) : null}
    </>
  );
};

export default Popup;
