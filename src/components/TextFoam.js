import React, { useState } from "react";

export default function TextFoam(props) {
  const [text, setText] = useState("");
  const [count, setCount] = useState("0");

  const reverseWordText = () => {
    let ans = "";
    for (let index = text.length; index >= 0; index--) {
      ans += text.charAt(index);
    }
    let newText = ans;
    setText(newText);
  };
  const reverseText = () => {
    let ans = "";
    for (let index = text.length; index >= 0; index--) {
      ans += text.charAt(index);
    }
    let newText = ans;
    setText(newText);
  };

  const clearText = () => {
    let newText = "";
    setText(newText);
  };
  const handleLoCase = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };

  const handleUpCase = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handleonChange = (event) => {
    setText(event.target.value);
    let arr = text.split(" ");
    let count = 0;
    for (let index = 0; index < arr.length; index++) {
      if (arr[index] != "") {
        count++;
      }
    }
    setCount(count);
    
  };

  return (
    <div>
      <h1 className={`text-${props.mode === "light" ? "dark" : "light"}`}>
        {props.heading}
      </h1>
      <div className="mb-3 container">
        <textarea
          className={`form-control bg-${
            props.mode === "light" ? "light" : "dark"
          } text-${props.mode === "light" ? "dark" : "light"}`}
          id="exampleFormControlTextarea1"
          rows="8"
          value={text}
          onChange={handleonChange}
        ></textarea>
        <button className="btn btn-primary mx-1 my-2" onClick={handleUpCase}>
          Convert to UpperCase
        </button>
        <button className="btn btn-primary mx-1 my-2" onClick={handleLoCase}>
          Convert to LowerCase
        </button>
        <button className="btn btn-primary mx-1 my-2" onClick={clearText}>
          Clear Text
        </button>
        <button className="btn btn-primary mx-1 my-2" onClick={reverseText}>
          Reverse Text
        </button>
        <button className="btn btn-primary mx-1 my-2" onClick={reverseWordText}>
          Reverse Word
        </button>
      </div>

      <div className="container">
        <h1 className={`text-${props.mode === "light" ? "dark" : "light"}`}>
          Your Text Summary
        </h1>
        <p className={`text-${props.mode === "light" ? "dark" : "light"}`}>
          {count} words, {text.length} Characters
        </p>
        <p className={`text-${props.mode === "light" ? "dark" : "light"}`}>
          {text.split(" ").length * 0.008} minutes to read
        </p>
        <h2 className={`text-${props.mode === "light" ? "dark" : "light"}`}>
          Preview
        </h2>
        <p className={`text-${props.mode === "light" ? "dark" : "light"}`}>
          {text}
        </p>
      </div>
    </div>
  );
}
