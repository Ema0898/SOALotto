import React, { Component } from "react";
import { StyleSheet, View, Text, Picker, Alert } from "react-native";
import { Button } from "react-native-elements";
import Toast, { DURATION } from "react-native-easy-toast";

import t from "tcomb-form-native";
import { GameStruct, GameOptions } from "../../forms/Game";

const Form = t.form.Form;

export default class GameScreen extends Component {
  constructor() {
    super();

    this.state = {
      gameStruct: GameStruct,
      gameOptions: GameOptions,
      gameData: {
        number: "",
        money: ""
      },
      pickerValue: "Nacional",
      maxMoney: 150000
    };
  }

  onChangeFormGame = formValue => {
    this.setState({
      gameData: formValue
    });
  };

  onChangePickerGame = value => {
    this.setState({
      pickerValue: value
    });
  };

  sendData = () => {
    const validate = this.refs.gameForm.getValue();

    if (validate) {
      this.refs.toast.show(
        `Haz jugado ₡${validate.money} al número ${validate.number} en la lotería ${this.state.pickerValue}`,
        1000,
        () => {
          this.props.navigation.goBack();
        }
      );
    } else {
      this.refs.toast.show("Debes llenar todos lo campos con números", 2500);
    }
  };

  render() {
    const { navigation } = this.props;
    const { gameStruct, gameOptions, gameData, maxMoney } = this.state;

    const temp = maxMoney - gameData.money;

    return (
      <View style={styles.viewBody}>
        <Text style={styles.title}>
          Juegos para {navigation.getParam("saleName", "NO-ID")}
        </Text>
        <Text style={styles.subtitle}>Selecciona la Lotería</Text>
        <Picker
          selectedValue={this.state.pickerValue}
          onValueChange={(itemValue, itemIndex) =>
            this.onChangePickerGame(itemValue)
          }
        >
          <Picker.Item label="Nacional" value="Nacional" />
          <Picker.Item label="Panameña" value="Panameña" />
          <Picker.Item label="Nicaragüense" value="Nicaragüense" />
          <Picker.Item label="Dominicana" value="Dominicana" />
        </Picker>
        <Form
          ref="gameForm"
          type={gameStruct}
          options={gameOptions}
          value={this.state.gameData}
          onChange={formValue => this.onChangeFormGame(formValue)}
        />

        <Text style={styles.description}>
          Cantidad de dinero actual: ₡{isNaN(temp) ? maxMoney : temp}
        </Text>
        <Text style={styles.description}>
          Dinero máximo a jugar para este juego: ₡10000
        </Text>

        <Button
          title="Jugar"
          buttonStyle={styles.buttonStyle}
          titleStyle={styles.btnTitle}
          onPress={() => this.sendData()}
        />

        <Toast
          ref="toast"
          position="bottom"
          positionValue={200}
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
    justifyContent: "center",
    backgroundColor: "#f2f2f2",
    paddingLeft: 30,
    paddingRight: 30
  },
  title: {
    fontWeight: "bold",
    marginTop: 30,
    fontSize: 20,
    textAlign: "center"
  },
  subtitle: {
    marginTop: 30,
    fontSize: 15,
    marginTop: 20
  },
  description: {
    textAlign: "center",
    fontSize: 15,
    marginTop: 20
  },
  buttonStyle: {
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
  btnTitle: {
    color: "#00a680"
  }
});
