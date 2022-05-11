// import React, { useEffect, useState } from "react";
// import { ScrollView, StatusBar, StyleSheet, Text, View } from "react-native";
// import { Card } from "react-native-elements";
// import Geolocation from "react-native-geolocation-service";
// import SkeletonContent from "react-native-skeleton-content";
// import moment from "moment";
// import axios from "axios";

// import { getDay, getMonth, getYear, getYear2 } from "../../utils/helpers";
// import { useSelector, useDispatch } from "react-redux";
// import { getPrayerTime } from "../../redux/actions/prayerTime";

// import Header from "../prayerTime/headerPrayer";
// import SchedulePrayer from "./schedulePrayer";
// import DatePrayer from "./datePrayer";
// // import { set } from "react-native-reanimated";

// const App = () => {
//   const [prayerTime, setPrayerTime] = useState(undefined);
//   const [prayerTa, setPrayerTa] = useState(undefined);
//   const [latitude, setLatitude] = useState(0);
//   const [longitude, setLongitude] = useState(0);
//   const [address, setAddress] = useState("---");
//   const [isLoading, setisLoading] = useState(true);
//   const [dateState, setDateState] = useState(new Date());

//   const dispatch = useDispatch();
//   const data = useSelector((state) => state.prayerTime);

//   const getCurrentLocation = async () => {
//     console.log("1.1");
//     try {
//       await Geolocation.getCurrentPosition(
//         (info) => {
//           setLongitude(info.coords.longitude);
//           setLatitude(info.coords.latitude);
//         },
//         (error) => {
//           console.log(error.code, error.message);
//         },
//         { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
//       );
//     } catch (error) {
//       console.log("Error : ", error);
//     }
//   };
//   const getPrayerTimes = async () => {
//     try {
//       const tgl = moment().unix();
//       const response = await axios.get(
//         "http://api.aladhan.com/v1/timings/" +
//           tgl.toString() +
//           "?latitude=" +
//           latitude +
//           "&longitude=" +
//           longitude +
//           "&method=2"
//       );
//       console.log(response.data.data);
//       setPrayerTime(response.data.data);
//       await setisLoading(false);
//     } catch (error) {
//       console.error(error);
//       await setisLoading(true);
//     }
//   };
//   const getAddress = async () => {
//     console.log("1.2");
//     const accessToken =
//       "pk.eyJ1IjoiaXJmYW5wdWxlIiwiYSI6ImNqdnpxbHFvbzAzM3UzeWxrcWtkbTVhamIifQ.TJM77G3WOEIOIYzk_IiWKQ";
//     try {
//       const response = await axios.get(
//         "https://api.mapbox.com/geocoding/v5/mapbox.places/" +
//           longitude +
//           "," +
//           latitude +
//           ".json?types=place&access_token=" +
//           accessToken
//       );
//       // console.log(response.data);
//       setAddress(response.data.features[0]?.place_name);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const getTime = () => {
//     console.log("1.3");
//     const lat = latitude;
//     const long = longitude;
//     const payload = { long, lat, getMonth, getYear };
//     dispatch(getPrayerTime(payload));
//   };

//   const getDate = (
//     params = { date: getDay + "-" + getMonth + "-" + getYear, type: 0 }
//   ) => {
//     console.log(params);
//     const { date, type } = params;
//     console.log("masuk cek data");
//     console.log(data.data);
//     // const dateUpdate = moment(date, "DD-MM-YYYY")
//     //   .add(type, "days")
//     //   .format("DD-MM-YYYY");
//     // const getMonth = moment(date, "DD-MM-YYYY").add(type, "days").format("MM");
//     // const getYear = moment(date, "DD-MM-YYYY").add(type, "days").format("YYYY");
//     // const dateOk = data?.data.filter(
//     //   (element) => element.date.gregorian.date == dateUpdate
//     // );
//     // console.log(getMonth);

//     // if (dateOk[0] == undefined) {
//     //   const payload = { long, lat, getMonth, getYear };
//     //   // await dispatch(getPrayerTime(payload));
//     //   // await dateFilter();
//     // } else {
//     //   // setPrayerTime(dateOk[0]?.timings);
//     //   // setPrayerDate(dateOk[0]?.date);
//     //   // setPrayerTime(dateOk[0]);
//     //   setPrayerTa("a");

//     //   console.log(dateOk[0]);
//     // }

