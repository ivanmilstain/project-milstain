import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Detail() {

    return (
      <View style={styles.container}>
        <Text style={styles.text}>Detalle</Text>
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
