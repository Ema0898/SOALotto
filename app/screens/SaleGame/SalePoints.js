import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Image,
  Text,
  FlatList,
  TouchableOpacity
} from "react-native";

import * as firebase from "firebase";

const list = [
  {
    name: "Lotería Vainicas",
    avatar_url:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9l9u_UjRGOL-h9veSjtXEki-u3UZRt3goKPLWR8t8FxkAifnZ&s",
    subtitle: "Las Runias Cartago"
  },
  {
    name: "Lotería Santa Fe",
    avatar_url: "https://jokerapuestas.com/img/sucursales/15.jpg",
    subtitle: "San Pedro San José"
  },
  {
    name: "Lotería de La Cuidad",
    avatar_url:
      "https://http2.mlstatic.com/venta-de-agencia-de-loteria-opcional-con-venta-de-local-D_NQ_NP_647191-MLA29673364657_032019-F.jpg",
    subtitle: "La Suiza de Turrialba"
  },
  {
    name: "Lotería de la Provincia",
    avatar_url: "https://staticbp.com/img/prop_new_b/392/00392549-01.jpg",
    subtitle: "Aguacaliente Cartago"
  },
  {
    name: "Lotería Punto de la Suerte",
    avatar_url:
      "http://www.riocentroshopping.com/assets/img/upload/big/8ed22c58f7fb9487e1fdba363367e86c.jpg",
    subtitle: "Avenida Central San José"
  },
  {
    name: "Lotería Apuestas del Estado",
    avatar_url:
      "https://www.cc-carrefour-campanar.com/wp-content/uploads/2015/04/administracion-de-loterias-carrefour-campanar1.jpg",
    subtitle: "Avenida Segunda San José"
  },
  {
    name: "Lotería Correntina",
    avatar_url: "http://www.todolibres.com.ar/galeria/quiniela.jpg",
    subtitle: "Escazú San José"
  },
  {
    name: "Lotería del País",
    avatar_url:
      "https://c8.alamy.com/compes/k9m6ef/mujer-filipina-rellene-su-boleto-de-apuestas-de-loteria-en-una-salida-local-en-puerto-princesa-palawan-filipinas-k9m6ef.jpg",
    subtitle: "La Pueba Cartago"
  }
];

export default class SalePoints extends Component {
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

  onPressItem = itemName => {
    this.props.navigation.navigate("Game", {
      saleName: itemName
    });
  };

  renderItem = ({ item }) => {
    return (
      <TouchableOpacity
        style={styles.viewStyle1}
        onPress={() => this.onPressItem(item.name)}
      >
        <Image style={styles.imageStyle} source={{ uri: item.avatar_url }} />
        <View style={styles.viewStyle2}>
          <Text style={{ fontWeight: "bold" }}>{item.name}</Text>
          <Text>{item.subtitle}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  renderSeparator = () => {
    return <View style={styles.viewSeparator}></View>;
  };

  render() {
    const { login } = this.state;

    if (login) {
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
  viewBodyLogout: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f2f2f2"
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
