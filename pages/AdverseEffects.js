import React, { Component } from "react";
import { Text, ScrollView, View } from "react-native";
import { Bold, LineBreak, Heading } from "../helpers/components";
import { FontChanger } from "../helpers/components";

export default class AdverseEffects extends Component {
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
    setTimeout(this.makeHidden, 1000);
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
        <ScrollView  onTouchStart={this.makeVisible}>
          <View style={styles.wrapper}>
            <View style={styles.paragraph}>
              <Bold>Adverse Effects (Overall)</Bold>
              <View>
                <Text style={{ fontSize: this.state.fontSize }}>
                  Overall, the most frequently observed treatment-emergent
                  adverse events include hypotension, hypertension, nausea,
                  bradycardia, fever, vomiting hypoxia, tachycardia and anemia
                </Text>
              </View>
            </View>
            <View style={styles.paragraph}>
              <Bold>Specific Effects</Bold>
              <Text style={{ fontSize: this.state.fontSize }}>
                <Heading firstLine>Vascular Disorders:</Heading>
                Hypotension, Hypertension, Hemorrhage
                <Heading>Gastrointestinal Disorders:</Heading>
                Nausea, Dry mouth, Abdominal pain, diarrhea, vomiting, nausea.
                <Heading>Cardiac Disorders:</Heading>
                Bradycardia, Atrial fibrillation, Tachycardia, Sinus
                tachycardia, Ventricular tachycardia, myocardial infarction,
                heart disorder.
                <Heading>
                  General Disorders and Administration Site Conditions:
                </Heading>
                Pyrexia, Hyperthermia, Chills, Edema peripheral
                <Heading>Metabolism and Nutrition Disorders:</Heading>
                Hypovolemia, Hyperglycemia, Hypocalcemia, Acidosis, respiratory
                acidosis, hyperkalemia, increased alkaline phosphatase, thirst,
                Hypoglycemia.
                <Heading>
                  Respiratory, Thoracic and Mediastinal Disorders:
                </Heading>
                Atelectasis, Pleural effusion, Hypoxia, Pulmonary edema,
                Wheezing, Apnea, bronchospasm, dyspnea, hypercapnia,
                hypoventilation, hypoxia, pulmonary congestion
                <Heading>Psychiatric Disorders:</Heading>
                Agitation
                <Heading>Blood and Lymphatic System Disorders:</Heading>
                Anemia
                <Heading>
                  Injury, Poisoning and Procedural Complications:
                </Heading>
                Post-procedural hemorrhage
                <Heading>Investigations:</Heading>
                Urine output decreased
                <Heading>Body as a Whole:</Heading>
                Fever, hyperpyrexia, hypovolemia, light anesthesia, pain, rigors
                <Heading>
                  Central and Peripheral Nervous System Disorders:
                </Heading>
                Dizziness, headache, neuralgia, neuritis, speech disorder,
                convulsion
                <Heading>Liver and Biliary System Disorders: </Heading>
                Increased gamma-glutamyl transpepsidase, hepatic function
                abnormal, hyperbilirubinemia, alanine transaminase, aspartate
                aminotransferase
                <Heading>Psychiatric Disorders: </Heading>
                Agitation, confusion, delirium, hallucination, illusion
                <Heading>Renal Disorders: </Heading>
                Blood urea nitrogen increased, oliguria
                <Heading>Skin and Appendages Disorders: </Heading>
                Increased sweating
                <Heading>Vision Disorders: </Heading>
                Photopsia, abnormal vision.
              </Text>
            </View>
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
