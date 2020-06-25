import React from 'react';
import {
  Text,
  StyleSheet,
  View
} from '@react-pdf/renderer';

import List, { Item } from './List';

const styles = StyleSheet.create({
  row: {
    margin: 10,
    padding: 10,
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
    fontFamily: 'Lato Bold',
    color: 'black'
  },
  colHeader: {
    fontSize: 15,
    fontFamily: 'Lato Bold',
  },
  colText: {
    fontSize: 15,
    fontFamily: 'Lato',
    color: '#000',
  },
  detailContainer: {
    display: "flex",
    flexDirection: 'row',
  },
  item: {
    flexDirection: 'row',
    marginBottom: 1,
  },
  bulletPoint: {
    width: 10,
    fontSize: 10,
  },
  itemContent: {
    flex: 10,
    fontSize: 10,
    fontFamily: 'Lato',
    flexGrow: 1
  },
  detailText: {
    fontSize: 18,
    marginLeft: 35,
    marginTop: 10,
    fontFamily: 'Lato Bold',
  },
  entryContainer: {
    marginTop: 20
  }
});

const RelationInfo = ({ deceasedPersonItem }) => {
  return (
    <View style={styles.entryContainer}>
      <List>
        {deceasedPersonItem && deceasedPersonItem.map((detail, i) => (
          <Item key={i} style={[styles.detailContainer, styles.item]}>
            {detail}
          </Item>
        ))}
      </List>
    </View>
  );
};

const ShareholderInfo = ({ jsonSchema }) => {
  const trustedMen = [jsonSchema && jsonSchema.trustedMenNameFirst, jsonSchema && jsonSchema.trustedMenNameSecond];

  return (
    <>
      <View style={styles.detailContainer}>
        <Text style={styles.detailText}>Uskotut miehet</Text>
      </View>
      <View style={styles.detailContainer}>
        <RelationInfo
          deceasedPersonItem={trustedMen}
        />
      </View>
    </>
  )
}

export default ShareholderInfo;
