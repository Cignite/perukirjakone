import React from "react";
import { Text, StyleSheet, View } from "@react-pdf/renderer";

const COL1_WIDTH = 200;

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
    margin: 2,
  },
  colHeader: {
    fontSize: 15,
    fontFamily: "Lato Bold",
  },
  marginLeft: {
    marginLeft: 55,
  },
  col1: {
    padding: 0,
  },
});

const PresentAtMeeting = ({ jsonSchema }) => (
  <>
    <View style={styles.row}>
      <View style={[styles.col]}>
        <View>
          <Text style={styles.colHeader}>Läsnä </Text>
        </View>
      </View>
      <View style={styles.marginLeft}>
        {jsonSchema &&
          jsonSchema.whoWasPresent &&
          jsonSchema.whoWasPresent.map((item, index) => {
            return (
              <View key={index} style={styles.marginLeft}>
                <Text style={styles.colText}>{item.name}</Text>
              </View>
            );
          })}
      </View>
    </View>
  </>
);

export default PresentAtMeeting;
