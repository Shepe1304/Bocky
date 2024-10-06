import React from "react";
import "./EventBoxes.css";
import EventBox from "./EventBox";
import NoEventBoxes from "./NoEventBoxes";

const EventBoxes = (props) => {
  return (
    <>
      {(!props.ans &&
        !props.prevAns &&
        !props.afterAns &&
        props.wordSearched) ||
      (!props.wordSearched && !props.searched) ? (
        <NoEventBoxes wordSearched={props.wordSearched} mode={props.mode}/>
      ) : (
        <div className="eventBoxes">
          <EventBox
            type={"prev"}
            input={props.input}
            setInput={props.setInput}
            searchInput={props.searchInput}
            setSearchInput={props.setSearchInput}
            searched={props.searched}
            wordSearched={props.wordSearched}
            ans={props.prevAns}
            setAns={props.setPrevAns}
            displayWords={props.displayWordsPrev}
            setDisplayWords={props.setDisplayWordsPrev}
          />
          <EventBox
            type={"curr"}
            input={props.input}
            setInput={props.setInput}
            searchInput={props.searchInput}
            setSearchInput={props.setSearchInput}
            searched={props.searched}
            wordSearched={props.wordSearched}
            ans={props.ans}
            setAns={props.setAns}
            displayWordsPrev={props.displayWordsPrev}
            displayWords={props.displayWordsCurr}
            setDisplayWords={props.setDisplayWordsCurr}
          />
          <EventBox
            type={"after"}
            input={props.input}
            setInput={props.setInput}
            searchInput={props.searchInput}
            setSearchInput={props.setSearchInput}
            searched={props.searched}
            wordSearched={props.wordSearched}
            ans={props.afterAns}
            setAns={props.setAfterAns}
            displayWords={props.displayWordsAfter}
            setDisplayWords={props.setDisplayWordsAfter}
          />
        </div>
      )}
    </>
  );
};

export default EventBoxes;
