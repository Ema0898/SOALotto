import React, { Component } from "react";
import { StyleSheet, View, Text, FlatList, Image } from "react-native";

const list = [
  {
    name: "Bicicleta",
    award_url:
      "https://cdn4.iconfinder.com/data/icons/awards-26/270932/13-512.png",
    date: "9 de Marzo 2019"
  },
  {
    name: "Computadora Dell",
    award_url:
      "https://cdn4.iconfinder.com/data/icons/awards-26/270932/13-512.png",
    date: "29 de Abril 2019"
  },
  {
    name: "Celular Samsung",
    award_url:
      "https://cdn4.iconfinder.com/data/icons/awards-26/270932/13-512.png",
    date: "20 de Mayo 2019"
  },
  {
    name: "Cámara Sony",
    award_url:
      "https://cdn4.iconfinder.com/data/icons/awards-26/270932/13-512.png",
    date: "30 de Mayo 2019"
  },
  {
    name: "Impresora HP",
    award_url:
      "https://cdn4.iconfinder.com/data/icons/awards-26/270932/13-512.png",
    date: "2 de Julio 2019"
  },
  {
    name: "Audifonos Beats",
    award_url:
      "https://cdn4.iconfinder.com/data/icons/awards-26/270932/13-512.png",
    date: "7 de Agosto 2019"
  },
  {
    name: "Zapatos Lacoste",
    award_url:
      "https://cdn4.iconfinder.com/data/icons/awards-26/270932/13-512.png",
    date: "9 de Octubre 2019"
  },
  {
    name: "Toyota Yaris",
    award_url:
      "https://cdn4.iconfinder.com/data/icons/awards-26/270932/13-512.png",
    date: "9 de Diciembre 2019"
  }
];

export default class Awards extends Component {
  renderItem = ({ item }) => {
    return (
      <View style={styles.viewStyle1}>
        <Image style={styles.imageStyle} source={{ uri: item.award_url }} />
        <View style={styles.viewStyle2}>
          <Text style={{ fontWeight: "bold" }}>{item.name}</Text>
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
