import React, { Component } from "react";
import { Text, ScrollView, View, Image } from "react-native";
import Dimensions from "Dimensions";
import { Bold, LineBreak, Heading } from "../helpers/components";
import ampule from "../images/amp.jpg";
// import FitImage from "react-native-fit-image";

export default class drugInformation extends Component {
  render() {
    return (
      <ScrollView style={styles.wrapper}>
        <View style={styles.paragraph}>
          <Bold>Sedodex ® </Bold>
          <View>
            <Text>
              (Dexmedetomidine as HCL) 100 mcg per mL, 1 mL Injection {"\n"}
            </Text>
          </View>
          <Bold>Storage</Bold>
          <View>
            <Text>
              Store below 25°C. Protect from light and freezing. Please discard
              the unused portion. {"\n"}
            </Text>
          </View>
          <Bold>Manufacturer</Bold>
          <View>
            <Text>
              Imagen Co. Ltd, Tehran, Iran {"\n"}
            </Text>
          </View>
          <Bold>Manufacturing Contractor</Bold>
          <View>
            <Text>
              Themis Medicare Pvt. Ltd., Hardiwar, India {"\n"}
            </Text>
          </View>
          <Bold>Appearance</Bold>
          <View>
            <Text>
              Sedodex® injection is filled into 1-ml Amber, glass ampoules. 1
              PVC rondo tray containing 1 ampoule, is packaged in one printed
              cardboard box, along with one leaflet.
            </Text>
          </View>
        </View>
        <View style={styles.imageContainer}>
          <Image source={ampule} style={styles.image} resizeMode="contain" />
        </View>
      </ScrollView>
    );
  }
}

const border = {
  borderWidth: 1,
  borderColor: "#A0A0A0"
};

const deviceWidth = parseInt(Dimensions.get("window").width);
const deviceHeight = parseInt(Dimensions.get("window").height);
const ratio = deviceHeight / deviceWidth;

const styles = {
  wrapper: {
    padding: 20,
    backgroundColor: "#F8F8F8"
  },
  paragraph: {
    marginBottom: 10
  },
  imageContainer: {
    alignSelf: 'center',
    marginBottom: 40
  },
  image: {
    width: deviceWidth - 41,
    height: deviceWidth / 982 * 540,
    resizeMode: "contain"
  }
};
