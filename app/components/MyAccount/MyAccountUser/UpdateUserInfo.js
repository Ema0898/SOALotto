import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import { ListItem } from "react-native-elements";
import Toast, { DURATION } from "react-native-easy-toast";

import OverlayOneInput from "../../Elements/OverlayOneInput";
import OverlayThreeInputs from "../../Elements/OverlayThreeInputs";

export default class UpdateUserInfo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ...props,
      overlayComponent: null,
      menuItems: [
        {
          title: "Cambiar nombre y apellidos",
          iconType: "material-community",
          iconNameLeft: "account-circle",
          iconColorLeft: "#ccc",
          iconNameRight: "chevron-right",
          iconColorRight: "#ccc",
          onPress: () =>
            this.openOverlay(
              "Nombre y apellidos",
              this.updateUserDisplayName,
              props.userInfo.displayName
            )
        },
        {
          title: "Cambiar contraseña",
          iconType: "material-community",
          iconNameLeft: "lock-reset",
          iconColorLeft: "#ccc",
          iconNameRight: "chevron-right",
          iconColorRight: "#ccc",
          onPress: () =>
            this.openOverlayThreeInputs(
              "Constraseña Actual",
              "Nueva Contraseña",
              "Repite Nueva Contraseña",
              this.updateUserPassword
            )
        }
      ]
    };
  }

  updateUserDisplayName = async newDisplayName => {
    if (newDisplayName) {
      this.state.updateUserDisplayName(newDisplayName);
    }

    this.setState({
      overlayComponent: null
    });
  };

  openOverlay = (placeholder, updateFunction, inputValue) => {
    this.setState({
      overlayComponent: (
        <OverlayOneInput
          isVisibleOverlay={true}
          placeholder={placeholder}
          updateFunction={updateFunction}
          inputValue={inputValue}
        />
      )
    });
  };

  updateUserPassword = async (
    currentPassword,
    newPassword,
    repeatedNewPassword
  ) => {
    if (currentPassword && newPassword && repeatedNewPassword) {
      if (newPassword === repeatedNewPassword) {
        if (currentPassword === newPassword) {
          this.refs.toast.show(
            "La nueva constraseña no puede ser igual a la actual"
          );
        } else {
          this.state.updateUserPassword(currentPassword, newPassword);
        }
      } else {
        this.refs.toast.show("Las nuevas contraseñas deben ser iguales");
      }
    } else {
      this.refs.toast.show("Debes llenar todos los campos");
    }

    this.setState({
      overlayComponent: null
    });
  };

  openOverlayThreeInputs = (
    placeholderOne,
    placeholderTwo,
    placeholderThree,
    updateFunction
  ) => {
    this.setState({
      overlayComponent: (
        <OverlayThreeInputs
          isVisibleOverlay={true}
          placeholderOne={placeholderOne}
          placeholderTwo={placeholderTwo}
          placeholderThree={placeholderThree}
          inputValueOne=""
          inputValueTwo=""
          inputValueThree=""
          isPassword={true}
          updateFunction={updateFunction}
        />
      )
    });
  };

  render() {
    const { menuItems, overlayComponent } = this.state;

    return (
      <View>
        {menuItems.map((item, index) => (
          <ListItem
            key={index}
            title={item.title}
            leftIcon={{
              type: item.iconType,
              name: item.iconNameLeft,
              color: item.iconColorLeft
            }}
            rightIcon={{
              type: item.iconType,
              name: item.iconNameRight,
              color: item.iconColorRight
            }}
            onPress={item.onPress}
            containerStyle={styles.containerStyle}
          />
        ))}
        {overlayComponent}
        <Toast
          ref="toast"
          position="center"
          positionValue={0}
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
  containerStyle: {
    borderBottomWidth: 1,
    borderBottomColor: "#e3e3e3"
  }
});
