import React from "react";
import { Text, StyleSheet, View } from "@react-pdf/renderer";

import LineBreak from "./LineBreak";

import { calculateTotal, formatNumber } from "../utils";

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
    fontWeight: "bold",
  },
});

const DeceasedAssetsPropertiesSum = ({ jsonSchema }) => {
  const deceasedBankTotal = calculateTotal(
    jsonSchema && jsonSchema.bankAccountInfo
  );
  const deceasedStockTotal = calculateTotal(jsonSchema && jsonSchema.shareInfo);
  const deceasedPropertyTotal = calculateTotal(
    jsonSchema && jsonSchema.propertyInfo
  );
  const deceasedBelongingsOver4KTotal = calculateTotal(
    jsonSchema && jsonSchema.propertyLikeSofaWatchInfo
  );
  const deceasedPersonalBelongingsTotal = calculateTotal(
    jsonSchema && jsonSchema.personalBelongingsInfo
  );
  const deceasedAutomobilesTotal =
    jsonSchema &&
    parseInt(jsonSchema.deceasedCarBrandTypeValue, 10) +
      parseInt(jsonSchema.deceasedMotorBikeBrandTypeValue, 10);

  return (
    <>
      <View style={styles.table}>
        <View style={styles.tableRow}>
          <View style={styles.tableCol1}>
            <Text style={styles.tableCell}>Yhteensä</Text>
          </View>

          <View style={styles.tableCol1}>
            <Text style={styles.tableCell}>
              {deceasedAutomobilesTotal +
                deceasedBelongingsOver4KTotal +
                deceasedPersonalBelongingsTotal +
                deceasedPropertyTotal +
                deceasedStockTotal +
                deceasedBankTotal}
            </Text>
          </View>
        </View>
      </View>
    </>
  );
};

export default DeceasedAssetsPropertiesSum;
