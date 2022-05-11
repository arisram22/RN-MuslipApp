import React from 'react';
import {StyleSheet, View, Image, TouchableOpacity} from 'react-native';
// import SkeletonContent from "react-native-skeleton-content";
import moment from 'moment';
import Icon from 'react-native-vector-icons/FontAwesome';
import IconE from 'react-native-vector-icons/Entypo';
import IconI from 'react-native-vector-icons/Ionicons';
import IconAnt from 'react-native-vector-icons/AntDesign';
import {Card, TouchableRipple, Text} from 'react-native-paper';
import {useEffect, useState} from 'react';

const SchedulePrayer = props => {
  // console.log(props);
  const {data, loading} = props;
  const [dateShow, setDateShow] = useState();
  useEffect(() => {
    setDateShow(data?.timings);
  }, [data]);
  // console.log(dateShow);

  // if (props.data == undefined) {
  //   console.log("As");
  //   console.log(() => props.action());
  // } else {
  //   console.log("a");
  // }
  const hijri = dateShow?.hijri;
  const georgian = dateShow?.gregorian;
  return (
    <Card style={styles.mainContainer}>
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
        {/* <View style={styles.wrapperJadwal}>
          <Text style={styles.textJadwal}>Imsak</Text>
          <View style={{ flexDirection: "row" }}>
            <Text style={[styles.textJadwal, { fontWeight: "600" }]}>
              {"10".toUpperCase()}
            </Text>
            <IconI
              name="md-alarm"
              color="black"
              size={20}
              style={{ paddingRight: 15 }}
            />
          </View>
        </View> */}
        <JadwalComponent
          title="Imsak"
          time={dateShow?.Imsak}
          next={dateShow?.Fajr}
        />
        <JadwalComponent
          title="Shubuh"
          time={dateShow?.Fajr}
          next={dateShow?.Dhuhr}
        />
        <JadwalComponent
          title="Dzuhur"
          time={dateShow?.Dhuhr}
          next={dateShow?.Asr}
        />
        <JadwalComponent
          title="Ashar"
          time={dateShow?.Asr}
          next={dateShow?.Maghrib}
        />
        <JadwalComponent
          title="Maghrib"
          time={dateShow?.Maghrib}
          next={dateShow?.Isha}
        />
        <JadwalComponent
          title="Isya"
          time={dateShow?.Isha}
          next={dateShow?.Fajr}
        />
        {/* </SkeletonContent> */}
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    marginHorizontal: 32,
    padding: 16,
    borderRadius: 16,
    // backgroundColor: "rgba(5, 113, 48, 0.15)",
    // backgroundColor: "rgba(2, 176, 40, 0.22)",5, 113, 48
    elevation: 16,
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
    paddingBottom: 5,
  },
  prayItemActive: {
    flexDirection: 'row',
    marginTop: 6,
    marginHorizontal: 8,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 5,
    // borderBottomColor: "#16a596",
    borderBottomWidth: 1,
    paddingBottom: 5,
  },
  titleItem: {
    fontSize: 15,
    flex: 1,
    // color: "#16a596",
  },
  titleItemActive: {
    fontSize: 17,
    flex: 1,
    // color: "#16a596",
    fontWeight: 'bold',
  },
  timeItem: {
    fontSize: 15,
    // color: "#16a596",
  },
  timeItemActive: {
    fontSize: 17,
    // color: "#16a596",
    fontWeight: 'bold',
  },
  horizontalSeparator: {
    marginHorizontal: 8,
  },
  textJadwal: {
    paddingHorizontal: 15,
    // color: "#E9ECEF",
    fontSize: 16,
    fontWeight: 'bold',
  },
  wrapperJadwal: {
    marginTop: 10,
    backgroundColor: 'rgba(25, 110, 55, 0.3)',
    alignItems: 'center',
    width: 100 + '%',
    height: 50,
    borderRadius: 10,
    justifyContent: 'space-between',
    flexDirection: 'row',
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
  // console.log("waktu", active, title);

  return (
    <>
      {active ? (
        <TouchableRipple>
          <View style={styles.prayItemActive}>
            <Text style={styles.titleItemActive}>{title}</Text>
            <Text style={styles.timeItemActive}>{time}</Text>
            <View>
              <Text style={styles.horizontalSeparator}></Text>
            </View>
            <TouchableOpacity>
              <Icon name="bell" size={18} color="#92A473" />
            </TouchableOpacity>
          </View>
        </TouchableRipple>
      ) : (
        <TouchableRipple>
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
        </TouchableRipple>
      )}
    </>
  );
};
const JadwalComponent3 = ({title = 'default', time = '00:00', next}) => {
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
          <View style={{flex: 3, marginTop: 20}}>
            <View style={styles.wrapperJadwal}>
              <Text style={styles.textJadwal}>{title}</Text>
              <View style={{flexDirection: 'row'}}>
                <Text style={[styles.textJadwal, {fontWeight: '600'}]}>
                  {time.toUpperCase()}
                </Text>
                {/* <IconI
                  name="md-alarm"
                  color="black"
                  size={20}
                  style={{ paddingRight: 15 }}
                /> */}
                <TouchableOpacity>
                  <IconI
                    name="md-alarm"
                    size={20}
                    color="#92A473"
                    style={{paddingRight: 15}}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      ) : (
        <View>
          <View style={{flex: 3, marginTop: 20}}>
            <View style={styles.wrapperJadwal}>
              <Text style={styles.textJadwal}>{title}</Text>
              <View style={{flexDirection: 'row'}}>
                <Text style={[styles.textJadwal, {fontWeight: '600'}]}>
                  {time.toUpperCase()}
                </Text>
                {/* <IconI
                  name="md-alarm"
                  color="black"
                  size={20}
                  style={{ paddingRight: 15 }}
                /> */}
                <TouchableOpacity>
                  <IconI
                    name="md-alarm"
                    size={20}
                    color="#92A473"
                    style={{paddingRight: 15}}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      )}
    </>
  );
};

