import React from "react";
import "./NoEventBoxes.css";
import Bocky from "../Bocky";

const NoEventBoxes = (props) => {
  return (
    <div className="noEventBoxes">
      <Bocky />
      <div className="noEventBoxes--textbox">
        <div className="noEventBoxes--arrow"></div>
        {props.wordSearched ? (
          <div className="noEventBoxes--text">
            It seems there's currently no event with the word you wanted in{" "}
            {props.mode == 1 ? (
              <span className="bolded">Science</span>
            ) : (
              <span className="bolded">US History</span>
            )}
            .
            <div>
              Is there any other word{" "}
              <span
                className="bolded"
                style={{ backgroundColor: "rgb(245, 202, 94)" }}
              >
                Bocky
              </span>{" "}
              can help with?
            </div>
          </div>
        ) : (
          <div className="noEventBoxes--text">
            Put in a year &#8212; any year, and I,{" "}
            <span
              className="bolded"
              style={{ backgroundColor: "rgb(245, 202, 94)" }}
            >
              Bocky
            </span>
            , will do the rest.
          </div>
        )}
      </div>
    </div>
  );
};

export default NoEventBoxes;
