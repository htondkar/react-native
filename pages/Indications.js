import React, { Component } from "react";
import { Text, ScrollView, View } from "react-native";
import { Bold, LineBreak, Heading } from "../helpers/components";
import { FontChanger } from "../helpers/components";

export default class indications extends Component {
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
      if (currentSize < 20) {
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
    setTimeout(this.makeHidden, 1000);
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
        <ScrollView style={styles.wrapper} onTouchStart={this.makeVisible}>
          <View style={styles.paragraph}>
            <Bold>Intensive Care Unit sedation</Bold>
            <Text style={{ fontSize: this.state.fontSize }}>
              Dexmedetomidine is indicated for sedation of initially intubated
              and mechanically ventilated patients during treatment in an
              intensive care setting.
            </Text>
          </View>
          <View style={styles.paragraph}>
            <Bold>Procedural Sedation</Bold>
            <Text style={{ fontSize: this.state.fontSize }}>
              Dexmedetomidine is indicated for sedation of non-intubated
              patients prior to and/or during surgical and other procedures.
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
