import ItemComponent from "@/app/Component/ItemComponent/ItemComponent";
import React, { FC } from "react";
import { StyleSheet, View, Text } from "react-native";
import { MyToDo } from "./Data/data";

const DashBoard: FC = () => {
  return (
    <View style={style.container}>
      <View style={style.tasksWrapper}>
        <Text style={style.sectionTitle}>Today's tasks</Text>
        <View style={style.items}>
          {MyToDo.map((todo, index) => (
            <ItemComponent
              key={index}
              fieldTitle={todo.fieldTitle}
              fieldId={todo.id}
            />
          ))}
        </View>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E8EAED",
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "bold",
  },
  items: {
    marginTop: 30,
  },
  tasksWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
});

export default DashBoard;
