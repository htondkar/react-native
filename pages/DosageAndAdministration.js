import React, { Component } from "react";
import { Text, ScrollView, View } from "react-native";
import { Bold, LineBreak } from "../helpers/components";
import { FontChanger } from "../helpers/components";

export default class DosageAndAdministration extends Component {
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
            <Bold fontSize={this.state.fontSize}>Administration</Bold>
            <View>
              <Text style={{ fontSize: this.state.fontSize }}>
                Dexmedetomidine should be administered using a controlled
                infusion device. Dexmedetomidine dosing should be individualized
                and titrated to the desired clinical effect. Dexmedetomidine is
                not indicated for infusion lasting longer than 24 hours. For
                adult patients, Dexmedetomidine is generally initiated with a
                loading infusion of 1(one) mcg/kg over 10mins, followed by a
                maintenance infusion of 0.2 to 0.7 mcg/kg/hr. The rate of the
                maintenance infusion should be adjusted to achieve the desired
                level of sedation. Dexmedetomidine has been continuously infused
                in mechanically ventilated patients prior to extubation, during
                extubation, and post-extubation. It is not necessary to
                discontinue Dexmedetomidine prior to extubation provided the
                infusion does not exceed 24hours.
              </Text>
            </View>
            <LineBreak />
            <View style={styles.paragraph}>
              <Bold fontSize={this.state.fontSize}>Dilution Prior to Administration</Bold>
              <Text style={{ fontSize: this.state.fontSize }}>
                Dexmedetomidine must be diluted in 0.9% Sodium Chloride solution
                prior to administration. Preparation of solution is the same,
                whether for the loading dose or maintenance infusion. To prepare
                the infusion, withdraw 1 ml of Dexmedetomidine and add to 24 ml
                of 0.9% Sodium Chloride injection to a total of 25 ml. Shake
                gently to mix well. Parenteral drug products should be inspected
                visually for particulate matter and discoloration prior to
                administration, whenever solution and container permit.
              </Text>
              <LineBreak />
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
