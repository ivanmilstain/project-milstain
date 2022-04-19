import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Button } from "react-native-paper";
import { useNavigation } from '@react-navigation/native'

export default function Home(props) {
 const {userName} = props;
 const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Bienvenido, {userName}</Text>
      <Button onPress={() => {navigation.navigate("Detalle")}}>Detalle</Button>
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
    fontFamily: 'Bold',
    fontSize: 20
  }
});
