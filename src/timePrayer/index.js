// // // // // import React, { useState, useEffect } from "react";
// // // // // import {
// // // // //   Image,
// // // // //   StyleSheet,
// // // // //   Text,
// // // // //   View,
// // // // //   Dimensions,
// // // // //   Animated,
// // // // // } from "react-native";
// // // // // import CompassHeading from "react-native-compass-heading";
// // // // // import Geolocation from "@react-native-community/geolocation";

// // // // // const App = () => {
// // // // //   //// inisiasi variable
// // // // //   const [compassHeading, setCompassHeading] = useState(0);
// // // // //   const [latitude, setLatitude] = useState(0);
// // // // //   const [longitude, setLongitude] = useState(0);
// // // // //   const [derajatKiblat, setDerajatKiblat] = useState("");

// // // // //   useEffect(() => {
// // // // //     const degree_update_rate = 0.5;

// // // // //     // fungsi mengambil angka arah derajat kita
// // // // //     CompassHeading.start(degree_update_rate, (degree) => {
// // // // //       setCompassHeading(degree); //// memasukan ke variable state compassHeading
// // // // //     });
// // // // //     // fungsi mengambil lokasi longitude latitude kita
// // // // //     Geolocation.getCurrentPosition((info) => {
// // // // //       let { latitude, longitude } = info.coords;
// // // // //       setLatitude(latitude); //// memasukan ke variable state latitude
// // // // //       setLongitude(longitude); //// memasukan ke variable state longitude
// // // // //       setDerajatKiblat(bearing(latitude, longitude).toString().substr(0, 3)); //// memasukan ke variable state derajat kiblat
// // // // //     });

// // // // //     return () => {
// // // // //       CompassHeading.stop();
// // // // //     };
// // // // //   }, []);

// // // // //   return (
// // // // //     <View style={styles.container}>
// // // // //       <View style={styles.body}>
// // // // //         <Text style={styles._text}>Mengarah {compassHeading}°</Text>
// // // // //         <Text style={[styles._text, { textAlign: "center" }]}>
// // // // //           Latitude {latitude} {"\n"} Longitude {longitude}
// // // // //         </Text>
// // // // //         <Text style={styles._text}>Kiblat kita {derajatKiblat}° derajat</Text>
// // // // //         <View
// // // // //           style={{
// // // // //             width: width,
// // // // //             height: height / 2,
// // // // //             alignItems: "center",
// // // // //             justifyContent: "center",
// // // // //           }}
// // // // //         >
// // // // //           <Image
// // // // //             resizeMode="contain"
// // // // //             source={require("../../assets/img/compass.png")}
// // // // //             style={{
// // // // //               width: "80%",
// // // // //               height: "80%",
// // // // //               transform: [{ rotate: `${360 - compassHeading}deg` }],
// // // // //             }}
// // // // //           />
// // // // //           <View
// // // // //             style={{
// // // // //               position: "absolute",
// // // // //               top: 0,
// // // // //               left: 0,
// // // // //               right: 0,
// // // // //               bottom: 0,
// // // // //               alignItems: "center",
// // // // //               justifyContent: "center",
// // // // //             }}
// // // // //           >
// // // // //             <Image
// // // // //               resizeMode="stretch"
// // // // //               source={require("../../assets/img/arrow.png")}
// // // // //               style={{
// // // // //                 width: 80,
// // // // //                 height: 350,
// // // // //                 transform: [
// // // // //                   {
// // // // //                     rotate:
// // // // //                       bearing(latitude, longitude) - compassHeading + "deg",
// // // // //                   },
// // // // //                 ],
// // // // //               }}
// // // // //             />
// // // // //           </View>
// // // // //         </View>
// // // // //       </View>
// // // // //     </View>
// // // // //   );
// // // // // };

