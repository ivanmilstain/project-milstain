import React, { useState } from "react";
import { Text, View, StyleSheet, Button } from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";
import { useFocusEffect } from "@react-navigation/native";

export default function QRScanner() {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [isFocused, setIsFocused] = useState(false)

  useFocusEffect(
    React.useCallback(() => {

      (async () => {
        const { status } = await BarCodeScanner.requestPermissionsAsync();
        setHasPermission(status === "granted");
        setIsFocused(true)
      })();

      return () => {
        setIsFocused(false)
      };
    }, [])
  );

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    alert(`QR data: ${data}`);
  };

  if (hasPermission === null) {
    return <Text>Pidiendo permisos para usar la cámara</Text>;
  }
  if (hasPermission === false) {
    return <Text>Sin permisos para usar la cámara</Text>;
  }

  return (
    <View style={styles.container}>
      {isFocused && (
        <>
          <BarCodeScanner
            onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
            style={StyleSheet.absoluteFillObject}
            barCodeTypes={[BarCodeScanner.Constants.BarCodeType.qr]}
          />
          {scanned && (
            <Button
              title={"Escanear de nuevo"}
              onPress={() => setScanned(false)}
            />
          )}
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
  },
});
