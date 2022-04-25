import React from "react";
import logo from "../assets/floqast-logo.png";

function Title() {
  return (
    <div className="title-container">
      <div className="title">
        <div className="sub-header-txt">
          <img src={logo} alt="FloQast" />
          The
        </div>
        <h1 className="header-txt">
          Fastest, Most Accurate
        </h1>
        <h1 className="sub-header-txt">Way to Close Your Books!</h1>
      </div>
    </div>
  );
}

export default Title;
