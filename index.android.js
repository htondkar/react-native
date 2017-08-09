import React, { Component } from "react";
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  StatusBar,
  I18nManager
} from "react-native";
import { MKButton } from "react-native-material-kit";
import { Container, Content, List, ListItem, Right, Icon } from "native-base";
import Dimensions from "Dimensions";
import { titles } from "./text";
import { StackNavigator, navigate } from "react-navigation";
import Information from "./Information";
import Calculator from "./Calculator";
import logo from "./images/newLogo.jpg";
import Orientation from "react-native-orientation-locker";

try {
  I18nManager.allowRTL(false);
} catch (e) {
  console.log(e);
}

const deviceWidth = parseInt(Dimensions.get("window").width);

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount = () => {
    Orientation.lockToPortrait(); //this will lock the view to Portrait
  };

  onPress = id => {
    this.props.navigation.navigate("Information", {
      id,
      title: titles[id - 1].text
    });
  };

  onCalcPress = () => {
    setTimeout(this.redirect, 50);
  };

  redirect = () => {
    this.props.navigation.navigate("Calculator");
  };

  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          backgroundColor="white"
          barStyle="dark-content"
          StatusBarAnimation="slide"
        />
        <View style={styles.head}>
          <View style={styles.imageContainer}>
            <Image source={logo} style={styles.logo} />
          </View>
          <View style={styles.button}>
            <MKButton
              backgroundColor={colors.imagenCol}
              shadowRadius={2}
              shadowOffset={{ width: 2, height: 3 }}
              shadowOpacity={0.7}
              shadowColor="black"
              rippleDuration={200}
              maskDuration={150}
              onPress={this.onCalcPress}
              style={{ padding: 20, borderRadius: 15, elevation: 5 }}
            >
              <Text
                pointerEvents="none"
                style={{ fontSize: 15, color: "white", fontWeight: "bold" }}
              >
                {"Maintenance Dosing Calculator".toUpperCase()}
              </Text>
            </MKButton>
          </View>
        </View>
        <Container>
          <Content>
            <List>
              {titles.map((item, i) =>
                <ListItem
                  key={item.id}
                  button
                  itemDivider={true}
                  style={{ backgroundColor: i % 2 === 0 ? "white" : "#c4e9fb" }}
                  onPress={() => this.onPress(item.id)}
                >
                  <View>
                    <Text>
                      {item.text}
                    </Text>
                  </View>
                  <Right>
                    <Icon name="arrow-forward" />
                  </Right>
                </ListItem>
              )}
            </List>
          </Content>
        </Container>
      </View>
    );
  }
}

const border = {
  borderWidth: 1,
  borderColor: "#A0A0A0"
};

const Router = StackNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        header: null
      }
    },
    Information: {
      screen: Information
    },
    Calculator: {
      screen: Calculator,
      navigationOptions: {
        header: null
      }
    }
  },
  {
    initialRouteName: "Home",
    headerMode: "screen"
  }
);

AppRegistry.registerComponent("Sedodex", () => Router);

const colors = {
  aqua: "#3ad4ff",
  imagenCol: "#083672",
  green: "#9CCC65"
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "stretch",
    backgroundColor: "#FFFFFF"
  },
  head: {
    // backgroundColor: colors.imagenCol,
    paddingBottom: 15,
    display: "flex",
    alignItems: "center",
    // shadowColor: "red",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2
  },
  imageContainer: {
    paddingTop: 10,
    paddingBottom: 10,
    display: "flex",
    justifyContent: "center"
  },
  logo: {
    width: deviceWidth,
    height: 100,
    resizeMode: "contain"
  },
  body: {
    flex: 1
  },
  title: {
    fontSize: 40,
    color: colors.aqua,
    fontFamily: "sans-serif-thin",
    textShadowColor: "#3ad4ff",
    textShadowOffset: {
      width: -2,
      height: 2
    },
    textShadowRadius: 15
  },
  button: {
    marginTop: 15,
    marginBottom: 10
  }
});
