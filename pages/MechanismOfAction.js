import React, { Component } from "react";
import { Text, ScrollView, View } from "react-native";
import { Bold, LineBreak, Heading, LI } from "../helpers/components";

export default class mechanismOfAction extends Component {
  render() {
    return (
      <ScrollView style={styles.wrapper}>
        <View style={styles.paragraph}>
          <Bold>Mechanism of action / Effect</Bold>
          <Text>
            Dexmedetomidine is a relatively selective alpha -adrenergic agonist
            with sedative properties. Alpha selectivity is observed in animals
            following slow intravenous infusion of low and medium doses (10-300
            mcg/kg). Both alpha and alpha activity is observed following slow
            intravenous infusion of high doses (≥1000 mcg/kg) or with rapid
            intravenous administration.
          </Text>
        </View>
        <View style={styles.paragraph}>
          <Bold>Onset of action</Bold>
          <Text>
            Following infusion, Dexmedetomidine exhibits a rapid distribution
            phase with a half-life of about 6 minutes. Based on sedation scores,
            a loading infusion of one mcg/kg over a 10-minute period provides
            clinically effective onset of sedation generally within 10 to 15
            minutes after the start of the infusion. If a loading dose is not
            used, time to onset of the sedative effect may be extended. The
            terminal elimination half-life of Dexmedetomidine is approximately 2
            hours.
          </Text>
          <LineBreak />
          <Text>
            <LI>
              When a loading dose of 1 mcg/kg is administered for 10 minutes
              followed by a maintenance infusion of 0.3 mcg/kg/hr, an average
              Ramsay Sedation Score of 4 to 5 was achieved 20 to 25 minutes
              after initiating infusion in healthy normal subjects.
            </LI>
          </Text>
          <LineBreak />
          <Text>
            <LI>
              When administering a lower loading dose of 0.5 mcg/kg over 10
              minutes followed by a lower maintenance infusion of 0.2 mcg/kg/hr,
              an average Ramsay Sedation Score of 3 to 4 was achieved after 15
              to 33 minutes.
            </LI>
          </Text>
        </View>
        <View style={styles.paragraph}>
          <Bold>Elimination:</Bold>
          <Text style={{ marginBottom: 30 }}>
            A mass balance study demonstrated that after nine days an average of
            95% of the radioactivity, following intravenous administration of
            radiolabeled Dexmedetomidine, was recovered in the urine and 4% in
            the feces. No unchanged Dexmedetomidine was detected in the urine.
            Approximately 85% of the radioactivity recovered in the urine was
            excreted within 24 hours after the infusion. Fractionation of the
            radioactivity excreted in urine demonstrated that products of
            N-glucuronidation accounted for approximately 34% of the cumulative
            urinary excretion.
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
