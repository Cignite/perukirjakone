import React from "react";
import { Text, StyleSheet, View } from "@react-pdf/renderer";

import LineBreak from "./LineBreak";

const BORDER_COLOR = "#000";
const BORDER_STYLE = "solid";
const COL1_WIDTH = 200;
const COLN_WIDTH = (100 - COL1_WIDTH) / 3;

const styles = StyleSheet.create({
  row: {
    margin: 10,
    padding: 10,
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
    color: "#000",
  },
  detailContainer: {
    display: "flex",
    flexDirection: "row",
  },
  item: {
    flexDirection: "row",
    marginBottom: 1,
  },
  bulletPoint: {
    width: 10,
    fontSize: 10,
  },
  itemContent: {
    flex: 10,
    fontSize: 10,
    fontFamily: "Lato",
    flexGrow: 1,
  },
  detailText: {
    fontSize: 15,
    marginLeft: 30,
    marginTop: 35,
    fontFamily: "Lato Bold",
    marginBottom: 15,
  },
  detailTextHeader: {
    fontSize: 15,
    marginLeft: 30,
    marginTop: 10,
    fontFamily: "Lato Bold",
    marginBottom: 5,
  },
  table: {
    marginLeft: 30,
    display: "table",
    width: "auto",
    borderStyle: BORDER_STYLE,
    borderColor: BORDER_COLOR,
    borderWidth: 1,
    borderRightWidth: 0,
    borderBottomWidth: 0,
  },
  tableRow: {
    margin: "auto",
    flexDirection: "row",
  },
  tableCol1Header: {
    width: COL1_WIDTH + "%",
    borderStyle: BORDER_STYLE,
    borderColor: BORDER_COLOR,
    borderBottomColor: "#000",
    borderWidth: 1,
    borderLeftWidth: 0,
    borderTopWidth: 0,
  },
  tableColHeader: {
    width: COLN_WIDTH + "%",
    borderStyle: BORDER_STYLE,
    borderColor: BORDER_COLOR,
    borderBottomColor: "#000",
    borderWidth: 1,
    borderLeftWidth: 0,
    borderTopWidth: 0,
  },
  tableCol1: {
    width: COL1_WIDTH + "%",
    borderStyle: BORDER_STYLE,
    borderColor: BORDER_COLOR,
    borderWidth: 1,
    borderLeftWidth: 0,
    borderTopWidth: 0,
  },
  tableCol: {
    width: COLN_WIDTH + "%",
    borderStyle: BORDER_STYLE,
    borderColor: BORDER_COLOR,
    borderWidth: 1,
    borderLeftWidth: 0,
    borderTopWidth: 0,
  },
  tableCellHeader: {
    margin: 5,
    fontSize: 12,
    fontWeight: 500,
  },
  tableCell: {
    margin: 5,
    fontSize: 10,
  },
  paragraphSecond: {
    fontSize: 15,
    marginLeft: 35,
    fontFamily: "Lato",
    marginBottom: 15,
  },
});

