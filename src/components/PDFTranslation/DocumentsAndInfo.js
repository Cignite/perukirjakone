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
  tableRow: {
    flexDirection: "row",
    marginTop: -10
  }
});

const DocumentsAndInfo = ({ jsonSchema }) => (
  <>
    <View style={styles.row}>
      {jsonSchema && jsonSchema.isSukuselvitykset && (
        <View style={styles.col}>
          <View style={styles.checkboxDetail}>
            <Image
              style={styles.checkbox}
              source={CheckBox}
            />
            <Text> Sukuselvitykset </Text>
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
            <Text>Testamentti</Text>

          </View>
          <View style={[styles.tableRow]}>
            <View style={styles.col}>
              <View>
                <Text style={styles.colHeader}>Time of Death: </Text>
              </View>
            </View>
            <View style={styles.col}>
              <View>
                <Text style={styles.colText}>{moment(jsonSchema && jsonSchema.testamenttiTimeOfDeath).format('DD.MM.YYYY')}</Text>
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
            <Text> Testamentti </Text>
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
            <Text>Avioehtosopimukset</Text>

          </View>
          <View style={[styles.tableRow]}>
            <View style={styles.col}>
              <View>
                <Text style={styles.colHeader}>Date of prenub: </Text>
              </View>
            </View>
            <View style={styles.col}>
              <View>
                <Text style={styles.colText}>{moment(jsonSchema && jsonSchema.marriageSettlementDate).format('DD.MM.YYYY')}</Text>
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
            <Text> Avioehtosopimukset </Text>
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
            <Text>Other documents</Text>

          </View>
          <View style={[styles.tableRow]}>
            <View style={styles.col}>
              <View>
                <Text style={styles.colHeader}>Other document info: </Text>
              </View>
            </View>
            <View style={styles.col}>
              <View>
                <Text style={styles.colText}>{jsonSchema && jsonSchema.otherDocumentInfo}</Text>
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
            <Text> Other documents </Text>
          </View>
        </View>
      )}
    </View>
  </>
);

export default DocumentsAndInfo;
