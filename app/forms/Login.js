import React from "react";

import t from "tcomb-form-native";
import formValidation from "../utils/Validation";
import inputTemplate from "./templates/Input";

export const LoginStruct = t.struct({
  id: t.String,
  password: formValidation.password
});

export const LoginOptions = {
  fields: {
    id: {
      template: inputTemplate,
      config: {
        placeholder: "Escribe tu número de cédula",
        iconType: "material-community",
        iconName: "at"
      }
    },
    password: {
      template: inputTemplate,
      config: {
        placeholder: "Escribe tu contraseña",
        password: true,
        secureTextEntry: true,
        iconType: "material-community",
        iconName: "lock-outline"
      }
    }
  }
};
