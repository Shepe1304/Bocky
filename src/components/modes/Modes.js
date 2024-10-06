import React from "react";
import "./Modes.css";

const Modes = (props) => {
  const ChangeMode = (mode) => {
    props.setMode(mode);
  };

  return (
    <div className="modes">
      <div className="modes--headline bolded">Choose mode:</div>
      <div className="modes--modes">
        <div
          className={`modes--science${props.mode == 1 ? " current_mode" : ""}`}
          onClick={(e) => ChangeMode(1)}
        >
          Science
        </div>
        <div
          className={`modes--history${props.mode == 2 ? " current_mode" : ""}`}
          onClick={(e) => ChangeMode(2)}
        >
          US History
        </div>
      </div>
    </div>
  );
};

export default Modes;
