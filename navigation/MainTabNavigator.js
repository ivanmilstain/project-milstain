import { StyleSheet, View, TouchableOpacity } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "@expo/vector-icons/Ionicons";
import Settings from "../screens/Settings";
import colors from "../constants/colors";
import HomeStackNavigation from "./HomeStackNavigation";

const Tab = createBottomTabNavigator();

export default function MainTabNavigator(props) {
  const { userName, setUserName } = props;

  const logout = () => {
    setUserName(null);
  };

  return (
    <NavigationContainer>
      <Tab.Navigator
        options={{
          headerShown: true,
        }}
      >
        <Tab.Screen
          name="HomeStack"
          children={() => (
            <HomeStackNavigation userName={userName} />
          )}
          options={{
            headerShown: false,
            tabBarActiveTintColor: colors.accent,
            tabBarInactiveTintColor: colors.primary,
            tabBarIcon: ({ color, size }) => {
              return <Ionicons name={"home"} size={size} color={color} />;
            },
            headerRight: () => (
              <View style={styles.buttonLogoutContainer}>
                <TouchableOpacity onPress={() => logout()}>
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
        <Tab.Screen
          name="Settings"
          component={Settings}
          options={{
            tabBarActiveTintColor: colors.accent,
            tabBarInactiveTintColor: colors.primary,
            tabBarIcon: ({ color, size }) => {
              return <Ionicons name={"settings"} size={size} color={color} />;
            },
            headerRight: () => (
              <View style={styles.buttonLogoutContainer}>
                <TouchableOpacity onPress={() => logout()}>
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
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  buttonLogoutContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
    paddingRight: 10,
    width: 120,
    marginRight: 5,
    marginTop: 2,
  },
});
