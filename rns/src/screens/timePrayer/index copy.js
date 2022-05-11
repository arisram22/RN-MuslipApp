// // import React, { useState, useEffect } from "react";
// // import {
// //   View,
// //   Text,
// //   StatusBar,
// //   StyleSheet,
// //   Image,
// //   Button,
// //   SafeAreaView,
// // } from "react-native";
// // import moment from "moment";

// // const Home = (props) => {
// //   const getTime = () => {
// //     return moment().format("DD MMMM YYYY, h:mm a");
// //   };

// //   const fetchJadwalSholat = async () => {
// //     try {
// //       const apiName =
// //         "http://api.aladhan.com/v1/hijriCalendarByCity?city=Surabaya&country=Indonesia";
// //       let response = await fetch(apiName);
// //       let responseJson = await response.json();
// //       if (responseJson) {
// //         setSholatTiming(responseJson.data[0].timings);
// //         // console.log('sholat timings ->', responseJson.data[0].timings);
// //       }
// //     } catch (error) {
// //       console.log("error ->", error);
// //     }
// //   };

// //   const [sholatTiming, setSholatTiming] = useState([]);
// //   useEffect(() => {
// //     fetchJadwalSholat();
// //   }, []);

// //   const renderJadwalSholat = (title, time) => (
// //     <View>
// //       <View
// //         style={{
// //           flexDirection: "row",
// //           paddingVertical: 16,
// //           alignItems: "center",
// //           borderBottomWidth: 1,
// //           borderColor: "gray",
// //           marginHorizontal: 13,
// //         }}
// //       >
// //         <Text style={{ flex: 1, color: "gray" }}>{title}</Text>
// //         <Text style={{ color: "gray" }}>{time}</Text>
// //       </View>
// //     </View>
// //   );
// //   return (
// //     <SafeAreaView>
// //       <View>
// //         <StatusBar backgroundColor={"#2b8be7"} />
// //         <View style={styles.banner}>
// //           {/* <Image
// //             source={require("../back.jpg")}
// //             style={{ height: 150, width: "100%", opacity: 0.45 }}
// //           /> */}
// //           <Text>back</Text>
// //           <View style={{ position: "absolute" }}>
// //             <Text style={styles.tbanner}>{"Halo Kawan, "}</Text>
// //             <Text style={styles.tbanner}>{getTime()}</Text>
// //             <View style={{ width: "90%" }}>
// //               <Text
// //                 style={{
// //                   marginLeft: 16,
// //                   marginTop: 10,
// //                   color: "white",
// //                   fontSize: 14,
// //                 }}
// //               >
// //                 {
// //                   '"Amalan yang paling dicintai Allah adalah salat tepat pada waktunya, berbakti pada orang tua, dan jihad di jalan Allah."'
// //                 }
// //               </Text>
// //               <Text
// //                 style={{
// //                   marginLeft: 16,
// //                   color: "white",
// //                   fontSize: 14,
// //                   fontWeight: "700",
// //                 }}
// //               >
// //                 {"~Imam Al-Bukhari dan Muslim"}
// //               </Text>
// //             </View>
// //           </View>
// //         </View>
// //         {renderJadwalSholat("Subuh", sholatTiming.Fajr)}
// //         {renderJadwalSholat("Terbit", sholatTiming.Sunrise)}
// //         {renderJadwalSholat("Dzuhur", sholatTiming.Dhuhr)}
// //         {renderJadwalSholat("Ashar", sholatTiming.Asr)}
// //         {renderJadwalSholat("Maghrib", sholatTiming.Maghrib)}
// //         {renderJadwalSholat("Isya'", sholatTiming.Isha)}
// //         {/* <View>
// //                     <View style={styles.tentangkami}>
// //                         <Text style={styles.texttk} onPress={() => props.navigation.navigate('TentangKami')}>{'Tentang Kami'}</Text>
// //                     </View>
// //                 </View> */}
// //         <View style={styles.tentangkami}>
// //           <Button
// //             title="Tentang Kami"
// //             color="#2b8be7"
// //             onPress={() => props.navigation.navigate("TentangKami")}
// //           />
// //         </View>
// //       </View>
// //     </SafeAreaView>
// //   );
// // };
// // const styles = StyleSheet.create({
// //   banner: {
// //     height: 150,
// //     width: "100%",
// //     backgroundColor: "#2b8be7",
// //     justifyContent: "center",
// //   },
// //   tbanner: {
// //     marginLeft: 16,
// //     color: "white",
// //     fontSize: 21,
// //     fontWeight: "bold",
// //   },
// //   tentangkami: {
// //     display: "flex",
// //     justifyContent: "center",
// //     alignItems: "center",
// //     marginTop: 25,
// //   },
// // });

