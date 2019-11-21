import React from "react";

import t from "tcomb-form-native";
import inputTemplate from "./templates/Input";

export const GameStruct = t.struct({
  number: t.Number,
  money: t.Number
});

export const GameOptions = {
  fields: {
    number: {
      template: inputTemplate,
      config: {
        placeholder: "Número a jugar",
        iconType: "material-community",
        iconName: "counter"
      }
    },
    money: {
      template: inputTemplate,
      config: {
        placeholder: "Dinero a jugar",
        iconType: "material-community",
        iconName: "cash"
      }
    }
  }
};
