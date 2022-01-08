import React from "react";
import { Text, StyleSheet, View } from "@react-pdf/renderer";
import moment from "moment";

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
    width: '40%',
  },
  tableCell: {
    fontSize: 12,
    fontFamily: "Lato",
    color: "#000000",
  },
});

const DeceasedAssetsProperties = ({ jsonSchema }) => {
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
      </View>

      <View style={styles.table}>
        {jsonSchema &&
          jsonSchema &&
          jsonSchema.shareInfo &&
          jsonSchema.shareInfo.map((item, index) => {
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
      </View>

     

      <View style={styles.table}>
        {jsonSchema &&
          jsonSchema.propertyInfo &&
          jsonSchema.propertyInfo.map((item, index) => {
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

      {jsonSchema && jsonSchema && jsonSchema.didDeceasedHadCarBoat && (
        <View style={styles.table}>
          {jsonSchema &&
            jsonSchema.deceasedMotorBikeBrandTypeInfo &&
            jsonSchema.deceasedMotorBikeBrandTypeInfo.map((item, index) => {
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

      {jsonSchema && jsonSchema && jsonSchema.isPropertyLikeSofa && (
        <View style={styles.table}>
          {jsonSchema &&
            jsonSchema.propertyLikeSofaWatchInfo &&
            jsonSchema.propertyLikeSofaWatchInfo.map((item, index) => {
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

      {jsonSchema && jsonSchema && jsonSchema.isHKIrtaminen && (
        <View style={styles.table}>
          {jsonSchema &&
            jsonSchema.personalBelongingsInfo &&
            jsonSchema.personalBelongingsInfo.map((item, index) => {
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
    </>
  );
};

export default DeceasedAssetsProperties;
