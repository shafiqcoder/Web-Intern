import React, { useState } from "react";
//useState is a Hook
export default function TextForm(props) {
  const [text, setText] = useState("Enter Text Here");

  //This is array destructuring.
  //i am using text variable for a state and its default value is "Enter Text Here"
  // When i need to change the text i will use the setText function to update the state.
  // I cannot update the text value like this text="new text"
  // correct way to update the state is setText("new Text")
  const handleUpClick = () => {
    if (text.length === 0) {
      props.showAlert("Please Enter Text", "warning");
    } else {
      let newtext = text.toUpperCase();
      setText(newtext);
      props.showAlert("Converted to UpperCase!", "success");
    }
  };
  const handleloClick = () => {
    if (text.length === 0) {
      props.showAlert("Please Enter Text", "warning");
    } else {
      let newtext = text.toLocaleLowerCase();
      setText(newtext);
      props.showAlert("Converted to Lower Case!", "success");
    }
  };
  const handleonchange = (event) => {
    setText(event.target.value);
    //it is always used to handle events
  };
  const handleClearText = () => {
    setText("");
    props.showAlert("Text Cleared!", "success");
  };

  const handlecopy = () => {
    var text = document.getElementById("mybox");
    console.log(typeof text.value);
    if (text.value === "") {
      props.showAlert("Please Enter Text", "warning");
    } else {
      text.select();
      navigator.clipboard.writeText(text.value);
      document.getSelection().removeAllRanges();
      props.showAlert("Text copied to clipboard successfully", "success");
    }
  };
  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    console.log(newText.length);
    if (newText.length === 1) {
      props.showAlert("There is no space", "warning");
    } else {
      setText(newText.join(" "));
      props.showAlert("Extra spaces removed!", "success");
    }
  };

  return (
    <>
      {/* Convert into jsx fragment bcz only one can be returned */}
      <div>
        <h1>{props.title}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleonchange}
            id="mybox"
            rows="7"
          ></textarea>
        </div>
        <button
          disabled={text.length === 0}
          className="btn btn-primary"
          onClick={handleUpClick}
        >
          Convert to UpperCase
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-3 my-1"
          onClick={handleloClick}
        >
          Convert to lowerCase
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-3 my-1"
          onClick={handleClearText}
        >
          Clear Text
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-3 my-1"
          onClick={handlecopy}
        >
          Copy Text
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-3 my-1"
          onClick={handleExtraSpaces}
        >
          Remove Extra Spaces
        </button>
      </div>
      <div className="container my-3">
        {/* my-3 put the margin of 3 in y */}
        <h2>Your Text Summary</h2>
        <p>
          {
            text.split(" ").filter((element) => {
              return element.length !== 0;
            }).length
          }
          words and {text.length} characters
        </p>
        <p>
          {0.008 *
            text.split(" ").filter((element) => {
              return element.length !== 0;
            }).length}
          minutes read
        </p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Nothing to preview!"}</p>
      </div>
      <p className="text-center">
        <h6>
          <i>
            Made by shafiqcoder with ❤️ &nbsp;
            <a href="https://github.com/shafiqcoder">GitHub</a>&nbsp;&nbsp;,
            <a href="https://twitter.com/shafiqcoder">Twitter</a>
          </i>
        </h6>
      </p>
    </>
  );
}
