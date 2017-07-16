import React, { Component } from "react";
import { Text, ScrollView, View } from "react-native";
import { Bold, LineBreak } from "../helpers/components";

export default class DosageAndAdministration extends Component {
  render() {
    return (
      <ScrollView style={styles.wrapper}>
        <View style={styles.paragraph}>
          <Bold>Administration</Bold>
          <View>
            <Text>
              Dexmedetomidine should be administered using a controlled infusion
              device. Dexmedetomidine dosing should be individualized and
              titrated to the desired clinical effect. Dexmedetomidine is not
              indicated for infusion lasting longer than 24 hours. For adult
              patients, Dexmedetomidine is generally initiated with a loading
              infusion of 1(one) mcg/kg over 10mins, followed by a maintenance
              infusion of 0.2 to 0.7 mcg/kg/hr. The rate of the maintenance
              infusion should be adjusted to achieve the desired level of
              sedation. Dexmedetomidine has been continuously infused in
              mechanically ventilated patients prior to extubation, during
              extubation, and post-extubation. It is not necessary to
              discontinue Dexmedetomidine prior to extubation provided the
              infusion does not exceed 24hours.
            </Text>
          </View>
          <LineBreak />
          <View style={styles.paragraph}>
            <Bold>Dilution Prior to Administration</Bold>
            <Text>
              Dexmedetomidine must be diluted in 0.9% Sodium Chloride solution
              prior to administration. Preparation of solution is the same,
              whether for the loading dose or maintenance infusion. To prepare
              the infusion, withdraw 1 ml of Dexmedetomidine and add to 24 ml of
              0.9% Sodium Chloride injection to a total of 25 ml. Shake gently
              to mix well. Parenteral drug products should be inspected visually
              for particulate matter and discoloration prior to administration,
              whenever solution and container permit.
            </Text>
            <LineBreak />
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
