import React, { Component } from "react";
import { Text, View, ScrollView } from "react-native";
import { administrationWithFluids } from "../text";
import { colors } from "../helpers/colors";

const Bold = ({ children }) =>
  <Text style={styles.bold}>
    {children} {"\n"}
  </Text>;

const LineBreak = () => <View style={styles.break} />;

export default class AdministrationWithOtherFluids extends Component {
  render() {
    return (
      <ScrollView>
        <View style={styles.wrapper}>
          <View style={styles.paragraph}>
            <Bold>Dexmedetomidine:</Bold>
            <View>
              <Text>
                infusion should not be co-administered through the same
                intravenous catheter with blood or plasma because physical
                compatibility has not been established
              </Text>
            </View>
            <LineBreak />
            <View>
              <Text>
                Dexmedetomidine has been shown to be incompatible when
                administered with the following drugs: amphotericin B, diazepam.
              </Text>
            </View>
          </View>
          <View style={styles.paragraph}>
            <Bold>Contra-indications:</Bold>
            <Text>No specific information available.</Text>
          </View>
          <View style={styles.paragraph}>
            <Bold>PreClinical Safety Data:</Bold>
            <View>
              <Text>
                Non-clinical data reveal no special hazard for humans based on
                conventional studies of safety pharmacology, single and repeated
                dose toxicity and genotoxicity.
              </Text>
            </View>
            <LineBreak />
            <View>
              <Text>
                In the reproductive toxicity studies, Dexmedetomidine had no
                effect on male or female fertility in the rat, and no
                teratogenic effects were observed in the rat or rabbit. In the
                rabbit study intravenous administration of the maximum dose, 96
                µg/kg/day, produced exposures that are similar to those observed
                clinically. In the rat, subcutaneous administration at the
                maximum dose, 200 µg/kg/day, caused an increase in embryofetal
                death and reduced the fetal body weight.
              </Text>
            </View>
            <LineBreak />
            <View>
              <Text>
                These effects were associated with clear maternal toxicity.
                Reduced fetal body weight was noted also in the rat fertility
                study at dose 18 µg/kg/day and was accompanied with delayed
                ossification at dose 54 µg/kg/day. The observed exposure levels
                in the rat are below the clinical exposure range.
              </Text>
            </View>
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
  },
  bold: {
    fontWeight: "600",
    color: colors.imagenCol
  },
  break: {
    height: 5
  }
};
