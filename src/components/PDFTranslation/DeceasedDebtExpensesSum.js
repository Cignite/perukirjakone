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
    width: "40%",
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

const DeceasedDebtExpensesTotal = ({ jsonSchema }) => {
  const totalDebt = calculateTotal(jsonSchema && jsonSchema.debtInfo);

  const totalFuneralExpenses = calculateTotal(
    jsonSchema && jsonSchema.funeralExpensesInfo
  );

  const deathCertificateTotal =
    jsonSchema && parseInt(jsonSchema && jsonSchema.funeralExpensesInfoDeathCertificate, 10);

  const flowersTotal =
    jsonSchema && parseInt(jsonSchema && jsonSchema.flowers, 10);

  const tombstoneTotal =
    jsonSchema &&
    parseInt(jsonSchema && jsonSchema.funeralExpensesInfoTombstone, 10);

  const otherFuneralExpensesTotal =
    jsonSchema && calculateTotal(jsonSchema && jsonSchema.otherFuneralExpenses);

  const perukirjakoneRewardTotal =
    jsonSchema && parseInt(jsonSchema && jsonSchema.perukirjakoneReward, 10);

  const perukirjakoneFeeTotal =
    jsonSchema && parseFloat(jsonSchema && jsonSchema.perukirjakoneFee);

  const totalSum = () => {
    let expensesTotal = 0;
    if (totalDebt) {
      expensesTotal = expensesTotal + totalDebt;
    }
    if (totalFuneralExpenses) {
      expensesTotal = expensesTotal + totalFuneralExpenses;
    }
    if (deathCertificateTotal) {
      expensesTotal = expensesTotal + deathCertificateTotal;
    }
    if (flowersTotal) {
      expensesTotal = expensesTotal + flowersTotal;
    }
    if (tombstoneTotal) {
      expensesTotal = expensesTotal + tombstoneTotal;
    }
    if (otherFuneralExpensesTotal) {
      expensesTotal = expensesTotal + otherFuneralExpensesTotal;
    }
    if (perukirjakoneRewardTotal) {
      expensesTotal = expensesTotal + perukirjakoneRewardTotal;
    }
    if (perukirjakoneFeeTotal) {
      expensesTotal = expensesTotal + perukirjakoneFeeTotal;
    }
    return expensesTotal;

  }
  return (
    <>
      <View style={styles.table}>
        <View style={styles.tableRow}>
          <View style={styles.tableCol1}>
            <Text style={styles.tableCell}>Yhteensä</Text>
          </View>

          <View style={styles.tableCol1}>
            <Text style={styles.tableCell}>
              {totalSum().toFixed(2).replace(/\./g, ',')}
            </Text>
          </View>
        </View>
      </View>
    </>
  );
};

export default DeceasedDebtExpensesTotal;
