import { StyleSheet, View, TouchableOpacity } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "@expo/vector-icons/Ionicons";
import Home from "../screens/Home";
import Settings from "../screens/Settings";
import colors from "../constants/colors";

const Tab = createBottomTabNavigator();

export default function MainNavigator(props) {
  const { userName, setUserName } = props;

  const logout = () => {
    setUserName(null);
  };

  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          children={() => (
            <Home userName={userName} setUserName={setUserName} />
          )}
          options={{
            headerShown: true,
            tabBarActiveTintColor: colors.accent,
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
            headerShown: true,
            tabBarActiveTintColor: colors.accent,
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
