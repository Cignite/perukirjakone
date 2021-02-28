import React from 'react';
import {
  Text,
  StyleSheet,
  View
} from '@react-pdf/renderer';

import LineBreak from './LineBreak';

const BORDER_COLOR = '#000';
const BORDER_STYLE = 'solid';
const COL1_WIDTH = 200
const COLN_WIDTH = (100 - COL1_WIDTH) / 3;

const styles = StyleSheet.create({
  row: {
    padding: 5,
    display: "flex",
    flexDirection: "row",
  },
  col: {
    padding: 5,
  },
  colText: {
    fontSize: 15,
    fontFamily: 'Lato',
    color: '#000000',
  },
  colHeader: {
    fontSize: 15,
    fontFamily: 'Lato Bold',
  },
  marginLeft: {
    marginLeft: 80,
  },
  col1: {
    padding: 0
  }
});

const Partners = ({ jsonSchema }) => (
  <>
    <View style={styles.row}>
      <View style={[styles.col]}>
        <View>
          <Text style={styles.colHeader}>Oikeudenomistajat </Text>
        </View>
      </View>
    </View>
    <View style={styles.row}>
      <View style={styles.marginLeft}>
        {jsonSchema && jsonSchema.relationshipInfo.map((item, index) => {
          return (
            <View key={index} style={styles.marginLeft}>
              <Text style={styles.colText}>
                {index + 1}.&nbsp;{item.relationType},&nbsp;
                {item.name},&nbsp;
                {item.ssn},&nbsp;

              </Text>
              <View style={styles.row}>
                <View style={[styles.col1]}>
                  <Text style={styles.colText}>{item.address}</Text>
                </View>
              </View>

            </View>
            )
          })}
        </View>
      </View>
  </>
);

export default Partners;