const WidowInfo = ({ jsonSchema }) => {
  // const widowPropertyEmpty = Object.values(jsonSchema && jsonSchema.widowProperty[0])[0].length;

  return (
    <>
      <View style={styles.detailContainer}>
        <Text style={styles.detailText}>Rahavarat korkoineen</Text>
      </View>
      {jsonSchema && jsonSchema.wasDeceasedPersonMarried ? (
        <>
          <View style={styles.detailContainer}>
            <Text style={styles.detailTextHeader}>Pankki tiedot</Text>
          </View>

          <View style={styles.table}>
            <View style={styles.tableRow}>
              <View style={styles.tableCol1Header}>
                <Text style={styles.tableCellHeader}>Pankki nimi/numero</Text>
              </View>
              <View style={styles.tableCol1Header}>
                <Text style={styles.tableCellHeader}>Määrä</Text>
              </View>
            </View>

            {jsonSchema.widowBankInfo &&
              jsonSchema.widowBankInfo.map((item, index) => {
                return (
                  <View style={styles.tableRow} key={index}>
                    <View style={styles.tableCol1}>
                      <Text style={styles.tableCell}>{item.name}</Text>
                    </View>

                    <View style={styles.tableCol1}>
                      <Text style={styles.tableCell}>{item.value}</Text>
                    </View>
                  </View>
                );
              })}
          </View>
          <LineBreak />

          <View style={styles.detailContainer}>
            <Text style={styles.detailTextHeader}>
              Varastot ja rahastot (korkoineen)
            </Text>
          </View>

          <View style={styles.table}>
            <View style={styles.tableRow}>
              <View style={styles.tableCol1Header}>
                <Text style={styles.tableCellHeader}>Osakkeen nimi/numero</Text>
              </View>
              <View style={styles.tableCol1Header}>
                <Text style={styles.tableCellHeader}>Määrä</Text>
              </View>
            </View>

            {jsonSchema &&
              jsonSchema.widowStockInfo &&
              jsonSchema.widowStockInfo.map((item, index) => {
                return (
                  <View style={styles.tableRow} key={index}>
                    <View style={styles.tableCol1}>
                      <Text style={styles.tableCell}>{item.name}</Text>
                    </View>

                    <View style={styles.tableCol1}>
                      <Text style={styles.tableCell}>{item.value}</Text>
                    </View>
                  </View>
                );
              })}
          </View>
          <LineBreak />

          {jsonSchema && jsonSchema.widowProperty.length > 0 && (
            <>
              <View style={styles.detailContainer}>
                <Text style={styles.detailTextHeader}>
                  Kiinteistöt/Huoneistot
                </Text>
              </View>

              <View style={styles.table}>
                <View style={styles.tableRow}>
                  <View style={styles.tableCol1Header}>
                    <Text style={styles.tableCellHeader}>
                      Kiinteistöt/Huoneistot
                    </Text>
                  </View>
                  <View style={styles.tableCol1Header}>
                    <Text style={styles.tableCellHeader}>Määrä</Text>
                  </View>
                </View>

                {jsonSchema &&
                  jsonSchema.widowProperty &&
                  jsonSchema.widowProperty.map((item, index) => {
                    return (
                      <View style={styles.tableRow} key={index}>
                        <View style={styles.tableCol1}>
                          <Text style={styles.tableCell}>{item.name}</Text>
                        </View>

                        <View style={styles.tableCol1}>
                          <Text style={styles.tableCell}>{item.value}</Text>
                        </View>
                      </View>
                    );
                  })}
              </View>
            </>
          )}
          <LineBreak />
          <View style={styles.detailContainer}>
            <Text style={styles.detailTextHeader}>
              Onko irtaimen omaisuuden arvo yli 4000 euroa?
            </Text>
          </View>

          <View style={styles.table}>
            <View style={styles.tableRow}>
              <View style={styles.tableCol1Header}>
                <Text style={styles.tableCellHeader}>Omaisuuden</Text>
              </View>
              <View style={styles.tableCol1Header}>
                <Text style={styles.tableCellHeader}>Määrä</Text>
              </View>
            </View>

            {jsonSchema &&
              jsonSchema.personalWorthInfo &&
              jsonSchema.personalWorthInfo.map((item, index) => {
                return (
                  <View style={styles.tableRow} key={index}>
                    <View style={styles.tableCol1}>
                      <Text style={styles.tableCell}>{item.name}</Text>
                    </View>

                    <View style={styles.tableCol1}>
                      <Text style={styles.tableCell}>{item.value}</Text>
                    </View>
                  </View>
                );
              })}
          </View>
          <LineBreak />

          <View style={styles.detailContainer}>
            <Text style={styles.detailTextHeader}>
              Henkilökohtaiset tavarat
            </Text>
          </View>

          <View style={styles.table}>
            <View style={styles.tableRow}>
              <View style={styles.tableCol1Header}>
                <Text style={styles.tableCellHeader}>Nimike</Text>
              </View>
              <View style={styles.tableCol1Header}>
                <Text style={styles.tableCellHeader}>Määrä</Text>
              </View>
            </View>

            {jsonSchema &&
              jsonSchema.widowPersonalBelonings &&
              jsonSchema.widowPersonalBelonings.map((item, index) => {
                return (
                  <View style={styles.tableRow} key={index}>
                    <View style={styles.tableCol1}>
                      <Text style={styles.tableCell}>{item.name}</Text>
                    </View>

                    <View style={styles.tableCol1}>
                      <Text style={styles.tableCell}>{item.value}</Text>
                    </View>
                  </View>
                );
              })}
          </View>
          <LineBreak />
        </>
      ) : (
        <View>
          <Text style={styles.paragraphSecond}>- Ei tiedosta</Text>
        </View>
      )}

      <View style={styles.detailContainer}>
        <Text style={styles.detailText}>Onko leskella ollut velkoja?</Text>
      </View>
      {jsonSchema && jsonSchema.didDeceasedHaveDebt ? (
        <>
          <View style={styles.table}>
            <View style={styles.tableRow}>
              <View style={styles.tableCol1Header}>
                <Text style={styles.tableCellHeader}>Velkotiedot</Text>
              </View>
              <View style={styles.tableCol1Header}>
                <Text style={styles.tableCellHeader}>Määrä</Text>
              </View>
            </View>

            {jsonSchema &&
              jsonSchema.widowDebtInfo &&
              jsonSchema.widowDebtInfo.map((item, index) => {
                return (
                  <View style={styles.tableRow} key={index}>
                    <View style={styles.tableCol1}>
                      <Text style={styles.tableCell}>{item.name}</Text>
                    </View>

                    <View style={styles.tableCol1}>
                      <Text style={styles.tableCell}>{item.value}</Text>
                    </View>
                  </View>
                );
              })}
          </View>
        </>
      ) : (
        <View>
          <Text style={styles.paragraphSecond}>Ei velkoja</Text>
        </View>
      )}
    </>
  );
};

export default WidowInfo;
