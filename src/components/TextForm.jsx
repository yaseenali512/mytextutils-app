import React, { useState } from "react";

const TextForm = (props) => {
  const [text, setText] = useState("");

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const changeToUpperCase = () => {
    let upperCaseText = text.toUpperCase();
    setText(upperCaseText);
    props.showAlert("Converted to UpperCase", "success");
  };

  const changeToLowerCase = () => {
    let lowerCaseText = text.toLowerCase();
    setText(lowerCaseText);
    props.showAlert("Converted to LowerCase", "success");
  };

  const clearTextHandle = () => {
    setText("");
    props.showAlert("Text cleared", "success");
  };

  const handleCopyText = () => {
    let text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    document.getSelection().removeAllRanges();
    props.showAlert("Copied text", "success");
  };

  const handleRemoveExtraSpaces = () => {
    let trimmedStr = text.split(/[ ]+/);
    setText(trimmedStr.join(" "));
    props.showAlert("Extra spaces are removed", "success");
  };

  return (
    <>
      <div
        className="container"
        style={{
          color: props.mode === "dark" ? "white" : "#042743 ",
        }}
      >
        <h1 className="mb-1">{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === "dark" ? "#13466e" : "white",
              color: props.mode === "dark" ? "white" : "#042743",
            }}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button
          className="btn btn-primary  mx-1 my-1"
          onClick={changeToUpperCase}
          disabled={text.length === 0}
        >
          {" "}
          Convert to UpperCase
        </button>
        <button
          className="btn btn-primary mx-1 my-1"
          onClick={changeToLowerCase}
          disabled={text.length === 0}
        >
          Convert to LowerCase
        </button>
        <button
          className="btn btn-primary mx-2"
          onClick={clearTextHandle}
          disabled={text.length === 0}
        >
          Clear Text
        </button>
        <button
          className="btn btn-primary mx-2"
          onClick={handleCopyText}
          disabled={text.length === 0}
        >
          {" "}
          Copy Text
        </button>
        <button
          className="btn btn-primary mx-2"
          onClick={handleRemoveExtraSpaces}
          disabled={text.length === 0}
        >
          Remove Extra Spaces
        </button>
      </div>
      <div
        className="container my-3"
        style={{
          color: props.mode === "dark" ? "white" : "#042743",
        }}
      >
        <h2>Text Summary</h2>
        <p>
          {text.split(/\s+/).length -
            1 +
            " words and " +
            text.length +
            " characters"}
        </p>
        <p>{0.08 * text.split("").length + " Minutes read"}</p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
};

export default TextForm;
