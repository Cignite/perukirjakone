import React from 'react';
import {
  Text,
  StyleSheet,
  View
} from '@react-pdf/renderer';

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
    marginBottom: -10,
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
    color: '#00000'
  },
  detailContainer: {
    display: "flex",
    flexDirection: 'row',
  },
  detailTextFirstLevel: {
    fontSize: 15,
    marginLeft: 20,
    marginTop: 10,
    fontFamily: 'Lato Bold',
    marginBottom: -30,
    flexDirection: "row"
  },
  detailText: {
    fontSize: 15,
    marginLeft: 30,
    marginTop: 10,
    fontFamily: 'Lato Bold',
    marginBottom: 10,
    flexDirection: "row"
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

const PresentAtMeeting = ({ jsonSchema }) => (
  <>
    <View style={styles.detailContainer}>
      <Text style={styles.detailText}>Läsnä</Text>
    </View>
    <View style={[styles.table, styles.border]}>
      <View style={styles.tableRow}>
        <View style={styles.tableCol1Header}>
          <Text style={styles.tableCellHeader}>Name</Text>
        </View>
        <View style={styles.tableCol1Header}>
          <Text style={styles.tableCellHeader}>City</Text>
        </View>
      </View>
      {jsonSchema && jsonSchema.whoWasPresent && jsonSchema.whoWasPresent.map((item, index) => {
        return (
          <View style={styles.tableRow} key={index}>
            <View style={styles.tableCol1}>
              <Text style={styles.tableCell}>{item.name}</Text>
            </View>

            <View style={styles.tableCol1}>
              <Text style={styles.tableCell}>{item.city}</Text>
            </View>
          </View>
        )
      })}
    </View>
  </>
);

export default PresentAtMeeting;