// // // // // //fungsi untuk mengambil arah kiblat kita
// // // // // function bearing(startLat, startLng) {
// // // // //   let latitudeKabah = 21.422487; ///// titik latitude kabah
// // // // //   let longitudeKabah = 39.826206; ///// titik longitude kabah
// // // // //   startLat = toRadians(startLat);
// // // // //   startLng = toRadians(startLng);
// // // // //   destLat = toRadians(latitudeKabah);
// // // // //   destLng = toRadians(longitudeKabah);

// // // // //   y = Math.sin(destLng - startLng) * Math.cos(destLat);
// // // // //   x =
// // // // //     Math.cos(startLat) * Math.sin(destLat) -
// // // // //     Math.sin(startLat) * Math.cos(destLat) * Math.cos(destLng - startLng);
// // // // //   brng = Math.atan2(y, x);
// // // // //   brng = toDegrees(brng);
// // // // //   v = brng = brng + 360;

// // // // //   fraction = modf(brng + 360.0, brng);
// // // // //   brng += fraction;

// // // // //   if (brng > 360) {
// // // // //     brng -= 360;
// // // // //   }
// // // // //   return brng;
// // // // // }

// // // // // // Converts from degrees to radians.
// // // // // function toRadians(degrees) {
// // // // //   return (degrees * Math.PI) / 180;
// // // // // }

// // // // // // Converts from radians to degrees.
// // // // // function toDegrees(radians) {
// // // // //   return (radians * 180) / Math.PI;
// // // // // }

// // // // // function modf(orig, ipart) {
// // // // //   return orig - Math.floor(orig);
// // // // // }

// // // // // const { width, height } = Dimensions.get("window");

// // // // // const styles = StyleSheet.create({
// // // // //   container: {
// // // // //     flex: 1,
// // // // //     justifyContent: "center",
// // // // //   },
// // // // //   body: {
// // // // //     flex: 0.7,
// // // // //     alignItems: "center",
// // // // //     justifyContent: "space-between",
// // // // //   },
// // // // //   image: {
// // // // //     width: height / 2.25,
// // // // //     height: height / 2,
// // // // //     // flex: 1,
// // // // //     // alignSelf: 'center',
// // // // //   },
// // // // //   _text: {
// // // // //     fontSize: 18,
// // // // //     fontWeight: "bold",
// // // // //   },
// // // // // });

// // // // // export default App;

// // // // import React, { useState, useEffect } from "react";
// // // // import { Image, StyleSheet } from "react-native";
// // // // import CompassHeading from "react-native-compass-heading";

// // // // const App = () => {
// // // //   const [compassHeading, setCompassHeading] = useState(0);

// // // //   useEffect(() => {
// // // //     const degree_update_rate = 3;

// // // //     CompassHeading.start(degree_update_rate, (degree) => {
// // // //       setCompassHeading(degree);
// // // //     });

// // // //     return () => {
// // // //       CompassHeading.stop();
// // // //     };
// // // //   }, []);

// // // //   return (
// // // //     <Image
// // // //       style={[
// // // //         styles.image,
// // // //         { transform: [{ rotate: `${360 - compassHeading}deg` }] },
// // // //       ]}
// // // //       resizeMode="contain"
// // // //       // source={require("./compass.png")}
// // // //       source={require("../../assets/img/compass.png")}
// // // //     />
// // // //   );
// // // // };

// // // // const styles = StyleSheet.create({
// // // //   image: {
// // // //     width: "90%",
// // // //     flex: 1,
// // // //     alignSelf: "center",
// // // //   },
// // // // });

// // // // export default App;
// // // import React, { Component } from "react";
// // // import {
// // //   AppRegistry,
// // //   StyleSheet,
// // //   Text,
// // //   View,
// // //   ScrollView,
// // //   Alert,
// // //   StatusBar,
// // //   Image,
// // //   KeyboardAvoidingView,
// // // } from "react-native";
// // // import Icon from "react-native-vector-icons/Ionicons";
// // // import SearchBar from "react-native-searchbar";
// // // import Axios from "axios";
// // // // import Spinner from "react-native-spinkit";

