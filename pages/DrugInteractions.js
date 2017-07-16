import React, { Component } from "react";
import { Text, ScrollView, View } from "react-native";
import { Bold, LineBreak, Heading } from "../helpers/components";

export default class drugInteractions extends Component {
  // Anesthetics/Sedatives/Hypnotics/Opioids:
  render() {
    return (
      <ScrollView style={styles.wrapper}>
        <View style={styles.paragraph}>
          <Bold>Anesthetics/Sedatives/Hypnotics/Opioids</Bold>
          <View>
            <Text>
              Co-administration of Dexmedetomidine with anesthetics, sedatives,
              hypnotics, and opioids is likely to lead to an enhancement of
              effects. Specific studies have confirmed these effects with
              sevoflurane, isoflurane, propofol, alfentanil, and midazolam. No
              pharmacokinetic interactions between dexmedetomidine and
              isoflurane, propofol, alfentanil, and midazolam have been
              demonstrated. However, due to possible pharmacodynamic
              interactions, when coadministered with Dexmedetomidine, a
              reduction in dosage of Dexmedetomidine on the concomitant
              anesthetic, sedative, hypnotic or opioid may be required.
            </Text>
          </View>
        </View>
        <View style={styles.paragraph}>
          <Bold>Neuromuscular Blockers</Bold>
          <Text>
            In one study of 10 healthy volunteers, administration of
            Dexmedetomidine for 45 minutes at a plasma concentration of 1 (one)
            ng/mL resulted in no clinically meaningful increases in the
            magnitude or neuromuscular blockade associated with rocuronium
            administration.
          </Text>
        </View>
      </ScrollView>
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
