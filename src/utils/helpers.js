import { Dimensions } from "react-native";
// import NetInfo from "@react-native-community/netinfo";
// import ExtraDimensions from "react-native-extra-dimensions-android";

import moment from "moment";
import { Constants } from "./constans";

const { BASE_WIDTH, BASE_HEIGHT } = Constants.BASE_DIMENSIONS;

const deviceWidth = Dimensions.get("window").width;
const deviceHeight = Dimensions.get("window").height;

const horizontalScale = (size) => (deviceWidth / BASE_WIDTH) * size;
const verticalScale = (size) => (deviceHeight / BASE_HEIGHT) * size;

const keyExtractor = (list, index) => index.toString();

// const isNetworkConnected = () => {
//   return new Promise((resolve, reject) => {
//     NetInfo.fetch().then((state) => {
//       const isConnected = state.isConnected;
//       if (isConnected) {
//         resolve(isConnected);
//       }
//       reject(isConnected);
//     });
//   });
// };

const getDay = moment().format("DD");
const getMonth = moment().format("MM");
const getYear = moment().format("YYYY");
const getYear2 = (params) => {
  console.log("asa " + JSON.stringify(params));
  return "aa";
};
const getMonth2 = (params) => {
  console.log("asa " + JSON.stringify(params));
  return "aa";
};
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export {
  keyExtractor,
  horizontalScale,
  verticalScale,
  deviceWidth,
  deviceHeight,
  getMonth,
  getYear,
  getDay,
  delay,
};