// // // export default class About extends Component {
// // //   constructor() {
// // //     super();
// // //     this.state = {
// // //       curTime: "",
// // //       waktuSholat: {},
// // //       isLoading: true,
// // //       searchQuery: "bandung",
// // //       location: "bandung, indonesia",
// // //       mapImage: null,
// // //     };
// // //   }

// // //   componentWillMount() {
// // //     setInterval(
// // //       function () {
// // //         this.setState({
// // //           curTime: new Date().toLocaleString(),
// // //         });
// // //       }.bind(this),
// // //       1000
// // //     );

// // //     this.fetchData();
// // //   }

// // //   fetchData() {
// // //     Axios.get(
// // //       `https://muslimsalat.com/daily.json?key=e63f1eac0cfee95757897d54ec32b210`
// // //     ).then((data) => {
// // //       console.log(data.data);
// // //       //   this.setState({
// // //       //     waktuSholat: data.data.items[0],
// // //       //     mapImage: data.data.map_image,
// // //       //     isLoading: false,
// // //       //     location: data.data.title,
// // //       //   });
// // //     });
// // //     //     .catch((err) => {
// // //     //       Alert.alert("Unable To Connect");
// // //     //     });
// // //   }

// // //   componentDidMount() {
// // //     setTimeout(() => this.setState({ isLoading: false }), 3000);
// // //   }
// // //   loadingView = () => (
// // //     // <Spinner
// // //     //   isVisible={this.state.isLoading}
// // //     //   size={100}
// // //     //   type="Bounce"
// // //     //   color="#40898f"
// // //     // />
// // //     <Text>test</Text>
// // //   );

// // //   onSubmit() {
// // //     this.fetchData();
// // //     this.searchBar.hide();
// // //     this.setState({
// // //       isLoading: true,
// // //     });
// // //   }

// // //   content() {
// // //     return (
// // //       <View>
// // //         <ScrollView showsHorizontalScrollIndicator={false}>
// // //           <View style={styles.list}>
// // //             <View style={styles.listInfo}>
// // //               <Text style={styles.listText}>Subuh</Text>
// // //             </View>
// // //             <Text style={styles.listValue}>
// // //               {" "}
// // //               {this.state.waktuSholat.shurooq}{" "}
// // //             </Text>
// // //           </View>
// // //           <View style={styles.list}>
// // //             <View style={styles.listInfo}>
// // //               <Text style={styles.listText}>Dzuhur</Text>
// // //             </View>
// // //             <Text style={styles.listValue}>
// // //               {" "}
// // //               {this.state.waktuSholat.dhuhr}{" "}
// // //             </Text>
// // //           </View>
// // //           <View style={styles.list}>
// // //             <View style={styles.listInfo}>
// // //               <Text style={styles.listText}>Ashar</Text>
// // //             </View>
// // //             <Text style={styles.listValue}> {this.state.waktuSholat.asr} </Text>
// // //           </View>
// // //           <View style={styles.list}>
// // //             <View style={styles.listInfo}>
// // //               <Text style={styles.listText}>Maghrib</Text>
// // //             </View>
// // //             <Text style={styles.listValue}>
// // //               {" "}
// // //               {this.state.waktuSholat.maghrib}{" "}
// // //             </Text>
// // //           </View>
// // //           <View style={styles.list}>
// // //             <View style={styles.listInfo}>
// // //               <Text style={styles.listText}>Isya</Text>
// // //             </View>
// // //             <Text style={styles.listValue}>
// // //               {" "}
// // //               {this.state.waktuSholat.isha}{" "}
// // //             </Text>
// // //           </View>
// // //         </ScrollView>
// // //       </View>
// // //     );
// // //   }

// // //   render() {
// // //     var content;
// // //     if (this.state.isLoading) {
// // //       content = (
// // //         <View style={[styles.content, styles.contentLoading]}>
// // //           {this.loadingView()}
// // //         </View>
// // //       );
// // //     } else {
// // //       content = <View style={styles.content}>{this.content()}</View>;
// // //     }

// // //     return (
// // //       <View style={styles.container}>
// // //         <StatusBar backgroundColor="#40898f" />

