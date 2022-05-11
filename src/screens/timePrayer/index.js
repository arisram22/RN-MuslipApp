import React, {useState, useEffect} from 'react';
import {ScrollView, StyleSheet, View, Dimensions} from 'react-native';

import Geolocation from '@react-native-community/geolocation';
import moment from 'moment';
import axios from 'axios';
import {Button, Text, useTheme} from 'react-native-paper';
import {useSelector, useDispatch} from 'react-redux';

import {getPrayerTime} from '../../redux/actions/prayerTime';

import Header from '../../components/headerPrayer copy';
import DatePrayer from './datePrayer';
import SchedulePrayer from './schedulePrayer';
import {getDay, getMonth, getYear, getYear2} from '../../utils/helpers';

const {width, height} = Dimensions.get('window');

const Index = () => {
  //// inisiasi variable
  const [isLoading, setisLoading] = useState(true);
  const [prayerTime, setPrayerTime] = useState(undefined);
  const [lat, setLatitude] = useState(0);
  const [long, setLongitude] = useState(0);
  const [address, setAddress] = useState('---');
  const {colors} = useTheme();
  const dispatch = useDispatch();
  const data = useSelector(state => state.prayerTime);

  const getDate = async (
    params = {date: getDay + '-' + getMonth + '-' + getYear, type: 0},
  ) => {
    const {date, type} = params;
    const dateUpdate = moment(date, 'DD-MM-YYYY')
      .add(type, 'days')
      .format('DD-MM-YYYY');
    console.log('masuk');
    console.log(params);
    console.log(data);
    const getMonth = moment(date, 'DD-MM-YYYY').add(type, 'days').format('MM');
    const getYear = moment(date, 'DD-MM-YYYY').add(type, 'days').format('YYYY');
    const dateOk = data?.data.filter(
      element => element.date.gregorian.date == dateUpdate,
    );
    console.log(dateOk);
    console.log(dateOk[0]);
    if (dateOk[0] == undefined) {
      // const payload = { long, lat, getMonth, getYear };
      // await dispatch(getPrayerTime(payload));
      // await dateFilter();
    } else {
      setPrayerTime(dateOk[0]);
    }
    return dateOk[0];
  };
  //
  const getCurrentLocation = async () => {
    // console.log("1.1");
    try {
      await Geolocation.getCurrentPosition(
        info => {
          setLongitude(info.coords.longitude);
          setLatitude(info.coords.latitude);
        },
        error => {
          console.log(error.code, error.message);
        },
        {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
      );
    } catch (error) {
      console.log('Error : ', error);
    }
  };
  ///
  const getAddress = async () => {
    const accessToken =
      'pk.eyJ1IjoiaXJmYW5wdWxlIiwiYSI6ImNqdnpxbHFvbzAzM3UzeWxrcWtkbTVhamIifQ.TJM77G3WOEIOIYzk_IiWKQ';
    try {
      const response = await axios.get(
        'https://api.mapbox.com/geocoding/v5/mapbox.places/' +
          long +
          ',' +
          lat +
          '.json?types=place&access_token=' +
          accessToken,
      );
      // console.log(response.data);
      setAddress(response.data.features[0]?.place_name);
      // setPrayerDate(dateFilter);
    } catch (error) {
      console.error(error);
    }
  };
  ///
  const getTime = () => {
    const payload = {long, lat, getMonth, getYear};
    dispatch(getPrayerTime(payload));
  };

  useEffect(() => {
    const loading = async () => {
      await getCurrentLocation();
      if (long && lat != 0) {
        await getTime();
        await getAddress();
        await console.log('lat' + long, lat);
      }
    };
    if (loading()) {
      setisLoading(false);
    }
    return () => {};
  }, [lat]);

  useEffect(() => {
    console.log('datakuu', data);
    getDate();
  }, [data.data]);

  return (
    <ScrollView style={styles.mainContainer}>
      {/* <StatusBar backgroundColor={"#9ad3bc"} /> */}
      <View style={styles.containerHeader}>
        <Header
          location={address}
          data={prayerTime}
          loading={isLoading}
          action={getDate}
        />
      </View>
      <View style={styles.containerDate}>
        <DatePrayer data={prayerTime} loading={isLoading} action={getDate} />
      </View>
      <View style={styles.containerTime}>
        <SchedulePrayer
          data={prayerTime}
          loading={isLoading}
          action={getDate}
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
    paddingBottom: 20,
  },
  mainContainer: {
    height: '100%',
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
    // top: -30,
    marginBottom: 30,
  },
});

export default Index;
