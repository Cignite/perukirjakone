import React from 'react';
import ReactPDF, {
  Text,
  StyleSheet
} from '@react-pdf/renderer';

const styles = StyleSheet.create({
  header: {
    paddingLeft: 30,
    marginBottom: -30,
    fontSize: '20px',
    fontFamily: 'Lato Bold',
    color: 'black'
  },
});

const ContentHeader = (props) => (
  <>
    <Text style={styles.header}>
      {props.label}
    </Text>
  </>
);

export default ContentHeader;
