// import React, { Component } from "react";
// import { StyleSheet, Text, View, FlatList } from "react-native";
// import Dimensions from "Dimensions";
// const deviceWidth = parseInt(Dimensions.get("window").width);
// const weightArray = Array.from({ length: 20 }, (v, k) => k + 50);
// const border = {
//   borderWidth: 1,
//   borderColor: "#A0A0A0"
// };

// const Header = () =>
//   <View style={{ width: deviceWidth * 3 / 7, ...border }}>
//     <Text>empty</Text>
//   </View>;

// const Footer = () =>
//   <View style={{ width: deviceWidth * 3 / 7, ...border }}>
//     <Text>empty</Text>
//   </View>;

// export default class Test extends Component {
//   constructor() {
//     super();
//     this.state = {
//       slideWidth: deviceWidth / 7,
//       currentIndex: 0
//     };
//   }

//   handleScroll = ({ nativeEvent: { contentOffset: { x: dx } } }) => {
//     const index = parseInt(dx / this.state.slideWidth, 10);

//     if (index !== this.state.currentIndex) {
//       this.setState({ currentIndex: index });
//       this.list.scrollToOffset(this.state.currentIndex * this.state.slideWidth);
//     }
//   };

//   render() {
//     return (
//       <View style={{ backgroundColor: "white", width: deviceWidth }}>
//         <FlatList
//           onScroll={this.handleScroll}
//           data={weightArray}
//           keyExtractor={item => item}
//           scrollEventThrottle={16}
//           style={{ width: deviceWidth }}
//           horizontal={true}
//           ref={ref => {
//             this.list = ref;
//           }}
//           ListHeaderComponent={Header}
//           ListFooterComponent={Footer}
//           showsHorizontalScrollIndicator={false}
//           renderItem={({ item }) =>
//             <View
//               key={item}
//               style={{
//                 ...border,
//                 height: 50,
//                 width: deviceWidth / 7,
//                 display: "flex",
//                 justifyContent: "center",
//                 alignContent: "center",
//                 alignItems: "center"
//               }}
//             >
//               <Text>
//                 {item}
//               </Text>
//             </View>}
//         />
//       </View>
//     );
//   }
// }
