import React from 'react';
import {
  Text,
  StyleSheet,
  View
} from '@react-pdf/renderer';

import jsonSchema from './jsonSchema';
import List, { Item } from './List';
import LineBreak from './LineBreak';

const deceasedPerson = jsonSchema && jsonSchema.deceasedPerson.map(item => item.relationType);

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
    color: '#A8026F',
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
    fontSize: 15,
    marginLeft: 35,
    marginTop: -30,
    fontFamily: 'Lato Bold',
  },
  entryContainer: {
    marginTop: -20
  }
});

const RelationInfo = ({ deceasedPersonItem }) => {
  return (
    <View style={styles.entryContainer}>
      <List>
        {deceasedPersonItem.map((detail, i) => (
          <Item key={i} style={[styles.detailContainer, styles.item]}>
            {detail}
          </Item>
        ))}
      </List>
    </View>
  );
};

const ShareholderInfo = () => (
  <>
    <View style={styles.row}>
      <View style={[styles.col]}>
        <View>
          <Text style={styles.colHeader}>Shareholder name: </Text>
          <Text style={styles.colHeader}>SSN:</Text>
        </View>
      </View>
      <View style={[styles.col]}>
        <View>
          <Text style={styles.colText}>{jsonSchema.shareholderName}</Text>
          <Text style={styles.colText}>{jsonSchema.shareholderSSN}</Text>
        </View>
      </View>
    </View>
    <View style={styles.detailContainer}>
      <Text style={styles.detailText}>Who are the partners in the estate?</Text>
    </View>
    <View style={[styles.row, styles.border]}>
      <RelationInfo
        deceasedPersonItem={deceasedPerson}
      />
    </View>
    <LineBreak />
  </>
);

export default ShareholderInfo;
