import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Quran from '../screens/quran';
import Sholat from '../screens/prayerTime';
import Sholat2 from '../screens/timePrayer';
import Kiblat from '../screens/kiblat';
// import Kiblat from '../screens/kiblat/Compass';
// import Other from '../screens/other';

import {StackHeaderStyle} from '../const/styles';
import customHeader from '../components/customHeader';

const Tab = createBottomTabNavigator();

const MainTabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={customHeader}>
      <Tab.Screen
        name="Sholat"
        component={Sholat2}
        options={{
          headerShown: false,
        }}
      />
      {/* <Tab.Screen name="Al-Quran" component={Quran} /> */}
      {/* <Tab.Screen name="Kiblat" component={Kiblat} /> */}
      <Tab.Screen name="Lainnya" component={Setting} />
    </Tab.Navigator>
  );
};

import {StyleSheet, Text, View} from 'react-native';
import {Switch, Card, Title} from 'react-native-paper';
import {useSelector, useDispatch} from 'react-redux';
import {setTheme} from '../redux/actions/theme';
const Setting = () => {
  const dispatch = useDispatch();
  const Theme = useSelector(state => state.theme);
  const onToggleSwitch = async () => {
    await dispatch(setTheme(Theme));
  };

  console.log(Theme);

  return (
    <View>
      <Card>
        <Title>title</Title>
        <Text>Setting</Text>
        <Switch value={Theme.mode} onValueChange={onToggleSwitch} />
      </Card>
    </View>
  );
};

export default MainTabNavigator;
