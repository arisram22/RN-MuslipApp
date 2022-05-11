import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, Dimensions} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import moment from 'moment';
import {Card} from 'react-native-paper';
// import CountDown from "react-native-countdown-component";

const Header = props => {
  const hijri = props.date?.hijri;
  const georgian = props.date?.gregorian;
  const colors = props.colors;
  var today = new Date();
  var active = {};
  var timeNow = moment(today).format('HH:mm');
  const [totalDuration, setTotalDuration] = useState(0);

  var Imsak = {
    title: 'Imsak',
    time: props.data?.timings?.Imsak,
    next: props.data?.timings?.Fajr,
  };
  var Shubuh = {
    title: 'Shubuh',
    time: props.data?.timings?.Fajr,
    next: props.data?.timings?.Dhuhr,
  };
  var Dzuhur = {
    title: 'Dzuhur',
    time: props.data?.timings?.Dhuhr,
    next: props.data?.timings?.Asr,
  };
  var Ashar = {
    title: 'Ashar',
    time: props.data?.timings?.Asr,
    next: props.data?.timings?.Maghrib,
  };
  var Maghrib = {
    title: 'Maghrib',
    time: props.data?.timings?.Maghrib,
    next: props.data?.timings?.Isha,
  };
  var Isya = {
    title: 'Isya',
    time: props.data?.timings?.Isha,
    next: props.data?.timings?.Fajr,
  };

  // if (Shubuh.time <= timeNow && timeNow < Shubuh.next) {
  //   active = Shubuh;
  // } else if (Imsak.time <= timeNow && timeNow < Imsak.next) {
  //   active = Imsak;
  // } else if (Dzuhur.time <= timeNow && timeNow < Dzuhur.next) {
  //   active = Dzuhur;
  // } else if (Ashar.time <= timeNow && timeNow < Ashar.next) {
  //   active = Ashar;
  // } else if (Maghrib.time <= timeNow && timeNow < Maghrib.next) {
  //   active = Maghrib;
  // } else if (Isya.time <= timeNow && timeNow < Isya.next) {
  //   active = Isya;
  // } else {
  //   active = {
  //     title: "Waktu Sholat",
  //     // time: "--:--",
  //     next: props.data?.timings?.Fajr,
  //   };
  // }

  if (Shubuh.time) {
    console.log('sub');
    active = Shubuh;
  } else if (Imsak.time) {
    console.log('im');
    active = Imsak;
  } else if (Dzuhur.time) {
    active = Dzuhur;
    console.log('dzu');
  } else if (Ashar.time) {
    active = Ashar;
    console.log('asr');
  } else if (Maghrib.time) {
    active = Maghrib;
    console.log('mag');
  } else if (Isya.time < timeNow) {
    console.log('is');

    active = Isya;
  } else {
    console.log('err');

    active = {
      title: 'Waktu Sholat',
      // time: "--:--",
      next: props.data?.timings?.Fajr,
    };
  }
  const subuh = moment(Shubuh.time);
  console.log(subuh);
  // console.log(Shubuh.time);
  // console.log("ac ", props.data?.timings, "active ".active);
  // console.log('ac aa', active.next);
  return (
    // <Card>
    <View style={styles.mainContainer}>
      {/* <Card> */}
      <View style={styles.locationContainer}>
        <Icon name="map-marker" size={20} color={'#fff'} />
        <Text style={styles.locationText}>{props.location}</Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.titleText}> {active.title} </Text>
        <Text style={styles.subtitleText}> {active.time} </Text>
        {/* <Text>{Shubuh.time}</Text> */}
      </View>
      {/* </Card> */}
    </View>
    // </Card>
  );
};
const {width, height} = Dimensions.get('window');
export default Header;

const styles = StyleSheet.create({
  mainContainer: {
    padding: 0,
    // backgroundColor: "#9ad3bc",
    backgroundColor: '#48A43F',
    // backgroundColor: "rgba(5, 113, 48,0.22)",
    // aspectRatio: 8.5,
    height: height / 4,
  },
  textContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    top: -20,
  },
  titleText: {
    fontSize: 25,
    color: '#e8e8e8',
  },
  subtitleText: {
    fontSize: 30,
    color: '#e8e8e8',
    fontWeight: 'bold',
  },
  locationContainer: {
    // flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-start',
    // justifyContent: "",
    paddingRight: 6,
    padding: 5,
    color: '#48A43F',
  },
  locationText: {
    fontWeight: 'bold',
    marginLeft: 8,
    // color: "#16a596",
  },
});
