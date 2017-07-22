import React, { Component } from "react";
import { Text, ScrollView, View } from "react-native";
import { Bold } from "../helpers/components";
import { FontChanger } from "../helpers/components";

export default class UseInSpecificPopulations extends Component {
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
            <Bold>Pregnancy</Bold>
            <Text style={{ fontSize: this.state.fontSize }}>
              There are no adequate and well-controlled studies in pregnant
              women. Dexmedetomidine should be used during pregnancy only if the
              potential benefits justify the potential risk to fetus.
            </Text>
          </View>
          <View style={styles.paragraph}>
            <Bold>Lactation</Bold>
            <Text style={{ fontSize: this.state.fontSize }}>
              It is unknown whether Dexmedetomidine HCL is excreted in human
              milk. Because many drugs are excreted in human milk, caution
              should be exercised when Dexmedetomidine HCL is administered to
              nursing women.
            </Text>
          </View>
          <View style={styles.paragraph}>
            <Bold>Labour & Delivery</Bold>
            <Text style={{ fontSize: this.state.fontSize }}>
              The safety of Dexmedetomidine HCL during labour and delivery has
              not been studied. Therefore, Dexmedetomidine HCL is not
              recommended during labour and delivery, including cesarean
              section.
            </Text>
          </View>
          <View style={styles.paragraph}>
            <Bold>Pediatrics</Bold>
            <Text style={{ fontSize: this.state.fontSize }}>
              There have been no clinical studies to establish the safety and
              efficacy of Dexmedetomidine in pediatric patients below 18 years
              of age. Therefore, Dexmedetomidine should not be used in this
              population.
            </Text>
          </View>
          <View style={styles.paragraph}>
            <Bold>Geriatrics</Bold>
            <Text style={{ fontSize: this.state.fontSize }}>
              Dexmedetomidine is known to be substantially excreted by the
              kidney, and the risk of adverse reactions to this drug may be
              greater in patients with impaired renal function. Because elderly
              patients are more likely to have decreased renal function, case
              should be taken in dose selection in elderly patients, and it may
              be useful to monitor renal function.
            </Text>
          </View>
          <View style={styles.paragraph}>
            <Bold>Hepatic Impairment</Bold>
            <Text style={{ marginBottom: 30, fontSize: this.state.fontSize }}>
              Since Dexmedetomidine clearance decreases with severity of hepatic
              impairment, dose reduction should be considered in patients with
              impaired hepatic function.
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