//     // return dateOk;
//   };
//   useEffect(() => {
//     // setInterval(() => {
//     //   console.log("watching");
//     //   setDateState(new Date());
//     // }, 30000);
//     const loading = async () => {
//       await getCurrentLocation();
//       try {
//         if (longitude && latitude != 0) {
//           await getTime();
//           await getAddress();
//           // await getPrayerTimes();
//           await console.log(data?.data[0]);
//           await getDate();
//           await console.log("lat" + longitude, latitude);
//         }
//       } catch (error) {
//         console.error(error);
//       }
//       // await getDate();

//       // await setisLoading(false);
//     };
//     if (loading()) {
//       setisLoading(false);
//     }
//     // loading();

//     return () => {
//       // this now gets called when the component unmounts
//     };
//   }, [longitude, latitude, dispatch]);

//   // if (data.loading) {
//   //   console.log("masukk");
//   // } else {
//   //   console.log("masukk 22");
//   //   getDate();
//   // }
//   console.log(data);
//   return (
//     // <>{JSON.stringify(data)}</>

//     <ScrollView style={styles.mainContainer}>
//       <StatusBar backgroundColor={"#9ad3bc"} />
//       <Header
//         location={address}
//         prayers={data}
//         title="asar"
//         time={dateState.toLocaleString("en-US", {
//           hour: "numeric",
//           minute: "numeric",
//           hour12: false,
//         })}
//       />

//       <View
//         style={{
//           // flexDirection: "row",
//           // justifyContent: "space-between",
//           // paddingVertical: 5,
//           top: -40,
//         }}
//       >
//         <DatePrayer
//           location={address}
//           date={prayerTime?.date}
//           loading={isLoading}
//         />
//         <>{JSON.stringify(data.loading)}</>
//         <>{JSON.stringify(data.data[(0, 1)])}</>
//       </View>
//       <View style={styles.prayerCardContainer}>
//         <SchedulePrayer
//           location={address}
//           prayers={prayerTime?.timings}
//           loading={isLoading}
//         />
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
//     top: -15,
//   },
// });

// /* eslint-disable react-hooks/exhaustive-deps */
// // import React, { useState, useEffect, useRef, Fragment } from "react";
// // import {
// //   View,
// //   Text,
// //   FlatList,
// //   StyleSheet,
// //   StatusBar,
// //   Share,
// //   TouchableNativeFeedback,
// //   ToastAndroid,
// // } from "react-native";

// // function QuranDetail(props) {
// //   const refRBSheet = useRef();
// //   const [rbSheetData, setRbSheetData] = useState({});

// //   useEffect(() => {
// //     renderDetailSurah();
// //   }, []);
// //   const [prayerTime, setPrayerTime] = useState(undefined);
// //   const [latitude, setLatitude] = useState(0);
// //   const [longitude, setLongitude] = useState(0);
// //   const [address, setAddress] = useState("---");
// //   const [isLoading, setisLoading] = useState(true);
// //   const [dateState, setDateState] = useState(new Date());

// //   const dispatch = useDispatch();
// //   const data = useSelector((state) => state.prayerTime);
// //   const getCurrentLocation = async () => {
// //     try {
// //       await Geolocation.getCurrentPosition(
// //         (info) => {
// //           setLongitude(info.coords.longitude);
// //           setLatitude(info.coords.latitude);
// //         },
// //         (error) => {
// //           console.log(error.code, error.message);
// //         },
// //         { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
// //       );
// //     } catch (error) {
// //       console.log("Error : ", error);
// //     }
// //   };
// //   const getPrayerTimes = async () => {
// //     try {
// //       const tgl = moment().unix();
// //       const response = await axios.get(
// //         "http://api.aladhan.com/v1/timings/" +
// //           tgl.toString() +
// //           "?latitude=" +
// //           latitude +
// //           "&longitude=" +
// //           longitude +
// //           "&method=2"
// //       );
// //       console.log(response.data.data);
// //       setPrayerTime(response.data.data);
// //       await setisLoading(false);
// //     } catch (error) {
// //       console.error(error);
// //       await setisLoading(true);
// //     }
// //   };
// //   const getAddress = async () => {
// //     const accessToken =
// //       "pk.eyJ1IjoiaXJmYW5wdWxlIiwiYSI6ImNqdnpxbHFvbzAzM3UzeWxrcWtkbTVhamIifQ.TJM77G3WOEIOIYzk_IiWKQ";
// //     try {
// //       const response = await axios.get(
// //         "https://api.mapbox.com/geocoding/v5/mapbox.places/" +
// //           longitude +
// //           "," +
// //           latitude +
// //           ".json?types=place&access_token=" +
// //           accessToken
// //       );
// //       // console.log(response.data);
// //       setAddress(response.data.features[0]?.place_name);
// //     } catch (error) {
// //       console.error(error);
// //     }
// //   };

