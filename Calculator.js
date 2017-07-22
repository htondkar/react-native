import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  Image,
  Easing,
  StatusBar,
  Modal,
  Platform,
  TouchableHighlight
} from "react-native";
import { Button } from "native-base";
import Dimensions from "Dimensions";
import { Bold } from "./helpers/components";
import { table } from "./helpers/table";
import logo from "./images/no-slogan.jpg";
import WeightSlider from "./WeightSlider";
import DoseSlider from "./DoseSlider";
import InfusionRate from "./InfusionRate";
import StrengthChooser from "./StrengthChooser";

const colors = {
  skyBlue: "#72bcdd",
  aqua: "#38c6f4",
  imagenCol: "#083672",
  green: "#9CCC65"
};

const deviceWidth = parseInt(Dimensions.get("window").width);
const deviceHeight = parseInt(Dimensions.get("window").height);

const getRate = (weight, dose, strength) => {
  dose = dose * 10 - 1;
  return table[strength][weight][dose];
};

const ModalContent = ({ onAction }) =>
  <View style={styles.modal}>
    <View style={{ backgroundColor: "white", padding: 20 }}>
      <Text
        style={{
          color: colors.imagenCol,
          fontSize: 20,
          textAlign: "center",
          marginBottom: 20
        }}
      >
        Please select the strength used in calculations
      </Text>
      <View
        style={{
          display: "flex",
          alignContent: "center",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <View>
          <Button
            info
            onPress={() => onAction("4mcg")}
            style={{ marginBottom: 20 }}
          >
            <Text style={{ fontWeight: "bold", color: "white" }}>
              Sedodex 4 mcg/ml
            </Text>
          </Button>
        </View>
        <View>
          <Button primary onPress={() => onAction("8mcg")}>
            <Text style={{ fontWeight: "bold", color: "white" }}>
              Sedodex 8 mcg/ml
            </Text>
          </Button>
        </View>
      </View>
    </View>
  </View>;

export default class Calculator extends Component {
  static navigationOptions = ({ navigation, screenProps }) => ({
    title: "Calculator"
  });

  constructor(props) {
    super(props);
    this.state = {
      strength: "4mcg",
      weight: 65,
      dose: 0.4,
      modalVisible: false
    };
  }

  onValueDose = index => {
    this.setState({ dose: ((index + 1) * 0.1).toFixed(1) });
  };

  onValueWeight = index => {
    this.setState({ weight: index * 5 + 50 });
  };

  onStrengthValue = value => {
    this.setState({ strength: value });
  };

  closeModal = () => {
    this.setState({ modalVisible: false });
  };

  openModal = () => {
    this.setState({ modalVisible: true });
  };

  selectStrength = strength => {
    this.setState({ strength, modalVisible: false });
  };

  componentDidMount = () => {
    setTimeout(this.openModal, 100);
  };

  goBack = () => {
    this.props.navigation.goBack();
  };

  render() {
    return (
      <ScrollView
        style={styles.container}
        contentContainerStyle={{
          display: "flex",
          flex: 1
        }}
      >
        <StatusBar backgroundColor="white" barStyle="dark-content" />
        <Modal
          visible={this.state.modalVisible}
          animationType={"slide"}
          transparent={true}
          hardwareAccelerated={true}
          onRequestClose={this.closeModal}
        >
          <ModalContent onAction={this.selectStrength} />
        </Modal>
        <View
          style={{ display: "flex", flex: 1, justifyContent: "space-between" }}
        >
          <View style={styles.imageContainer} >
            <TouchableHighlight onPress={this.goBack} underlayColor="white">
              <Image source={logo} style={styles.logo} />
            </TouchableHighlight>
          </View>
          <WeightSlider
            onChange={this.onValueWeight}
            strength={this.state.strength}
            weight={this.state.weight}
          />
          <DoseSlider
            onChange={this.onValueDose}
            strength={this.state.strength}
            dose={this.state.dose}
          />
          <InfusionRate
            strength={this.state.strength}
            value={getRate(
              this.state.weight,
              this.state.dose,
              this.state.strength
            )}
          />
        </View>
        <StrengthChooser onChange={this.onStrengthValue} />
      </ScrollView>
    );
  }
}

const border = {
  borderWidth: 1,
  borderColor: "#A0A0A0"
};

const styles = StyleSheet.create({
  modal: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center"
  },
  container: {
    paddingTop: Platform.OS === "ios" ? 20 : 0,
    display: "flex",
    flex: 1,
    backgroundColor: "#FFF"
  },
  imageContainer: {
    // ...border,
    paddingBottom: 0,
    display: "flex",
    justifyContent: "center"
  },
  logo: {
    // ...border,
    width: deviceWidth,
    height: 55,
    resizeMode: "contain"
  },
  positionedCenter: {
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
  }
});
