import React from "react";
import { Text, View, TouchableHighlight } from "react-native";

export const Bold = ({ children }) =>
  <Text style={styles.bold}>
    {children} {"\n"}
  </Text>;

export const LineBreak = () => <View style={styles.break} />;

export const Heading = ({ children, firstLine }) =>
  <Text style={styles.heading}>
    {`${firstLine ? "" : "\n\n"}${children}\n`}
  </Text>;

const colors = {
  aqua: "#3ad4ff",
  imagenCol: "#001a4b"
};

const styles = {
  break: {
    height: 5
  },
  bold: {
    fontWeight: "600",
    color: colors.imagenCol
  },
  heading: {
    color: "#004D40"
  },
  fontButtonsWrapper: {
    position: "absolute",
    bottom: 0,
    zIndex: 20,
    right: 0,
    paddingRight: 10,
    paddingBottom: 10
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    height: 50,
    width: 50,
    borderRadius: 25,
    backgroundColor: "#E0E0E0"
  }
};

export const LI = ({ children }) =>
  <Text style={{ marginLeft: 30 }}>
    <Text style={{ fontWeight: "bold", fontSize: 20 }}>
      {"\t\t•\t"}
    </Text>
    {children}
  </Text>;

export const FontChanger = ({ onChange }) =>
  <View style={styles.fontButtonsWrapper}>
    <TouchableHighlight
      underlayColor="#E0E0E0"
      style={{
        borderRadius: 25,
        height: 50,
        width: 50,
        marginBottom: 10
      }}
      onPress={() => onChange("+")}
    >
      <View style={styles.button}>
        <Text>A+</Text>
      </View>
    </TouchableHighlight>
    <TouchableHighlight
      style={{
        borderRadius: 25,
        height: 50,
        width: 50
      }}
      underlayColor="#E0E0E0"
      onPress={() => onChange("-")}
    >
      <View style={styles.button}>
        <Text>A-</Text>
      </View>
    </TouchableHighlight>
  </View>;