// //   const getTime = () => {
// //     const lat = latitude;
// //     const long = longitude;
// //     const payload = { long, lat, getMonth, getYear };
// //     dispatch(getPrayerTime(payload));
// //   };

// //   const getDate = (
// //     params = { date: getDay + "-" + getMonth + "-" + getYear, type: 0 }
// //   ) => {
// //     console.log(params);
// //     const { date, type } = params;
// //     console.log(data);
// //     // const dateUpdate = moment(date, "DD-MM-YYYY")
// //     //   .add(type, "days")
// //     //   .format("DD-MM-YYYY");
// //     // const getMonth = moment(date, "DD-MM-YYYY").add(type, "days").format("MM");
// //     // const getYear = moment(date, "DD-MM-YYYY").add(type, "days").format("YYYY");
// //     // const dateOk = data?.data.filter(
// //     //   (element) => element.date.gregorian.date == dateUpdate
// //     // );
// //     // console.log(getMonth);

// //     // if (dateOk[0] == undefined) {
// //     //   const payload = { long, lat, getMonth, getYear };
// //     //   // await dispatch(getPrayerTime(payload));
// //     //   // await dateFilter();
// //     // } else {
// //     //   setPrayerTime(dateOk[0]?.timings);
// //     //   setPrayerDate(dateOk[0]?.date);
// //     // }

// //     // return dateOk;
// //   };

// //   const quranOptions = [
// //     {
// //       icon: "play",
// //       title: "Mainkan Surat",
// //       action: () => null,
// //     },
// //     {
// //       icon: "book-open-variant",
// //       title: "Lihat Tafsir",
// //       action: () => null,
// //     },
// //     {
// //       icon: "content-copy",
// //       title: "Salin Ayat",
// //       action: () => onTapCopy(),
// //     },
// //     {
// //       icon: "share-variant",
// //       title: "Bagikan Ayat",
// //       action: () => onTapShare(),
// //     },
// //   ];

// //   const renderDetailSurah = async () => {
// //     const lat = latitude;
// //     const long = longitude;
// //     const payload = { long, lat, getMonth, getYear };
// //     dispatch(getPrayerTime(payload));
// //   };

// //   const openBottomSheet = (item) => () => {
// //     console.log(item);
// //     setRbSheetData(item);
// //     // refRBSheet.current.open();
// //   };

// //   const onTapShare = async () => {
// //     try {
// //       const result = await Share.share({
// //         // message: `${rbSheetData.aya_text}\n\n${rbSheetData.translation_aya_text}`,
// //       });
// //       if (result.action === Share.sharedAction) {
// //         if (!result.activityType) {
// //           ToastAndroid.show(
// //             "Pilih aplikasi untuk membagikan",
// //             ToastAndroid.SHORT
// //           );
// //           setTimeout(() => {
// //             // refRBSheet.current.close();
// //           }, 0);
// //         }
// //       }
// //     } catch (error) {
// //       // error
// //     }
// //   };

// //   const onTapCopy = () => {
// //     // console.log(rbSheetData);
// //     Clipboard
// //       .setString
// //       // `${rbSheetData.aya_text}\n\n${rbSheetData.translation_aya_text}`
// //       ();
// //     ToastAndroid.show("Ayat disalin", ToastAndroid.SHORT);
// //     // refRBSheet.current.close();
// //   };

// //   const listHeaderComponent = () => {
// //     const { navigation } = props;

// //     // const surahId = get(navigation, "state.params.dataSurah.id", "");

// //     switch (surahId) {
// //       case Constants.DATA_SURAH.AL_FATIHAH:
// //         return null;
// //       case Constants.DATA_SURAH.AL_TAUBAH:
// //         return null;
// //       default:
// //         return <Basmallah />;
// //     }
// //   };

// //   const renderCardContent = ({ item }) => {
// //     return (
// //       <CardAyatList
// //         ayatNumber={item?.aya_number}
// //         ayatText={item?.aya_text}
// //         ayatTranslate={item?.translation_aya_text}
// //         onPress={openBottomSheet(item)}
// //       />
// //     );
// //   };

