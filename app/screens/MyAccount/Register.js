import React, { Component } from "react";
import { StyleSheet, View, ActivityIndicator } from "react-native";
import { Button, Text, Image } from "react-native-elements";
import Toast, { DURATION } from "react-native-easy-toast";

import t from "tcomb-form-native";
import { RegisterStruct, RegisterOptions } from "../../forms/Register";

import * as firebase from "firebase";

const Form = t.form.Form;

export default class Register extends Component {
  constructor() {
    super();

    this.state = {
      registerStruct: RegisterStruct,
      registerOptions: RegisterOptions,
      formData: {
        // Mismo nombre que en Validation.js
        name: "",
        id: "",
        password: "",
        passwordConfirmation: ""
      },
      formErrorMessage: ""
    };
  }

  register = () => {
    const { name, password, passwordConfirmation } = this.state.formData;

    if (password === passwordConfirmation) {
      const validate = {
        id: this.refs.registerForm.getValue().id.concat("@gmail.com"),
        password: this.refs.registerForm.getValue().password
      };

      if (validate) {
        this.setState({
          formErrorMessage: ""
        });
        firebase
          .auth()
          .createUserWithEmailAndPassword(validate.id, validate.password)
          .then(resolve => {
            const update = {
              displayName: name
            };

            firebase.auth().currentUser.updateProfile(update);
          })
          .then(resolve => {
            this.refs.toast.show("Registro Correcto", 200, () => {
              this.props.navigation.goBack();
            });
          })
          .catch(err => {
            this.refs.toast.show("El email ya esta en uso", 2500);
          });
      } else {
        this.setState({
          formErrorMessage: "Formulario inválido"
        });
      }
    } else {
      this.setState({
        formErrorMessage: "Las contraseñas no son iguales"
      });
    }
  };

  onChangeFormRegister = formValue => {
    this.setState({
      formData: formValue
    });
  };

  render() {
    const { registerStruct, registerOptions, formErrorMessage } = this.state;

    return (
      <View style={styles.viewBody}>
        <Image
          source={require("../../../assets/img/logo_lotto.png")}
          containerStyle={styles.containerLogo}
          style={styles.logo}
          PlaceholderContent={<ActivityIndicator />}
          resizeMode="contain"
        />
        <Form
          ref="registerForm"
          type={registerStruct}
          options={registerOptions}
          value={this.state.formData}
          onChange={formValue => this.onChangeFormRegister(formValue)}
        />
        <Button
          buttonStyle={styles.buttonRegisterContainer}
          title="Unirse"
          onPress={() => this.register()}
        />
        <Text style={styles.formErrorMessage}>{formErrorMessage}</Text>
        <Toast
          ref="toast"
          position="bottom"
          positionValue={250}
          fadeInDuration={750}
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
    justifyContent: "center",
    marginLeft: 40,
    marginRight: 40
  },
  buttonRegisterContainer: {
    backgroundColor: "#00a680",
    marginTop: 20,
    marginLeft: 10,
    marginRight: 10
  },
  formErrorMessage: {
    color: "#f00",
    textAlign: "center",
    marginTop: 30
  },
  containerLogo: {
    alignItems: "center",
    marginBottom: 30
  },
  logo: {
    width: 300,
    height: 150
  }
});
