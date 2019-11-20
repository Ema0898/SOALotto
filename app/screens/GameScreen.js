import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";

export default class GameScreen extends Component {
  render() {
    return (
      <View style={styles.viewBody}>
        <Text>Game Screen...</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  viewBody: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff"
  }
});
