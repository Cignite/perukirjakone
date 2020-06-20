import React from "react";

import "./styles.scss";

function Navbar(props) {
  return (
    <nav className="Navbar navbar">
      <div className="container">
        <div className="navbar-brand">
          <a className="navbar-item" href="/">
            <h2 class="title is-spaced is-1 has-text-weight-bold">Perukirjakone</h2>
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
