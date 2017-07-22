import React, { Component } from "react";
import { Text, ScrollView, View } from "react-native";
import { Bold, LineBreak, Heading } from "../helpers/components";
// import { H1, H2, H3} from 'native-base';
import { FontChanger } from "../helpers/components";

export default class DosingFormula extends Component {
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
            <Bold>Initiation of Intensive Unit Sedation</Bold>
            <Text style={{ fontSize: this.state.fontSize }}>
              <Heading firstLine>For adult patients:</Heading>
              A loading infusion of one mcg/kg over 10 minutes.
              <Heading>Patients over 65 years of age:</Heading>
              A dose reduction should be considered.
              <Heading>For patients with impaired hepatic-function:</Heading>
              A dose reduction should be considered.
            </Text>
          </View>
          <View style={styles.paragraph}>
            <Bold>Maintenance of Intensive Care Unit Sedation</Bold>
            <Text style={{ fontSize: this.state.fontSize }}>
              <Heading firstLine>For adult patients:</Heading>
              A maintenance infusion of 0.2 to 0.7 mcg/kg/hr. The rate of the
              maintenance infusion should be adjusted to achieve the desired
              level of sedation.
              <Heading>Patients over 65 years of age:</Heading>
              A dose reduction should be considered.
              <Heading>For patients with impaired hepatic-function:</Heading>
              A dose reduction should be considered.
            </Text>
          </View>
          <View style={styles.paragraph}>
            <Bold>Initiation of Procedural Sedation</Bold>
            <Text style={{ fontSize: this.state.fontSize }}>
              <Heading firstLine>For adult patients:</Heading>
              A loading infusion of one mcg/kg over 10 minutes. For less
              invasive procedures such as ophthalmic surgery, a loading infusion
              of 0.5mcg/kg given over 10 minutes may be suitable.
              <Heading>For awake fiberoptic intubation patients:</Heading>
              A loading infusion of one mcg/kg over 10 minutes.
              <Heading>For patients over 65 years of age:</Heading>
              A loading infusion of 0.5 mcg/kg over 10 minutes.
              <Heading>
                For patients with impaired hepatic or renal function:
              </Heading>
              A dose reduction should be considered.
            </Text>
          </View>
          <View style={styles.paragraph}>
            <Bold>Maintenance of Procedural Sedation</Bold>
            <Text style={{ fontSize: this.state.fontSize }}>
              <Heading firstLine>For adult patients:</Heading>
              The maintenance infusion is generally initiated at 0.6mcg/kg/hr
              and titrated to achieve desired clinical effect with doses ranging
              from 0.2 to 1mcg/kg/hr. The rate of the maintenance infusion
              should be adjusted to achieve the targeted level of sedation.
              <Heading>For awake fiberoptic intubation patients:</Heading>
              A maintenance infusion of 0.7mcg/kg/hr is recommended until the
              endotracheal tube is secured.
              <Heading>For patients over 65 years of age:</Heading>
              A dose reduction should be considered.
              <Heading>
                For patients with impaired hepatic function or renal function:
              </Heading>
              A dose reduction should be considered.
            </Text>
          </View>
          <View style={styles.paragraph} />
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
