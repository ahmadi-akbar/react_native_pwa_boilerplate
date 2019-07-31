import React, { PureComponent } from "react";
import { Button, Text, View } from "react-native";
import { connect } from "react-redux";

class DasModalScreen extends PureComponent {
  render() {
    return (
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          padding: 15
        }}
      >
        <Text style={{ fontSize: 30 }}>
          It's a Modal, and it's looking good.
        </Text>
        <Button
          onPress={() => this.props.navigation.goBack()}
          title="Dismiss"
        />
      </View>
    );
  }
}

const mapStateToProps = state => ({});

export default connect(
  mapStateToProps,
  {}
)(DasModalScreen);
