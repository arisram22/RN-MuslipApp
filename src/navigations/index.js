// import React from 'react';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';

// import MainTab from './mainTabNavigator';
// import SuratDetail from '../screens/quran/Detail';
// // import Tasbih from '../screens/tasbih';
// // import Splash from '../screens/splash';
// import Test from '../screens/splash';

// // import {StackHeaderStyle} from '../const/styles';

// const Stack = createNativeStackNavigator();

// const Navigator = () => {
//   return (
//     // <Stack.Navigator screenOptions={StackHeaderStyle}>
//     <Stack.Navigator>
//       {/* <Stack.Screen
//           name="Splash"
//           component={Splash}
//           options={{headerShown: false}}
//         /> */}

//       <Stack.Screen
//         name="Main"
//         component={MainTab}
//         options={{
//           headerShown: false,
//         }}
//       />
//       {/* <Stack.Screen name="Surat" component={Test} /> */}
//       {/* <Stack.Screen name="Tasbih" component={Tasbih} /> */}
//       <Stack.Screen name="SuratDetail" component={SuratDetail} />
//     </Stack.Navigator>
//   );
// };

// export default Navigator;

// // import * as React from 'react';
// // import {Text, View} from 'react-native';
// // // import {NavigationContainer} from '@react-navigation/native';
// // import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// // import {createNativeStackNavigator} from '@react-navigation/native-stack';
// // const Stack = createNativeStackNavigator();
// // import Test from '../screens/prayerTime/index';
// // import Splash from '../screens/splash';

// // function HomeScreen() {
// //   return (
// //     <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
// //       <Text>Home!</Text>
// //     </View>
// //   );
// // }

// // function SettingsScreen() {
// //   return (
// //     <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
// //       <Text>Settings!</Text>
// //     </View>
// //   );
// // }

// // const Tab = createBottomTabNavigator();

// // export default function App() {
// //   return (
// //     <Stack.Navigator>
// //       <Stack.Screen name="Splash" component={Splash} />
// //       <Stack.Screen name="Test" component={Test} />
// //       {/* <Stack.Screen name="Home" component={HomeScreen} />
// //       <Stack.Screen name="Settings" component={SettingsScreen} /> */}
// //     </Stack.Navigator>
// //   );
// // }

import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  NavigationContainer,
  DarkTheme as NavigationDarkTheme,
  DefaultTheme as NavigationDefaultTheme,
} from '@react-navigation/native';
import {
  DarkTheme as PaperDarkTheme,
  DefaultTheme as PaperDefaultTheme,
  Provider as PaperProvider,
} from 'react-native-paper';
import {useSelector} from 'react-redux';

import {Colors as themeColor} from '../themes/colors';

// import { useColorScheme } from "react-native";
import MainTab from './mainTabNavigator';
// import Quran from "../screen/settings";
// import QuranDetail from "../screen/quran/Detail";

// combining theme
const CombinedDefaultTheme = {
  ...PaperDefaultTheme,
  ...NavigationDefaultTheme,
  colors: {
    ...NavigationDefaultTheme.colors,
    ...PaperDefaultTheme.colors,
    ...themeColor.light,
  },
};
const CombinedDarkTheme = {
  ...PaperDarkTheme,
  ...NavigationDarkTheme,
  colors: {
    ...NavigationDarkTheme.colors,
    ...PaperDarkTheme.colors,
    ...themeColor.dark,
  },
};

const Stack = createNativeStackNavigator();

const Navigator = () => {
  // // ngkut setting
  // const scheme = useColorScheme();

  const Theme = useSelector(state => state.theme);
  let theme = Theme.mode ? CombinedDarkTheme : CombinedDefaultTheme;

  return (
    <PaperProvider theme={theme}>
      <NavigationContainer theme={theme}>
        {/* <NavigationContainer> */}
        <Stack.Navigator>
          {/* <Stack.Screen name="Quran" component={Quran} />
          <Stack.Screen name="QuranDetail" component={QuranDetail} /> */}
          <Stack.Screen
            name="Main"
            component={MainTab}
            options={{
              headerShown: false,
            }}
          />
          {/* <Stack.Screen name="Surat" component={Surat} />
        <Stack.Screen name="Tasbih" component={Tasbih} />
      <Stack.Screen name="SuratDetail" component={SuratDetail} /> */}
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
};

export default Navigator;
