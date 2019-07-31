import React, { PureComponent } from "react";
import { Button, Platform, Text, View } from "react-native";
import { connect } from "react-redux";
import styles from "./styles";

const instructions = Platform.select({
  ios: "Press Cmd+R to reload,\nCmd+D or shake for dev menu",
  android:
    "Double tap R on your keyboard to reload,\n" +
    "Shake or press menu button for dev menu",
  web: "Your browser will automatically refresh as soon as you save the file."
});

class HomeScreen extends PureComponent {
  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native Web universal app!
        </Text>
        <Text style={styles.instructions}>
          This component is shared between web and react environment. To see how
          it works, just edit the HomeScreen.js
        </Text>
        <Text style={styles.instructions}>{instructions}</Text>
        <Button
          title="Go to Second!"
          onPress={() => navigation.navigate("Second")}
        />
        <Button
          title="Das Modal"
          onPress={() => navigation.navigate("DasModal")}
        />
      </View>
    );
  }
}

const mapStateToProps = state => ({});

export default connect(
  mapStateToProps,
  {}
)(HomeScreen);
