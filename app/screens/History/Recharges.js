import React, { Component } from "react";
import { StyleSheet, View, Text, FlatList, Image } from "react-native";

const list = [
  {
    amount: "₡10000",
    recharge_url:
      "https://cdn0.iconfinder.com/data/icons/social-messaging-productivity-4/128/dollar-sign-512.png",
    location: "Las Runias Cartago",
    date: "9 de Marzo 2019"
  },
  {
    amount: "₡6000",
    recharge_url:
      "https://cdn0.iconfinder.com/data/icons/social-messaging-productivity-4/128/dollar-sign-512.png",
    location: "San Pedro San José",
    date: "29 de Abril 2019"
  },
  {
    amount: "₡15000",
    recharge_url:
      "https://cdn0.iconfinder.com/data/icons/social-messaging-productivity-4/128/dollar-sign-512.png",
    location: "La Suiza de Turrialba",
    date: "20 de Mayo 2019"
  },
  {
    amount: "₡40000",
    recharge_url:
      "https://cdn0.iconfinder.com/data/icons/social-messaging-productivity-4/128/dollar-sign-512.png",
    location: "Aguacaliente Cartago",
    date: "30 de Mayo 2019"
  },
  {
    amount: "₡20000",
    recharge_url:
      "https://cdn0.iconfinder.com/data/icons/social-messaging-productivity-4/128/dollar-sign-512.png",
    location: "Avenida Central San José",
    date: "2 de Julio 2019"
  },
  {
    amount: "₡10000",
    recharge_url:
      "https://cdn0.iconfinder.com/data/icons/social-messaging-productivity-4/128/dollar-sign-512.png",
    location: "Avenida Segunda San José",
    date: "7 de Agosto 2019"
  },
  {
    amount: "₡5000",
    recharge_url:
      "https://cdn0.iconfinder.com/data/icons/social-messaging-productivity-4/128/dollar-sign-512.png",
    location: "Escazú San José",
    date: "9 de Octubre 2019"
  },
  {
    amount: "₡100000",
    recharge_url:
      "https://cdn0.iconfinder.com/data/icons/social-messaging-productivity-4/128/dollar-sign-512.png",
    location: "La Pueba Cartago",
    date: "9 de Diciembre 2019"
  }
];

export default class Recharges extends Component {
  renderItem = ({ item }) => {
    return (
      <View style={styles.viewStyle1}>
        <Image style={styles.imageStyle} source={{ uri: item.recharge_url }} />
        <View style={styles.viewStyle2}>
          <Text style={{ fontWeight: "bold" }}>{item.amount}</Text>
          <Text>{item.location}</Text>
          <Text>{item.date}</Text>
        </View>
      </View>
    );
  };

  renderSeparator = () => {
    return <View style={styles.viewSeparator}></View>;
  };

  render() {
    return (
      <View>
        <FlatList
          data={list}
          renderItem={this.renderItem}
          keyExtractor={(item, index) => index.toString()}
          ItemSeparatorComponent={this.renderSeparator}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  viewStyle1: {
    flex: 1,
    flexDirection: "row",
    marginBottom: 3
  },
  viewStyle2: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  imageStyle: {
    width: 100,
    height: 100,
    margin: 5,
    borderRadius: 150 / 2,
    overflow: "hidden",
    borderWidth: 3
  },
  viewSeparator: {
    height: 1,
    width: "100%",
    backgroundColor: "#e3e3e3"
  }
});
