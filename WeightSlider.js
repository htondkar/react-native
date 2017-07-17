import React from "react";
import { StyleSheet, View, Text } from "react-native";
import Carousel from "react-native-snap-carousel";
import Dimensions from "Dimensions";
import { Icon } from "native-base";
import { MKButton } from "react-native-material-kit";
const deviceWidth = parseInt(Dimensions.get("window").width);
const weightArray = Array.from({ length: 28 }, (v, k) => k);

const WeightSlider = ({ onChange, strength, weight }) =>
  <View style={{ position: "relative" }}>
    <View style={styles.extraInfo}>
      <Text style={styles.extraInfoText}>PATIENT WEIGHT (kg)</Text>
    </View>
    <View style={styles.container}>
      <View style={styles.SliderLabel}>
        <MKButton
          style={{ alignSelf: "center" }}
          transparent
          onPress={() => this.weighCarousel.snapToPrev()}
        >
          <Icon
            name="remove"
            style={{
              textAlign: "center",
              width: 40,
              fontSize: 46,
              color: colors.imagenCol
            }}
          />
        </MKButton>
      </View>
      <View style={styles.carouselWrapper}>
        <Carousel
          ref={carousel => {
            this.weighCarousel = carousel;
          }}
          sliderWidth={deviceWidth * 0.7 - 20}
          itemWidth={deviceWidth * 0.7 / 3}
          itemHeight={90}
          sliderHeight={100}
          inactiveSlideScale={0.7}
          inactiveSlideOpacity={0.5}
          enableMomentum={true}
          containerCustomStyle={styles.carousel}
          onSnapToItem={onChange}
          snapOnAndroid={true}
          slideStyle={styles.slide}
          firstItem={3}
        >
          {weightArray.map(index =>
            <View key={index}>
              <Text style={styles.slideNum}>
                {index * 5 + 50}
              </Text>
            </View>
          )}
        </Carousel>
      </View>
      <View style={styles.SliderLabel}>
        <MKButton
          transparent
          style={{ alignSelf: "center" }}
          onPress={() => this.weighCarousel.snapToNext()}
        >
          <Icon
            name="add"
            style={{
              textAlign: "center",
              width: 40,
              fontSize: 46,
              color: colors.imagenCol
            }}
          />
        </MKButton>
      </View>
    </View>
    <View style={styles.sliderIndicator}>
      <View style={styles.indicator} />
    </View>
  </View>;

export default WeightSlider;

const colors = {
  skyBlue: "#72bcdd",
  aqua: "#38c6f4",
  imagenCol: "#083672",
  green: "#9CCC65"
};

const border = {
  borderWidth: 1,
  borderColor: "#A0A0A0"
};

const flexCenter = {
  display: "flex",
  justifyContent: "center",
  alignContent: "center",
  alignItems: "center"
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    // ...border
  },
  sliderIndicator: {
    zIndex: 5,
    marginLeft: deviceWidth * 0.15,
    marginRight: deviceWidth * 0.15,
    position: "absolute",
    left: deviceWidth * 0.35,
    transform: [{ translateX: -25 }, { translateY: 90 }]
  },
  carousel: {
    // ...border,
    height: 100
  },
  carouselWrapper: {
    // ...border,
    backgroundColor: colors.aqua,
    zIndex: -1,
    borderRadius: 20,
    padding: 10,
    paddingBottom: 0,
    width: deviceWidth * 0.7,
    display: "flex",
    flexDirection: "row"
  },
  extraInfoText: {
    fontSize: 16,
    color: colors.imagenCol,
    alignSelf: "center"
  },
  extraInfo: {
    ...flexCenter,
    width: deviceWidth,
    position: "absolute",
    paddingLeft: 10,
    top: 5,
    left: 0,
    zIndex: 1
  },
  SliderLabel: {
    // ...border,
    ...flexCenter,
    width: deviceWidth * 0.15
  },
  indicator: {
    zIndex: 5,
    width: 0,
    height: 0,
    backgroundColor: "transparent",
    borderStyle: "solid",
    borderTopWidth: 0,
    borderRightWidth: 25,
    borderBottomWidth: 30,
    borderLeftWidth: 25,
    borderBottomColor: "white",
    borderRightColor: "transparent",
    borderTopColor: "transparent",
    borderLeftColor: "transparent"
  },
  slide: {
    // ...border,
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    height: 90,
    width: deviceWidth * 0.7 / 3,
    marginTop: 5
  },
  slideNum: {
    fontSize: 42,
    color: "#000"
    // fontFamily: 'sans-serif-thin'
  }
});
