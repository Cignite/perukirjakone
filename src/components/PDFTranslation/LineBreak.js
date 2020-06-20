import React from 'react';
import {
  StyleSheet,
  View
} from '@react-pdf/renderer';

const styles = StyleSheet.create({
  row: {
    margin: 5,
    padding: 5,
    display: "flex",
    flexDirection: "row"
  },
});

const LineBreak = () => (
  <>
    <View style={styles.row} />
  </>
);

export default LineBreak;
