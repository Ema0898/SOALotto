import React, { Component } from "react";
import { StyleSheet, View, Text, ActivityIndicator } from "react-native";
import { Image, Button, Divider, SocialIcon } from "react-native-elements";
import Toast, { DURATION } from "react-native-easy-toast";

import t from "tcomb-form-native";
import { LoginStruct, LoginOptions } from "../../forms/Login";

import * as firebase from "firebase";

const Form = t.form.Form;

export default class Login extends Component {
  constructor() {
    super();

    this.state = {
      loginStruct: LoginStruct,
      loginOptions: LoginOptions,
      loginData: {
        id: "",
        password: ""
      },
      loginErrorMessage: ""
    };
  }

  login = () => {
    const validate = {
      id: this.refs.loginForm.getValue().id.concat("@gmail.com"),
      password: this.refs.loginForm.getValue().password
    };

    if (!validate) {
      this.setState({
        loginErrorMessage: "Los datos del formulario son erróneos"
      });
    } else {
      this.setState({
        loginErrorMessage: ""
      });

      firebase
        .auth()
        .signInWithEmailAndPassword(validate.id, validate.password)
        .then(() => {
          this.refs.toastLogin.show("Login Correcto", 200, () => {
            this.props.navigation.goBack();
          });
        })
        .catch(err => {
          this.refs.toastLogin.show("Login Incorrecto", 2500);
        });
    }
  };

  onChangeFormLogin = formValue => {
    this.setState({
      loginData: formValue
    });
  };

  render() {
    const { loginStruct, loginOptions, loginErrorMessage } = this.state;

    return (
      <View style={styles.viewBody}>
        <Image
          source={require("../../../assets/img/logo_lotto.png")}
          containerStyle={styles.containerLogo}
          style={styles.logo}
          PlaceholderContent={<ActivityIndicator />}
          resizeMode="contain"
        />

        <View style={styles.viewForm}>
          <Form
            ref="loginForm"
            type={loginStruct}
            options={loginOptions}
            value={this.state.loginData}
            onChange={formValue => this.onChangeFormLogin(formValue)}
          />
          <Button
            buttonStyle={styles.buttonLoginContainer}
            title="Login"
            onPress={() => this.login()}
          />
          <Text style={styles.textRegister}>
            ¿Aún no tienes una cuenta?{" "}
            <Text
              style={styles.buttonRegister}
              onPress={() => this.props.navigation.navigate("Register")}
            >
              Regístrate
            </Text>
          </Text>
          <Text style={styles.loginErrorMessage}>{loginErrorMessage}</Text>

          <Divider style={styles.divider} />
        </View>
        <Toast
          ref="toastLogin"
          position="bottom"
          positionValue={400}
          fadeInDuration={1000}
          fadeOutDuration={1000}
          opacity={0.8}
          textStyle={{ color: "#fff" }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  viewBody: {
    flex: 1,
    marginLeft: 30,
    marginRight: 30,
    marginTop: 40
  },
  containerLogo: {
    alignItems: "center"
  },
  logo: {
    width: 300,
    height: 150
  },
  viewForm: {
    marginTop: 50
  },
  buttonLoginContainer: {
    backgroundColor: "#00a680",
    marginTop: 20,
    marginLeft: 10,
    marginRight: 10
  },
  loginErrorMessage: {
    color: "#f00",
    textAlign: "center",
    marginTop: 20,
    marginBottom: 20
  },
  divider: {
    backgroundColor: "#00a680",
    marginBottom: 20
  },
  textRegister: {
    marginTop: 15,
    marginLeft: 10,
    marginRight: 10
  },
  buttonRegister: {
    color: "#00a680",
    fontWeight: "bold"
  }
});
