import React, { Component } from "react";
import { Text, View, Platform } from "react-native";

import AdministrationWithOtherFluids from "./pages/AdministrationWithOtherFluids";
import AdverseEffects from "./pages/AdverseEffects";
import ClinicalPharmacology from "./pages/ClinicalPharmacology";
import DosageAndAdministration from "./pages/DosageAndAdministration";
import DosingFormula from "./pages/DosingFormula";
import DrugInformation from "./pages/DrugInformation";
import DrugInteractions from "./pages/DrugInteractions";
import Incompatibilities from "./pages/Incompatibilities";
import Indications from "./pages/Indications";
import MechanismOfAction from "./pages/MechanismOfAction";
import MoreInfo from "./pages/MoreInfo";
import Overdose from "./pages/Overdose";
import PharmacokineticProperty from "./pages/PharmacokineticProperty";
import UseInSpecificPopulations from "./pages/UseInSpecificPopulations";
import WarningsAndPrecautions from "./pages/WarningsAndPrecautions";

const colors = {
  aqua: "#3ad4ff",
  imagenCol: "#001a4b",
  green: "#9CCC65"
};

const headerOptions = {
  headerRight: <View />, //a hack for flex-box centering
  headerStyle: {
    shadowOpacity: 1,
    shadowRadius: 5,
    elevation: 3
  },
  headerTitleStyle: {
    fontFamily: (Platform.OS === 'ios') ? "System" : "sans-serif-thin",
    alignSelf: "center"
  },
  headerTintColor: colors.aqua
};

export default class Information extends Component {
  static navigationOptions = ({ navigation, screenProps }) => ({
    title: navigation.state.params.title,
    ...headerOptions
  });

  render() {
    const { params } = this.props.navigation.state;
    switch (params.id) {
      case 1:
        return <AdministrationWithOtherFluids />;
        break;
      case 2:
        return <AdverseEffects />;
        break;
      case 3:
        return <ClinicalPharmacology />;
        break;
      case 4:
        return <DosageAndAdministration />;
        break;
      case 5:
        return <DosingFormula />;
        break;
      case 6:
        return <DrugInformation />;
        break;
      case 7:
        return <DrugInteractions />;
        break;
      case 8:
        return <Incompatibilities />;
        break;
      case 9:
        return <Indications />;
        break;
      case 10:
        return <MechanismOfAction />;
        break;
      case 11:
        return <MoreInfo />;
        break;
      case 12:
        return <Overdose />;
        break;
      case 13:
        return <PharmacokineticProperty />;
        break;
      case 14:
        return <UseInSpecificPopulations />;
        break;
      case 15:
        return <WarningsAndPrecautions />;
        break;
      default:
        return <View />;
        break;
    }
  }
}
