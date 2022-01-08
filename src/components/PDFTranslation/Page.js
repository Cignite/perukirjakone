import React, { useEffect, useState } from "react";
import { Text, Font, Page, StyleSheet, View } from "@react-pdf/renderer";
import axios from "axios";

import DocumentsAndInfo from "./DocumentsAndInfo";
import IntroInfo from "./IntroInfo";
import TruestedMen from "./TrustedMen";
import DeceasedInfo from "./Deceased";
import Partners from "./Partners";
import PresentAtMeeting from "./PresentAtMeeting";
import Announcer from "./Announcer";
import DeceasedAssetsPropertiesSum from "./DeceasedAssetsPropertieslSum";
import Announcement from "./Announcement";
// import Insurance from "./Insurance";
import WindowAnnouncement from "./WindowAnnouncement";
import Inquires from "./Inquires";
import Assurances from "./Assurances";
import Footer from "./Footer";
import DeceasedAssetsProperties from "./DeceasedAssetsProperties";
import DeceaseddDebtExpenses from "./DeceasedDebtExpenses";
import DeceasedDebtExpensesTotal from "./DeceasedDebtExpensesSum";
import DeceasedBalanceSummary from "./DeceasedBalanceSummary";
import WidowAssetsProperties from "./WidowAssetsProperties";
import WidowBalanceSummary from "./WidowBalanceSummary";

import OpenSans from "./fonts/Open_Sans/OpenSans-Regular.ttf";
import LatoRegular from "./fonts/Lato/Lato-Regular.ttf";
import LatoBold from "./fonts/Lato/Lato-Bold.ttf";

import scssstyles from "./styles.scss";

const styles = StyleSheet.create({
  page: {
    padding: 20,
    margin: 20,
  },
  container: {
    flex: 1,
    flexDirection: "row",
  },
  row: {
    margin: 10,
    display: "flex",
    flexDirection: "row",
  },
  col: {
    margin: 10,
    padding: 10,
  },
  border: {
    borderStyle: "solid",
    borderBottomColor: "#2d2d2d",
    borderBottomWidth: 1,
  },
  borderBox: {
    borderStyle: "dashed",
    borderColor: "#2d2d2d",
    borderWidth: 1,
  },
  invoiceTitle: {
    fontSize: 18,
    fontFamily: "Lato Bold",
    color: "black",
    textTransform: "uppercase",
  },
  header: {
    paddingLeft: 30,
    marginBottom: -30,
    fontSize: "20px",
    fontFamily: "Lato Bold",
    color: "black",
  },
  colHeader: {
    fontSize: 15,
    fontFamily: "Lato Bold",
  },
  colText: {
    fontSize: 15,
    fontFamily: "Lato",
    color: "#A8026F",
  },
});

Font.register({
  family: "Open Sans",
  src: OpenSans,
});
Font.register({
  family: "Lato",
  src: LatoRegular,
});
Font.register({
  family: "Lato Bold",
  src: LatoBold,
});

const API_BASE_URL = "https://perukirjakone.herokuapp.com/";

const DocumentPage = (props) => {
  const [jsonSchema, setJsonSchema] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const getJSONSchema = async (payload) => {
    const getUserInfoFromStorage = JSON.parse(
      window.localStorage.getItem("userInfo")
    );
    console.log("getUserInfoFromStorage", getUserInfoFromStorage)
    try {
      await axios
        .get(`${API_BASE_URL}${"documents/"}${getUserInfoFromStorage.id}`)
        .then((res) => {
          setJsonSchema(res.data.jsonSchema);
        });
    } catch (error) {
      console.log("error", error);
      alert("error", error);
    }
  };

  useEffect(() => {
    setIsLoading(true);
    getJSONSchema();
    setIsLoading(false);
  }, []);

  if (isLoading)
    return (
      <div className={scssstyles.loader__container}>
        <div className={[scssstyles.circle, scssstyles.one]} />
        <div className={[scssstyles.circle, scssstyles.two]} />
        <div className={[scssstyles.circle, scssstyles.three]} />
      </div>
    );

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
        <DocumentsAndInfo jsonSchema={jsonSchema} />
        <Announcer jsonSchema={jsonSchema} />
        <DeceasedAssetsProperties jsonSchema={jsonSchema} />
        <DeceasedAssetsPropertiesSum jsonSchema={jsonSchema} />
        <DeceaseddDebtExpenses jsonSchema={jsonSchema} />
        <DeceasedDebtExpensesTotal jsonSchema={jsonSchema} />
        <DeceasedBalanceSummary jsonSchema={jsonSchema} />
        <WidowAssetsProperties jsonSchema={jsonSchema} />
        <WidowBalanceSummary jsonSchema={jsonSchema} />
        <Announcement jsonSchema={jsonSchema} />
        <WindowAnnouncement jsonSchema={jsonSchema} />
        <Inquires jsonSchema={jsonSchema} />
        <Assurances jsonSchema={jsonSchema} />
        <Footer jsonSchema={jsonSchema} />
      </View>
    </Page>
  );
};

export default DocumentPage;
