import { StyleSheet } from "react-native";
import React, { useState } from "react";
import { Snackbar } from "react-native-paper";

export default function ErrorMessage(props) {
  const [error, setError] = useState({
    visible: props.visible,
    message: props.message,
  });

  const onToggleSnackBar = () => setError({ ...error, visible: !visible });

  const onDismissSnackBar = () => setError({ ...error, vsible: false });

  return (
    <Snackbar
      style={styles.content}
      visible={error.visible}
      onDismiss={onDismissSnackBar}
      action={{
        label: "Ok",
        color: "#fff",
      }}
    >
      {error.message}
    </Snackbar>
  );
}

const styles = StyleSheet.create({
  content: {
    backgroundColor: "#dd6666",
  },
});
