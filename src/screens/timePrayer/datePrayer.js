import React, {useEffect, useState} from 'react';
import {StyleSheet, View, Image, TouchableOpacity} from 'react-native';
import {Card, Text, TouchableRipple, useTheme} from 'react-native-paper';
// import SkeletonContent from 'react-native-skeleton-content';
// import Icon from "react-native-vector-icons/FontAwesome";
import Colors from '../../utils/getColor';

const DatePrayer = props => {
  console.log(props);
  const {data, action} = props;
  const hijri = data?.date?.hijri;
  const georgian = data?.date?.gregorian;
  return (
    <>
      <Card style={styles.mainContainer}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <TouchableRipple
            onPress={() =>
              props.action({
                date: georgian?.date,
                type: '-1',
              })
            }
            // onPress={() => props.action("yy")}
            rippleColor="rgba(0, 0, 0, .32)"
            style={{
              // height: 100 + '%',
              justifyContent: 'center',
            }}>
            <Text>{'<'} </Text>
          </TouchableRipple>

          <View style={styles.textContainer}>
            <Text style={styles.dateText}>
              {georgian?.weekday?.en} ,{georgian?.day} {georgian?.month?.en}
              {georgian?.year}
              {/* {georgian?.date} */}
            </Text>
            <Text style={styles.dateTextHijri}>
              {hijri?.day} {hijri?.month?.en} {hijri?.year}
            </Text>
          </View>

          <TouchableRipple
            onPress={() =>
              props.action({
                date: georgian?.date,
                type: '1',
              })
            }
            // onPress={() => props.action("yy")}
            rippleColor="rgba(0, 0, 0, .32)"
            style={{
              // height: 100 + '%',
              justifyContent: 'center',
            }}>
            <Text>{'>'} </Text>
          </TouchableRipple>
        </View>
      </Card>
    </>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    marginHorizontal: 32,
    padding: 16,
    borderRadius: 16,
    // elevation: 6,
  },
  cardContainer: {},
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  locationText: {
    fontWeight: 'bold',
    marginLeft: 8,
    // color: '#16a596',
  },
  textContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    // flex: 1,
  },
  dateText: {
    fontSize: 16,
    // color: "#e8e8e8",
    fontWeight: 'bold',
  },
  dateTextHijri: {
    fontSize: 14,
    marginTop: 9,
    // color: "#e8e8e3",
  },
});

export default DatePrayer;
