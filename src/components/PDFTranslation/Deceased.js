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
  border: {
    borderStyle: "solid",
    borderBottomColor: "#2d2d2d",
    borderBottomWidth: 1,
  },
  borderBox: {
    borderStyle: "dashed",
    borderColor: "#2d2d2d",
    borderWidth: 1,
  },
  header: {
    paddingLeft: 30,
    marginBottom: -30,
    fontSize: "20px",
    fontFamily: "Lato Bold",
    color: "black",
  },
  colHeader: {
    fontSize: 15,
    fontFamily: "Lato Bold",
  },
  colText: {
    fontSize: 12,
    fontFamily: "Lato",
    color: "#000000",
  },
  marginLeft: {
    marginLeft: "100px",
  },
});

const Deceased = ({ jsonSchema }) => (
  <>
    <View style={styles.row}>
      <View style={[styles.col]}>
        <View>
          <Text style={styles.colHeader}>Vainaja </Text>
        </View>
      </View>

      <View style={[styles.col, styles.marginLeft]}>
        <View>
          <Text style={styles.colText}>
            {jsonSchema && jsonSchema.customerFirstName} &nbsp;{" "}
            {jsonSchema && jsonSchema.customerlastName}, &nbsp;
            {jsonSchema && jsonSchema.customerSSN}, &nbsp;kuollut, &nbsp;
            {moment(jsonSchema && jsonSchema.customerTimeOfDeath).format(
              "DD.MM.YYYY"
            )}
            ,&nbsp;
            {jsonSchema && jsonSchema.agreeementPlace}
          </Text>
        </View>
      </View>
    </View>
  </>
);

export default Deceased;
