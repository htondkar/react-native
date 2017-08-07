import React, { Component } from "react";
import { Text, ScrollView, View, TouchableHighlight } from "react-native";
import { Bold, LineBreak, Heading } from "../helpers/components";
import { FontChanger } from "../helpers/components";

export default class drugInteractions extends Component {
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
    console.log(this.state.fontChangerIsVisible);
    return (
      <View style={{ flex: 1 }}>
        {this.state.fontChangerIsVisible &&
          <FontChanger onChange={this.changeFontSize} />}
        <ScrollView style={styles.wrapper} onTouchStart={this.makeVisible}>
          <View style={styles.paragraph}>
            <Bold fontSize={this.state.fontSize}>
              Anesthetics/Sedatives/Hypnotics/Opioids
            </Bold>
            <View>
              <Text style={{ fontSize: this.state.fontSize }}>
                Co-administration of Dexmedetomidine with anesthetics,
                sedatives, hypnotics, and opioids is likely to lead to an
                enhancement of effects. Specific studies have confirmed these
                effects with sevoflurane, isoflurane, propofol, alfentanil, and
                midazolam. No pharmacokinetic interactions between
                dexmedetomidine and isoflurane, propofol, alfentanil, and
                midazolam have been demonstrated. However, due to possible
                pharmacodynamic interactions, when coadministered with
                Dexmedetomidine, a reduction in dosage of Dexmedetomidine on the
                concomitant anesthetic, sedative, hypnotic or opioid may be
                required.
              </Text>
            </View>
          </View>
          <View style={[styles.paragraph, { paddingBottom: 20 }]}>
            <Bold fontSize={this.state.fontSize}>Neuromuscular Blockers</Bold>
            <Text style={{ fontSize: this.state.fontSize }}>
              In one study of 10 healthy volunteers, administration of
              Dexmedetomidine for 45 minutes at a plasma concentration of 1
              (one) ng/mL resulted in no clinically meaningful increases in the
              magnitude or neuromuscular blockade associated with rocuronium
              administration.
            </Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = {
  wrapper: {
    flex: 1,
    padding: 20,
    backgroundColor: "#F8F8F8",
    position: "relative"
  },
  paragraph: {
    marginBottom: 10
  }
};
