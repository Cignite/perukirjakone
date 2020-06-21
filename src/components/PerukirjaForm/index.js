import React from "react";
import { Link } from 'react-router-dom';

import MasterForm from '../WizardForm';

import logo from '../images/logo.svg';
import './styles.scss';

function DocumentPage(props) {
  return (
    <div className="hero is-fullheight has-background-white	">
      <div>
        <nav className="navbar" role="navigation" aria-label="main navigation">
          <div className="navbar-brand">
            <div className="navbar-brand">
              <Link to="/" className="navbar-item wizard-logo">
                <img src={logo} alt="Perukirjakone" />
              </Link>
            </div>
          </div>
        </nav>

        <div className="schemaForm">
          <h3 className="title is-3">Fill all the necessary info</h3>
          <p>Make sure information provided are correct </p>
          <hr />
          <MasterForm />
        </div>
      </div>
    </div>
  );
}

export default DocumentPage;
