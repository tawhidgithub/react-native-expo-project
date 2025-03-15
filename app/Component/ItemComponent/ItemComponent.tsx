import React, { FC } from "react";
import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { ItemProps } from "./Item.interface";
import CheckBoxButton from "../CheckBoxButton/CheckBox";
const ItemComponent: FC<ItemProps> = ({ fieldTitle, fieldId }) => {
  return (
    <View style={style.container}>
      <View style={style.itemLeft}>
        <TouchableOpacity style={style.square}> </TouchableOpacity>
        <Text style={style.title}>{fieldTitle}</Text>
      </View>
      <View style={style.circular}></View>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
    alignItems: "center",
  },
  itemLeft: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
  },
  title: {
    maxWidth: "80%",
  },
  square: {
    height: 24,
    width: 24,
    backgroundColor: "#55bcf6",
    opacity: 0.4,
    marginRight: 15,
  },
  circular: {
    height: 12,
    width: 12,
    borderColor: "#55bcf6",
    borderWidth: 2,
    borderRadius: 10,
  },
});

export default ItemComponent;
