import React from 'react';
import {
  Text,
  StyleSheet,
  View
} from '@react-pdf/renderer';
import moment from 'moment';

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
    color: '#000000'
  },
});

const CustomerInfo = ({ jsonSchema }) => (
  <>
    <View style={[styles.row, styles.border]}>
      <View style={[styles.col]}>
        <View>
          <Text style={styles.colHeader}>Firstname: </Text>
          <Text style={styles.colHeader}>Lastname:</Text>
          <Text style={styles.colHeader}>SSN:</Text>
          <Text style={styles.colHeader}>Address:</Text>
          <Text style={styles.colHeader}>Time of death:</Text>
          <Text style={styles.colHeader}>Place of death:</Text>
        </View>
      </View>
      <View style={[styles.col]}>
        <View>
          <Text style={styles.colText}>{jsonSchema && jsonSchema.customerFirstName}</Text>
          <Text style={styles.colText}>{jsonSchema && jsonSchema.customerlastName}</Text>
          <Text style={styles.colText}>{jsonSchema && jsonSchema.customerSSN}</Text>
          <Text style={styles.colText}>{jsonSchema && jsonSchema.address}</Text>
          <Text style={styles.colText}>{moment(jsonSchema && jsonSchema.customerTimeOfDeath).format('DD.MM.YYYY')}</Text>
          <Text style={styles.colText}>{jsonSchema && jsonSchema.agreeementPlace}</Text>
        </View>
      </View>
    </View>
  </>
);

export default CustomerInfo;
