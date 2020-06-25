import React from 'react';

import { PDFViewer } from '@react-pdf/renderer';

import PDFDocument from '../../../PDFTranslation';

const Step5 = () => {
  return (
    <>
      <PDFViewer height="700px" width="100%" >
        <PDFDocument />
      </PDFViewer>
      <br />
      <br />
    </>
  )
}

export default Step5;
