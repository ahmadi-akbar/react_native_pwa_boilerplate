import React, { PureComponent } from "react";
import { StyleSheet, Text, View } from "react-native";

export default class UserScreen extends PureComponent {
  render() {
    const { navigation } = this.props;
    const name = navigation.getParam("name", "No user was defined!");
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>{`Name of the user: ${name}`}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  }
});
