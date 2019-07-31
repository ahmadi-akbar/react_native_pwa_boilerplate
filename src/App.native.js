// App.js - React Native

import React, { PureComponent } from "react";
import { Provider } from "react-redux";
import store from "./actions/store";
import AppNavigator from "./screens/AppNavigator";
export default class App extends PureComponent {
  render() {
    return (
      <Provider store={store}>
        <AppNavigator />
      </Provider>
    );
  }
}