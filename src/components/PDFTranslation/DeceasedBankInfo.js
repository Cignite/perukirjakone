import React from "react";
import { Text, StyleSheet, View } from "@react-pdf/renderer";
import moment from "moment";

import { calculateTotal } from "../utils";

const BORDER_COLOR = "#000";
const BORDER_STYLE = "solid";
const COL1_WIDTH = 200;
const COLN_WIDTH = (100 - COL1_WIDTH) / 3;

const styles = StyleSheet.create({
  row: {
    padding: 5,
    display: "flex",
    flexDirection: "row",
  },
  col: {
    padding: 5,
  },
  colText: {
    fontSize: 12,
    fontFamily: "Lato",
    color: "#000000",
  },
  colHeader: {
    fontSize: 15,
    fontFamily: "Lato Bold",
  },
  marginLeft: {
    marginLeft: 65,
  },
  col1: {
    padding: 0,
  },
  table: {
    marginLeft: 30,
    display: "table",
    width: "auto",
  },
  tableRow: {
    margin: "auto",
    flexDirection: "row",
    marginLeft: 40,
    fontSize: 15,
    fontFamily: "Lato",
    color: "#000000",
  },

  tableCol1: {
    width: COL1_WIDTH + "%",
  },
  tableCol: {
    width: COLN_WIDTH + "%",
  },
  tableCell: {
    fontSize: 12,
    fontFamily: "Lato",
    color: "#000000",
  },
});

const DeceasedBankInfo = ({ jsonSchema }) => {
  const deceasedBankTotal = calculateTotal(
    jsonSchema && jsonSchema.bankAccountInfo
  );
  return (
    <>
      <View style={styles.row}>
        <View style={[styles.col]}>
          <View>
            <Text style={styles.colHeader}>I. Vainajan varat </Text>
          </View>
        </View>
      </View>

      <View style={styles.row}>
        <View style={styles.marginLeft}>
          <Text style={styles.colText}>
            Rahavarat ja saatavat korkoineen per{" "}
            {moment(jsonSchema && jsonSchema.customerTimeOfDeath).format(
              "DD.MM.YYYY"
            )}
          </Text>
        </View>
      </View>

      <View style={styles.table}>
        {jsonSchema &&
          jsonSchema &&
          jsonSchema.bankAccountInfo &&
          jsonSchema.bankAccountInfo.map((item, index) => {
            return (
              <View style={styles.tableRow} key={index}>
                <View style={styles.tableCol1}>
                  <Text style={styles.tableCell}>{item.number}</Text>
                </View>

                <View style={styles.tableCol1}>
                  <Text style={styles.tableCell}>{item.value}</Text>
                </View>
              </View>
            );
          })}
        {/* <View style={styles.tableRow}>
          <View style={styles.tableCol1}>
            <Text style={styles.tableCell}>Yhteensä</Text>
          </View>
          <View style={styles.tableCol1}>
            <Text style={styles.tableCell}>{deceasedBankTotal}</Text>
          </View>
        </View> */}
      </View>
    </>
  );
};

export default DeceasedBankInfo;
