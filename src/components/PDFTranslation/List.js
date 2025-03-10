import React from "react";

import { Text, View, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  item: {
    flexDirection: "row",
    marginLeft: 50,
    marginTop: -15,
    marginBottom: 15,
  },
  bulletPoint: {
    width: 10,
    fontSize: 15,
  },
  itemContent: {
    flex: 1,
    fontSize: 12,
    fontFamily: "Lato",
    marginBottom: 5,
  },
});

const List = ({ children }) => children;

export const Item = ({ children }) => (
  <View style={styles.item}>
    <Text style={styles.itemContent}>{children}</Text>
  </View>
);

export default List;
