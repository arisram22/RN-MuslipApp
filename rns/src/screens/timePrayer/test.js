import React, { useState, useEffect } from "react";
import { ScrollView, StyleSheet, View, Dimensions } from "react-native";

import Geolocation from "@react-native-community/geolocation";
import moment from "moment";
import axios from "axios";
import { Button, Text, useTheme } from "react-native-paper";
import { useSelector, useDispatch } from "react-redux";

import { getPrayerTime } from "../../redux/actions/prayerTime";

import Header from "../../component/headerPrayer";
import DatePrayer from "./datePrayer";
import SchedulePrayer from "./schedulePrayer";
import { getDay, getMonth, getYear, getYear2 } from "../../utils/helpers";
import { set } from "react-native-reanimated";

const { width, height } = Dimensions.get("window");

const App = () => {
  //// inisiasi variable
  const [isLoading, setisLoading] = useState(true);
  const [prayerTime, setPrayerTime] = useState(undefined);
  const [lat, setLatitude] = useState(0);
  const [long, setLongitude] = useState(0);
  const [address, setAddress] = useState("---");
  const [prayerDate, setPrayerDate] = useState();
  const { colors } = useTheme();
  const dispatch = useDispatch();

  // console.log("sas" + JSON.stringify(useTheme()));
  const data = useSelector((state) => state.prayerTime);
  function delay(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
  const getDate = async (
    params = { date: getDay + "-" + getMonth + "-" + getYear, type: 0 }
  ) => {
    const { date, type } = params;
    const dateUpdate = moment(date, "DD-MM-YYYY")
      .add(type, "days")
      .format("DD-MM-YYYY");
    const getMonth = moment(date, "DD-MM-YYYY").add(type, "days").format("MM");
    const getYear = moment(date, "DD-MM-YYYY").add(type, "days").format("YYYY");
    const dateOk = data?.data.filter(
      (element) => element.date.gregorian.date == dateUpdate
    );
    console.log(getMonth);

    if (dateOk[0] == undefined) {
      const payload = { long, lat, getMonth, getYear };
      await dispatch(getPrayerTime(payload));
      // await dateFilter();
    } else {
      setPrayerTime(dateOk[0]?.timings);
      setPrayerDate(dateOk[0]?.date);
    }

    // return dateOk;
  };
  const getLocation = () => {
    Geolocation.getCurrentPosition((info) => {
      let { latitude, longitude } = info.coords;
      setLatitude(latitude); //// memasukan ke variable state latitude
      setLongitude(longitude); //// memasukan ke variable state longitude
      // setDerajatKiblat(bearing(latitude, longitude).toString().substr(0, 3)); //// memasukan ke variable state derajat kiblat
    });
  };
  const getAddress = async () => {
    const accessToken =
      "pk.eyJ1IjoiaXJmYW5wdWxlIiwiYSI6ImNqdnpxbHFvbzAzM3UzeWxrcWtkbTVhamIifQ.TJM77G3WOEIOIYzk_IiWKQ";
    try {
      const response = await axios.get(
        "https://api.mapbox.com/geocoding/v5/mapbox.places/" +
          long +
          "," +
          lat +
          ".json?types=place&access_token=" +
          accessToken
      );
      // console.log(response.data);
      setAddress(response.data.features[0]?.place_name);
      // setPrayerDate(dateFilter);
    } catch (error) {
      console.error(error);
    }
  };
  const getTime = async () => {
    await getLocation();
    await getAddress();
    const payload = { long, lat, getMonth, getYear };
    await dispatch(getPrayerTime(payload));
  };
  const getPrayerTimess = async () => {
    try {
      const tgl = moment().unix();
      const response = await axios.get(
        "https://api.pray.zone/v2/times/this_week.json?longitude=" +
          long +
          "&latitude=" +
          lat +
          "&elevation=333"
      );
      setPrayerTime(response.data.data);
      await setisLoading(false);
      console.log(response);
    } catch (error) {
      console.error(error);
      await setisLoading(true);
    }
  };

  // const dateFilter = getDate()

  // const dateFilter = data?.data.filter(
  //   (element) => element.date.gregorian.date == moment().format("DD-MM-YYYY")
  // );
  // console.log(data?.data.length > 0);
  // console.log(dateFilter);
  useEffect(() => {
    getTime();
    // getPrayerTimess();
    return () => {};
  }, [long, lat]);

  console.log(data);

  return (
    <ScrollView style={styles.mainContainer}>
      {/* <StatusBar backgroundColor={"#9ad3bc"} /> */}
      <View style={styles.containerHeader}>
        <Header
          location={address}
          prayers={prayerTime?.timings}
          colors={colors}
        />
      </View>
      <View style={styles.containerDate}>
        <Text>{getYear}</Text>
        <Text>{getMonth}</Text>
        <Text>{getDay}</Text>
        <DatePrayer
          location={address}
          date={""}
          date2={prayerDate}
          loading={isLoading}
          action={getDate}
        />
      </View>
      <View style={styles.containerTime}>
        <SchedulePrayer prayers={prayerTime} loading={isLoading} />
      </View>
      <Button
        onPress={() =>
          // onPressa(getYear + "-" + getMonth + "-" + getDay, )
          getDate({
            date: getYear + "-" + getMonth + "-" + getDay,
            type: "0",
          })
        }
      >
        {JSON.stringify(prayerDate)}
        {JSON.stringify(prayerTime)}
      </Button>
    </ScrollView>
  );
};

// const {width, height} = Dimensions.get('window');

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

export default App;
