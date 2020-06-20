import React from 'react';
import { PDFDownloadLink } from '@react-pdf/renderer';

import PDFDocument from '../../../PDFTranslation';

import './styles.scss';

const Step4 = () => {
  return (
    <div className="downloadStep">
      <div className="columns is-centered">
        <p className="thankYou">Thank you for using Perukirjakone service</p>
        <br />
      </div>
      <div className="columns is-centered">
        <PDFDownloadLink
          document={<PDFDocument />}
          fileName="document.pdf"
          className="button is-primary downloadBtn"
        >
          {({ blob, url, loading, error }) =>
            loading ? "Loading document..." : "Download Pdf"
          }
        </PDFDownloadLink>
      </div>
    </div>
  )
}

export default Step4;
