import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Avatar, Button } from "react-native-elements";
import Toast, { DURATION } from "react-native-easy-toast";

import * as firebase from "firebase";

import UpdateUserInfo from "./UpdateUserInfo";

export default class UserInfo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ...props,
      userInfo: {}
    };
  }

  componentDidMount = async () => {
    await this.getUserInfo();
  };

  getUserInfo = () => {
    const user = firebase.auth().currentUser;

    user.providerData.forEach(userInfo => {
      this.setState({
        userInfo
      });
    });
  };

  reauthenticate = currentPassword => {
    const user = firebase.auth().currentUser;
    const credentials = firebase.auth.EmailAuthProvider.credential(
      user.email,
      currentPassword
    );

    return user.reauthenticateWithCredential(credentials);
  };

  logout = () => {
    firebase.auth().signOut();
  };

  checkUserAvatar = photoUrl => {
    return photoUrl
      ? photoUrl
      : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbfriQGsSlPVFYCi-CNxB8j9ZFAr6uVJf-lsWPpqA19sT1BkjUIQ&s";
  };

  updateUserDisplayName = async newDisplayName => {
    const update = {
      displayName: newDisplayName
    };

    await firebase.auth().currentUser.updateProfile(update);

    this.getUserInfo();
  };

  updateUserPassword = async (currentPassword, newPassword) => {
    this.reauthenticate(currentPassword)
      .then(() => {
        const user = firebase.auth().currentUser;

        user
          .updatePassword(newPassword)
          .then(() => {
            this.refs.toast.show(
              "Contraseña Actualizada, Vuelve a iniciar sesión",
              50,
              () => {
                firebase.auth().signOut();
              }
            );
          })
          .catch(() => {
            this.refs.toast.show(
              "Error del servidor, intentelo más tarde",
              1500
            );
          });
      })
      .catch(() => {
        this.refs.toast.show("Contraseña Actual Incorrecta", 1500);
      });
  };

  returnUpdateUserInfoComponent = userInfoData => {
    if (userInfoData.hasOwnProperty("uid")) {
      return (
        <UpdateUserInfo
          userInfo={this.state.userInfo}
          updateUserDisplayName={this.updateUserDisplayName}
          updateUserPassword={this.updateUserPassword}
        />
      );
    }
  };

  render() {
    const { displayName, email, photoUrl } = this.state.userInfo;

    const id = (email + "").split("@")[0];

    return (
      <View>
        <View style={styles.viewUserInfo}>
          <Avatar
            rounded
            size="large"
            source={{
              uri: this.checkUserAvatar(photoUrl)
            }}
            containerStyle={styles.userInfoAvatar}
          />
          <View>
            <Text style={styles.displayName}>{displayName}</Text>
            <Text>{id}</Text>
            <Text>Saldo de cartera virtual: ₡150000</Text>
          </View>
        </View>
        {this.returnUpdateUserInfoComponent(this.state.userInfo)}

        <Button
          title="Cerrar Sesión"
          onPress={() => firebase.auth().signOut()}
          buttonStyle={styles.btnLogout}
          titleStyle={styles.btnLogoutTitle}
        />

        <Toast
          ref="toast"
          position="bottom"
          positionValue={250}
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
  viewUserInfo: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
    paddingTop: 30,
    paddingBottom: 30,
    backgroundColor: "#f2f2f2"
  },
  userInfoAvatar: {
    marginRight: 20
  },
  displayName: {
    fontWeight: "bold"
  },
  btnLogout: {
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
  btnLogoutTitle: {
    color: "#00a680"
  }
});
