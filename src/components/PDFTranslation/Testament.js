import React from 'react';
import {
  Text,
  StyleSheet,
  View
} from '@react-pdf/renderer';

// import jsonSchema from './jsonSchema';

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
    color: '#A8026F'
  },
  detailContainer: {
    display: "flex",
    flexDirection: 'row',
  },
  detailText: {
    fontSize: 15,
    marginLeft: 35,
    marginTop: 40,
    marginBottom: -30,
    fontFamily: 'Lato Bold',
  }
});

const Testament = ({ jsonSchema }) => (
  <>
    <View style={styles.detailContainer}>
      <Text style={styles.detailText}>Has the property of the deceased or it’s part been assigned to someone?</Text>
    </View>
    {jsonSchema && jsonSchema.isTestamentDeceasedPropertyAssignedChecked ? (
      <View style={[styles.row, styles.border]}>
        <View style={[styles.col]}>
          <View>
            <Text style={styles.colHeader}>Person name: </Text>
          </View>
        </View>
        <View style={[styles.col]}>
          <View>
            <Text style={styles.colText}>{jsonSchema && jsonSchema.testamentPropertyAssignInfo}</Text>
          </View>
        </View>
      </View>
    ) : (
      <View style={[styles.row, styles.border]}>
        <View style={[styles.col]}>
          <View>
            <Text style={styles.colHeader}>-</Text>
          </View>
        </View>
      </View>
    )}
  </>
);

export default Testament;
