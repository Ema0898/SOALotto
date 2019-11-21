import React, { Component } from "react";
import { StyleSheet, View, Text, ActivityIndicator } from "react-native";
import { Image } from "react-native-elements";

export default class Home extends Component {
  render() {
    return (
      <View style={styles.viewBody}>
        <Image
          source={require("../../assets/img/logo_lotto.png")}
          containerStyle={styles.containerLogo}
          style={styles.logo}
          PlaceholderContent={<ActivityIndicator />}
          resizeMode="contain"
        />
        <Text style={styles.titleText}>Bienvenido a Lotto</Text>
        <Text style={styles.description}>
          Con esta aplicación podrás participar en juegos con los que podrás
          ganar mucho dinero
        </Text>
        <Text style={styles.description}>
          En la sección de Puntos de Venta, encontrás sitios donde puedrás
          recargar tu cartera virtual y participar en muchos juegos
        </Text>
        <Text style={styles.description}>
          Tocando un punto de venta encontrarás los juegos en los que podrás
          participar para ganar dinero
        </Text>
        <Text style={styles.description}>
          En la sección de Historial encontrás un registro de los premios
          ganados, los juegos en los que has participado y las recargas que has
          realizado
        </Text>
        <Text style={styles.finalMessage}>
          ¡Ve a Mi Cuenta para iniciar sesión y empezar a jugar!
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  viewBody: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f2f2f2",
    paddingLeft: 30,
    paddingRight: 30
  },
  containerLogo: {
    alignItems: "center"
  },
  logo: {
    width: 300,
    height: 150
  },
  titleText: {
    fontWeight: "bold",
    fontSize: 32,
    marginTop: 20
  },
  description: {
    textAlign: "center",
    marginBottom: 10,
    marginTop: 10
  },
  finalMessage: {
    textAlign: "center",
    marginTop: 20,
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 10,
    marginRight: 10
  }
});
