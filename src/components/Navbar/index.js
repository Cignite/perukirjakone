import React from "react";
import Img from "../images/logo.png";

import "./styles.scss";

function Navbar(props) {
  return (
    <nav className="Navbar navbar">
      <div className="container">
        <div className="navbar-brand">
          <a className="navbar-item" href="/">
            <img src={Img} width={100} height={100} />
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
