import React from 'react';
import ReactDOM from 'react-dom';
import { PDFViewer, PDFDownloadLink } from '@react-pdf/renderer';
import { Link } from 'react-router-dom';

import MasterForm from '../WizardForm';
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
      {/*<>
        <PDFDownloadLink
          document={<PDFDocument />}
          fileName="IVDReport.pdf"
          style={{
            textDecoration: "none",
            padding: "10px",
            color: "#4a4a4a",
            backgroundColor: "#f2f2f2",
            border: "1px solid #4a4a4a"
          }}
        >
          {({ blob, url, loading, error }) =>
            loading ? "Loading document..." : "Download Pdf"
          }
        </PDFDownloadLink>
      </>*/}
    </div>
  </div>
);

export default PDFViewDocument;
