import React from "react";
import { Icon } from "react-native-elements";

import {
  createStackNavigator,
  createAppContainer,
  createBottomTabNavigator
} from "react-navigation";

import HomeScreen from "../screens/Home";

import MyAccountScreen from "../screens/MyAccount/MyAccount";
import RegisterScreen from "../screens/MyAccount/Register";
import LoginScreen from "../screens/MyAccount/Login";
import HistoryScreen from "../screens/History/History";
import SalePointsScreen from "../screens/SalePoints";
import AwardsHistoryScreen from "../screens/History/Awards";
import GameHistoryScreen from "../screens/History/Games";
import RechargesHistoryScreen from "../screens/History/Recharges";

const homeScreenStack = createStackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: ({ navigation }) => ({
      title: "Menú Principal"
    })
  }
});

const saleScreenStack = createStackNavigator({
  Sale: {
    screen: SalePointsScreen,
    navigationOptions: ({ navigation }) => ({
      title: "Puntos de venta"
    })
  }
});

const recordScreenStack = createStackNavigator({
  Record: {
    screen: HistoryScreen,
    navigationOptions: ({ navigation }) => ({
      title: "Historial"
    })
  },
  HistoryAwards: {
    screen: AwardsHistoryScreen,
    navigationOptions: ({ navigation }) => ({
      title: "Historial de Premios"
    })
  },
  HistoryGames: {
    screen: GameHistoryScreen,
    navigationOptions: ({ navigation }) => ({
      title: "Historial de Juegos"
    })
  },
  HistoryRecharges: {
    screen: RechargesHistoryScreen,
    navigationOptions: ({ navigation }) => ({
      title: "Historial de Recargas"
    })
  }
});

const myAccountScreenStack = createStackNavigator({
  MyAccount: {
    screen: MyAccountScreen,
    navigationOptions: ({ navigation }) => ({
      title: "Mi Cuenta"
    })
  },
  Register: {
    screen: RegisterScreen,
    navigationOptions: ({ navigation }) => ({
      title: "Registro"
    })
  },
  Login: {
    screen: LoginScreen,
    navigationOptions: ({ navigation }) => ({
      title: "Login"
    })
  }
});

const RootStack = createBottomTabNavigator(
  {
    Home: {
      screen: homeScreenStack,
      navigationOptions: ({ navigation }) => ({
        tabBarLabel: "Principal",
        tabBarIcon: ({ tintColor }) => (
          <Icon
            name="compass-outline"
            type="material-community"
            size={22}
            color={tintColor}
          />
        )
      })
    },
    Record: {
      screen: recordScreenStack,
      navigationOptions: ({ navigation }) => ({
        tabBarLabel: "Historial",
        tabBarIcon: ({ tintColor }) => (
          <Icon
            name="history"
            type="material-community"
            size={22}
            color={tintColor}
          />
        )
      })
    },
    Sale: {
      screen: saleScreenStack,
      navigationOptions: ({ navigation }) => ({
        tabBarLabel: "Puntos de venta",
        tabBarIcon: ({ tintColor }) => (
          <Icon
            name="point-of-sale"
            type="material-community"
            size={22}
            color={tintColor}
          />
        )
      })
    },
    MyAccount: {
      screen: myAccountScreenStack,
      navigationOptions: ({ navigation }) => ({
        tabBarLabel: "Mi Cuenta",
        tabBarIcon: ({ tintColor }) => (
          <Icon
            name="home-outline"
            type="material-community"
            size={22}
            color={tintColor}
          />
        )
      })
    }
  },
  {
    initialRouteName: "Home",
    order: ["Home", "Sale", "Record", "MyAccount"],
    tabBarOptions: {
      inactiveTintColor: "#646464",
      activeTintColor: "#00a680"
    }
  }
);

export default createAppContainer(RootStack);
