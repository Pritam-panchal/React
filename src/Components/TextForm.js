import { useState } from "react";
import React from "react";
export default function TextForm(props) {

    const [text, setText] = useState("");
    const [myStyle, setmyStyle] = useState({
        color: "Black",
        backgroundColor: "white"
    });

    const [btnd, setbtnd] = useState("Dark");
    const [btnclr, setbtnclr] = useState("btn btn-outline-dark mx-2");
    function uperCase() {
        setText(text.toUpperCase());
        props.showAlert("Your Text has been Upper Case","primary");
    }
    function lowerCase() {
        setText(text.toLowerCase());
        props.showAlert("Your Text has been Lower Case","warning");
    }
    function clear() {
        setText("");
    }
    function copy() {
        let newText = document.getElementById("mybox");
        navigator.clipboard.writeText(newText.value);
        props.showAlert("Copied your Text.","success");
    }
    function removExtraSpace() {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Remove Extra Space","info");
    }
    function clr() {
        if (btnd == "Dark") {
            setmyStyle({
                color: "white",
                backgroundColor: "Black"
            })
            setbtnd("Light")
            setbtnclr("btn btn-outline-light mx-2")
        } else {
            setmyStyle({
                color: "Black",
                backgroundColor: "white"
            })
            setbtnd("Dark")
            setbtnclr("btn btn-outline-dark mx-2")
        }
    }
    function change(event) {
        setText(event.target.value);
    }
    return (
        <>
            
                <div className="my-3 container" >
                  <h3 className={`text-${props.textClr}`}>{props.heading}</h3>
                    <textarea id="mybox" placeholder="Enter here..." className={`form-control bg-${props.Mode} text-${props.textClr}`} value={text} onChange={change} rows="12"></textarea>
                   <div className="container my-2"> 
                   <p className={`text-${props.textClr}`}>{text.split(" ").filter((element)=>{ return element.length!==0 }).length} words and {text.length} characters</p>
                   </div>
                    <button type="button" className="mx-1 my-1 btn btn-outline-primary " onClick={uperCase}>Capital</button>
                    <button type="button" className="mx-1 my-1 btn btn-outline-warning " onClick={lowerCase}>Small</button>
                    <button type="button" className="mx-1 my-1 btn btn-outline-success " onClick={copy}>Copy Text</button>
                    <button type="button" className="mx-1 my-1 btn btn-outline-info "  onClick={removExtraSpace}>Remove Extra Spaces</button>
                    <button type="button" className="mx-1 my-1 btn btn-outline-danger " onClick={clear}>Clear Text</button>

                   
                   
                   
                </div>

        </>
    )
}
