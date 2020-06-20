import React from 'react';

import { PDFViewer } from '@react-pdf/renderer';

import PDFDocument from '../../../PDFTranslation';

const Step4 = () => {
  return (
    <>
      <PDFViewer height="600px" width="100%" >
        <PDFDocument />
      </PDFViewer>
      <br />
      <br />
    </>
  )
}

export default Step4;
