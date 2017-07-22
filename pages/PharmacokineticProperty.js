import React, { Component } from "react";
import { Text, ScrollView, View, Image } from "react-native";
import { Bold } from "../helpers/components";
import ImageZoom from "react-native-image-pan-zoom";
import Dimensions from "Dimensions";
import table from "../images/table.png";
import { FontChanger } from "../helpers/components";

export default class PharmacokineticProperty extends Component {
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
            <Bold>Pharmacokinetic Property</Bold>
            <Text style={{ fontSize: this.state.fontSize }}>
              Dexmedetomidine exhibits linear pharmacokinetics in the dosage
              range of 0.2 to 0.7 mcg/kg/hr when administered by intravenous
              infusion for up to 24 hours. Following intravenous administration,
              Dexmedetomidine exhibits the following pharmacokinetic parameters:
              a rapid distribution phase with a distribution half-life (t½) of
              approximately 6 minutes; a terminal elimination half-life (t1/2)
              of approximately 2 hours; and steady-state volume of distribution
              (Vss) of approximately 118 liters. Clearance is estimated to be
              approximately 39 L/h. The mean body weight associated with this
              clearance estimate was 72 kg. The pharmacokinetic profile of
              Dexmedetomidine was not altered by age. There were no differences
              in the pharmacokinetics of Dexmedetomidine in young (18–40 years),
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
