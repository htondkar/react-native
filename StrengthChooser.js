import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Footer, FooterTab, Button } from "native-base";
import { MKButton } from "react-native-material-kit";
import Dimensions from "Dimensions";

const deviceWidth = parseInt(Dimensions.get("window").width);

export default class StrengthChooser extends Component {
  render() {
    return (
      <View>
        <Footer>
          <FooterTab>
            <MKButton
              backgroundColor="#62b1f6"
              shadowRadius={0}
              rippleDuration={200}
              maskDuration={150}
              style={styles.button}
              onPress={() => this.props.onChange("4mcg")}
            >
              <Text style={{ color: "white", fontWeight: "bold" }}>
                Sedodex
              </Text>
              <Text
                style={{ fontSize: 18, color: "#FFA000", fontWeight: "bold" }}
              >
                4 mcg/ml
              </Text>
            </MKButton>
            <MKButton
              backgroundColor="#3f51b5"
              shadowRadius={0}
              rippleDuration={200}
              maskDuration={150}
              style={styles.button}
              onPress={() => this.props.onChange("8mcg")}
            >
              <Text style={{ color: "white", fontWeight: "bold" }}>
                Sedodex
              </Text>
              <Text
                style={{ fontSize: 18, color: "#F50057", fontWeight: "bold" }}
              >
                8 mcg/ml
              </Text>
            </MKButton>
          </FooterTab>
        </Footer>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    width: deviceWidth / 2,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center"
  }
});
