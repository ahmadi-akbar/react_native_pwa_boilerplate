// App.js - WEB
import React, { PureComponent } from "react";
import { View } from "react-native";
import { ModalContainer } from "react-router-modal";
import { Provider } from "react-redux";
import store from "./actions/store";
import WebRoutesGenerator from "./components/NativeWebRouteWrapper";
import TopNav from "./components/TopNav";
import Screens from "./screens";

const routeMap = {
  Home: {
    component: Screens.Home,
    path: "/",
    exact: true
  },
  Second: {
    component: Screens.Second,
    path: "/second"
  },
  User: {
    component: Screens.User,
    path: "/user/:name?",
    exact: true
  },
  DasModal: {
    component: Screens.DasModal,
    path: "*/dasmodal",
    modal: true
  }
};

export default class App extends PureComponent {
  render() {
    return (
      <Provider store={store}>
        <View style={{ height: "100vh", width: "100vw" }}>
          <TopNav />
          {WebRoutesGenerator({ routeMap })}
          <ModalContainer />
        </View>
      </Provider>
    );
  }
}
