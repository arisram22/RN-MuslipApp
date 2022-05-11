import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
// import SkeletonContent from 'react-native-skeleton-content';
// import Icon from "react-native-vector-icons/FontAwesome";

const DatePrayer = props => {
  // console.log(props);
  const hijri = props.date?.hijri;
  const georgian = props.date?.gregorian;
  return (
    <View style={styles.mainContainer}>
      <View style={styles.cardContainer}>
        {/* <View style={styles.locationContainer}>
          <Icon name="map-marker" size={20} color="#92A473" />
          <Text style={styles.locationText}>{props.location}</Text>
        </View> */}
        {/* <SkeletonContent
          containerStyle={{flex: 1}}
          isLoading={props.loading}
          layout={[
            {key: 'someId', width: 200, height: 20, marginBottom: 6},
            {key: 'someId2', width: 200, height: 20, marginBottom: 6},
          ]}> */}
        <View style={styles.textContainer}>
          <Text style={styles.dateText}>
            {georgian?.weekday?.en} ,{georgian?.day} {georgian?.month?.en}
            {georgian?.year}
          </Text>
          <Text style={styles.dateTextHijri}>
            {hijri?.day} {hijri?.month?.en} {hijri?.year}
          </Text>
        </View>
        {/* </SkeletonContent> */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    marginHorizontal: 32,
    padding: 16,
    borderRadius: 16,
    backgroundColor: '#fbf6f0',
    elevation: 6,
  },
  cardContainer: {},
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  locationImage: {
    height: 16,
    width: 16,
  },
  locationText: {
    fontWeight: 'bold',
    marginLeft: 8,
    color: '#16a596',
  },
  prayItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleItem: {
    fontSize: 15,
    flex: 1,
    color: '#16a596',
  },
  timeItem: {
    fontSize: 15,
    color: '#16a596',
  },
  horizontalSeparator: {
    marginHorizontal: 8,
  },
  textContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  titleText: {
    fontSize: 25,
    color: '#e8e8e8',
  },
  subtitleText: {
    fontSize: 40,
    color: '#e8e8e8',
    fontWeight: 'bold',
  },
  dateText: {
    fontSize: 16,
    // color: "#e8e8e8",
    fontWeight: 'bold',
  },
  dateTextHijri: {
    fontSize: 14,
    // color: "#e8e8e3",
  },
});

export default DatePrayer;
