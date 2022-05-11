import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Header = (props) => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.textContainer}>
        <Text style={styles.titleText}> {props.title} </Text>
        <Text style={styles.subtitleText}> {props.time} </Text>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  mainContainer: {
    padding: 0,
    backgroundColor: "#9ad3bc",
    aspectRatio: 2,
  },
  textContainer: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  titleText: {
    fontSize: 25,
    color: "#e8e8e8",
  },
  subtitleText: {
    fontSize: 40,
    color: "#e8e8e8",
    fontWeight: "bold",
  },
});
