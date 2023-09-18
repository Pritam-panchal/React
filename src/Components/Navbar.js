import React from "react";
export default function Navbar(props){
    return(
        <>
        <nav className={`navbar navbar-expand-lg bg-${props.Mode} navbar-${props.Mode}`}>
  <div className={`container-fluid`}>
    <a className={`navbar-brand  mx-5 `}><strong>TextUtils</strong></a>
    <div className="form-check form-switch  ">
  <input className="form-check-input" onClick={props.togelMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
  <label className="form-check-label me-5" htmlFor="flexSwitchCheckDefault">{props.darkLight}</label>
</div>
  </div>
</nav>
        </>
    )
}