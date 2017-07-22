import React, { Component } from "react";
import { Text, ScrollView, View } from "react-native";
import { Bold, LineBreak } from "../helpers/components";
import { FontChanger } from "../helpers/components";

export default class ClinicalPharmacology extends Component {
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
            <Bold>Dexmedetomidine</Bold>
            <View>
              <Text style={{ fontSize: this.state.fontSize }}>
                a highly selective and potent alpha2-adrenergic agonist, has a
                potentially useful role as a sedative agent.
              </Text>
              <LineBreak />
              <Text style={{ fontSize: this.state.fontSize }}>
                In a study in healthy volunteers (N=10), respiratory rate and
                oxygen saturation remained within normal limits and there was no
                evidence of respiratory depression when it was administered by
                IV infusion at doses within the recommended dose range (0.2-0.7
                mcg/kg/hr).
              </Text>
            </View>
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
