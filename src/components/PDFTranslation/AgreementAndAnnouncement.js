import React from 'react';
import {
  Text,
  StyleSheet,
  View,
  Image
} from '@react-pdf/renderer';
import moment from 'moment';

import LineBreak from './LineBreak';
import CheckBox from './checkbox.png';
import Unchecked from './unchecked.png';

const BORDER_COLOR = '#bfbfbf';
const BORDER_STYLE = 'solid';
const COL1_WIDTH = 200
const COLN_WIDTH = (100 - COL1_WIDTH) / 3;

const styles = StyleSheet.create({
  row: {
    margin: 0,
    padding: 0,
    display: "flex",
    flexDirection: "row"
  },
  childRow: {
    display: "flex",
    flexDirection: "row",
    flexGrow: 1
  },
  col: {
    marginLeft: 20,
    marginRigt: 20,
    paddingBottom: 5,
    paddingRight: 10,
    flexDirection: "row",
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
    fontSize: 12,
    fontFamily: 'Lato Bold',
  },
  colText: {
    fontSize: 12,
    fontFamily: 'Lato',
    color: '#A8026F'
  },
  colTextHeader: {
    fontSize: 12,
    fontFamily: 'Lato Bold',
    color: '#A8026F',
    paddingTop: 5,
    paddingBottom: 5
  },
  detailContainer: {
    display: "flex",
    flexDirection: 'row',
  },
  detailText: {
    fontSize: 15,
    marginLeft: 35,
    marginTop: 5,
    marginBottom: 5,
    fontFamily: 'Lato Bold',
  },
  detailTextLevelSecond: {
    fontSize: 15,
    marginLeft: 35,
    marginTop: 20,
    marginBottom: 5,
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

const AgreeementAndAnnouncement = ({ jsonSchema }) => (
  <>
    <View style={styles.row}>
      <View >
        {jsonSchema && jsonSchema.verifyInfoProvidedIsCorrect ? (
          <View style={styles.col}>
            <View style={styles.checkboxDetail}>
              <Image
                style={styles.checkbox}
                source={CheckBox}
              />
              <Text style={styles.colText}>I certify that I have entered all the necessary documents into the perukirjakone and that I have received all the other supporting documents to finalize this process.</Text>

            </View>
          </View>
        ): (
          <View style={styles.col}>
            <View style={styles.checkboxDetail}>
              <Image
                style={styles.checkbox}
                source={Unchecked}
              />
              <Text style={styles.colText}> I certify that I have entered all the necessary documents into the perukirjakone and that I have received all the other supporting documents to finalize this process. </Text>
            </View>
          </View>
        )}
      </View>
    </View>
    <View style={styles.row}>

      <View>
        {jsonSchema && jsonSchema.haveAllPartiesInvited ? (
          <View style={styles.col}>
            <View style={styles.checkboxDetail}>
              <Image
                style={styles.checkbox}
                source={CheckBox}
              />
              <Text style={styles.colText}>Have all the parties been invited to this estate inventory?</Text>

            </View>
          </View>
        ): (
          <View style={styles.col}>
            <View style={styles.checkboxDetail}>
              <Image
                style={styles.checkbox}
                source={Unchecked}
              />
              <Text style={styles.colText}> Have all the parties been invited to this estate inventory? </Text>
            </View>
          </View>
        )}
      </View>
    </View>

    <View style={styles.row}>
      <View style={styles.col}>
        <Text style={styles.colTextHeader}>The announcement of the widow (1)</Text>
      </View>
    </View>

    <View style={styles.row}>
      <View>
        {jsonSchema && jsonSchema.doesWidowWantsToLiveInSameApartment ? (
          <View style={styles.col}>
            <View style={styles.checkboxDetail}>
              <Image
                style={styles.checkbox}
                source={CheckBox}
              />
              <Text style={styles.colText}>Does the widow want to remain living in the apartment?</Text>

            </View>
          </View>
        ): (
          <View style={styles.col}>
            <View style={styles.checkboxDetail}>
              <Image
                style={styles.checkbox}
                source={Unchecked}
              />
              <Text style={styles.colText}> Does the widow want to remain living in the apartment? </Text>
            </View>
          </View>
        )}
      </View>
    </View>

    <View style={styles.row}>
      <View style={styles.col}>
        <Text style={styles.colTextHeader}>Other announcements (2)</Text>
      </View>
    </View>

    <View style={styles.row}>
      <View>
        {jsonSchema && jsonSchema.doesWidowWantsToLiveInSameApartment ? (
          <View style={styles.col}>
            <View style={styles.checkboxDetail}>
              <Image
                style={styles.checkbox}
                source={CheckBox}
              />
              <Text style={styles.colText}>Do you want to make other announcements?</Text>

            </View>
          </View>
        ): (
          <View style={styles.col}>
            <View style={styles.checkboxDetail}>
              <Image
                style={styles.checkbox}
                source={Unchecked}
              />
              <Text style={styles.colText}>Do you want to make other announcements?</Text>
            </View>
          </View>
        )}
      </View>
      <View style={styles.detailContainer} />

    </View>


    <View style={styles.detailContainer}>
      <Text style={styles.detailTextLevelSecond}>Was there life insurance?</Text>
    </View>
    {jsonSchema && jsonSchema.isThereLifeInsurance ? (
      <>
        <View style={[styles.table, styles.border]}>
          <View style={styles.tableRow}>
            <View style={styles.tableCol1Header}>
              <Text style={styles.tableCellHeader}>Insurance name/number/company</Text>
            </View>
            <View style={styles.tableCol1Header}>
              <Text style={styles.tableCellHeader}>Amount</Text>
            </View>
            <View style={styles.tableCol1Header}>
              <Text style={styles.tableCellHeader}>Date</Text>
            </View>
          </View>

          <View style={styles.tableRow}>
            <View style={styles.tableCol1}>
              <Text style={styles.tableCell}>{jsonSchema && jsonSchema.insuranceName}</Text>
            </View>

            <View style={styles.tableCol1}>
              <Text style={styles.tableCell}>{jsonSchema && jsonSchema.insuranceAmount}</Text>
            </View>
            <View style={styles.tableCol1}>
              <Text style={styles.tableCell}>{moment(jsonSchema && jsonSchema.insuranceDate).format('DD.MM.YYYY')}</Text>
            </View>
          </View>
        </View>
      </>
    ): (
      <View>
        <Text style={styles.paragraphSecond}>Ei</Text>
      </View>
    )}
    <LineBreak />

  </>
);

export default AgreeementAndAnnouncement;
