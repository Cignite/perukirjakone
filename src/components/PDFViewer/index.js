import React from 'react';
import { PDFViewer } from '@react-pdf/renderer';
import { Link } from 'react-router-dom';

import PDFDocument from '../PDFTranslation';
import logo from '../images/logo.svg';

const PDFViewDocument = () => (
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

      <>
        <PDFViewer height="600px" width="100%" >
          <PDFDocument />
        </PDFViewer>
      </>
    </div>
  </div>
);

export default PDFViewDocument;
