import React, { Component } from "react";
import { StyleSheet } from "react-native";

import * as firebase from "firebase";

import MyAccountGuest from "../../components/MyAccount/MyAccountGuest";
import MyAccountUser from "../../components/MyAccount/MyAccountUser";

// Para navegar, en el onPress se pasa el mismo nombre que se definió en el stack

export default class MyAccount extends Component {
  constructor() {
    super();

    this.state = {
      login: false
    };
  }

  // ejecuta cada vez que el estado cambia
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

  goToScreen = nameScreen => {
    this.props.navigation.navigate(nameScreen);
  };

  logout = () => {
    firebase.auth().signOut();
  };

  render() {
    const { login } = this.state;

    if (login) {
      return <MyAccountUser />;
    } else {
      return <MyAccountGuest goToScreen={this.goToScreen} />;
    }
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
