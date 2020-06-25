import React from 'react';
import {
  Text,
  StyleSheet,
  View
} from '@react-pdf/renderer';

const styles = StyleSheet.create({
  row: {
    display: "flex",
    flexDirection: "row"
  },
  col: {
    margin: 10,
    padding: 10,
  },
  border: {
    borderStyle: "solid",
    borderBottomColor: "#2d2d2d",
    borderBottomWidth: 1
  },
  borderBox: {
    borderStyle: "dashed",
    borderColor: "#2d2d2d",
    borderWidth: 1
  },
  header: {
    paddingLeft: 30,
    marginBottom: -30,
    fontSize: '20px',
    fontFamily: 'Lato',
    color: 'black'
  },
  colHeader: {
    fontSize: 12,
    fontFamily: 'Lato',
    padding: 10,
  },
  colText: {
    fontSize: 12,
    fontFamily: 'Lato',
    color: '#000000',
    padding: 10,
  },
  description: {
    margin: 10,
    padding: 10,
    fontSize: 12,
    fontFamily: 'Lato',
    color: '#000000',
    marginTop: -20,
    marginBottom: -20,
  },
  footer: {
    marginTop: -30
  },
  signature: {
    marginTop: -15,
    marginLeft: 20,
  }
});

const Footer = ({ jsonSchema }) => (
  <>
    <View style={[styles.row, styles.footer]}>
      <View style={[styles.col]}>
        <View>
          <Text style={styles.colHeader}>Paikka ja aika edellä mainitut </Text>
          <Text style={styles.colHeader}>{jsonSchema && jsonSchema.inviteeName}</Text>
          <Text style={styles.colHeader}>Ilmoittaja</Text>
        </View>
      </View>
      <View style={[styles.col]}>
        <View>
          <Text style={styles.colText}>_______________________________________</Text>
          <Text style={styles.colText}>_______________________________________</Text>
          <Text style={[styles.colText, styles.signature]}>Allekirjoitus yläpuolelle</Text>
        </View>
      </View>
    </View>

    <View style={styles.row}>
      <Text style={styles.description}>Todistamme, että olemme merkinneet perukirjaan oikein kaiken meille ilmoitetun ja arvioineet varat parhaan ymmärryksemme mukaan.
Paikka ja aika edellä mainitut
      </Text>
    </View>

    <View style={styles.row}>
      <View style={[styles.col]}>
        <View>
          <Text style={styles.colHeader}>Paikka ja aika edellä mainitut </Text>
          <Text style={styles.colHeader}>{jsonSchema && jsonSchema.trustedMenNameFirst}</Text>
          <Text style={styles.colHeader}>_______________________________________</Text>
          <Text style={[styles.colText, styles.signature]}>Allekirjoitus yläpuolelle</Text>
        </View>
      </View>
      <View style={[styles.col]}>
        <View>
          <Text style={styles.colText}>_______________________________________</Text>
          <Text style={styles.colText}>{jsonSchema && jsonSchema.trustedMenNameSecond}</Text>
          <Text style={styles.colHeader}>_______________________________________</Text>
          <Text style={[styles.colText, styles.signature]}>Allekirjoitus yläpuolelle</Text>
        </View>
      </View>
    </View>
  </>
);

export default Footer;
