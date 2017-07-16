import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Footer, FooterTab, Button } from "native-base";

export default class StrengthChooser extends Component {
  render() {
    return (
      <View>
        <Footer>
          <FooterTab>
            <Button info onPress={() => this.props.onChange("4mcg")}>
              <Text style={{ color: "white", fontWeight: "bold" }}>
                Sedodex
              </Text>
              <Text style={{ color: "white", fontWeight: "bold" }}>
                4 mcg/ml
              </Text>
            </Button>
            <Button onPress={() => this.props.onChange("8mcg")}>
              <Text style={{ color: "white", fontWeight: "bold" }}>
                Sedodex
              </Text>
              <Text style={{ color: "white", fontWeight: "bold" }}>
                8 mcg/ml
              </Text>
            </Button>
          </FooterTab>
        </Footer>
      </View>
    );
  }
}
