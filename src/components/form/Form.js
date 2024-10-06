import React from "react";
import "./Form.css";

const Form = (props) => {
  const Search = (input, data) => {
    if (input == "") return;
    // console.log(data.length);
    props.setAns(null);
    props.setPrevAns(null);
    props.setAfterAns(null);
    props.setWordSearched(false);
    props.setSearchInput("");

    let input_num = parseInt(input);
    let left = 0,
      right = data.length - 1;
    let ans = -1;
    while (left <= right) {
      let mid = Math.trunc(left + (right - left) / 2);

      if (
        ans < 0 ||
        Math.abs(data[mid].year - input_num) <
          Math.abs(data[ans].year - input_num)
      ) {
        ans = mid;
      }
      if (data[mid].year < input_num) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }

    while (left <= right) {
      let mid = Math.trunc(left + (right - left) / 2);

      if (
        ans < 0 ||
        Math.abs(data[mid].year - input_num) <
          Math.abs(data[ans].year - input_num)
      ) {
        ans = mid;
      }
      if (data[mid].year > input_num) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }

    props.setAns(data[ans]);
    if (ans > 0) {
      props.setPrevAns(data[ans - 1]);
    }
    if (ans < data.length - 1) {
      props.setAfterAns(data[ans + 1]);
    }
    props.setSearched(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(parseFloat(props.input));

    if (isNaN(parseFloat(props.input))) {
      console.log(props.searched);

      alert(
        "Years with letters may exist one day. But until then... Please enter a number!"
      );
      props.setInput("");
      return;
    } else {
      Search(props.input, props.data);
    }
  };

  return (
    <div className="form">
      <form
        // onSubmit={() => {
        //   Search(props.input);
        // }}
        onSubmit={handleSubmit}
      >
        <div className="form--main">
          <div className="form--search_bar">
            <div className="form--search_heading">Year:</div>
            <input
              type="text"
              value={props.input}
              onChange={(e) => {
                props.setInput(e.target.value);
                props.setWordSearched(false);
                if (props.input == "") {
                  props.setAns(null);
                  props.setPrevAns(null);
                  props.setAfterAns(null);
                  props.setSearched(false);
                }
              }}
              placeholder="A year..."
              className="form--input"
            />
          </div>
        </div>
      </form>
      <button
        onClick={() => {
          Search(props.input, props.data);
        }}
        className="form--search_button"
      >
        Find
      </button>
    </div>
  );
};

export default Form;
