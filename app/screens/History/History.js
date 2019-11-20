import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import { Button } from "react-native-elements";

export default class History extends Component {
  render() {
    return (
      <View style={styles.viewBody}>
        <Button
          title="Premios"
          onPress={() => this.props.navigation.navigate("HistoryAwards")}
          buttonStyle={styles.buttonStyle}
          titleStyle={styles.btnTitle}
        />
        <Button
          title="Juegos"
          onPress={() => this.props.navigation.navigate("HistoryGames")}
          buttonStyle={styles.buttonStyle}
          titleStyle={styles.btnTitle}
        />
        <Button
          title="Recargas"
          onPress={() => this.props.navigation.navigate("HistoryRecharges")}
          buttonStyle={styles.buttonStyle}
          titleStyle={styles.btnTitle}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  viewBody: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#f2f2f2"
  },
  buttonStyle: {
    marginTop: 30,
    borderRadius: 0,
    backgroundColor: "#fff",
    borderTopWidth: 1,
    borderTopColor: "#e3e3e3",
    borderBottomWidth: 1,
    borderBottomColor: "#e3e3e3",
    paddingTop: 10,
    paddingBottom: 10
  },
  btnTitle: {
    color: "#00a680"
  }
});
