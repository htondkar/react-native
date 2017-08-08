import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Footer, FooterTab, Button } from "native-base";
import { MKButton } from "react-native-material-kit";
import Dimensions from "Dimensions";

const deviceWidth = parseInt(Dimensions.get("window").width);

export default class StrengthChooser extends Component {
  render() {
    const { currentStrength } = this.props;
    return (
      <View>
        <Footer>
          <FooterTab>
            <MKButton
              backgroundColor="#62b1f6"
              shadowRadius={0}
              rippleDuration={200}
              maskDuration={150}
              style={[styles.button]}
              onPress={() => this.props.onChange("4mcg")}
            >
              <Text
                style={{
                  color: currentStrength === "4mcg" ? "#FFA000" : "white",
                  fontWeight: "bold"
                }}
              >
                Sedodex
              </Text>
              <Text
                style={{
                  color: currentStrength === "4mcg" ? "#FFA000" : "white",
                  fontSize: 18,
                  fontWeight: "bold"
                }}
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
              <Text
                style={{
                  color: currentStrength === "8mcg" ? "#FFA000" : "white",
                  fontWeight: "bold"
                }}
              >
                Sedodex
              </Text>
              <Text
                style={{
                  color: currentStrength === "8mcg" ? "#FFA000" : "white",
                  fontSize: 18,
                  fontWeight: "bold"
                }}
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