// // export default Home;

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
// // import utils from "../../utils";
// // import config from "../../config";
// import IconE from "react-native-vector-icons/Entypo";
// import IconI from "react-native-vector-icons/Ionicons";
// import IconAnt from "react-native-vector-icons/AntDesign";
// // import SkeletonPlaceholder from "react-native-skeleton-placeholder";
// import SkeletonContent from "react-native-skeleton-content";
// import RNLocation from "react-native-location";
// import Geolocation from "@react-native-community/geolocation";
// // import LinearGradient from "react-native-linear-gradient";

// const config = {
//   BASE_URL: "http://muslimsalat.com/",
//   API_KEY: "bd099c5825cbedb9aa934e255a81a5fc",
//   styleConstants: {
//     rowHeight: 50,
//   },
// };
// const dataku = {
//   title: "",
//   query: "bogor",
//   for: "daily",
//   method: 1,
//   prayer_method_name: "Egyptian General Authority of Survey",
//   daylight: "0",
//   timezone: "7",
//   map_image:
//     "https://maps.google.com/maps/api/staticmap?center=-6.600000,106.800000&sensor=false&zoom=13&size=300x300",
//   sealevel: "266",
//   today_weather: { pressure: "1004", temperature: "31" },
//   link: "http://muslimsalat.com/bogor",
//   qibla_direction: "295.25",
//   latitude: "-6.600000",
//   longitude: "106.800000",
//   address: "",
//   city: "",
//   state: "West Java",
//   postal_code: "",
//   country: "Indonesia",
//   country_code: "ID",
//   items: [
//     {
//       date_for: "2022-3-17",
//       fajr: "4:39 am",
//       shurooq: "5:52 am",
//       dhuhr: "12:01 pm",
//       asr: "3:10 pm",
//       maghrib: "6:10 pm",
//       isha: "7:14 pm",
//     },
//   ],
//   status_valid: 1,
//   status_code: 1,
//   status_description: "Success.",
// };

// export const utils = () => {
//   var today = new Date();
//   var dd = today.getDate();
//   var mm = today.getMonth() + 1; //January is 0!

//   var yyyy = today.getFullYear();
//   if (dd < 10) {
//     dd = "0" + dd;
//   }
//   if (mm < 10) {
//     mm = "0" + mm;
//   }
//   var today = dd + "-" + mm + "-" + yyyy;

//   return today;
// };

// class Main extends Component {
//   constructor() {
//     super();
//     this.state = {
//       pray: dataku,
//       date: utils.today,
//       address: "Jakarta",
//       lat: "",
//       lon: "",
//     };
//     // this.getData();
//   }
//   // datePick = async () => {
//   //   try {
//   //     let { action, year, month, day } = await DatePickerAndroid.open({
//   //       date: new Date(),
//   //     });
//   //     month += 1;
//   //     if (action !== DatePickerAndroid.dismissedAction) {
//   //       var dateSelected = year + "-" + month + "-" + day;
//   //       this.setState({
//   //         date: day + "-" + month + "-" + year,
//   //         pray: [],
//   //       });
//   //       this.getData(dateSelected);
//   //     }
//   //   } catch ({ code, message }) {
//   //     alert("date picker error", message);
//   //   }
//   // };

//   // getData = (date = this.state.date, address = this.state.address) => {
//   //   Geolocation.getCurrentPosition((info) => {
//   //     let { latitude, longitude } = info.coords;
//   //     this.setState({ lat: latitude, lon: longitude });
//   //   });
//   //   axios
//   //     .get(
//   //       `http://muslimsalat.com/bogor.json?key=bd099c5825cbedb9aa934e255a81a5f`
//   //     )
//   //     .then((response) => {
//   //       this.setState({
//   //         pray: dataku,
//   //       });
//   //       console.log(response.data);
//   //     })
//   //     .catch((error) => {
//   //       console.log(error);
//   //       this.setState({
//   //         pray: dataku,
//   //       });
//   //     });
//   // };

