import React, {useEffect, useState} from 'react';
import {ScrollView, StatusBar, StyleSheet, Text, View} from 'react-native';
import Geolocation from '@react-native-community/geolocation';
import moment from 'moment';
import axios from 'axios';

import Header from '../../components/headerPrayer';
import SchedulePrayer from './schedulePrayer';
import DatePrayer from './datePrayer';

const App = () => {
  const [prayerTime, setPrayerTime] = useState(undefined);
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);
  const [address, setAddress] = useState('---');
  const [isLoading, setisLoading] = useState(true);
  const [dateState, setDateState] = useState(new Date());

  // const getCurrentLocation = () => {
  //   Geolocation.getCurrentPosition(
  //     info => {
  //       setLatitude(info.coords.latitude);
  //       setLongitude(info.coords.longitude);
  //     },
  //     error => {
  //       console.log(error.code, error.message);
  //     },
  //     {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
  //   );
  // };
  // const getPrayerTime = async () => {
  //   try {
  //     const tgl = moment().unix();
  //     const response = await axios.get(
  //       'http://api.aladhan.com/v1/timings/' +
  //         tgl.toString() +
  //         '?latitude=' +
  //         latitude +
  //         '&longitude=' +
  //         longitude +
  //         '&method=2',
  //     );
  //     console.log(response.data.data);
  //     setPrayerTime(response.data.data);
  //     await setisLoading(false);
  //   } catch (error) {
  //     console.error(error);
  //     await setisLoading(true);
  //   }
  // };
  // const getAddress = async () => {
  //   const accessToken =
  //     'pk.eyJ1IjoiaXJmYW5wdWxlIiwiYSI6ImNqdnpxbHFvbzAzM3UzeWxrcWtkbTVhamIifQ.TJM77G3WOEIOIYzk_IiWKQ';
  //   try {
  //     const response = await axios.get(
  //       'https://api.mapbox.com/geocoding/v5/mapbox.places/' +
  //         longitude +
  //         ',' +
  //         latitude +
  //         '.json?types=place&access_token=' +
  //         accessToken,
  //     );
  //     console.log(response.data);
  //     setAddress(response.data.features[0]?.place_name);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  // useEffect(() => {
  //   const loading = async () => {
  //     try {
  //       // await getCurrentLocation();
  //       // await getAddress();
  //       // await getPrayerTime();
  //       console.log('ok');
  //     } catch (error) {
  //       console.error(error);
  //     }

  //     // await setisLoading(false);
  //   };
  //   if (loading()) {
  //     // setisLoading(false);
  //   }
  //   // loading();

  //   return () => {
  //     // this now gets called when the component unmounts
  //   };
  // }, []);

  return (
    // <ScrollView style={styles.mainContainer}>
    //   <StatusBar backgroundColor={'#9ad3bc'} />
    //   {/* <Header
    //     location={address}
    //     prayers={prayerTime?.timings}
    //     title="asar"
    //     time={dateState.toLocaleString('en-US', {
    //       hour: 'numeric',
    //       minute: 'numeric',
    //       hour12: false,
    //     })}
    //   />
    //   <View
    //     style={{
    //       // flexDirection: "row",
    //       // justifyContent: "space-between",
    //       // paddingVertical: 5,
    //       top: -40,
    //     }}>
    //     <DatePrayer
    //       location={address}
    //       date={prayerTime?.date}
    //       loading={isLoading}
    //     />
    //   </View>
    //   <View style={styles.prayerCardContainer}>
    //     <SchedulePrayer
    //       location={address}
    //       prayers={prayerTime?.timings}
    //       loading={isLoading}
    //     />
    //   </View> */}
    // </ScrollView>

    <>
      <Text>test</Text>
    </>
  );
};

export default App;

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#e8e8e8',
    flexGrow: 1,
  },
  prayerCardContainer: {
    top: -15,
  },
});
