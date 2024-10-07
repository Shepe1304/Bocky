import React, { useEffect, useState } from "react";
import "./EventBox.css";
import paper from "../images/paper3.png";
import paper_other from "../images/paper4.png";

const EventBox = (props) => {
  const date = new Date();
  const words = props.searchInput.toLowerCase().split(" ");

  return (
    <>
      {props.ans && props.ans.year ? (
        <div className="eventBox">
          <img
            className="eventBox--background"
            src={props.type == "curr" ? paper : paper_other}
            alt=""
          />
          <div className="eventBox--content">
            {props.searched || props.wordSearched ? (
              <>
                <div className="eventBox_content--heading bolded">
                  {props.searched && props.type == "curr" ? (
                    "Closest Event"
                  ) : (
                    <>
                      {props.searched
                        ? props.type == "prev"
                          ? "Previous Event"
                          : "Following Event"
                        : null}
                    </>
                  )}
                  {props.wordSearched ? (
                    <>
                      Search Result
                      {/* {props.type == "curr"
                        ? "Best Search Result"
                        : "Search Result"} */}
                    </>
                  ) : null}
                </div>
                <div className="eventBox_content--content">
                  <div className="eventBox_content--time">
                    <div className="eventBox_content--year">
                      <div className="bolded">Year:</div> {props.ans.year}
                    </div>
                    <div className="eventBox_content--time_distance">
                      <div className="eventBox_content--years_ago">
                        {date.getFullYear() - props.ans.year} years ago
                      </div>
                      {props.input - props.ans.year != 0 ? (
                        <span style={{ fontSize: "23px" }}>
                          {props.input != "" ? <>&#903;</> : null}
                        </span>
                      ) : null}
                      <div className="eventBox_content--years_ago">
                        {props.input - props.ans.year != 0 &&
                        props.input != "" ? (
                          <>
                            {Math.abs(props.input - props.ans.year)}{" "}
                            {Math.abs(props.input - props.ans.year) == 1
                              ? "year"
                              : "years"}{" "}
                            {props.input - props.ans.year < 0
                              ? "after "
                              : "before "}
                            {props.input}
                          </>
                        ) : null}
                      </div>
                    </div>
                  </div>
                  <div className="eventBox_content--event small_gap">
                    <div className="bolded">Event:</div>{" "}
                    <span>
                      {props.searched ? (
                        props.ans.event
                      ) : (
                        <>
                          {props.displayWords.map((displayWord, id) => {
                            if (!words.includes(displayWord.toLowerCase())) {
                              return <span>{displayWord}</span>;
                            } else {
                              return (
                                <span
                                  className="bolded"
                                  style={{
                                    backgroundColor: "rgb(247, 202, 94)",
                                  }}
                                >
                                  {displayWord}
                                </span>
                              );
                            }
                          })}
                        </>
                      )}
                    </span>
                  </div>
                  <div className="eventBox_content--links">
                    <div className="eventBox_content--links_heading bolded small_gap">
                      Links:
                    </div>
                    {props.ans.links
                      ? props.ans.links.map((link, id) => {
                          return (
                            <div>
                              <abbr title={link}>
                                <a href={link} target="_blank">
                                  Learn More {id + 1}
                                </a>
                              </abbr>
                            </div>
                          );
                        })
                      : null}
                  </div>
                </div>
              </>
            ) : null}
          </div>
        </div>
      ) : null}
    </>
  );
};

export default EventBox;
