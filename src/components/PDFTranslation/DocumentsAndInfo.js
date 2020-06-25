import React from 'react';
import {
  Text,
  StyleSheet,
  View,
  Image
} from '@react-pdf/renderer';
import moment from 'moment';

import CheckBox from './checkbox.png';
import Unchecked from './unchecked.png';

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
  childRow: {
    display: "flex",
    flexDirection: "row",
    marginTop: -50,
    marginLeft: 20
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
    color: '#000'
  },
  colTextSmall: {
    fontSize: 14,
    fontFamily: 'Lato',
    color: '#000'
  },
  detailContainer: {
    display: "flex",
    flexDirection: 'row',
  },
  detailText: {
    fontSize: 15,
    marginLeft: 35,
    marginTop: 10,
    marginBottom: -30,
    fontFamily: 'Lato Bold',
  },
  checkbox: {
    height: 15,
    width: 15,
    display: "flex",
    marginRight: 5,
    marginTop: 3,
  },
  checkboxDetail: {
    display: "flex",
    flexDirection: "row"
  },
  childRowContent: {
    marginTop: 10,
    marginLeft: 20,
  },
  table: {
    marginLeft: 30,
    marginBottom: 10,
    marginTop: 10,
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

const DocumentsAndInfo = ({ jsonSchema }) => (
  <>
    <View style={styles.detailContainer}>
      <Text style={styles.detailText}>Toimituksen perusteena oleva asiakirjat ja tiedot </Text>
    </View>
    <View style={styles.row}>
      {jsonSchema && jsonSchema.isSukuselvitykset && (
        <View style={styles.col}>
          <View style={styles.checkboxDetail}>
            <Image
              style={styles.checkbox}
              source={CheckBox}
            />
          <Text style={styles.colText}> Sukuselvitykset </Text>
          </View>
        </View>
      )}
    </View>
    <View style={styles.childRow}>
      {jsonSchema &&  jsonSchema.isTestamenttiChecked ? (
        <View style={styles.col}>
          <View style={styles.checkboxDetail}>
            <Image
              style={styles.checkbox}
              source={CheckBox}
            />
          <Text style={styles.colText}>Testamentti</Text>

          </View>
          <View style={[styles.tableRow]}>
            <View style={styles.col}>
              <View>
                <Text style={styles.colTextSmall}>Merkittiin tiedoksi testamentti &nbsp; {moment(jsonSchema && jsonSchema.testamenttiTimeOfDeath).format('DD.MM.YYYY')} </Text>
              </View>
            </View>
          </View>

        </View>
      ): (
        <View style={styles.col}>
          <View style={styles.checkboxDetail}>
            <Image
              style={styles.checkbox}
              source={Unchecked}
            />
          <Text style={styles.colText}> Testamentti </Text>
          </View>
        </View>
      )}
    </View>

    <View style={styles.childRow}>
      {jsonSchema && jsonSchema.isMarriedSettlementContractChecked ? (
        <View style={styles.col}>
          <View style={styles.checkboxDetail}>
            <Image
              style={styles.checkbox}
              source={CheckBox}
            />
          <Text style={styles.colText}>Avioehtosopimukset</Text>

          </View>
          <View style={[styles.tableRow]}>
            <View style={styles.col}>
              <View>
                <Text style={styles.colTextSmall}>Avioehtosopimus &nbsp;{moment(jsonSchema && jsonSchema.marriageSettlementDate).format('DD.MM.YYYY')} ilmoitettu </Text>
              </View>
            </View>
          </View>

        </View>
      ): (
        <View style={styles.col}>
          <View style={styles.checkboxDetail}>
            <Image
              style={styles.checkbox}
              source={Unchecked}
            />
            <Text style={styles.colText}> Avioehtosopimukset </Text>
          </View>
        </View>
      )}
    </View>

    <View style={[styles.childRow, styles.border]}>
      {jsonSchema && jsonSchema.isOtherDocumentChecked ? (
        <View style={styles.col}>
          <View style={styles.checkboxDetail}>
            <Image
              style={styles.checkbox}
              source={CheckBox}
            />
          <Text style={styles.colText}>Dokumentti</Text>

          </View>
          <View style={styles.table}>
            {jsonSchema && jsonSchema.otherDocumentInfo && jsonSchema.otherDocumentInfo.map((item, index) => {
              return (
                <View style={styles.tableRow} key={index}>
                  <View style={styles.tableCol1}>
                    <Text style={styles.tableCell}>{item.otherDocInfo}</Text>
                  </View>
                </View>
              )
            })}
          </View>

        </View>
      ): (
        <View style={styles.col}>
          <View style={styles.checkboxDetail}>
            <Image
              style={styles.checkbox}
              source={Unchecked}
            />
          <Text style={styles.colText}> Dokumentti - Ei tiedosta</Text>
          </View>
        </View>
      )}
    </View>
  </>
);

export default DocumentsAndInfo;
