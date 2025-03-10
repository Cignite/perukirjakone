import React from 'react';
import { PDFDownloadLink } from '@react-pdf/renderer';

import PDFDocument from '../../../PDFTranslation';

import './styles.scss';

const Step6 = () => {
  // NAME OF THE PERSON+MONTH+PERUKIRJA
  // customerlastName_lokakku_perukirja
  
  return (
    <div className="downloadStep">
      <div className="is-centered">
        <p className="thankYou">Kiitos Perukirjakone-palvelun käytöstä.</p>
        <br />
        <p className="thankYou">Lataa tiedosto napsauttamalla</p>
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
            loading ? "Loading document..." : "Lataa asiakirja"
          }
        </PDFDownloadLink>
      </div>
    </div>
  )
}

export default Step6;
