// App.js - WEB
import React, { PureComponent } from "react";
import { View } from "react-native";
import WebRoutesGenerator from "./components/NativeWebRouteWrapper";
import { ModalContainer } from "react-router-modal";
import TopNav from "./components/TopNav";
import HomeScreen from "./Screens/HomeScreen";
import SecondScreen from "./Screens/SecondScreen";
import UserScreen from "./Screens/UserScreen";
import DasModalScreen from "./Screens/DasModalScreen";

const routeMap = {
  Home: {
    component: HomeScreen,
    path: "/",
    exact: true
  },
  Second: {
    component: SecondScreen,
    path: "/second"
  },
  User: {
    component: UserScreen,
    path: "/user/:name?",
    exact: true
  },
  DasModal: {
    component: DasModalScreen,
    path: "*/dasmodal",
    modal: true
  }
};

export default class App extends PureComponent {
  render() {
    return (
      <View style={{ height: "100vh", width: "100vw" }}>
        <TopNav />
        {WebRoutesGenerator({ routeMap })}
        <ModalContainer />
      </View>
    );
  }
}
