import React from "react";
import { Link } from 'react-router-dom';

//import MasterForm from '../MasterForm';
import WizardForm from '../WizardForm';


import logo from '../images/logo.svg';

function DocumentPage(props) {
  return (
    <div className="hero is-fullheight has-background-white	">
      <div>
        <nav class="navbar" role="navigation" aria-label="main navigation">
          <div class="navbar-brand">
            <div class="navbar-brand">
              <Link to="/" class="navbar-item">
                <img src={logo} alt="Perukirjakone" />
              </Link>
            </div>
          </div>
        </nav>

        <div className="notification">
          <h3 className="title is-3">Fill form</h3>
          <p>Description</p>
          <hr />
          <WizardForm />
        </div>
      </div>
    </div>
  );
}

export default DocumentPage;
