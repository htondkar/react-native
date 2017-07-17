import React, { Component } from "react";
import { Text, ScrollView, View, Linking } from "react-native";
import { Bold } from "../helpers/components";

export default class MoreInfo extends Component {
  render() {
    return (
      <ScrollView style={styles.wrapper}>
        <View style={styles.paragraph}>
          <Bold>Website</Bold>
          <Text
            style={{ color: "blue" }}
            onPress={() => Linking.openURL("http://www.Sedodex.com")}
          >
            http://www.Sedodex.com
          </Text>
          <Text
            style={{ color: "blue" }}
            onPress={() => Linking.openURL("http://www.Sedodex.ir")}
          >
            http://www.Sedodex.ir
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
