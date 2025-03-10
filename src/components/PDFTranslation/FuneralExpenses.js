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
    fontSize: 15,
    marginLeft: 35,
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

const FuneralExpenses = ({ jsonSchema }) => {
  const familyStudyTotal = calculateTotal(jsonSchema && jsonSchema.funeralExpensesInfo);
  const otherFuneralExpensesTotal = calculateTotal(jsonSchema && jsonSchema.otherFuneralExpenses);
  const funeralDeathCertificateTotal= jsonSchema && parseInt(jsonSchema.funeralExpensesInfoDeathCertificate, 10);
  const flowerExpensesTotal = jsonSchema && parseInt(jsonSchema.flowers, 10);
  const tombstoneExpenses = jsonSchema && parseInt(jsonSchema.funeralExpensesInfoTombstone, 10);
  const peruRewardExpenses = jsonSchema && parseInt(jsonSchema.perukirjakoneReward, 10);
  const peruFeeExpenses = jsonSchema && parseInt(jsonSchema.perukirjakoneFee, 10);

  return (
    <>
      <View style={styles.detailContainer}>
        <Text style={styles.detailText}></Text>
      </View>
      <View style={styles.table}>
        <View style={styles.tableRow}>
          <View style={styles.tableCol1Header}>

            <Text style={styles.tableCellHeader}>Kulu</Text>
          </View>
          <View style={styles.tableCol1Header}>
            <Text style={styles.tableCellHeader}>Määrä (€)</Text>
          </View>
        </View>
        {jsonSchema && jsonSchema.funeralExpensesInfo && jsonSchema.funeralExpensesInfo.map((item, index) => {
          return (
            <View style={styles.tableRow} key={index}>
              <View style={styles.tableCol1}>
                <Text style={styles.tableCell}>Sukuselvitykset ({index+1})</Text>
              </View>
              <View style={styles.tableCol1}>
                <Text style={styles.tableCell}>{item.value}</Text>
              </View>
            </View>
          )
        })}
        <View style={styles.tableRow}>
          <View style={styles.tableCol1}>
            <Text style={styles.tableCell}>Saldotodistukset</Text>
          </View>
          <View style={styles.tableCol1}>
            <Text style={styles.tableCell}>{jsonSchema && jsonSchema.funeralExpensesInfoDeathCertificate}</Text>
          </View>
        </View>

        <View style={styles.tableRow}>
          <View style={styles.tableCol1}>
            <Text style={styles.tableCell}>Kukkat</Text>
          </View>
          <View style={styles.tableCol1}>
            <Text style={styles.tableCell}>{jsonSchema && jsonSchema.flowers}</Text>
          </View>
        </View>

        <View style={styles.tableRow}>
          <View style={styles.tableCol1}>
            <Text style={styles.tableCell}>Hautakivet</Text>
          </View>
          <View style={styles.tableCol1}>
            <Text style={styles.tableCell}>{jsonSchema && jsonSchema.funeralExpensesInfoTombstone}</Text>
          </View>
        </View>

        {jsonSchema && jsonSchema.otherFuneralExpenses && jsonSchema.otherFuneralExpenses.map((item, index) => {
          return (
            <View style={styles.tableRow} key={index}>
              <View style={styles.tableCol1}>
                <Text style={styles.tableCell}>Other expenses ({index+1})</Text>
              </View>
              <View style={styles.tableCol1}>
                <Text style={styles.tableCell}>{item.value}</Text>
              </View>
            </View>
          )
        })}

        <View style={styles.tableRow}>
          <View style={styles.tableCol1}>
            <Text style={styles.tableCell}>Perukirjakone reward</Text>
          </View>
          <View style={styles.tableCol1}>
            <Text style={styles.tableCell}>{jsonSchema && jsonSchema.perukirjakoneReward}</Text>
          </View>
        </View>

        <View style={styles.tableRow}>
          <View style={styles.tableCol1}>
            <Text style={styles.tableCell}>Perukirjakone fee</Text>
          </View>
          <View style={styles.tableCol1}>
            <Text style={styles.tableCell}>{jsonSchema && jsonSchema.perukirjakoneFee}</Text>
          </View>
        </View>

        <View style={styles.tableRow}>
          <View style={styles.tableCol1}>
            <Text style={styles.tableCell}>Yhteensä</Text>
          </View>
          <View style={styles.tableCol1}>
            <Text style={styles.tableCell}>{familyStudyTotal+otherFuneralExpensesTotal+funeralDeathCertificateTotal+flowerExpensesTotal+tombstoneExpenses+peruRewardExpenses+peruFeeExpenses}</Text>
          </View>
        </View>

      </View>
      <LineBreak />
      <br />
      <br />

    </>
  )
}

export default FuneralExpenses;
