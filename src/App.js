import "./App.css";
import { useEffect, useState } from "react";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Form from "./components/form/Form";
import EventBoxes from "./components/eventBoxes/EventBoxes";
import Modes from "./components/modes/Modes";

import { science_data } from "./components/data/Data";
import { history_data } from "./components/data/Data";
import Searchbar from "./components/searchbar/Searchbar";
import Popup from "./components/popup/Popup";

function App() {
  const [mode, setMode] = useState(1); //1: Science and 2: US History
  const [data, setData] = useState(science_data);

  const [input, setInput] = useState("");
  const [searchInput, setSearchInput] = useState("");
  const [ans, setAns] = useState(null);
  const [prevAns, setPrevAns] = useState(null);
  const [afterAns, setAfterAns] = useState(null);
  const [searched, setSearched] = useState(false);
  const [wordSearched, setWordSearched] = useState(false);
  const [displayWordsCurr, setDisplayWordsCurr] = useState([]);
  const [displayWordsPrev, setDisplayWordsPrev] = useState([]);
  const [displayWordsAfter, setDisplayWordsAfter] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [showPopupType, setShowPopupType] = useState("");

  useEffect(() => {
    if (input == "") {
      setSearched(false);
    }
  }, [input]);

  useEffect(() => {
    if (searchInput == "") {
      setWordSearched(false);
    }
  }, [searchInput]);

  useEffect(() => {
    {
      mode == 1 ? setData(science_data) : setData(history_data);
    }
    setSearched(false);
    setWordSearched(false);
    setInput("");
    setSearchInput("");
  }, [mode]);

  useEffect(() => {
    const Process_string = (words, string, type) => {
      let s = string;
      for (let i = 0; i < words.length; i++) {
        let find = s.toLowerCase().search(words[i]);
        if (find == -1) continue;
        s =
          s.substring(0, find) +
          "/n" +
          s.substring(find, find + words[i].length) +
          "/n" +
          s.substring(find + words[i].length, s.length + 3);
      }
      if (type == "curr") setDisplayWordsCurr(s.split("/n"));
      else if (type == "prev") setDisplayWordsPrev(s.split("/n"));
      else if (type == "after") setDisplayWordsAfter(s.split("/n"));
    };

    const words = searchInput.toLowerCase().split(" ");
    if (ans) Process_string(words, ans.event, "curr");
    if (prevAns) Process_string(words, prevAns.event, "prev");
    if (afterAns) Process_string(words, afterAns.event, "after");
  }, [ans, prevAns, afterAns]);

  return (
    <div className="App">
      <Popup
        showPopup={showPopup}
        setShowPopup={setShowPopup}
        showPopupType={showPopupType}
        setShowPopupType={setShowPopupType}
      />
      <Header />
      <Searchbar
        searchInput={searchInput}
        setSearchInput={setSearchInput}
        input={input}
        setInput={setInput}
        ans={ans}
        setAns={setAns}
        prevAns={prevAns}
        setPrevAns={setPrevAns}
        afterAns={afterAns}
        setAfterAns={setAfterAns}
        data={data}
        wordSearched={wordSearched}
        setWordSearched={setWordSearched}
        searched={searched}
        setSearched={setSearched}
        displayWordsPrev={displayWordsPrev}
        displayWordsCurr={displayWordsCurr}
        displayWordsAfter={displayWordsAfter}
        setDisplayWordsPrev={setDisplayWordsPrev}
        setDisplayWordsCurr={setDisplayWordsCurr}
        setDisplayWordsAfter={setDisplayWordsAfter}
      />
      <Modes mode={mode} setMode={setMode} />
      <Form
        mode={mode}
        setMode={setMode}
        input={input}
        setInput={setInput}
        ans={ans}
        setAns={setAns}
        prevAns={prevAns}
        setPrevAns={setPrevAns}
        afterAns={afterAns}
        setAfterAns={setAfterAns}
        searched={searched}
        setSearched={setSearched}
        wordSearched={wordSearched}
        setWordSearched={setWordSearched}
        data={data}
        searchInput={searchInput}
        setSearchInput={setSearchInput}
        displayWordsPrev={displayWordsPrev}
        displayWordsCurr={displayWordsCurr}
        displayWordsAfter={displayWordsAfter}
        setDisplayWordsPrev={setDisplayWordsPrev}
        setDisplayWordsCurr={setDisplayWordsCurr}
        setDisplayWordsAfter={setDisplayWordsAfter}
      />
      <EventBoxes
        input={input}
        setInput={setInput}
        searchInput={searchInput}
        setSearchInput={setSearchInput}
        ans={ans}
        setAns={setAns}
        prevAns={prevAns}
        setPrevAns={setPrevAns}
        afterAns={afterAns}
        setAfterAns={setAfterAns}
        searched={searched}
        setSearched={setSearched}
        wordSearched={wordSearched}
        setWordSearched={setWordSearched}
        displayWordsPrev={displayWordsPrev}
        displayWordsCurr={displayWordsCurr}
        displayWordsAfter={displayWordsAfter}
        setDisplayWordsPrev={setDisplayWordsPrev}
        setDisplayWordsCurr={setDisplayWordsCurr}
        setDisplayWordsAfter={setDisplayWordsAfter}
        mode={mode}
      />
      <Footer
        showPopup={showPopup}
        setShowPopup={setShowPopup}
        showPopupType={showPopupType}
        setShowPopupType={setShowPopupType}
      />
    </div>
  );
}

export default App;
