// App.js - React Native

import {
  createAppContainer,
  createDrawerNavigator,
  createStackNavigator,
  createBottomTabNavigator
} from "react-navigation";
import HomeScreen from "./Screens/HomeScreen";
import SecondScreen from "./Screens/SecondScreen";
import UserScreen from "./Screens/UserScreen";
import DasModalScreen from "./Screens/DasModalScreen";

const HomeStack = createStackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: { title: "Home" }
  }
});

const SecondStack = createStackNavigator({
  Second: {
    screen: SecondScreen,
    navigationOptions: { title: "Second" }
  },
  User: {
    screen: UserScreen,
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
    DasModal: DasModalScreen
  },
  {
    mode: "modal",
    headerMode: "none"
  }
);
export default createAppContainer(RootStack);
