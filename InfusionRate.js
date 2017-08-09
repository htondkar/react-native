import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import Dimensions from "Dimensions";

const deviceWidth = parseInt(Dimensions.get("window").width);

export default class InfusionRate extends Component {
  render() {
    const strength = this.props.strength;
    return (
      <View style={styles.container}>
        <View style={styles.wrap}>
          <View>
            <Text style={styles.text}>Infusion Rate</Text>
            <Text style={styles.strength}>
              {strength === "4mcg" ? "4 mcg " : "8 mcg "}
              Strength
            </Text>
          </View>
          <View>
            <Text style={styles.resultText}>
              {this.props.value}
            </Text>
          </View>
          <View>
            <Text
              style={{
                fontWeight: "bold",
                marginBottom: 10,
                color: "white"
              }}
            >
              ml/hr
            </Text>
          </View>
        </View>
      </View>
    );
  }
}
const border = {
  borderWidth: 1,
  borderColor: "#A0A0A0"
};

const colors = {
  skyBlue: "#72bcdd",
  aqua: "#38c6f4",
  imagenCol: "#083672",
  green: "#9CCC65"
};

const styles = StyleSheet.create({
  container: {
    // ...border,
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center"
  },
  wrap: {
    width: deviceWidth * 0.7,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 15,
    paddingVertical: 5,
    borderRadius: 20,
    backgroundColor: colors.imagenCol,
    // marginBottom: 20
  },
  resultText: {
    color: "#FFA000",
    fontSize: 80
  },
  text: {
    textAlign: "center",
    fontSize: 15,
    color: "white"
  },
  strength: {
    textAlign: "center",
    fontWeight: "bold",
    color: "white",
    fontSize: 18
  }
});
