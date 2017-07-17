import React, { Component } from "react";
import { Text, ScrollView, View } from "react-native";
import { Bold, LineBreak, Heading } from "../helpers/components";

export default class indications extends Component {
  render() {
    return (
      <ScrollView style={styles.wrapper}>
        <View style={styles.paragraph}>
          <Bold>Intensive Care Unit sedation</Bold>
          <Text>
            Dexmedetomidine is indicated for sedation of initially intubated and
            mechanically ventilated patients during treatment in an intensive
            care setting.
          </Text>
        </View>
        <View style={styles.paragraph}>
          <Bold>Procedural Sedation</Bold>
          <Text>
            Dexmedetomidine is indicated for sedation of non-intubated patients
            prior to and/or during surgical and other procedures.
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
