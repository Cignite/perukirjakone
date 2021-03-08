import React from "react";
import { Text, StyleSheet, View } from "@react-pdf/renderer";
import moment from "moment";

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
    marginLeft: 78,
  },
  col1: {
    padding: 0,
  },
});

const Announcer = ({ jsonSchema }) => (
  <>
    <View style={styles.row}>
      <View style={[styles.col]}>
        <View>
          <Text style={styles.colHeader}>Ilmoittaja: </Text>
        </View>
      </View>
      <View style={[styles.col]}>
        <View>
          <Text style={[styles.colText, styles.marginLeft]}>
            {jsonSchema && jsonSchema.inviteeName} &nbsp;{" "}
            {jsonSchema && moment(jsonSchema.inviteeDate).format("DD.MM.YYYY")},
            &nbsp;
            {jsonSchema && jsonSchema.inviteePlace}
          </Text>
        </View>
      </View>
    </View>
  </>
);

export default Announcer;
