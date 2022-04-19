import { StyleSheet } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home";
import Detail from "../screens/Detail";

const Stack = createNativeStackNavigator();

export default function HomeStackNavigation(props) {
  const { userName } = props;

  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" children={() => <Home userName={userName} />} />
      <Stack.Screen name="Detalle" component={Detail} />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({});
