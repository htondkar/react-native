import React, { Component } from "react";
import { Text, ScrollView, View } from "react-native";
import { Bold } from "../helpers/components";

export default class Overdose extends Component {
  render() {
    return (
      <ScrollView style={styles.wrapper}>
        <View style={styles.paragraph}>
          <Bold>Overdose</Bold>
          <Text>
            The tolerability of Dexmedetomidine was noted in one study in which
            healthy subjects were administrated doses at and above the
            recommended dose of 0.2 to 0.7 mcg/kg/hr. the maximum blood
            concentration achieved in this study was approximately 13 times the
            upper boundary of the therapeutic range. The most notable effects
            observed in two subjects who achieved the highest doses were first
            degree AV block and second degree heart block. No hemodynamic
            compromise was noted with the AV block and the heart block resolved
            spontaneously within one minute.
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
