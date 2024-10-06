import React from "react";

const InformationLog = (props) => {
  const date = new Date();

  return (
    <div className="informationLog">
      <div className="informationLog--closest_event">
        {props.searched ? (
          <>
            <div className="informationLog--heading">Closest Event</div>
            <div className="informationLog--content">
              <div className="informationLog--time">
                <div className="informationLog--year">
                  Year: {props.ans.year}
                </div>
                <div className="informationLog--years_ago">
                  {props.input - props.ans.year != 0 ? (
                    <>
                      {Math.abs(props.input - props.ans.year)}{" "}
                      {Math.abs(props.input - props.ans.year) == 1
                        ? "year"
                        : "years"}{" "}
                      {props.input - props.ans.year < 0 ? "after " : "before "}
                      {props.input}
                    </>
                  ) : null}
                </div>
                <div className="informationLog--years_ago">
                  {date.getFullYear() - props.ans.year} years ago
                </div>
              </div>
              <div className="informationLog--event">
                Event: {props.ans.event}
              </div>
              <div className="informationLog--links">
                <div className="informationLog--links_heading">Links:</div>
                {props.ans.links.map((link) => {
                  return (
                    <a href={link} target="_blank">
                      {link}
                    </a>
                  );
                })}
              </div>
            </div>
          </>
        ) : null}
      </div>
    </div>
  );
};

export default InformationLog;
