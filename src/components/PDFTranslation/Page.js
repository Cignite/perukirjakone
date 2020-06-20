import React from 'react';
import  {
  Text,
  Font,
  Page,
  StyleSheet,
  View,
} from '@react-pdf/renderer';

import Customer from './Customer';
import ContentHeader from './ContentHeader';
import ShareholderInfo from './Shareholder';
import Testament from './Testament';
import DocumentsAndInfo from './DocumentsAndInfo';
import DeceasedProperties from './DeceasedProperty';
import DeceasedBankStocks from './DeceasedBankStock';
import WidowAndInterest from './WidowAndInterest';
import AgreeementAndAnnouncement from './AgreementAndAnnouncement';
import AgreementInvitees from './AgreementInvitees';
import LineBreak from './LineBreak';
import FuneralExpenses from './FuneralExpenses';
import WidowInfo from './WidowInfo';

import OpenSans from './fonts/Open_Sans/OpenSans-Regular.ttf';
import LatoRegular from './fonts/Lato/Lato-Regular.ttf';
import LatoBold from './fonts/Lato/Lato-Bold.ttf';

const styles = StyleSheet.create({
  page: {
    padding: 50,
    margin: 50
  },
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  row: {
    margin: 10,
    display: "flex",
    flexDirection: "row"
  },
  col: {
    margin: 10,
    padding: 10,
  },
  border: {
    borderStyle: "solid",
    borderBottomColor: "#2d2d2d",
    borderBottomWidth: 1
  },
  borderBox: {
    borderStyle: "dashed",
    borderColor: "#2d2d2d",
    borderWidth: 1
  },
  invoiceTitle: {
    fontSize: 26,
    fontFamily: 'Lato Bold',
    color: 'black'
  },
  header: {
    paddingLeft: 30,
    marginBottom: -30,
    fontSize: '20px',
    fontFamily: 'Lato Bold',
    color: 'black'
  },
  colHeader: {
    fontSize: 15,
    fontFamily: 'Lato Bold',
  },
  colText: {
    fontSize: 15,
    fontFamily: 'Lato',
    color: '#A8026F'
  },
});

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

const DocumentPage = (props) => (
  <Page {...props} style={styles.page} wrap={false}>
    <View style={styles.containere}>
      <View style={[styles.row, styles.border]}>
        <View>
          <Text style={styles.invoiceTitle}>Perukirja</Text>
        </View>
      </View>

      <ContentHeader label="1. Customer" />
      <Customer />
      <ContentHeader label="2. Shareholder info" />
      <ShareholderInfo />
      <ContentHeader label="3. Testament" />
      <Testament />
      <ContentHeader label="3. Documents" />
      <DocumentsAndInfo />
      <LineBreak />
      <ContentHeader label="4. Deceased properties" />
      <DeceasedProperties />
      <ContentHeader label="5. Bank/Stocks" />
      <DeceasedBankStocks />
      <ContentHeader label="6. THE MONEY OF THE WIDOW WITH INTEREST (ALSO STOCKS & FUNDS)" />
      <WidowAndInterest />
      <AgreeementAndAnnouncement />
      <AgreementInvitees />
      <ContentHeader label="7. Funeral expenses" />
      <FuneralExpenses />
      <ContentHeader label="8. Widow" />
      <WidowInfo />
    </View>
  </Page>
  );


export default DocumentPage;
