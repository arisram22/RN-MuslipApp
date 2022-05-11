// import React, { useEffect, useState } from "react";

// import {
//   StyleSheet,
//   Text,
//   View,
//   FlatList,
//   ImageBackground,
// } from "react-native";
// import axios from "axios";
// import { ListItem, Avatar } from "react-native-elements";
// import Number from "../../assets/img/number.png";

// const About = ({ navigation }) => {
//   const [surat, setSurat] = useState(undefined);
//   useEffect(() => {
//     axios.get("https://api.npoint.io/99c279bb173a6e28359c/data").then((res) => {
//       // this.setState({ surat: res.data });
//       setSurat(res.data);
//       console.log(res.data);
//     });
//   }, []);

//   const keyExtractor = (item, key) => key.toString();
//   const renderItem = ({ item }) => {
//     return (
//       <ListItem
//         key={item.nomor}
//         bottomDivider
//         onPress={() =>
//           navigation.navigate("SuratDetail", {
//             id: item.nomor,
//             surat: item.nama,
//           })
//         }
//       >
//         <ImageBackground style={styles.number} source={Number}>
//           <Text>{item.nomor}</Text>
//         </ImageBackground>
//         <ListItem.Content>
//           <View style={styles.flex}>
//             <ListItem.Title>{item.nama}</ListItem.Title>
//             <ListItem.Title>{item.asma}</ListItem.Title>
//           </View>
//           <ListItem.Subtitle>
//             {item.ayat} Ayat Arti: {item.arti}
//           </ListItem.Subtitle>
//         </ListItem.Content>
//       </ListItem>
//     );
//   };
//   return (
//     <View style={styles.center}>
//       {/* <Text>This quran</Text>
//       <Button
//         title="Go to About Screen"
//         onPress={() => navigation.navigate("Surat")} // We added an onPress event which would navigate to the About screen
//       /> */}
//       <FlatList
//         keyExtractor={keyExtractor}
//         data={surat}
//         renderItem={renderItem}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     backgroundColor: "white",
//     flex: 1,
//   },
//   number: {
//     width: 44,
//     height: 44,
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   flex: {
//     width: "100%",
//     flexDirection: "row",
//     justifyContent: "space-between",
//   },
// });

// export default About;
import React, {useEffect} from 'react';
import {useTheme as useMode} from '@react-navigation/native';
import {
  FlatList,
  View,
  StyleSheet,
  ListItem,
  ImageBackground,
  Text,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {Switch, TouchableRipple} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Number from '../../assets/img/number.png';
import {getQuranList} from '../../redux/actions/quranList';
import {setTheme} from '../../redux/actions/theme';
// import { Colors } from "../../themes/colors";
// import Surat from '../../data/surat.json';
import {Routes} from '../../navigations/routes';

const Balance = props => {
  const {navigation} = props;
  const dispatch = useDispatch();
  useEffect(() => {
    getDataQuran();
  }, []);
  const surahList = useSelector(state => state.quranList);
  // console.log("aa" + JSON.stringify(Surat.data));
  const Theme = useSelector(state => state.theme);
  const onToggleSwitch = async () => {
    await dispatch(setTheme(Theme));
  };

  console.log(Theme);

  const getDataQuran = async () => {
    await dispatch(getQuranList());
  };

  const goToDetailpage = dataSurah => {
    navigation.navigate(Routes.QuranDetail, {dataSurah});
  };
  const keyExtractor = (list, index) => index.toString();
  // let colors = ["#c6feb6", "#eafee4"];
  // let colors2 = ["#c6feb6", "black"];
  const colors = useMode().colors;
  const renderItem = ({item}) => {
    return (
      <>
        <TouchableRipple
          onPress={() => goToDetailpage(item)}
          // rippleColor={Colors.rippleColor}
          centered>
          <View
          // style={
          //   (styles.CardStyle,
          //   { backgroundColor: colors[item.id % colors.length] })
          // }
          ></View>
        </TouchableRipple>
      </>
    );
  };
  return (
    <>
      {/* <p>{JSON.stringify(useSelector((state) => state.quranList?.data))}</p> */}
      <View style={styles.container}>
        <FlatList
          data={Surat.data}
          // data={surahList.data}
          keyExtractor={keyExtractor}
          renderItem={renderItem}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
  },
  CardStyle: {},
  number: {
    width: 44,
    height: 44,
    justifyContent: 'center',
    alignItems: 'center',
  },
  flex: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
export default Balance;
