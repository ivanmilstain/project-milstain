import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { TextInput, Button, Snackbar } from "react-native-paper";
import colors from "../constants/colors";
import settings from "../constants/settings";

export default function Login(props) {
  const { setUserName } = props;
  const [login, setLogin] = useState({
    userName: "",
    password: "",
  });
  const [error, setError] = useState({
    message: "",
    alertVisible: false,
    userVisible: false,
    passVisible: false,
  });

  const onDismissSnackBar = () => setError({ ...error, alertVisible: false });

  const loginSubmit = () => {
    Keyboard.dismiss();
    setError({
      ...error,
      message: "",
      alertVisible: false,
      userVisible: false,
      passVisible: false,
    });
    if (!login.userName) {
      setError({
        ...error,
        message: "El nombre de usuario es obligatorio.",
        alertVisible: true,
        userVisible: true,
      });
    } else if (!login.password) {
      setError({
        ...error,
        message: "La contraseña es obligatoria.",
        alertVisible: true,
        passVisible: true,
      });
    } else if (
      login.userName.toLowerCase() === settings.userTest &&
      login.password === settings.passTest
    ) {
      setUserName(login.userName);
    } else {
      setError({
        ...error,
        message: "Usuario o contraseña incorrecta.",
        alertVisible: true,
        userVisible: true,
        passVisible: true,
      });
    }
  };

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Iniciar Sesión</Text>
        <View style={styles.formContainer}>
          <TextInput
            label="Usuario"
            name="userName"
            value={login.userName}
            error={error.userVisible}
            underlineColor={colors.primary}
            activeUnderlineColor={colors.accent}
            onChangeText={(text) => {
              setLogin({ ...login, userName: text });
              setError({
                ...error,
                message: "",
                alertVisible: false,
                userVisible: false,
              });
            }}
            style={styles.input}
          />
          <TextInput
            label="Contraseña"
            name="password"
            value={login.password}
            secureTextEntry={true}
            error={error.passVisible}
            underlineColor={colors.primary}
            activeUnderlineColor={colors.accent}
            onChangeText={(text) => {
              setLogin({ ...login, password: text });
              setError({
                ...error,
                message: "",
                alertVisible: false,
                passVisible: false,
              });
            }}
            style={styles.input}
          />
          <Button
            icon="login"
            mode="contained"
            color={colors.primary}
            onPress={() => loginSubmit()}
            style={styles.button}
          >
            Ingresar
          </Button>
        </View>
        <Snackbar
          style={{
            backgroundColor: "#dd6666",
          }}
          visible={error.alertVisible}
          onDismiss={onDismissSnackBar}
          action={{
            label: "Ok",
            color: "#fff",
          }}
        >
          {error.message}
        </Snackbar>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontFamily: "Bold",
    fontSize: 28,
    color: colors.primary,
  },
  formContainer: {
    height: "40%",
    width: "80%",
  },
  input: {
    backgroundColor: "#fff",
    marginBottom: 20,
  },
  button: {
    marginTop: 25,
    width: "90%",
    alignSelf: "center",
  },
});