// //   const renderQuranOptions = () => {
// //     const { navigation } = props;
// //     // const surahName = get(navigation, "state.params.dataSurah.surat_name", "");
// //     return (
// //       <View style={Styles.bsContainer}>
// //         <StatusBar
// //           backgroundColor={Colors.statusbarModal}
// //           barStyle="dark-content"
// //           animated
// //         />
// //         <Text style={Styles.bsTextInfo}>
// //           {/* QS. {surahName}: Ayat {rbSheetData.aya_number} */}
// //         </Text>
// //         {quranOptions.map((item, i) => (
// //           <TouchableNativeFeedback onPress={item.action} key={i}>
// //             <View style={Styles.bsItemContainer}>
// //               <Icon name={item.icon} size={24} color="black" />
// //               <Text style={Styles.bsItemText}>{item.title}</Text>
// //             </View>
// //           </TouchableNativeFeedback>
// //         ))}
// //       </View>
// //     );
// //   };

// //   const renderBottomSheet = () => {
// //     return <View>{JSON.stringify(rbSheetData)}</View>;
// //   };

// //   const renderData = () => {
// //     const { dataAyat, refreshing } = props;
// //     return (
// //       // <FlatList
// //       //   data={dataAyat}
// //       //   // keyExtractor={keyExtractor}
// //       //   renderItem={renderCardContent}
// //       //   refreshing={refreshing}
// //       //   onRefresh={renderDetailSurah}
// //       //   ItemSeparatorComponent={Separator}
// //       //   showsVerticalScrollIndicator={false}
// //       //   ListHeaderComponent={listHeaderComponent}
// //       // />
// //       <View>kjkl</View>
// //     );
// //   };

// //   return data?.isLoading ? (
// //     <>
// //       <Text>loading...</Text>
// //     </>
// //   ) : (
// //     <Fragment>
// //       {renderData()}
// //       {renderBottomSheet()}
// //     </Fragment>
// //   );
// // }

// // QuranDetail.navigationOptions = ({
// //   navigation: {
// //     state: {
// //       params: { dataSurah },
// //     },
// //   },
// // }) => {
// //   const suratName = dataSurah.surat_name;
// //   const suratArabic = dataSurah.surat_text;
// //   const suratTranslate = dataSurah.surat_terjemahan;
// //   const countAyat = dataSurah.count_ayat;
// //   return {
// //     headerTitle: (
// //       <HeaderSurahDetail
// //         suratName={suratName}
// //         suratArabic={suratArabic}
// //         suratTranslate={suratTranslate}
// //         countAyat={countAyat}
// //       />
// //     ),
// //   };
// // };

// // const Styles = StyleSheet.create({
// //   bsContainer: {
// //     flex: 1,
// //     marginTop: 20,
// //   },
// //   bsItemContainer: {
// //     flexDirection: "row",
// //     paddingVertical: 16,
// //     paddingHorizontal: 20,
// //     alignItems: "center",
// //   },
// //   bsItemText: {
// //     fontSize: 15,
// //     paddingLeft: 16,
// //     // fontFamily: FontType.regular,
// //   },
// //   bsTextInfo: {
// //     textAlign: "center",
// //     // fontFamily: FontType.bold,
// //     paddingBottom: 20,
// //   },
// // });

// // export default QuranDetail;

import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import Geolocation from "react-native-geolocation-service";
import { getPrayerTime } from "../../redux/actions/prayerTime";
import moment from "moment";
import axios from "axios";
import { ScrollView, StatusBar, StyleSheet, Text, View } from "react-native";

import { getDay, getMonth, getYear } from "../../utils/helpers";
import { useSelector, useDispatch } from "react-redux";

// import Header from "../prayerTime/headerPrayer";
import SchedulePrayer from "./schedulePrayer";
import DatePrayer from "./datePrayer";
import { Button } from "react-native-paper";

