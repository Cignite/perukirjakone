import React from 'react';
import {
  Text,
  StyleSheet,
  View
} from '@react-pdf/renderer';

import LineBreak from './LineBreak';

import { calculateTotal } from '../utils';

const BORDER_COLOR = '#000';
const BORDER_STYLE = 'solid';
const COL1_WIDTH = 200
const COLN_WIDTH = (100 - COL1_WIDTH) / 3;

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
    color: '#000000',
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
    marginLeft: 30,
    marginTop: 35,
    fontFamily: 'Lato Bold',
    marginBottom: 15
  },
  table: {
    marginLeft: 30,
    display: "table",
    width: "auto",
    borderStyle: BORDER_STYLE,
    borderColor: BORDER_COLOR,
    borderWidth: 1,
    borderRightWidth: 0,
    borderBottomWidth: 0
  },
  tableRow: {
    margin: "auto",
    flexDirection: "row"
  },
  tableCol1Header: {
    width: COL1_WIDTH + '%',
    borderStyle: BORDER_STYLE,
    borderColor: BORDER_COLOR,
    borderBottomColor: '#000',
    borderWidth: 1,
    borderLeftWidth: 0,
    borderTopWidth: 0
  },
  tableColHeader: {
    width: COLN_WIDTH + "%",
    borderStyle: BORDER_STYLE,
    borderColor: BORDER_COLOR,
    borderBottomColor: '#000',
    borderWidth: 1,
    borderLeftWidth: 0,
    borderTopWidth: 0
  },
  tableCol1: {
    width: COL1_WIDTH + '%',
    borderStyle: BORDER_STYLE,
    borderColor: BORDER_COLOR,
    borderWidth: 1,
    borderLeftWidth: 0,
    borderTopWidth: 0
  },
  tableCol: {
    width: COLN_WIDTH + "%",
    borderStyle: BORDER_STYLE,
    borderColor: BORDER_COLOR,
    borderWidth: 1,
    borderLeftWidth: 0,
    borderTopWidth: 0
  },
  tableCellHeader: {
    margin: 5,
    fontSize: 12,
    fontWeight: 500
  },
  tableCell: {
    margin: 5,
    fontSize: 10
  },
  paragraphSecond: {
    fontSize: 15,
    marginLeft: 35,
    fontFamily: 'Lato',
    marginBottom: 15
  },
});

const DeceasedTotalSum = ({ jsonSchema }) => {
  const deceasedBankTotal = calculateTotal(jsonSchema && jsonSchema.bankAccountInfo);
  const deceasedStockTotal = calculateTotal(jsonSchema && jsonSchema.shareInfo);
  const deceasedPropertyTotal = calculateTotal(jsonSchema && jsonSchema.propertyInfo);
  const deceasedBelongingsOver4KTotal = calculateTotal(jsonSchema && jsonSchema.propertyLikeSofaWatchInfo);
  const deceasedPersonalBelongingsTotal = calculateTotal(jsonSchema && jsonSchema.personalBelongingsInfo);
  const deceasedAutomobilesTotal = jsonSchema && parseInt(jsonSchema.deceasedCarBrandTypeValue, 10) + parseInt(jsonSchema.deceasedMotorBikeBrandTypeValue, 10)

  return (
    <>
      <View style={styles.detailContainer}>
        <Text style={styles.detailText}>Yhteensä</Text>
      </View>
      <View style={styles.table}>
        <View style={styles.tableRow}>
          <View style={styles.tableCol1Header}>
            <Text style={styles.tableCellHeader}>Nimike</Text>
          </View>
          <View style={styles.tableCol1Header}>
            <Text style={styles.tableCellHeader}>Määrä</Text>
          </View>
        </View>

        <View style={styles.tableRow}>
          <View style={styles.tableCol1}>
            <Text style={styles.tableCell}>Pankki</Text>
          </View>
          <View style={styles.tableCol1}>
            <Text style={styles.tableCell}>{deceasedBankTotal}</Text>
          </View>
        </View>
        <View style={styles.tableRow}>


          <View style={styles.tableCol1}>
            <Text style={styles.tableCell}>Osakkeen</Text>
          </View>
          <View style={styles.tableCol1}>
            <Text style={styles.tableCell}>{deceasedStockTotal}</Text>
          </View>
        </View>
        <View style={styles.tableRow}>
          <View style={styles.tableCol1}>
            <Text style={styles.tableCell}>Kiinteiostöt/Huoneistot</Text>
            </View>

          <View style={styles.tableCol1}>
            <Text style={styles.tableCell}>{deceasedPropertyTotal}</Text>
          </View>
        </View>

        <View style={styles.tableRow}>
          <View style={styles.tableCol1}>
            <Text style={styles.tableCell}>Omaisuuden</Text>
            </View>

          <View style={styles.tableCol1}>
            <Text style={styles.tableCell}>{deceasedPersonalBelongingsTotal}</Text>
          </View>
        </View>

        <View style={styles.tableRow}>
          <View style={styles.tableCol1}>
            <Text style={styles.tableCell}>irtaimen omaisuuden arvo yli 4000 euroa</Text>
            </View>

          <View style={styles.tableCol1}>
            <Text style={styles.tableCell}>{deceasedBelongingsOver4KTotal}</Text>
          </View>
        </View>

        <View style={styles.tableRow}>
          <View style={styles.tableCol1}>
            <Text style={styles.tableCell}>Car/motor</Text>
            </View>

          <View style={styles.tableCol1}>
            <Text style={styles.tableCell}>{deceasedAutomobilesTotal}</Text>
          </View>
        </View>
        <View style={styles.tableRow}>
          <View style={styles.tableCol1}>
            <Text style={styles.tableCell}>Yhteensä</Text>
            </View>

          <View style={styles.tableCol1}>
            <Text style={styles.tableCell}>{deceasedAutomobilesTotal+deceasedBelongingsOver4KTotal+deceasedPersonalBelongingsTotal+deceasedPropertyTotal+deceasedStockTotal+deceasedBankTotal}</Text>
          </View>
        </View>

      </View>
      <LineBreak />
      <br />
      <br />
    </>
  )
}

export default DeceasedTotalSum;
