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

const DeceasedAssetsPropertiesSum = ({ jsonSchema }) => {
  // const deceasedAutomobilesTotal = 
  //   jsonSchema &&
  //   parseInt(jsonSchema.deceasedCarBrandTypeValue, 10) +
  //     parseInt(jsonSchema.deceasedMotorBikeBrandTypeValue, 10);

  const totalDebt = calculateTotal(jsonSchema && jsonSchema.debtInfo);

  const totalFuneralExpenses = calculateTotal(
    jsonSchema && jsonSchema.funeralExpensesInfo
  );

  const deathCertificateTotal =
    jsonSchema && parseFloat(jsonSchema.funeralExpensesInfoDeathCertificate);

  const flowersTotal =
    jsonSchema && parseFloat(jsonSchema && jsonSchema.flowers);

  const tombstoneTotal =
    jsonSchema &&
    parseFloat(jsonSchema && jsonSchema.funeralExpensesInfoTombstone);

  const otherFuneralExpensesTotal =
    jsonSchema && calculateTotal(jsonSchema && jsonSchema.otherFuneralExpenses);

  const perukirjakoneRewardTotal =
    jsonSchema && parseFloat(jsonSchema && jsonSchema.perukirjakoneReward);

  const perukirjakoneFeeTotal =
    jsonSchema && parseFloat(jsonSchema && jsonSchema.perukirjakoneFee);
  
  // const deceasedTotalAssets = (deceasedAutomobilesTotal + deceasedBelongingsOver4KTotal + deceasedPersonalBelongingsTotal + deceasedPropertyTotal + deceasedStockTotal + deceasedBankTotal);
  // console.log("deceasedTotalAssets", deceasedTotalAssets.replace(/\./g, ','))


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
              {(deceasedAutomobilesTotal +
                deceasedBelongingsOver4KTotal +
                deceasedPersonalBelongingsTotal +
                deceasedPropertyTotal +
                deceasedStockTotal +
                deceasedBankTotal).toFixed(2).replace(/\./g, ',')}
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
              {(totalDebt +
                totalFuneralExpenses +
                deathCertificateTotal +
                flowersTotal +
                tombstoneTotal +
                otherFuneralExpensesTotal +
                perukirjakoneRewardTotal +
                perukirjakoneFeeTotal).toFixed(2).replace(/\./g, ',')}
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
                  perukirjakoneFeeTotal)).toFixed(2).replace(/\./g, ',')}
            </Text>
          </View>
        </View>
      </View>
    </>
  );
};

export default DeceasedAssetsPropertiesSum;
