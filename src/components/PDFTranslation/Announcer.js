import React from 'react';
import {
  Text,
  StyleSheet,
  View
} from '@react-pdf/renderer';
import moment from 'moment';

const styles = StyleSheet.create({
  row: {
    margin: 10,
    padding: 10,
    display: "flex",
    flexDirection: "row"
  },
  col: {
    margin: 5,
    padding: 5,
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
    color: '#000000'
  },
});

const Announcer = ({ jsonSchema }) => (
  <>
    <View style={styles.row}>
      <View style={[styles.col]}>
        <View>
          <Text style={styles.colHeader}>Ilmoittaja: </Text>
        </View>
      </View>
      <View style={[styles.col]}>
        <View>
          <Text style={styles.colText}>
            {jsonSchema && jsonSchema.inviteeName} &nbsp; {jsonSchema && moment(jsonSchema.inviteeDate).format('DD.MM.YYYY')}, &nbsp;
            {jsonSchema && jsonSchema.inviteePlace}

          </Text>
        </View>
      </View>
    </View>
  </>
);

export default Announcer;