export default SchedulePrayer;

// import { View, Text, StyleSheet } from "react-native";
// import React from "react";

// const schedulePrayer = () => {
//   return (
//     <View>
//       <View style={{ flex: 3, marginTop: 20 }}>
//         <View style={styles.wrapperJadwal}>
//           <Text style={styles.textJadwal}>Imsak</Text>
//           <View style={{ flexDirection: "row" }}>
//             <Text style={[styles.textJadwal, { fontWeight: "600" }]}>
//               {"10".toUpperCase()}
//             </Text>
//             <IconI
//               name="md-alarm"
//               color="black"
//               size={20}
//               style={{ paddingRight: 15 }}
//             />
//           </View>
//         </View>
//       </View>
//     </View>
//   );
// };

const styless = StyleSheet.create({
  container: {
    flex: 1,
    fontFamily: 'Neo_Sans',
    // color: "#6576",
    backgroundColor: '#057130',
  },
  title: {
    color: '#E9ECEF',
    fontSize: 30,
    fontWeight: '700',
  },
  subtitle: {
    color: '#E9ECEF',
    fontSize: 14,
  },
  textJadwal: {
    paddingHorizontal: 15,
    color: '#E9ECEF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  wrapperIcon: {
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    borderRadius: 50,
    width: 35,
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
  },
  wrapperJadwal: {
    marginTop: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    alignItems: 'center',
    width: 100 + '%',
    height: 50,
    borderRadius: 10,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  wrapperInfo: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  titleInfo: {
    color: '#E9ECEF',
    fontSize: 16,
    marginHorizontal: 10,
    fontWeight: 'bold',
    marginHorizontal: 10,
    fontWeight: 'bold',
  },
  subInfo: {
    color: '#E9ECEF',
    fontSize: 14,
    marginHorizontal: 10,
    fontWeight: 'bold',
    marginHorizontal: 10,
    fontSize: 10,
    fontWeight: '100',
  },
});
// export default schedulePrayer;
