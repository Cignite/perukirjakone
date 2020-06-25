import React from 'react';
import { PDFDownloadLink } from '@react-pdf/renderer';

import PDFDocument from '../../../PDFTranslation';

import './styles.scss';

const Step6 = () => {
  return (
    <div className="downloadStep">
      <div className="is-centered">
        <p className="thankYou">Thank you for using Perukirjakone service</p>
        <br />
        <p className="thankYou">Click to download file</p>
        <br />
        <br />
      </div>
      <div className="columns is-centered">
        <PDFDownloadLink
          document={<PDFDocument />}
          fileName="document.pdf"
          className="button is-dark downloadBtn"
        >
          {({ blob, url, loading, error }) =>
            loading ? "Loading document..." : "Download file"
          }
        </PDFDownloadLink>
      </div>
    </div>
  )
}

export default Step6;
