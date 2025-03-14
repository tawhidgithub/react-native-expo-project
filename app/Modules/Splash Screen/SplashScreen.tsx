import React from "react";
import { View, Text, StyleSheet } from "react-native";

const SplashScreen = () => {
  return (
    <View style={style.container}>
      <Text style={style.text}>Splash Screen</Text>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 30,
    color: "red",
    fontWeight: "bold",
  },
});

export default SplashScreen;
