import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Button } from "react-native-elements";

import * as firebase from "firebase";

export default class History extends Component {
  constructor() {
    super();

    this.state = {
      login: false
    };
  }

  async componentDidMount() {
    await firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({
          login: true
        });
      } else {
        this.setState({
          login: false
        });
      }
    });
  }

  render() {
    const { login } = this.state;

    if (login) {
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
    } else {
      return (
        <View style={styles.viewBodyLogout}>
          <Text style={{ fontWeight: "bold" }}>
            Debes iniciar sesión para ver esta sección
          </Text>
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  viewBody: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#f2f2f2"
  },
  viewBodyLogout: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
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
