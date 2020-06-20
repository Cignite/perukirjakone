import React from 'react';
import {
  Document,
  Font,
} from '@react-pdf/renderer';

import Page from './Page';

import OpenSans from './fonts/Open_Sans/OpenSans-Regular.ttf';
import LatoRegular from './fonts/Lato/Lato-Regular.ttf';
import LatoBold from './fonts/Lato/Lato-Bold.ttf';

Font.register( {
  family: 'Open Sans',
  src: OpenSans,
});
Font.register( {
  family: 'Lato',
  src: LatoRegular,
});
Font.register( {
  family: 'Lato Bold',
  src: LatoBold,
});

const MyDocument = () => (
  <Document>
    <Page orientation="landscape" size="A4" />
  </Document>
  );


export default MyDocument;
