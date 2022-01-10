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
    marginLeft: 80,
  },
  col1: {
    padding: 0,
  },
});

const DocumentsAndInfo = ({ jsonSchema }) => (
  <>
    <View style={styles.row}>
      <View style={[styles.col]}>
        <View>
          <Text style={styles.colHeader}>
            Toimituksen perusteena oleva asiakirjat ja tiedot{" "}
          </Text>
        </View>
      </View>
    </View>
    <View style={styles.row}>
      <View style={styles.marginLeft}>
        <View style={styles.marginLeft}>
          {jsonSchema && jsonSchema.isSukuselvitykset && (
            <Text style={styles.colText}>1. Sukuselvitykset</Text>
          )}
        </View>
      </View>
    </View>
    <View style={styles.row}>
      <View style={styles.marginLeft}>
        <View style={styles.marginLeft}>
          {jsonSchema && jsonSchema.isTestamenttiChecked && (
            <Text style={styles.colText}>
              2. Merkittiin tiedoksi testamentti &nbsp;
              {moment(jsonSchema && jsonSchema.testamenttiTimeOfDeath).format(
                "DD.MM.YYYY"
              )}
            </Text>
          )}
        </View>
      </View>
    </View>
    <View style={styles.row}>
      <View style={styles.marginLeft}>
        <View style={styles.marginLeft}>
          {jsonSchema && jsonSchema.isMarriedSettlementContractChecked && (
            <Text style={styles.colText}>
              3. Avioehtosopimus &nbsp;
              {moment(jsonSchema && jsonSchema.marriageSettlementDate).format(
                "DD.MM.YYYY"
              )}{" "}
              ilmoitettu
            </Text>
          )}
        </View>
      </View>
    </View>

    <View style={styles.row}>
      <View style={styles.marginLeft}>
        {jsonSchema &&
          jsonSchema.isOtherDocumentChecked &&
          jsonSchema.otherDocumentInfo.length > 0 &&
          jsonSchema.otherDocumentInfo.map((item, index) => {
            return (
              <View key={index} style={styles.marginLeft}>
                <Text style={styles.colText}>
                  {/* {index + 3}. {item.otherDocInfo} */}
                </Text>
              </View>
            );
          })}
      </View>
    </View>
  </>
);

export default DocumentsAndInfo;
