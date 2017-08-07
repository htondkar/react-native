import React, { Component } from "react";
import { Text, ScrollView, View, Image } from "react-native";
import Dimensions from "Dimensions";
import { Bold, LineBreak, Heading } from "../helpers/components";
import ampule from "../images/amp.jpg";
// import FitImage from "react-native-fit-image";
import { FontChanger } from "../helpers/components";

export default class drugInformation extends Component {
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
      if (currentSize < 24) {
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
    setTimeout(this.makeHidden, 3000);
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
            <Bold fontSize={this.state.fontSize}>Sedodex ® </Bold>
            <View>
              <Text style={{ fontSize: this.state.fontSize }}>
                (Dexmedetomidine as HCL) 100 mcg per mL, 1 mL Injection {"\n"}
              </Text>
            </View>
            <Bold fontSize={this.state.fontSize}>Storage</Bold>
            <View>
              <Text style={{ fontSize: this.state.fontSize }}>
                Store below 25°C. Protect from light and freezing. Please
                discard the unused portion. {"\n"}
              </Text>
            </View>
            <Bold fontSize={this.state.fontSize}>Manufacturer</Bold>
            <View>
              <Text style={{ fontSize: this.state.fontSize }}>
                Imagen Co. Ltd, Tehran, Iran {"\n"}
              </Text>
            </View>
            <Bold fontSize={this.state.fontSize}>Manufacturing Contractor</Bold>
            <View>
              <Text style={{ fontSize: this.state.fontSize }}>
                Themis Medicare Pvt. Ltd., Hardiwar, India {"\n"}
              </Text>
            </View>
            <Bold fontSize={this.state.fontSize}>Appearance</Bold>
            <View>
              <Text style={{ fontSize: this.state.fontSize }}>
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
      </View>
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
    alignSelf: "center",
    marginBottom: 40
  },
  image: {
    width: deviceWidth - 41,
    height: deviceWidth / 982 * 540,
    resizeMode: "contain"
  }
};
