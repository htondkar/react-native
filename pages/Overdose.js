import React, { Component } from "react";
import { Text, ScrollView, View } from "react-native";
import { Bold } from "../helpers/components";
import { FontChanger } from "../helpers/components";

export default class Overdose extends Component {
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
        <ScrollView style={styles.wrapper} onTouchStart={this.makeVisible}>
          <View style={styles.paragraph}>
            <Bold fontSize={this.state.fontSize}>Overdose</Bold>
            <Text style={{ fontSize: this.state.fontSize }}>
              The tolerability of Dexmedetomidine was noted in one study in
              which healthy subjects were administrated doses at and above the
              recommended dose of 0.2 to 0.7 mcg/kg/hr. the maximum blood
              concentration achieved in this study was approximately 13 times
              the upper boundary of the therapeutic range. The most notable
              effects observed in two subjects who achieved the highest doses
              were first degree AV block and second degree heart block. No
              hemodynamic compromise was noted with the AV block and the heart
              block resolved spontaneously within one minute.
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
