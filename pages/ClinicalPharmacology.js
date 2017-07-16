import React, { Component } from "react";
import { Text, ScrollView, View } from "react-native";
import { Bold, LineBreak } from "../helpers/components";

export default class ClinicalPharmacology extends Component {
  render() {
    return (
      <ScrollView style={styles.wrapper}>
        <View style={styles.paragraph}>
          <Bold>Dexmedetomidine</Bold>
          <View>
            <Text>
              a highly selective and potent alpha2-adrenergic agonist, has a
              potentially useful role as a sedative agent.
            </Text>
            <LineBreak />
            <Text>
              In a study in healthy volunteers (N=10), respiratory rate and
              oxygen saturation remained within normal limits and there was no
              evidence of respiratory depression when it was administered by IV
              infusion at doses within the recommended dose range (0.2-0.7
              mcg/kg/hr).
            </Text>
          </View>
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
