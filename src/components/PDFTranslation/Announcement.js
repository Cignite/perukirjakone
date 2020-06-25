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
    marginTop: -30,
    fontSize: 12,
    fontFamily: 'Lato',
    color: '#000000'
  },
});

const Announcement = ({ jsonSchema }) => (
  <>
    <View style={styles.row}>
      <View>
        <Text style={styles.colHeader}>Muuta ilmoitettavaa: </Text>
      </View>
    </View>
    <View style={styles.row}>
      {jsonSchema && jsonSchema.otherAnnouncementDescription ? (
        <Text style={styles.colText}>
          {jsonSchema && jsonSchema.otherAnnouncementDescription}
        </Text>
      ) : (
        <Text style={styles.colText}>
          Ei muuta ilmoitettavaa
        </Text>
      )}
    </View>
  </>
);

export default Announcement;
