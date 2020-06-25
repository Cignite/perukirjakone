import React from 'react';
import {
  Text,
  StyleSheet,
  View
} from '@react-pdf/renderer';

const styles = StyleSheet.create({
  row: {
    margin: 10,
    padding: 10,
    display: "flex",
    flexDirection: "row"
  },
  col: {
    margin: 5,
    padding: 5,
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
    fontFamily: 'Lato Bold',
    color: 'black'
  },
  colHeader: {
    fontSize: 15,
    fontFamily: 'Lato Bold',
    marginTop: -20,
    marginBottom: -20
  },
  colText: {
    marginTop: -30,
    fontSize: 12,
    fontFamily: 'Lato',
    color: '#000000'
  },
});

const Assurances = ({ jsonSchema }) => (
  <>
    <View style={styles.row}>
      <View>
        <Text style={styles.colHeader}>Vakuutukset (Toimitus lopetettiin seuraavin valaehtoisin vakuutuksin): </Text>
      </View>
    </View>
    <View style={styles.row}>
      <Text style={styles.colText}>
        Vakuutan, että perunkirjoitus varten antamani tiedot ovat oikeat ja etten tahallisesti ole jättänyt mitään ilmoittamatta.
      </Text>
    </View>
  </>
);

export default Assurances;
