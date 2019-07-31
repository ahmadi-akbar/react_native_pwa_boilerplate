import React, { PureComponent } from "react";
import { Button, Text, View } from "react-native";
import { connect } from "react-redux";
import styles from "./styles";

class SecondScreen extends PureComponent {
  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Hi! Second Screen reporting for duty!
        </Text>
        <Button
          title="User #1"
          onPress={() => navigation.navigate("User", { name: "Snufolafakus" })}
        />
        <Button
          title="User #2"
          onPress={() =>
            navigation.navigate("User", {
              name: "Simsalabimbambasaladusaladim"
            })
          }
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
)(SecondScreen);
