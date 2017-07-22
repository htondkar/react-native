import React, { Component } from "react";
import { Text, ScrollView, View } from "react-native";
import { Bold, LineBreak, Heading } from "../helpers/components";
import { FontChanger } from "../helpers/components";

export default class Incompatibilities extends Component {
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
      if (currentSize < 20) {
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
            <Bold>Incompatibilities </Bold>
            <Text style={{ fontSize: this.state.fontSize }}>
              Administration with Other Fluids: Dexmedetomidine infusion should
              not be co-administered through the same intravenous catheter with
              blood or plasma because physical compatibility has not been
              established. Dexmedetomidine has been shown to be incompatible
              when administered with the following drugs: Amphotericin B,
              Diazepam.
            </Text>
          </View>
          <View style={styles.paragraph}>
            <Text style={{ marginBottom: 30, fontSize: this.state.fontSize }}>
              Dexmedetomidine has been shown to be compatible when administered
              with the following intravenous fluids and drugs : 0.9% sodium
              chloride in water, 5% dextrose in water, 20% Mannitol, Alfentanil
              Hydrochloride, Amikacin Sulfate, Aminophylline, Amiodarone
              Hydrochloride, Ampicillin Sodium, Ampicillin Sodium-Sulbactam
              Sodium, Atracurium Besylate, Atropine Sulfate, Azithromycin,
              Aztreonam, Bretylium Tosylate, Bumetanide, Butorphanol Tartrate,
              Calcium Gluconate, Cefazolin Sodium, Cefepime Hydrochloride,
              Cefoperazone Sodium, Cefotaxime Sodium, Cefotetan Sodium,
              Cefoxitin Sodium, Ceftazidime, Ceftizoxime Sodium, Ceftriaxone
              Sodium, Cefuroxime Sodium, Chlorpromazine Hydrochloride,
              Cimetidine Hydrochloride, Ciprofloxacin, Cisatracurium Besylate,
              Clindamycin Phosphate, Dexamethasone Sodium Phosphate, Digoxin,
              Diltiazem Hydrochloride, Diphenhydramine Hydrochloride, Dobutamine
              Hydrochloride, Dolasetron Mesylate, Dopamine Hydrochloride,
              Doxycycline Hyclate, Droperidol, Enalaprilat, Ephedrine
              Hydrochloride, Epinephrine Hydrochloride, Erythromycin
              Lactobionate, Esmolol, Etomidate, Famotidine, Fenoldopam Mesylate,
              Fentanyl Citrate, Fluconazole, Furosemide, Gatifloxacin,
              Gentamicin Sulfate, Glycopyrrolate Bromide, Granisetron
              Hydrochloride, Haloperidol Lactate, Heparin Sodium, Hydrocortisone
              Sodium Succinate, Hydromorphone Hydrochloride, Hydroxyzine
              Hydrochloride, Inamrinone Lactate, Isoproterenol Hydrochloride,
              Ketorolac Tromethamine, Labetalol, Lactated Ringer’s Solution,
              Levofloxacin, Lidocaine Hydrochloride, Linezolid, Lorazepam,
              Magnesium Sulfate, Meperidine Hydrochloride, Methylprednisolone
              Sodium Succinate, Metoclopramide Hydrochloride, Metronidazole,
              Midazolam, Milrinone Lactate, Mivacurium Chloride, Morphine
              Sulfate, Nalbuphine Hydrochloride, Nitroglycerin, Norepinephrine
              Bitartrate, Ofloxacin,Ondansetron Hydrochloride, Pancuronium
              Bromide, Phenylephrine Hydrochloride, Piperacillin Sodium,
              Piperacillin Sodium-Tazobactam Sodium, Potassium Chloride,
              Procainamide Hydrochloride, Prochlorperazine Edisylate,
              Promethazine Hydrochloride, Propofol, Ranitidine Hydrochloride,
              Rapacuronium Bromide, Remifentanil Hydrochloride, Rocuronium
              Bromide, Sodium Bicarbonate, Sodium Nitroprusside,
              Succinylcholine, Sufentanil Citrate,
              Sulfamethoxazole-Trimethoprim, Theophylline, Thiopental Sodium,
              Ticarcillin Disodium, Ticarcillin Disodium-Clavulanate Potassium,
              Tobramycin Sulfate, Vancomycin Hydrochloride, Vecuronium Bromide,
              Verapamil Hydrochloride, and a plasma-substitute.
            </Text>
          </View>
        </ScrollView>
      </View>
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
