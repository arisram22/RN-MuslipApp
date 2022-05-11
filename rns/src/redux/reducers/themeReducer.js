import { Constants } from "../../utils/constans";
import { SET_THEME_LIGHT, SET_THEME_DARK } from "../actions/actionTypes";
import { Colors } from "../../themes/colors";

const initialState = {
  theme: Constants.THEME.LIGHT,
  Color: Colors.light,
  mode: false,
};

const Theme = (state = initialState, action) => {
  // console.log(action);
  switch (action.type) {
    case SET_THEME_LIGHT:
      return {
        ...state,
        theme: Constants.THEME.LIGHT,
        mode: false,
        Color: Colors.light,
      };
    case SET_THEME_DARK:
      return {
        ...state,
        theme: Constants.THEME.DARK,
        mode: true,
        Color: Colors.dark,
      };
    default:
      return state;
  }
};

export { Theme };
