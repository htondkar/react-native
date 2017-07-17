import React from "react";
import { Text, View } from "react-native";

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
  }
};

export const LI = ({ children }) =>
  <Text style={{ marginLeft: 30 }}>
    <Text style={{ fontWeight: 'bold', fontSize: 20 }}>
      {"\t\t•\t"}
    </Text>
    {children}
  </Text>;
