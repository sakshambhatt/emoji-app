import React, { useState } from "react";
import "./styles.css";

var emojiDictionary = {
  "😀": "Grinning Face",
  "😃": "Grinning Face with Big Eyes",
  "😄": "Grinning Face with Smiling Eyes",
  "😁": "Beaming Face with Smiling Eyes",
  "😆": "Grinning Squinting Face",
  "😅": "Grinning Face with Sweat",
  "🤣": "Rolling on the Floor Laughing",
  "😂": "Face with Tears of Joy"
};

var knownEmojis = Object.keys(emojiDictionary);
// var knownEmojiValues = Object.values(emojiDictionary);
// for (var i = 0; i < knownEmojiValues.length; i++) {
//   console.log(knownEmojiValues[i]);
// }

//var counter = 0;
export default function App() {
  var [meaning, setMeaning] = useState("");

  function emojiClickHandler(emoji) {
    setMeaning(emojiDictionary[emoji]);
  }

  function emojiInputHandler(event) {
    var userInput = event.target.value;
    var meaning = emojiDictionary[userInput];
    if (meaning === undefined) {
      meaning =
        "This is not available, please enter one of the emojis given below";
    }
    setMeaning(meaning);
  }
  return (
    <div className="App">
      <h1>Do you know this emoji?</h1>
      <small>Enter any emoji</small>
      <div></div>
      <input onChange={emojiInputHandler}></input>
      <h2>meaning: {meaning}</h2>
      <h3>Emojis we know:</h3>
      {knownEmojis.map(function (emoji) {
        return <span onClick={() => emojiClickHandler(emoji)}>{emoji}</span>;
      })}
    </div>
  );
}
