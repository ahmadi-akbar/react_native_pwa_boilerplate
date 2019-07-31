import React, { PureComponent } from "react";
import { Text, View } from "react-native";
import { connect } from "react-redux";
import styles from "./styles";

class UserScreen extends PureComponent {
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

const mapStateToProps = state => ({});

export default connect(
  mapStateToProps,
  {}
)(UserScreen);
