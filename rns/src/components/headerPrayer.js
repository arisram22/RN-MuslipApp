import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import moment from 'moment';
// import CountDown from "react-native-countdown-component";

const Header = props => {
  const hijri = props.date?.hijri;
  const georgian = props.date?.gregorian;
  var today = new Date();
  var active = {};
  var timeNow = moment(today).format('HH:mm');
  const [totalDuration, setTotalDuration] = useState(0);

  var Imsak = {
    title: 'Imsak',
    time: props.prayers?.Imsak,
    next: props.prayers?.Fajr,
  };
  var Shubuh = {
    title: 'Shubuh',
    time: props.prayers?.Fajr,
    next: props.prayers?.Dhuhr,
  };
  var Dzuhur = {
    title: 'Dzuhur',
    time: props.prayers?.Dhuhr,
    next: props.prayers?.Asr,
  };
  var Ashar = {
    title: 'Ashar',
    time: props.prayers?.Asr,
    next: props.prayers?.Maghrib,
  };
  var Maghrib = {
    title: 'Maghrib',
    time: props.prayers?.Maghrib,
    next: props.prayers?.Isha,
  };
  var Isya = {
    title: 'Isya',
    time: props.prayers?.Isha,
    next: props.prayers?.Fajr,
  };

  if (Shubuh.time <= timeNow && timeNow < Shubuh.next) {
    active = Shubuh;
  } else if (Imsak.time <= timeNow && timeNow < Imsak.next) {
    active = Imsak;
  } else if (Dzuhur.time <= timeNow && timeNow < Dzuhur.next) {
    active = Dzuhur;
  } else if (Ashar.time <= timeNow && timeNow < Ashar.next) {
    active = Ashar;
  } else if (Maghrib.time <= timeNow && timeNow < Maghrib.next) {
    active = Maghrib;
  } else if (Isya.time <= timeNow && timeNow < Isya.next) {
    active = Isya;
  } else {
    active = {
      title: '-----',
      time: '--:--',
      next: props.prayers?.Fajr,
    };
  }

  // console.log("ac ", props.prayers, "active ".active);
  console.log('ac aa', active.next);
  return (
    <View style={styles.mainContainer}>
      <View style={styles.locationContainer}>
        <Icon name="map-marker" size={20} color={'#fff'} />
        <Text style={styles.locationText}>{props.location}</Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.titleText}> {active.title} </Text>
        <Text style={styles.subtitleText}> {active.time} </Text>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  mainContainer: {
    padding: 0,
    backgroundColor: '#9ad3bc',
    aspectRatio: 2.5,
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
  },
  locationText: {
    fontWeight: 'bold',
    marginLeft: 8,
    color: '#16a596',
  },
});
