import React from "react";
import { Link } from 'react-router-dom';

import MasterForm from '../WizardForm';

import logo from '../images/logo.svg';

function DocumentPage(props) {
  return (
    <div className="hero is-fullheight has-background-white	">
      <div>
        <nav className="navbar" role="navigation" aria-label="main navigation">
          <div className="navbar-brand">
            <div className="navbar-brand">
              <Link to="/" className="navbar-item">
                <img src={logo} alt="Perukirjakone" />
              </Link>
            </div>
          </div>
        </nav>

        <div className="notification">
          <h3 className="title is-3">Fill form</h3>
          <p>Description</p>
          <hr />
          <MasterForm />
        </div>
      </div>
    </div>
  );
}

export default DocumentPage;