//   render() {
//     return (
//       <View style={styles.container}>
//         <View
//           style={{
//             paddingHorizontal: 30,
//             paddingVertical: 20,
//             flexDirection: "column",
//             flex: 1,
//           }}
//         >
//           <View style={{ flex: 2 }}>
//             <Text style={styles.title}>Alarm Waktu Sholat</Text>
//             <Text style={styles.subtitle}>Shalat jadi tepat waktu.</Text>
//             <View style={{ flex: 1, flexDirection: "column" }}>
//               <TouchableOpacity
//                 onPress={() => this.props.navigation.navigate("SelectLocation")}
//                 style={styles.wrapperInfo}
//               >
//                 <View style={styles.wrapperIcon}>
//                   <IconE name="location-pin" color="#E9ECEF" size={20} />
//                 </View>
//                 <View>
//                   <Text style={styles.titleInfo}>
//                     {this.state.pray.query}
//                     <Text>, </Text>
//                     {this.state.pray.country}
//                   </Text>
//                   <Text style={styles.subInfo}>Lokasi Saat Ini</Text>
//                 </View>
//               </TouchableOpacity>
//               <View style={styles.wrapperInfo}>
//                 <View style={styles.wrapperIcon}>
//                   <IconE name="compass" color="#E9ECEF" size={20} />
//                 </View>
//                 <View>
//                   <Text style={styles.titleInfo}>12 LS 10 LS 13 LS</Text>
//                   <Text style={styles.subInfo}>Arah Kiblat</Text>
//                 </View>
//               </View>
//               <TouchableOpacity
//                 onPress={this.datePick}
//                 style={[
//                   styles.wrapperInfo,
//                   { justifyContent: "space-between" },
//                 ]}
//               >
//                 <View style={{ flexDirection: "row", alignItems: "center" }}>
//                   <View style={styles.wrapperIcon}>
//                     <IconE name="calendar" color="#E9ECEF" size={20} />
//                   </View>
//                   <View>
//                     <Text style={styles.titleInfo}>{this.state.date}</Text>
//                     <Text style={styles.subInfo}>
//                       {this.state.date == utils.today
//                         ? "Tanggal Hari ini"
//                         : "Tanggal diubah"}
//                     </Text>
//                   </View>
//                 </View>
//                 <TouchableOpacity onPress={this.datePick}>
//                   <IconAnt name="calendar" color="#E9ECEF" size={20} />
//                 </TouchableOpacity>
//               </TouchableOpacity>
//             </View>
//           </View>
//           <View style={{ flex: 3, marginTop: 20 }}>
//             <View style={styles.wrapperJadwal}>
//               <Text style={styles.textJadwal}>Imsak</Text>
//               <View style={{ flexDirection: "row" }}>
//                 <Text style={[styles.textJadwal, { fontWeight: "600" }]}>
//                   {this.state.pray.items[0].fajr.toUpperCase()}
//                 </Text>
//                 <IconI
//                   name="md-alarm"
//                   color="#E9ECEF"
//                   size={20}
//                   style={{ paddingRight: 15 }}
//                 />
//               </View>
//             </View>
//             <View style={styles.wrapperJadwal}>
//               <Text style={styles.textJadwal}>Shalat Shubuh</Text>
//               <View style={{ flexDirection: "row" }}>
//                 <Text style={[styles.textJadwal, { fontWeight: "600" }]}>
//                   {this.state.pray.items[0].shurooq.toUpperCase()}
//                 </Text>
//                 <IconI
//                   name="md-alarm"
//                   color="#E9ECEF"
//                   size={20}
//                   style={{ paddingRight: 15 }}
//                 />
//               </View>
//             </View>
//             <View style={styles.wrapperJadwal}>
//               <Text style={styles.textJadwal}>Shalat Dhuhur</Text>
//               <View style={{ flexDirection: "row" }}>
//                 <Text style={[styles.textJadwal, { fontWeight: "600" }]}>
//                   {this.state.pray.items[0].dhuhr.toUpperCase()}
//                 </Text>
//                 <IconI
//                   name="md-alarm"
//                   color="#E9ECEF"
//                   size={20}
//                   style={{ paddingRight: 15 }}
//                 />
//               </View>
//             </View>
//             <View style={styles.wrapperJadwal}>
//               <Text style={styles.textJadwal}>Shalat Ashar</Text>
//               <View style={{ flexDirection: "row" }}>
//                 <Text style={[styles.textJadwal, { fontWeight: "600" }]}>
//                   {this.state.pray.items[0].asr.toUpperCase()}
//                 </Text>
//                 <IconI
//                   name="md-alarm"
//                   color="#E9ECEF"
//                   size={20}
//                   style={{ paddingRight: 15 }}
//                 />
//               </View>
//             </View>
//             <View style={[styles.wrapperJadwal, { backgroundColor: "#768" }]}>
//               <Text style={styles.textJadwal}>Shalat Magbrib</Text>
//               <View style={{ flexDirection: "row" }}>
//                 <Text style={[styles.textJadwal, { fontWeight: "600" }]}>
//                   {this.state.pray.items[0].maghrib.toUpperCase()}
//                 </Text>
//                 <IconI
//                   name="md-alarm"
//                   color="#E9ECEF"
//                   size={20}
//                   style={{ paddingRight: 15 }}
//                 />
//               </View>
//             </View>
//             <View style={styles.wrapperJadwal}>
//               <Text style={styles.textJadwal}>Shalat Isya</Text>
//               <View style={{ flexDirection: "row" }}>
//                 <Text style={[styles.textJadwal, { fontWeight: "600" }]}>
//                   {this.state.pray.items[0].isha.toUpperCase()}
//                 </Text>
//                 <IconI
//                   name="md-alarm"
//                   color="#E9ECEF"
//                   size={20}
//                   style={{ paddingRight: 15 }}
//                 />
//               </View>
//             </View>
//           </View>
//         </View>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     fontFamily: "Neo_Sans",
//     // color: "#6576",
//     backgroundColor: "#057130",
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
