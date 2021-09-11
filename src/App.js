import React, { useState } from "react";
import "./styles.css";

const eventsDictionary = {
  "💘": "Valentine’s Day",
  "🏡": "Work from Home",
  "🎿": "Winter Olympics",
  "🎂": "Birthday",
  "🎓": "Graduation",
  "🎃": "Halloween"
};

const emojis = Object.keys(eventsDictionary);

export default function App() {
  const [userInput, setUserInput] = useState("");
  const [meaning, setMeaning] = useState("meaning will appear here!");

  function inputEventHandler(event) {
    const inputEmoji = event.target.value;
    setUserInput(inputEmoji);

    if (inputEmoji in eventsDictionary) {
      setMeaning(eventsDictionary[inputEmoji]);
    } else {
      setMeaning("emoji not in database, Sorry!");
    }
  }
  function clickHandler(item) {
    setMeaning(eventsDictionary[item]);
  }
  return (
    <div className="App">
      <h1>Eventmojis</h1>
      <input
        onChange={inputEventHandler}
        style={{
          padding: "1em",
          minWidth: "80%"
        }}
      ></input>
      <h2>{userInput}</h2>
      <h3>{meaning}</h3>

      {emojis.map((item) => (
        <span
          onClick={() => clickHandler(item)}
          key={item}
          style={{ padding: "1rem", fontSize: "2rem", cursor: "pointer" }}
        >
          {item}
        </span>
      ))}
    </div>
  );
}
