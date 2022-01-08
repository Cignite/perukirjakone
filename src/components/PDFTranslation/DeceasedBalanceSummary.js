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
  console.log("deceasedBelongingsOver4KTotal", deceasedBelongingsOver4KTotal)
  const deceasedPersonalBelongingsTotal = calculateTotal(
    jsonSchema && jsonSchema.personalBelongingsInfo
  );
  // const deceasedAutomobilesTotal = 
  //   jsonSchema &&
  //   parseInt(jsonSchema.deceasedCarBrandTypeValue, 10) +
  //     parseInt(jsonSchema.deceasedMotorBikeBrandTypeValue, 10);

  const deceasedAutomobilesTotal = calculateTotal(jsonSchema && jsonSchema.deceasedMotorBikeBrandTypeInfo);
  console.log("deceasedAutomobilesTotal", deceasedAutomobilesTotal);
  const totalDebt = calculateTotal(jsonSchema && jsonSchema.debtInfo);

  const totalFuneralExpenses = calculateTotal(
    jsonSchema && jsonSchema.funeralExpensesInfo
  );

  const deathCertificateTotal =
    jsonSchema && parseInt(jsonSchema.funeralExpensesInfoDeathCertificate, 10);

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
    jsonSchema && parseInt(jsonSchema && jsonSchema.perukirjakoneFee, 10);

  return (
    <>
      <View style={styles.row}>
        <View style={[styles.col]}>
          <View>
            <Text style={styles.colHeader}>III. Yhteenveto </Text>
          </View>
        </View>
      </View>

      <View style={styles.table}>
        <View style={styles.tableRow}>
          <View style={styles.tableCol1}>
            <Text style={styles.tableCell}>Vainajan varat</Text>
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

      <View style={styles.table}>
        <View style={styles.tableRow}>
          <View style={styles.tableCol1}>
            <Text style={styles.tableCell}>Pesän velat</Text>
          </View>

          <View style={styles.tableCol1}>
            <Text style={styles.tableCell}>
              {totalDebt +
                totalFuneralExpenses +
                deathCertificateTotal +
                flowersTotal +
                tombstoneTotal +
                otherFuneralExpensesTotal +
                perukirjakoneRewardTotal +
                perukirjakoneFeeTotal}
            </Text>
          </View>
        </View>
      </View>

      <View style={styles.table}>
        <View style={styles.tableRow}>
          <View style={styles.tableCol1}>
            <Text style={styles.tableCell}>Vainajan omaisuuden säästö</Text>
          </View>

          <View style={styles.tableCol1}>
            <Text style={styles.tableCell}>
              {(deceasedAutomobilesTotal +
                deceasedBelongingsOver4KTotal +
                deceasedPersonalBelongingsTotal +
                deceasedPropertyTotal +
                deceasedStockTotal +
                deceasedBankTotal -
                (totalDebt +
                  totalFuneralExpenses +
                  deathCertificateTotal +
                  flowersTotal +
                  tombstoneTotal +
                  otherFuneralExpensesTotal +
                  perukirjakoneRewardTotal +
                  perukirjakoneFeeTotal)).toFixed(2)}
            </Text>
          </View>
        </View>
      </View>
    </>
  );
};

export default DeceasedAssetsPropertiesSum;
