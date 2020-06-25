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

const WindowAnnouncement = ({ jsonSchema }) => (
  <>
    <View style={styles.row}>
      <View>
        <Text style={styles.colHeader}>Lesken ilmoitus: </Text>
      </View>
    </View>
    <View style={styles.row}>
      {jsonSchema && jsonSchema.doesWidowWantsToLiveInSameApartment ? (
        <Text style={styles.colText}>
        Leski ilmoitti pitävänsä jakamattomana hallinnassan puolisoiden yhteisenä kotina käytetyn asunnon (PK 3:1 a § 2 momentti).

        </Text>
      ) : (
        <Text style={styles.colText}>
          Ei ilmoitettavaa
        </Text>
      )}
    </View>
  </>
);

export default WindowAnnouncement;
