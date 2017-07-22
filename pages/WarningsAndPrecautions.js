import React, { Component } from "react";
import { Text, ScrollView, View } from "react-native";
import { Bold } from "../helpers/components";
import { FontChanger } from "../helpers/components";

export default class WarningsAndPrecautions extends Component {
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
            <Bold>Drug Administration</Bold>
            <Text style={{ fontSize: this.state.fontSize }}>
              Due to the known pharmacological effects of Dexmedetomidine
              Hydrochloride, it should be administered only by a person skilled
              in the management of patients in ICU or operating room setting and
              the patients should be continuously monitored.
            </Text>
          </View>
          <View style={styles.paragraph}>
            <Bold>Hypotension, Bradycardia, and Sinus Arrest</Bold>
            <Text style={{ fontSize: this.state.fontSize }}>
              Clinically significant episodes of bradycardia and sinus arrest
              have been associated with Dexmedetomidine Hydrochloride
              administration in young, healthy volunteers with high vagal tone
              or with different routes of administration, including rapid
              intravenous or bolus administration. Reports of hypotension and
              bradycardia have been associated with Dexmedetomidine
              Hydrochloride infusion. If medical intervention is required,
              treatment may include decreasing or stopping the infusion of
              Dexmedetomidine Hydrochloride, increasing the rate of IV fluid
              administration, elevation of the lower extremities, and use of
              pressor agents. Because Dexmedetomidine Hydrochloride has the
              potential to augment bradycardia induced by vagal stimuli,
              clinicians should be prepared to intervene. The intravenous
              administration of anticholinergic agents (eg, atropine) should be
              considered to modify vagal tone. In clinical trials, atropine or
              glycopyrrolate were effective in the treatment of most episodes of
              Dexmedetomidine Hydrochloride -induced bradycardia.
            </Text>
          </View>
          <View style={styles.paragraph}>
            <Bold>Transient Hypertension</Bold>
            <Text style={{ fontSize: this.state.fontSize }}>
              Transient Hypertension has been observed primarily during the
              loading dose in associated with the initial peripheral
              vasoconstrictive effect of Dexmedetomidine. Treatment of transient
              hypertension has generally not been necessary, although reduction
              of the loading infusion rate may be desired.
            </Text>
          </View>
          <View style={styles.paragraph}>
            <Bold>Arousability</Bold>
            <Text style={{ fontSize: this.state.fontSize }}>
              Some patients receiving Dexmedetomidine have been observed to be
              arousable and alert when stimulated. This alone should not be
              considered as evidence of lack of efficacy in the absence of other
              clinical signs and symptoms.
            </Text>
          </View>
          <View style={styles.paragraph}>
            <Bold>Withdrawal</Bold>
          </View>
          <View style={styles.paragraph}>
            <Bold>Intensive Care Unit Sedation</Bold>
            <Text style={{ fontSize: this.state.fontSize }}>
              If Dexmedetomidine were to be administered for more than 24 hours
              and stopped abruptly, withdrawal symptoms similar to those
              reported for another alpha-2-adrenergic agent, clonidine may
              result. These symptoms include nervousness, agitation, and
              headaches, accompanied or followed by a rapid rise in blood
              pressure and elevated catecholamine concentrations in the plasma
            </Text>
          </View>
          <View style={styles.paragraph}>
            <Bold>Procedural Sedation</Bold>
            <Text style={{ fontSize: this.state.fontSize }}>
              {`Withdrawal symptoms were not seen after discontinuation of short term infusions of Dexmedetomidine (<6 hours).`}
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
