import React, { FC } from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import { CheckBoxProp } from "./CheckBox.interface";

const CheckBoxButton: FC<CheckBoxProp> = ({ onClick, isDone }) => {
  return (
    <View style={styles.container}>
      <View style={[styles.box, isDone && styles.checkedBox]} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 5, // Makes it easier to tap
  },
  box: {
    height: 24,
    width: 24,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: "gray",
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  checkedBox: {
    backgroundColor: "green",
    borderColor: "green",
  },
});

export default CheckBoxButton;
