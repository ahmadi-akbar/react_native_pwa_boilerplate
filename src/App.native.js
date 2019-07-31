// App.js - React Native

import {
  createAppContainer,
  createStackNavigator,
  createBottomTabNavigator
} from "react-navigation";
import Screens from "./screens";

const HomeStack = createStackNavigator({
  Home: {
    screen: Screens.Home,
    navigationOptions: { title: "Home" }
  }
});

const SecondStack = createStackNavigator({
  Second: {
    screen: Screens.Second,
    navigationOptions: { title: "Second" }
  },
  User: {
    screen: Screens.User,
    navigationOptions: { title: "User" }
  }
});
const TabNav = createBottomTabNavigator({
  Home: HomeStack,
  SecondStack: SecondStack
});

const RootStack = createStackNavigator(
  {
    Main: TabNav,
    DasModal: Screens.DasModal
  },
  {
    mode: "modal",
    headerMode: "none"
  }
);
export default createAppContainer(RootStack);
