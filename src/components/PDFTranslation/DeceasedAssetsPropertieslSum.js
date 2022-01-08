import React from "react";
import { Text, StyleSheet, View } from "@react-pdf/renderer";

import { calculateTotal } from "../utils";

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
    width: "40%",
    fontWeight: "bold"
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
  const deceasedAutomobilesTotal = calculateTotal(jsonSchema && jsonSchema.deceasedMotorBikeBrandTypeInfo)

  return (
    <>
      <View style={styles.table}>
        <View style={styles.tableRow}>
          <View style={styles.tableCol1}>
            <Text style={styles.tableCell}>Yhteensä</Text>
          </View>

          <View style={styles.tableCol1}>
            <Text style={styles.tableCell}>
              {(deceasedAutomobilesTotal +
                deceasedBelongingsOver4KTotal +
                deceasedPersonalBelongingsTotal +
                deceasedPropertyTotal +
                deceasedStockTotal +
                deceasedBankTotal).toFixed(2)}
            </Text>
          </View>
        </View>
      </View>
    </>
  );
};

export default DeceasedAssetsPropertiesSum;
