import React from "react";
import { useTheme } from "react-native-paper";

function getColor() {
  const { colors } = useTheme;
  return colors;
}

export default getColor;