// // //         {/* <SearchBar
// // //           ref={(ref) => (this.searchBar = ref)}
// // //           data={[1, 2, 3, 4]}
// // //           handleResults={() => {}}
// // //           showOnLoad={false}
// // //           handleChangeText={(val) => this.setState({ searchQuery: val })}
// // //           onSubmitEditing={this.onSubmit.bind(this)}
// // //         /> */}

// // //         <View style={styles.header}>
// // //           {/* <Icon
// // //             onPress={() => this.searchBar.show()}
// // //             name="ios-search"
// // //             size={40}
// // //             style={{ color: "white", position: "absolute", right: 20, top: 10 }}
// // //           /> */}
// // //           {/* <Icon name="ios-pin" size={30} style={styles.logo}/> */}
// // //           {/* <Image
// // //             source={{ uri: this.state.mapImage }}
// // //             style={{ marginTop: 80, width: 150, height: 150, borderWidth: 1 }}
// // //           /> */}
// // //           <View
// // //             style={{
// // //               alignItems: "center",
// // //               justifyContent: "center",
// // //               flexWrap: "wrap",
// // //               width: "80%",
// // //             }}
// // //           >
// // //             <Text
// // //               style={[
// // //                 styles.headerText,
// // //                 { fontSize: 15, textAlign: "center", marginBottom: 10 },
// // //               ]}
// // //             >
// // //               {this.state.location}
// // //             </Text>
// // //           </View>
// // //           <Text style={styles.headerDesc}>{this.state.curTime}</Text>
// // //         </View>

// // //         {/* <SafeAreaView> */}
// // //         {content}
// // //         {/* </SafeAreaView> */}
// // //       </View>
// // //     );
// // //   }
// // // }
// // // const styles = StyleSheet.create({
// // //   container: {
// // //     backgroundColor: "#40898f",
// // //     flex: 1,
// // //   },
// // //   logo: {
// // //     color: "white",
// // //     fontSize: 80,
// // //     marginTop: 80,
// // //   },
// // //   header: {
// // //     alignItems: "center",
// // //     marginBottom: 40,
// // //     flex: 2,
// // //   },
// // //   headerText: {
// // //     marginTop: 20,
// // //     color: "white",
// // //     fontSize: 20,
// // //   },
// // //   headerDesc: {
// // //     color: "white",
// // //     fontSize: 10,
// // //     textAlign: "center",
// // //   },
// // //   content: {
// // //     backgroundColor: "#393e42",
// // //     flex: 2,
// // //   },
// // //   contentLoading: {
// // //     justifyContent: "center",
// // //     alignItems: "center",
// // //   },
// // //   list: {
// // //     borderBottomWidth: 1,
// // //     borderBottomColor: "#3f444a",
// // //     padding: 15,
// // //     flex: 1,
// // //     flexDirection: "row",
// // //   },
// // //   listInfo: {
// // //     flex: 3,
// // //   },
// // //   listText: {
// // //     color: "white",
// // //     fontSize: 20,
// // //   },
// // //   listDesc: {},
// // //   listValue: {
// // //     flex: 1,
// // //     color: "#938549",
// // //     fontWeight: "200",
// // //     fontSize: 20,
// // //     marginLeft: -10,
// // //   },
// // // });

// // // ok map
// // import React, { useState, useEffect } from "react";
// // import { Image, StyleSheet, Text } from "react-native";

// // const App = () => {
// //   const [compassHeading, setCompassHeading] = useState(0);

// //   useEffect(() => {
// //     // const degree_update_rate = 3; // Number of degrees changed before the callback is triggered
// //     // RNSimpleCompass.start(degree_update_rate, (degree) => {
// //     //   console.log("You are facing", degree);
// //     //   setCompassHeading(degree);
// //     // });

// //     return () => {
// //       // RNSimpleCompass.stop();
// //       // CompassHeading.stop();
// //     };
// //   }, []);

