import React, {useState, useEffect} from 'react';
import {ScrollView, StatusBar, StyleSheet, Text, View} from 'react-native';

import CompassHeading from 'react-native-compass-heading';
import Geolocation from '@react-native-community/geolocation';
import moment from 'moment';
import axios from 'axios';

import Header from '../../components/headerPrayer';
import DatePrayer from './datePrayer';
import SchedulePrayer from './schedulePrayer';

const App = () => {
  //// inisiasi variable
  const [compassHeading, setCompassHeading] = useState(0);
  const [isLoading, setisLoading] = useState(true);
  const [prayerTime, setPrayerTime] = useState(undefined);
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);
  const [address, setAddress] = useState('---');

  const getLocation = () => {
    Geolocation.getCurrentPosition(info => {
      let {latitude, longitude} = info.coords;
      setLatitude(latitude); //// memasukan ke variable state latitude
      setLongitude(longitude); //// memasukan ke variable state longitude
      // setDerajatKiblat(bearing(latitude, longitude).toString().substr(0, 3)); //// memasukan ke variable state derajat kiblat
    });
  };
  const getPrayerTime = async () => {
    try {
      const tgl = moment().unix();
      const response = await axios.get(
        'http://api.aladhan.com/v1/timings/' +
          tgl.toString() +
          '?latitude=' +
          latitude +
          '&longitude=' +
          longitude +
          '&method=2',
      );
      setPrayerTime(response.data.data);
      await setisLoading(false);
    } catch (error) {
      console.error(error);
      await setisLoading(true);
    }
  };
  const getAddress = async () => {
    const accessToken =
      'pk.eyJ1IjoiaXJmYW5wdWxlIiwiYSI6ImNqdnpxbHFvbzAzM3UzeWxrcWtkbTVhamIifQ.TJM77G3WOEIOIYzk_IiWKQ';
    try {
      const response = await axios.get(
        'https://api.mapbox.com/geocoding/v5/mapbox.places/' +
          longitude +
          ',' +
          latitude +
          '.json?types=place&access_token=' +
          accessToken,
      );
      console.log(response.data);
      setAddress(response.data.features[0]?.place_name);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    const degree_update_rate = 0.5;

    // fungsi mengambil lokasi longitude latitude kita
    getLocation();
    getPrayerTime();
    getAddress();

    return () => {
      //   CompassHeading.stop();
    };
  }, [longitude]);

  return (
    // <View style={styles.container}>
    //   <View style={styles.body}>
    //     <Text style={styles._text}>Mengarah {compassHeading}°</Text>
    //     <Text style={[styles._text, {textAlign: 'center'}]}>
    //       Latitude {latitude} {'\n'} Longitude {longitude}
    //     </Text>
    //   </View>
    // </View>
    <ScrollView style={styles.mainContainer}>
      <StatusBar backgroundColor={'#9ad3bc'} />
      <Header location={address} prayers={prayerTime?.timings} title="asar" />
      <View
        style={{
          top: -40,
        }}>
        <DatePrayer
          location={address}
          date={prayerTime?.date}
          loading={isLoading}
        />
      </View>
      <View style={styles.prayerCardContainer}>
        <SchedulePrayer
          location={address}
          prayers={prayerTime?.timings}
          loading={isLoading}
        />
      </View>
    </ScrollView>
  );
};

// const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  body: {
    flex: 0.7,
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  _text: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default App;
