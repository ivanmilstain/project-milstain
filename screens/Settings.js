import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function Settings() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Configuraciones</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontFamily: "Bold",
    fontSize: 20,
  },
});