// //   return (
// //     <>
// //       <Text>Thisjhjh {compassHeading}</Text>
// //       <Image
// //         style={[
// //           styles.image,
// //           // { transform: [{ rotate: `${360 - compassHeading}deg` }] },
// //         ]}
// //         resizeMode="contain"
// //         source={require("../../assets/img/compass.png")}
// //       />
// //     </>
// //   );
// // };

// // const styles = StyleSheet.create({
// //   image: {
// //     width: "90%",
// //     flex: 1,
// //     alignSelf: "center",
// //   },
// // });

// // export default App;

import React, { Component } from "react";
import {
  Text,
  View,
  StatusBar,
  Image,
  StyleSheet,
  ScrollView,
  PermissionsAndroid,
} from "react-native";
// import { colorPrimary, colorStatusBar, colorWhite } from "../../assets/colors";
const colorWhite = "#fff";
const colorPrimary = "green";
const colorStatusBar = "green";

// import { icMasjid } from "../../assets/img";
// import { GreenStatusBar } from "../../component";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { Card, ListItem, Button } from "react-native-elements";
import axios from "axios";
import moment from "moment";
// import SkeletonContent from "react-native-skeleton-content-nonexpo";
import SkeletonContent from "react-native-skeleton-content";
import Geolocation from "react-native-geolocation-service";
// import admob, {
//   MaxAdContentRating,
//   BannerAd,
//   TestIds,
//   BannerAdSize,
// } from "@react-native-firebase/admob";

const JadwalComponent = ({ title = "default", time = "00:00" }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        paddingVertical: 5,
      }}
    >
      <Text>{title}</Text>
      <Text>{time} WIB</Text>
    </View>
  );
};

