import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Button } from "react-native-paper";
import colors from '../constants/colors';

export default function Home(props) {
  const {userName, setUserName} = props;

  const logout = () => {
    setUserName(null)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Bienvenido, {userName}</Text>
      <Button
        style={styles.button}
        color={colors.accent}
        onPress={() => logout()}
      >
        Cerrar Sesión
      </Button>
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
