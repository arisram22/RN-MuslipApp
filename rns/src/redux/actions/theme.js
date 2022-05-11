// import {Constants} from '../../utils/constans';
// import {SET_THEME_DARK, SET_THEME_LIGHT} from './actionTypes';

// const setTheme = payload => async dispatch => {
//   if (payload.theme === Constants.THEME.LIGHT) {
//     // console.log("set dark");
//     dispatch({
//       type: SET_THEME_DARK,
//       dispatch: 'aaa',
//     });
//   } else {
//     dispatch({
//       type: SET_THEME_LIGHT,
//     });
//   }
// };

// export {setTheme};

import {Constants} from '../../utils/constans';
import {SET_THEME_DARK, SET_THEME_LIGHT} from './actionTypes';

const setTheme = payload => async dispatch => {
  if (payload.theme === Constants.THEME.LIGHT) {
    // console.log("set dark");
    dispatch({
      type: SET_THEME_DARK,
      dispatch: 'aaa',
    });
  } else {
    dispatch({
      type: SET_THEME_LIGHT,
    });
  }
};

export {setTheme};