export default class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      namasurat: "",
      quranAr: [],
      quranId: [],
      jadwal: {},
      dateNow: "",
      isLoading: true,
      placeName: "",
    };
  }

  async getQuranAcak() {
    try {
      const response = await axios.get(
        "https://api.banghasan.com/quran/format/json/acak"
      );
      this.setState({
        namasurat: response.data.surat.nama,
        quranAr: response.data.acak.ar,
        quranId: response.data.acak.id,
      });
    } catch (error) {
      console.log(error);
    }
  }

  async getJadwalSholat() {
    try {
      const tgl = moment().unix();
      const response = await axios.get(
        "http://api.aladhan.com/v1/timings/" +
          tgl.toString() +
          "?latitude=" +
          this.state.lat +
          "&longitude=" +
          this.state.long +
          "&method=2"
      );
      console.log(response.data.data.timings);
      this.setState({
        jadwal: response.data.data.timings,
        dateNow: response.data.data.date.readable,
        isLoading: false,
      });
    } catch (error) {
      console.error(error);
    }
  }

  async requestPermissions() {
    // if (Platform.OS === "ios") {
    //   Geolocation.requestAuthorization();
    //   Geolocation.setRNConfiguration({
    //     skipPermissionRequests: false,
    //     authorizationLevel: "whenInUse",
    //   });
    // }

    // if (Platform.OS === "android") {
    //   await PermissionsAndroid.request(
    //     PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
    //   );
    // }

    this.getCurrentLocation();
  }

  getCurrentLocation() {
    Geolocation.getCurrentPosition(
      (position) => {
        this.setState({
          lat: position.coords.latitude,
          long: position.coords.longitude,
        });
        this.getCurrentAddress();
      },
      (error) => {
        console.log(error.code, error.message);
      },
      { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
    );
  }

  async getCurrentAddress() {
    const accessToken =
      "pk.eyJ1IjoiaXJmYW5wdWxlIiwiYSI6ImNqdnpxbHFvbzAzM3UzeWxrcWtkbTVhamIifQ.TJM77G3WOEIOIYzk_IiWKQ";
    try {
      const response = await axios.get(
        "https://api.mapbox.com/geocoding/v5/mapbox.places/" +
          this.state.long +
          "," +
          this.state.lat +
          ".json?types=place&access_token=" +
          accessToken
      );
      this.setState({
        placeName: response.data.features[0].place_name,
      });

      this.getJadwalSholat();
    } catch (error) {
      console.error(error);
    }
  }

  componentDidMount() {
    this.getQuranAcak();
    this.requestPermissions();
  }
  render() {
    return (
      <ScrollView
        style={{ flex: 1, backgroundColor: "#fff" }}
        showsVerticalScrollIndicator={false}
      >
        <View style={{ flex: 1, paddingBottom: 20 }}>
          {/* <GreenStatusBar /> */}
          <StatusBar barStyle="light-content" backgroundColor="red" />

          <View style={{ height: 175, backgroundColor: colorPrimary }}>
            <Image
              // source={icMasjid}
              source={require("../../assets/img/arrow.png")}
              style={{
                position: "absolute",
                height: 175,
                width: "100%",
                resizeMode: "stretch",
              }}
            />
            <View style={{ flex: 1, flexDirection: "column" }}>
              <View style={styles.containerAdzan}>
                {this.state.isLoading ? (
                  <Text style={styles.textAdzan}>- - - -</Text>
                ) : (
                  <Text style={styles.textAdzan}>Waktu Imsak Hari Ini</Text>
                )}
                {this.state.isLoading ? (
                  <Text style={styles.waktuAdzan}>--:--</Text>
                ) : (
                  <Text style={styles.waktuAdzan}>
                    {this.state.jadwal.Imsak}
                  </Text>
                )}
              </View>
              <View style={styles.containerLokasi}>
                <View style={styles.flexRow}>
                  <Icon name="map-marker" size={20} color={colorWhite} />
                  {this.state.isLoading ? (
                    <Text style={styles.textBottom}>---, ---</Text>
                  ) : (
                    <Text style={styles.textBottom}>
                      {this.state.placeName}
                    </Text>
                  )}
                </View>
                <View style={styles.flexRow}>
                  <Icon name="calendar" size={20} color={colorWhite} />
                  {this.state.isLoading ? (
                    <Text style={{ color: colorWhite }}>-- -- -- --</Text>
                  ) : (
                    <Text style={styles.textBottom}>{this.state.dateNow}</Text>
                  )}
                </View>
              </View>
            </View>
          </View>
          <View>
            <Card
              title="JADWAL SHOLAT HARI INI"
              containerStyle={styles.styleCard}
            >
              <SkeletonContent
                containerStyle={{ flex: 1 }}
                isLoading={this.state.isLoading}
                layout={[
                  { key: "someId", width: 300, height: 20, marginBottom: 6 },
                  { key: "someId2", width: 300, height: 20, marginBottom: 6 },
                  { key: "someId3", width: 300, height: 20, marginBottom: 6 },
                  { key: "someId4", width: 300, height: 20, marginBottom: 6 },
                  { key: "someId5", width: 300, height: 20, marginBottom: 6 },
                  { key: "someId6", width: 300, height: 20, marginBottom: 6 },
                ]}
              >
                <JadwalComponent title="Imsak" time={this.state.jadwal.Imsak} />
                <JadwalComponent title="Shubuh" time={this.state.jadwal.Fajr} />
                <JadwalComponent
                  title="Dzuhur"
                  time={this.state.jadwal.Dhuhr}
                />
                <JadwalComponent title="Ashar" time={this.state.jadwal.Asr} />
                <JadwalComponent
                  title="Maghrib"
                  time={this.state.jadwal.Maghrib}
                />
                <JadwalComponent title="Isya" time={this.state.jadwal.Isha} />
              </SkeletonContent>
            </Card>
          </View>
          <View style={{ marginBottom: 25 }}>
            <Card containerStyle={styles.styleCard}>
              <View>
                <Text
                  style={{ fontWeight: "bold", fontSize: 14, marginBottom: 4 }}
                >
                  Ayat Hari Ini
                </Text>
                <SkeletonContent
                  containerStyle={{ flex: 1 }}
                  isLoading={this.state.isLoading}
                  layout={[
                    { key: "id1", width: 100, height: 20, marginBottom: 6 },
                    { key: "id2", width: 300, height: 100, marginBottom: 6 },
                  ]}
                >
                  <Text style={{ fontSize: 12, marginBottom: 10 }}>
                    {this.state.namasurat} {this.state.quranAr.ayat}
                  </Text>
                  <Text style={{ fontSize: 18, marginBottom: 10 }}>
                    {this.state.quranAr.teks}
                  </Text>
                  <Text style={{ fontSize: 12 }}>
                    {this.state.quranId.teks}
                  </Text>
                </SkeletonContent>
              </View>
            </Card>
          </View>
          {/* <BannerAd
            unitId={"ca-app-pub-1766778224107216/7107712175"}
            size={BannerAdSize.SMART_BANNER}
            requestOptions={{
              requestNonPersonalizedAdsOnly: true,
            }}
            onAdLoaded={() => {
              console.log("Advert loaded");
            }}
            onAdFailedToLoad={(error) => {
              console.error("Advert failed to load: ", error);
            }}
          /> */}
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  containerAdzan: {
    flex: 1,
    alignItems: "center",
    paddingTop: 40,
  },
  textAdzan: {
    color: colorWhite,
    fontSize: 18,
  },
  waktuAdzan: {
    color: colorWhite,
    fontSize: 36,
    fontWeight: "bold",
  },
  containerLokasi: {
    flex: 1,
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-between",
    padding: 5,
  },
  textBottom: {
    fontSize: 10,
    alignSelf: "center",
    fontWeight: "bold",
    color: "#fffff",
  },
  flexRow: {
    flexDirection: "row",
  },
  styleCard: {
    elevation: 3,
    borderWidth: 0,
    borderRadius: 15,
  },
});

// import React, { useEffect, useState } from "react";
// import { ScrollView, StatusBar, StyleSheet, View } from "react-native";
// import Header from "./header";
// import SchedulePrayer from "./main";

// const prayerData = [
//   {
//     title: "Fajr",
//     time: "04:25 (WIB)",
//   },
//   {
//     title: "Sunrise",
//     time: "05:25 (WIB)",
//   },
//   {
//     title: "Dhuhr",
//     time: "11:28 (WIB)",
//   },
//   {
//     title: "Asr",
//     time: "15:01 (WIB)",
//   },
//   {
//     title: "Maghrib",
//     time: "17:50 (WIB)",
//   },
//   {
//     title: "Isha",
//     time: "18:51 (WIB)",
//   },
// ]

// const App = () => {
//   const [shalatSchedule, setShalatSchedule] = useState(undefined);

//   useEffect(() => {
//     fetchJadwalShalat();
//   }, []);

//   const fetchJadwalShalat = async () => {
//     try {
//       const apiName =
//         "http://api.aladhan.com/v1/hijriCalendarByCity?city=Jakarta&country=Indonesia";
//       let response = await fetch(apiName);
//       let responseJson = await response.json();
//       if (responseJson) {
//         var timings = [];
//         Object.entries(responseJson.data[0].timings).forEach(([key, value]) => {
//           timings.push({
//             title: key,
//             time: value,
//           });
//         });
//         setShalatSchedule(timings);
//         console.log("Shalat Timings ->", timings);
//       }
//     } catch (error) {
//       console.log("Error : ", error);
//     }
//   };

//   return (
//     <ScrollView style={styles.mainContainer}>
//       <StatusBar backgroundColor={"#9ad3bc"} />
//       <Header title={"Assalamualaikum, Rizki"} time={"14.30"} />
//       <View style={styles.prayerCardContainer}>
//         <SchedulePrayer location={"Jakarta Selatan"} prayers={shalatSchedule} />
//       </View>
//     </ScrollView>
//   );
// };

// export default App;

// const styles = StyleSheet.create({
//   mainContainer: {
//     backgroundColor: "#e8e8e8",
//     flexGrow: 1,
//   },
//   prayerCardContainer: {
//     top: -48,
//   },
// });
