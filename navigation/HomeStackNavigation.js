import { StyleSheet, View, TouchableOpacity } from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useDispatch } from "react-redux";
import { setUserName } from "../store/actions/user.action";
import colors from "../constants/colors";
import Home from "../screens/Home";
import Detail from "../screens/Detail";

const Stack = createNativeStackNavigator();

export default function HomeStackNavigation() {
  const dispatch = useDispatch();

  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerRight: () => (
            <View style={styles.buttonLogoutContainer}>
              <TouchableOpacity onPress={() => dispatch(setUserName(null))}>
                <Ionicons
                  name="log-out-outline"
                  color={colors.primary}
                  size={28}
                />
              </TouchableOpacity>
            </View>
          ),
        }}
      />
      <Stack.Screen
        name="Detalle"
        component={Detail}
        options={{
          headerRight: () => (
            <View style={styles.buttonLogoutContainer}>
              <TouchableOpacity onPress={() => dispatch(setUserName(null))}>
                <Ionicons
                  name="log-out-outline"
                  color={colors.primary}
                  size={28}
                />
              </TouchableOpacity>
            </View>
          ),
        }}
      />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({});
