import React, { useEffect, useState } from 'react';
import  {
  Text,
  Font,
  Page,
  StyleSheet,
  View,
} from '@react-pdf/renderer';
import axios from 'axios';

import ContentHeader from './ContentHeader';
import Testament from './Testament';
import DocumentsAndInfo from './DocumentsAndInfo';
import DeceasedStockInfo from './DeceasedStockInfo';
import LineBreak from './LineBreak';
import FuneralExpenses from './FuneralExpenses';
import WidowInfo from './WidowInfo';
import IntroInfo from './IntroInfo';
import TruestedMen from './TrustedMen';
import DeceasedInfo from './Deceased';
import Partners from './Partners';
import PresentAtMeeting from './PresentAtMeeting';
import Announcer from './Announcer';
import DeceasedProperty from './DeceasedProperty';
import DeceasedBankInfo from './DeceasedBankInfo';
import DeceasedPersonalItemsInfo from './DeceasedPersonalItemsInfo';
import DeceasedDebtInfo from './DeceasedDebtInfo';
import DeceasedTotalSum from './DeceasedTotalSum';
import WidowTotalSum from './WidowTotalSum';
import Announcement from './Announcement';
import Insurance from './Insurance';
import WindowAnnouncement from './WindowAnnouncement';
import Inquires from './Inquires';
import Assurances from './Assurances';
import Footer from './Footer';

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

const API_BASE_URL = "https://perukirjakone.herokuapp.com/";

const DocumentPage = (props) => {
  const [jsonSchema, setJsonSchema] = useState(null);

  const getJSONSchema = async (payload) => {
    const getUserInfoFromStorage = JSON.parse(window.localStorage.getItem('userInfo'));
    try {
      await axios.get(`${API_BASE_URL}${'documents/'}${getUserInfoFromStorage.id}`)
        .then(res => {
          setJsonSchema(res.data.jsonSchema);
        })
    } catch (error) {
      console.log("error", error);
      //setUpdateJsonSchemaError(error.response.payload.message[0].messages[0].message);
    }
  }

  useEffect(() => {
    getJSONSchema();
  }, []);

  return (
    <Page {...props} style={styles.page} wrap={false}>
      <View style={styles.containere}>
        <View style={[styles.row, styles.border]}>
          <View>
            <Text style={styles.invoiceTitle}>Perukirja</Text>
          </View>
        </View>

        <IntroInfo jsonSchema={jsonSchema && jsonSchema} />
        <TruestedMen jsonSchema={jsonSchema && jsonSchema} />
        <DeceasedInfo jsonSchema={jsonSchema && jsonSchema} />
        <Partners jsonSchema={jsonSchema && jsonSchema} />
        <PresentAtMeeting jsonSchema={jsonSchema && jsonSchema} />
        {/*<ContentHeader label="2. Shareholder info" />*/}
        {/*<ShareholderInfo jsonSchema={jsonSchema} />*/}
        {/*<ContentHeader label="3. Testament" />*/}
        <Testament jsonSchema={jsonSchema} />
        {/*<ContentHeader label="3. Documents" />*/}
        <DocumentsAndInfo jsonSchema={jsonSchema} />
        <Announcer jsonSchema={jsonSchema} />
        <LineBreak />
        <ContentHeader label="Vainajan vara" />
        <DeceasedBankInfo jsonSchema={jsonSchema} />
        <DeceasedStockInfo jsonSchema={jsonSchema}  />
        <DeceasedProperty jsonSchema={jsonSchema} />
        <DeceasedPersonalItemsInfo jsonSchema={jsonSchema} />
        <DeceasedDebtInfo jsonSchema={jsonSchema} />
        <DeceasedTotalSum jsonSchema={jsonSchema} />

        {/*<WidowAndInterest jsonSchema={jsonSchema} />*/}
        {/*<AgreeementAndAnnouncement jsonSchema={jsonSchema}/>*/}
        {/*<AgreementInvitees jsonSchema={jsonSchema} />*/}
        <br />
        <ContentHeader label="Vainajan ja pesän velat ja poistot" />
        <FuneralExpenses jsonSchema={jsonSchema} />
        <ContentHeader label="Lesken varat" />
        <WidowInfo jsonSchema={jsonSchema} />
        <WidowTotalSum jsonSchema={jsonSchema} />
        <Announcement jsonSchema={jsonSchema} />
        <Insurance jsonSchema={jsonSchema} />
        <WindowAnnouncement jsonSchema={jsonSchema} />
        <Inquires jsonSchema={jsonSchema} />
        <Assurances jsonSchema={jsonSchema} />
        <Footer jsonSchema={jsonSchema} />
      </View>
    </Page>
  )
}


export default DocumentPage;
