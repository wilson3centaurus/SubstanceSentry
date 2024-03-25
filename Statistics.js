import React from 'react';
import { Text, StyleSheet } from 'react-native';

const Statistics = () => {
  
  return (
        <Text style={styles.stillInDev}>
          ⚠️ Section still under development ⚒️
        </Text>
);
};

const styles = StyleSheet.create({
  stillInDev: {
    textAlign: "center",
    alignSelf: "center",
    top: "50%",
    fontSize: 21,
    backgroundColor: "#514F47",
    color: "#fff",
    borderColor: "red",
    borderWidth: 3,
    borderRadius: 5,
    padding: 8,
  },
});

export default Statistics;
