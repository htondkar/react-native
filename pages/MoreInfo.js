import React, { Component } from "react";
import { Text, ScrollView, View, Linking } from "react-native";
import { Bold } from "../helpers/components";
import { FontChanger } from "../helpers/components";

export default class MoreInfo extends Component {
  constructor() {
    super();
    this.state = {
      fontSize: 14,
      fontChangerIsVisible: false
    };
  }

  changeFontSize = option => {
    const { fontSize: currentSize } = this.state;
    if (option === "+") {
      if (currentSize < 24) {
        this.setState({ fontSize: currentSize + 2 });
      }
    } else {
      if (currentSize > 16) {
        this.setState({ fontSize: currentSize - 2 });
      }
    }
  };

  makeVisible = () => {
    clearTimeout(this.makeHidden);
    this.setState({ fontChangerIsVisible: true });
    setTimeout(this.makeHidden, 3000);
  };

  makeHidden = () => {
    this.setState({ fontChangerIsVisible: false });
  };

  componentWillUnmount = () => {
    clearTimeout(this.makeHidden);
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        {this.state.fontChangerIsVisible &&
          <FontChanger onChange={this.changeFontSize} />}
        <ScrollView style={styles.wrapper}>
          <View style={styles.paragraph}>
            <Bold fontSize={this.state.fontSize}>Website</Bold>
            <Text
              style={{ color: "blue" }}
              onPress={() => Linking.openURL("http://www.Sedodex.com")}
            >
              http://www.Sedodex.com
            </Text>
            <Text
              style={{ color: "blue" }}
              onPress={() => Linking.openURL("http://www.Sedodex.ir")}
            >
              http://www.Sedodex.ir
            </Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = {
  wrapper: {
    padding: 20,
    backgroundColor: "#F8F8F8"
  },
  paragraph: {
    marginBottom: 10
  }
};
