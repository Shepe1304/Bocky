import React from "react";
import "./Searchbar.css";
import magnifier_icon from "../images/magnifier_icon.png";

const Searchbar = (props) => {
  const SearchByWord = (searchInput, data) => {
    if (searchInput == "") return;

    props.setAns(null);
    props.setPrevAns(null);
    props.setAfterAns(null);
    props.setSearched(false);
    props.setInput("");

    const words = searchInput.toLowerCase().split(" ");
    const record = [];
    for (let j = 0; j < data.length; j++) {
      record.push([0, j]);
    }
    console.log(record);
    console.log(words);

    for (let i = 0; i < words.length; i++) {
      for (let j = 0; j < data.length; j++) {
        console.log(record[j][0], record[j][1]);
        if (data[j].event.toLowerCase().includes(words[i])) {
          record[j][0]++;
        }
      }
    }
    record.sort(function (a, b) {
      return b[0] - a[0];
    });
    console.log(record);
    console.log(record[0][0], record[1][0], record[2][0]);

    if (record[0][0] > 0) props.setAns(data[record[0][1]]);
    if (record[1][0] > 0) props.setPrevAns(data[record[1][1]]);
    if (record[2][0] > 0) props.setAfterAns(data[record[2][1]]);
    console.log(props.prevAns, props.ans, props.afterAns);

    props.setWordSearched(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    SearchByWord(props.searchInput, props.data);
  };

  return (
    <div className="searchbar--container">
      <div className="searchbar--headline bolded">Keyword Search: </div>
      <form className="searchbar" onSubmit={handleSubmit}>
        <input
          type="text"
          value={props.searchInput}
          onChange={(e) => {
            props.setSearchInput(e.target.value);
            props.setSearched(false);
            if (props.searchInput == "") {
              props.setAns(null);
              props.setPrevAns(null);
              props.setAfterAns(null);
              props.setWordSearched(false);
            }
          }}
          placeholder="Search by word..."
          className="searchbar--input"
        />
      </form>
      <abbr title="Search">
        <div
          className="searchbar--search_icon"
          onClick={(e) => SearchByWord(props.searchInput, props.data)}
        >
          <img src={magnifier_icon} alt="" />
        </div>
      </abbr>
    </div>
  );
};

export default Searchbar;
