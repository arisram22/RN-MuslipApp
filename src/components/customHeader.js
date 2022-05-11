import React from "react";
import { Appbar } from "react-native-paper";

const customHeader = (props) => {
  let colors = [];
  colors = props.options.colors;
  let darkMode = props.options.darkMode;
  console.log(darkMode);
  return (
    <Appbar.Header
      //   style={showCustomColor ? styles.customColor : null}
      theme={
        {
          // mode: showExactTheme ? "exact"  : "adaptive",
          // mode: "adaptive",
        }
      }
    >
      {/* <Appbar.BackAction onPress={() => navigation.goBack()} /> */}
      <Appbar.Content
        style={{
          alignItems: "center",
          justifyContent: "center",
        }}
        titleStyle={{
          fontWeight: 700,
          // fontSize: 30,
        }}
        title={props.route.name}
        // subtitle={"Subtitle"}
        // {darkMode = true ? 'exact' : 'adaptive',}
        color={darkMode ? colors.primary : colors.background}
      />
      {/* {showSearchIcon && <Appbar.Action icon="magnify" onPress={() => {}} />}
      {showMoreIcon && <Appbar.Action icon={MORE_ICON} onPress={() => {}} />} */}
    </Appbar.Header>
  );
};

export default customHeader;
