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
    marginLeft: 140,
  },
  col1: {
    padding: 0,
  },
  marginBelow: {
    marginBottom: 60,
  },
  row1: {
    padding: 10,
    display: "flex",
    flexDirection: "row",
    paddingTop: 12,
  },
  col: {
    padding: 5,
  },
  colText1: {
    marginTop: -30,
  },
});

const Footer = ({ jsonSchema }) => (
  <>
    <View style={styles.row}>
      <View style={[styles.col]}>
        <View>
          <Text style={styles.colHeader}></Text>
        </View>
      </View>
      <View style={styles.marginLeft}>
        <Text style={styles.colText}>Paikka ja aika edellä mainitut</Text>
      </View>
      <View style={styles.marginBelow} />
    </View>

    <View style={styles.row}>
      <View style={[styles.col]}>
        <View>
          <Text style={styles.colHeader}></Text>
        </View>
      </View>
      <View style={styles.marginLeft}>
        <Text style={styles.colText}>
          {jsonSchema && jsonSchema.inviteeName}
        </Text>
      </View>
    </View>

    <View style={styles.row}>
      <View style={styles.marginLeft}>
        <Text style={styles.colText}>
          Todistamme, että olemme merkinneet perukirjaan oikein kaiken meille
          ilmoitetun ja arvioineet varat parhaan ymmärryksemme mukaan. Paikka ja
          aika edellä mainitut
        </Text>
      </View>
    </View>

    <View style={styles.row}>
      <View style={[styles.col]}>
        <View>
          <Text style={styles.colHeader}></Text>
        </View>
      </View>
      <View style={styles.marginLeft}>
        <Text style={styles.colText}>Paikka ja aika edellä mainitut</Text>
      </View>
      <View style={styles.marginBelow} />
    </View>

    <View style={styles.row}>
      <View style={[styles.col]}>
        <View>
          <Text style={styles.colHeader}></Text>
        </View>
      </View>
      <View style={styles.marginLeft}>
        <Text style={styles.colText}>
          {jsonSchema && jsonSchema.trustedMenNameFirst}
        </Text>
      </View>
      <View style={styles.marginLeft}>
        <Text style={styles.colText}>
          {jsonSchema && jsonSchema.trustedMenNameSecond}
        </Text>
      </View>
    </View>
    <View style={styles.row1}>
      <View style={styles.col}>
        <View>
          <Text style={styles.colHeader}></Text>
        </View>
      </View>
      <View style={styles.marginLeft}>
        <Text style={[styles.colText, styles.colText1]}>
          {jsonSchema && jsonSchema.trustedMenPlaceFirst}
        </Text>
      </View>
      <View style={styles.marginLeft}>
        <Text style={[styles.colText, styles.colText1]}>
          {jsonSchema && jsonSchema.trustedMenPlaceSecond}
        </Text>
      </View>
    </View>
  </>
);

export default Footer;
