import React, { Component } from "react";
import { Text, ScrollView, View, Image } from "react-native";
import { Bold } from "../helpers/components";
import ImageZoom from "react-native-image-pan-zoom";
import Dimensions from "Dimensions";
import table from "../images/table.png";

export default class PharmacokineticProperty extends Component {
  render() {
    return (
      <ScrollView style={styles.wrapper}>
        <View style={styles.paragraph}>
          <Bold>Pharmacokinetic Property</Bold>
          <Text>
            Dexmedetomidine exhibits linear pharmacokinetics in the dosage range
            of 0.2 to 0.7 mcg/kg/hr when administered by intravenous infusion
            for up to 24 hours. Following intravenous administration,
            Dexmedetomidine exhibits the following pharmacokinetic parameters: a
            rapid distribution phase with a distribution half-life (t½) of
            approximately 6 minutes; a terminal elimination half-life (t1/2) of
            approximately 2 hours; and steady-state volume of distribution (Vss)
            of approximately 118 liters. Clearance is estimated to be
            approximately 39 L/h. The mean body weight associated with this
            clearance estimate was 72 kg. The pharmacokinetic profile of
            Dexmedetomidine was not altered by age. There were no differences in
            the pharmacokinetics of Dexmedetomidine in young (18–40 years),
            middle age (41–65 years), and elderly (>65 years) subjects.
          </Text>
        </View>
        <View
          style={{
            marginBottom: 50
          }}
        >
          <ImageZoom
            cropWidth={Dimensions.get("window").width}
            cropHeight={Dimensions.get("window").height / 4}
            imageWidth={Dimensions.get("window").width}
            imageHeight={Dimensions.get("window").width * 0.65}
          >
            <Image
              resizeMode="contain"
              style={{
                width: Dimensions.get("window").width * 0.85,
                height: Dimensions.get("window").width * 0.65,
                marginBottom: 150
              }}
              source={table}
            />
          </ImageZoom>
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
