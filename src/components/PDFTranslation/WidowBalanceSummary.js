import React from "react";
import { Text, StyleSheet, View } from "@react-pdf/renderer";

import { calculateTotal } from "../utils";

// const COL1_WIDTH = 200;
// const COLN_WIDTH = (100 - COL1_WIDTH) / 3;

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
    width:  "30%",
  },
  tableCol: {
    width: "30%",
  },
  tableCell: {
    fontSize: 12,
    fontFamily: "Lato",
    color: "#000000",
    fontWeight: "bold",
  },
});

const WidowBalanceSummary = ({ jsonSchema }) => {
  const widowBankInfoTotal = calculateTotal(
    jsonSchema && jsonSchema.widowBankInfo
  );
  const widowStockInfo = calculateTotal(
    jsonSchema && jsonSchema.widowStockInfo
  );
  const widowProperty = calculateTotal(jsonSchema && jsonSchema.widowProperty);
  const widowMotorBikeBrandTypeInfo = calculateTotal(
    jsonSchema && jsonSchema.widowMotorBikeBrandTypeInfo
  );
  const personalWorthInfo = calculateTotal(
    jsonSchema && jsonSchema.personalWorthInfo
  );
  const widowPersonalBelonings = calculateTotal(
    jsonSchema && jsonSchema.widowPersonalBelonings
  );

  const widowTotal = () => {
    let totalSum = 0;
    if (widowBankInfoTotal) {
      totalSum = totalSum + widowBankInfoTotal;
    }
    if (widowStockInfo) {
      totalSum = totalSum + widowStockInfo;
    }
    if (widowProperty) {
      totalSum = totalSum + widowProperty;
    }
    if (widowMotorBikeBrandTypeInfo) {
      totalSum = totalSum + widowMotorBikeBrandTypeInfo;
    }
    if (personalWorthInfo) {
      totalSum = totalSum + personalWorthInfo;
    }
    if (widowPersonalBelonings) {
      totalSum = totalSum + widowPersonalBelonings;
    }
    return totalSum;
  }

  const widowDebtSum = () => {
    let debtSum = 0;
    if ( jsonSchema && jsonSchema.widowDebtInfo.length ) {
      jsonSchema && jsonSchema.widowDebtInfo.map((debt) => {
        debtSum = debtSum + debt.value;
      })
    }
    return debtSum;
  }  
  
  return (
    <>
      <View style={styles.row}>
        <View style={[styles.col]}>
          <View>
            <Text style={styles.colHeader}>V. Yhteenveto </Text>
          </View>
        </View>
      </View>

      <View style={styles.table}>
        <View style={styles.tableRow}>
          <View style={styles.tableCol1}>
            <Text style={styles.tableCell}>Lesken varat</Text>
          </View>

          <View style={styles.tableCol1}>
            <Text style={styles.tableCell}>
              {jsonSchema && jsonSchema.wasDeceasedPersonMarried ? widowTotal() : "-"}
            </Text>
          </View>
        </View>
      </View>

      <View style={styles.table}>
        <View style={styles.tableRow}>
          <View style={styles.tableCol1}>
            <Text style={styles.tableCell}>Lesken velat</Text>
          </View>

          <View style={styles.tableCol1}>
            <Text style={styles.tableCell}>{jsonSchema && jsonSchema.didDeceasedHaveDebt ? calculateTotal(
    jsonSchema && jsonSchema.widowDebtInfo) : 0}</Text>
          </View>
        </View>
      </View>

      <View style={styles.table}>
        <View style={styles.tableRow}>
          <View style={styles.tableCol1}>
            <Text style={styles.tableCell}>Lesken omaisuuden säästö</Text>
          </View>

          <View style={styles.tableCol1}>
            <Text style={styles.tableCell}>
            {jsonSchema && jsonSchema.wasDeceasedPersonMarried ? widowTotal() - widowDebtSum() : "-"}

            </Text>
          </View>
        </View>
      </View>
    </>
  );
};

export default WidowBalanceSummary;