export const index = (props) => {
  const { getPrayerTime, data } = props;
  const [prayerTime, setPrayerTime] = useState(undefined);
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);
  const [address, setAddress] = useState("---");
  const [isLoading, setisLoading] = useState(true);
  const [dateState, setDateState] = useState(new Date());

  const getCurrentLocation = async () => {
    console.log("1.1");
    try {
      await Geolocation.getCurrentPosition(
        (info) => {
          setLongitude(info.coords.longitude);
          setLatitude(info.coords.latitude);
        },
        (error) => {
          console.log(error.code, error.message);
        },
        { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
      );
    } catch (error) {
      console.log("Error : ", error);
    }
  };
  const getAddress = async () => {
    console.log("1.2");
    const accessToken =
      "pk.eyJ1IjoiaXJmYW5wdWxlIiwiYSI6ImNqdnpxbHFvbzAzM3UzeWxrcWtkbTVhamIifQ.TJM77G3WOEIOIYzk_IiWKQ";
    try {
      const response = await axios.get(
        "https://api.mapbox.com/geocoding/v5/mapbox.places/" +
          longitude +
          "," +
          latitude +
          ".json?types=place&access_token=" +
          accessToken
      );
      // console.log(response.data);
      setAddress(response.data.features[0]?.place_name);
    } catch (error) {
      console.error(error);
    }
  };
  const getTime = () => {
    console.log("1.3");
    const lat = latitude;
    const long = longitude;
    const payload = { long, lat, getMonth, getYear };
    getPrayerTime(payload);
  };

  const getDate = (
    params = { date: getDay + "-" + getMonth + "-" + getYear, type: 0 }
  ) => {
    console.log(params);
    const { date, type } = params;
    console.log("masuk cek data");
    // console.log(data);
    const dateUpdate = moment(date, "DD-MM-YYYY")
      .add(type, "days")
      .format("DD-MM-YYYY");
    const getMonth = moment(date, "DD-MM-YYYY").add(type, "days").format("MM");
    const getYear = moment(date, "DD-MM-YYYY").add(type, "days").format("YYYY");
    const dateOk = data?.filter(
      (element) => element.date.gregorian.date == dateUpdate
    );

    console.log(dateOk);
    if (dateOk[0] == undefined) {
      // const payload = { long, lat, getMonth, getYear };
      // await dispatch(getPrayerTime(payload));
      // await dateFilter();
    } else {
      setPrayerTime(dateOk[0]);
      // console.log(dateOk[0]);
    }
    return dateOk;
  };
  useEffect(() => {
    const loading = async () => {
      await getCurrentLocation();
      try {
        if (longitude && latitude != 0) {
          await getTime();
          await getAddress();
          await console.log(data);
          await getDate();
          await console.log("lat" + longitude, latitude);
        }
      } catch (error) {
        console.error(error);
      }
    };
    if (loading()) {
      setisLoading(false);
    }
    return () => {};
  }, [longitude, latitude]);

  return (
    <>
      {JSON.stringify(props.loading)}

      {/* {JSON.stringify(prayerTime)} */}
      <Button
        onPress={() =>
          // onPressa(getYear + "-" + getMonth + "-" + getDay, )
          getDate({
            date: getDay + "-" + getMonth + "-" + getYear,
            type: "0",
          })
        }
      >
        jkl
        {/* {JSON.stringify(prayerDate)} */}
        {/* {JSON.stringify(prayerTime)} */}
      </Button>
      <View style={styles.mainContainer}>
        <StatusBar backgroundColor={"#9ad3bc"} />
        <Header
          location={address}
          prayers={data}
          title="asar"
          time={dateState.toLocaleString("en-US", {
            hour: "numeric",
            minute: "numeric",
            hour12: false,
          })}
        />

        <View
          style={{
            // flexDirection: "row",
            // justifyContent: "space-between",
            // paddingVertical: 5,
            top: -40,
          }}
        >
          <DatePrayer date={prayerTime} loading={isLoading} action={getDate} />
          <>{JSON.stringify(data.loading)}</>
          {/* <>{JSON.stringify(data.data[(0, 1)])}</> */}
        </View>
        <View style={styles.prayerCardContainer}>
          <SchedulePrayer
            date={prayerTime}
            loading={isLoading}
            action={getDate}
          />
        </View>
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingBottom: 20,
  },
  containerHeader: {
    // flex: 2,
  },
  containerDate: {
    top: -40,
    // flex: 2,
  },
  containerTime: {
    // flex: 2,
  },
});
const mapStateToProps = (state) => ({
  data: state.prayerTime.data,
  loading: state.prayerTime.loading,
  refreshing: state.prayerTime.refreshing,
});

const mapDispatchToProps = (dispatch) => ({
  getPrayerTime: (payload) => dispatch(getPrayerTime(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(index);
