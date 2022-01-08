import React from "react";
import { Text, StyleSheet, View } from "@react-pdf/renderer";
import moment from "moment";

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
    width: "30%",
  },
  tableCol: {
    width: "30%",
  },
  tableCell: {
    fontSize: 12,
    fontFamily: "Lato",
    color: "#000000",
  },
});

const WidowAssetsProperties = ({ jsonSchema }) => {
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

  return (
    jsonSchema &&
    jsonSchema.wasDeceasedPersonMarried ? (
      <>
        <View style={styles.row}>
          <View style={[styles.col]}>
            <View>
              <Text style={styles.colHeader}>IV. Lesken varat </Text>
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
            jsonSchema.widowBankInfo &&
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

        <View style={styles.table}>
          {jsonSchema &&
            jsonSchema &&
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

        <View style={styles.table}>
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

        {jsonSchema && jsonSchema && jsonSchema.didWidowHadCarBoat && (
          <View style={styles.table}>
            {jsonSchema &&
              jsonSchema.widowMotorBikeBrandTypeInfo &&
              jsonSchema.widowMotorBikeBrandTypeInfo.map((item, index) => {
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

        {jsonSchema && jsonSchema && jsonSchema.isPersonalWorth && (
          <View style={styles.table}>
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
        )}

        {jsonSchema && jsonSchema && jsonSchema.isPersonalBelonings && (
          <View style={styles.table}>
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
        )}

        <View style={styles.table}>
          <View style={styles.tableRow}>
            <View style={styles.tableCol1}>
              <Text style={styles.tableCell}>Yhteensä</Text>
            </View>

            <View style={styles.tableCol1}>
              <Text style={styles.tableCell}>
                {widowBankInfoTotal +
                  widowStockInfo +
                  widowProperty +
                  widowMotorBikeBrandTypeInfo +
                  personalWorthInfo +
                  widowPersonalBelonings}
              </Text>
            </View>
          </View>
        </View>
      </>
    ) : ( null)
  );
};

export default WidowAssetsProperties;
