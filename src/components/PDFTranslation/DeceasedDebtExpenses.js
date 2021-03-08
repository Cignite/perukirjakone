import React from "react";
import { Text, StyleSheet, View } from "@react-pdf/renderer";

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

const DeceaseddDebtExpenses = ({ jsonSchema }) => {
  return (
    <>
      <View style={styles.row}>
        <View style={[styles.col]}>
          <View>
            <Text style={styles.colHeader}>
              II. Vainajan ja pesän velat ja poistot{" "}
            </Text>
          </View>
        </View>
      </View>

      {jsonSchema && jsonSchema && jsonSchema.didDeceasedHaveDebt && (
        <View style={styles.table}>
          {jsonSchema &&
            jsonSchema.debtInfo &&
            jsonSchema.debtInfo.map((item, index) => {
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
      )}

      <View style={styles.table}>
        {jsonSchema &&
          jsonSchema.funeralExpensesInfo &&
          jsonSchema.funeralExpensesInfo.map((item, index) => {
            return (
              <View style={styles.tableRow} key={index}>
                <View style={styles.tableCol1}>
                  <Text style={styles.tableCell}>Sukuselvitykset</Text>
                </View>

                <View style={styles.tableCol1}>
                  <Text style={styles.tableCell}>{item.value}</Text>
                </View>
              </View>
            );
          })}
      </View>

      <View style={styles.table}>
        <View style={styles.tableRow}>
          <View style={styles.tableCol1}>
            <Text style={styles.tableCell}>Saldotodistukset</Text>
          </View>

          <View style={styles.tableCol1}>
            <Text style={styles.tableCell}>
              {jsonSchema && jsonSchema.funeralExpensesInfoDeathCertificate}
            </Text>
          </View>
        </View>
      </View>

      <View style={styles.table}>
        <View style={styles.tableRow}>
          <View style={styles.tableCol1}>
            <Text style={styles.tableCell}>Kukat</Text>
          </View>

          <View style={styles.tableCol1}>
            <Text style={styles.tableCell}>
              {jsonSchema && jsonSchema.flowers}
            </Text>
          </View>
        </View>
      </View>

      <View style={styles.table}>
        <View style={styles.tableRow}>
          <View style={styles.tableCol1}>
            <Text style={styles.tableCell}>Hautakivi/kunnostus</Text>
          </View>

          <View style={styles.tableCol1}>
            <Text style={styles.tableCell}>
              {jsonSchema && jsonSchema.funeralExpensesInfoTombstone}
            </Text>
          </View>
        </View>
      </View>

      <View style={styles.table}>
        {jsonSchema &&
          jsonSchema.otherFuneralExpenses &&
          jsonSchema.otherFuneralExpenses.map((item, index) => {
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

      <View style={styles.table}>
        <View style={styles.tableRow}>
          <View style={styles.tableCol1}>
            <Text style={styles.tableCell}>PerukirjakoneReward/kunnostus</Text>
          </View>

          <View style={styles.tableCol1}>
            <Text style={styles.tableCell}>
              {jsonSchema && jsonSchema.perukirjakoneReward}
            </Text>
          </View>
        </View>
      </View>

      <View style={styles.table}>
        <View style={styles.tableRow}>
          <View style={styles.tableCol1}>
            <Text style={styles.tableCell}>Perukirjakoneen käyttömaksu </Text>
          </View>

          <View style={styles.tableCol1}>
            <Text style={styles.tableCell}>
              {jsonSchema && jsonSchema.perukirjakoneFee}
            </Text>
          </View>
        </View>
      </View>
    </>
  );
};

export default DeceaseddDebtExpenses;
