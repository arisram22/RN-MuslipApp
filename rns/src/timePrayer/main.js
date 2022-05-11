// import React, { Component } from "react";
// import {
//   StyleSheet,
//   View,
//   Text,
//   TouchableOpacity,
//   DatePickerAndroid,
//   SafeAreaView,
// } from "react-native";
// import axios from "axios";
// import utils from "../../utils";
// import config from "../../config";
// import IconE from "react-native-vector-icons/Entypo";
// import IconI from "react-native-vector-icons/Ionicons";
// import IconAnt from "react-native-vector-icons/AntDesign";
// // import SkeletonPlaceholder from "react-native-skeleton-placeholder";
// import RNLocation from "react-native-location";
// // import LinearGradient from "react-native-linear-gradient";

// class Main extends Component {
//   constructor() {
//     super();
//     this.state = {
//       pray: [],
//       date: utils.today,
//       address: "Jakarta",
//       lat: "",
//       lon: "",
//     };
//     this.getData();
//   }
//   datePick = async () => {
//     try {
//       let { action, year, month, day } = await DatePickerAndroid.open({
//         date: new Date(),
//       });
//       month += 1;
//       if (action !== DatePickerAndroid.dismissedAction) {
//         var dateSelected = year + "-" + month + "-" + day;
//         this.setState({
//           date: day + "-" + month + "-" + year,
//           pray: [],
//         });
//         this.getData(dateSelected);
//       }
//     } catch ({ code, message }) {
//       alert("date picker error", message);
//     }
//   };

//   getData = (date = this.state.date, address = this.state.address) => {
//     // RNLocation.configure({
//     //   distanceFilter: 5.0,
//     // });

//     // RNLocation.requestPermission({
//     //   ios: "whenInUse",
//     //   android: {
//     //     detail: "coarse",
//     //   },
//     // }).then((granted) => {
//     //   if (granted) {
//     //     this.locationSubscription = RNLocation.subscribeToLocationUpdates(
//     //       (locations) => {
//     //         let lat = locations[0].latitude;
//     //         let lon = locations[0].longitude;
//     //         this.setState({ lat: lat, lon: lon });
//     //         console.log(lat, lon);
//     //       }
//     //     );
//     //   }
//     // });

//     axios
//       .get(
//         `${config.prayerTime.BASE_URL}/daily.json?key=${config.prayerTime.API_KEY}`
//       )
//       .then((response) => {
//         this.setState({
//           pray: response.data,
//         });
//         console.log(response.data);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   };

//   render() {
//     return (
//       <>
//         {/* <View> */}
//         {/* <SkeletonPlaceholder backgroundColor="rgba(255, 255, 255, 0.3)"> */}
//         <View
//           style={{
//             paddingHorizontal: 30,
//             paddingVertical: 20,
//             flexDirection: "column",
//             flex: 1,
//           }}
//         >
//           <View style={{ flex: 2 }}>
//             <View style={styles.wrapperInfo}>
//               <View style={styles.wrapperIcon}></View>
//               <View
//                 style={{
//                   marginHorizontal: 15,
//                   backgroundColor: "rgba(255, 255, 255, 0.3)",
//                   alignItems: "center",
//                   width: 85 + "%",
//                   height: 15,
//                 }}
//               ></View>
//             </View>
//             <View style={styles.wrapperInfo}>
//               <View style={styles.wrapperIcon}></View>
//               <View
//                 style={{
//                   marginHorizontal: 15,
//                   backgroundColor: "rgba(255, 255, 255, 0.3)",
//                   alignItems: "center",
//                   width: 85 + "%",
//                   height: 15,
//                 }}
//               ></View>
//             </View>
//           </View>
//           <View style={{ flex: 3, marginTop: 20 }}>
//             <View style={styles.wrapperJadwal}></View>
//             <View style={styles.wrapperJadwal}></View>
//             <View style={styles.wrapperJadwal}></View>
//             <View style={styles.wrapperJadwal}></View>
//             <View style={styles.wrapperJadwal}></View>
//             <View style={styles.wrapperJadwal}></View>
//           </View>
//         </View>
//         {/* </SkeletonPlaceholder> */}
//         {/* </View> */}
//       </>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     fontFamily: "Neo_Sans",
//   },
//   title: {
//     color: "#E9ECEF",
//     fontSize: 30,
//     fontWeight: "700",
//   },
//   subtitle: {
//     color: "#E9ECEF",
//     fontSize: 14,
//   },
//   textJadwal: {
//     paddingHorizontal: 15,
//     color: "#E9ECEF",
//     fontSize: 16,
//     fontWeight: "bold",
//   },
//   wrapperIcon: {
//     backgroundColor: "rgba(255, 255, 255, 0.3)",
//     borderRadius: 50,
//     width: 35,
//     height: 35,
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   wrapperJadwal: {
//     marginTop: 10,
//     backgroundColor: "rgba(255, 255, 255, 0.3)",
//     alignItems: "center",
//     width: 100 + "%",
//     height: 50,
//     borderRadius: 10,
//     justifyContent: "space-between",
//     flexDirection: "row",
//   },
//   wrapperInfo: {
//     flex: 1,
//     flexDirection: "row",
//     alignItems: "center",
//   },
//   titleInfo: {
//     color: "#E9ECEF",
//     fontSize: 16,
//     marginHorizontal: 10,
//     fontWeight: "bold",
//     marginHorizontal: 10,
//     fontWeight: "bold",
//   },
//   subInfo: {
//     color: "#E9ECEF",
//     fontSize: 14,
//     marginHorizontal: 10,
//     fontWeight: "bold",
//     marginHorizontal: 10,
//     fontSize: 10,
//     fontWeight: "100",
//   },
// });

// export default Main;

// // import { View, Text } from "react-native";

// // const main = () => {
// //   return (
// //     <View>
// //       <Text>hasuhkjh</Text>
// //     </View>
// //   );
// // };

// // export default main;

import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

const SchedulePrayer = (props) => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.cardContainer}>
        <View style={styles.locationContainer}>
          <Image
            source={require("../../assets/img/compass.png")}
            style={styles.locationImage}
          />
          <Text style={styles.locationText}>{props.location}</Text>
        </View>
        {props.prayers?.map((item, index) => {
          return (
            <View key={index} style={styles.prayItem}>
              <Text style={styles.titleItem}>{item.title}</Text>
              <Text style={styles.timeItem}>{item.time}</Text>
              <View style={styles.horizontalSeparator} />
              <TouchableOpacity>
                <Image
                  source={require("../../assets/img/compass.png")}
                  style={styles.locationImage}
                />
              </TouchableOpacity>
            </View>
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    marginHorizontal: 32,
    padding: 16,
    borderRadius: 16,
    backgroundColor: "#fbf6f0",
    elevation: 6,
  },
  cardContainer: {},
  locationContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  locationImage: {
    height: 16,
    width: 16,
  },
  locationText: {
    fontWeight: "bold",
    marginLeft: 8,
    color: "#16a596",
  },
  prayItem: {
    flexDirection: "row",
    marginTop: 24,
    marginHorizontal: 8,
    alignItems: "center",
  },
  titleItem: {
    fontSize: 25,
    flex: 1,
    color: "#16a596",
  },
  timeItem: {
    fontSize: 25,
    color: "#16a596",
  },
  horizontalSeparator: {
    marginHorizontal: 8,
  },
});

export default SchedulePrayer;
