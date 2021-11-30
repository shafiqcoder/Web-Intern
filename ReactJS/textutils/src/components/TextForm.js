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
    let newtext = text.toUpperCase();
    setText(newtext);
  };
  const handleloClick = () => {
    let newtext = text.toLocaleLowerCase();
    setText(newtext);
  };
  const handleonchange = (event) => {
    setText(event.target.value);
    //it is always used to handle events
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
        <button className="btn btn-primary" onClick={handleUpClick}>
          Convert to UpperCase
        </button>
        <button className="btn btn-primary mx-3" onClick={handleloClick}>
          Convert to lowerCase
        </button>
      </div>
      <div className="container my-3">
        {/* my-3 put the margin of 3 in y */}
        <h2>Your Text Summary</h2>
        <p>
          {text.split(" ").length} words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} minutes read</p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}
