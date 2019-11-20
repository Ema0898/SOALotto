import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";

import * as firebase from "firebase";

export default class GameScreen extends Component {
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
          <Text>Game Screen...</Text>
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
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f2f2f2"
  },
  viewBodyLogout: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f2f2f2"
  }
});
