import React from "react";
export default function Alert(props) {
  return (
   
      props.alert && <div className="container ">
       <div className={`alert alert-${props.alert.typ}`} role="alert">
      {props.alert.msg}
      </div>
      </div>
   
  );
}
