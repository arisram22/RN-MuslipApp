import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
// import SkeletonContent from "react-native-skeleton-content";
import moment from 'moment';
import Icon from 'react-native-vector-icons/FontAwesome';

const SchedulePrayer = props => {
  // console.log(props);
  return (
    <View style={styles.mainContainer}>
      <View style={styles.cardContainer}>
        {/* <SkeletonContent
          containerStyle={{ flex: 1 }}
          isLoading={props.loading}
          layout={[
            { key: "someId", width: 300, height: 20, marginBottom: 6 },
            { key: "someId2", width: 300, height: 20, marginBottom: 6 },
            { key: "someId3", width: 300, height: 20, marginBottom: 6 },
            { key: "someId4", width: 300, height: 20, marginBottom: 6 },
            { key: "someId5", width: 300, height: 20, marginBottom: 6 },
            { key: "someId6", width: 300, height: 20, marginBottom: 6 },
          ]}
        > */}
        <JadwalComponent
          title="Imsak"
          time={props.prayers?.Imsak}
          next={props.prayers?.Fajr}
        />
        <JadwalComponent
          title="Shubuh"
          time={props.prayers?.Fajr}
          next={props.prayers?.Dhuhr}
        />
        <JadwalComponent
          title="Dzuhur"
          time={props.prayers?.Dhuhr}
          next={props.prayers?.Asr}
        />
        <JadwalComponent
          title="Ashar"
          time={props.prayers?.Asr}
          next={props.prayers?.Maghrib}
        />
        <JadwalComponent
          title="Maghrib"
          time={props.prayers?.Maghrib}
          next={props.prayers?.Isha}
        />
        <JadwalComponent
          title="Isya"
          time={props.prayers?.Isha}
          next={props.prayers?.Fajr}
        />
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
    marginTop: 6,
    marginHorizontal: 8,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 5,
  },
  prayItemActive: {
    flexDirection: 'row',
    marginTop: 6,
    marginHorizontal: 8,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 5,
    borderBottomColor: '#16a596',
    borderBottomWidth: 1,
  },
  titleItem: {
    fontSize: 15,
    flex: 1,
    color: '#16a596',
  },
  titleItemActive: {
    fontSize: 17,
    flex: 1,
    color: '#16a596',
    fontWeight: 'bold',
  },
  timeItem: {
    fontSize: 15,
    color: '#16a596',
  },
  timeItemActive: {
    fontSize: 17,
    color: '#16a596',
    fontWeight: 'bold',
  },
  horizontalSeparator: {
    marginHorizontal: 8,
  },
});

const JadwalComponent = ({title = 'default', time = '00:00', next}) => {
  var today = new Date();
  var active = false;
  var timeNow = moment(today).format('HH:mm');
  // if (time <= timeNow && timeNow < next) {
  //   active = true;
  // }
  if (time < timeNow && timeNow <= next) {
    active = true;
  }
  console.log('waktu', active, title);

  return (
    <>
      {active ? (
        <View>
          <View style={styles.prayItemActive}>
            <Text style={styles.titleItemActive}>{title}</Text>
            <Text style={styles.timeItemActive}>{time}</Text>
            <View style={styles.horizontalSeparator} />
            <TouchableOpacity>
              <Icon name="bell" size={18} color="#92A473" />
            </TouchableOpacity>
          </View>
        </View>
      ) : (
        <View style={styles.active}>
          <View style={styles.prayItem}>
            <Text style={styles.titleItem}>{title}</Text>
            <Text style={styles.timeItem}>{time}</Text>
            <View style={styles.horizontalSeparator} />
            <TouchableOpacity>
              <Icon name="bell" size={18} color="#92A473" />
            </TouchableOpacity>
          </View>
        </View>
      )}
    </>
  );
};

export default SchedulePrayer;
