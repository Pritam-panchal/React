import React, { useState } from "react";

export default function TextForm(props) {
    const[text,setText]=useState("");
function clk() {
    setText(text.toUpperCase());
    props.showAlert("hello sir","info")
   
}
function change(event) {
    setText(event.target.value);
}
  
  return (
    <>
    <div className="container p-3">
      <div className="mb-3">
        <label htmlFor="exampleFormControlTextarea1" className="form-label">
          <b>{props.title}</b>
        </label>
        <textarea placeholder="Enter here" className="form-control" id="textarea1" rows="8" value={text} onChange={change}></textarea>
      </div>
      <button className="btn btn-success" onClick={clk}>Convert</button>
        </div>
    <div className="container mt-4">
        <h2>Your Text Summary</h2>
        <b>{text.split(" ").length} words and {text.length} characters.</b>
        <h3>Preview</h3>
        <p className="text-success">{text}</p>
    </div>
    </>
  );
}
