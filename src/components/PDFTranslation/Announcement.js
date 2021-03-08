import React from "react";
import { Text, StyleSheet, View } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  row: {
    padding: 10,
    display: "flex",
    flexDirection: "row",
  },
  col: {
    padding: 5,
  },
  colText: {
    fontSize: 12,
    fontFamily: "Lato",
    padding: 10,
    color: "#000000",
    marginRight: 20,
    width: "80%",
  },
  colHeader: {
    fontSize: 15,
    fontFamily: "Lato Bold",
  },
  marginLeft: {
    marginLeft: 20,
  },
  col1: {
    padding: 0,
  },
});

const Announcement = ({ jsonSchema }) => (
  <>
    {jsonSchema && jsonSchema.otherAnnouncementDescription && (
      <View style={styles.row}>
        <View style={[styles.col]}>
          <View>
            <Text style={styles.colHeader}>Henkivakuutukset </Text>
          </View>
        </View>
        <View style={styles.marginLeft}>
          <Text style={styles.colText}>
            {jsonSchema && jsonSchema.otherAnnouncementDescription}
          </Text>
        </View>
      </View>
    )}
  </>
);

export default Announcement;
